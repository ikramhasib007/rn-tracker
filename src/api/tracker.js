import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://a631fea0.ngrok.io'
})

instance.interceptors.request.use(
  async (config) => {
    const userToken = await AsyncStorage.getItem('userToken');
    if(userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default instance;