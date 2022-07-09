import UserCard from "../../components/usercard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthUserContext";

export default function Profile() {
  const {authUser} = useAuth()
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, "User"),
        where('uid', '==', authUser.uid)
      );
      querySnapshot.forEach((doc) => {
        setUser(doc);
      });
    })();
  }, [authUser]);
  return (
    <>
      <UserCard key={user.id} opp={user} >
      </UserCard>
    </>
  );
}