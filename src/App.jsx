import { useRef, useState } from "react";
import UserDataDisplay from "./components/UserDataDisplay";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [formList, setFormList] = useState([]);

  const formNameRef = useRef([]);
  const formIdRef = useRef([]);

  const handleAddUser = () =>
    setFormList((prev) => [...prev, { id: Date.now() }]);

  const handleDeleteForm = (targetId) => {
    setFormList((prev) => prev.filter((form) => form.id !== targetId));
    formNameRef.current[targetId] = null;
    formIdRef.current[targetId] = null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // No Users Added
    if (!userData.length) {
      alert("Oops! Looks like you didn't add any users🥲");
    }

    // 공백 처리 .trim

    // name이나 id 중 공백 요소 있는 경우
    // 해당 input(들)에 focus + 경고문구(빨강)
  };

  // name의 경우 debounce 통해 입력 완료 시 그때그때 중복 여부 검사
  // 중복 -> focus + 경고문구(빨강)
  // 중복 아님 -> 이용가능 안내문구(초록)

  return (
    <>
      <UserDataDisplay userData={userData} />
      <form onSubmit={handleSubmit}>
        {/* form 생성 영역 - 추후 컴포넌트 분리 */}
        <div>
          {formList.map((form) => (
            <div key={form.id}>
              <label>
                Your name
                <input
                  ref={(el) => (formNameRef.current[form.id] = el)}
                  type="text"
                  name="user-name"
                />
              </label>
              <label>
                Your ID
                <input
                  ref={(el) => (formIdRef.current[form.id] = el)}
                  type="text"
                  name="user-id"
                />
              </label>
              <button type="button" onClick={() => handleDeleteForm(form.id)}>
                X
              </button>
            </div>
          ))}
        </div>

        {/* 버튼 영역 */}
        <div>
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
          <button type="submit">Create a new account</button>
        </div>
      </form>
    </>
  );
}
