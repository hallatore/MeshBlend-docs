# Getting Started

Make sure you follow the setup guide word for word. There are some things that are easy to miss.

1. **[Setup](<Setup.md>)**

2. **[Using MeshBlend](<Using MeshBlend/index.md>)**

3. **[Blend Sizes](<Using MeshBlend/Blend Sizes.md>)**

4. **[Settings](<Settings.md>)**

Youtube video going through setting up MeshBlend in a project: https://www.youtube.com/watch?v=C8bxiYUE8TE

## Common issues

### Mesh not blending in Debug View

- Check that the mesh material has the correct material function hooked up to the Ambient Occlusion channel

### Mesh showing multiple colors in Debug View

- Check that the mesh material does not have an AO texture hooked up to the Ambient Occlusion channel. It should either be blank or have a MeshBlend Activator function hooked up

### Landscape/Landscape Grass is not blending

- Landscapes need a static blend ID and cannot be set with the helper function. See more about it in [Using MeshBlend](<Using MeshBlend/index.md>)

### Mesh not blending after material update

- Toggle MeshBlend OFF/ON from the editor toolbar. This resets all meshes and their blend.