---
order: 20
---


# Setup

## 1. Enable plugin

- Enable **MeshBlend** plugin for project
- Restart editor

> [!NOTE] Editor Toolbar
> You should see a B in the editor toolbar after restart.
> <br>
> <br>
> ![MeshBlend in the editor toolbar](./Editor_Toolbar.png)


## 2. Update DefaultEngine.ini

- Open `<project>/Config/DefaultEngine.ini`
- Find the `[/Script/Engine.RendererSettings]` section
- Add the following console variables
```
r.AllowStaticLighting=False
r.Lumen.ScreenProbeGather.MaterialAO=0
```

## 3. Shader Changes

Use the shader patcher tool to make sure the material Ambient Occlusion channel doesn't affect Unreals lighting while using MeshBlend.

- Open the **MeshBlend toolbar** and **Readme**
- Click **Open Shader Patcher Tool** in the bottom left corner
- Click **Apply All**
- Click **Restart Editor**

<video controls src="./MeshBlend_Shader_Patcher.mp4" autoplay muted loop />

## 4. Add MeshBlend Activator Actor to level

The Activator ensures each mesh is assign a correct blend ID. There should be one, and only one of this actor in your level at any time.

- Add the `/Plugins/MeshBlend Content/BP_MeshBlend_Activator` blueprint to your level.