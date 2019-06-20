/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/climate.json":
/*!**************************!*\
  !*** ./src/climate.json ***!
  \**************************/
/*! exports provided: climates, default */
/***/ (function(module) {

eval("module.exports = {\"climates\":[{\"name\":\"Jungle\",\"climate\":\"bear grylls approved temperature\",\"reference city\":\"Rio de Janeiro\",\"grid\":[{\"name\":\"Row1\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"1\",\"1\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row2\",\"Columns\":[\"1\",\"0\",\"0\",\"1\",\"0\",\"0\",\"1\",\"0\",\"0\",\"1\"]},{\"name\":\"Row3\",\"Columns\":[\"1\",\"0\",\"1\",\"0\",\"0\",\"0\",\"0\",\"1\",\"0\",\"1\"]},{\"name\":\"Row4\",\"Columns\":[\"1\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\",\"1\"]},{\"name\":\"Row5\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row6\",\"Columns\":[\"1\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row7\",\"Columns\":[\"1\",\"0\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row8\",\"Columns\":[\"1\",\"0\",\"0\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row9\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"1\",\"1\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row10\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"1\",\"1\",\"0\",\"0\",\"0\",\"1\"]}]},{\"name\":\"IcePole\",\"climate\":\"sub-zero cold\",\"reference city\":\"Amsterdam\",\"grid\":[{\"name\":\"Row1\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"1\",\"1\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row2\",\"Columns\":[\"0\",\"0\",\"0\",\"1\",\"0\",\"0\",\"1\",\"0\",\"0\",\"1\"]},{\"name\":\"Row3\",\"Columns\":[\"0\",\"0\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row4\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\",\"1\"]},{\"name\":\"Row5\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\"]},{\"name\":\"Row6\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row7\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"0\",\"1\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row8\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row9\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"1\",\"1\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row10\",\"Columns\":[\"1\",\"0\",\"0\",\"0\",\"1\",\"1\",\"0\",\"0\",\"0\",\"0\"]}]},{\"name\":\"Sjahari\",\"climate\":\"burning hot\",\"reference city\":\"Marrakech\",\"grid\":[{\"name\":\"Row1\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row2\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row3\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"1\",\"0\",\"0\"]},{\"name\":\"Row4\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row5\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row6\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row7\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row8\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row9\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]},{\"name\":\"Row10\",\"Columns\":[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]}]}]};\n\n//# sourceURL=webpack:///./src/climate.json?");

/***/ }),

/***/ "./src/controllers/monsterController.js":
/*!**********************************************!*\
  !*** ./src/controllers/monsterController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let monsterModel = __webpack_require__(/*! ../models/monsterModel.js */ \"./src/models/monsterModel.js\"),\r\n    monsterView = __webpack_require__(/*! ../views/monsterView.js */ \"./src/views/monsterView.js\"),\r\n    terrainModel = __webpack_require__(/*! ../models/terrainModel.js */ \"./src/models/terrainModel.js\");\r\n\r\nclass monsterController {\r\n\r\n    constructor() {\r\n\r\n        // nononono temp todo\r\n        let controller = this;\r\n        document.querySelector('button#createMonster').addEventListener('click', function(){\r\n            return controller.createNewMonster();\r\n        });\r\n\r\n    }\r\n\r\n    addMonstersToTerrain( climate ) {\r\n\r\n        let monsterLocations = monsterModel.getMonsterLocations( climate );\r\n\r\n        monsterView.drawMonsters( monsterLocations );\r\n\r\n        this.addMonsterEventListeners();\r\n\r\n    }\r\n\r\n    addMonsterEventListeners() {\r\n\r\n        // nononono temp todo\r\n        let monsters = document.querySelectorAll('div.monster');\r\n        for ( let i = 0; i < monsters.length; i++ ) {\r\n\r\n            this.addMonsterEventListener( monsters[i] );\r\n\r\n        }\r\n\r\n    }\r\n\r\n    addMonsterEventListener( monster ) {\r\n\r\n        monster.addEventListener('click', this.monsterClick);\r\n\r\n        monster.addEventListener('dragstart', this.monsterDragstart);\r\n\r\n    }\r\n\r\n    monsterDragstart( event ) {\r\n        event.dataTransfer.setData(\"draggable\", event.target.id);\r\n\r\n        event.target.style.transform = 'translate(0, 0)';\r\n        event.dataTransfer.setDragImage(event.target, event.target.offsetWidth/2, event.target.offsetHeight/2);\r\n    }\r\n\r\n    monsterClick( event ) {\r\n        console.log('clicked: '+this.id);\r\n    }\r\n\r\n    createNewMonster() {\r\n\r\n        if ( monsterModel.getMonsterInDesigner() == undefined ) {\r\n\r\n            monsterModel.addMonsterToLocation( \r\n                terrainModel.getCurrentClimate(),\r\n                monsterModel.generateMonsterID(),\r\n                'designer', 'designer', \r\n                {} \r\n            );\r\n    \r\n            let climate = terrainModel.getClimateByName( terrainModel.getCurrentClimate() );\r\n            this.addMonstersToTerrain( climate );\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = new monsterController();\n\n//# sourceURL=webpack:///./src/controllers/monsterController.js?");

