import React, { Component } from 'react';
import TableFirst from '../TableFirst/TableFirst';
import { columns, data } from './LocationTableConfig';
import WrapperCard from '../../Cards/WrapperCard/WrapperCard';
import classes from '../../../css/common.module.css';
import { Button } from '@material-ui/core';
class LocationTable extends Component {
	render() {
		return (
			<WrapperCard title="Locations">
				<TableFirst column={columns} data={data} />
				<Button variant="contained" className={classes.commonBtn} >
					Add a location
				</Button>
			</WrapperCard>
		);
	}
}

export default LocationTable;
