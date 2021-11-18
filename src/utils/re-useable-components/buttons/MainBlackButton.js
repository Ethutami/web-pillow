import { Button } from '@mui/material';

//MaT UI Stuff
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    ContBlackButton: {
        '& .BlackButton': {
            backgroundColor: '#2C2C2C',
            color: '#FFFFFF',
            width: '100%',
            fontWeight: 600,
            // width: 186,
            textTransform: 'none',
            marginTop: 15,
            borderRadius: 5
        },
        '& .BlackButton:hover': {
            backgroundColor: '#2C2C2C'
        }
    }
}));

const MainBlackButton = ({ children, onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.ContBlackButton}>
            <Button onClick={onClick} className="BlackButton">
                {children}
            </Button>
        </div>
    );
};

export default MainBlackButton;
