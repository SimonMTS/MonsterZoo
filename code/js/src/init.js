
    console.log('webs3 - Simon Striekwold');

    let terrainController = require('./controllers/terrainController.js');

    let monsterController = require('./controllers/monsterController.js');

    terrainController.setMonsterController( monsterController );

    terrainController.setInitClimate();