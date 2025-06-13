import { useState } from "react";
import UserDataDisplay from "./components/UserDataDisplay";
import RegisterForm from "./components/RegisterForm";

// 1차시도 실패의 흔적은 본 컴포넌트 하단에 남겨둡니다...
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
        <button type="button" onClick={handleAddUser} className="mt-4">
          Add User
        </button>
        <button type="submit">Create a new account</button>
      </form>
    </>
  );
}

///////////////////

// 1차시도: name은 controlled, id는 uncontrolled
// 13일 온종일 이거만 도전하다가 실패ㅠㅠ
// export default function App() {
//   const [userData, setUserData] = useState([]);
//   const [formList, setFormList] = useState([]);

//   const userNameData = userData.map((datum) => datum.userName);

//   const formNameRef = useRef({});
//   const formIdRef = useRef({});

//   const checkNameDuplication = (targetId) => {
//     // name의 경우 입력 시 그때그때 중복 여부 검사
//     // userData 내 이름 + 현재 입력 중인 다른 form의 이름
//     // 중복 -> focus + 경고문구(빨강)
//     // 중복 아님 -> 이용가능 안내문구(초록)
//     const currentName = formNameRef.current[targetId].value.trim();
//     const otherFormNames = Object.entries(formNameRef.current)
//       .filter(([id]) => Number(id) !== targetId)
//       .map(([, el]) => el.value.trim());

//     const isDuplicate =
//       otherFormNames.includes(currentName) ||
//       userNameData.includes(currentName);

//     if (isDuplicate) {
//       //중복 경고 문구가 해당 input 아래 뜨게 하기
//       formNameRef.current[targetId].focus();
//     } else {
//       //중복 아님 입력 가능 문구가 해당 input 아래 뜨게 하기
//     }
//   };

//   const handleAddUser = () =>
//     setFormList((prev) => [...prev, { id: Date.now() }]);

//   const handleDeleteForm = (targetId) =>
//     setFormList((prev) => prev.filter((form) => form.id !== targetId));

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // No Users Added
//     if (!formList.length) {
//       alert("Oops! Looks like you didn't add any users🥲");
//     }

//     // 이름 중복일 경우랑 공백 차단

//     const newUsers = [];

//     formList.forEach((form) => {
//       const userName = formNameRef.current[form.id].value.trim();
//       const userId = formIdRef.current[form.id].value.trim();
//     });

//     // 공백 처리 (.trim)

//     // name이나 id 중 공백 요소 있는 경우
//     // 해당 input(들)에 focus + 경고문구(빨강)

//     setUserData((prev) => [...prev, ...newUsers]);
//     setFormList([]);
//     formNameRef.current = {};
//     formIdRef.current = {};
//   };

//   return (
//     <>
//       <UserDataDisplay userData={userData} />
//       <form onSubmit={handleSubmit}>
//         {/* form 생성 영역 - 추후 컴포넌트 분리 */}
//         <div>
//           {formList.map((form) => (
//             <div key={form.id}>
//               <label>
//                 Your name
//                 <input
//                   ref={(el) => (formNameRef.current[form.id] = el)}
//                   type="text"
//                   name="user-name"
//                   onChange={() => checkNameDuplication(form.id)}
//                 />
//               </label>
//               <label>
//                 Your ID
//                 <input
//                   ref={(el) => (formIdRef.current[form.id] = el)}
//                   type="text"
//                   name="user-id"
//                 />
//               </label>
//               <button type="button" onClick={() => handleDeleteForm(form.id)}>
//                 X
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* 버튼 영역 */}
//         <div>
//           <button type="button" onClick={handleAddUser}>
//             Add User
//           </button>
//           <button type="submit">Create a new account</button>
//         </div>
//       </form>
//     </>
//   );
// }
