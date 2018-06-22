import { HttpClient, HttpHandler } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TransactionService } from "../transaction-service.service";
import { SearchButtonComponent } from "./search-button.component";

describe("SearchButtonComponent", () => {
  let component: SearchButtonComponent;
  let fixture: ComponentFixture<SearchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchButtonComponent],
      providers: [
        HttpClient,
        HttpHandler,
        TransactionService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show spinner when loading", () => {
    expect(component.loading).toBe(false, "off at first");
    component.toggleLoading();
    expect(component.loading).toBe(true, "loading while searching");
  });

  it("should return 1 transaction", () => {
    component.currency = "EUR";
    component.action = "payment";
    component.queryTransactions.subscribe(res => {
      expect(res.length).toEqual(1, "there's only one transaction");
    });
    component.search();
  });
});
