export default function Controls({ search, setSearch }) {
  return (
    <div>
      <input
        placeholder="search pokemon"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}
