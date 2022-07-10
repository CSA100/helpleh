import OppCard from "../../components/oppcard";
import OppDetails from "../../components/oppdetails";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthUserContext";

export default function Opportunities() {
  const { authUser } = useAuth();
  const [opps, setOpps] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, "OpportunityListings"),
        where("orgId", "==", authUser.uid)
      );
      const opplist = [];
      querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj["id"] = doc.id;
        opplist.push(obj);
      });
      setOpps(opplist);
    })();
  }, []);
  return (
    <>
      {opps.map((opp) => (
        <OppCard key={opp.id} opp={opp}>
          <OppDetails key={opp.id} opp={opp} />
        </OppCard>
      ))}
    </>
  );
}
