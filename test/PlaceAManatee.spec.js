import React from 'react';
import PlaceAManatee from '../src/PlaceAManatee';
import { createRenderer } from 'react-addons-test-utils';
import { expect } from 'chai';

describe('PlaceAManatee', function() {
  it('should render a sane bitmap default', function () {
    const renderer = createRenderer();
    renderer.render(
      <PlaceAManatee />
    );

    const output = renderer.getRenderOutput();
    expect(output.type).to.equal('img');
    expect(output.props.src).to.equal('https://place.manatee.lc/640/480.jpg');
  });

  it('should render a sane vector default', function () {
    const renderer = createRenderer();
    renderer.render(
      <PlaceAManatee type="vector" />
    );

    const output = renderer.getRenderOutput();
    expect(output.type).to.equal('img');
    expect(output.props.src).to.equal('https://place.manatee.lc/640/480.svg');
  });

  it('respects props', function () {
    const renderer = createRenderer();
    renderer.render(
      <PlaceAManatee type="bitmap" width={401} height={399} specimen={5} />
    );

    const output = renderer.getRenderOutput();
    expect(output.type).to.equal('img');
    expect(output.props.src).to.equal('https://place.manatee.lc/5/401/399.jpg');
  });

});
