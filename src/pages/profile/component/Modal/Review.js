import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { makeStyles, withStyles } from '@mui/styles';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

const useStyles = makeStyles((theme) => ({
    uploadWrapper: {
        display: 'flex',
        marginTop: '20px'
    },
    icWrapper: {
        background: '#D8D8D8',
        width: '50px',
        height: '50px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '30px'
    },
    icCamera: {
        '&.MuiSvgIcon-root': {
            width: '35px',
            height: '35px'
        }
    },
    formWrapper: {
        marginTop: '20px',
        marginBottom: '15px'
    },
    input: {
        width: '93%',
        padding: '10px 10px',
        marginTop: '15px'
    },
    btnWrapper: {
        display: 'flex'
    }
}));

export default function Review({ open, onClose }) {
    const classes = useStyles();
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Give Us Reviews
                </Typography>
                <Box style={{ display: 'flex' }}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} mr="30px">
                        Quality
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        ic-star
                    </Typography>
                </Box>
                <Box className={classes.uploadWrapper}>
                    <Box className={classes.icWrapper}>
                        <PhotoCameraIcon color="disabled" className={classes.icCamera} />
                    </Box>
                    <Box>
                        <Typography style={{ color: '#474747' }}>Upload Photos</Typography>
                        <Typography style={{ color: '#D8D8D8' }}>png, jpg, max 10mb each.</Typography>
                    </Box>
                </Box>
                <Box className={classes.formWrapper}>
                    <Typography style={{ color: '#474747' }}>*Judul Riview</Typography>
                    <input placeholder="Write Something" type="text" className={classes.input} />
                </Box>
                <Box className={classes.formWrapper}>
                    <Typography style={{ color: '#474747' }}>*Isi Riview</Typography>
                    <textarea
                        placeholder="Write Something"
                        type="text"
                        className={classes.input}
                        style={{ height: '190px' }}
                    />
                </Box>
                <Box className={classes.btnWrapper}>
                    <Button variant="outlined" style={{ flex: 1, borderColor: 'black', color: 'black' }}>
                        Back
                    </Button>
                    <Box style={{ width: '28px' }} />
                    <Button variant="contained" style={{ flex: 1, background: 'black', color: 'white' }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
