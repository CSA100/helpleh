import OppCard from "../../components/oppcard";
import OppDetails from "../../components/oppdetails";
import { collection, getDocs, doc, updateDoc, arrayUnion} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthUserContext"
import { useToast } from '@chakra-ui/react'

export default function Opportunities() {
  const [opps, setOpps] = useState([]);
  const {authUser} = useAuth();
  const toast = useToast();

  const showToast = () =>
    toast({
      title: 'Activity Added',
      description: "We've successfully added this activity to you list.",
      status: 'success',
      duration: 4500,
      isClosable: true,
    })

  const onAccept = async (index) => {
    console.log("Close: ", close)
    const userRef = doc(db, "User", authUser.uid);
    try{
      await updateDoc(userRef, {
        activities: arrayUnion(opps[index].id)
      })
    }catch(e){
      console.error("update error: ", e)
    }
    showToast()
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
