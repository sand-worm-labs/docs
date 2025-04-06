---
sidebar_position: 2
---

# JavaScript (Web Browser)

WormSQL is a SQL database engine written in Rust, compiled to WebAssembly, and can be used in JavaScript. This guide will walk you through the process of installing and using the WormSQL package.

## Installation

Installing WormSQL is as simple as running the following command:

```bash
npm install Wormsql
```

In your `package.json`, it will be added to the dependencies list as follows:

```json
{
  "dependencies": {
    "Wormsql": "latest"
  }
}
```

## Usage

WormSQL can be used in different environments. Here we will look at how to use it with JavaScript modules, Webpack, and Rollup.

### JavaScript Modules

In an HTML file, you can use WormSQL by importing it with a script tag:

```html
<script type="module">
  import { Wormsql } from 'Wormsql';

  async function main() {
    const db = await Wormsql();
    await db.loadIndexedDB();

    const result = await db.query(`
      CREATE TABLE Foo (id INTEGER) ENGINE = memory;
      INSERT INTO Foo (1, 'Worm'), (2, 'sql');
      SELECT * FROM Foo;
    `);

    console.log(result);
   }
</script>
```

### Webpack

For Webpack, the usage is almost the same as JavaScript modules:

```javascript
import { Wormsql } from 'Wormsql';

async function run() {
  const db = await Wormsql();
  await db.loadIndexedDB();

  const result = await db.query(`
    CREATE TABLE Foo (id INTEGER) ENGINE = memory;
    INSERT INTO Foo VALUES (1, 'Worm'), (2, 'sql');
    SELECT * FROM Foo;
  `);

  console.log(result);
}
```

### Rollup

For Rollup, you need to adjust your import statement and add some configurations to your `rollup.config.js` file.

First, modify your import statement as follows:

```javascript
import { Wormsql } from 'Wormsql/Wormsql.rollup';
// ...
```

Second, add the following configurations to your `rollup.config.js` file:

```javascript
import resolve from '@rollup/plugin-node-resolve';
import { wasm } from '@rollup/plugin-wasm';

export default {
  input: 'main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve({ browser: true }),
    wasm({ targetEnv: 'auto-inline' }),
  ],
};
```

These configurations allow Rollup to correctly handle WebAssembly modules and resolve dependencies for browsers.

Don't forget to run the `rollup` command to bundle your JavaScript files:

```bash
rollup -c
```

Now, you can use WormSQL in your Rollup project as you would in any other JavaScript module.

## Supported Storage Engines

WormSQL supports four storage types: In-Memory Storage, Local Storage, Session Storage, and IndexedDB. 

You can specify the storage type when creating a table using the `ENGINE` clause:

- For In-Memory Storage: `ENGINE = memory`
- For Local Storage: `ENGINE = localStorage`
- For Session Storage: `ENGINE = sessionStorage`
- For IndexedDB: `ENGINE = indexedDB`

For example:

```sql
CREATE TABLE Foo (id INTEGER) ENGINE = memory;
```