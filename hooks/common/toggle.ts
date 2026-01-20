import { useState } from "react";

export function useToggle(defaultValue?: boolean) {
  const [toggle, setToggle] = useState<boolean>(defaultValue ?? false);

  const handleToggle = () => setToggle(!toggle);
  const handleSetToggle = (value: boolean) => setToggle(value);

  return { toggle, handleToggle, handleSetToggle };
}
