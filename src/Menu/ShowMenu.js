import { createContext } from "react";
import { useState } from "react";

export const ShowMenuContext = createContext();

function ShowMenu({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ShowMenuContext.Provider value={[showMenu, setShowMenu]}>
      {children}
    </ShowMenuContext.Provider>
  );
}

export default ShowMenu;
