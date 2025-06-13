export default function UserDataDisplay({ userData }) {
  return (
    <section>
      {userData.map((datum, idx) => (
        <div key={idx}>
          <p>user name: {datum.name}</p>
          <p>user ID: {datum.id}</p>
        </div>
      ))}
    </section>
  );
}
