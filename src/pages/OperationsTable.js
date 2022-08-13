import React, { useState, Fragment} from "react";
import { nanoid } from "nanoid";
import MOCK_DATA from '../components/MOCK_DATA.json'; 
import '../components/table.css'
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

export const OperationsTable = () => {
   
  const [contacts, setContacts] = useState(MOCK_DATA);
  const [addFormData, setAddFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const [editFormData, setEditFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      email: addFormData.email,
      first_name: addFormData.first_name,
      last_name: addFormData.last_name,
      avatar: addFormData.avatar,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      email: editFormData.email,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      avatar: editFormData.avatar,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      email: contact.email,
      first_name: contact.first_name,
      last_name: contact.last_name,
      avatar: contact.avatar,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  

  return (
    <>
    <div>
    <h1 className="Btable">Operations Table</h1>
    </div>
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avatar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div class="pageStyle1">
      <h4 class = "headerStyle" >Add a Contact</h4>
      <form onSubmit={handleAddFormSubmit}>
      <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter a email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="first_name"
          required="required"
          placeholder="Enter a first name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="last_name"
          required="required"
          placeholder="Enter an last name..."
          onChange={handleAddFormChange}
          />
        
        <input
          type="Link"
          name="avatar"
          required="required"
          placeholder="Enter an avatar..."
          onChange={handleAddFormChange}          
        />
        <button className="ops" type="submit">Add</button>
      </form>
      </div>
    </div>
    </>
  );
};


// const pageStyle = {
//   marginLeft: "380px",
//   marginBottom:"50px"
// };

// const headerStyle = {
//   fontSize: "20px",
//   padding: "20px 5px"
  
// };

export default OperationsTable;