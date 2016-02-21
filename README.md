# react-place-a-manatee

A react component for Place-a-manatee, the almighty manatee
placeholder service. F**k the kitten placeholders, long live
the manatee!

## Installation

```sh
npm install --save @dr-kobros/react-place-a-manatee
```

## Usage

```js
var React = require('react');
var PlaceAManatee = require('@dr-kobros/react-place-a-manatee')

React.render(
  <PlaceAManatee />,
  mountNode
);
```

## Available Props

prop      | type                 | default value
----------|----------------------|--------------
`value`   | `string`             |
`size`    | `number`             | `128`
`bgColor` | `string` (CSS color) | `"#FFFFFF"`
`fgColor` | `string` (CSS color) | `"#000000"`
`level`   | `string` (`'L' 'M' 'Q' 'H'`)            | `'L'`
