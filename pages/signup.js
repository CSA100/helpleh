import styles from "../styles/Home.module.css";
import SignupForm from "../components/signupForm";

export default function Signup() {
  return (
    <div className={styles.container}>
      <SignupForm />
    </div>
  );
}
