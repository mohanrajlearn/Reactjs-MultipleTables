import React from "react";
import '../components/table.css'

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td> 
        <input className="ops2"
          type="text"
          required="required"
          placeholder="Enter a email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="ops"
          type="text"
          required="required"
          placeholder="Enter an first name..."
          name="first_name"
          value={editFormData.first_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="ops"
          type="text"
          required="required"
          placeholder="Enter a last name..."
          name="last_name"
          value={editFormData.last_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="ops"
          type="link"
          required="required"
          placeholder="Enter an avatar..."
          name="avatar"
          value={editFormData.avatar}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" className="ops">Save</button>
        <button type="button" className="ops" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;