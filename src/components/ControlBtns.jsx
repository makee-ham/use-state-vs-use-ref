import { memo } from "react";

export const ControlBtns = memo(({ onClickAdd }) => {
  return (
    <>
      <button type="button" onClick={onClickAdd} className="mt-4">
        Add User
      </button>
      <button type="submit">Create a new account</button>
    </>
  );
});
