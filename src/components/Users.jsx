import { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {
  const [list, setList] = useState();

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      // console.log(data);
      setList([...data.data]);
    });
  }, []);

  return (
    <div>
      {list.map((e) => (
        <div>
          {e.id}. {e.first_name}
        </div>
      ))}
    </div>
  );
};