/***/ }),

/***/ "./src/controllers/terrainController.js":
/*!**********************************************!*\
  !*** ./src/controllers/terrainController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let terrainModel = __webpack_require__(/*! ../models/terrainModel.js */ \"./src/models/terrainModel.js\"),\r\n    terrainView = __webpack_require__(/*! ../views/terrainView.js */ \"./src/views/terrainView.js\");\r\n    monsterModel = __webpack_require__(/*! ../models/monsterModel.js */ \"./src/models/monsterModel.js\");\r\n\r\nclass terrainController {\r\n\r\n    setInitClimate() {\r\n\r\n        let currentClimateName = terrainModel.getCurrentClimate();\r\n\r\n        this.setClimate( currentClimateName );\r\n        terrainView.setClimateChangeEventListeners( this );\r\n    \r\n    }\r\n\r\n    setClimate( name ) {\r\n\r\n        terrainView.emptyField();\r\n        terrainView.drawField();\r\n\r\n        let climate = terrainModel.getClimateByName( name );\r\n\r\n        terrainModel.getWeatherFromClimate( this, climate, function( controller, weather ) {\r\n            if ( weather ) {\r\n                controller.setWeather( weather );\r\n            } else {\r\n                controller.setWeather( '...' );\r\n            }\r\n        });\r\n\r\n        terrainView.drawTerrain( climate );\r\n        \r\n        this.monsterController.addMonstersToTerrain( climate );\r\n        terrainView.setMonsterPositionEventListeners( this, climate );\r\n\r\n        terrainModel.setCurrentClimate( climate.name.toLowerCase() );\r\n\r\n    }\r\n\r\n    setWeather( weather ) {\r\n        \r\n        terrainView.setWeatherBadge( weather );\r\n\r\n    }\r\n\r\n    setMonsterController( monsterController ) {\r\n        this.monsterController = monsterController;\r\n    }\r\n\r\n    monsterChangedPosition( id, x, y ) {\r\n        monsterModel.moveMonsterToLocation( terrainModel.getCurrentClimate(), id, x, y );\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = new terrainController();\n\n//# sourceURL=webpack:///./src/controllers/terrainController.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n    console.log('webs3 - Simon Striekwold');\r\n\r\n    let terrainController = __webpack_require__(/*! ./controllers/terrainController.js */ \"./src/controllers/terrainController.js\");\r\n\r\n    let monsterController = __webpack_require__(/*! ./controllers/monsterController.js */ \"./src/controllers/monsterController.js\");\r\n\r\n    terrainController.setMonsterController( monsterController );\r\n\r\n    terrainController.setInitClimate();\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/models/monsterModel.js":
