import { useState } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);
  return (
    <>
      <section>
        {userData.map((datum, idx) => (
          <div key={idx}>
            <p>user name: {datum.name}</p>
            <p>user ID: {datum.id}</p>
          </div>
        ))}
      </section>
      <section></section>
    </>
  );
}
