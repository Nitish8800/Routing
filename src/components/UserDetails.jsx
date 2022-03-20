import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

export const UserDetails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${userid}`);
    // setUser([...data.data]);
  }, []);

  if (true) {
    return <Navigate to={"/login"} />;
  }

  return <div>User Details Of Id : {userid}</div>;
};
