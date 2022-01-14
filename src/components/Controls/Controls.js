import Select from '@mui/material/Select';
import { MenuItem, TextField } from '@mui/material';

export default function Controls({
  search,
  setSearch,
  sort,
  setSort,
  selectedType,
  setSelectedType,
  types,
}) {
  return (
    <div>
      <TextField
        placeholder="search pokemon"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></TextField>
      <Select value={sort} onChange={(e) => setSort(e.target.value)}>
        <MenuItem value="asc">ascending</MenuItem>
        <MenuItem value="desc">descending</MenuItem>
      </Select>
      <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <MenuItem key="all" value="all">
          all
        </MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
