import UserCard from "../../components/usercard";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthUserContext";

export default function Profile() {
  const { authUser } = useAuth();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (authUser) {
      (async () => {
        const querySnapshot = await getDocs(
          query(collection(db, "User"), where("uid", "==", authUser.uid))
        );

        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      })();
    }
  }, [authUser]);
  return (
    <>
      <UserCard key={user.id} user={user}></UserCard>
    </>
  );
}
