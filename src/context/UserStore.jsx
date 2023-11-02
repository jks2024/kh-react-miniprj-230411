import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [color, setColor] = useState(
    localStorage.getItem("bgcolor") || "orange"
  );

  useEffect(() => {
    localStorage.setItem("bgcolor", color);
  }, [color]);

  return (
    <UserContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserStore;
