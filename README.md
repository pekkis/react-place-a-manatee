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
import React from 'react';
import PlaceAManatee from '@dr-kobros/react-place-a-manatee';

React.render(
  <PlaceAManatee width={640} height={480} type="bitmap" />,
  mountNode
);
```

## Available Props

prop      | type                      | default value
----------|---------------------------|---------------
`type`    | `string` (bitmap, vector) | `bitmap`
`width`   | `number` (in pixels)      | `640`
`height`  | `number` (in pixels)      | `480`
`specimen`| `number` (optional)       |

## Examples / develop

* fork / clone
* npm install
* cd examples
* npm run start
* http://localhost:8765
