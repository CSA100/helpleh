import styles from "../styles/Home.module.css";
import AuthForm from "../components/authForm";

export default function Signup() {
  return (
    <div className={styles.container}>
      <AuthForm formType="signUp" />
    </div>
  );
}
