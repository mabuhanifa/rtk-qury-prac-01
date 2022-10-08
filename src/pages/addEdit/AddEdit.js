import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  useAddContactMutation,
  useContactQuery,
  useUpdateContactMutation
} from "../../redux/rtk query/contactsApi";

import "./addedit.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const { id } = useParams();
  const { data, error } = useContactQuery(id);
  const [updateContact] = useUpdateContactMutation();
  useEffect(() => {
    error && id && alert(error.message);
  }, [error, id]);

  useEffect(() => {
    if (id) {
      setEditMode(true);
    }
    if (data) {
      setFormValue({ ...data });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id, data]);

  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { name, email, contact } = formValue;
  const [addContact] = useAddContactMutation();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name && !email && !contact) {
      alert("Please enter a name or email");
    } else {
      if (!editMode) {
        await addContact(formValue);
        navigate("/");
        alert("Contact added successfully");
      } else {
        await updateContact(formValue);

        navigate("/");
        setEditMode(false);
        alert("Contact Updated successfully");
      }
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter Contact Number"
          value={contact}
          onChange={handleInputChange}
        />
        <input type="submit" value={editMode ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
