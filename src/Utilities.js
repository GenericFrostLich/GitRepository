export function macroSetup(tag, target, output = false, asFunction = false) {
    Macro.add(tag, {
        isWidget: false,
        handler: function() {
            const self = this;

            let returnValue = '';

            if (asFunction) {
                returnValue = target(self);
            }
            else {
                let instance = new target(self);
                returnValue = instance.run();
            }

            if (output)
                $(self.output).wiki(returnValue);
        }
    });
}