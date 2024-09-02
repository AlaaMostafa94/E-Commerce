import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAngularMaterialComponent } from './test-angular-material.component';

describe('TestAngularMaterialComponent', () => {
  let component: TestAngularMaterialComponent;
  let fixture: ComponentFixture<TestAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAngularMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
