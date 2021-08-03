import React, { useState, useEffect } from "react";
import "./index.css";
import Seach from "./seach";
import List from "./list";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Pages = () => {
  console.log("Pages");
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    console.log("apiUrl", apiUrl);
    fetch(`${apiUrl}user`).then(async (res) => {
      if (res.ok) {
        // setList(await res.json());
        console.log(await res.json());
      }
    });
  }, [params]);
  return (
    <div className="continer">
      <Seach setParams={setParams} users={users} params={params} />
      <List />
    </div>
  );
};

export default Pages;
