import axios from 'axios';
import { GET_ALL_PRODUCT, SET_CHANGEABLE_PRODUCT_NAME } from '../type';

// get ALL DATA PRODUCT
export const getAllDataProduct = () => async (dispatch) => {
    const API = 'https://fakestoreapi.com/products?limit=6';
    try {
        const res = await axios.get(API);
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const goToDetailProductPage = (selected) => (dispatch) => {
    dispatch({
        type: SET_CHANGEABLE_PRODUCT_NAME,
        payload: selected
    });
};
