import MockAdapter from "axios-mock-adapter";
import almaClient from "./client";
import { dataClient, contentManagementClient } from "./client";

describe("AlmaClient with a single filter parameter for category", () => {
  let dataMock: MockAdapter;
  let contentMock: MockAdapter;

  beforeAll(() => {
    dataMock = new MockAdapter(dataClient);
    contentMock = new MockAdapter(contentManagementClient);
  });

  afterEach(() => {
    dataMock.reset();
    contentMock.reset();
  });

  describe("getRegions", () => {
    it("fetches regions correctly", async () => {
      const mockData = { regions: [{ name: "North", disks: [] }] };
      const params = { region: ["North"] };
      dataMock.onGet("/regions", { params }).reply(200, mockData);
      const response = await almaClient.getRegions(params);
      expect(response).toEqual(mockData.regions);
    });
  });

  describe("getDisks", () => {
    it("fetches disks correctly with filter parameters", async () => {
      const mockData = {
        disks: [{ name: "Disk1", regionName: "North", bands: [] }],
      };
      const params = { region: ["North"], disk: ["Disk1"] };
      dataMock.onGet("/disks", { params }).reply(200, mockData);
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
      const params = { region: ["North"], disk: ["Disk1"], band: ["Band1"] };
      dataMock.onGet("/bands", { params }).reply(200, mockData);
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
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1"],
        molecule: ["Molecule1"],
      };
      dataMock.onGet("/molecules", { params }).reply(200, mockData);
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
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1"],
        molecule: ["Molecule1"],
        data: ["Data1"],
      };
      dataMock.onGet("/data", { params }).reply(200, mockData);
      const response = await almaClient.getData(params);
      expect(response).toEqual(mockData.data);
    });
  });

  describe("Error Handling", () => {
    it("handles network errors for getRegions", async () => {
      dataMock.onGet("/regions").networkError();
      await expect(almaClient.getRegions({})).rejects.toThrow("Network Error");
    });
  });
});

describe("AlmaClient with multiple filter parameters for category", () => {
  let dataMock: MockAdapter;
  let contentMock: MockAdapter;

  beforeAll(() => {
    dataMock = new MockAdapter(dataClient);
    contentMock = new MockAdapter(contentManagementClient);
  });

  afterEach(() => {
    dataMock.reset();
    contentMock.reset();
  });

  describe("getRegions", () => {
    it("fetches multiple regions correctly", async () => {
      const mockData = {
        regions: [
          { name: "North", disks: [] },
          { name: "South", disks: [] },
        ],
      };
      const params = { region: ["North", "South"] };
      dataMock.onGet("/regions", { params }).reply(200, mockData);
      const response = await almaClient.getRegions(params);
      expect(response).toEqual(mockData.regions);

      const params2 = { region: ["North", "East"] };
      dataMock
        .onGet("/regions", { params: params2 })
        .reply(200, { regions: [{ name: "North", disks: [] }] });
      const response2 = await almaClient.getRegions(params2);
      expect(response2).toEqual([{ name: "North", disks: [] }]);
    });
  });

  describe("getDisks", () => {
    it("fetches multiple disks correctly with filter parameters", async () => {
      const mockData = {
        disks: [
          { name: "Disk1", regionName: "North", bands: [] },
          { name: "Disk2", regionName: "North", bands: [] },
        ],
      };
      const params = { region: ["North"], disk: ["Disk1", "Disk2"] };
      dataMock.onGet("/disks", { params }).reply(200, mockData);
      const response = await almaClient.getDisks(params);
      expect(response).toEqual(mockData.disks);

      const params2 = { region: ["North"], disk: ["Disk1", "Disk3"] };
      dataMock
        .onGet("/disks", { params: params2 })
        .reply(200, {
          disks: [{ name: "Disk1", regionName: "North", bands: [] }],
        });
      const response2 = await almaClient.getDisks(params2);
      expect(response2).toEqual([
        { name: "Disk1", regionName: "North", bands: [] },
      ]);
    });
  });

  describe("getBands", () => {
    it("fetches multiple bands correctly with multiple filter parameters", async () => {
      const mockData = {
        bands: [
          {
            name: "Band1",
            diskName: "Disk1",
            regionName: "North",
            molecules: [],
          },
          {
            name: "Band2",
            diskName: "Disk1",
            regionName: "North",
            molecules: [],
          },
        ],
      };
      const params = {
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1", "Band2"],
      };
      dataMock.onGet("/bands", { params }).reply(200, mockData);
      const response = await almaClient.getBands(params);
      expect(response).toEqual(mockData.bands);

      const params2 = {
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1", "Band3"],
      };
      dataMock
        .onGet("/bands", { params: params2 })
        .reply(200, {
          bands: [
            {
              name: "Band1",
              diskName: "Disk1",
              regionName: "North",
              molecules: [],
            },
          ],
        });
      const response2 = await almaClient.getBands(params2);
      expect(response2).toEqual([
        {
          name: "Band1",
          diskName: "Disk1",
          regionName: "North",
          molecules: [],
        },
      ]);
    });
  });

  describe("getMolecules", () => {
    it("fetches multiple molecules correctly using all filter parameters", async () => {
      const mockData = {
        molecules: [
          {
            name: "Molecule1",
            bandName: "Band1",
            diskName: "Disk1",
            regionName: "North",
            data: [],
          },
          {
            name: "Molecule2",
            bandName: "Band1",
            diskName: "Disk1",
            regionName: "North",
            data: [],
          },
        ],
      };
      const params = {
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1"],
        molecule: ["Molecule1", "Molecule2"],
      };
      dataMock.onGet("/molecules", { params }).reply(200, mockData);
      const response = await almaClient.getMolecules(params);
      expect(response).toEqual(mockData.molecules);

      const params2 = {
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1"],
        molecule: ["Molecule1", "Molecule3"],
      };
      dataMock
        .onGet("/molecules", { params: params2 })
        .reply(200, {
          molecules: [
            {
              name: "Molecule1",
              bandName: "Band1",
              diskName: "Disk1",
              regionName: "North",
              data: [],
            },
          ],
        });
      const response2 = await almaClient.getMolecules(params2);
      expect(response2).toEqual([
        {
          name: "Molecule1",
          bandName: "Band1",
          diskName: "Disk1",
          regionName: "North",
          data: [],
        },
      ]);
    });
  });

  describe("getData", () => {
    it("fetches multiple data correctly with comprehensive filter parameters", async () => {
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
          {
            name: "Data2",
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
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1"],
        molecule: ["Molecule1"],
        data: ["Data1", "Data2"],
      };
      dataMock.onGet("/data", { params }).reply(200, mockData);
      const response = await almaClient.getData(params);
      expect(response).toEqual(mockData.data);

      const params2 = {
        region: ["North"],
        disk: ["Disk1"],
        band: ["Band1"],
        molecule: ["Molecule1"],
        data: ["Data1", "Data3"],
      };
      dataMock
        .onGet("/data", { params: params2 })
        .reply(200, {
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
        });
      const response2 = await almaClient.getData(params2);
      expect(response2).toEqual([
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
      ]);
    });
  });
});