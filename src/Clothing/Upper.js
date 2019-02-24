export default [{
    type: 'upper',
    id: 't_shirt',
    name: 'T-Shirt',
    states: {
        100: {
            sprite: 'GOOD_SPRITE'
        },
        70: {
            sprite: 'TORN_WHATEVER'
        },
        //[...]
    },
    variants: {
        'red': {
            class: 'red'
        },
        'blue': {
            class: 'red'
        },
        'black_with_heart': {
            states: {
                100: {
                    sprite: 'GOOD_SPRITE_WITH_HEART'
                },
                70: {
                    sprite: 'TORN_WHATEVER_WITH_HEART'
                },
            },
            combat: {
                'hips': 'special',
                'neck': 'sprite',
                'thigs': 'goes',
                'tummy': 'here'
            }
        }
    },
    combat: {
        'hips': 'whatever',
        'neck': 'sprite',
        'thigs': 'sprite',
        'tummy': 'sprite'
    },
    integrity: {
        max: 100,
        current: 100 // or saved
    },
    fabric_strength: 100, // dmg - fabric strength (min 1 dmg?)
    reveal: 100
}];