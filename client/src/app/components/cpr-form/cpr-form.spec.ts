import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprForm } from './cpr-form';

describe('CprForm', () => {
  let component: CprForm;
  let fixture: ComponentFixture<CprForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CprForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CprForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
