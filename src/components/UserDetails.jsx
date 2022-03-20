import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${userid}`);
    // setUser([...data.data]);
  }, []);

  return <div>User Of Id : {userid}</div>;
};
