import { HttpClient, HttpHandler } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TransactionService } from "../transaction-service.service";
import { TransactionsTableComponent } from "./transactions-table.component";

describe("TransactionsTableComponent", () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsTableComponent],
      providers: [HttpClient, HttpHandler, TransactionService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should select row selected", () => {
    expect(component.show).toBe(false, "off at first");
    component.showCollapsible("#collapsible-0");
    expect(component.show).toBe(true, "on after click");
    expect(component.selected).toBe(
      "#collapsible-0",
      "element selected is element clicked"
    );
  });
});
