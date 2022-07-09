import UserCard from "../../components/user";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

export default function Profile() {
  const [opps, setOpps] = useState([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, "User")
      );
      const userlist = [];
      console.log(userlist)
      querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj["id"] = doc.id;
        userlist.push(obj);
      });
      setOpps(userlist);
    })();
  }, []);
  return (
    <>
      {opps.map((opp) => (
        <UserCard key={opp.id} opp={opp} >
        </UserCard>
      ))}
    </>
  );
}