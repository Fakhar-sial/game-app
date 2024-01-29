import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3f6992c970fc4feb92dee5cd3d644774',
  },
});
