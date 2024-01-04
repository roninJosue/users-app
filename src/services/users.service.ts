import {usersAdapter} from "../adapters/users.adapter";
import {User} from "../types/users";

export const getUsers = async (params: string):Promise<User[] | []> => {
  try {
    const response: Response = await fetch('https://randomuser.me/api/?page=0&results=50&seed=absdsc');
    const users = await response.json();
    return usersAdapter(users.results);
  } catch (error) {
    console.error(error);
    return [];
  }
}
