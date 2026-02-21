import { LuTrendingUpDown } from "react-icons/lu";

import Card from "../../assets/images/expense-tracker-card.png";

import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

interface StastInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles["auth-layout-container"]}>
      <div className={styles["auth-layout-left"]}>
        <h2>Expense Tracker</h2>
        {children}
      </div>

      <div className={styles["auth-layout-right"]}>
        <div className={styles["auth-layout-square1"]}></div>
        <div className={styles["auth-layout-square2"]}></div>
        <div className={styles["auth-layout-square3"]}></div>

        <div className={styles["auth-layout-icon"]}>
          <StastInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your Income & Expenses"
            value="430,000"
          />
        </div>

        <img
          src={Card}
          alt="Expense tracker card"
          className={styles["auth-layout-image"]}
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StastInfoCard = ({ icon, label, value }: StastInfoCardProps) => {
  return (
    <div className={styles["stast-info-card"]}>
      <div className={styles["stast-info-icon"]}>{icon}</div>
      <div>
        <h6 className={styles["stast-info-label"]}>{label}</h6>
        <span className={styles["stast-info-value"]}>${value}</span>
      </div>
    </div>
  );
};
