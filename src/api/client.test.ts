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
      const params = { region: "North" };
      mock.onGet("/regions", { params }).reply(200, mockData);
      const response = await almaClient.getRegions(params);
      expect(response).toEqual(mockData.regions);
    });
  });

  describe("getDisks", () => {
    it("fetches disks correctly with filter parameters", async () => {
      const mockData = {
        disks: [{ name: "Disk1", regionName: "North", bands: [] }],
      };
      const params = { region: "North", disk: "Disk1" };
      mock.onGet("/disks", { params }).reply(200, mockData);
      const response = await almaClient.getDisks(params);
      expect(response).toEqual(mockData.disks);
    });
  });

  describe("getBands", () => {
    it("fetches bands correctly with multiple filter parameters", async () => {
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
      const params = { region: "North", disk: "Disk1", band: "Band1" };
      mock.onGet("/bands", { params }).reply(200, mockData);
      const response = await almaClient.getBands(params);
      expect(response).toEqual(mockData.bands);
    });
  });

  describe("getMolecules", () => {
    it("fetches molecules correctly using all filter parameters", async () => {
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
      const params = {
        region: "North",
        disk: "Disk1",
        band: "Band1",
        molecule: "Molecule1",
      };
      mock.onGet("/molecules", { params }).reply(200, mockData);
      const response = await almaClient.getMolecules(params);
      expect(response).toEqual(mockData.molecules);
    });
  });

  describe("getData", () => {
    it("fetches data correctly with comprehensive filter parameters", async () => {
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
      const params = {
        region: "North",
        disk: "Disk1",
        band: "Band1",
        molecule: "Molecule1",
        data: "Data1",
      };
      mock.onGet("/data", { params }).reply(200, mockData);
      const response = await almaClient.getData(params);
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
