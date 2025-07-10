---
order: 10
---

# Engine Setup

The plugin uses a GBuffer to encode data. The default setup is easiest to setup, and recommended for most projects.

## Default Setup - Material AO channel

The default setup uses the material Ambient Occlusion channel to send data between the meshes in the scene and the shader through the GBuffer. We need a GBuffer texture to store our data, and with the launcher version of unreal we have to reuse an existing one.

### Shader changes (Reference list)

> [!DANGER] Shader Patcher tool
> The shader changes are listed here as reference. Use the shader patcher tool in the [Setup](<../Getting started/Setup.md>) to update these.

**Prevent Specular/Metalic values from modifying the GBufferAO data**
```
File: <UE5_installation>\Engine\Shaders\Private\BasePassPixelShader.usf
Expected text: GBuffer.GBufferAO = AOMultiBounce( Luminance( GBuffer.SpecularColor ), ShadingOcclusion.SpecOcclusion ).g;
Replace with:  // GBuffer.GBufferAO = AOMultiBounce( Luminance( GBuffer.SpecularColor ), ShadingOcclusion.SpecOcclusion ).g;
```

```
File: <UE5_installation>\Engine\Shaders\Private\MobileBasePassPixelShader.usf
Expected text: GBuffer.GBufferAO = AOMultiBounce(Luminance(GBuffer.SpecularColor), ShadingOcclusion.SpecOcclusion).g;
Replace with:  // GBuffer.GBufferAO = AOMultiBounce(Luminance(GBuffer.SpecularColor), ShadingOcclusion.SpecOcclusion).g;
```

**Prevent SubSurfaceScattering shading model from using GBufferAO**
```
File: <UE5_installation>\Engine\Shaders\Private\ShadingModels.ush
Expected text: const half BackScatter = GBuffer.GBufferAO * NormalContribution / (PI * 2);
Replace with:  const half BackScatter = NormalContribution / (PI * 2);
```

**Prevent non lumen lighting from using GBufferAO**
```
File: <UE5_installation>\Engine\Shaders\Private\ReflectionEnvironmentPixelShader.usf
Expected text: float AO = GBuffer.GBufferAO * AmbientOcclusion;
Replace with:  float AO = AmbientOcclusion;
```

```
File: <UE5_installation>\Engine\Shaders\Private\SkyLightingDiffuseShared.ush
Expected text: FSkyLightVisibilityData SkyVisData = GetSkyLightVisibilityData(SkyLightingNormal, GBuffer.WorldNormal, GBuffer.GBufferAO, AmbientOcclusion, BentNormal);
Replace with:  FSkyLightVisibilityData SkyVisData = GetSkyLightVisibilityData(SkyLightingNormal, GBuffer.WorldNormal, 1, AmbientOcclusion, BentNormal);
```

---

## Custom Setup

The plugin needs a single channel GBuffer texture to store data. The plugin doesn't care which one, and it has been made to be easily changed.

1. Enable/Modify the GBuffer channel you want to use*

2. Hook the MeshBlend material function up to the desired output instead of the Ambient Occlusion in your materials

3. Update `GetMeshBlendStencil(float2 UV)` in `MeshBlend\Shaders\MeshBlendTextures.usf` to use the desired GBuffer channel

> [!CAUTION] CAUTION*
> This is an advanced way of setting it up, and will most likely require years of experience.
> <br>
> While this is supported by the plugin, setting it up is left to the user.