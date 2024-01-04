const Table = ({columns, data}) => {
  return (
    <div className='overflow-x-auto bg-white px-4 py-4 rounded lg:w-9/12 lg:max-h-1/2 max-h-80vh'>
      <table className="text-left text-sm font-light min-w-full">
        <thead className="border-b font-medium">
        <tr>
          {columns.map(col => (<th key={col.title} scope="col" className="px-1 py-1 lg:px-6 lg:py-4">{col.title}</th>))}
        </tr>
        </thead>
        <tbody>
        {
          data.map(row => {
            return (
              <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100" key={row.id}>
                {columns.map(col => {
                  const RenderComponent = col.render;
                  return (
                    <td className="whitespace-nowrap px-1 py-1 lg:px-5 lg:py-3" key={`${col.field}-${row.id}`}>
                      {RenderComponent ? <RenderComponent row={row}/> : row[col.field]}
                    </td>
                  )
                })}
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Table
