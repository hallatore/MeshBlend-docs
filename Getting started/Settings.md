# Settings

## Console Variables

### r.MeshBlend.Enable

- Default: `1`
- Options: `0` or `1`

Toggle the plugin effect and activator off or on.

### r.MeshBlend.Visualize

- Default: `0`
- Options:
   - `0`: Visualization off
   - `1`: Visualize blend edges (white) and blend sizes.
<br>
`Small=Green, Medium=Cyan, Large=Blue, Extra Large=Red`

Debug views for the plugin. 

[/BeforeAfter/Visualize_On.png|/BeforeAfter/Visualize_Off.png]
> **Visualization On/OFF**


### Blend Size

Set the blend size for each preset size.

The blend sizes are (almost) equal to centimeters when two blending meshes lay flat next to each other. (*Intersection angle, noise, contrast, etc all affect the final blend size displayed on screen.*)

#### r.MeshBlend.Small.Size

- Default: `6`

#### r.MeshBlend.Medium.Size

- Default: `10`

#### r.MeshBlend.Large.Size

- Default: `20`

#### r.MeshBlend.ExtraLarge.Size

- Default: `30`

### Blend Min Size

The blend size is stable in world space, meaning if it's 30 cm at 1 meters away it's 30 cm at 100 meters away.

MinSize lets you tweak how the size grows after 1000 units away from the camera. 

The blend size is calculated so it's 1:1 at 1000 units from the camera. By setting MinSize to 2 it pushes this so that it remains the same pixel size at 2000 unit as it did at 1000 units.
It can be helpful to ensure seams blend at a distance without having to make them blend really large up close.

#### r.MeshBlend.Small.MinSize

- Default: `1.5`

#### r.MeshBlend.Medium.MinSize

- Default: `3.0`

#### r.MeshBlend.Large.MinSize

- Default: `3.0`

#### r.MeshBlend.ExtraLarge.MinSize

- Default: `5.0`

#### Example A - Ensure terrain blends at a distance

- Size: `30`
- MinSize: `1` and `5`

Setting MinSize to 5 the blend continues to be visible at a distance even though it's technically growing in world space.

[/BeforeAfter/MinSize_1.png|/BeforeAfter/MinSize_3.png]
> **MinSize 1 and 3 visualized**


#### Example B - Ensure something always has a small blend

- Size: `4`
- MinSize: `1` and `15`

Setting MinSize high can make it possible to keep the blend size small, while always showing a slight blend. Good if you want to hide the seam without making it feel blended.

[/BeforeAfter/MinSize_B_1.png|/BeforeAfter/MinSize_B_15.png]
> **MinSize 1 and 15 visualized**


### r.MeshBlend.DisableRestrictions

- Default: `0`
- Options:
   - `0`: Off
   - `1`: No per tick budget restrictions

Used for offline cinematics like **Sequencer** where you want every mesh to be activated from the very first frame.
Enabling this disabled the tick budget on the **MeshBlend Activator Actor**.

When using the **Movie Render Queue** you should always set `r.MeshBlend.DisableRestrictions 1`

## MeshBlend Activator Actor

### Process Budget (ms)

- Default: `0.3`

The activator ensures each mesh component in the scene has a blend ID. The blend ID is encoded into the **Custom Primitive Data** (Static Meshes), and **Per Instance Custom Data** (Instanced Static Meshes) for each component.

To ensure no frame hitching this processing operates on a strict processing budget that is the max it's allowed to use per Tick.

The blend IDs are encoded at packaging, so the activator mostly runs idle in a packaged game.

> [!NOTE]
> Setting `r.MeshBlend.DisableRestrictions 1` disables this budget.