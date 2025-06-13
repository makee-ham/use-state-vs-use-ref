export default function UserDataDisplay({ userData }) {
  return (
    <section>
      {userData.length <= 0 ? (
        <>
          <h2>This place feels lonely🥺 Add some users!</h2>
          <p>Click 'Add User' to enter your information.</p>
        </>
      ) : (
        userData.map((datum, idx) => (
          <div key={idx}>
            <p>user name: {datum.name}</p>
            <p>user ID: {datum.id}</p>
          </div>
        ))
      )}
    </section>
  );
}
