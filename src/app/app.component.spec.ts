import { HttpClient, HttpHandler } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SearchButtonComponent } from "./search-button/search-button.component";
import { SelectOptionsComponent } from "./select-options/select-options.component";
import { TransactionsTableComponent } from "./transactions-table/transactions-table.component";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SelectOptionsComponent,
        SearchButtonComponent,
        TransactionsTableComponent
      ],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /* it(`should have 'transactionOptions'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.transactionOptions).toEqual([
      { value: "payment", viewValue: "Payment" },
      { value: "credit", viewValue: "Credit" }
    ]);
  }));

  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to transaction-renderer!"
    );
  })); */
});
