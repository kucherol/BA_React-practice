import React from "react";

const List = ({ data, field, click, children }) => {
  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id} onClick={() => click(user)}>
            {user[field]}
          </li>
        ))}
      </ul>
      {children}
    </>
  );
};

export default List;
