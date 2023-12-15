import {v4 as uuidv4} from "uuid";

export const usersAdapter = (users = []) => {
  return users.map(user => {
    return {
      id: uuidv4(),
      name: `${user.name.first} ${user.name.last}`,
      image: user.picture.thumbnail,
      email: user.email,
      country: user.location.country
    }
  })
}
