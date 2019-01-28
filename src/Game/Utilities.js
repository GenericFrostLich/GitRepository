export function macroSetup(tag, target, output = false, asFunction = false, functionTarget = 'run') {
    Macro.add(tag, {
        isWidget: false,
        handler: function() {
            const self = this;
            let returnValue = (asFunction ? target(self) : new target(self)[functionTarget]());

            if (output)
                $(self.output).wiki(returnValue);
        }
    });
}

export function get(target) {
    if (typeof target === "function")
        return target();

    return target;
}