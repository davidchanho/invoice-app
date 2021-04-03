import React, { useState } from "react";
import { RoundedIcon } from "../_shared/icons";

function ToggleDarkMode() {
  const [isDark, setDark] = useState(false);

  const onToggleDark = () => {
    setDark(!isDark);
  };

  return (
    <RoundedIcon
      onClick={onToggleDark}
      src={isDark ? "assets/icon-sun.svg" : "assets/icon-moon.svg"}
      alt="toggle dark menu"
      width={20}
      height={20}
    />
  );
}

export default ToggleDarkMode;
