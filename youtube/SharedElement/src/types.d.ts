export type BookType = {
  price: number
  id: string
  title: string
  subtitle: string
  authors: string
  image: string
  url: string
}

export type AppStackParams = {
  HomeScreen: undefined
  DetailsScreen: {
    item: BookType
  }
}
