import React from 'react';
import DataTable from 'react-data-table-component';

const customTableStyle = {
	headRow: {
		style: {
			minHeight:36,
            background: '#003a70'
		},
    },
    headCells:{
        style:{
            color:'white',
            fontSize:'0.65rem',
            fontWeight:800,
            cursor:'pointer',
            '&:hover':{
                background:'#2b557b'
            }
        },
        activeSortStyle: {
            color: 'white',
            '&:focus': {
              outline: 'none'
            },
            '&:hover:not(:focus)': {
              color: 'white'
            },
          },
          inactiveSortStyle: {
            '&:focus': {
              outline: 'none',
              color: 'white',
            },
            '&:hover': {
              color: 'white',
            }}
    },
    rows:{
        style:{
            color:'#003b71',
            fontSize:'0.7rem',
            fontWeight:800,
            '&:nth-child(2n)':{
                background:'#f0f0f0',
                color:'#6f91b1'
            }
        }
    }
};

const TableFirst = (props) => {
	return <DataTable columns={props.column} data={props.data} customStyles={customTableStyle} />;
};

export default TableFirst;
