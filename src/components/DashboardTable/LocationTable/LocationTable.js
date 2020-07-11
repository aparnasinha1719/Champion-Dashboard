import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import TableFirst from '../TableFirst/TableFirst';
import { columns, data } from './LocationTableConfig';
import WrapperCard from '../../Cards/WrapperCard/WrapperCard';
import classes from '../../../css/common.module.css';
import { Button } from '@material-ui/core';
import Demo from '../../Demo/Demo';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
class LocationTable extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        this.props.getLocation();
    }
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }


    render() {
        return (
            <Auxiliary>
                <WrapperCard title="Locations">
                    <TableFirst column={columns} data={data} filterByField="locationName" seeAllBtnText="Locations" />
                    <Button variant="contained" className={classes.commonBtn} onClick={this.handleOpen}>
                        Add a location
				</Button>
                </WrapperCard>
                <Demo open={this.state.open} handleClose={this.handleClose} serverData={this.props.tableData}></Demo>
            </Auxiliary>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.location.loading,
        tableData: state.location.tableData,
        error: state.location.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLocation: () => dispatch(actions.location())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationTable);
