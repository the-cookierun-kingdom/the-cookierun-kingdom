import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCoolTime } from "./coolTimeSlice";


export function CoolTime() {
  const coolTime = useAppSelector(selectCoolTime);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>{ coolTime }</span>
    </div>
  );
}
