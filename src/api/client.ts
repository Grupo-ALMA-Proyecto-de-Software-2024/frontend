import axios from "axios";
import qs from "qs";
import {
  CarouselImageDto,
  PublicationDto,
  PressNewsDto,
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

// Determine if we're in a browser environment or server environment
const isBrowser = typeof window !== "undefined";

// For development and debugging
const getApiBaseUrl = () => {
  if (isBrowser) {
    // En el navegador, usa la variable de entorno o localhost
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  }
  // En SSR o Docker
  return process.env.NEXT_PUBLIC_API_URL || "http://backend:8000";
};

const baseUrl = getApiBaseUrl();
console.log("API Base URL:", baseUrl);

export const dataClient = axios.create({
  baseURL: `${baseUrl}/api`,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
});

export const contentManagementClient = axios.create({
  baseURL: `${baseUrl}/content-management`,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
});

function getFullImageUrl(imageUrl: string) {
  const sanitizedImageUrl = imageUrl.replace(/^\/+/, "");
  return `${baseUrl}/${sanitizedImageUrl}`;
}

class almaClient {
  async getCarouselImages(): Promise<CarouselImageDto[]> {
    const response = await contentManagementClient.get("/carousel/");
    return response.data.carousel_images.map((item: any) => ({
      imageUrl: getFullImageUrl(item.image),
      title: item.title,
      description: item.description,
    }));
  }

  async getPublications(): Promise<PublicationDto[]> {
    const response = await contentManagementClient.get("/publications/");
    return response.data.publications.map((item: any) => ({
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

  async getPressNews(): Promise<PressNewsDto[]> {
    const response = await contentManagementClient.get("/press-news/");
    return response.data.press_news.map((item: any) => ({
      content: item.content,
      newsType: item.news_type,
      creationDate: item.creation_date,
    }));
  }

  async getRegions(params?: GetRegionsParams): Promise<RegionDto[]> {
    const response = await dataClient.get("/regions/", { params });
    return response.data.regions;
  }

  async getDisks(params?: GetDisksParams): Promise<DiskDto[]> {
    const response = await dataClient.get("/disks/", { params });
    return response.data.disks;
  }

  async getBands(params?: GetBandsParams): Promise<BandDto[]> {
    const response = await dataClient.get("/bands/", { params });
    return response.data.bands;
  }

  async getMolecules(params?: GetMoleculesParams): Promise<MoleculeDto[]> {
    const response = await dataClient.get("/molecules/", { params });
    return response.data.molecules;
  }

  async getData(params?: GetDataParams): Promise<DataDto[]> {
    const response = await dataClient.get("/data/", { params });
    return response.data.data;
  }

  async generateDownloadScript(dataItems: DataDto[]): Promise<string> {
    const response = await dataClient.post("/generate-download-script/", {
      links: dataItems.map((item) => item.filepath),
    });
    return response.data.script;
  }

  async generateDownloadScriptFromString(
    dataItems: Set<string>
  ): Promise<string> {
    const stringArray = Array.from(dataItems);
    console.log(stringArray);
    const use_https = isBrowser && window.location.protocol === "https:";
    const response = await dataClient.post("/generate-script/", {
      links: stringArray.map((item) => item.split("--").pop()),
      use_https: use_https,
    });
    return response.data.script_url;
  }
}

export default new almaClient();
