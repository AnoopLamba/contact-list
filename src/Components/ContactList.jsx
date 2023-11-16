import { toast } from "react-toastify";
import { useEffect } from "react";
import ContactCard from "./ContactCard";
import { useValue } from "../Context/UsersContext";
import UserService from "../services/UserService";

function ContactList() {
  let {
    users,
    setUsers,
    showUpdateContact,
    setShowUpdateContact,
    setUserToUpdate,
    setUpdateNameInput,
    setUpdateEmailInput,
  } = useValue();

  // use effect to populate the contact list at startup
  useEffect(() => {
    async function fetchUsers() {
      try {
        await UserService.getUsers().then((data) => setUsers(data));
      } catch (error) {
        console.log(error);
        toast.error("Error fetching users!");
      }
    }

    fetchUsers();
  }, []);

  // function to update user details
  const updateUser = (user) => {
    if (!showUpdateContact) {
      setShowUpdateContact(true);
    }

    // fill details
    fillDetails(user);

    // change user to update
    changeUserToUpdate(user);
  };

  // function to fill details
  const fillDetails = (user) => {
    setUpdateNameInput(user.name);
    setUpdateEmailInput(user.email);
  };

  // function to change user to update
  const changeUserToUpdate = (user) => {
    setUserToUpdate(user);
  };

  // function to delete user
  const deleteUser = async (user) => {
    try {
      await UserService.deleteUser(user);
      let updatedUsersArray = users.filter((element) => element.id !== user.id);
      setUsers(updatedUsersArray);
      toast.success("Contact deleted!");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting contact!");
    }
  };

  return (
    <div className="mt-10 p-4 w-[500px] mx-auto bg-slate-300">
      {/* Contact List */}
      <div className="contactlist w-full flex flex-col gap-4 items-center justify-center">
        {/* mapping of contact cards here */}
        {users.map((user) => (
          <ContactCard
            key={user.id}
            user={user}
            updateUser={updateUser}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
