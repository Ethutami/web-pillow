import Head from 'next/head';
import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import VerticalSpacer from '../../../components/VerticalSpacer';


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
    icon: {
        width: '38px',
        height: '20px%',
    }
}));

const DetailOrder = () => {
    const classes = useStyles();
    return(
        <article>
            <Head>
                <title>Tokyo Foam || Details Order</title>
            </Head>
            <Container>
                <Grid className={classes.container} sx={{ mx: 'auto' }}>
                    <h1>Info Pembelian</h1>
                    <VerticalSpacer height='30px'/>
                    <table style={{width:'100%',}}>
                        <tr style={{display:'flex', borderWidth:'1px', borderColor:'#EBEBEB', borderStyle:'solid', paddingLeft:'15px'}} >
                            <p>Rincian Pesanan</p>
                        </tr>
                        <tr style={{display:'flex'}}>
                            <td style={{borderWidth:'1px', borderColor:'#EBEBEB', borderStyle:'solid',  flex: 1, paddingLeft:'15px',paddingTop:'29px', paddingBottom: '29px'}}>
                                <p>ID Pesanan: #33</p>
                                <p>Tanggal Beli: 24/10/2021   12.00 AM</p>
                            </td>
                            <td style={{borderWidth:'1px', borderColor:'#EBEBEB', borderStyle:'solid', flex:1,paddingLeft:'15px', paddingTop:'29px', paddingBottom: '29px'}}>
                                <p>Metode Pembayaran: Midtrans BCA</p>
                                <div style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                                    <p>Metode Pengiriman: JNE OKE (2-3 hari)</p>
                                    <img src={'/assets/icons/jne-oke.png'} className={classes.icon} alt="backgroudn-image" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <VerticalSpacer height='10px'/>
                    <table>
                        <tr style={{display:'flex', borderWidth:'1px', borderColor:'#EBEBEB', borderStyle:'solid', paddingLeft:'15px'}} >
                            <p>Alamat Pengiriman</p>
                        </tr>
                        <tr style={{display:'flex', borderWidth:'1px', borderColor:'#EBEBEB', borderStyle:'solid', paddingLeft:'15px'}} >
                            <p>Mia Artina, Jln. Gunung Saputan, Kecamatan Denpasar Barat, Kota Denpasar, Bali 80117, Indonesia No Hp 0821212121212</p>
                        </tr>
                    </table>
                    <VerticalSpacer height='10px'/>
                    <table>
                        <tr>
                            <td><p>Nama Produk</p></td>
                            <td><p>Qty</p></td>
                            <td><p>Harga</p></td>
                        </tr>
                        <tr>
                            <td><p>Mulberry Silk Pillowcase, Yellow, 1Kg</p></td>
                            <td><p>1</p></td>
                            <td><p>IDR 650.000 (Disc 10%)</p></td>
                        </tr>
                    </table>
                </Grid>
            </Container>
        </article>
    )
    
}

export default DetailOrder