import { useValue } from "./Context/UsersContext";
import ContactList from "./Components/ContactList";
import AddContactForm from "./Components/AddContactForm";
import UpdateContactForm from "./Components/UpdateContactForm";

function App() {
  const { showAddContact, setShowAddContact, showUpdateContact } = useValue();

  return (
    <div className="App flex flex-col items-center mt-8 mb-8">
      {/* Add Contact button */}
      {showAddContact ? null : (
        <button
          className="p-1 bg-blue-400"
          onClick={() => setShowAddContact(!showAddContact)}
        >
          Add Contact
        </button>
      )}

      {/* Add Contact Form */}
      {showAddContact && <AddContactForm />}

      {/* Update Contact Form */}
      {showUpdateContact && <UpdateContactForm />}

      {/* Contact List */}
      <ContactList />
    </div>
  );
}

export default App;
