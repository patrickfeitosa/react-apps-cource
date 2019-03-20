export function changeValue({ currentTarget }) {
    return {
        type: 'VALUE_CHANGED',
        payload: currentTarget.value,
    }
};