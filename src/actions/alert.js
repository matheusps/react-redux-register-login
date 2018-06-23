import { alertConsts } from '../constants';

export const alertActions = {
    success,
    error,
    clear
};

const success = (message) => {
    return { type: alertConsts.SUCCESS, message };
}

const error = (message) => {
    return { type: alertConsts.ERROR, message };
}

const clear = () => {
    return { type: alertConsts.CLEAR };
}