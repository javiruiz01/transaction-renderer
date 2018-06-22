import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AuthInterceptor } from "./auth.interceptor";
import { TransactionService } from "./transaction-service.service";

describe("AuthInterceptor", () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;
  let url: string =
    "https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TransactionService,
        { provide: HTTP_INTERCEPTORS, useClas: AuthInterceptor, multi: true }
      ]
    });
    service = TestBed.get(TransactionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  //   it("should add an Authorization header", () => {
  //     expect(service.url).toEqual(url, 'same url');
  //     service.fetchAll().subscribe(res => {
  //       expect(res).toBeTruthy();
  //     });

  //     const httpRequest = httpMock.expectOne(url);
  //     expect(httpRequest.request.headers.has("Authorization"));
  //   });
});
