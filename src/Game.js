import "./Macros/Misc";
import "./Macros/Clothing";
import "./Macros/Numberpool";
import {macroSetup} from "./Utilities";
import GameMap from "./GameMap";

class Game {
    constructor() {
        this.initState();

        console.log("Degrees of Lewdity initialized.");
        macroSetup('es6_test_macro', GameMap, true);
    }

    initState() {
        Config.history.controls = false;
        Config.history.maxStates = 20;

        State.initPRNG();

        jQuery(document).ready(() => {
            jQuery('#sidetooltip').appendTo('body');
        });

        prehistory['version-update'] = () => {
            if (Story.has('VersionUpdate')) {
                try {
                    Wikifier.wikifyEval(Story.get('VersionUpdate').text);
                }
                catch (ex) {
                    Alert.error('VersionUpdate', ex.message);
                }
            }
        };
    }
}

export default Game;