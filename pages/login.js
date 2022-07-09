import styles from "../styles/Home.module.css";
import WithSubnavigation from "../components/navbar";
import LargeWithLogoLeft from "../components/footer";
import AuthForm from "../components/authForm";

export default function Login() {
  return (
    <div className={styles.container}>
      <WithSubnavigation />
      <AuthForm formType="signIn" />
      <LargeWithLogoLeft />
    </div>
  );
}
