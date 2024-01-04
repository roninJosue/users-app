import Table from "../ui/Table.jsx";
import {ProfilePicture} from "./ProfilePicture.jsx";
import {Delete} from "./Delete.jsx";
import useUser from "./useUser.js";

const Users = () => {
  const {users, onDelete} = useUser();

  const columns = [
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
      render: ({row}) => <Delete onDelete={() => onDelete(row.id)}/>
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
