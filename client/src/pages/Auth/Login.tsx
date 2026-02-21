import AuthLayout from "../../components/AuthLayout/AuthLayout";

import styles from "./Login.module.css";

function Login() {
  return (
    <AuthLayout>
      <div className={styles["login-content"]}>
        <h3 className={styles["login-title"]}>Welcome Back</h3>
        <p className={styles["login-description"]}>Please enter your details to log in</p>
      </div>
    </AuthLayout>
  );
}

export default Login;
