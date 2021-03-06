// tested
import fixtures from './../__fixtures__/index';

// dependencies
import service from './../__fixtures__/service';

describe('fixtures - no mock', () => {
  let testSpecificMocks;

  beforeEach(() => {
    testSpecificMocks = {};
  });

  it('static - function used as prop', () => {
    expect(fixtures.awesomeObj).toMatchSnapshot();
  });

  it('dynamic - function used as prop', () => {
    testSpecificMocks.obj = {
      ann: function () {/*impl*/},
      arr: () => {/*impl*/},
      fn: function x() {/*impl*/},
    };

    expect(fixtures.awesomeFn(testSpecificMocks.obj)).toMatchSnapshot();
  });
});

