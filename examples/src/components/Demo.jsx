import React from 'react';
import PlaceAManatee from '../../../src/PlaceAManatee';
import styles from './Demo.pcss';

export default class Demo extends React.Component {

  render() {
    return (
      <section className={styles.root}>

        <h1>Place a manatee</h1>

        <p>
        It's never been easier or more enjoyable to place a manatee.
        </p>

        <h2>Bitmap manatees</h2>

        <h3>Default</h3>

        <PlaceAManatee />

        <h3>Height and width</h3>

        <PlaceAManatee width={500} height={100} />

        <h3>Specific specimen (self-lusser)</h3>

        <PlaceAManatee specimen={10} width={400} height={400} />

        <h2>Vector manatees</h2>

        <h3>Default</h3>

        <PlaceAManatee type="vector" />

        <h3>Specific specimen (Tenhukas & friends)</h3>

        <PlaceAManatee type="vector" specimen={10} width={400} height={400} />

      </section>

    );
  }

}
