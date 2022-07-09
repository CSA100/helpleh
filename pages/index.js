import { useAuth } from "../context/AuthUserContext";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SimpleCard from "../components/signup";
import WithSubnavigation from "../components/navbar";
import LargeWithLogoLeft from "../components/footer";

export default function Home() {
  const { authUser, loading } = useAuth();

  console.log("authUser: ", authUser);
  console.log("loading: ", loading);
  return (
    <div className={styles.container}>
      <WithSubnavigation />
      <SimpleCard />
      <LargeWithLogoLeft />
    </div>
  );
}
