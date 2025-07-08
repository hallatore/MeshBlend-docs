---
order: 1
---

# Rules of Blending

At it's core the MeshBlend shader works on a grayscale mask where each mesh has a value (0 - 255). Encoded in this is the **blend size** (small, medium, large, extra large) and the **blend ID**.

[/BeforeAfter/Mask_Off.png|/BeforeAfter/Mask_On.png]

## This means a couple of things

- Each blend size has a maximun 63 unique IDs. Meaning two meshes that overlap can theoretically get the same ID, and their seam won't blend. But in practice this is very rare.

- The system calculates an available blend ID based on the bounds of all the meshes overlapping it. This means that if a mesh that is blended is moving around, the chance for it to intersect with something that has the same ID is higher.
<br>
There is helper function to recalculate a blend ID at runtime if needed, and there are also 5 static ID's per blend size that can be used for special cases.

- A blended mesh has to blend with every other blended mesh it intersects with. You can't have a cliff made out of rocks that don't blend with the landscape that also has blending.

### Other notes

- The blend size is always the smallest of the two intersecting sizes. A landscape set to Large blend with a pebble set to small will result in a small blend between the two.