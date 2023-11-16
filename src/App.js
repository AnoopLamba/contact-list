import { useValue } from "./Context/UsersContext";
import ContactList from "./Components/ContactList";
import UpdateContactForm from "./Components/UpdateContactForm";

function App() {
  const { showUpdateContact } = useValue();

  return (
    <div className={`App flex flex-col items-center mt-8 mb-8 font-mono`}>
      {/* Update Contact Form */}
      {showUpdateContact && <UpdateContactForm />}

      {/* Contact List */}
      <ContactList />
    </div>
  );
}

export default App;
