import OppCard from "../../components/oppcard";
import OppDetails from "../../components/oppDetails";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

export default function Opportunities() {
  const [opps, setOpps] = useState([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, "OpportunityListings")
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
