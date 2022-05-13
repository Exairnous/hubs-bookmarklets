javascript:
if (typeof material_storage === 'undefined') {
    var material_storage = {};
};

if (!('type' in material_storage) ||material_storage['type'] == 'SOLID_SHADING_FULL') {
    material_storage['type'] = 'SOLID_SHADING_FULL';

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh && !o.isTroikaText) {
            if (!(o.uuid in material_storage)) {
                material_storage[o.uuid] = {};
                mat_prop = material_storage[o.uuid];
                mat_prop['material'] = o.material;
                mat_prop['transparent'] = o.material.transparent;
                mat_prop['reflectivity'] = o.material.reflectivity;
                mat_prop['vertexColors'] = o.material.vertexColors;
                mat_prop['roughness'] = o.material.roughness;
                mat_prop['color'] = o.material.color;
                mat_prop['map'] = o.material.map;
                mat_prop['aoMap'] = o.material.aoMap;
                mat_prop['specularMap'] = o.material.specularMap;

                if (o.material.isMeshStandardMaterial || o.material.isMeshPhysicalMaterial) {
                    mat_prop['emissive'] = o.material.emissive;
                    mat_prop['metalness'] = o.material.metalness;
                    mat_prop['bumpMap'] = o.material.bumpMap;
                    mat_prop['displacementMap'] = o.material.displacementMap;
                    mat_prop['emissiveMap'] = o.material.emissiveMap;
                    mat_prop['metalnessMap'] = o.material.metalnessMap;
                    mat_prop['normalMap'] = o.material.normalMap;
                    mat_prop['roughnessMap'] = o.material.roughnessMap;
                    mat_prop['flatShading'] = o.material.flatShading;
                    mat_prop['envMap'] = o.material.envMap;
                    mat_prop['lightMap'] = o.material.lightMap;

                    if (o.material.isMeshPhysicalMaterial) {
                        mat_prop['clearcoat'] = o.material.clearcoat;
                        mat_prop['clearcoatMap'] = o.material.clearcoatMap;
                        mat_prop['transmission'] = o.material.transmission;
                        mat_prop['transmissionMap'] = o.material.transmissionMap;
                    }
                }
            }
        }
    });

    var color = new THREE.Color( 0x666666 );
    var emissive_color = new THREE.Color( 0x000000 );

    AFRAME.scenes[0].object3D.traverse(o => {
        if (o.isMesh && !o.isTroikaText) {
            if (o.uuid in material_storage) {
                if(o.material.isMeshBasicMaterial) {
                    var prev_mat = o.material;
                    o.material = new THREE.MeshStandardMaterial();
                    THREE.MeshBasicMaterial.prototype.copy.call( o.material, prev_mat );
                }

                o.material.transparent = false;
                o.material.reflectivity = 1;
                o.material.vertexColors = false;
                o.material.roughness = 1;
                o.material.color = color;
                o.material.map = null;
                o.material.aoMap = null;
                o.material.specularMap = null;

                if (o.material.isMeshStandardMaterial || o.material.isMeshPhysicalMaterial) {
                    o.material.emissive = emissive_color;
                    o.material.metalness = 0;
                    o.material.bumpMap = null;
                    o.material.displacementMap = null;
                    o.material.emissiveMap = null;
                    o.material.metalnessMap = null;
                    o.material.normalMap = null;
                    o.material.roughnessMap = null;
                    o.material.flatShading = false;
                    o.material.envMap = null;
                    o.material.lightMap = null;

                    if (o.material.isMeshPhysicalMaterial) {
                        o.material.clearcoat = 0;
                        o.material.clearcoatMap = null;
                        o.material.transmission = 0;
                        o.material.transmissionMap = null;
                    }
                }

                o.material.needsUpdate = true;
            }
        }
    });
}
