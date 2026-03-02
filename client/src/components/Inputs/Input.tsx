import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import styles from "./Input.module.css";

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}
const Input = ({ label, name, type, placeholder }: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className={styles["label-input"]}>{label}</label>
      <div className={styles["input-box"]}>
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className={styles["input-form"]}
          name={name}
          placeholder={placeholder}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                onClick={toggleShowPassword}
                className={styles["icon-eye"]}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                onClick={toggleShowPassword}
                className={styles["icon-eye-slash"]}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
