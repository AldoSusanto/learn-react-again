import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  // let selectedIdx = -1;

  // Hook - Functions that allow us to use react functions
  let [selectedIdx, setSelectedIdx] = useState(-1);

  const getMsg = () => {
    return items.length === 0 && <p>List is Empty</p>;
  };

  // const handleClick = (idx:Integer) => {
  //   // console.log("Is shift Key pressed ? " + e.shiftKey);
  //   selectedIdx = idx;
  // };

  return (
    <>
      <h1>{heading}</h1>
      {getMsg}
      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            key={item}
            className={
              idx === selectedIdx ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelectedIdx(idx);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
