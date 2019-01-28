export function checkForDaylightExposure() {
    const exposedState = parseInt(State.variables.exposed);
    const dayState = State.variables.daystate;

    return exposedState >= 1 && dayState !== "night";
}