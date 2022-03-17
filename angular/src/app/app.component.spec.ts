import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeAll(() => {
    window.onbeforeunload = () =>
      "Set this so that you don't get" +
      '"Some of your tests did a full page reload!!" error';
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: []
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
  }));

  it(`should have as title 'angular-example'`, () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-example');
  });

  it('should render title in a h1 tag', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to angular-example!'
    );
  });

  it('should do stuff', fakeAsync(() => {
    spyOn(component, 'doStuff').and.callThrough();
    const anchor = fixture.debugElement.nativeElement.querySelector('a');
    anchor.click();
    tick();
    expect(component.doStuff).toHaveBeenCalled();
  }));

  it('should do other stuff', fakeAsync(() => {
    spyOn(component, 'doOtherStuff').and.callThrough();
    const anchor =
      fixture.debugElement.nativeElement.querySelector('a#doOtherStuff');
    anchor.click();
    tick();
    expect(component.doOtherStuff).toHaveBeenCalled();
  }));
});
