import Table from "../ui/Table";
import {ProfilePicture} from "./ProfilePicture";
import {Delete} from "./Delete";
import useUser from "./useUser";
import {Columns, User} from "../../types/users";

const Users = () => {
  const {users, onDelete} = useUser();

  const columns:Columns[] = [
    {
      title: 'Imagen',
      field: 'image',
      render: ProfilePicture
    },
    {
      title: 'Nombre',
      field: 'name'
    },
    {
      title: 'Email',
      field: 'email'
    },
    {
      title: 'Pais',
      field: 'country'
    },
    {
      title: '',
      render: ({row}: { row: User }) => <Delete onDelete={() => onDelete(row.id)}/>
    }
  ];

  return (

    <div className="flex justify-center items-start py-5 px-5">
      <Table
        columns={columns}
        data={users}
      />
    </div>
  )
}

export default Users;
