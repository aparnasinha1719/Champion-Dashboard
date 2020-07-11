import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Demo = (props) => {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.open}
            onClose={props.handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Demo Page</h2>
                    <p id="transition-modal-description">Hi ! I am demo Page</p>
                    {props.serverData ?
                        <div>
                            <h3>I am data through server</h3>
                            <ul>
                                {props.serverData.map((value, index) =>
                                    (<li key={index}> Hi I am {value.first_name} and my email is {value.email}.</li>))}
                            </ul>
                        </div>
                        : null}
                </div>
            </Fade>
        </Modal>
    );
}

export default Demo;