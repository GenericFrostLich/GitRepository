import Migration from "./Versions";
import Game from "../Game/Game";

Config.saves.onLoad = (save) => {
    let saveGameVersion = save.state.history[save.state.history.length-1].variables._gameVersion;
    if (typeof saveGameVersion === "undefined")
        saveGameVersion = '1.26.1'; // any saves before this need to be handled via the old game version

    if (saveGameVersion !== Game.getGameVersion()) {
        console.log(`Trying to update game save from ${saveGameVersion} to ${Game.getGameVersion()}`);

        while (true) {
            const major = saveGameVersion.split('.')[0];
            const minor = saveGameVersion.split('.')[1];
            const patch = saveGameVersion.split('.')[2];

            if (typeof Migration[major] === "undefined")
                break;

            if (typeof Migration[major][minor] === "undefined")
                break;

            if (typeof Migration[major][minor][patch] === "undefined")
                break;

            saveGameVersion = Migration[major][minor][patch](save.state.history[save.state.history.length-1].variables);
            if (saveGameVersion === Game.getGameVersion())
                break; // on current version
        }

        save.state.history[save.state.history.length-1].variables._gameVersion = saveGameVersion;

        if (saveGameVersion !== Game.getGameVersion())
            console.warn(`Reported game save version is ${saveGameVersion}, while the game version is ${Game.getGameVersion()}, some errors can occur.`);
    } // no need to update when version matches already boi
};