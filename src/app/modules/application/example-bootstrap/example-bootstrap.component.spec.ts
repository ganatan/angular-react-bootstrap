import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBootstrapComponent } from './example-bootstrap.component';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExampleBootstrapComponentsComponent', () => {
  let component: ExampleBootstrapComponent;
  let fixture: ComponentFixture<ExampleBootstrapComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ExampleBootstrapComponent,
      ],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
