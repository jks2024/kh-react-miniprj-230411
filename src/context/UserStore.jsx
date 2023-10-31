import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [color, setColor] = useState("orange");

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