/*!************************************!*\
  !*** ./src/models/monsterModel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let terrainModel = __webpack_require__(/*! ./terrainModel.js */ \"./src/models/terrainModel.js\");\r\n    \r\nclass monsterModel {\r\n\r\n    constructor() {\r\n\r\n        if ( localStorage.getItem('monsterLocations') == null ) {\r\n            this.locations = {};\r\n            this.locations.jungle = [];\r\n            this.locations.sjahari = [];\r\n            this.locations.icepole = [];\r\n            \r\n            localStorage.setItem('monsterLocations', JSON.stringify(this.locations));\r\n        }\r\n\r\n        this.locations = JSON.parse( localStorage.getItem('monsterLocations') );\r\n\r\n    }\r\n\r\n    generateMonsterID() {\r\n        return 'm' + ( this.locations.jungle.length + this.locations.sjahari.length + this.locations.icepole.length );\r\n    }\r\n\r\n    getMonsterInDesigner() {\r\n\r\n        let currentClimate = terrainModel.getCurrentClimate();\r\n\r\n        let monster = this.locations[ currentClimate ].find(function(element){\r\n            return element.x == 'designer' && element.y == 'designer';\r\n        });\r\n\r\n        return monster;\r\n\r\n    }\r\n\r\n    saveLocations() {\r\n        localStorage.setItem('monsterLocations', JSON.stringify(this.locations));\r\n    }\r\n\r\n    addMonsterToLocation( climate, id, x, y, properties ) {\r\n        \r\n        this.locations[climate].push({\r\n            'id': id,\r\n            'x': x,\r\n            'y': y,\r\n            'properties': properties\r\n        });\r\n\r\n        this.saveLocations();\r\n\r\n    }\r\n    \r\n    moveMonsterToLocation( climate, id, x, y ) {\r\n        \r\n        let monster = this.locations[climate].find(function(element){\r\n            return element.id == id;\r\n        });\r\n\r\n        let index = this.locations[climate].indexOf(monster);\r\n        this.locations[climate].splice(index, 1);\r\n\r\n        this.locations[climate].push({\r\n            'id': monster.id,\r\n            'x': x,\r\n            'y': y,\r\n            'properties': monster.properties\r\n        });\r\n\r\n        this.saveLocations();\r\n\r\n    }\r\n\r\n    getMonsterLocations( climate ) {\r\n\r\n        return this.locations[climate.name.toLowerCase()];\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = new monsterModel();\n\n//# sourceURL=webpack:///./src/models/monsterModel.js?");

/***/ }),

/***/ "./src/models/terrainModel.js":
/*!************************************!*\
  !*** ./src/models/terrainModel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let climateData = __webpack_require__(/*! ../climate.json */ \"./src/climate.json\");\r\n\r\nclass terrainModel {\r\n\r\n    constructor() {\r\n\r\n        if ( localStorage.getItem('currentClimate') == null ) {\r\n            localStorage.setItem('currentClimate', 'jungle');\r\n        }\r\n\r\n    }\r\n\r\n    getCurrentClimate() {\r\n        return localStorage.getItem('currentClimate');\r\n    }\r\n\r\n    setCurrentClimate( name ) {\r\n        localStorage.setItem('currentClimate', name);\r\n    }\r\n\r\n    getClimateByName( name ) {\r\n        return climateData.climates.find(o => o.name.toLowerCase() === name);\r\n    }\r\n\r\n    getWeatherFromClimate( controller, climate, __callback ) {\r\n        /*\r\n\r\n            Thunderstorm\r\n            Drizzle\r\n            Rain\r\n            Snow\r\n            Mist\r\n            Smoke\r\n            Haze\r\n            Dust\r\n            Fog\r\n            Sand\r\n            Dust\r\n            Ash\r\n            Squall\r\n            Tornado\r\n            Clear\r\n            Clouds\r\n\r\n        */\r\n\r\n        let city = climate['reference city'];\r\n\r\n        let apiKey = '2adeeb754ec26a7e97c574b2c5d0d959';\r\n        let apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?appid='+apiKey+'&q='+city;\r\n\r\n        fetch(apiUrl)\r\n            .then(\r\n                function(response) {\r\n                    if (response.status !== 200) {\r\n                        __callback( controller, null );\r\n                    }\r\n\r\n                    // Examine the text in the response\r\n                    response.json().then(function(data) {\r\n\r\n                        try {\r\n                            __callback( controller, data.list[0].weather[0].main );\r\n                        } catch ( e ) {\r\n                            __callback( controller, null );\r\n                        }\r\n\r\n                    });\r\n                }\r\n            )\r\n            .catch(function(err) {\r\n                __callback( controller, null );\r\n            });\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = new terrainModel();\n\n//# sourceURL=webpack:///./src/models/terrainModel.js?");

