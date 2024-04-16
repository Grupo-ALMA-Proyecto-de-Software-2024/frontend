import axios from 'axios';
import { CarouselImageDto } from './dto';


const host = 'localhost';
const port = 8000;
const namespace = 'api';
const baseUrl = `http://${host}:${port}/${namespace}`;

const client = axios.create({
  baseURL: baseUrl,
});


function getFullImageUrl(imageUrl: string) {
  return `http://${host}:${port}/${imageUrl}`;
}


class AlmaClient {
  async getCarouselImages(): Promise<CarouselImageDto[]> {
    const response = await client.get('/carousel');
    return response.data.map((item: any) => ({
      imageUrl: getFullImageUrl(item.image),
      title: item.title,
      description: item.description,
    }));
  }
}

export default new AlmaClient();
