import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        textTransform: 'capitalize',
        color: '#939393'
    },
    st: {
        color: '#939393'
    }
}));

const ButtonTab = ({ children, style }) => {
    const classes = useStyles();
    return <Button className={classes.buttonContainer}>{children}</Button>;
};
export default ButtonTab;
