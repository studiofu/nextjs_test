import { useRouter } from "next/router";

const Day = () => {
  const router = useRouter();
  const { year, month, day } = router.query;
  console.log(`${year}/${month}/${day}`);

  return <p>Post id: {year} {month} {day}</p>;
  //return "hello";
};

export default Day;