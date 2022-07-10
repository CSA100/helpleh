import Footer from "./footer";
import Navbar from "./navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthUserContext";

export default function Layout({ children }) {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
