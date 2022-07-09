import OppCard from "../../components/oppcard";

export default function Opportunities() {
  return (
    <OppCard
      opp={{
        name: "Test Org",
        contact: "+65 1234 5678",
        location: "The place",
        datetime: "10 July 7 am",
        jobscope: "Show children the way",
      }}
    />
  );
}
