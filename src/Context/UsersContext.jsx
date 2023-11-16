import { createContext, useContext, useState } from "react";

// creating context
const UsersContext = createContext();

// context consumer
export function useValue() {
  return useContext(UsersContext);
}

// context provider
export default function UsersContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [showUpdateContact, setShowUpdateContact] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [updateNameInput, setUpdateNameInput] = useState("");
  const [updateEmailInput, setUpdateEmailInput] = useState("");

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        showAddContact,
        setShowAddContact,
        nameInput,
        setNameInput,
        emailInput,
        setEmailInput,
        showUpdateContact,
        setShowUpdateContact,
        userToUpdate,
        setUserToUpdate,
        updateNameInput,
        setUpdateNameInput,
        updateEmailInput,
        setUpdateEmailInput,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}
