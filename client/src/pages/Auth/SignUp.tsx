import { useState, type ChangeEvent } from "react";
import { Link } from "react-router";

import AuthLayout from "../../components/Layout/AuthLayout";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import Input from "../../components/Inputs/Input";

import { validateEmail } from "../../utils/helper";

import styles from "./SingUp.module.css";

function SingUp() {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleSignUp = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formValues = Object.fromEntries(data.entries());
    const { fullName, email, password } = formValues;

    if (!fullName) {
      setError("Please enter the full name");
      return;
    }

    if (!email || (email && !validateEmail(email as string))) {
      setError("Please enter a valid email");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    // Login Api call
  }

  return (
    <AuthLayout>
      <div className={styles["signup-content"]}>
        <h3 className={styles["signup-title"]}>Create an Account</h3>
        <p className={styles["signup-description"]}>
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className={styles["signup-form"]}>
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              placeholder="jhon"
            />

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="jhon@example.com"
            />

            <div className={styles["signup-form-pwd"]}>
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Min 8 characters"
              />
            </div>
          </div>

          {error && <p className={styles["error-message"]}>{error}</p>}

          <button type="submit" className={styles["signup-btn"]}>
            SIGN UP
          </button>

          <p>
            Already have an account ?{" "}
            <Link className={styles["login-link"]} to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default SingUp;
