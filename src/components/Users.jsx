import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      // console.log(data);
      setList([...data.data]);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      {list.map((e) => (
        <Link to={`/users/${e.id}`} key={e.id}>
          {e.id}. {e.first_name}
        </Link>
      ))}
    </div>
  );
};
