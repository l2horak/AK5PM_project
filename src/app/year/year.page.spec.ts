import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YearPage } from './year.page';

describe('YearPage', () => {
  let component: YearPage;
  let fixture: ComponentFixture<YearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
