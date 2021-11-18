import { GET_ALL_PRODUCT, LOADING_PRODUCT, SET_CHANGEABLE_PRODUCT_NAME } from '../type';

const initialState = {
    dataProduct: [], // ini sebagai cth dulu
    changeable_Product_Name: '',
    loading_Product: false
};

export default function dataProductReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                dataProduct: action.payload
            };
        case SET_CHANGEABLE_PRODUCT_NAME:
            return {
                ...state,
                changeable_Product_Name: action.payload
            };
        case LOADING_PRODUCT:
            return {
                ...state,
                loading_Product: true
            };
        default:
            return state;
    }
}
