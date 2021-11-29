import { routeDashboard, routePerson } from './RouteHelper';
import { mockConsole } from './TestHelper';

describe('Helper - RouteHelper', () => {
  let url: string | null;
  beforeEach(() => {
    url = null;
    mockConsole();
  });

  it('routeDashboard', () => {
    url = routeDashboard();
    expect(url).toMatchSnapshot();
  });

  it('routePerson regex', () => {
    url = routePerson(true);
    expect(url).toEqual('/person/:operation?/:uuid?');
  });

  it('routePerson', () => {
    url = routePerson(false);
    expect(url).toEqual('/person');
  });

  it('routePerson create', () => {
    url = routePerson(false, 'create');
    expect(url).toEqual('/person/create');
  });

  it('routePerson list-all', () => {
    url = routePerson(false, 'list-all');
    expect(url).toEqual('/person/list-all');
  });

  it('routePerson list uuid regex', () => {
    url = routePerson(true, 'list');
    expect(url).toEqual('/person/list/:uuid?');
  });

  it('routePerson list uuid', () => {
    url = routePerson(false, 'list', 'b89e3503-f158-4a07-adf2-de672763369c');
    expect(url).toEqual('/person/list/b89e3503-f158-4a07-adf2-de672763369c');
  });
});
