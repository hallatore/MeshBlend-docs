---
order: 5
---

# General Support

Unreal is used in many ways and not all use cases have been validated yet. Materials need to render depth to the GBuffer to work. 
<br>
Check on Discord to see if your use case has been tested by someone already.

### Gaming / General

:white_check_mark: **Launcher version** - Works with both launcher and source built versions of Unreal Engine.
<br>
:white_check_mark: **Unreal Engine 5.3 and up**
<br>
:white_check_mark: **Anything based on UMeshComponent (StaticMesh, SkeletalMesh, InstancedStaticMesh, DynamicMesh, +++)**
<br>
:white_check_mark: **PCG, BPs, PLAs, ISM/HISM, Foliage, Landscape Grass, +++**
<br>
:white_check_mark: **Opaque materials (Surface, SubSurfaceScattering, Two-Sided, etc)**
<br>
:white_check_mark: **Nanite & Nanite displacement** - (Non Nanite works too)
<br>
:white_check_mark: **Lumen** - (Non lumen works too)
<br>
:white_check_mark: **Substrate**
<br>
:white_check_mark: **Decals & Mesh Decals** - Decals blend as if they are part of the mesh. (See demo for exact details)
<br>
:white_check_mark: **Static Meshes, Landscapes, Skeletal meshes and even particle** - As long as they are opaque and write depth
<br>
:white_check_mark: **TAA, TSR, DLSS, FSR** - Works great with any temporal AA solution, upsampling and frame generation
<br>
:white_check_mark: **SMAA, FXAA or no AA** - Can be used with non temporal AA solutions. (Use r.MeshBlend.FrameDither 0 to disable sampling alterations per frame)
<br>
:white_check_mark: **PS5, Xbox Series X|S** - Works great on consoles
<br>
:white_check_mark: **VR (Desktop, Deferred shading)** - Supported on UE5.6+
<br>
:white_check_mark: **Split/Multiscreen rendering** - Supported on UE5.6+
<br>

### Cinematics / Virtual production / Offline rendering

:white_check_mark: **Offline rendering with Spatial/Temporal Sample Count > 1** - Works great with offline rendering using sample counts instead of default AA
<br>
:white_check_mark: **Sequencer** - Use overscan for best results
<br>
:hourglass: **Virtual Production|NDisplay** - Use overscan for best results (*Note yet validated: Currently being tested on a HUGE XR Led wall*)
<br>

## Default Setup - Material AO

The default launcher version setup uses the Material AO channel to transfer data to the GBuffer. This comes with some limitations.

:x: **Static lighting** - Static lighting uses the same Material AO channel and cannot be used. Only dynamic lighting is supported
<br>
:x: **Material AO** - No mesh in the project can use Material AO. Having it hooked up will lead to a slight blur that will show up in the MeshBlend Debug View.

## Not fully validated yet / Planned for later

:microscope: **Switch, etc** - Should work, but has not been validated yet
<br>
:microscope: **No AA, FXAA, SMAA** - Works with `r.MeshBlend.FrameDither 0`, but final quality hasn't been tuned yet. 
<br>
Note: *Offline rendering with no AA using multiple Spatial/Temporal sample counts works fine.*

## Not supported

:x: **Forward shading** - Forward shading is not supported
<br>
:x: **Mobile render pass** - The mobile render pass lack the necessary gbuffer access in the PP stage
<br>
:x: **Path tracing render pass** - The path tracing pass lack the necessary gbuffers in the PP stage
<br>
:x: **Translucent materials** - Translucent materials render after and won't be affected by MeshBlend
<br>
:x: **Stuff underneath a SingleWaterLayer plane** - SingleWaterLayer is an opaque shading model. So stuff underneath it is not rendered to depth. (*But the material itself can actually blend with other meshes*)
