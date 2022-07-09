import styles from "../styles/Home.module.css";
import AuthForm from "../components/authForm";

export default function Login() {
  return (
    <div className={styles.container}>
      <AuthForm formType="signIn" />
    </div>
  );
}
