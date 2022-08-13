import React, { useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../components/MOCK_DATA.json'
import { COLUMNS } from '../components/columns'
import '../components/table.css'
import { GlobalFilter } from '../components/GlobalFilter'
import { ColumnFilter } from '../components/ColumnFilter'


export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter
  )

  const { globalFilter } = state

  return (
    <>
    <div class="responsive">
    <div >
    <h1 className="Btable">Filtering Table</h1>
    </div>
      <div class="globalFilterStyle"><GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /></div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div className='cfilter'>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      </div>
    </>
  );
};

// const globalFilterStyle = {
//   marginLeft: "380px",
//   marginTop: "20px"
// };
export default FilteringTable;