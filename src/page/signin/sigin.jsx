import "./sigin.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/userslice";
import Form from "../../composant/form/form";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok && data.body.token) {
        // Stocke le token dans Redux
        dispatch(signIn({ token: data.body.token }));
        // Redirige vers la page user
        navigate(`/user/${data.body.token}`);
      } else {
        setError(data.message || "Login failed");
      }
    } catch  {
      setError("Server error");
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <Form
          onSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </section>
    </main>
  );
}

export default SignIn;