import { createContext, useContext, useState, useCallback } from 'react';

const FormModalContext = createContext(null);

export function FormModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = useCallback(() => setIsOpen(true), []);
  const closeForm = useCallback(() => setIsOpen(false), []);

  return (
    <FormModalContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const ctx = useContext(FormModalContext);
  if (!ctx) {
    throw new Error('useFormModal must be used within a FormModalProvider');
  }
  return ctx;
}
