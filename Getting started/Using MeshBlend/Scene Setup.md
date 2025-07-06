# Scene Setup

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
- Add the `/Plugins/MeshBlend Content/PB_MeshBlend_Activator` blueprint to your level. There should be one, and only one of this actor in your level at any time.
