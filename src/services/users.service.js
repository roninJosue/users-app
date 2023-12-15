import {usersAdapter} from "../adapters/users.adapter.js";

export const getUsers = async (params) => {
  try{
    const response = await fetch('https://randomuser.me/api/?page=0&results=100&seed=absdsc');
    const users = await response.json();
    return usersAdapter(users.results);
  }catch (error){
    console.error(error)
  }
}
