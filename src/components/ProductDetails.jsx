import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    // use Id
  }, []);

  return <div>You are seeing details of product : {id}</div>;
};
