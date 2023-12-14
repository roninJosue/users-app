const Table = ({columns, data}) => {
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium">
      <tr>
        {columns.map(col=> (<th key={col} scope="col" className="px-6 py-4">{col}</th>))}
      </tr>
      </thead>
      <tbody>
      <tr className="border-b">
        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
        <td className="whitespace-nowrap px-6 py-4">Mark</td>
        <td className="whitespace-nowrap px-6 py-4">Otto</td>
        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
      </tr>
      <tr className="border-b">
        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
        <td className="whitespace-nowrap px-6 py-4">@fat</td>
      </tr>
      <tr className="border-b">
        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
        <td className="whitespace-nowrap px-6 py-4">Larry</td>
        <td className="whitespace-nowrap px-6 py-4">Wild</td>
        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
      </tr>
      </tbody>
    </table>
  )
}

export default Table
