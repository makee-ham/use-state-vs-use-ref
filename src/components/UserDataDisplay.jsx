export default function UserDataDisplay({ userData }) {
  return (
    <section>
      {userData.length <= 0 ? (
        <>
          <h2>This place feels lonely🥺 Add some users!</h2>
          <p>Click 'Add User' to enter your information.</p>
        </>
      ) : (
        userData.map((user, idx) => (
          <div key={idx}>
            <p>user name: {user.name}</p>
            <p>user ID: {user.id}</p>
          </div>
        ))
      )}
    </section>
  );
}
