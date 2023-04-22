import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      // key = {index}
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={onClickHandler(index)}
      // index={index}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [selected,setSelected] = useState(false);

  useEffect(() => {
    setSelectedIndex(null);
    console.log('Change detected reported to memo')
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
    selected?setSelected(false):setSelected(true);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item) => (
        <SingleListItem
         key={item.id}
          onClickHandler={()=> handleClick}
          text={item.text}
          // index={index}
          isSelected={selected}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: [{id:1,text:"One"},{id:2,text:"two"},{id:3,text:"Three"},{id:4,text:"four"},{id:5,text:"five"},{id:6,text:"six"}],
};

const List = memo(WrappedListComponent);

export default List;
