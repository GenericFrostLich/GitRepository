export const GameVersion = '1.26.1';

// Save update function
export default (variables) => {

};

export const GameState = {
    settings: {
        text_only: false, // $textonly
        enable_images: true, // $images
        debug: true, // $debug
        numberify: true, // $numberify_enable
        devmode: false, // $dev
        gamemode: "normal", /// $gamemode

        intro: true, // $intro
        tutorial: false, // $tutorial

        content: {
            // content toggles here
        }
    },

    player: {
        skills: {
            seduction: 0,
            vaginal: 0,
            penile: 0,
            anal: 0,
            oral: 0,
            hand: 0,
            feet: 0,
            chest: 0,
            thigh: 0,
            bottom: 0,
        },
        stats: {
            control: {
                max: 1000, // $controlmax
                current: 1000 // $control
            },
            trauma: {
                max: 5000, //$traumamax
                current: 0 // $trauma
            },
            stress: {
                max: 10010, // $stressmax
                current: 0 // $stress
            },
            physique: {
                max: 20000, // $physiquemax
                current: 3500 // $physique
            },
            arousal: {
                max: 10000, // $arousalmax
                current: 0 // $arousal ?
            },
            pain: {
                max: 1000, // $painmax ?
                current: 0 // $pain
            },
            fatigue: {
                max: 2000, // $tirednessmax
                current: 0 // $tiredness
            },
            beauty: {
                max: 10000, // $beautymax
                current: 100 // $beauty
            }
        },
        special_stats: {
            purity: 1000, // $purity
            submissive: 1000, // $submissive
            assertive: 0, // $assertive
            assertive_action: "trauma", // $assertiveaction
            awareness: {
                current: 0, // $awareness
                level: 0 // $awarelevel
            },
            fame: 0, // $fame
            fame_exhibitionism: 0, // $fameexhibitionism
            fame_prostitution: 0, // $fameprostitution
            fame_bestiality: 0, // $famebestiality
            fame_sex: 0, // $famesex
            fame_rape: 0, // $famerape
            fame_good: 0, // $famegood
            fame_business: 0, // $famebusiness
            fame_park: 0, // $famepark

            transformation: {
                wolf: {
                    build: 0, // $wolfbuild
                    girl: false // $wolfgirl
                }
            },

            oxygen: {
                max: 1200, // $oxygenmax
                current: 1200 // $oxygen
            }
        },
        possesions: {
            money: 500, // $money
            items: {
                clothing: {

                }
            }
        },
        looks: {
            development_level: 0, // $devlevel
            gender_appearance: '', // $playergenderappearance

            hair: {
                length: 200, // $hairlength
                color: '', // $haircolor
            }
        },
        school: {
            deliquency: 10, /// $deliquency

            cool: 120, // $cool
            cool_max: 400, // $coolmax

            school: 800, // $school

            math: 200, // $maths
            english: 200, // $english
            science: 200, // $science
            history: 200 // $history
        },
        data: {
            birth_month: "september", // $birthmonth
            birth_day: 3, // $birthday
            name: "It's you.",
            gender: 'f', // $playergender
            background: 'waif', // $background
            breast_size: '', // $breastsize
        }
    },

    location: {
        time: 420, // $time
        day: 0, // $days
        week_day: 1, // $weekday
        month: "september", // $month
        month_day: 4, // $monthday
        year: 2018, // $year
        map_id: 'overworld'
    },

    state: {
        combat: false, // $combat
        skill_level_up: [], // contains the name of the skill that leveled up so things can display after combat

        water: false, // if in water - $water
        underwater_time: 0, // $underwatertime
        underwater: 0, // if underwater - $underwater

        player: {
            mind: {
                /*Disables you if 1.*/
                panic_paralysis: false,
                panic_violence: false,
                trance: false,
                /*Builds during consensual, provides benefit at end.*/
                assertive: false,
                /*Set to 1 if NPC is successfully asked not to go ham on the specified body part.*/
                no_vaginal: false,
                no_anal: false,
                no_penile: false,
                /*Trauma and stress at encounter's start.*/
                trauma_saved: 0,
                stress_saved: 0,
                /*Trauma and stress gained during encounter.*/
                trauma_gain: 0,
                stress_gain: 0,
            },

            body: {
                /*Set to a string indicating which body part it is occupied by, such as "penis" or "lefthand"*/
                vagina_use: 0,
                penis_use: 0,
                mouth_use: 0,
                anus_use: 0,
                thigh_use: 0,
                bottom_use: 0,
                feet_use: 0,
                left_arm: 0,
                right_arm: 0,
                chest_use: 0,
                head: 0,
                left_let: 0,
                right_leg: 0,
                breast_use: 0,
                left_nipple: 0,
                right_nipple: 0,
                /*Set to a string indicating both which body part it is occupied by, and the type of "hold" that body part has on in. Such as "anusentrance" or "anusimminent"*/
                vagina_state: 0,
                penis_state: 0,
                anus_state: 0,
                mouth_state: 0,
                left_arm_state: 0,
                right_arm_state: 0,
                feet_state: 0,
                /*More stuff I hope is self-explanatory*/
                penis_fucked: false,
                vagina_fucked: false,
                pull_away: false,
                orgasm_current: 0,
                water_wash: 0,
            }
        },

        encounter: {
            state: {
                /*Makes actions easier.*/
                enemy_trust: 0,
                /*Encounter ends if this reaches 0.*/
                enemy_health: 0,
                enemy_health_max: 0,
                /*Encounter ends if this reaches max.*/
                enemy_arousal: 0,
                enemy_arousal_max: 0,
                /*Impacts NPC behaviour during encounters.*/
                enemy_anger: 0,
                enemy_anger_max: 0,
            },

            audience: {
                /*This is the audience for regular encounters, and is separate to dance audiences.*/
                /*What NPCs are in the audience.*/
                audience_camera: [
                    // description of the person
                ],/*audience_camera_2 - 6 too*/
                /*Forces all the audience to be boys.*/
                audience_force_boy: false,
                /*Forces all the audience to be girls.*/
                audience_force_girl: false,
            }
        }
    },

    playthrough_stats: {
        rape: 0, // $rapestat
        beast_rape: 0, // $beastrapestat
        tentacle_rape: 0, // $tentaclerapestat
        molested: 0, // $moleststat

        vaginal: 0, // $vaginalstat
        vaginal_ejac: 0, // $vaginalejacstat
        vaginal_entrance_ejac: 0, // $vaginalentranceejacstat
        anal: 0, // $analstat
        anal_ejac: 0, // $analejacstat
        oral: 0, // $oralstat
        oral_ejac: 0, // $oralejacstat
        hand: 0, // $ohandstat
        hand_ejac: 0, // $handejacstat
        feet: 0, // $feetstat
        feet_ejac: 0, // $feetejacstat
        thigh: 0, // $thighstat
        thigh_ejac: 0, // $thighejacstat
        bottom: 0, // $bottomstat
        bottom_ejac: 0, // $bottomejacstat
        penile: 0, // $penilestat
        penile_ejac: 0, // $penileejacstat
        face_ejac: 0, // $faceejacstat
        chest: 0, // $cheststat
        chest_ejac: 0, // $chestejacstat
        hair_ejac: 0, // $hairyejacstat
        tummy_ejac: 0, // $tummyejacstat
        neck_ejac: 0, // $neckejacstat
        ejac: 0, // $ejacstat
        orgasm: 0, // $orgasmstat

        clothes_stripped: 0, // $clothesstripstat
        clothes_ruined: 0, // $clothesruinstat

        hit: 0, // $hitstat
        attack: 0, // $attackstat

        prostitution: 0, // $prostitutionstat
        forced_prostitution: 0, // $forcedprostitutionstat

        tables_served: 0, // $tablesservedstat
        parasite: 0, // $parasitestat
        pass_out: 0, // $passoutstat

        masturbation: 0, // $masturbationstat
        masturbation_orgasm: 0, // $masturbationorgasmstat
        masturbation_time: 0, // $masturbationtimestat

        dance: 0, // $dancestat
        pull_away: 0, // $pullaway

        no_vaginal: 0, // $novaginal
        no_anal: 0, // $noanal
        no_penile: 0, // $nopenile

        vaginal_chastity: 0, // $vaginalchastity
        anal_chastity: 0, // $analchastity
        penile_chastity: 0, // $penilechastity
        drinks_served: 0, // $drinksservedstat
    }
};

