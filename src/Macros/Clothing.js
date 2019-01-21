Macro.add('underintegrity', {
    isWidget: true,
    handler: () => {
        let output = '';
        const underIntegrity = State.variables.underintegrity;
        const underIntegrityMax = State.variables.underintegritymax;

        if (underIntegrityMax !== 0) {
            if (underIntegrity <= (underIntegrityMax / 10) * 2)
                output = 'tattered \t';
            else if (underIntegrity <= (underIntegrityMax / 10) * 5)
                output = 'torn \t';
            else if (underIntegrity <= (underIntegrityMax / 10) * 9)
                output = 'frayed \t';
        }

        return output;
    }
});

Macro.add('lowerintegrity', {
    isWidget: true,
    handler: () => {
        let output = '';
        const lowerIntegrity = State.variables.lowerintegrity;
        const lowerIntegrityMax = State.variables.lowerintegritymax;

        if (lowerIntegrityMax !== 0) {
            if (lowerIntegrity <= (lowerIntegrityMax / 10) * 2)
                output = 'tattered \t';
            else if (lowerIntegrity <= (lowerIntegrityMax / 10) * 5)
                output = 'torn \t';
            else if (lowerIntegrity <= (lowerIntegrityMax / 10) * 9)
                output = 'frayed \t';
        }

        return output;
    }
});

Macro.add('upperintegrity', {
    isWidget: true,
    handler: () => {
        let output = '';
        const upperIntegrity = State.variables.upperintegrity;
        const upperIntegrityMax = State.variables.upperintegritymax;

        if (upperIntegrityMax !== 0) {
            if (upperIntegrity <= (upperIntegrityMax / 10) * 2)
                output = 'tattered \t';
            else if (upperIntegrity <= (upperIntegrityMax / 10) * 5)
                output = 'torn \t';
            else if (upperIntegrity <= (upperIntegrityMax / 10) * 9)
                output = 'frayed \t';
        }

        return output;
    }
});