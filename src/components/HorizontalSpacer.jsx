import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginRight: '100px',
        [theme.breakpoints.down('mobile')]: {
            marginRight: 0
        }
    }
}));

const HorizontalSpacer = () => {
    const classes = useStyles();
    return <div className={classes.container}></div>;
};

export default HorizontalSpacer;
