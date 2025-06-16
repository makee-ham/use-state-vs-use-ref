import { useState } from "react";

/**
 * 유효성 검사를 할 수 있는 커스텀 훅입니다.
 * @param {object} initialValue - [field ID]: "error Message" 형태의 속성을 갖는 초기 에러 객체입니다.
 * @returns errors - 에러 발생 시 에러 메세지를 담은 에러 객체를 반환합니다.
 * @returns validate - 유효성 검사용 함수입니다.
 */
export const useValidate = (initialValue) => {
  const [errors, setErrors] = useState(initialValue);

  const validate = (key, value, checkList) => {
    if (!checkList) throw new Error("validate Function: Check your checkList");

    let errorMessage = "";
    const trimedValue = value.trim();
    if (trimedValue === "") {
      errorMessage = `Please enter your ${key === "userName" ? "name" : "ID"}`;
      setErrors((prev) => ({ ...prev, [key]: errorMessage }));
      return errorMessage;
    }

    const isValid = checkList.some((element) => element[key] === trimedValue);
    if (isValid) {
      errorMessage = `This ${key} is already taken.`;
    }
    setErrors((prev) => ({ ...prev, [key]: errorMessage }));
    return errorMessage;
  };

  return { errors, validate };
};
