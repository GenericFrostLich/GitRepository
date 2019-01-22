export default {
    background: '',
    locations: [{
        id: 'domus_street',
        name: 'Domus',
        prefix: 'Street',
        suffix: '',
        sprite: '',
        links: [
            'barb_street',
            'danube_street',
            'residential_alleyways'
        ]
    }, {
        id: 'barb_street',
        name: 'Barb',
        prefix: 'Street',
        suffix: '',
        sprite: '',
        links: [
            'domus_street',
            'connudatus_street',
            'residential_alleyways'
        ]
    }, {
        id: 'residential_alleyways',
        name: 'Residential Alleyways',
        prefix: '',
        suffix: '',
        links: [
            'domus_street',
            'barb_street',
            'danube_street',
            'connudatus_street'
        ]
    }, {
        id: 'danube_street',
        name: 'Danube',
        prefix: 'Street',
        suffix: '',
        sprite: '',
        links: [
            'domus_street',
            'connudatus_street',
            'residential_alleyways'
        ]
    }, {
        id: 'connudatus_street',
        name: 'Connudatus',
        prefix: 'Street',
        suffix: '',
        sprite: '',
        links: [
            'barb_street',
            'danube_street',
            'residential_alleyways'
        ]
    }] /* First cluster of 5 */
};