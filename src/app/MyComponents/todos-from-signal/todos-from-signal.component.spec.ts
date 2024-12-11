import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFromSignalComponent } from './todos-from-signal.component';

describe('TodosFromSignalComponent', () => {
  let component: TodosFromSignalComponent;
  let fixture: ComponentFixture<TodosFromSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosFromSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosFromSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
