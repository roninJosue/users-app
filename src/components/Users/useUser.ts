import {useRecoilState} from "recoil";
import {userState} from "../../store/state";
import {useEffect} from "react";
import {getUsers} from "../../services/users.service";
import {User} from "../../types/users";

const useUser = () => {
  const [users, setUsers] = useRecoilState<User[]>(userState);

  const onDelete = (id: string) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers: User[] = await getUsers('');
      setUsers(fetchedUsers)
    }

    fetchUsers();
  }, []);

  return {users, onDelete}
}

export default useUser;
