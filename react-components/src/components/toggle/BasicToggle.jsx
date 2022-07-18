import { useState } from 'react';

export default function BasicToggle({ children }) {
  const [isToggled, setToggled] = useState(false);
  const onToggle = () => setToggled(!isToggled);
  return children({
    isToggled,
    onToggle,
  });
}
