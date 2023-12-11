import { searchInstance } from '.'

const getQueries = (query: string) => {
  return searchInstance.get(`?q=${query}`)
}

export { getQueries }
