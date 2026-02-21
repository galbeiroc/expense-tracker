import { useState, type ChangeEvent } from "react";
import { Link } from "react-router";

import AuthLayout from "../../components/Layout/AuthLayout";
import Input from "../../components/Inputs/Input";

import { validateEmail } from "../../utils/helper";

import styles from "./Login.module.css";

function Login() {
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formValues = Object.fromEntries(data.entries());
    const { email, password } = formValues;

    if (email && !validateEmail(email as string)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    // Login Api call
  };

  return (
    <AuthLayout>
      <div className={styles["login-content"]}>
        <h3 className={styles["login-title"]}>Welcome Back</h3>
        <p className={styles["login-description"]}>
          Please enter your details to log in
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="jhon@example.com"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Min 8 characters"
          />

          {error && <p className={styles["error-message"]}>{error}</p>}

          <button type="submit" className={styles["login-btn"]}>
            LOGIN
          </button>

          <p>
            Don't have account ?{" "}
            <Link className={styles["sign-up-link"]} to="/signUp">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
