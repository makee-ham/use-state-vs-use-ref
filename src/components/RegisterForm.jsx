export default function RegisterForm({ data, onChange }) {
  return (
    <div className="w-3xl border border-blue-600 p-4">
      <label>
        Your name:
        <input
          type="text"
          name="user-name"
          value={data.userName}
          onChange={(e) => onChange(data.id, "userName", e.target.value)}
        />
      </label>
      <label>
        Your ID:
        <input
          type="text"
          name="user-id"
          value={data.userId}
          onChange={(e) => onChange(data.id, "userId", e.target.value)}
        />
      </label>
      {data.error && <p style={{ color: "red" }}>{data.error}</p>}
    </div>
  );
}
