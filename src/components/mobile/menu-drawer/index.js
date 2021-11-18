import Image from 'next/image';
import Logo from '../../../../public/assets/images/logo-tokyofoam.png';
import * as React from 'react';
import AllButtonFunctions from '../../../utils/re-useable-functions/AllButtonFunctions';
import MyIconButton from '../../../utils/re-useable-components/buttons/MyIconButton';
import MainBlackButton from '../../../utils/re-useable-components/buttons/MainBlackButton';

//Mat UI For Drawerr
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

//Icon
import WhistlistIcon from '@mui/icons-material/FavoriteBorder';
import ProfileIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';

const useStyles = makeStyles(() => ({
    menuIcon: {
        color: 'black'
    }
}));

export default function MenuDrawer() {
    const classes = useStyles();
    const {
        handleClickHome,
        handleClickAboutUs,
        handleClickProductPage,
        handleClickHowToBuy,
        handleClickContactUs,
        handleClickProfilePage,
        handleClickWishlistPage,
        handleClickGoToRegisterPage
    } = AllButtonFunctions();
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const [showSI, setShowSI] = React.useState(false);

    const goToSignInLeftDrawer = () => {
        setShowSI(!showSI);
    };

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpenDrawer(!isOpenDrawer);
        setShowSI(false);
    };

    const listWhenNotLogin = (
        <Box sx={{ width: 250 }} role="presentation">
            <div style={{ width: '100%' }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }}>
                    <Image src={Logo} alt="Logo" width={80} height={45} />
                </div>
            </div>
            <List style={{ width: '100%' }} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                <div>
                    <ListItem button onClick={handleClickHome}>
                        <ListItemText style={{ marginLeft: 13 }}>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickAboutUs}>
                        <ListItemText style={{ marginLeft: 13 }}>About Us</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickProductPage}>
                        <ListItemText style={{ marginLeft: 13 }}>Prouduct</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickHowToBuy}>
                        <ListItemText style={{ marginLeft: 13 }}>How To Buy</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickContactUs}>
                        <ListItemText style={{ marginLeft: 13 }}>Contact Us</ListItemText>
                    </ListItem>
                </div>
                <div style={{ marginTop: '30%' }}>
                    <ListItem button onClick={handleClickWishlistPage}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 13 }}>
                            <WhistlistIcon style={{ marginRight: 10 }} />
                            <ListItemText style={{ marginTop: 6 }}>Whislist</ListItemText>
                        </div>
                    </ListItem>
                </div>
            </List>
            <ListItem button onClick={goToSignInLeftDrawer}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 13 }}>
                    <LoginIcon style={{ marginRight: 10 }} />
                    <ListItemText style={{ marginTop: 6 }}>Sign In</ListItemText>
                </div>
            </ListItem>
            <p style={{ fontSize: 13, marginLeft: 32, marginTop: 10 }}>
                Dont have an account ?<br />
                <span onClick={handleClickGoToRegisterPage}>
                    <a style={{ fontSize: 13, color: 'red', textDecoration: 'underline' }}>register</a>
                </span>{' '}
                here
            </p>
        </Box>
    );

    const listWhenLogin = (
        <Box sx={{ width: 300 }} role="presentation">
            <div style={{ width: '100%' }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }}>
                    <Image src={Logo} alt="Logo" width={110} height={60} />
                </div>
            </div>
            <List style={{ width: '100%' }} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                <div>
                    <ListItem button onClick={handleClickHome}>
                        <ListItemText style={{ marginLeft: 13 }}>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickAboutUs}>
                        <ListItemText style={{ marginLeft: 13 }}>About Us</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickProductPage}>
                        <ListItemText style={{ marginLeft: 13 }}>Prouduct</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickHowToBuy}>
                        <ListItemText style={{ marginLeft: 13 }}>How To Buy</ListItemText>
                    </ListItem>
                    <ListItem button onClick={handleClickContactUs}>
                        <ListItemText style={{ marginLeft: 13 }}>Contact Us</ListItemText>
                    </ListItem>
                </div>
                <div style={{ marginTop: '30%' }}>
                    <ListItem button onClick={handleClickWishlistPage}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 13 }}>
                            <WhistlistIcon style={{ marginRight: 10 }} />
                            <ListItemText style={{ marginTop: 6 }}>Whislist</ListItemText>
                        </div>
                    </ListItem>
                    <ListItem button onClick={handleClickProfilePage}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 13 }}>
                            <ProfileIcon style={{ marginRight: 10 }} />
                            <ListItemText style={{ marginTop: 6 }}>Profile</ListItemText>
                        </div>
                    </ListItem>
                </div>
            </List>
            <ListItem button>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 13 }}>
                    <LogoutIcon style={{ marginRight: 10 }} />
                    <ListItemText style={{ marginTop: 6 }}>Sign Out</ListItemText>
                </div>
            </ListItem>
        </Box>
    );

    const formLogin = (
        <Box sx={{ width: 250 }} role="presentation">
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 36 }}>
                <p style={{ fontWeight: 500, fontSize: 25 }}>Login</p>
                <div style={{ width: 110 }}>
                    <MainBlackButton>Login</MainBlackButton>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <MyIconButton onClick={toggleDrawer} tip="Menu">
                    <MenuIcon className={classes.menuIcon} />
                </MyIconButton>
                <Drawer anchor={'left'} open={isOpenDrawer} onClose={toggleDrawer}>
                    {auth ? listWhenLogin : showSI ? formLogin : listWhenNotLogin}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
