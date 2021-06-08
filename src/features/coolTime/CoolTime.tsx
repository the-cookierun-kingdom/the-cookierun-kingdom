import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  requestCoolTimeAsync,
  selectedType,
  selectCoolTime,
  selectedCoolTime,
  tabList,
} from "./coolTimeSlice";

function CooTimeTab() {
  const currentType = useAppSelector(selectedType);
  const tabData = useAppSelector(tabList);
  const dispatch = useAppDispatch();

  return (
    <ul className="nav nav-tabs my-3">
      {tabData.map(({id, type}) => (
        <li key={id}>
          <button
            className={`nav-link ${currentType === id && 'active'}`}
            onClick={() => dispatch(selectCoolTime(id))}
          >{type}</button>
        </li>
      ))}
    </ul>
  );
}

function CoolTimeDisplay() {
  const coolTime = useAppSelector(selectedCoolTime);

  if (!coolTime) {
    return null;
  }

  return (
    <div className="alert alert-success" role="alert">
      <h5 className="alert-heading">일반쿨타임 { coolTime.type }</h5>
      <hr />
      <p className="mb-0">{ coolTime.heroes.join(', ') }</p>
      <ul className="mb-0">
        {coolTime.start_cool.map((st, idx) => (
          <li key={idx}>{ st.time }{ st.chance && `, ${st.chance}%` }{ st.desc && `, ${st.desc}` }</li>
        ))}
      </ul>
    </div>
  );
}

function CoolTable() {
  const coolTime = useAppSelector(selectedCoolTime);

  return (
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col">일반쿨</th>
          <th scope="col">보물X</th>
          <th scope="col">10렙</th>
          <th scope="col">11렙</th>
          <th scope="col">12렙</th>
        </tr>
      </thead>
      <tbody>
        {coolTime && coolTime.list.map((ct, idx) => (
          <tr key={idx} className="text-right">
            <td>{ ct.cool }</td>
            <td>{ ct.jewel_no || 'x' }</td>
            <td>{ ct.level_10 || 'x' }</td>
            <td>{ ct.level_11 || 'x' }</td>
            <td>{ ct.level_12 || 'x' }</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


export function CoolTime() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestCoolTimeAsync());
  }, []);

  return (
    <div className="container">
      <CooTimeTab />
      <CoolTimeDisplay />
      <CoolTable />
    </div>
  );
}
