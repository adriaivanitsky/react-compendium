export default function Controls({ search, setSearch, sort, setSort }) {
  return (
    <div>
      <input
        placeholder="search pokemon"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </div>
  );
}
