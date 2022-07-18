import React, { useState } from 'react';
import './BasicToggleSwitch.css';

export default function ToggleSwitch() {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  return (
    <label className='toggle-switch'>
      <input
        type='checkbox'
        name='toggle-switch'
        id='toggle-switch'
        checked={isToggled}
        onChange={onToggle}
      />
      <span className='switch' />
    </label>
  );
}
