---
order: 10
---

# Default Setup

The default setup uses the material Ambient Occlusion channel to send data between the meshes in the scene and the shader through the GBuffer. We need a GBuffer texture to store our data, and with the launcher version of unreal we have to reuse an existing one.


## Limitations

:x: **Static lighting** - Static lighting uses the same Material AO channel and cannot be used. Only dynamic lighting is supported
<br>
:x: **Material AO** - No mesh in the project can use Material AO. Having it hooked up will lead to a slight blur that will show up in the MeshBlend Debug View.

## Shader changes

There are some shader files that needs to be modified so that the MaterialAO data values doesn't affect lighting in the scene.

After changing these you can restart the editor or hit `CTRL+SHIFT+.` to recompile shaders.


### Prevent Specular/Metalic values from modifying the GBufferAO data
```
File: <UE5_installation>\Engine\Shaders\Private\BasePassPixelShader.usf
Line: 1193
Expected text: GBuffer.GBufferAO = AOMultiBounce( Luminance( GBuffer.SpecularColor ), ShadingOcclusion.SpecOcclusion ).g;
Replace with:  //GBuffer.GBufferAO = AOMultiBounce( Luminance( GBuffer.SpecularColor ), ShadingOcclusion.SpecOcclusion ).g;
```

```
File: <UE5_installation>\Engine\Shaders\Private\MobileBasePassPixelShader.usf
Line: 604
Expected text: GBuffer.GBufferAO = AOMultiBounce(Luminance(GBuffer.SpecularColor), ShadingOcclusion.SpecOcclusion).g;
Replace with:  //GBuffer.GBufferAO = AOMultiBounce(Luminance(GBuffer.SpecularColor), ShadingOcclusion.SpecOcclusion).g;
```

### Prevent SubSurfaceScattering shading model from using GBufferAO
```
File: <UE5_installation>\Engine\Shaders\Private\ShadingModels.ush
Line: 794
Expected text: const half BackScatter = GBuffer.GBufferAO * NormalContribution / (PI * 2);
Replace with:  const half BackScatter = NormalContribution / (PI * 2);
```

### Prevent non lumen lighting from using GBufferAO
```
File: <UE5_installation>\Engine\Shaders\Private\ReflectionEnvironmentPixelShader.usf
Line: 198
Expected text: float AO = GBuffer.GBufferAO * AmbientOcclusion;
Replace with:  float AO = AmbientOcclusion;
```

```
File: <UE5_installation>\Engine\Shaders\Private\SkyLightingDiffuseShared.ush
Line: 91
Expected text: FSkyLightVisibilityData SkyVisData = GetSkyLightVisibilityData(SkyLightingNormal, GBuffer.WorldNormal, GBuffer.GBufferAO, AmbientOcclusion, BentNormal);
Replace with:  FSkyLightVisibilityData SkyVisData = GetSkyLightVisibilityData(SkyLightingNormal, GBuffer.WorldNormal, 1, AmbientOcclusion, BentNormal);
```