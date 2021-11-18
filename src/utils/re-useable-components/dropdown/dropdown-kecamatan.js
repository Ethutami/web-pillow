import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { setLocProvince, addKecamatan } from '../../../redux/actions/dataShippingAddresActions';
// import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

//Redux
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
    MainContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',

        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'space-between'

        // width: '100%'
    },
    // DropdownWidth: {
    //     width: '100%'
    // }
    MainKecamatan: {
        // width: '100%'
    }
}));

const indonesia = require('territory-indonesia');

export default function DropdownKecamatan() {
    const { locationProvince } = useSelector((state) => state.shippingAddres);
    const [cekDistric, setCekDistric] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        indonesia
            .getDistricById(`${locationProvince}`)
            .then((res) => setCekRegency(res))
            .catch((err) => console.log(err));
    }, [locationProvince]);

    console.log('regency coyy', cekRegency);

    const arrKabupaten = cekRegency.map((el) => {
        return el.name;
    });

    console.log('kecamtan cuy', arrKabupaten);

    return (
        // <div className={classes.MainContainer}>
        <div className={classes.MainKecamatan}>
            <TextField
                name="City"
                value={locationProvince}
                fullWidth={true}
                size="small"
                required
                id="outlined-required"
                variant="outlined"
                label="Kecamatan"
                select={true}
                placeholder="Jangan lupa diisi ya"
            >
                {arrKabupaten.map((el, i) => (
                    <MenuItem
                        key={i}
                        value={el}
                        onClick={(e) => {
                            dispatch(setLocProvince(el));
                            dispatch(addKecamatan(el));
                        }}
                    >
                        {el}
                    </MenuItem>
                ))}
            </TextField>
        </div>
        // </div>
    );
}
