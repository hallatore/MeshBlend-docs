---
order: 5
---

# General Support

Unreal is used in many ways and not all use cases have been validated yet. Materials need to render depth to the GBuffer to work. 
<br>
Check on Discord to see if your use case has been tested by someone already.

:white_check_mark: **Launcher version** - Works with both launcher and source built versions of Unreal Engine.
<br>
:white_check_mark: **Opaque materials (Surface, SubSurfaceScattering, Two-Sided, etc)**
<br>
:white_check_mark: **Nanite & Nanite displacement**
<br>
:white_check_mark: **Lumen**
<br>
:white_check_mark: **Decals & Mesh Decals** - Decals blend as if they are part of the mesh. (See demo for exact details)
<br>
:white_check_mark: **Static Meshes, Landscapes, Skeletal meshes and even particle** - As long as they are opaque and write depth
<br>
:white_check_mark: **TAA, TSR, DLSS, FSR** - Works great with any temporal AA solution, upsampling and frame generation
<br>
:white_check_mark: **PS5, Xbox Series X|S** - Works great on consoles
<br>
:white_check_mark: **Sequencer** - Use overscan for best results
<br>
:hourglass: **Virtual Production|NDisplay** - Use overscan for best results (*Note yet validated: Currently being tested on a HUGE XR Led wall*)
<br>

## Not validated yet or Planned for later

:microscope: **Switch, Mobile, etc** - Should work, but has not been validated yet
<br>
:microscope: **No AA, FXAA, SMAA** - Works with `r.MeshBlend.FrameDither 0`, but final quality hasn't been tuned yet
<br>
:microscope: **VR (Deferred shading)** - Should technically work, but has not been validated yet
<br>
:hourglass: **Substrate materials** - Will be supported in a later update. (See roadmap)

## Not supported

:x: **Forward shading** - Forward shading is not supported
<br>
:x: **Translucent materials** - Translucent materials render after and won't be affected by MeshBlend
<br>
:x: **Stuff underneath a SingleWaterLayer plane** - SingleWaterLayer is an opaque shading model. So stuff underneath it is not rendered to depth. (*But the material itself can actually blend with other meshes*)