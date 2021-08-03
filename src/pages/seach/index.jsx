import React, { useEffect, useState } from "react";

function Seach({ setParams, users, params }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          setParams({
            ...params,
            name: e.target.value,
          })
        }
      />
      {users.map((user) => (
        <select key={user.id} value={user.id}>
          {user.name}
        </select>
      ))}
    </div>
  );
}

export default Seach;
