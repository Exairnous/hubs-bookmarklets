javascript:
if (typeof material_storage === 'undefined') {
    var material_storage = {};
};

if (!('type' in material_storage) ||material_storage['type'] == 'GREYSCALE') {
    material_storage['type'] = 'GREYSCALE';

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh) {
            if (!(o.uuid in material_storage)) {
                material_storage[o.uuid] = {
                    'color': o.material.color,
                    'map': o.material.map,
                    'vertexColors': o.material.vertexColors,
                };
            }
        }
    });

    var color = new THREE.Color( 0x666666 );

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh) {
            if (o.uuid in material_storage) {
                o.material.color = color;
                o.material.map = null;
                o.material.vertexColors = false;
                o.material.needsUpdate = true;
            }
        }
    });
}
