// import axios from 'axios';
import { SET_LOCATION_PROVINCE, SET_ADD_KECAMATAN } from '../type';

export const setLocProvince = (selected) => (dispatch) => {
    dispatch({
        type: SET_LOCATION_PROVINCE,
        payload: selected
    });
};

//
export const addKecamatan = (selected) => (dispatch) => {
    dispatch({
        type: SET_ADD_KECAMATAN,
        payload: selected
    });
};
