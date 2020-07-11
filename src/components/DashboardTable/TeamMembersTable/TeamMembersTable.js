import React, { Component } from 'react';
import TableFirst from '../TableFirst/TableFirst';
import { columns, data } from './TeamMembersTableConfig';
import WrapperCard from '../../Cards/WrapperCard/WrapperCard';

class ProductTable extends Component {
    render() {
        return (
            <WrapperCard title="Team Members">
                <TableFirst column={columns} data={data} filterByField="name" seeAllBtnText="Team Members" />
            </WrapperCard>
        )
    }
}

export default ProductTable;