import { userConsts } from '../constants';

const registration = (state={}, action) => {
    switch(action.type){
        case userConsts.REGISTER_REQUEST:
            return { registering: true }
        case userConsts.REGISTER_SUCCESS:
            return { registering: false }
        case userConsts.REGISTER_FAILURE:
            return { registering: false }
        default:
            return state
    }
    
}

export default registration;