import axios from 'axios';

import * as actionTypes from './actionTypes';

export const locationStart = () => {
    return {
        type: actionTypes.LOCATION_START
    };
};

export const locationSuccess = (tableData) => {
    return {
        type: actionTypes.LOCATION_SUCCESS,
        tableData: tableData
    };
};

export const locationFail = (error) => {
    return {
        type: actionTypes.LOCATION_FAIL,
        error: error
    };
};


export const location = () => {
    return dispatch => {
        dispatch(locationStart());
        let url = 'https://reqres.in/api/users?page=2';
        axios.get(url)
            .then(response => {
                dispatch(locationSuccess(response.data.data));
                // console.log(response.data.data);

            })
            .catch(err => {
                // console.log(err.message);
                dispatch.LOCATION_FAIL(err.message)
                // dispatch(locationFail(err.response.data.error));
            });
    };
};