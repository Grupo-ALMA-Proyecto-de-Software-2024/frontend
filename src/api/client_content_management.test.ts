import MockAdapter from "axios-mock-adapter";
import almaClient from "./client";
import { contentManagementClient } from "./client";
import { NewsType } from "./dto";

describe("AlmaClient Content Management Methods", () => {
  let contentMock: MockAdapter;

  beforeAll(() => {
    contentMock = new MockAdapter(contentManagementClient);
  });

  afterEach(() => {
    contentMock.reset();
  });

  describe("getCarouselImages", () => {
    it("fetches carousel images correctly", async () => {
      const mockData = { "carousel_images": [
        {
          image: "image1.jpg",
          title: "Image 1",
          description: "Description 1",
        },
        {
          image: "image2.jpg",
          title: "Image 2",
          description: "Description 2",
        },
      ]};
      contentMock.onGet("/carousel").reply(200, mockData);
      const response = await almaClient.getCarouselImages();
      expect(response).toEqual([
        {
          imageUrl: "http://localhost:8000/image1.jpg",
          title: "Image 1",
          description: "Description 1",
        },
        {
          imageUrl: "http://localhost:8000/image2.jpg",
          title: "Image 2",
          description: "Description 2",
        },
      ]);
    });

    it("handles network errors for getCarouselImages", async () => {
      contentMock.onGet("/carousel").networkError();
      await expect(almaClient.getCarouselImages()).rejects.toThrow("Network Error");
    });
  });

  describe("getPublications", () => {
    it("fetches publications correctly", async () => {
      const mockData = { "publications": [
        {
          title: "Publication 1",
          authors: "Author 1",
          full_authors: "Author 1, Author 2",
          journal_info: "Journal Info 1",
          summary: "Summary 1",
          image: "image1.jpg",
          pdf_link: "pdf1.pdf",
          bibtex_link: "bibtex1.bib",
          data_link: "data1.dat",
          sao_nasa_link: "sao_nasa1",
        },
        {
          title: "Publication 2",
          authors: "Author 2",
          full_authors: "Author 3, Author 4",
          journal_info: "Journal Info 2",
          summary: "Summary 2",
          image: "image2.jpg",
          pdf_link: "pdf2.pdf",
          bibtex_link: "bibtex2.bib",
          data_link: "data2.dat",
          sao_nasa_link: "sao_nasa2",
        },
      ]};
      contentMock.onGet("/publications").reply(200, mockData);
      const response = await almaClient.getPublications();
      expect(response).toEqual([
        {
          title: "Publication 1",
          authors: "Author 1",
          fullAuthors: "Author 1, Author 2",
          journalInfo: "Journal Info 1",
          summary: "Summary 1",
          imageUrl: "http://localhost:8000/image1.jpg",
          pdfLink: "pdf1.pdf",
          bibtexLink: "bibtex1.bib",
          dataLink: "data1.dat",
          saoNasaLink: "sao_nasa1",
        },
        {
          title: "Publication 2",
          authors: "Author 2",
          fullAuthors: "Author 3, Author 4",
          journalInfo: "Journal Info 2",
          summary: "Summary 2",
          imageUrl: "http://localhost:8000/image2.jpg",
          pdfLink: "pdf2.pdf",
          bibtexLink: "bibtex2.bib",
          dataLink: "data2.dat",
          saoNasaLink: "sao_nasa2",
        },
      ]);
    });

    it("handles network errors for getPublications", async () => {
      contentMock.onGet("/publications").networkError();
      await expect(almaClient.getPublications()).rejects.toThrow("Network Error");
    });
  });

  describe("getPressNews", () => {
    it("fetches press news correctly", async () => {
      const mockData = { "press_news": [
        {
          content: "Press News 1",
          news_type: "OP",
          creation_date: "2024-05-06T23:04:56.782Z",
        },
        {
          content: "Press News 2",
          news_type: "AN",
          creation_date: "2024-05-07T23:04:56.782Z",
        },
      ]};
      contentMock.onGet("/press-news").reply(200, mockData);
      const response = await almaClient.getPressNews();
      expect(response).toEqual([
        {
          content: "Press News 1",
          newsType: NewsType.OFFICIAL_PRESS,
          creationDate: "2024-05-06T23:04:56.782Z",
        },
        {
          content: "Press News 2",
          newsType: NewsType.AGEPRO_IN_NEWS,
          creationDate: "2024-05-07T23:04:56.782Z",
        },
      ]);
    });

    it("handles network errors for getPressNews", async () => {
      contentMock.onGet("/press-news").networkError();
      await expect(almaClient.getPressNews()).rejects.toThrow("Network Error");
    });
  });
});
