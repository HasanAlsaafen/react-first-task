import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import Button from "./Button";
import data from "./data";
export default function MemberContainer() {
  return (
    <div className="member-container">
      <SearchBar />
      {data.map((item) => {
        return <UserCard name={item.name} active={item.active} key={item.id} />;
      })}
      <div className="buttons-container">
        <Button action="save" /> <Button action="cancel" />
      </div>
    </div>
  );
}
