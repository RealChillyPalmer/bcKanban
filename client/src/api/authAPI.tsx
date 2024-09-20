import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {

  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    } ,
    body: JSON.stringify(userInfo)
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(`Error: ${errData.message}`);
  }
  const data = await response.json();

  return data;
} catch (err) {
  console.log('User Error: ', err);
  return Promise.reject('User Info Not Found');
}
}



export { login };
