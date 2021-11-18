import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
    }
}));

const HomeCardListProduct = () => {
    const classes = useStyles();
    const [showSingleProduct, setShowSingleProduct] = React.useState(true);
    const [showBundlingProduct, setShowBundlingProduct] = React.useState(false);

    const handleClickProductNav = () => {
        setShowBundlingProduct(false);
        setShowSingleProduct(true);
    };
    const handleClickBundlingNav = () => {
        setShowSingleProduct(false);
        setShowBundlingProduct(true);
    };

    const sp = showSingleProduct ? (
        <div style={{ width: '100%', backgroundColor: 'brown', display: 'flex' }}>
            <div style={{ width: '50%', height: 180, backgroundColor: 'darkblue', textAlign: 'center' }}>
                <p>Pic 1</p>
            </div>
            <div style={{ width: '50%', height: 180, backgroundColor: 'orange', textAlign: 'center' }}>
                <p>Pic 2</p>
            </div>
        </div>
    ) : null;

    const bundlingPrdocutList = showBundlingProduct ? <div>Bundling Product</div> : null;

    return (
        <div className={classes.contentProductAndPromo}>
            <div className={classes.contInner}>
                <div className={classes.parentOpsional}>
                    <div className="opsional" onClick={handleClickProductNav}>
                        <a className={classes.aButton}>Product</a>
                    </div>

                    <div className="opsional" onClick={handleClickBundlingNav}>
                        <a className={classes.aButton}>Bundling</a>
                    </div>
                </div>
            </div>

            {sp}
            {bundlingPrdocutList}
            {/* <SliderSingleProduct slidesBundling={slidesBundling} /> */}
        </div>
    );
};

export default HomeCardListProduct;
