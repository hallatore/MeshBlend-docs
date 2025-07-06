---
order: 20
---


# Project Setup

- Enable MeshBlend plugin for project
- Add the following to your DefaultEngine.ini to disable static lighting and Lumen's Material.
<br>
Under [/Script/Engine.RendererSettings]
<br>
```
r.AllowStaticLighting=False
r.Lumen.ScreenProbeGather.MaterialAO=0
```
- Restart the editor

## MeshBlend Activator Actor

The Activator ensures each mesh is assign a correct blend ID. There should be one, and only one of this actor in your level at any time.

- Add the `/Plugins/MeshBlend Content/PB_MeshBlend_Activator` blueprint to your level.

> [!NOTE]
> The activator has a strict time budget per tick. The default for this is 0.3 ms and it runs during physics.
> In editor each mesh is activated at runtime. These values are calcaulted during packaging, so in a packaged build this actor is mostly idle.


## Editor Toolbar

Now that everything is set up you should see a **B** in the editor toolbar

Her you can toggle the plugin on/off, toggle debug view and open the readme widget.

> [!NOTE]
> In debug view each size is colored to visualize what blend size the mesh has.
> <br>
> `Small=Green` `Medium=Cyan` `Large=Blue` `Extra Large=Red`
> <br>
> <br>
> You can read more about this under [Blend Sizes](<Using MeshBlend/Blend Sizes.md>).