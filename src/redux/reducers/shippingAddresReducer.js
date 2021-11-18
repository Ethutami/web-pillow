import { SET_LOCATION_PROVINCE, SET_ADD_KECAMATAN } from '../type';

const initialState = {
    locationProvince: '*Pilih Provinsi',
    stateKecamatan: 'Kecamatan'
};

export default function shippingAddresReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOCATION_PROVINCE:
            return {
                ...state,
                locationProvince: action.payload
            };
        case SET_ADD_KECAMATAN:
            return {
                ...state,
                stateKecamatan: action.payload
            };
        default:
            return state;
    }
}
