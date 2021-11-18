import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';

//MaT UI
import { makeStyles } from '@mui/styles';
import HorizontalSpacer from '../../components/HorizontalSpacer';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white'
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
    containerContent: {
        width: '89%',
        marginTop: '100px',
        backgroundColor: 'white',
        [theme.breakpoints.down('mobile')]: {
            width: '90%',
            marginTop: '100px'
        }
    },
    firstGrid: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '100px',
        [theme.breakpoints.down('mobile')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 0
        }
    },
    secondGrid: {
        marginBottom: '100px',
        [theme.breakpoints.down('mobile')]: {
            marginBottom: '60px'
        }
    },
    lastGrid: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '100px',
        [theme.breakpoints.down('mobile')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },

    firstGridImage: {
        width: '30%',
        [theme.breakpoints.down('mobile')]: {
            width: '60%',
            marginBottom: '60px'
        }
    },
    firstGridText: {
        width: '60%',
        [theme.breakpoints.down('mobile')]: {
            width: '100%',
            marginBottom: '60px',
            textAlign: 'justify'
        }
    },

    imgAbout: {
        width: '100%',
        height: '100%'
    },
    textTitle: {
        marginBottom: '20px',
        fontWeight: 'bold',
        [theme.breakpoints.down('mobile')]: {
            marginBottom: '20px',
            textAlign: 'center'
        }
    },
    textIntro: {
        lineHeight: '30px',
        textAlign: 'justify',
         [theme.breakpoints.down('mobile')]: {
            lineHeight: '30px',
            textAlign: 'left'
        }
    }
}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Head>
                <title>Tokyo Foam || About Us</title>
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
                            About Us
                        </p>
                    </div>
                </div>
                <Container>
                    <Grid className={classes.containerContent} sx={{ mx: 'auto' }}>
                        <div className={classes.firstGrid}>
                            <Box className={classes.firstGridImage}>
                                <img
                                    src={'/assets/images/img-about.png'}
                                    className={classes.imgAbout}
                                    alt="backgroudn-image"
                                />
                            </Box>
                            <HorizontalSpacer />
                            <Box className={classes.firstGridText}>
                                <h1 className={classes.textTitle} variant="h3" gutterbottom="true" component="div">
                                    Introduction
                                </h1>
                                <p className={classes.textIntro} mt={3}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Box>
                        </div>
                        <div className={classes.secondGrid}>
                            <p className={classes.textIntro} variant="body1" gutterbottom="true" component="div">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat
                            </p>
                        </div>
                        <div className={classes.lastGrid}>
                            <Box className={classes.firstGridText}>
                                <p className={classes.textIntro} mt={3} pr={25}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Box>
                            <HorizontalSpacer />
                            <Box className={classes.firstGridImage}>
                                <img
                                    src={'/assets/images/group-204.png'}
                                    className={classes.imgAbout}
                                    alt="backgroudn-image"
                                />
                            </Box>
                        </div>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default AboutUs;
