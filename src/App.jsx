import { useState } from "react";
import UserDataDisplay from "./components/UserDataDisplay";
import RegisterForm from "./components/RegisterForm";

// 2차시도: controlled component로만 해보자
export default function App() {
  const [userData, setUserData] = useState([]);
  const [currentFormsData, setCurrentFormsData] = useState([]);

  const handleAddUser = () =>
    setCurrentFormsData((prev) => [
      ...prev,
      { id: Date.now(), userName: "", userId: "", error: "" },
    ]);

  const handleChange = (id, key, value) => {
    const trimedValue = value.trim();
    let error = "";

    setCurrentFormsData((prev) =>
      prev.map((datum) => {
        if (datum.id !== id) return datum;

        if (key === "userName") {
          const allTheOtherNames = prev
            .filter((datum) => datum.id !== id)
            .map((datum) => datum.userName.trim())
            .concat(userData.map((user) => user.name));
          if (allTheOtherNames.includes(trimedValue))
            error = "This username is already taken.";
        }

        if (trimedValue === "")
          error = `Please enter your ${key === "userName" ? "name" : "ID"}.`;

        return {
          ...datum,
          [key]: trimedValue,
          error: error,
        };
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAllValid = currentFormsData.every(
      (datum) =>
        datum.userName.trim() !== "" &&
        datum.userId.trim() !== "" &&
        !datum.error
    );

    if (!isAllValid) {
      alert("Unable to submit😭 Make sure all fields are valid.");
      return;
    }

    setUserData((prev) => [
      ...prev,
      ...currentFormsData.map((datum) => ({
        name: datum.userName,
        id: datum.userId,
      })),
    ]);
    setCurrentFormsData([]);
  };

  return (
    <>
      <UserDataDisplay userData={userData} />
      <form onSubmit={handleSubmit}>
        {currentFormsData.map((datum) => (
          <RegisterForm key={datum.id} data={datum} onChange={handleChange} />
        ))}
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
        <button type="submit">Create a new account</button>
      </form>
    </>
  );
}
