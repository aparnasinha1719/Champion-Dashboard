import React from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ClearIcon from '@material-ui/icons/Clear';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        height: 30,
        fontSize: '0.8rem',
        background: '#f7f7f7'
    },
    textField: {
        width: '20ch'
    },
    icon: {
        height: 30,
        width: 30,
        color: '#003b71'
    },
    button: {
        color: 'white',
        textTransform: 'capitalize',
        height: 30,
        fontSize: '0.8rem',
        background: '#003b71',
    }
}));
const TableFilter = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const buttonHandler = () => {
        history.push('/product');
    }
    return (
        <Auxiliary className={classes.root}>
            <Button
                variant="contained"
                className={classes.button}
                onClick={buttonHandler}
                disableElevation>
                Sell all {props.btnText}
            </Button>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <OutlinedInput
                    type='text'
                    notched={false}
                    placeholder='Search bar'
                    value={props.filterText}
                    className={classes.input}
                    onChange={props.onFilter}
                    endAdornment={
                        <InputAdornment position="end">
                            {props.filterText ?
                                <IconButton edge="end" className={classes.icon} onClick={props.onClear}>
                                    <ClearIcon />
                                </IconButton>
                                : <IconButton edge="end" className={classes.icon}>
                                    <SearchIcon />
                                </IconButton>
                            }
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Auxiliary>


    );
}

export default TableFilter;