export default {
    background: 'img/map_placeholders/map_placeholder.png',
    locations: [{
        id: 'domus_street',
        x: 35,
        y: 118,
        name: 'Domus',
        prefix: 'Street',
        suffix: '',
        sprite: 'img/map_placeholders/building_placeholder.png',
        light: 'img/map_placeholders/placeholder_light.png',
        links: [
            'barb_street',
            'danube_street',
            'residential_alleyways'
        ]
    }, {
        id: 'barb_street',
        passage: 'Barb Street',
        x: 135,
        y: 30,
        name: 'Barb',
        prefix: 'Street',
        suffix: '',
        sprite: 'img/map_placeholders/building_placeholder.png',
        light: 'img/map_placeholders/placeholder_light.png',
        links: [
            'domus_street',
            'connudatus_street',
            'residential_alleyways'
        ]
    }, {
        id: 'residential_alleyways',
        x: 115,
        y: 110,
        name: 'Residential Alleyways',
        prefix: '',
        sprite: 'img/map_placeholders/building_placeholder.png',
        light: 'img/map_placeholders/placeholder_light.png',
        links: [
            'domus_street',
            'barb_street',
            'danube_street',
            'connudatus_street'
        ]
    }, {
        id: 'danube_street',
        x: 137,
        y: 207,
        name: 'Danube',
        prefix: 'Street',
        suffix: '',
        sprite: 'img/map_placeholders/building_placeholder.png',
        light: 'img/map_placeholders/placeholder_light.png',
        links: [
            'domus_street',
            'connudatus_street',
            'residential_alleyways'
        ]
    }, {
        id: 'connudatus_street',
        x: 210,
        y: 100,
        name: 'Connudatus',
        prefix: 'Street',
        suffix: '',
        sprite: 'img/map_placeholders/building_placeholder.png',
        light: 'img/map_placeholders/placeholder_light.png',
        links: [
            'barb_street',
            'danube_street',
            'residential_alleyways'
        ]
    }] /* First cluster of 5 */
};