import React, { useState, useEffect } from "react";
import axios from "axios";
const NewProject = () => {
  const [data, setData] = useState();
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(1);
  const fetchData = () => {
    axios
      .get(
        `https://api-generator.retool.com/cNuTE3/data?_page=${count}&_limit=${limit}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [count, limit]);
  const preview = () => {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  };
  const next = () => {
    setCount(count + 1);
    if (data.length == 0) {
      setCount(count);
    }
  };
  const changeHandler = (e, name) => {
    if ((name = "limit")) {
      setLimit(e.target.value);
      setCount(1)
    }
  };
  return (
    <div className="paginator-container">
      <h1>Paginator</h1>
      <div className="actions">
        <div className="paginator-buttons">
          <button className="btn btn-primary " onClick={preview}>
            Preview
          </button>
          <button className="btn btn-primary" onClick={next}>
            Next
          </button>
        </div>
        <div className="paginator-count">
          <div className="page-items">
          <label>Items Per Page</label>
          <input
            className="set-limit"
            type="number"
            name="limit"
            id="limit"
            value={limit}
            onChange={(e) => changeHandler(e, "limit")}
          />
          </div>
          <b>Page :- {count}</b>
        </div>
      </div>
      {data?.length == 0 && <h5>No Data Found</h5>}

      {data?.map((res, index) => {
        const { id, name, balance, location } = res;
        return (
          <div key={id} className="">
            <h5>
              {index+1} ---------------------------------- {name}
            </h5>
          </div>
        );
      })}
    </div>
  );
};
export default NewProject;
