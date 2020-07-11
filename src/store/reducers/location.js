import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tableData: null,
    error: null,
    loading: false,
};

const locationStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const locationSuccess = (state, action) => {
    return updateObject(state, {
        tableData: action.tableData,
        error: null,
        loading: false
    });
};

const locationFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOCATION_START: return locationStart(state, action);
        case actionTypes.LOCATION_SUCCESS: return locationSuccess(state, action);
        case actionTypes.LOCATION_FAIL: return locationFail(state, action);
        default:
            return state;
    }
};

export default reducer;