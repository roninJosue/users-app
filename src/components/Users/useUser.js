import {useRecoilState} from "recoil";
import {userState} from "../../store/state.js";
import {useEffect} from "react";
import {getUsers} from "../../services/users.service.js";

const useUser = () => {
  const [users, setUsers] = useRecoilState(userState);

  const onDelete = id => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }

  useEffect(() => {
    async function users() {
      const users = await getUsers('');
      setUsers(users)
    }

    users();
  }, []);

  return {users, onDelete}
}

export default useUser;
