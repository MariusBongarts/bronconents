import { LitElement } from 'lit-element';
import { LandingPage } from './landing.page';
import './app.component';

describe('app-root', () => {
  let element: LandingPage;


  beforeEach(async () => {
    localStorage.preferredLanguage = 'german';
    element = document.createElement('marius-root') as LandingPage;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => { element.remove(); });

  it('should render marius-root', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    const title = element.shadowRoot!.querySelector('h1') as HTMLElement;
    expect(title.textContent).toBe('LitElement Starter');
  });


});
