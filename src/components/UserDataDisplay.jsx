import { memo } from "react";

export const UserDataDisplay = memo(({ userData }) => {
  console.log(userData);
  return (
    <section className="mb-4">
      {userData?.length <= 0 ? (
        <>
          <h2 className="text-2xl font-bold">
            This place feels lonely🥺 Add some users!
          </h2>
          <p>Click 'Add User' to enter your information.</p>
        </>
      ) : (
        userData.map((user) => (
          <div key={user.id} className="w-3xl border border-red-600 p-4">
            <p>user name: {user.username}</p>
            <p>user ID: {user.userId}</p>
          </div>
        ))
      )}
    </section>
  );
});
