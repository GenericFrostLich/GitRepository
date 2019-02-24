import {GameState, GameVersion, NpcShared, NpcHuman, NpcBeast, NpcSwarm, NpcTentacles, NpcVore} from "../Update/Versions";
import * as deepmerge from "deepmerge";

const NpcMap = {
    'man': NpcHuman,
    'beast': NpcHuman,
    'vore': NpcVore,
    'tentacles': NpcTentacles,
    'swarm': NpcSwarm
};

const SugarCubeVariables = [
    'passage',
    'tags'
];

export function ImportDefaultGameState() {
    for (let key in State.variables)
        if (SugarCubeVariables.indexOf(key) === -1)
            delete State.variables[key];

    for (let key in GameState)
        State.variables[key] = GameState[key];

    State.variables._gameVersion = GameVersion;

    console.log("Default game state set.");
}

export function GetNpc(npcType = null) {
    if (!NpcMap.hasOwnProperty(npcType))
        throw new Error(`No valid npc type specified (${npcType}`);

    return deepmerge.merge(NpcShared, NpcMap[npcType]);
}