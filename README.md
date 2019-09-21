# React-Inline-Stream

React components for recording items in an array during rendering.

## Installation

Add react-inline-stream to your project by executing `npm install react-inline-stream`.

## Usage

This package is mainly useful for side effects during server-side-rendering, e.g., while using React-DOM/Server.

Here is a basic example of usage:

```js
import { InlineStream, Chunk, Collect } from 'react-inline-stream';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';

const Test = () => (
    <InlineStream>
        <Chunk>Chunk A</Chunk>
        <Chunk>{ '\n' }</Chunk>
        <Chunk>Chunk B</Chunk>
        <Collect>{
            chunks => {
                fs.writeFileSync('./output.txt', chunks.join(''));
            }
        }</Collect>
    </InlineStream>
);

ReactDOMServer.renderToString(<Test />);
```

## License

The MIT license.