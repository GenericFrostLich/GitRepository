import Maps from "./Maps/All";

class GameMap {
    macro = null;
    map = null;
    locationID = null;

    location = null;

    constructor(macro) {
        this.macro = macro;
        const [locationID, mapID] = this.macro.args;

        this.map = GameMap.getMapById(mapID);
        this.locationID = locationID;
        if (this.map === null)
            this.macro.error(`Invalid map id specified (${mapID}) or default map is not set!`);

        this.validateLocation();
    }

    validateLocation() {
        if (typeof this.locationID !== "string")
            this.macro.error("Invalid location id type");

        for (let m of this.map.map.locations) {
            if (this.locationID === m.id) {
                this.location = m;
                break;
            }
        }

        if (this.location === null)
            this.macro.error(`Invalid location id specified (${this.locationID}), not found in map (${this.map.mapID})`);
    }

    static getDefaultMap() {
        for (let m of Maps)
            if (typeof m.default !== "undefined" && m.default)
                return m;

        return null;
    }

    static getMapById(mapID) {
        if (typeof mapID === "undefined")
            return GameMap.getDefaultMap();

        for (let m of Maps)
            if (m.mapID === mapID)
                return m;

        return null;
    }

    run() {


        jQuery(this.macro.output).append(jQuery("<div>").attr('id', 'map-display-container'));

        return 'this is really just a widget??????????';
    }
}

export default GameMap;