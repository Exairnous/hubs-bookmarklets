javascript:
AFRAME.scenes[0].object3D.traverse(o => {
    if (o.isMesh) {
        if (o.uuid in material_storage) {
            mat_prop = material_storage[o.uuid];

            if ('material' in mat_prop) {
                o.material = mat_prop['material'];
            }
            if ('map' in mat_prop) {
                o.material.map = mat_prop['map'];
            }
            if ('wireframe' in mat_prop) {
                o.material.wireframe = mat_prop['wireframe'];
            }
            if ('transparent' in mat_prop) {
                o.material.transparent = mat_prop['transparent'];
            }
            if ('reflectivity' in mat_prop) {
                o.material.reflectivity = mat_prop['reflectivity'];
            }
            if ('vertexColors' in mat_prop) {
                o.material.vertexColors = mat_prop['vertexColors'];
            }
            if ('roughness' in mat_prop) {
                o.material.roughness = mat_prop['roughness'];
            }
            if ('color' in mat_prop) {
                o.material.color = mat_prop['color'];
            }
            if ('aoMap' in mat_prop) {
                o.material.aoMap = mat_prop['aoMap'];
            }
            if ('specularMap' in mat_prop) {
                o.material.specularMap = mat_prop['specularMap'];
            }
            if ('emissive' in mat_prop) {
                o.material.emissive = mat_prop['emissive'];
            }
            if ('metalness' in mat_prop) {
                o.material.metalness = mat_prop['metalness'];
            }
            if ('bumpMap' in mat_prop) {
                o.material.bumpMap = mat_prop['bumpMap'];
            }
            if ('displacementMap' in mat_prop) {
                o.material.displacementMap = mat_prop['displacementMap'];
            }
            if ('emissiveMap' in mat_prop) {
                o.material.emissiveMap = mat_prop['emissiveMap'];
            }
            if ('metalnessMap' in mat_prop) {
                o.material.metalnessMap = mat_prop['metalnessMap'];
            }
            if ('normalMap' in mat_prop) {
                o.material.normalMap = mat_prop['normalMap'];
            }
            if ('roughnessMap' in mat_prop) {
                o.material.roughnessMap = mat_prop['roughnessMap'];
            }
            if ('material' in mat_prop) {
                o.material = mat_prop['material'];
            }
            if ('flatShading' in mat_prop) {
                o.material.flatShading = mat_prop['flatShading'];
            }
            if ('envMap' in mat_prop) {
                o.material.envMap  = mat_prop['envMap'];
            }
            if ('lightMap' in mat_prop) {
                o.material.lightMap = mat_prop['lightMap'];
            }
            if ('clearcoat' in mat_prop) {
                o.material.clearcoat = mat_prop['clearcoat'];
            }
            if ('clearcoatMap' in mat_prop) {
                o.material.clearcoatMap = mat_prop['clearcoatMap'];
            }
            if ('transmission' in mat_prop) {
                o.material.transmission = mat_prop['transmission'];
            }
            if ('transmissionMap' in mat_prop) {
                o.material.transmissionMap = mat_prop['transmissionMap'];
            }

            o.material.needsUpdate = true;
        }
    }
});

material_storage = {};
