import { userProvider } from '../providers/user';
import { userConsts } from '../constants';
import { alertActions } from '../actions';
import { history } from '../helpers';

export const userActions = {
    register
};

/**
 * Register a new user
 * @param {*} user 
 */
const register = user => {
    return dispatch => {
        dispatch(request(user));

        userProvider.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    const request = user => ({ type: userConsts.REGISTER_REQUEST, user });
    const success = user => ({ type: userConsts.REGISTER_SUCCESS, user });
    const failure = error =>({ type: userConsts.REGISTER_FAILURE, error });
}