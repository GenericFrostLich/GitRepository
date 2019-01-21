import "./Macros/Misc";
import "./Macros/Clothing";
import "./Macros/Numberpool";

class Game {
    constructor() {
        this.initState();

        console.log("Degrees of Lewdity initialized.");
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