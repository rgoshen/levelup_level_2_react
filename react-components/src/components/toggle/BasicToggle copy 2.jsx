import React, { useState } from 'react';

export default function BasicToggleButton({ render }) {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  return (
    <div>
      {render({
        isToggled,
        onToggle,
      })}
    </div>
  );
}
