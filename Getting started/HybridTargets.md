---
title: IOS/Android/Consoles
order: 150
---

# Projects with multiple platform types

Fab plugins have a list of **PlatformAllowList** that are required and indicates what platforms it officially supports. Fab requires this to match what the plugin officially support. The plugin itself compiles on all platforms, but it just idles on unsupported platforms like mobile for example.

This unfortunately means a few things:
* The plugin can't list IOS/Android as supported platforms by default, since the product doesn't support mobile rendering
* The plugin can't list unknown third party platforms like XBOX, PS5, etc
* You need to update the uplugin file when having hybrid projects or targeting consoles

## Update MeshBlend.uplugin

If your project is targeting platforms not listed (windows, linux, mac) you need to modify the MeshBlend.uplugin file.

#### 1. Find the file located in your engine/plugins/marketplace/meshblend* folder
#### 2. In the MeshBlend modules part remove the PlatformAllowList section

Before
```
  "Modules": [
    {
      "Name": "MeshBlend",
      "Type": "Runtime",
      "LoadingPhase": "PostConfigInit",
      "PlatformAllowList": [
        "Win64",
        "Linux",
        "Mac"
      ]
    },
```

After
```
  "Modules": [
    {
      "Name": "MeshBlend",
      "Type": "Runtime",
      "LoadingPhase": "PostConfigInit"
    },
```

#### 3. Restart your project