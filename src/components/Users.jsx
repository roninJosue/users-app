import Table from "./ui/Table.jsx";

const Users = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="rounded shadow-lg bg-white py-5 px-4">
              <Table
                columns={['Imagen', 'Nombre Completo', 'Email', 'País', 'Actions']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users;
