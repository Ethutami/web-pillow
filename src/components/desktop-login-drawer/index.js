import AllButtonFunctions from '../../utils/re-useable-functions/AllButtonFunctions';
import MyIconButton from '../../utils/re-useable-components/buttons/MyIconButton';
import { makeStyles } from '@mui/styles';
import { Drawer, List, ListItemText, ListItem, Box, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';

//Icon
import AccountIcon from '@mui/icons-material/AccountCircle';
import MainBlackButton from '../../utils/re-useable-components/buttons/MainBlackButton';
import DropdownKabupaten from '../../utils/re-useable-components/dropdown/dropdown-kabupaten';
import DropdownKecamatan from '../../utils/re-useable-components/dropdown/dropdown-kecamatan';
import AutoCompleteProvince from '../../utils/re-useable-components/dropdown/AutoComplete-Province';

const useStyles = makeStyles((theme) => ({
    mainLogin: {
        backgroundColor: 'white',
        width: 500,
        height: '100%',
        position: 'fixed',
        zIndex: 2,
        top: 0,
        right: -300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    box: {
        position: 'relative',
        [theme.breakpoints.down('mobile')]: {
            width: 280
        }
        // padding: '0px 20px 0px 20px'
    },
    options: {
        marginTop: 23,
        display: 'flex',
        padding: '0px 20px 0px 20px',
        // justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        justifyContent: 'space-between',
        [theme.breakpoints.up('mobile')]: {
            width: '100%'
        },

        '& li': {
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: 18,
            listStyleType: 'none',
            transition: 'all .2s ease'
        },
        '&:hover': {
            opacity: '1'
        },
        '&.active': {
            opacity: '1'
        },
        '&:nth-of-type(2)': {
            marginRight: 20
        },
        '&:last-of-type': {
            marginLeft: 'auto'
        }
    },
    containerLogin: {
        marginTop: 23
    },
    containerChangePassword: {
        marginTop: 23
    },
    EmailPassword: {
        width: '88%',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3)
    },
    text: {
        fontSize: 25,
        fontWeight: 500
    },
    textEmail: {
        fontSize: 14,
        fontWeight: 400
    },
    textChangePassword: {
        fontSize: 25,
        fontWeight: 500,

        [theme.breakpoints.down('mobile')]: {
            fontSize: 23
        }
    },
    icon: {
        position: 'absolute',
        top: 45,
        right: 20
    },
    checkbox: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(1),

        '& p': {
            fontSize: 15,
            fontWeight: 400
        }
    },
    loginButton: {
        width: '88%',
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(3)
    },
    textAcc: {
        // fontSize: 15,
        // fontWeight: 400
        marginLeft: theme.spacing(2),
        cursor: 'pointer',
        '& p': {
            fontSize: 15,
            fontWeight: 400,
            [theme.breakpoints.down('mobile')]: {
                fontSize: 13
            }
        },
        '& .textColorRed': {
            color: '#FF7373',
            [theme.breakpoints.down('mobile')]: {
                fontSize: 13,
                color: '#FF7373'
            }
        }
    },
    // textColorRed: {
    //     color: '#FF7373',
    //     [theme.breakpoints.down('mobile')]: {
    //         fontSize: 13,
    //         color: '#FF7373'
    //     }
    // },
    boxForgot: {
        border: '2px solid #7CD27F',
        background: 'white',
        width: '88%',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3),
        padding: '10px 10px',
        '& p': {
            fontSize: 16,
            fontWeight: 400,
            // lineHeight: 27,
            letterSpacing: 0.5
        }
    }
}));

