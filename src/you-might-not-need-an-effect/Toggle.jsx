import { useEffect, useState } from 'react';

function Toggle({ isOn, onChange }) {
  function handleClick() {
    onChange(!isOn);
  }

  // ...
}
