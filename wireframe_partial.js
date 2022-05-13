javascript:
if (typeof material_storage === 'undefined') {
    var material_storage = {};
};

if (!('type' in material_storage) ||material_storage['type'] == 'WIREFRAME_PARTIAL') {
    material_storage['type'] = 'WIREFRAME_PARTIAL';

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh) {
            if (!(o.uuid in material_storage)) {
                material_storage[o.uuid] = {
                    'wireframe': o.material.wireframe,
                    'transparent': o.material.transparent,
                };
            }
        }
    });

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh) {
            if (o.uuid in material_storage) {
                o.material.wireframe = true;
                o.material.transparent = false;
                o.material.needsUpdate = true;
            }
        }
    });
}
