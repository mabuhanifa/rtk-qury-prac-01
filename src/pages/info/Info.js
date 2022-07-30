import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useContactQuery } from "../../redux/rtk query/contactsApi";
import "./info.css";
const Info = () => {
  const { id } = useParams();
  const { data, error } = useContactQuery(id);

  useEffect(() => {
    error && alert(error.message);
  }, [error]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Details</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{data && data.id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{data && data.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{data && data.email}</span>
          <br />
          <br />
          <strong>Contact:</strong>
          <span>{data && data.contact}</span>
          <br />
          <br />
          <Link to="/"><button className="btn btn-edit">Go Back</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