export const NpcShared = {
    state: {
        npc: null, // npc name
        type: null, // npc type "man", "beast", "swarm", "parasite", "tentacle"
        strength: 0, // unused for now
    },
    specific_speech: {
        /*Speech variables that disappear after the current NPC's turn, meaning other NPCs won't use them.*/
        /* I don't even WANNA touch this shit */
        speech_orgasm_weak_cum_count: 0,
        speech_orgasm_no_cum_count: 0,
        speech_orgasm_count: 0,
        speech_orgasm_repeat: 0,
        speech_crossdress_angry: 0,
        speech_crossdress_aroused: 0,
        speech_crosdress_shock: 0,
        speech_crossdress_disappointed: 0,
        speech_cum: 0,
        speech_penis_penetrated: 0,
        speech_vagina_penetrated: 0,
        speech_anus_penetrated: 0,
        speech_mouth_penetrated: 0,
        speech_other_anus_penetrated: 0,
        speech_vagina_imminent: 0,
        speech_penis_imminent: 0,
        speech_anus_imminent: 0,
        speech_mouth_imminent: 0,
        speech_other_anus_imminent: 0,
        speech_vagina_entrance: 0,
        speech_penis_entrance: 0,
        speech_anus_entrance: 0,
        speech_mouth_entrance: 0,
        speech_other_anus_entrance: 0,
        speech_vagina_withhold: 0,
        speech_anus_withhold: 0,
        speech_penis_withold: 0,
        speech_other_anus_withold: 0,
        speech_vagina: 0,
        speech_penis: 0,
        speech_anus: 0,
        speech_vagina_mouth: 0,
        speech_vagina_vagina: 0,
        speech_beat: 0,
        speech_hit: 0,
        speech_throat: 0,
        speech_vagina_foot: 0,
        speech_penis_foot: 0,
        speech_chastity: 0,
        speech_struggle: 0,
        speech_strip_struggle: 0,
        speech_spank: 0,
        speech_arms: 0,
        speech_clit: 0,
        speech_glans: 0,
        speech_bottom: 0,
        speech_hair: 0,
        speech_chest_rub: 0,
        speech_breast_rub: 0,
        speech_vagina_flaunt: 0,
        speech_vagina_virgin: 0,
        speech_anus_virgin: 0,
        speech_mouth_virgin: 0,
        speech_penis_virgin: 0,
        speech_penis_escape: 0,
        speech_vagina_escape: 0,
        speech_anus_escape: 0,
    }
};

