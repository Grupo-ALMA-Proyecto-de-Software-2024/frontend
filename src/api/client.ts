import axios from 'axios';
import { CarouselImageDto } from './dto';


const HOST = 'localhost';
const PORT = 8000;
const NAMESPACE = 'api';
const BASE_URL = `http://${HOST}:${PORT}/${NAMESPACE}`;

const client = axios.create({
  baseURL: BASE_URL,
});


class AlmaClient {
  async getCarouselImages(): Promise<CarouselImageDto[]> {
    const response = await client.get('/carousel');
    return response.data.map((item: any) => ({
      imageUrl: item.imageUrl,
      title: item.title,
      description: item.description,
    }));
  }
}

export default new AlmaClient();