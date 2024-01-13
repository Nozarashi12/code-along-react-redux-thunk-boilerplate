import React, { useState } from "react";
import "./App.css";
import action_provider from "./component/Action";
import store from "./component/store";

function App() {
  const [data, setData] = useState([]);
  const [rbtn, setRbtn] = useState(false);

  store.subscribe(() => {
    const newData = store.getState().data.data;
    setData(newData);
    console.log(newData);
  });

  const fetchData = () => {
    store.dispatch(action_provider());
    setRbtn(false); 
  };

  const removeData = () => {
    setRbtn(true);
    setData([]);
  };

  return (
    <div className="main">
      <button className="btn" onClick={fetchData}>
        Fetch data
      </button>
      {data.length > 0 && (
        <button className="bttn" onClick={removeData}>Remove Data</button>
      )}

      {rbtn }
      {!rbtn &&
        data.map((item) => (
          <div className="box" key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
          </div>
        ))}
    </div>
  );
}

export default App;
