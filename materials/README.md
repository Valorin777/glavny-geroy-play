# Real-time PBR surfaces

Source: Poly Haven, https://polyhaven.com/license, CC0-1.0. Assets downloaded once from the official API with an identifying User-Agent. The game serves its own copies and makes no Poly Haven API calls at runtime. Full author/source/file URL/MD5/SHA256 metadata is in manifest.json. No API key, paid resource or generative render was used.

Five seamless surface sets are 1024×1024: diffuse RGB, OpenGL tangent-space normal RGB, roughness. The sky is a1K HDR radiance environment used for lighting/reflections, with background=false. All16 source files total9038964 bytes (~8.6MiB). Source dimensions: paving1.5m; plaster2.23m; wood2m; bark1m. Brick metadata conflicts (3m dimensions vs legacy1.5m scale); library begins at1.5m and must be visually checked against actual architectural references. Materials are artistic detail, not proof of historical appearance.

Integration: src/RealisticMaterials.tsx exports PBRMaterial plus PavingMaterial, PlasterMaterial, BrickMaterial, WoodMaterial, BarkMaterial, DaylightEnvironment. Supply size=[widthMetres,heightMetres] for UV0..1 surfaces or repeat=[u,v] explicitly. Color map is SRGBColorSpace, normal/roughness are NoColorSpace. Normal maps are nor_gl, so normalScale.y remains positive. No displacement/tessellation and no per-frame asset fetching. Low quality skips the normal map and limits anisotropy to2.

AO maps were deliberately not added because they require a second UV set; do not sample color as bump. Materials are dielectric metalness0. Use one tone-mapping step, moderate HDR intensity, a directional sun for shadows, and restrained ambient lighting. Confirm paving block size and plank direction at eye level, not only in a distant overhead screenshot.

Approximate full-use GPU texture budget: five sets ×3maps ×1024² ×RGBA8 ×4/3mips ≈80MiB, plus HDR/PMREM. Materials load as used; do not preload every material in a mobile scene without measuring. The renderer may allocate additional textures for shadows/postprocessing and models; this figure is not total VRAM.

Bark Brown02 (Rob Tuytel) is added for existing3D tree trunks/branches, with1m tile scale from provider dimensions. The runtime test loaded all initial surfaces + HDR with zero JS errors and a captured screenshot; no claim about complete-game mobile FPS follows from that isolated test.
