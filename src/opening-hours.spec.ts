import OpeningHours from './opening-hours';

describe ('OpeningHours', () => {
    it("Test getOpeningHours Wochentag offen", () => {
        const example = new OpeningHours()
        const result = example.getOpeningHours(new Date(2020,8, 17, 8, 38, 0, 0));
        expect(result).toEqual(   [
            { open: 1600322400000, close: 1600326000000 },
            { open: 1600342200000, close: 1600360200000 } 
          ])
    }),
    it("Test getOpeningHours Wochentag offen", () => {
        const example = new OpeningHours()
        const result = example.getOpeningHours(new Date(2020,8, 16, 15, 38, 0, 0));
        expect(result).toEqual(        [
            { open: 1600236000000, close: 1600239600000 },
            { open: 1600255800000, close: 1600273800000 }
          ]);
    }),
    it("Test Wochentag offen", () => {
        const example = new OpeningHours()
        const result = example.isOpen(new Date(2020,8, 17, 15, 38, 0, 0));
        expect(result).toBeTruthy();
    }),
    it("Test Wochentag geschlossen", () => {
        const example = new OpeningHours()
        const result = example.isOpen(new Date(2020, 8, 17, 20, 38, 0, 0));
        expect(result).toBeFalsy();
    }),
    it("Test Specialday 1 offen", () => {
        const example = new OpeningHours()
        const result = example.isOpen(new Date(2020, 11, 24, 13, 10, 0, 0));
        expect(result).toBeTruthy();
    }),
    it("Test Specialday 1 geschlossen", () => {
        const example = new OpeningHours()
        const result = example.isOpen(new Date(2020, 11, 24, 5, 17, 0, 0));
        expect(result).toBeFalsy();
    }),
    it("Test Specialday 2 (immer geschlossen)", () => {
        const example = new OpeningHours()
        const result = example.isOpen(new Date(2020, 11, 25, 12, 30, 0, 0));
        expect(result).toBeFalsy();
    }),
    it("Test getInformation offen", () => {
        const example = new OpeningHours()
        const result = example.getInformation(new Date(2020, 8, 17, 15, 38, 0, 0));
        expect(result).toEqual("The store is currently open.");
    }),
    it("Test getInformation geschlossen Vormittag", () => {
        const example = new OpeningHours()
        const result = example.getInformation(new Date(2020, 8, 17, 5, 38, 0, 0));
        expect(result).toEqual("The store is open again on 2020-9-17 8:00:00");
    }),
    it("Test getInformation geschlossen Mittag", () => {
        const example = new OpeningHours()
        const result = example.getInformation(new Date(2020, 8, 17, 12, 0, 0, 0));
        expect(result).toEqual("The store is open again on 2020-9-17 13:30:00");
    }),
    it("Test getInformation geschlossen Nach Feierabend", () => {
        const example = new OpeningHours()
        const result = example.getInformation(new Date(2020, 8, 17, 22, 30, 0, 0));
        expect(result).toEqual("The store is open again on 2020-9-18 8:00:00");
    }),
    it("Test getInformation geschlossen vor 24.", () => {
        const example = new OpeningHours()
        const result = example.getInformation(new Date(2020, 11, 23, 22, 30, 0, 0));
        expect(result).toEqual("The store is open again on 2020-12-24 9:00:00");
    }),
    it("Test getInformation geschlossen vor 25.", () => {
        const example = new OpeningHours()
        const result = example.getInformation(new Date(2020, 11, 24, 17, 0, 0, 0));
        expect(result).toEqual("The store is open again on 2020-12-26 9:00:00");
    })
}); 