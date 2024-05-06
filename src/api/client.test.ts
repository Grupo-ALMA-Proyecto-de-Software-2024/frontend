import MockAdapter from "axios-mock-adapter";
import { client } from "./client";
import almaClient from "./client";

const mock = new MockAdapter(client);

describe("AlmaClient", () => {
  afterEach(() => {
    mock.reset();
  });

  describe("getRegions", () => {
    it("fetches regions correctly", async () => {
      const mockData = { regions: [{ name: "North", disks: [] }] };
      mock.onGet("/regions").reply(200, mockData);
      const response = await almaClient.getRegions({});
      expect(response).toEqual(mockData.regions);
    });
  });

  describe("getDisks", () => {
    it("fetches disks correctly", async () => {
      const mockData = {
        disks: [{ name: "Disk1", regionName: "North", bands: [] }],
      };
      mock.onGet("/disks").reply(200, mockData);
      const response = await almaClient.getDisks({});
      expect(response).toEqual(mockData.disks);
    });
  });

  describe("getBands", () => {
    it("fetches bands correctly", async () => {
      const mockData = {
        bands: [
          {
            name: "Band1",
            diskName: "Disk1",
            regionName: "North",
            molecules: [],
          },
        ],
      };
      mock.onGet("/bands").reply(200, mockData);
      const response = await almaClient.getBands({});
      expect(response).toEqual(mockData.bands);
    });
  });

  describe("getMolecules", () => {
    it("fetches molecules correctly", async () => {
      const mockData = {
        molecules: [
          {
            name: "Molecule1",
            bandName: "Band1",
            diskName: "Disk1",
            regionName: "North",
            data: [],
          },
        ],
      };
      mock.onGet("/molecules").reply(200, mockData);
      const response = await almaClient.getMolecules({});
      expect(response).toEqual(mockData.molecules);
    });
  });

  describe("getData", () => {
    it("fetches data correctly", async () => {
      const mockData = {
        data: [
          {
            name: "Data1",
            creationDate: "2024-05-06T23:04:56.782Z",
            moleculeName: "Molecule1",
            bandName: "Band1",
            diskName: "Disk1",
            regionName: "North",
            file: "file_path",
            isViewable: true,
          },
        ],
      };
      mock.onGet("/data").reply(200, mockData);
      const response = await almaClient.getData({});
      expect(response).toEqual(mockData.data);
    });
  });

  describe("Error Handling", () => {
    it("handles network errors for getRegions", async () => {
      mock.onGet("/regions").networkError();
      await expect(almaClient.getRegions({})).rejects.toThrow("Network Error");
    });
  });
});
