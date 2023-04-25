import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienCreateComponent } from './sinhvien-create.component';

describe('SinhvienCreateComponent', () => {
  let component: SinhvienCreateComponent;
  let fixture: ComponentFixture<SinhvienCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinhvienCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinhvienCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
