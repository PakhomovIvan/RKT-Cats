import axios from 'axios'

export const getCats = async (): Promise<string> => {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search')
  return res.data[0].url
}
