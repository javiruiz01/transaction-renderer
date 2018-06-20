import { defer } from "rxjs";
import { TransactionService } from "./transaction-service.service";

describe("TransactionService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let transactionService: TransactionService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    transactionService = new TransactionService(<any>httpClientSpy);
  });

  it("should return all expected transactions (only one call)", () => {
    const expectedTransactions = [
      {
        action: "payment",
        amount: 100,
        brandId: 1060,
        card: {
          expiryMonth: "03",
          expiryYear: "2020",
          firstSixDigits: "378282",
          lastFourDigits: "0005",
          holderName: "Meredith Gerlach"
        },
        currencyCode: "USD",
        id: "7b1c2fef-a001-460b-9d9a-7a6d849b1d5d",
        trackingCode: "24c22a09-5a94-4552-83de-6128f360b906"
      },
      {
        action: "payment",
        amount: 100,
        brandId: 1020,
        card: {
          expiryMonth: "08",
          expiryYear: "2019",
          firstSixDigits: "510510",
          lastFourDigits: "5100",
          holderName: "Ellis Deckow"
        },
        currencyCode: "USD",
        id: "3d7fe7d9-0c88-42a5-997a-2bd44c8ce22d",
        trackingCode: "caf23319-85f3-4691-8d87-0e7790733990"
      },
      {
        action: "payment",
        amount: 100,
        brandId: 1010,
        card: {
          expiryMonth: "12",
          expiryYear: "2022",
          firstSixDigits: "401288",
          lastFourDigits: "1881",
          holderName: "Jack Watkins"
        },
        currencyCode: "EUR",
        id: "af8daec6-4c1c-447f-9c8c-2448381cb054",
        trackingCode: "572951d1-5b42-42e4-b7c9-6253fb592f9a"
      },
      {
        action: "credit",
        amount: 100,
        brandId: 1060,
        card: {
          expiryMonth: "03",
          expiryYear: "2020",
          firstSixDigits: "378282",
          lastFourDigits: "0005",
          holderName: "Meredith Gerlach"
        },
        currencyCode: "EUR",
        id: "cb86c56c-22d8-412a-990e-495dea9d3933",
        trackingCode: "1ba64402-df8e-4e25-bed1-d037d5c70b13"
      },
      {
        action: "credit",
        amount: 100,
        brandId: 1020,
        card: {
          expiryMonth: "08",
          expiryYear: "2019",
          firstSixDigits: "510510",
          lastFourDigits: "5100",
          holderName: "Ellis Deckow"
        },
        currencyCode: "USD",
        id: "235324a5-e588-4f04-80ea-20faaca9aaf3",
        trackingCode: "0d663276-6ddb-40c1-8bbb-4c234481444b"
      }
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedTransactions));
    transactionService.fetchAll().subscribe(transactions => {
      expect(transactions).toEqual(
        expectedTransactions,
        "expected transactions"
      );
    });
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });

  it("should return one transaction (only one call)", () => {
    const expectedTransaction = [
      {
        action: "credit",
        amount: 100,
        brandId: 1060,
        card: {
          expiryMonth: "03",
          expiryYear: "2020",
          firstSixDigits: "378282",
          lastFourDigits: "0005",
          holderName: "Meredith Gerlach"
        },
        currencyCode: "EUR",
        id: "cb86c56c-22d8-412a-990e-495dea9d3933",
        trackingCode: "1ba64402-df8e-4e25-bed1-d037d5c70b13"
      }
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedTransaction));
    transactionService.fetchOptions("credit", "EUR").subscribe(transaction => {
      expect(transaction).toEqual(expectedTransaction, "expected transaction");
    });
  });
});

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
