import React from 'react';
import DataTable from 'react-data-table-component';
import TableFilter from '../../TableFilter/TableFilter';

const customTableStyle = {
    subHeader: {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 5
        }
    },
    headRow: {
        style: {
            minHeight: 36,
            background: '#003a70'
        },
    },
    headCells: {
        style: {
            color: 'white',
            fontSize: '0.65rem',
            fontWeight: 800,
            cursor: 'pointer',
            '&:hover': {
                background: '#2b557b'
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
            }
        }
    },
    rows: {
        style: {
            color: '#003b71',
            fontSize: '0.7rem',
            fontWeight: 800,
            '&:nth-child(2n)': {
                background: '#f0f0f0',
                color: '#6f91b1'
            }
        }
    }
};

const TableFirst = (props) => {
    const [filterText, setFilterText] = React.useState('');
    const filteredItems = props.data.filter(item => item[props.filterByField] && item[props.filterByField].toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setFilterText('');
            }
        };
        return <TableFilter onFilter={(event) => setFilterText(event.target.value)} onClear={handleClear} filterText={filterText} btnText={props.seeAllBtnText} />;
    }, [filterText]);

    return <DataTable
        columns={props.column}
        data={filteredItems}
        customStyles={customTableStyle}
        subHeader
        noHeader={true}
        subHeaderComponent={subHeaderComponentMemo} />;
};

export default TableFirst;
