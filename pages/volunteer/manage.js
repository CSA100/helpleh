import OppCard from "../../components/oppcard";
import OppDetails from "../../components/oppDetails";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthUserContext";
import {
    Badge,
    Center,
    Divider,
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    HStack
  } from "@chakra-ui/react";
  import { CalendarIcon, EditIcon } from '@chakra-ui/icons'

export default function Opportunities() {
const { authUser } = useAuth();
console.log(authUser)

const [opps, setOpps] = useState();

console.log(opps?.length)

  useEffect(() => {
    console.log('user: ', authUser)
    const getData = async () => {

        if (!authUser) return
    
        const listings = []

        for (let i = 0; i < authUser.Activities.length; i++) { 

            // console.log("hihk: ",authUser.Activities[i])

            const docRef = doc(db, "OpportunityListings", `${authUser.Activities[i]}`);
            const docSnap = await getDoc(docRef);

            const listing = docSnap.data();
            listings.push(listing)
        }
    
        // authUser.Activities.forEach(async (act) => {
        //     const actDoc = await getDoc(doc(db, "OpportunityListings", act));
        //     listings.push(actDoc.data())
        // })
    
        console.log("listings: ", listings)
        console.log("lenn: ", listings.length)
        setOpps(listings)
    }
    getData()
  }, [authUser])

  return <Box>
    {opps?.map((opp, index) => {return  <Center key={index} py={6}>
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      w={{ sm:"550px", md: "550px" }}
      height={{ sm: "250px", md: "250px" }}
      direction={{ base: "row" }}
      bg={"white"}
      color="black"
      boxShadow={"md"}
      padding={4}
    >
      <Flex
        w={{ sm: "200px", md: "200px" }}
        bg="white.200"
        justifyContent={"center"}
        alignItems="center"
      >
        {/* Display Picture */}
        <Image
          rounded="lg"
          alt=""
          objectFit="cover"
          boxSize={{ sm: "200px", md: "90%" }}
          src={
            opp.imageURL 
          }
        />
      </Flex>
      <Stack
        justifyContent="center"
        p={4}
        pt={4}
        w={{ sm:"400px", md: "400px" }}
        height={{ sm: "215px", md: "215px" }}
      > 
        <HStack justify="space-between">
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {opp.orgname}
          </Heading>
          {/* {isOrg && <EditIcon />} */}
        </HStack>
        <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
          <b>Contact:</b> {opp.contact}
        </Text>
        <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
          <b>Location:</b> {opp.location}
        </Text>
        <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
          <b>Date & Time:</b> {opp.datetime}
        </Text>
        {/* <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
          <b>Job Scope:</b> {opp.jobscope}
        </Text> */}
        <Divider></Divider>
        {/* {children} */}
        {/* <button>
            <Link href={`/volunteer/opportunity/${opp.id}`}></Link>
        </button> */}
      </Stack>
    </Stack>
  </Center>
    

    })}


  </Box>
//   useEffect(() => {
//     (async () => {
//       const querySnapshot = await getDocs(
//         collection(db, "User")
//       );
//       const opplist = [];
//       querySnapshot.forEach((doc) => {
//         const obj = doc.data();
//         obj["id"] = doc.id;
//         opplist.push(obj);
//       });
//       setOpps(opplist);
//     })();
//   }, []);
//   return (
//     // <>
//     //   {opps.map((opp) => (
//     //     <OppCard key={opp.id} opp={opp}>
//     //       <OppDetails key={opp.id} opp={opp} />
//     //     </OppCard>
//     //   ))}
//     // </>
//     <></>
//   );
}
