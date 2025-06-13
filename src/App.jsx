import { useState } from "react";
import UserDataDisplay from "./components/UserDataDisplay";

export default function App() {
  const [userData, setUserData] = useState([]);
  return (
    <>
      <UserDataDisplay userData={userData} />
      <section>
        <div></div>
        <div>
          <button type="button">Add User</button>
          <button type="button">Create a new account</button>
        </div>
      </section>
    </>
  );
}
