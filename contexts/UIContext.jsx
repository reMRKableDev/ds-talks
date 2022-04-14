import { createContext, useContext, useReducer, useMemo } from 'react';

const openMenu = 'OPEN_MENU';
const closeMenu = 'CLOSE_MENU';

const initialState = {
  displayMenu: false,
};

const UIContext = createContext(initialState);

const uiReducer = (state, action) => {
  switch (action.type) {
    case openMenu:
      return {
        ...state,
        displayMenu: true,
      };

    case closeMenu:
      return {
        ...state,
        displayMenu: false,
      };

    default:
      break;
  }
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const UIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const handleOpenMenu = () => dispatch({ type: openMenu });
  const handleCloseMenu = () => dispatch({ type: closeMenu });
  const handleToggleMenu = () =>
    state.displayMenu ? handleCloseMenu() : handleOpenMenu();

  const contextValue = useMemo(() => ({
    ...state,
    handleOpenMenu,
    handleCloseMenu,
    handleToggleMenu,
  }));

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};
