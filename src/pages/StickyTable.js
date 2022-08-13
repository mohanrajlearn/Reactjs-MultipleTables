import React, { useMemo } from 'react'
import { useTable, useBlockLayout } from 'react-table'
import { useSticky } from 'react-table-sticky'
import { Styles } from '../components/TableStyles'
import MOCK_DATA from '../components/MOCK_DATA.json'
import { COLUMNS } from '../components/columns'
import '../components/table.css'

export const StickyTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useBlockLayout,
    useSticky
  )

  const firstPageRows = rows.slice(0, 50)


  return ( 
      <>
      
      <div>
    <h1 className="Btable">Sticky Table</h1>
    </div>
    <div id="alignment">
    <Styles>
      <div className="table sticky" {...getTableProps()} >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div className="tr" {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map((column) => (
                <div className="th" {...column.getHeaderProps()} >
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="body" {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div className="tr" {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <div className="td" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      
    </Styles>
    </div>
      </>
    )
    
}
export default StickyTable;