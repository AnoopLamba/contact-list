import { toast } from "react-toastify";
import { useValue } from "../Context/UsersContext";
import UserService from "../services/UserService";
import { useEffect } from "react";

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

  // Disable scroll when the form is visible
  useEffect(() => {
    if (showUpdateContact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showUpdateContact]);

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
    <div className="flex items-center justify-center fixed z-10 inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="AddContactForm w-[465px] p-4 bg-slate-300 flex flex-col items-start justify-center gap-4 rounded-md shadow-2xl">
        <span className=" text-xl">Edit contact</span>
        <form
          onSubmit={updateUserDetails}
          className="flex flex-col items-start justify-center gap-3 w-full"
        >
          <input
            className="p-2 w-full rounded"
            type="text"
            value={updateNameInput}
            onChange={(e) => setUpdateNameInput(e.target.value)}
            required
          />
          <input
            className="p-2 w-full rounded"
            type="email"
            value={updateEmailInput}
            onChange={(e) => setUpdateEmailInput(e.target.value)}
            required
          />
          <div className="flex items-center justify-center gap-2">
            <button className="bg-green-400 px-2 py-1" type="submit">
              Edit Contact
            </button>
            <button
              onClick={() => setShowUpdateContact(!showUpdateContact)}
              className="bg-blue-400 px-2 py-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateContactForm;
