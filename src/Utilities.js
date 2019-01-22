export function macroSetup(tag, target, isWidget = false) {
    Macro.add(tag, {
        isWidget: isWidget,
        handler: function() {
            const self = this;

            let instance = new target(self);
            return instance.run();
        }
    });
}