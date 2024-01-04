export type UserFetched = {
  name: {
    first: string,
    last: string
  },
  picture: {
    thumbnail: string
  },
  location: {
    country: string
  },
  email: string,
  id: string
}

export type User = {
  id: string,
  name: string,
  image: string,
  email: string,
  country: string
}
