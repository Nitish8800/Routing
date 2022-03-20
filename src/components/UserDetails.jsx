import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { id } = useParams();

  return <div>User Of Id : {id}</div>;
};
