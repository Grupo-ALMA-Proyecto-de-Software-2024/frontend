import axios from "axios";
import qs from "qs";
import {
  CarouselImageDto,
  RegionDto,
  DiskDto,
  BandDto,
  MoleculeDto,
  DataDto,
  PublicationDto,
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
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
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

  async getPublications(): Promise<PublicationDto[]> {
    const response = await client.get("/publications");
    return response.data.map((item: any) => ({
      title: item.title,
      authors: item.authors,
      fullAuthors: item.full_authors,
      journalInfo: item.journal_info,
      summary: item.summary,
      imageUrl: getFullImageUrl(item.image),
      pdfLink: item.pdf_link,
      bibtexLink: item.bibtex_link,
      dataLink: item.data_link,
      saoNasaLink: item.sao_nasa_link,
    }));
  }
}

export default new almaClient();
