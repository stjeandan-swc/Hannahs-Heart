import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHcProviderComponent } from '@src/app/update-hc-provider/update-hc-provider.component';

describe('UpdateHcProviderComponent', () => {
  let component: UpdateHcProviderComponent;
  let fixture: ComponentFixture<UpdateHcProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHcProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHcProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
