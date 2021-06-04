import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { requestCoolTimeAsync, selectCoolTime } from "./coolTimeSlice";

function CooTimeTab() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button className="nav-link active" >Active</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Link</button>
      </li>
      <li className="nav-item">
        <button className="nav-link">Link</button>
      </li>
    </ul>
  );
}

function CoolTable() {
  return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
  )
}한


export function CoolTime() {
  const coolTime = useAppSelector(selectCoolTime);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestCoolTimeAsync());
  }, []);

  return (
    <div className="container">
      <span>{ coolTime }</span>
      <CooTimeTab />
      <CoolTable />
    </div>
  );
}
