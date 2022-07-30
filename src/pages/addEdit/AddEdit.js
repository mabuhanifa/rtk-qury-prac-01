import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addedit.css";
const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, contact } = formValue;
  const navigate = useNavigate();
  return (
    <div>
      <h2>AddEdit</h2>
    </div>
  );
};

export default AddEdit;
