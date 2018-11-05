import types from './types';

const rootReducer = (state, action) => {
    switch (action.type) {
        case types.ACTION_CHANGE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case types.ACTION_CHANGE_SECOND_NAME:
            return { ...state, secondName: action.payload };
        default: 
            return state;
    }
};

export default rootReducer;