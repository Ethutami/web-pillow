import Head from 'next/head';

//MaT UI
import { makeStyles } from '@mui/styles';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '89%',
        marginTop: '100px',
        backgroundColor: 'white',
        [theme.breakpoints.down('mobile')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            marginTop: '100px'
        }
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '50px',
        [theme.breakpoints.down('mobile')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 0
        }
    },
    imageContent: {
        width: '30%',
        [theme.breakpoints.down('mobile')]: {
            width: '100%',
            height: '90%',
            marginBottom: '60px'
        }
    },
    textContent: {
        width: '89%',
        [theme.breakpoints.down('mobile')]: {
            width: '100%',
            marginBottom: '60px'
        }
    },
    img: {
        width: '100%',
        height: '100%'
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
    }
}));

const HowToBuy = () => {
    const classes = useStyles();
    return (
        <article>
            <Head>
                <title>Tokyo Foam || How To Buy</title>
            </Head>
            <Container>
                <Grid className={classes.container} sx={{ mx: 'auto' }}>
                    <div className={classes.contentContainer}>
                        <Box className={classes.textContent}>
                            <h1 className={classes.textTitleDesktop} variant="h3" gutterbottom="true" component="div">
                                How To Buy
                            </h1>
                            <p className={classes.textIntro}>
                                Produk Mulsk 100% Mulberry Silk Pillowcase dengan kandungan natural yang memiliki banyak
                                manfaat untuk kulit dan kesehatan, dapat anda dapatkan di Official Marketplace
                                TokyoFoam, Shopee TokyoFoam & Tokopedia TokyoFoam.
                            </p>
                            <p className={classes.textIntro}>
                                Info terbaru lebih lanjut cek lini instagram kami di @tokyofoam
                            </p>
                        </Box>
                    </div>
                </Grid>
            </Container>
        </article>
    );
};

export default HowToBuy;
