---
order: 1
---

# Common Issues

## Mesh not blending in Debug View

- Check that the mesh material has the correct material function hooked up to the Ambient Occlusion channel

## Mesh showing multiple colors in Debug View

- Check that the mesh material does not have an AO texture hooked up to the Ambient Occlusion channel. It should either be blank or have a MeshBlend Activator function hooked up

## Landscape/Landscape Grass is not blending

- Landscapes need a static blend ID and cannot be set with the helper function. See more about it in the [Setup](</Getting started/Setup.md#c-static-blend-id-on-material>)

## Mesh not blending after material update

- Toggle MeshBlend OFF/ON from the editor toolbar. This resets all meshes and their blend.


## Having issues or questions?

- Join the Discord to see what's new, and what other people are using MeshBlend for
- Check the `#meshblend-questions` or send me a DM if you're having issues

<iframe src="https://discord.com/widget?id=1279047221362294964&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>