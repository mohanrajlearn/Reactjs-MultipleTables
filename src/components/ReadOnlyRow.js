import React from "react";
import '../components/table.css'
// import { Link } from 'react-router-dom';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.email}</td>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      {/* <td><Link target="_blank" to={{ pathname: `${contact.avatar}` }}>Avatar image </Link></td> */}
      <td><img
        src={contact.avatar}
        width={30}
        alt='Player'
      /></td>
      <td>
        <button
          type="button" className="ops"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" className="ops" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;