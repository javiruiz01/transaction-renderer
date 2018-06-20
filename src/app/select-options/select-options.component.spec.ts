import { HttpClient, HttpHandler } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectOptionsComponent } from './select-options.component';


describe('SelectOptionsComponent', () => {
  let component: SelectOptionsComponent;
  let fixture: ComponentFixture<SelectOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionsComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle selection correctly', () => {
    const comp = new SelectOptionsComponent(new ElementRef(this));
    expect(comp.showContent).toBe(false, 'off at first');
    comp.handleClick('');
    expect(comp.showContent).toBe(true, 'on after click');
    comp.handleSelection({'value': 'usd', 'viewValue': 'USD'});
    expect(comp.showContent).toBe(false, 'off after choosing option');
    expect(comp.selectedOption).toBe('USD');
  });

  it('should emit selected option', () => {
    const comp = new SelectOptionsComponent(new ElementRef(this));
    const answer = 'usd';
    comp.selected.subscribe(selected => expect(selected).toBe(answer));
    comp.handleSelection({'value': 'usd', 'viewValue': 'USD'});
  });
});
