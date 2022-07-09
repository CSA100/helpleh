import styles from "../styles/Home.module.css";
import LargeWithLogoLeft from "../components/footer";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthUserContext";

export default function Home() {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);

  console.log("authUser: ", authUser);
  console.log("loading: ", loading);
  return <div className={styles.container}>index</div>;
}
