import {OPEN_MODAL, CLOSE_MODAL} from '../actions/index';

const initialState = {
    opened:false,
    props:{}
}

export default function (state = initialState, action){
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                ...{  opened:true,
                      props:action.payload.props

                }
            };
        case CLOSE_MODAL:
            return { ...state, ...{opened:false}};
        default:
            return state;
    }
}
