import { useState } from "react";
import Item from "./Item";

export default function TodoList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));

  return (
    <div className="list">
      <ul class="list-group">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <div className="sort-by">
          <span>Sort by :</span>
          <select
            class="form-select form-select-lg"
            aria-label="Sort by dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input" selected>
              Input order
            </option>
            <option value="description">Description</option>
            <option value="checked">Checked status</option>
          </select>
        </div>

        <button
          type="button"
          class="btn btn-danger btn-lg"
          onClick={() => onClearList()}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
