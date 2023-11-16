function ContactCard(props) {
  const { user, updateUser, deleteUser } = props;

  return (
    <div className="contactcard w-full bg-pink-100 p-4 flex items-center rounded border border-pink-300">
      {/* name and email */}
      <div className="flex-grow flex flex-col gap-1 items-start justify-center">
        <span className=" text-black">{user.name}</span>
        <span className=" text-gray-600">{user.email}</span>
      </div>

      {/* edit and delete button */}
      <div className=" flex gap-1 items-center justify-center">
        <button
          onClick={() => updateUser(user)}
          className="bg-green-400 px-2 py-1"
        >
          Edit
        </button>
        <button
          onClick={() => deleteUser(user)}
          className="bg-red-400 px-2 py-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
