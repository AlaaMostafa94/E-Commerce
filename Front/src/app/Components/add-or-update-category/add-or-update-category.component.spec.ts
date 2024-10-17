import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateCategoryComponent } from './add-or-update-category.component';

describe('AddOrUpdateCategoryComponent', () => {
  let component: AddOrUpdateCategoryComponent;
  let fixture: ComponentFixture<AddOrUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOrUpdateCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOrUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