export const NpcHuman = {
    state: {
        type: "man",
    },
    person: {
        /*These all have five additional versions, the same but with a number on the end, 2 - 6. One for each NPC "slot" in scenes and combat. Note that the first instance sometimes has the number 1 on the end, and sometimes does not.*/
        /*Controls correct grammar and capitalisation during encounters.*/
        intro: false,
        /*What their body parts are occupied by. Note this is different from, but will impact, the actions they take.*/
        lefthand: false,
        righthand: false,
        penis: false,
        vagina: false,
        mouth: false,
        /*NPC gender, pronouns and description, like "muscular" or "thin".*/
        gender: 'f',
        pronoun: 'thin',
        description: null,
    }
};

export const NpcBeast = {
    state: {
        type: "beast"
    },
    beast: {
        /*How many beasts are waiting their turn, or having their turn.*/
        beast_no: 0,
        /*How many beasts in the encounter total.*/
        beast_nomax: 0,
        /*Type of beast. Dog, wolf etc.*/
        beast_name: "none",
        /*If they have claws.*/
        claws: 0,
        /*Currently active beast's gender and pronouns.*/
        data: [/*{
            gender: 'f', // beastgender
            pronoun: 'x' // beastpronoun
        }*/]
    }
};

export const NpcSwarm = {
    state: {
        type: "swarm"
    },
    swarm: {
        swarm: [],/*Also swarm2, swarm3...up to swarm10*/
        swarm_pending: 0,
        /*Set at start of encounter*/
        swarm_steady: 0,
        swarm_Steady: 0,
        swarm_name: 0,
        swarm_move: 0,
        swarm_active: 0,
        swarm_creature: 0,
        swarm_count: 0,
        /*I tried something different with the swarms, having each action they could take associated with a variable, which would then be used to output text elsewhere*/
        swarm_chest_molest: 0,
        swarm_chest_grab: 0,
        swarm_chest_grab_intro: 0,
        swarm_chest_grab_clothes: 0,
        swarm_chest_clothed: 0,
        swarm_chest_covered: 0,
        swarm_activate: 0,
        swarm_spill: 0,
        swarm_back: 0,
        swarm_back_molest: 0,
        swarm_back_grab: 0,
        swarm_back_grab_intro: 0,
        swarm_back_grab_under_clothed: 0,
        swarm_back_under_clothed: 0,
        swarm_back_grab_lower_clothed: 0,
        swarm_back_lower_clothed: 0,
        swarm_back_cover: 0,
        swarm_back_inside: 0,
        swarm_back_inside_intro: 0,
        swarm_back_grab_lower_chastity: 0,
        swarm_front: 0,
        swarm_front_molest: 0,
        swarm_front_grab: 0,
        swarm_front_grab_intro: 0,
        swarm_front_grab_under_clothed: 0,
        swarm_front_under_clothed: 0,
        swarm_front_grab_lower_clothed: 0,
        swarm_front_lower_clothed: 0,
        swarm_front_cover: 0,
        swarm_front_inside: 0,
        swarm_front_inside_intro: 0,
        swarm_front_grab_lower_chastity: 0,
        front: 0,
        back: 0,
        chest: 0,
    }
};

export const NpcVore = {
    state: {
        type: "swarm"
    },
    vore: {
        /*Set at encounter's start.*/
        vore_strength: 0,
        /*How hard you struggle.*/
        vore_struggle: 0,
        /*If the encounter has tentacles.*/
        vore_tentacles: false,
        /*What part of the beast's digestive system you're in.*/
        vore_stage: 0,
        /*Name of creature.*/
        vore_creature: null,
        /*Set to 1 if swallowed, reset at end of encounter.*/
        swallowed: false,

    }
};

export const NpcTentacles = {
    state: {
        type: "tentacles"
    },
    tentacles: {
        /*Set at encounter's start*/
        /*Total number of tentacles.*/
        tentacle_no: 0,
        /*Number of active tentacles.*/
        active_tentacle_no: 0,
        /*How much health each tentacle has. Set at start.*/
        tentacle_health: 0,
        /*There alternative versions of the following, with the number 1 replaced with 2 - 16, covering each possible tentacle*/
        /*What each tentacle is doing.*/
        tentacle: [/*{
            description: null,
            shaft: false,
            head: false,
            health: 0
        }*/],
    }
};