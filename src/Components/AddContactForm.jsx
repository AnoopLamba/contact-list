import { toast } from "react-toastify";
import { useValue } from "../Context/UsersContext";
import { v4 as uuidv4 } from "uuid";
import UserService from "../services/UserService";

function AddContactForm() {
  const { setUsers, nameInput, setNameInput, emailInput, setEmailInput } =
    useValue();

  // function to add new user
  const addNewUser = async (e) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: nameInput,
      email: emailInput,
    };

    try {
      await UserService.addUser(newUser);
      setUsers((prevState) => [newUser, ...prevState]);
      setNameInput("");
      setEmailInput("");
      toast.success("Contact created!");
    } catch (error) {
      console.log(error);
      toast.error("Error creating contact!");
    }
  };

  return (
    <div className="AddContactForm w-full px-4 py-5 bg-slate-300 flex flex-col items-start justify-center gap-4 rounded-md z-10 shadow-lg">
      <span className="text-xl">Add new contact</span>
      <form
        onSubmit={addNewUser}
        className="flex flex-col items-start justify-center gap-3 w-full"
      >
        <input
          className="p-2 w-full rounded"
          type="text"
          required
          placeholder="Name..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          className="p-2 w-full rounded"
          type="email"
          required
          placeholder="Email..."
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <div className="flex items-center justify-center gap-2">
          <button className="bg-green-400 px-2 py-1" type="submit">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContactForm;
