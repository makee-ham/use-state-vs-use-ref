import { useState } from "react";
import UserDataDisplay from "./components/UserDataDisplay";

export default function App() {
  const [userData, setUserData] = useState([]);
  return (
    <>
      <UserDataDisplay userData={userData} />
      <section></section>
    </>
  );
}
