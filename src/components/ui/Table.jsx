const Table = ({columns, data}) => {
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium">
      <tr>
        {columns.map(col => (<th key={col.title} scope="col" className="px-6 py-4">{col.title}</th>))}
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
                  <td className="whitespace-nowrap px-6 py-4" key={`${col.field}-${row.id}`}>
                    {RenderComponent ? <RenderComponent row={row} /> : row[col.field]}
                  </td>
                )
              })}
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

export default Table
