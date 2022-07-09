import OppCard from "../../components/oppcard";
import OppDetails from "../../components/oppDetails";
import { collection, getDocs, doc, updateDoc, arrayUnion} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import {useAuth} from "../../context/AuthUserContext"

export default function Opportunities() {
  const [opps, setOpps] = useState([]);
  const {authUser} = useAuth();

  const onAccept = async (index) => {
  const userRef = doc(db, "User", authUser.uid);
  try{
    await updateDoc(userRef, {
      activities: arrayUnion(opps[index].id)
    })
    
    }catch(e){
      console.error("update error: ", e)
    }
  } 

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
      {opps.map((opp, index) => (
        <OppCard key={opp.id} opp={opp}>
          <OppDetails key={opp.id} opp={opp} index={index} onAccept={() => onAccept(index)}/>
        </OppCard>
      ))}
    </>
  );
}
