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
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 750, height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
      </>
    )
    
}
export default StickyTable;