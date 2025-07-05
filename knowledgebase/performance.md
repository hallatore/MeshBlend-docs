---
order: 10
---

# Performance



## How many meshes can I blend?
MeshBlend is a screen space effect. You can have 5 or 5.000.000 blended meshes in your scene without much performance impact.

## Shader performance
Shader cost is ~0.2-0.4 ms on an average PC at 1440p render resolution. There are 4 quality presets targeting offline rendering and high end PC down to Xbox Series S/low end PCs, so this can be tuned to preference.

> [!NOTE]
> Will update perf numbers closer to launch.

## Actor performance
The plugin has a MeshBlend Activator Actor that runs in the level. 
- In editor this is restricted to a max ms budget (default: 0.3 ms)
- In packaged game most of the work is pre-caluculated on packaging, so it generally just idles.