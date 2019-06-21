class configuratorView {
    
    constructor() {

        this.randomNames = [ 'aamon', 'abaddon', 'abezethibou', 'abraxas', 'abyzou', 'adramelech', 'aeshma', 'agaliarept', 'agares', 'agiel', 'agrat', 'ahriman', 'aim', 'akoman', 'akvan', 'ala', 'alal', 'alastor', 'allocer', 'alloces', 'allu', 'alu', 'amaymon', 'amdusias', 'amon', 'amy', 'anamalech', 'ancitif', 'andhaka', 'andras', 'andrealphus', 'andromalius', 'antichrist', 'anzu', 'apollyon', 'archon', 'armaros', 'arunasura', 'asag', 'asakku', 'asbel', 'asmodai', 'asmodeus', 'astaroth', 'asura', 'azazel', 'baal', 'babi', 'bael', 'bakasura', 'balam', 'balberith', 'banshee', 'baphomet', 'barbas', 'barbatos', 'barong', 'bathin', 'bathym', 'beelzebub', 'behemoth', 'beherit', 'beleth', 'belial', 'belphegor', 'berith', 'bhoot', 'bhuta', 'bifrons', 'boruta', 'botis', 'buer', 'bukavac', 'bune', 'bushyasta', 'caacrinolaas', 'caassimolar', 'caim', 'camio', 'canio', 'cerbere', 'charun', 'chax', 'chemosh', 'choronzon', 'cimeies', 'cimejes', 'classyalabolas', 'corson', 'crocell', 'crocell', 'culsu', 'daeva', 'dagon', 'dahak', 'dahaka', 'dajjal', 'dajjal', 'danjal', 'dantalion', 'decarabia', 'demiurge', 'demogorgon', 'devil', 'drekavac', 'dzoavits', 'eblis', 'eisheth', 'eligos', 'flauros', 'flavros', 'focalor', 'foraii', 'foras', 'forcas', 'forneus', 'forras', 'furcas', 'furfur', 'gaap', 'gaderel', 'gaki', 'gamigin', 'ghoul', 'glassialabolis', 'gomory', 'gorgon', 'gremory', 'grigori', 'gualichu', 'guayota', 'gusion', 'gusoin', 'gusoyn', 'haagenti', 'haborym', 'halphas', 'hauras', 'haures', 'havres', 'ifrit', 'incubus', 'ipes', 'ipos', 'jikininki', 'jinn', 'kabandha', 'kabhanda', 'kali', 'kasadya', 'kimaris', 'kokabiel', 'krampus', 'kroni', 'kumbhakarna', 'lechies', 'legion', 'lempo', 'leraie', 'leraje', 'leviathan', 'leyak', 'lili', 'lilim', 'lilin', 'lilin', 'lilith', 'lucifer', 'malaphar', 'malephar', 'malphas', 'malthus', 'mammon', 'mara', 'marax', 'marchosias', 'maricha', 'marthim', 'mastema', 'mathim', 'mephistopheles', 'merihem', 'moloch', 'morax', 'morpheus', 'murmur', 'naamah', 'naberius', 'naberus', 'namtar', 'nero', 'ninurta', 'onoskelis', 'orcus', 'ordog', 'orias', 'oriax', 'orobas', 'ose', 'paimon', 'pazuzu', 'pelesit', 'penemue', 'phenex', 'pithius', 'pocong', 'pontianak', 'preta', 'procell', 'pruflas', 'puloman', 'rahab', 'rakshasa', 'rangda', 'raum', 'ravana', 'ronove', 'rusalka', 'sabnock', 'saleos', 'samael', 'satan', 'seir', 'semyaz', 'shax', 'shedim', 'sitri', 'solas', 'sthenno', 'stolas', 'suanggi', 'succubus', 'surgat', 'tannin', 'toyol', 'tuchulcha', 'ukobach', 'valac', 'valefar', 'vanth', 'vapula', 'vassago', 'vepar', 'vine', 'wendigo', 'xaphan', 'xezbeth', 'yeqon', 'yeterel', 'zagan', 'zahhak', 'zepar', 'ziminiar', 'zu' ];

        this.inputFields = {
            "monsterID":        document.querySelector('input#monsterID'),
            "typeOfMonster":    document.querySelector('div#typeOfMonster select'),
            "monsterName":      document.querySelector('div#monsterName input'),
            "numberOfArms":     document.querySelector('div#numberOfArms select'),
            "typeOfArm":        document.querySelector('div#typeOfArm select'),
            "numberOfLegs":     document.querySelector('div#numberOfLegs select'),
            "numberOfEyes":     document.querySelector('div#numberOfEyes select'),
            "typeOfFur":        document.querySelector('div#typeOfFur select'),
            "monsterColor":     document.querySelector('div#monsterColor select'),
            "monsterCanFly":    document.querySelector('div#monsterCanFly input'),
            "monsterCanSwim":   document.querySelector('div#monsterCanSwim input')
        };
    }

    getValuesAsObject() {

        let obj = {
            "monsterID":        this.inputFields['monsterID'].value,
            "monsterName":      this.inputFields['monsterName'].value,
            "typeOfMonster":    this.inputFields['typeOfMonster'].value,
            "numberOfArms":     parseInt(this.inputFields['numberOfArms'].value),
            "typeOfArm":        this.inputFields['typeOfArm'].value,
            "numberOfLegs":     parseInt(this.inputFields['numberOfLegs'].value),
            "numberOfEyes":     parseInt(this.inputFields['numberOfEyes'].value),
            "typeOfFur":        this.inputFields['typeOfFur'].value,
            "monsterColor":     this.inputFields['monsterColor'].value,
            "monsterCanFly":    this.inputFields['monsterCanFly'].checked,
            "monsterCanSwim":   this.inputFields['monsterCanSwim'].checked
        };

        return obj;

    }

    updateConfigurator( monsterInDesigner, controller ) {

        if ( monsterInDesigner === false ) {

            document.querySelector('button#createMonster').style.display = "block";
            document.querySelector('div.creation').style.display = "none";

        } else {

            document.querySelector('button#createMonster').style.display = "none";
            document.querySelector('div.creation').style.display = "block";

            this.loadMonsterData( monsterInDesigner, controller );

        }

    }

    loadMonsterData( monster, controller ) {

        
        let properties = controller.retrieveMonsterProperties( monster.id );
        
        this.inputFields['monsterID'].value = properties.monsterID;
        this.inputFields['monsterName'].value = properties.monsterName;
        this.inputFields['typeOfMonster'].value = properties.typeOfMonster;


        var option = document.createElement("option");
        option.text = ''+ properties.numberOfArms;
        option.selected = 'selected';
        this.inputFields['numberOfArms'].add( option );

        var option = document.createElement("option");
        option.text = ''+ properties.typeOfArm;
        option.selected = 'selected';
        this.inputFields['typeOfArm'].add( option );

        var option = document.createElement("option");
        option.text = ''+ properties.numberOfLegs;
        option.selected = 'selected';
        this.inputFields['numberOfLegs'].add( option );

        var option = document.createElement("option");
        option.text = ''+ properties.numberOfEyes;
        option.selected = 'selected';
        this.inputFields['numberOfEyes'].add( option );

        var option = document.createElement("option");
        option.text = ''+ properties.typeOfFur;
        option.selected = 'selected';
        this.inputFields['typeOfFur'].add( option );

        var option = document.createElement("option");
        option.text = ''+ properties.monsterColor;
        option.selected = 'selected';
        this.inputFields['monsterColor'].add( option );


        this.inputFields['monsterCanFly'].checked = properties.monsterCanFly;
        this.inputFields['monsterCanSwim'].checked = properties.monsterCanSwim;


        this.validateConfiguratorFields( controller );

    }

    generateNewMonster( id, controller ) {
        
        let randomNumber = Math.floor(Math.random() * 4);

        this.inputFields['monsterID'].value = id;
        this.inputFields['monsterName'].value = '';
        this.inputFields['typeOfMonster'].value = this.inputFields['typeOfMonster'].options[ randomNumber ].value;
        this.inputFields['numberOfArms'].value = false;
        this.inputFields['typeOfArm'].value = false;
        this.inputFields['numberOfLegs'].value = false;
        this.inputFields['numberOfEyes'].value = false;
        this.inputFields['typeOfFur'].value = false;
        this.inputFields['monsterColor'].value = false;
        this.inputFields['monsterCanFly'].checked = false;
        this.inputFields['monsterCanSwim'].checked = false;

        this.validateConfiguratorFields( controller );

    }


    setConfiguratorEventListeners( controller ) {

        let thisView = this;
        document.querySelector('div#typeOfMonster select'   ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#monsterName input'      ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#numberOfArms select'    ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#typeOfArm select'       ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#numberOfLegs select'    ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#numberOfEyes select'    ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#typeOfFur select'       ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#monsterColor select'    ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#monsterCanFly input'    ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });
        document.querySelector('div#monsterCanSwim input'   ).addEventListener("change",  function(event) { thisView.validateConfiguratorFields( controller ) });

    }

    validateConfiguratorFields( controller ) {
        
        this.validateMonsterName( this.inputFields );
        this.validateNumberOfArms( this.inputFields );
        this.validateTypeOfArm( this.inputFields );
        this.validateNumberOfLegs( this.inputFields );
        this.validateNumberOfEyes( this.inputFields );
        this.validateTypeOfFur( this.inputFields );
        this.validateMonsterColor( this.inputFields );
        this.validateMonsterCanFly( this.inputFields );
        this.validateMonsterCanSwim( this.inputFields );
        
        controller.updateMonsterProperties( this.inputFields['monsterID'].value, this.getValuesAsObject() );

    }

    validateNumberOfArms( inputFields ) {
        
        let numberOfArms = inputFields['numberOfArms'];
        let possibleValues = [];
        let previousValue = (numberOfArms.options[ numberOfArms.selectedIndex ] ? numberOfArms.options[ numberOfArms.selectedIndex ].value : null );

        let typeOfMonster = inputFields['typeOfMonster'];
        if ( 'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
        } else if ( 'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 0, 1, 2, 3, 4, 5, 6 ];
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 2 ];
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 2 ];
        }

        for ( let i = numberOfArms.options.length - 1 ; i >= 0 ; i-- ) {

            numberOfArms.remove( i );

        }

        for ( let i = 0; i < possibleValues.length; i++ ) {
            
            var option = document.createElement("option");
            option.text = ''+ possibleValues[i];

            if ( previousValue != null && previousValue == option.text ) {
                option.selected = 'selected';
            }
            
            numberOfArms.add( option );

        }

    }

    validateTypeOfArm( inputFields ) {

        let typeOfArm = inputFields['typeOfArm'];
        let possibleValues = [];
        let previousValue = (typeOfArm.options[ typeOfArm.selectedIndex ] ? typeOfArm.options[ typeOfArm.selectedIndex ].value : null );

        let typeOfMonster = inputFields['typeOfMonster'];
        if ( 'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Tentacles', 'Fins' ];
        } else if ( 'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Tentacles','Claws', 'Claw-Wings' ];
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Claws' ];
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Wings', 'Claw-Wings' ];
        }

        for ( let i = typeOfArm.options.length - 1 ; i >= 0 ; i-- ) {
            typeOfArm.remove( i );
        }

        for ( let i = 0; i < possibleValues.length; i++ ) {
            
            var option = document.createElement("option");
            option.text = ''+ possibleValues[i];

            if ( previousValue != null && previousValue == option.text ) {
                option.selected = 'selected';
            }
            
            typeOfArm.add( option );

        }

    }

    validateNumberOfLegs( inputFields ) {

        let numberOfLegs = inputFields['numberOfLegs'];
        let possibleValues = [];
        let previousValue = (numberOfLegs.options[ numberOfLegs.selectedIndex ] ? numberOfLegs.options[ numberOfLegs.selectedIndex ].value : null );

        let typeOfMonster = inputFields['typeOfMonster'];
        let numberOfArms = inputFields['numberOfArms'];
        if ( 
            'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() && 
            numberOfArms.options[ numberOfArms.selectedIndex ].value <= 4
        ) {
            possibleValues = [ 0, 1, 2, 3, 4 ];
        } else if ( 
            'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() && 
            numberOfArms.options[ numberOfArms.selectedIndex ].value > 4
        ) {
            possibleValues = [ 'Only arms' ];
        } else if ( 
            'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() && 
            numberOfArms.options[ numberOfArms.selectedIndex ].value <= 2
        ) {
            possibleValues = [ 2 ];
        }  else if ( 
            'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() && 
            numberOfArms.options[ numberOfArms.selectedIndex ].value > 2
        ) {
            possibleValues = [ 'Only arms' ];
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 2, 4, 6 ];
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 0, 2 ];
        }

        for ( let i = numberOfLegs.options.length - 1 ; i >= 0 ; i-- ) {
            numberOfLegs.remove( i );
        }

        for ( let i = 0; i < possibleValues.length; i++ ) {
            
            var option = document.createElement("option");
            option.text = ''+ possibleValues[i];

            if ( previousValue != null && previousValue == option.text ) {
                option.selected = 'selected';
            }
            
            numberOfLegs.add( option );

        }

    }

    validateNumberOfEyes( inputFields ) {
        
        let numberOfEyes = inputFields['numberOfEyes'];
        let possibleValues = [];
        let previousValue = (numberOfEyes.options[ numberOfEyes.selectedIndex ] ? numberOfEyes.options[ numberOfEyes.selectedIndex ].value : null );

        let typeOfMonster = inputFields['typeOfMonster'];
        if ( 'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
        } else if ( 'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 0, 1, 2, 3, 4 ];
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 2 ];
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 2 ];
        }

        for ( let i = numberOfEyes.options.length - 1 ; i >= 0 ; i-- ) {

            numberOfEyes.remove( i );

        }

        for ( let i = 0; i < possibleValues.length; i++ ) {
            
            var option = document.createElement("option");
            option.text = ''+ possibleValues[i];

            if ( previousValue != null && previousValue == option.text ) {
                option.selected = 'selected';
            }
            
            numberOfEyes.add( option );

        }

    }

    validateTypeOfFur( inputFields ) {
        
        let typeOfFur = inputFields['typeOfFur'];
        let possibleValues = [];
        let previousValue = (typeOfFur.options[ typeOfFur.selectedIndex ] ? typeOfFur.options[ typeOfFur.selectedIndex ].value : null );

        let typeOfMonster = inputFields['typeOfMonster'];
        if ( 'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Scales', 'Slime' ];
        } else if ( 'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Scales', 'Feathers' ];
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Hair', 'Scales', 'Slime' ];
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Feathers', 'Hair', 'Scales' ];
        }

        for ( let i = typeOfFur.options.length - 1 ; i >= 0 ; i-- ) {

            typeOfFur.remove( i );

        }

        for ( let i = 0; i < possibleValues.length; i++ ) {
            
            var option = document.createElement("option");
            option.text = ''+ possibleValues[i];

            if ( previousValue != null && previousValue == option.text ) {
                option.selected = 'selected';
            }
            
            typeOfFur.add( option );

        }

    }

    validateMonsterColor( inputFields ) {
        
        let monsterColor = inputFields['monsterColor'];
        let possibleValues = [];
        let previousValue = (monsterColor.options[ monsterColor.selectedIndex ] ? monsterColor.options[ monsterColor.selectedIndex ].value : null );

        let typeOfMonster = inputFields['typeOfMonster'];
        if ( 'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Blue', 'Red', 'Green' ];
        } else if ( 'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Red', 'Orange', 'Brown' ];
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'Purple', 'Orange', 'White' ];
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            possibleValues = [ 'White', 'Blue', 'Purple' ];
        }

        for ( let i = monsterColor.options.length - 1 ; i >= 0 ; i-- ) {

            monsterColor.remove( i );

        }

        for ( let i = 0; i < possibleValues.length; i++ ) {
            
            var option = document.createElement("option");
            option.text = ''+ possibleValues[i];

            if ( previousValue != null && previousValue == option.text ) {
                option.selected = 'selected';
            }
            
            monsterColor.add( option );

        }

    }

    validateMonsterCanFly( inputFields ) {
        
        let monsterCanFly = inputFields['monsterCanFly'];

        let typeOfMonster = inputFields['typeOfMonster'];
        let typeOfFur = inputFields['typeOfFur'];
        if ( 'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanFly.checked = false;
        } else if ( 
            'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() &&
            typeOfFur.options[ typeOfFur.selectedIndex ].value.toLowerCase() == 'feathers'
        ) {
            monsterCanFly.checked = true;
        } else if ( 'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanFly.checked = false;
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanFly.checked = false;
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanFly.checked = true;
        }

    }

    validateMonsterCanSwim( inputFields ) {
        
        let monsterCanSwim = inputFields['monsterCanSwim'];

        let typeOfMonster = inputFields['typeOfMonster'];
        let typeOfFur = inputFields['typeOfFur'];
        if ( 'water' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanSwim.checked = true;
        } else if ( 'fire' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanSwim.checked = false;
        } else if ( 'earth' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanSwim.checked = false;
        } else if ( 
            'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() &&
            (
                typeOfFur.options[ typeOfFur.selectedIndex ].value.toLowerCase() == 'hair' ||
                typeOfFur.options[ typeOfFur.selectedIndex ].value.toLowerCase() == 'scales'
            )
        ) {
            monsterCanSwim.checked = true;
        } else if ( 'wind' == typeOfMonster.options[ typeOfMonster.selectedIndex ].value.toLowerCase() ) {
            monsterCanSwim.checked = false;
        }

    }

    validateMonsterName( inputFields ) {

        let monsterName = inputFields['monsterName'];
        if ( monsterName.value == '' ) {

            let randomNumber = Math.floor(Math.random() * this.randomNames.length);
            monsterName.value = this.randomNames[randomNumber];

        }

    }

}

module.exports = new configuratorView();