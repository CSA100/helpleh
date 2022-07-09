import UserCard from "../../components/usercard";
import { collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthUserContext";

export default function Profile() {
  const {authUser} = useAuth()
  const [user, setUser] = useState({});

  console.log("kkk: ",authUser)
  console.log('user: ', user)

  useEffect(() => {if (authUser) {
    console.log("here");
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, "User"),
        where('uid', '==', authUser.uid)
      );
      console.log("Hi: ", querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log("doc: ", doc)
        setUser(doc);
      });
    })()
  };
  }, [authUser]);
  return (
    <>
      <UserCard key={user.id} opp={user} >
      </UserCard>
    </>
  );
}