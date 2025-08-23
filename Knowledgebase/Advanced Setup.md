---
order: 10
---

# Engine Setup

The plugin uses a GBuffer to encode data. The default setup is easiest to setup, and recommended for most projects.

## Default Setup - Material AO channel

The default setup uses the material Ambient Occlusion channel to send data between the meshes in the scene and the shader through the GBuffer. We need a GBuffer texture to store our data, and with the launcher version of unreal we have to reuse an existing one.

## Custom Setup

The plugin needs a single channel GBuffer texture to store data. The plugin doesn't care which one, and it has been made to be easily changed.

1. Enable/Modify the GBuffer channel you want to use*

2. Hook the MeshBlend material function up to the desired output instead of the Ambient Occlusion in your materials

3. Update `GetMeshBlendStencil(float2 UV)` in `MeshBlend\Shaders\MeshBlendTextures.usf` to use the desired GBuffer channel

> [!CAUTION] CAUTION*
> This is an advanced way of setting it up, and will most likely require years of experience.
> <br>
> While this is supported by the plugin, setting it up is left to the user.