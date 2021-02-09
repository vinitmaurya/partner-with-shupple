import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWithShuppleComponent } from './partner-with-shupple.component';

describe('PartnerWithShuppleComponent', () => {
  let component: PartnerWithShuppleComponent;
  let fixture: ComponentFixture<PartnerWithShuppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerWithShuppleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerWithShuppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
