import axios from 'axios';

const API_URL = 'https://65a843a3219bfa371866f5bd.mockapi.io/cars';

export async function getContacts() {
  const { data } = await axios.get(`${API_URL}`);
   return data;
}