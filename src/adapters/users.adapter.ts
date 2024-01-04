import {v4 as uuidv4} from "uuid";
import {User, UserFetched} from "../types/users";


export const usersAdapter = (users: UserFetched[] = []): User[] => {
  return users.map((user: UserFetched) => {
    return {
      id: uuidv4(),
      name: `${user.name.first} ${user.name.last}`,
      image: user.picture.thumbnail,
      email: user.email,
      country: user.location.country
    }
  })
}
