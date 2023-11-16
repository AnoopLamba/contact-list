import { toast } from "react-toastify";
import { useValue } from "../Context/UsersContext";
import UserService from "../services/UserService";

function UpdateContactForm() {
  const {
    users,
    setUsers,
    showUpdateContact,
    setShowUpdateContact,
    userToUpdate,
    updateNameInput,
    setUpdateNameInput,
    updateEmailInput,
    setUpdateEmailInput,
  } = useValue();

  //function to update user details
  const updateUserDetails = async (e) => {
    e.preventDefault();

    // find the user in the array and update it
    try {
      const updatedUser = {
        ...userToUpdate,
        name: updateNameInput,
        email: updateEmailInput,
      };

      // api call to update user
      await UserService.updateUser(updatedUser);

      // local array change
      let updatedUsersArray = users.map((user) =>
        user.id === userToUpdate.id ? updatedUser : user
      );

      setUsers(updatedUsersArray);
      setShowUpdateContact(false);
      toast.success("Details updated!");
    } catch (error) {
      console.log(error);
      toast.error("Error updating details!");
    }
  };

  return (
    <div className="AddContactForm w-[350px] p-4 bg-slate-300 flex flex-col items-start justify-center gap-4">
      <span>Edit contact details</span>
      <form
        onSubmit={updateUserDetails}
        className="flex flex-col items-start justify-center gap-3 w-full"
      >
        <input
          className="p-2 w-full"
          type="text"
          value={updateNameInput}
          onChange={(e) => setUpdateNameInput(e.target.value)}
          required
        />
        <input
          className="p-2 w-full"
          type="email"
          value={updateEmailInput}
          onChange={(e) => setUpdateEmailInput(e.target.value)}
          required
        />
        <div className="flex items-center justify-center gap-2">
          <button className="bg-green-400 p-1" type="submit">
            Edit Contact
          </button>
          <button
            onClick={() => setShowUpdateContact(!showUpdateContact)}
            className="bg-blue-400 p-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateContactForm;
