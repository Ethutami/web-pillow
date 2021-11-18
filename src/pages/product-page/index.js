import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';

//MaT UI
import { makeStyles } from '@mui/styles';
import SliderSingleProduct from '../../utils/re-useable-components/slider-single-product';
import BannerPromotion from '../../utils/re-useable-components/banner-promotion';

const useStyles = makeStyles((theme) => ({
    main: {
        // minHeight: '80vh',
        backgroundColor: '#ffffff'
    },
    containerImage: {
        maxWidth: '100vw',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'white'
    },
    textHeadingWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    textHeading: {
        color: 'white'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    contentProductAndPromo: {
        width: '89%',
        maxHeight: '60vh',
        marginLeft: 'auto',
        marginRight: 'auto'
        // backgroundColor: 'red'
    },
    contInner: {
        width: '100%',
        [theme.breakpoints.down('mobile')]: {
            width: '100%'
        }
    },
    parentOpsional: {
        width: '40%',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        // backgroundColor: 'blue',
        '& .opsional': {
            // border: '1px solid white',
            // borderRadius: 20,
            width: 130,
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 30,
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            [theme.breakpoints.down('mobile')]: {
                width: 90,
                paddingLeft: 10,
                paddingRight: 10
            },
            '&:hover': {
                border: '2px solid black',
                borderRadius: 20,
                color: '#AAC6DB'
            },
            '&:active': {
                border: '2px solid black',
                borderRadius: 20,
                color: '#AAC6DB'
            },
            '&:focus': {
                border: '2px solid black',
                borderRadius: 20,
                color: '#AAC6DB'
            }
        },
        '& :last-child': {
            marginRight: 0
        }
    },
    aButton: {
        display: 'block',
        width: 80,
        textAlign: 'center',
        [theme.breakpoints.down('mobile')]: {
            fontSize: 13,
            width: 70
        }
    },
    textContent: {
        width: '89%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    onlyBckColor: {
        backgroundColor: '#F9F9F9',
        paddingTop: 50,
        paddingBottom: 50
    },
    textTitleDesktop: {
        marginBottom: '20px',
        fontWeight: 'bold',
        [theme.breakpoints.down('mobile')]: {
            // display: 'none',
            marginBottom: '20px',
            textAlign: 'center'
        }
    },
    textIntro: {
        lineHeight: '30px',
        marginTop: '30px'
    },
    spaceBottom: {
        border: 'none',
        marginBottom: 100
    }
}));

export const getStaticProps = async () => {
    // fetching ada pake fungsi ini di next js,..nama fungsi tidak bisa diganti,..pake async await juga

    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // fetching json di simpan di var res,..tapi jsonnya belum bisa langsung digunakan
    const data = await res.json(); // data json dari var res di assign ke var data agar json nya bisa dipake

    return {
        // harus pake return di fungsi ini dengan return mengembalikan object json data nya agar data bisa keluar
        props: { ninjas: data }
    };
};

const CatalogProductPage = ({ ninjas }) => {
    const classes = useStyles();
    const [showSingleProduct, setShowSingleProduct] = React.useState(true);
    const [showBundlingProduct, setShowBundlingProduct] = React.useState(false);
    const [showSaleProduct, setShowSaleProduct] = React.useState(false);

    const SLIDE_COUNT = 3;
    const SLIDE_COUNT_BUNDLING = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());
    const slidesBundling = Array.from(Array(SLIDE_COUNT_BUNDLING).keys());

    const handleClickProductNav = () => {
        setShowBundlingProduct(false);
        setShowSaleProduct(false);
        setShowSingleProduct(true);
    };
    const handleClickBundlingNav = () => {
        setShowSingleProduct(false);
        setShowSaleProduct(false);
        setShowBundlingProduct(true);
    };
    const handleClickSaleNav = () => {
        setShowSingleProduct(false);
        setShowBundlingProduct(false);
        setShowSaleProduct(true);
    };

    const sp = showSingleProduct ? <SliderSingleProduct slidesBundling={slidesBundling} /> : null;

    const bundlingPrdocutList = showBundlingProduct ? <div>Bundling Prosuct</div> : null;

    const salePrdocutList = showSaleProduct ? <div>Sale Product</div> : null;

    return (
        <div className={classes.main}>
            <Head>
                <title>Tokyo Foam || Catalog Product</title>
            </Head>

            <div>
                <div className={classes.containerImage}>
                    <img
                        src={'/assets/images/about-us.png'}
                        className={classes.imageBackground}
                        alt="backgroudn-image"
                    />
                    <div className={classes.textHeadingWrapper}>
                        <p className={classes.textHeading} variant="h5" gutterbottom="true" component="div">
                            Our Product
                        </p>
                    </div>
                </div>

                <div className={classes.contentProductAndPromo}>
                    <div className={classes.contInner}>
                        <div className={classes.parentOpsional}>
                            <div className="opsional" onClick={handleClickProductNav}>
                                <a className={classes.aButton}>Product</a>
                            </div>

                            <div className="opsional" onClick={handleClickBundlingNav}>
                                <a className={classes.aButton}>Bundling</a>
                            </div>

                            <div className="opsional" onClick={handleClickSaleNav}>
                                <a className={classes.aButton}>Sale</a>
                            </div>
                        </div>
                    </div>

                    {sp}
                    {bundlingPrdocutList}
                    {salePrdocutList}
                    {/* <SliderSingleProduct slidesBundling={slidesBundling} /> */}
                </div>
                <hr className={classes.spaceBottom} />

                <BannerPromotion slides={slides} />

                <hr className={classes.spaceBottom} />

                <div className={classes.onlyBckColor}>
                    <div className={classes.textContent}>
                        <h1 className={classes.textTitleDesktop} variant="h3" gutterbottom="true" component="div">
                            Benefits
                        </h1>
                        <p className={classes.textIntro}>
                            Waktu tidur adalah waktu yang paling signifikan untuk memperbaiki metabolisme tubuh, dan
                            sangat berperan penting dalam kesehatan dan kecantikan.
                        </p>
                        <p className={classes.textIntro}>
                            Mulsk hadir sebagai sarung bantal yang berbahan 100% sutra mulberry dengan ketebalan 22
                            momme. Sutra mulberry sendiri merupakan sutra dengan kualitas terbaik di dunia saat ini
                            karena diproduksi oleh bombyx mori moth yang hanya diberi makan daun mulberry saja, sehingga
                            menghasilkan sutra terbaik dan terlembut dibandingkan dengan seluruh jenis sutra lainnya.
                        </p>
                        <p className={classes.textIntro}>
                            Didesain untuk kenyamanan Anda, Mulsk menggunakan bukaan yang tersembunyi atau model amplop
                            tanpa resleting untuk bagian penutupnya. Pilihan ukuran sarung bantal yang tersedia adalah
                            52 x 72 cm.
                        </p>
                        <p className={classes.textIntro}>
                            Mulsk Mulberry Silk Pillow Case telah tersertifikasi oleh OEKO-TEX®️ Standard 100 yang telah
                            dites dan bergaransi 100% bebas dari bahan berbaya, toksin, dan subtansi yang dapat
                            mengiritasi kulit dan rambut.
                        </p>
                    </div>
                </div>

                {/* <article>
                    <div>
                        <p>Banner Catalog</p>
                    </div>
                    <div>
                        <p>full desc product</p>
                    </div>
                    <div>
                        <p>button</p>
                    </div>
                </article>

                <h1>All Ninja in here</h1>
                {ninjas.map((ninja) => (
                    <Link href={`/product-page/${ninja.id}`} key={ninja.id}>
                        <a>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))} */}
            </div>
        </div>
    );
};

export default CatalogProductPage;