/***/ }),

/***/ "./src/views/monsterView.js":
/*!**********************************!*\
  !*** ./src/views/monsterView.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let terrainView = __webpack_require__(/*! ../views/terrainView.js */ \"./src/views/terrainView.js\");\r\n\r\nclass monsterView {\r\n\r\n    getBaseMonster() {\r\n        let monster = document.createElement('div');\r\n        monster.setAttribute('class', 'monster');\r\n        monster.setAttribute('draggable', 'true');\r\n\r\n        return monster;\r\n    }\r\n\r\n    drawMonsters( locations ) {\r\n\r\n        for ( let i = 0; i < locations.length; i++ ) {\r\n            let holder = terrainView.getHolderPosition( locations[i].x, locations[i].y );\r\n\r\n            if ( holder.childElementCount > 0 ) {\r\n                continue;\r\n            }\r\n\r\n            this.drawMonster( holder, {\r\n                'id': locations[i].id\r\n            });\r\n        }\r\n\r\n    }\r\n\r\n    drawMonster( container, properties ) {\r\n        \r\n        let monster = this.getBaseMonster();\r\n        monster.setAttribute('id', properties.id);\r\n\r\n        container.appendChild( monster );\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = new monsterView();\n\n//# sourceURL=webpack:///./src/views/monsterView.js?");

/***/ }),

