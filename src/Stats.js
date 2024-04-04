export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your todo list 🛩</em>
      </p>
    );

  const numItems = items.length;
  const numChecked = items.filter((item) => item.checked).length;
  const percentage = Math.round((numChecked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Welldone You done it! 😎"
          : ` You have ${numItems} things on your todo list, and you already checked ${numChecked} (${percentage}%)`}
      </em>
    </footer>
  );
}
