import axios from "axios";
import {
  CarouselImageDto,
  RegionDto,
  DiskDto,
  BandDto,
  MoleculeDto,
  DataDto,
} from "./dto";
import {
  GetRegionsParams,
  GetDisksParams,
  GetBandsParams,
  GetMoleculesParams,
  GetDataParams,
} from "./filterParams";

const host = "localhost";
const port = 8000;
const namespace = "content-management";
const baseUrl = `http://${host}:${port}/${namespace}`;

export const client = axios.create({
  baseURL: baseUrl,
});

function getFullImageUrl(imageUrl: string) {
  return `http://${host}:${port}/${imageUrl}`;
}

class almaClient {
  async getCarouselImages(): Promise<CarouselImageDto[]> {
    const response = await client.get("/carousel");
    return response.data.map((item: any) => ({
      imageUrl: getFullImageUrl(item.image),
      title: item.title,
      description: item.description,
    }));
  }

  async getRegions(params?: GetRegionsParams): Promise<RegionDto[]> {
    const response = await client.get("/regions", { params });
    return response.data.regions;
  }

  async getDisks(params?: GetDisksParams): Promise<DiskDto[]> {
    const response = await client.get("/disks", { params });
    return response.data.disks;
  }

  async getBands(params?: GetBandsParams): Promise<BandDto[]> {
    const response = await client.get("/bands", { params });
    return response.data.bands;
  }

  async getMolecules(params?: GetMoleculesParams): Promise<MoleculeDto[]> {
    const response = await client.get("/molecules", { params });
    return response.data.molecules;
  }

  async getData(params?: GetDataParams): Promise<DataDto[]> {
    const response = await client.get("/data", { params });
    return response.data.data;
  }
}

export default new almaClient();
