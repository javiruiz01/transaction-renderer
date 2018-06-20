import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsTableComponent } from './transactions-table.component';


describe('TransactionsTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select row selected', () => {
    const transactionTable = new TransactionsTableComponent();
    expect(transactionTable.show).toBe(false, 'off at first');
    transactionTable.showCollapsible('#collapsible-0');
    expect(transactionTable.show).toBe(true, 'on after click');
    expect(transactionTable.selected).toBe('#collapsible-0', 'element selected is element clicked');
  });
});
