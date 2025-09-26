import React from "react";
import myInfo from "../../data/my_info.json";
import "./Info.css";

export const Info = () => {
  return (
    <div className="info_wrapper">
      <table className="info_table">
        <tr>
          <th>name</th>
          <td>{myInfo[0].name}</td>
          <th>phone</th>
          <td>010-3628-0827</td>
        </tr>
      </table>
    </div>
  );
};
