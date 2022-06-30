import React from 'react'
//import { Link } from 'react-router-dom';

export const COLUMNS = [
  {
    Header: 'Id',

    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Email',

    accessor: 'email'
  },
  {
    Header: 'First Name',

    accessor: 'first_name',
    sticky: 'left'
  },
  {
    Header: 'Last Name',

    accessor: 'last_name',
    sticky: 'left'
  },


  {

    Header: 'Avatar',
    accessor: 'avatar',
    //Cell: ({ row }) => <Link target="_blank" to={{ pathname: `${row.original.avatar}` }}>Avatar image </Link>
    Cell: tableProps => (
      <img
        src={tableProps.row.original.avatar}
        width={30}
        alt='Player'
      />
    )
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Avator',
        accessor: 'avator'

      }
    ]
  }
]
