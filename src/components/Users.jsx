import { useEffect } from "react";
import axios from "axios";

export const Users = () => {
  const [list, setList] = useState();

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      // console.log(data);
      setList;
    });
  }, []);

  return <div></div>;
};
