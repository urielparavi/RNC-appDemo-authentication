import axios from 'axios';

const API_KEY = 'AIzaSyCnbJ1uUffP-buVpxWN48by3h8ZuerE6I0';

const createUser = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
