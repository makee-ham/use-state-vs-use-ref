export default function UserDataDisplay({ userData }) {
  return (
    <section className="mb-4">
      {userData.length <= 0 ? (
        <>
          <h2 className="text-2xl font-bold">
            This place feels lonely🥺 Add some users!
          </h2>
          <p>Click 'Add User' to enter your information.</p>
        </>
      ) : (
        userData.map((user, idx) => (
          <div key={idx} className="w-3xl border border-red-600 p-4">
            <p>user name: {user.name}</p>
            <p>user ID: {user.id}</p>
          </div>
        ))
      )}
    </section>
  );
}
