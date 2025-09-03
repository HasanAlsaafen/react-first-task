import { BsFillPersonFill } from "react-icons/bs";

export default function UserCard({ name, active }) {
  return (
    <div className="user-card">
      <div className="user-name">
        <BsFillPersonFill
          color="rgba(26, 1, 57, 1)"
          style={!active ? { opacity: 0.5 } : { opacity: 1 }}
        />
        <p style={!active ? { opacity: 0.5 } : { opacity: 1 }}>{name}</p>
      </div>
      <label className="custom-checkbox">
        <input type="checkbox" checked={active} />
        <span
          className="checkmark"
          style={!active ? { opacity: 0.5 } : { opacity: 1 }}
        ></span>
      </label>
    </div>
  );
}
