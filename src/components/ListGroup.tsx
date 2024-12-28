function ListGroup() {
  let items = ["Pokhara", "Kathmandu", "Lalitpur", "Neplagunj"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found.</p>}

      <ul className="list-group">
        {/*take each item of items and convert it in different types- take li
        element */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
