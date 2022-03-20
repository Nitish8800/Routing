import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" placeholder="Enter Username" />
      <input type="text" placeholder="Enter Password" />
      <button
        onClick={() => {
          //
          navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
};
