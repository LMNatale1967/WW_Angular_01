import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThirdCompComponent } from './my-third-comp.component';

describe('MyThirdCompComponent', () => {
  let component: MyThirdCompComponent;
  let fixture: ComponentFixture<MyThirdCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyThirdCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyThirdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
