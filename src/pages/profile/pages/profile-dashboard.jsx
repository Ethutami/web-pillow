import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
    Container,
    Grid,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TableCell,
    TableBody,
    IconButton
} from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Box } from '@mui/system';
import { ButtonTab, ModalReview } from '../component';

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
        width: '19px',
        height: '19px'
    },
    btnIcon: {
        '&.MuiIconButton-root': {
            borderRadius: '0'
        },
        '&.MuiIconButton-root:hover': {
            background: 'none'
        }
    }
}));

const StylingTableCell = withStyles(() => ({
    head: {
        fontWeight: 'bold'
    },
    body: {
        //fontSize: 14,
    }
}))(TableCell);

const StylingTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

const rows = [
    {
        no: '1',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '2',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '3',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '4',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '1',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '2',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '3',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '4',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '1',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '2',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '3',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    },
    {
        no: '4',
        name: 'Mia Artina',
        date: '24/10/2021',
        qty: '1',
        status: 'failed',
        price: '651.300'
    }
];

const Dashboard = () => {
    const classes = useStyles();
    const [pages, setPages] = useState('');
    const [showModalReview, setShowModalReview] = useState(false);
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(pages);
    };
    return (
        <article>
            <Head>
                <title>Tokyo Foam || Dashboard Profile</title>
            </Head>
            <Container>
                <ButtonTab active="Dashboard" />
                <Box className={classes.container} sx={{ mx: 'auto' }}>
                    <div
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '62px' }}
                    >
                        <Typography> Hello, Mia Artina</Typography>
                        <Typography mt={'22px'}>mia.artina@gmail.com</Typography>
                        <Typography mt={'22px'} color="#FF7373">
                            Click to Ubah Password
                        </Typography>
                    </div>
                </Box>
                <Box className={classes.container} sx={{ mx: 'auto' }} style={{ marginTop: 20 }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 700 }}>
                            <TableHead>
                                <TableRow>
                                    <StylingTableCell>No</StylingTableCell>
                                    <StylingTableCell>Pelanggan</StylingTableCell>
                                    <StylingTableCell>Tanggal beli</StylingTableCell>
                                    <StylingTableCell>Qty</StylingTableCell>
                                    <StylingTableCell>Status pesanan</StylingTableCell>
                                    <StylingTableCell>Jumlah</StylingTableCell>
                                    <StylingTableCell></StylingTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <StylingTableRow key={index + 1}>
                                        <StylingTableCell component="th" scope="row">
                                            {row.no}
                                        </StylingTableCell>
                                        <StylingTableCell>{row.name}</StylingTableCell>
                                        <StylingTableCell>{row.date}</StylingTableCell>
                                        <StylingTableCell>{row.qty}</StylingTableCell>
                                        <StylingTableCell>{row.status}</StylingTableCell>
                                        <StylingTableCell>IDR {row.price}</StylingTableCell>
                                        <StylingTableCell>
                                            <IconButton aria-label="credit-card" className={classes.btnIcon}>
                                                <CreditCardOutlinedIcon
                                                    style={{ color: '#D8D8D8', marginRight: '10px' }}
                                                    onClick={(e) => {
                                                        handleClick(e);
                                                        setPages('/profile/pages/profile-dashboard-payment');
                                                    }}
                                                />
                                            </IconButton>

                                            <IconButton aria-label="view" className={classes.btnIcon}>
                                                <VisibilityOutlinedIcon
                                                    onClick={(e) => {
                                                        handleClick(e);
                                                        setPages('/profile/pages/profile-dashboard-details-order');
                                                    }}
                                                />
                                            </IconButton>

                                            <IconButton
                                                aria-label="message"
                                                className={classes.btnIcon}
                                                onClick={() => setShowModalReview(true)}
                                            >
                                                <ChatOutlinedIcon
                                                    style={{ color: '#D8D8D8', marginLeft: '10px' }}
                                                    // onClick={(e) => {
                                                    //     handleClick(e);
                                                    //     setPages('/profile/pages/profile-dashboard-review');
                                                    // }}
                                                />
                                            </IconButton>
                                        </StylingTableCell>
                                    </StylingTableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Stack spacing={2} mt={6}>
                            <Pagination count={rows.length} shape="rounded" />
                        </Stack>
                        `
                    </TableContainer>
                </Box>

                {showModalReview && <ModalReview open={showModalReview} onClose={() => setShowModalReview(false)} />}
            </Container>
        </article>
    );
};

export default Dashboard;
