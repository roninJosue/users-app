export const ProfilePicture = ({row}) => {
  return <img className="rounded-full" src={row.image} alt={row.name}/>
}
