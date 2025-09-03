import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <BsSearch /> <input placeholder="Find members"></input>
    </div>
  );
}
