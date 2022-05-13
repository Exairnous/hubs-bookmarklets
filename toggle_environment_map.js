javascript:
if (typeof env_map_storage === 'undefined') {
    var env_map_storage = null;
};

env_map_storage = AFRAME.scenes[0].object3D.environment ?
                  AFRAME.scenes[0].object3D.environment :
                  env_map_storage ?
                  env_map_storage : null;

AFRAME.scenes[0].object3D.environment = AFRAME.scenes[0].object3D.environment ?
                                        null : env_map_storage;
