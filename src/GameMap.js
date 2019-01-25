import Maps from "./Maps/All";
import {get} from "./Utilities";
import _ from 'lodash';

class GameMap {
    macro = null;
    map = null;
    locationID = null;

    location = null;

    renderedLocations = {};

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

    renderLocation(loc, map) {
        const location = $('<div>').attr('id', 'location-' + loc.id).css({
            left: loc.x,
            top: loc.y
        }).addClass('location-single');

        $(location).append(
            $('<img>').addClass('location-sprite').attr('src', get(loc.sprite))
        );

        if (typeof loc.light !== "undefined")
            $(location).append(
                $('<img>').addClass('location-light').attr('src', get(loc.light))
            );

        if (typeof loc.active === "undefined") {
            $(location).append(
                $('<div>').addClass('location-active-trigger').css({
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%'
                })
            );
        }
        else {
            const active = get(loc.active);

            const left = active.x;
            const top = active.y;
            const width = active.width;
            const height = active.height;

            $(location).append(
                $('<div>').addClass('location-active-trigger').addClass('location-active-trigger-custom').css({
                    left,
                    top,
                    width,
                    height
                })
            );
        }

        if (this.locationID === loc.id) {
            $(location).addClass('location-current');
        }

        this.renderedLocations[loc.id] = location;

        $(map).append(location);
    }

    attachLinks() {
        let currentLocation = null;
        for (let l of this.map.map.locations) {
            if (this.locationID === l.id) {
                currentLocation = l;
                break;
            }
        }

        let links = get(currentLocation.links);
        let locations = _.keyBy(_.cloneDeep(this.map.map.locations), o => o.id);

        for (let link of links) {
            if (typeof this.renderedLocations[link] === "undefined") {
                console.warn(`Unknown selected for the current location (${link})`);
                continue;
            }

            $(this.renderedLocations[link]).addClass('link-active');

            const activeTrigger = $(this.renderedLocations[link]).find('.location-active-trigger');


            $(activeTrigger).on('click', () => {
                const myLocation = _.keyBy(this.map.map.locations, o => o.id)[link];
                if (typeof myLocation.passage === "undefined") {
                    console.warn(`Passage for link ${link} is not defined.`);
                    return;
                }

                const passage = get(myLocation.passage);
                if (typeof passage !== "string") {
                    console.error(`Passage returned for link ${link} is not a string.`);
                    return;
                }

                const timePass = get(myLocation.timePass);
                if (typeof timePass === "number")
                    Wikifier.wikifyEval(`<<pass ${timePass}>>`);

                Engine.play(passage);
            }).on('mouseenter', (e) => {
                $(e.currentTarget).closest('.location-single').addClass('location-is-hovered');
            }).on('mouseleave', (e) => {
                $(e.currentTarget).closest('.location-single').removeClass('location-is-hovered');
            });
            delete locations[link];
        }

        for (let link in locations) {
            if (link === this.locationID)
                continue; // current location is in this list, no need to pollute it with the class

            $(this.renderedLocations[link]).addClass('link-inactive');
        }
    }

    renderMap() {
        const container = $('<div>').attr('id', 'map-display-container').addClass('map-id-' + this.map.mapID);
        $(container).append(
            $('<img>').attr('id', 'background-layer').attr('src', get(this.map.map.background))
        );

        for (let l of this.map.map.locations)
            this.renderLocation(l, container);

        this.attachLinks();

        return container;
    }

    run() {
        jQuery(this.macro.output).append(this.renderMap());
    }
}

export default GameMap;