import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemodalComponent } from './pokemodal.component';

describe('PokemodalComponent', () => {
  let component: PokemodalComponent;
  let fixture: ComponentFixture<PokemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