const DesktopLoginDrawer = ({ menuOpens, setMenuOpen }) => {
    const [register, setRegister] = useState(false);
    const [forgot, setForgot] = useState(false);
    const [boxForgot, setBoxForgot] = useState(false);

    console.log('register', register);
    console.log('forgot', forgot);

    const onForgotPass = () => {
        setForgot(true);
        setRegister(true);
    };

    const onBackLoginRegister = () => {
        setForgot(false);
        setRegister(false);
    };

    const OnBackRegister = () => {
        setForgot(false);
        setRegister(true);
    };

    const OnToForgotBox = () => {
        setRegister(false);
        setForgot(false);
        setBoxForgot(true);
    };

    const ClickIconClose = () => {
        setMenuOpen(false);
        setRegister(false);
        setForgot(false);
        setBoxForgot(false);
    };

    const onRegisterClick = () => {
        setRegister(true);
    };

    const onForgorClick = () => {
        setForgot(true);
    };
    const classes = useStyles();
    const [option, setOption] = useState(1);
    // const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { handleClickSignIn } = AllButtonFunctions();

    const klik = () => {
        setMenuOpen(!menuOpens);
    };

    let LoginForm = (
        <List>
            <ListItem className={classes.containerLogin}>
                <p className={classes.text}>Login</p>
            </ListItem>
            {/* <div className={`${option === 1 ? 'sign-in' : option === 2 ? 'sign-up' : 'forgot'}`}> */}
            <div className={classes.EmailPassword}>
                <TextField
                    label="Email Anda"
                    size="small"
                    fullWidth
                    style={{ marginBottom: 15 }}
                    // required="option === 1 || option === 2 ? true : false"
                />
                <TextField
                    label="Masukan Password Anda"
                    size="small"
                    type="password"
                    fullWidth
                    style={{ marginBottom: 15 }}
                    // required="option === 1 || option === 2 ? true : false"
                    // disabled="option === 3 ? true : false"
                />
            </div>
            <div className={classes.checkbox}>
                <Checkbox style={{ color: '#111' }} />
                <p> Remember Me</p>
            </div>
            <div className={classes.loginButton}>
                {' '}
                <MainBlackButton onClick={() => setMenuOpen(false)}> LOGIN </MainBlackButton>
            </div>
            <div className={classes.textAcc}>
                <p>
                    Dont have account ?
                    <span>
                        <a className="textColorRed" onClick={() => setRegister(true)}>
                            {' '}
                            <u>Register ?</u>{' '}
                        </a>
                    </span>{' '}
                </p>
                <p>
                    {' '}
                    Forgot Password?{' '}
                    <span>
                        <a className="textColorRed" onClick={onForgotPass}>
                            <u> Click</u>
                        </a>
                    </span>
                </p>
            </div>
            {/* </div> */}
        </List>
        // <ClearIcon onClick={() => setMenuOpen(false)} className={classes.icon} />
    );

    let RegisterForm = (
        <List>
            <ListItem className={classes.containerLogin}>
                <p className={classes.text}>Register</p>
            </ListItem>
            <div className={classes.EmailPassword}>
                <TextField label="Nama" size="small" type="text" fullWidth style={{ marginBottom: 15 }} />
                <TextField label="Alamat" size="small" type="text" fullWidth style={{ marginBottom: 15 }} />
                <TextField label="No Telp" size="small" type="number" fullWidth style={{ marginBottom: 15 }} />
                <div style={{ marginBottom: 15 }}>
                    <AutoCompleteProvince />
                </div>
                <div style={{ marginBottom: 15 }}>
                    <DropdownKabupaten />
                </div>
                <TextField label="Email" size="small" type="text" fullWidth style={{ marginBottom: 15 }} />
                <TextField label="Password" size="small" type="password" fullWidth style={{ marginBottom: 15 }} />
                <TextField
                    label="Confirm Password"
                    size="small"
                    type="password"
                    fullWidth
                    style={{ marginBottom: 15 }}
                />
            </div>
            <div className={classes.loginButton}>
                {' '}
                <MainBlackButton onClick={() => setMenuOpen(false)}> REGISTER </MainBlackButton>
            </div>
            <div className={classes.textAcc}>
                <p>
                    {' '}
                    Have an account ?
                    <span>
                        <a className="textColorRed" onClick={() => setRegister(false)}>
                            {' '}
                            <u>Login</u>{' '}
                        </a>
                    </span>{' '}
                </p>
            </div>
            {/* <div>
                {' '}
                <button onClick={() => setRegister(false)}> coba</button>
            </div> */}
        </List>
    );

    let ChangePassword = (
        <div>
            <List>
                <ListItem className={classes.containerChangePassword}>
                    <p className={classes.textChangePassword}>Change Password</p>
                </ListItem>
            </List>
            <div className={classes.EmailPassword}>
                <TextField label="Email" size="small" type="text" fullWidth style={{ marginBottom: 15 }} />
            </div>
            <div className={classes.loginButton}>
                {' '}
                <MainBlackButton onClick={OnToForgotBox}> SUBMIT </MainBlackButton>
            </div>
            <div className={classes.textAcc}>
                <p>
                    {' '}
                    Have an account ?
                    <span>
                        <a className="textColorRed" onClick={onBackLoginRegister}>
                            {' '}
                            <u>Login</u>{' '}
                        </a>
                        {/* <a style={{ color: '#474747' }}> or </a> */}
                        {/* <a onClick={OnBackRegister}>
                            {' '}
                            <u>Register</u>{' '}
                        </a> */}
                    </span>{' '}
                </p>
                <p>
                    {' '}
                    or
                    <span>
                        <a className="textColorRed" onClick={OnBackRegister}>
                            {' '}
                            <u>Register</u>{' '}
                        </a>
                    </span>{' '}
                </p>
            </div>

            {/* <button onClick={onBackLoginRegister}> login</button>
            <button onClick={OnBackRegister}> register</button>
            <button onClick={OnToForgotBox}> submit</button> */}
        </div>
    );

    let BoxForgot = (
        <div>
            <List>
                <ListItem className={classes.containerChangePassword}>
                    <p className={classes.ChangePassword}>Change Password</p>
                </ListItem>
                <div className={classes.boxForgot}>
                    <p>Link reset password has been sent to your email. Please kindly check your email!</p>
                </div>
            </List>
        </div>
    );

    return (
        <div>
            <Drawer anchor="right" open={menuOpens} variant="persistent">
                <Box sx={{ width: 350 }} role="presentation" className={classes.box}>
                    {forgot ? ChangePassword : register ? RegisterForm : boxForgot ? BoxForgot : LoginForm}
                    <ClearIcon onClick={ClickIconClose} className={classes.icon} />
                </Box>
            </Drawer>
        </div>
    );
};

export default DesktopLoginDrawer;
