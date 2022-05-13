javascript:
if (typeof material_storage === 'undefined') {
    var material_storage = {};
};

if (!('type' in material_storage) || material_storage['type'] == 'WIREFRAME_FULL') {
    material_storage['type'] = 'WIREFRAME_FULL';

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh) {
            if (!(o.uuid in material_storage)) {
                material_storage[o.uuid] = {
                    'map': o.material.map,
                    'wireframe': o.material.wireframe,
                    'transparent': o.material.transparent,
                };
            }
        }
    });

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh) {
            if (o.uuid in material_storage) {
                o.material.map = null;
                o.material.wireframe = true;
                o.material.transparent = false;
                o.material.needsUpdate = true;
            }
        }
    });
}
