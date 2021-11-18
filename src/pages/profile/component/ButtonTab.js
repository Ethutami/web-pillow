import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

const menu = ['Dashboard', 'Address', 'Wishlist'];

const useStyles = makeStyles((theme) => ({
    btnMenuContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '55px'
    },
    button: {
        '&.MuiButton-root': {
            backgroundColor: '#fff',
            marginRight: '67px'
        },
        '&.MuiButton-root.active': {
            backgroundColor: '#fff',
            padding: '5px 36px',
            borderRadius: '20px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.13)'
        },
        '&.MuiButton-text': {
            color: '#939393',
            fontWeight: 'bold',
            textTransform: 'capitalize'
        },
        '&.MuiButton-text.active': {
            color: '#474747'
        },
        '&.MuiButton-text.btn-promo': {
            color: '#AAC6DB'
        },
        '&.MuiButton-text.btn-logout': {
            color: '#FF7373'
        }
    },
    buttonActive: {
        '&.MuiButton-root': {
            backgroundColor: 'red',
            borderRadius: '20px',
            padding: '5px 36px'
        },
        '&.MuiButton-text': {
            color: '#474747',
            textTransform: 'capitalize'
        }
    }
}));

const ButtonTab = ({ children, style, active }) => {
    const classes = useStyles();
    return (
        <Box className={classes.btnMenuContainer}>
            {menu?.map((item, i) => (
                <Button variant="text" key={i} className={`${classes.button} ${active === item ? 'active' : ''}`}>
                    {item}
                </Button>
            ))}
            <Button
                variant="text"
                className={`${classes.button} btn-promo ${active === 'Promo & Sale' ? 'active' : ''}`}
            >
                Promo & Sale
            </Button>
            <Button variant="text" className={`${classes.button} btn-logout ${active === 'Logout' ? 'active' : ''}`}>
                Logout
            </Button>
        </Box>
    );
};
export default ButtonTab;
