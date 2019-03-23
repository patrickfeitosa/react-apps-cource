export function inc() {
    return {
        type: 'INC',
    };
};

export function dec() {
    return {
        type: 'DEC',
    };
};

export function stepChanged(ev) {
    return {
        type: 'STEP_CHANGED',
        payload: ev.target.value,
    };
};