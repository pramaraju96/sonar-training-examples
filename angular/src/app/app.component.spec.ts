import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync, flushMicrotasks
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeAll((): void => {
    window.onbeforeunload = (): string =>
      "Set this so that you don't get" +
      '"Some of your tests did a full page reload!!" error';
  });

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [],
      teardown: {
        destroyAfterEach: true
      }
    })
      .compileComponents()
      .then((): void => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
  }));

  afterEach((): void => {
    fixture.destroy();
    component = null;
  });

  it(`should have as title 'angular-example'`, (): void => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-example');
  });

  it('should render title in a h1 tag', (): void => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to angular-example!'
    );
  });

  it('should do stuff', fakeAsync((): void => {
    spyOn(component, 'doStuff').and.callThrough();
    const anchor = fixture.debugElement.nativeElement.querySelector('a');
    anchor.click();
    tick();
    expect(component.doStuff).toHaveBeenCalled();
  }));

  it('should do other stuff', fakeAsync((): void => {
    spyOn(component, 'doOtherStuff').and.callThrough();
    const anchor =
      fixture.debugElement.nativeElement.querySelector('a#doOtherStuff');
    anchor.click();
    tick();
    expect(component.doOtherStuff).toHaveBeenCalled();
  }));
});
