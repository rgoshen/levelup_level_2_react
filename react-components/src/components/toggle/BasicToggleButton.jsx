import React, { useState } from 'react';

export default function BasicToggleButton(props) {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  return (
    <div>
      {isToggled && props.children}
      <button onClick={onToggle}>Show/Hide</button>
    </div>
  );
}
