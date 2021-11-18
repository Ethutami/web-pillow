import Head from 'next/head';
import Image from 'next/image';

import BannerHome from '../../public/assets/images/fullBannerHome.png';
import TestimonyBanner from '../../public/assets/images/TestimonyBanner2.png';
import MainBlackButton from '../utils/re-useable-components/buttons/MainBlackButton';
import AllButtonFunctions from '../utils/re-useable-functions/AllButtonFunctions';
import ReactResponsiveHook from '../utils/ReactResponsiveHook';

//MaT UI
import { makeStyles } from '@mui/styles';
import BannerPromotion from '../utils/re-useable-components/banner-promotion';
import SliderSingleProduct from '../utils/re-useable-components/slider-single-product';
import SliderBundlingProduct from '../utils/re-useable-components/slider-bundling-product';
import HomeCardListProduct from '../components/mobile/home-card-list-product';
// import BannerPromo from '../components/banner-promo';

const useStyles = makeStyles((theme) => ({
    main: {
        minHeight: '80vh'
    },
    onlyImage: {
        width: '100%',
        height: 600
    },
    groupTitle: {
        position: 'absolute',
        top: '30%',
        left: '8%',
        [theme.breakpoints.down('mobile')]: {
            top: '20%'
        },
        '& .fontAtt': {
            fontSize: 40,
            fontWeight: 600,
            [theme.breakpoints.down('mobile')]: {
                fontSize: 14
            },
            [theme.breakpoints.down('tablet')]: {
                fontSize: 20
            }
            // [theme.breakpoints.down('desktopHD')]: {
            //     fontSize: 40
            // }
        },
        '& .fontPhome': {
            fontSize: 20,
            fontWeight: 400,
            [theme.breakpoints.down('mobile')]: {
                fontSize: 8
            },
            [theme.breakpoints.down('tablet')]: {
                fontSize: 10
            }
            // [theme.breakpoints.down('desktopHD')]: {
            //     fontSize: 20
            // }
        },
        '& .divButtonBanner': {
            width: 186,
            [theme.breakpoints.down('mobile')]: {
                width: 116,
                height: 25
            },
            [theme.breakpoints.down('tablet')]: {
                width: 116,
                height: 25
            }
        }
    },
    contBannerAndWelcoming: {
        width: '100%',
        position: 'relative',
        marginBottom: 100,
        [theme.breakpoints.down('mobile')]: {
            marginBottom: 50
        },
        [theme.breakpoints.down('tablet')]: {
            marginBottom: 50
        }
    },
    contTestimonyBanner: {
        width: '100%',
        position: 'relative',
        marginBottom: 50,
        [theme.breakpoints.down('mobile')]: {
            marginBottom: 0
        },
        [theme.breakpoints.down('tablet')]: {
            marginBottom: 0
        }
    },
    testimonyText: {
        position: 'absolute',
        top: '35%',
        left: '17%',
        '& .fontTestimony': {
            fontSize: 40,
            fontWeight: 600,
            [theme.breakpoints.down('mobile')]: {
                fontSize: 14
            },
            [theme.breakpoints.down('tablet')]: {
                fontSize: 14
            }
        }
    },
    fontSubTitleOnHome: {
        fontSize: 30,
        fontWeight: 600,
        color: '#474747',
        [theme.breakpoints.down('mobile')]: {
            fontSize: 20
        },
        [theme.breakpoints.down('tablet')]: {
            fontSize: 20
        }
    },
    hrStyle: {
        border: 'none',
        marginBottom: 100,
        [theme.breakpoints.down('mobile')]: {
            marginBottom: 50
        },
        [theme.breakpoints.down('tablet')]: {
            marginBottom: 50
        }
    }
}));

export default function Home() {
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    const classes = useStyles();
    const SLIDE_COUNT = 3;
    const SLIDE_COUNT_BUNDLING = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());
    const slidesBundling = Array.from(Array(SLIDE_COUNT_BUNDLING).keys());
    const { handleClickProductPage } = AllButtonFunctions();

    const displayForDesktop = (
        <div>
            {/* Bagian Our Product */}
            <div style={{ width: '100%', textAlign: 'center', marginBottom: 40 }}>
                <h1 className={classes.fontSubTitleOnHome}>–—— Our Product –——</h1>
            </div>

            <SliderSingleProduct slidesBundling={slidesBundling} />

            <div style={{ width: 186, marginTop: 30, marginLeft: 'auto', marginRight: 'auto' }}>
                <MainBlackButton onClick={handleClickProductPage}>All Product</MainBlackButton>
            </div>
            <hr style={{ border: 'none', marginBottom: 100 }} />

            {/* Bagian Bundling Product */}
            <div style={{ width: '100%', textAlign: 'center', marginBottom: 40 }}>
                <h1 className={classes.fontSubTitleOnHome}>–—— Bundling –——</h1>
            </div>

            <SliderBundlingProduct slidesBundling={slidesBundling} />

            <div style={{ width: 186, marginTop: 30, marginLeft: 'auto', marginRight: 'auto' }}>
                <MainBlackButton>All Bundling</MainBlackButton>
            </div>
        </div>
    );

    return (
        <div>
            <Head>
                <title>Tokyo Foam || Home</title>
            </Head>

            <div className={classes.contBannerAndWelcoming}>
                <Image
                    src={BannerHome}
                    alt="Our Healty Pillow"
                    width={1441}
                    height={600}
                    layout="responsive"
                    objectFit="contain"
                />
                <div className={classes.groupTitle}>
                    <h1 className="fontAtt">New Arrival Collection</h1>
                    <p className="fontPhome">Consequat labore dolore proident enim ipsum esse id.</p>
                    <div className="divButtonBanner">
                        <MainBlackButton>SHOP NOW</MainBlackButton>
                    </div>
                </div>
            </div>

            <article className={classes.contBannerAndWelcoming}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h1 style={{ marginBottom: 30, textAlign: 'center' }}>Welcome to tokyofoam</h1>
                    <p style={{ textAlign: 'center' }}>
                        Cillum sint id eiusmod excepteur nostrud sunt elit adipisicing. Consectetur occaecat ipsum
                        ullamco veniam nisi ipsum ullamco enim anim est Lorem. Laborum et culpa deserunt laborum elit
                        est fugiat nisi amet laborum ullamco enim labore. Voluptate ad amet nulla anim veniam. Anim sit
                        ipsum id anim magna exercitation Lorem voluptate Lorem tempor ad. Irure Lorem culpa et est enim
                        velit.
                    </p>
                </div>
            </article>

            {isMobile ? (
                isTablet ? (
                    isDesktop ? (
                        displayForDesktop
                    ) : (
                        displayForDesktop
                    )
                ) : (
                    displayForDesktop
                )
            ) : (
                <HomeCardListProduct />
            )}

            <hr className={classes.hrStyle} />

            <div className={classes.contTestimonyBanner}>
                <Image
                    src={TestimonyBanner}
                    alt="Testimony Banner"
                    width={1440}
                    height={500}
                    layout="responsive"
                    objectFit="contain"
                />
                <div className={classes.testimonyText}>
                    <h1 className="fontTestimony">Testimony</h1>
                </div>
            </div>
        </div>
    );
}
