import { clientFree } from '.'

const getNews = () => {
  return clientFree.get('/news')
}

const getNewsById = (id: string) => {
  return clientFree.get(`/news/${id}`)
}

export { getNews, getNewsById }
