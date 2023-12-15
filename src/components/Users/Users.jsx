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
      render: ({row}) => <Delete onDelete={() => onDelete(row.id)} />
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="rounded shadow-lg bg-white py-5 px-4">
              <Table
                columns={columns}
                data={users}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users;
