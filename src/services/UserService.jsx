const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserService = {
  getUsers: async () => {
    let response = await fetch(API_URL);
    let data = await response.json();
    return data;
  },

  addUser: async (user) => {
    let response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  },

  updateUser: async (user) => {
    let response = await fetch(`${API_URL}/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  },

  deleteUser: async (user) => {
    let response = await fetch(`${API_URL}/${user.id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    return data;
  },
};

export default UserService;