/***/ "./src/views/terrainView.js":
/*!**********************************!*\
  !*** ./src/views/terrainView.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class terrainView {\r\n\r\n    emptyField() {\r\n        \r\n        let tiles = document.querySelector('#tiles');\r\n        while (tiles.firstChild) {\r\n            tiles.removeChild(tiles.firstChild);\r\n        }\r\n\r\n        let designer = document.querySelector('#hdesign');\r\n        while (designer.firstChild) {\r\n            designer.removeChild(designer.firstChild);\r\n        }\r\n\r\n    }\r\n    \r\n    drawField() {\r\n\r\n        for ( let i = 0; i < 10; i++ ) {\r\n            for ( let j = 0; j < 10; j++ ) {\r\n\r\n                let holder = document.createElement('div');\r\n                holder.setAttribute('class', 'holder bg-mat-100');\r\n                holder.setAttribute('id', 'h'+i+'-'+j);\r\n                document.querySelector('#tiles').appendChild(holder);\r\n\r\n                this.holderAddEventListener( holder );\r\n\r\n            }\r\n        }\r\n\r\n        let designHolder = document.querySelector('div.holder.design');\r\n        this.holderAddEventListener( designHolder );\r\n        \r\n    }\r\n\r\n\r\n    holderAddEventListener( holder ) {\r\n        holder.addEventListener(\"drop\", this.holderDrop);\r\n        holder.addEventListener(\"dragover\", this.holderDragOver);\r\n\r\n        holder.addEventListener(\"dragenter\", this.holderDragEnter);\r\n        holder.addEventListener(\"dragleave\", this.holderDragLeave);\r\n    }\r\n\r\n    holderDrop( event ) {\r\n        event.preventDefault();\r\n        let data = event.dataTransfer.getData(\"draggable\");\r\n        \r\n        if ( event.target.id.charAt(0) == 'h' ) {\r\n            event.target.appendChild(document.getElementById(data));\r\n            event.target.classList.remove(\"holder-hover\");\r\n        }\r\n    }\r\n\r\n    holderDragOver( event ) {\r\n        event.preventDefault();\r\n    }\r\n\r\n    holderDragEnter( event ) {\r\n        event.target.classList.add(\"holder-hover\");\r\n    }\r\n    holderDragLeave( event ) {\r\n        event.target.classList.remove(\"holder-hover\");\r\n    }\r\n\r\n\r\n    drawTerrain( climate ) {\r\n\r\n        for( let i = 0; i < 10; i++ ) {\r\n            for( let j = 0; j < 10; j++ ) {\r\n\r\n                if ( climate.grid[i].Columns[j] == 1 ) {\r\n                    let holder = document.querySelector('#h'+i+'-'+j);\r\n                    \r\n                    holder.classList.add(\"terrain\");\r\n                    \r\n                    holder.removeEventListener(\"drop\", this.holderDrop);\r\n                    holder.removeEventListener(\"dragover\", this.holderDragOver);\r\n                }\r\n\r\n            }   \r\n        }\r\n\r\n        this.setClimateClass( climate.name );\r\n\r\n    }\r\n\r\n    setClimateClass( name ) {\r\n        let outer = document.querySelector('div.container-fluid.outer');\r\n        outer.classList.remove('jungle');\r\n        outer.classList.remove('sjahari');\r\n        outer.classList.remove('icepole');\r\n\r\n        outer.classList.add( name.toLowerCase() );\r\n    }\r\n\r\n    setClimateChangeEventListeners( controller ) {\r\n        \r\n        document.querySelector('button.jungle-btn').addEventListener(\"click\", function(){\r\n            controller.setClimate( 'jungle' );\r\n        });\r\n        document.querySelector('button.sjahari-btn').addEventListener(\"click\", function(){\r\n            controller.setClimate( 'sjahari' );\r\n        });\r\n        document.querySelector('button.icepole-btn').addEventListener(\"click\", function(){\r\n            controller.setClimate( 'icepole' );\r\n        });\r\n\r\n    }\r\n\r\n    setWeatherBadge( weather ) {\r\n\r\n        document.querySelector('span.badge.weather').innerHTML = weather;\r\n\r\n    }\r\n\r\n    getHolderPosition( x, y ) {\r\n\r\n        if ( x == 'designer' && y == 'designer' ) {\r\n            return document.querySelector('#hdesign');\r\n        } else {\r\n            return document.querySelector('#h'+x+'-'+y);\r\n        }\r\n\r\n    }\r\n\r\n    setMonsterPositionEventListeners( controller, climate ) {\r\n\r\n        for( let i = 0; i < 10; i++ ) {\r\n            for( let j = 0; j < 10; j++ ) {\r\n                if ( climate.grid[i].Columns[j] == 0 ) {\r\n                    let holder = document.querySelector('#h'+i+'-'+j);\r\n                    \r\n                    holder.addEventListener(\"drop\", function(){\r\n                        let data = event.dataTransfer.getData(\"draggable\");\r\n        \r\n                        if ( event.target.id.charAt(0) == 'h' ) {\r\n                            event.target.appendChild(document.getElementById(data));\r\n                            event.target.classList.remove(\"holder-hover\");\r\n\r\n                            controller.monsterChangedPosition(\r\n                                data, \r\n                                event.target.id.charAt(1), event.target.id.charAt(3)\r\n                            );\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n        }\r\n\r\n        let designHolder = document.querySelector('div.holder.design')\r\n        designHolder.addEventListener(\"drop\", function(){\r\n            let data = event.dataTransfer.getData(\"draggable\");\r\n\r\n            if ( event.target.id.charAt(0) == 'h' ) {\r\n                event.target.appendChild(document.getElementById(data));\r\n                event.target.classList.remove(\"holder-hover\");\r\n\r\n                controller.monsterChangedPosition(\r\n                    data, \r\n                    'designer', 'designer'\r\n                );\r\n            }\r\n        });\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = new terrainView();\n\n//# sourceURL=webpack:///./src/views/terrainView.js?");

/***/ })

/******/ });