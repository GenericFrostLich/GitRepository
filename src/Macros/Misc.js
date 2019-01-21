Macro.add('time', {
    handler: () => {
        const time = State.variables.time;
        const hour = Math.floor(time/60);

        let dayState = '';

        if (hour < 6)
            dayState = 'night';
        else if (hour < 9)
            dayState = 'dawn';
        else if (hour < 18)
            dayState = 'day';
        else if (hour < 21)
            dayState = 'dusk';
        else
            dayState = 'night';

        State.variables.hour = hour;
        State.variables.daystate = dayState;
    }
});

function colourContainerClasses() {
    var V = State.variables;
    return 'hair-'  + (V.haircolour||'').replace(/ /g,'-') +
        ' ' + 'eye-'   + (V.eyecolour||'').replace(/ /g,'-') +
        ' ' + 'upper-' + (V.uppercolour||'').replace(/ /g,'-') +
        ' ' + 'lower-' + (V.lowercolour||'').replace(/ /g,'-') +
        ' ' + 'under-' + (V.undercolour||'').replace(/ /g,'-')
}

window.colourContainerClasses = colourContainerClasses; // export function
