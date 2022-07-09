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
      setUser(authUser);
    }
  }, [authUser]);
  return <>{user ? <UserCard key={user.id} user={user}></UserCard> : <></>}</>;
}
