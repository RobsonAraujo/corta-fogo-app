import React, { createContext, useContext, useState, useCallback } from 'react';

interface UIData {
  modalVisible: boolean;
  handleModal(data: boolean): void;
}

const UI = createContext<UIData>({} as UIData);

const UIProvider: React.FC = ({ children }) => {
  const [modalVisible, setModal] = useState<boolean>(false);

  const handleModal = (data: boolean) => {
    setModal(data);
  };

  return (
    <UI.Provider value={{ modalVisible, handleModal }}>{children}</UI.Provider>
  );
};

function useUI(): UIData {
  const context = useContext(UI);

  if (!context) {
    throw new Error('useUI must be used with an UIProvider');
  }

  return context;
}

export { UIProvider, useUI };
