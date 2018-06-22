import { HttpClient, HttpHandler } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SearchButtonComponent } from "./search-button/search-button.component";
import { SelectOptionsComponent } from "./select-options/select-options.component";
import { TransactionService } from "./transaction-service.service";
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
      providers: [HttpClient, HttpHandler, TransactionService]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
