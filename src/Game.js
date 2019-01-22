import "./Macros/Misc";
import "./Macros/Numberpool";
import {upperIntegrity, lowerIntegrity, underIntegrity} from "./Macros/Clothing";
import {macroSetup} from "./Utilities";
import GameMap from "./GameMap";

class Game {
    constructor() {
        this.initState();
        this.initMacros();

        console.log("Degrees of Lewdity initialized.");
    }

    initMacros() {
        macroSetup('display_map', GameMap);

        macroSetup('underintegrity', underIntegrity, true, true);
        macroSetup('lowerintegrity', lowerIntegrity, true, true);
        macroSetup('upperintegrity', upperIntegrity, true, true);
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