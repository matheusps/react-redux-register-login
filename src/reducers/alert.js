import { alertConsts } from '../constants/alert'

const alert = (state={}, action) => {

    switch(action.type){
        case alertConsts.SUCCESS:
            return{
                type: 'alert-success',
                msg: action.msg
            }
        
        case alertConsts.ERROR: 
            return{
                type: 'alert-error',
                msg: action.msg
            }
        
        case alertConsts.CLEAR:
            return{ }
        
        default:
            return state;
    }

    return null;
}

export default alert;