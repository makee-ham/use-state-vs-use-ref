import { useCallback, useRef, useState } from "react";

import { ControlBtns, RegisterForm, UserDataDisplay } from "./components";

export default function App() {
  const validRef = useRef(false);
  const savedUserRef = useRef([]);
  const [currentFormsData, setCurrentFormsData] = useState([]);

  const handleAddUser = useCallback(
    () =>
      setCurrentFormsData((prev) => [
        ...prev,
        {
          id: savedUserRef.current.length + prev.length,
          username: "",
          userId: "",
        },
      ]),
    [setCurrentFormsData, savedUserRef.current]
  );

  const handleChange = useCallback(
    (event, validate) => {
      if (typeof validate !== "function") return;
      const target = event.target;

      const isError = validate(target.name, target.value, [
        ...savedUserRef.current,
        ...currentFormsData,
      ]);
      if (isError) {
        validRef.current = false;
      } else {
        validRef.current = true;
      }

      setCurrentFormsData((prev) =>
        prev.map((user) => {
          if (user.id === Number(target.dataset["idx"]))
            return {
              ...user,
              [target.name]: target.value,
            };
          return user;
        })
      );
    },
    [validRef.current, setCurrentFormsData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validRef.current) {
      alert("Unable to submit😭 Make sure all fields are valid.");
      return;
    }

    savedUserRef.current = [...savedUserRef.current, ...currentFormsData];
    setCurrentFormsData((prev) => [
      {
        id: prev.length,
        userId: "",
        username: "",
      },
    ]);
  };
  return (
    <div className="m-12">
      <UserDataDisplay userData={savedUserRef.current} />
      <form onSubmit={handleSubmit}>
        {currentFormsData.map((user) => (
          <RegisterForm key={user.id} values={user} onChange={handleChange} />
        ))}
        <ControlBtns onClickAdd={handleAddUser} />
      </form>
    </div>
  );
}
