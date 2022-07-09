import styles from "../styles/Home.module.css";
import SimpleCard from "../components/signup";
import WithSubnavigation from "../components/navbar";
import LargeWithLogoLeft from "../components/footer";

export default function Signup() {
  return (
    <div className={styles.container}>
      <WithSubnavigation />
      <SimpleCard />
      <LargeWithLogoLeft />
    </div>
  );
}
