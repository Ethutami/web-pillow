import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../../public/assets/images/logo-tokyofoam.png';
import MyIconButton from '../../utils/re-useable-components/buttons/MyIconButton';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';

import AllButtonFunctions from '../../utils/re-useable-functions/AllButtonFunctions';
import DesktopLoginDrawer from '../desktop-login-drawer';

//MaT UI
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';

//Icons
import BagIcon from '@mui/icons-material/LocalMall';
import WhistlistIcon from '@mui/icons-material/FavoriteBorder';
import AccountIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CallIcon from '@mui/icons-material/WifiCalling3Outlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import MenuDrawer from '../mobile/menu-drawer';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#FFFFFF',
        // boxShadow: 'none',
        '& a': {
            color: '#616161',
            marginLeft: 10
        }
    },
    theTopestHeadnav: {
        width: '100%',
        backgroundColor: '#F7F7F7'
    },
    slightlyBelowNavbar: {
        width: '100%',
        backgroundColor: '#F7F7F7'
    },
    phoneNumber: {
        width: '85%',
        height: 40,
        // backgroundColor: 'red',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('mobile')]: {
            width: '90%'
        }
    },
    callIcon: {
        color: '#A6A6A6',
        marginRight: 20,
        [theme.breakpoints.down('mobile')]: {
            fontSize: 15,
            marginRight: 10
        }
    },
    pPhoneNumberEmail: {
        fontSize: 15,
        color: '#A6A6A6',
        [theme.breakpoints.down('tablet')]: {
            fontSize: 15
        },
        [theme.breakpoints.down('mobile')]: {
            fontSize: 12
        }
    },
    emailIcon: {
        color: '#A6A6A6',
        marginLeft: 20,
        marginRight: 20,
        [theme.breakpoints.down('mobile')]: {
            fontSize: 15,
            marginRight: 10
        }
    },
    contToolbar: {
        width: '89%',
        // backgroundColor: 'red',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    contLiNav: {
        display: 'flex',
        listStyle: 'none',
        color: '#616161',

        // backgroundColor: 'purple',
        '& .eachLi': {
            marginLeft: 50,
            fontSize: 15,
            [theme.breakpoints.down('tablet')]: {
                fontSize: 12
            },
            '&:hover': {
                color: '#AAC6DB'
            },
            '&:active': {
                color: '#AAC6DB'
            },
            '&:focus': {
                color: '#AAC6DB'
            }
        },
        '& .eachLi:last-child': {
            marginRight: 50
        }
    },
    contIconButton: {
        display: 'flex',
        alignItems: 'center'
    },
    menuIcon: {
        color: 'black'
    }
}));

const Headnav = () => {
    const classes = useStyles();
    const router = useRouter();
    const currentPath = router.pathname;
    const [open, setOpen] = useState(false);

    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();
    const { handleClickHowToBuy, handleClickTesting } = AllButtonFunctions();

    const [menuOpens, setMenuOpen] = useState(false);
    let normalNav = (
        <div className={classes.contLiNav}>
            <Link href="/">
                <a className="eachLi">Home</a>
            </Link>
            <Link href="/about-us">
                <a className="eachLi">About Us</a>
            </Link>
            <Link href="/product-page">
                <a className="eachLi">Product</a>
            </Link>
            <Link href="/how-to-buy">
                <a className="eachLi">How To Buy</a>
            </Link>
            <Link href="/contact-us">
                <a className="eachLi">Contact Us</a>
            </Link>
        </div>
    );

    let belowNav =
        currentPath === '/about-us' || currentPath === '/' ? null : (
            <div className={classes.slightlyBelowNavbar}>
                <div className={classes.phoneNumber}>
                    <p>percobaan</p>
                </div>
            </div>
        );

    let displayUIforMobile = (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            {/* <MenuIcon className={classes.menuIcon} /> */}
            <MenuDrawer />
            <div>
                <Image src={Logo} alt="Logo" width={80} height={45} />
            </div>

            <div className={classes.contIconButton}>
                <MyIconButton tip="Bag" onClick={handleClickHowToBuy}>
                    <BagIcon color="#545454" />
                </MyIconButton>
                <MyIconButton tip="Notification">
                    <NotificationsIcon color="#545454" />
                </MyIconButton>
                <MyIconButton tip="Wishlist">
                    <WhistlistIcon color="#545454" />
                </MyIconButton>
                <MyIconButton tip="Account" onClick={() => setMenuOpen(true)}>
                    <AccountIcon color="#545454" />
                </MyIconButton>
                <DesktopLoginDrawer menuOpens={menuOpens} setMenuOpen={setMenuOpen} />
                {/* {console.log('true cuy', menuOpens)} */}
            </div>
        </div>
    );

    let displayUIforDesktop = (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <div>
                <Image src={Logo} alt="Logo" width={80} height={45} onClick={handleClickTesting} />
            </div>

            {normalNav}

            <div className={classes.contIconButton}>
                <MyIconButton tip="Notification">
                    <NotificationsIcon color="#545454" />
                </MyIconButton>
                <MyIconButton tip="Whistlist">
                    <WhistlistIcon color="#545454" />
                </MyIconButton>
                <MyIconButton tip="Bag" onClick={handleClickHowToBuy}>
                    <BagIcon color="#545454" />
                </MyIconButton>
                <MyIconButton tip="Sign In" onClick={() => setMenuOpen(true)}>
                    <AccountIcon color="#545454" />
                </MyIconButton>

                {/*ini tombol signin nya,..dibuat module terpisah karena berhubungan dengan drawer dan agar tidak koding disini*/}
                <DesktopLoginDrawer menuOpens={menuOpens} setMenuOpen={setMenuOpen} />
                {/* {console.log('true cuy', menuOpens)} */}
            </div>
        </div>
    );

    return (
        <div>
            <div className={classes.theTopestHeadnav}>
                <div className={classes.phoneNumber}>
                    <CallIcon className={classes.callIcon} /> <p className={classes.pPhoneNumberEmail}>085718565195</p>
                    <MailIcon className={classes.emailIcon} />{' '}
                    <p className={classes.pPhoneNumberEmail}>tokyofoam@gmail.com</p>
                </div>
            </div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar className={classes.contToolbar}>
                    {isMobile
                        ? isTablet
                            ? isDesktop
                                ? displayUIforDesktop
                                : displayUIforDesktop
                            : displayUIforDesktop
                        : displayUIforMobile}
                </Toolbar>
            </AppBar>
            {belowNav}
        </div>
    );
};

export default Headnav;
