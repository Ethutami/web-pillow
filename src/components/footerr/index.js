import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';

import Logo from '../../../public/assets/images/logo-tokyofoam.png';
import LogoBCA from '../../../public/assets/images/bca.png';
import LogoBRI from '../../../public/assets/images/bri.png';
import LogoMasterCard from '../../../public/assets/images/master-card.png';
import LogoVisa from '../../../public/assets/images/visa.png';
import LogoShoppe from '../../../public/assets/images/shoppe.png';
import LogoTokopedia from '../../../public/assets/images/tokopedia.png';

//MaT UI
import { makeStyles } from '@mui/styles';

//Icons
import CallIcon from '@mui/icons-material/WifiCalling3Outlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import OlShopCard from '../../utils/re-useable-components/card/OlShopCard';

const useStyles = makeStyles((theme) => ({
    greyFooter: {
        backgroundColor: '#F7F7F7'
    },
    contentFooter: {
        width: '89%',
        height: 250,
        paddingTop: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        [theme.breakpoints.down('mobile')]: {
            flexDirection: 'column',
            height: 350,
            paddingTop: 30,
            justifyContent: 'space-around'
        },
        [theme.breakpoints.down('tablet')]: {
            justifyContent: 'space-around'
        }
    },
    contentCopyRight: {
        width: '89%',
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('mobile')]: {
            flexDirection: 'column'
        }
    },
    textCopyRight: {
        color: '#A6A6A6',
        fontWeight: 600,
        [theme.breakpoints.down('mobile')]: {
            width: '100%',
            marginBottom: 50
        }
    },
    logoBank: {
        display: 'flex',
        width: '25%',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('mobile')]: {
            width: '100%',
            justifyContent: 'space-around'
        }
    },
    forLogo: {
        width: '25%',
        // backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    combineSub1And2: {
        display: 'flex',
        width: '25%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        [theme.breakpoints.down('mobile')]: {
            width: '70%',
            marginLeft: 5
        }
    },
    sub1: {
        // width: '25%',
        display: 'flex',
        flexDirection: 'column',
        marginRight: 10,
        // backgroundColor: 'orange',
        alignItems: 'flex-start'
    },
    sub2: {
        // width: '25%',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    sub3: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    callIcon: {
        display: 'flex',
        // color: '#A6A6A6',
        fontWeight: 600,
        marginBottom: 10
    },
    mBottom: {
        marginBottom: 10,
        color: '#545454'
    },

    // Bagian Available On
    contAvailableOn: {
        // backgroundColor: 'red',
        width: '100%',
        height: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('mobile')]: {
            height: 250
        },
        [theme.breakpoints.down('tablet')]: {
            height: 250
        }
    },
    contInner: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto'
        // backgroundColor: 'green'
    },
    fontSubTitleOnHome: {
        fontSize: 35,
        fontWeight: 800,
        color: 'black',
        textAlign: 'center',
        [theme.breakpoints.down('mobile')]: {
            fontSize: 20
        }
    },
    shoppeCardGroup: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const Footerr = () => {
    const classes = useStyles();
    const router = useRouter();
    const currentPath = router.pathname;
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    let availableOn =
        currentPath === '/' ||
        currentPath === '/product-page' ||
        currentPath === '/how-to-buy' ||
        currentPath === '/contact-us' ? (
            <div className={classes.contAvailableOn}>
                <div className={classes.contInner}>
                    <div>
                        <h1 className={classes.fontSubTitleOnHome}>–—— Available On –——</h1>
                    </div>
                    <hr style={{ border: 'none', marginBottom: 50 }} />

                    <div className={classes.shoppeCardGroup}>
                        <OlShopCard>
                            <Image src={LogoShoppe} alt="Logo" width={128} height={45} objectFit="contain" />
                        </OlShopCard>
                        <hr style={{ border: 'none', marginRight: 10 }} />
                        <OlShopCard>
                            <Image src={LogoTokopedia} alt="Logo" width={160} height={45} objectFit="contain" />
                        </OlShopCard>
                    </div>
                </div>
            </div>
        ) : null;

    let foot = (
        <div className={classes.greyFooter}>
            <div className={classes.contentFooter}>
                <div className={classes.forLogo}>
                    <Image src={Logo} alt="Logo" width={200} height={100} objectFit="contain" />
                </div>
                <div className={classes.combineSub1And2}>
                    <div className={classes.sub1}>
                        <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 400 }}>
                            <Link href="/">
                                <a className={classes.mBottom}>Home</a>
                            </Link>
                            <Link href="/product-page">
                                <a className={classes.mBottom}>Product</a>
                            </Link>
                            <Link href="/about-us">
                                <a className={classes.mBottom}>About Us</a>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.sub2}>
                        <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 400 }}>
                            <Link href="/product-page">
                                <a className={classes.mBottom}>Bundling</a>
                            </Link>
                            <Link href="/how-to-buy">
                                <a className={classes.mBottom}>How to Buy</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.sub3}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={classes.callIcon}>
                            <CallIcon style={{ marginRight: 20, color: '#A6A6A6' }} />
                            <p style={{ fontSize: 15, color: '#545454' }}>085718565195</p>
                        </div>
                        <div className={classes.callIcon}>
                            <MailIcon style={{ marginRight: 20, color: '#A6A6A6' }} />
                            <p style={{ fontSize: 15, color: '#545454' }}>tokyofoam@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.contentCopyRight}>
                <div className={classes.textCopyRight}>
                    {isMobile ? (
                        isTablet ? (
                            isDesktop ? (
                                <p style={{ fontSize: 15 }}>Copyright 2021. Tokyo Foam Team. All Rights Reserved.</p>
                            ) : (
                                <p style={{ fontSize: 15 }}>
                                    Copyright 2021. Tokyo Foam Team. <br />
                                    All Rights Reserved.
                                </p>
                            )
                        ) : (
                            <p style={{ fontSize: 15 }}>Copyright 2021. Tokyo Foam Team. All Rights Reserved.</p>
                        )
                    ) : (
                        <p style={{ fontSize: 15 }}>
                            Copyright 2021. Tokyo Foam Team. <br />
                            All Rights Reserved.
                        </p>
                    )}
                    {/* <p style={{ fontSize: 15 }}>Copyright 2021. Tokyo Foam Team. All Rights Reserved.</p> */}
                </div>
                <div className={classes.logoBank}>
                    <div>
                        <Image src={LogoMasterCard} alt="Logo Master Card" width={34} height={25} objectFit="contain" />
                    </div>
                    <div>
                        <Image src={LogoBRI} alt="Bank BRI" width={81} height={19} objectFit="contain" />
                    </div>
                    <div>
                        <Image src={LogoBCA} alt="Bank BCA" width={62} height={19} objectFit="contain" />
                    </div>
                    <div>
                        <Image src={LogoVisa} alt="Logo VISA" width={46} height={25} objectFit="contain" />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <footer style={{ flexShrink: 0 }}>
            {availableOn}
            {foot}
        </footer>
    );
};

export default Footerr;
