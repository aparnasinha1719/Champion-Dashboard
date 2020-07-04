import React, { Component } from 'react';
import TableFirst from '../TableFirst/TableFirst';
import {columns,data} from './ProductTableConfig';
import WrapperCard from '../../Cards/WrapperCard/WrapperCard';
import QuickLink from '../../QuickLinks/QuickLink';

class ProductTable extends Component{
  render(){
    return(
      <WrapperCard title="Product Library">
      <TableFirst column={columns} data={data} />
      <QuickLink />
      </WrapperCard>
    )
  }
}

export default ProductTable;