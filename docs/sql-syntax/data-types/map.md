---
sidebar_position: 11
---

# MAP

The `MAP` data type in WormSQL is used to store nested key-value pairs, similar to JSON objects. The object keys must be strings, and the values can be any valid data supported by WormSQL, such as numbers, strings, booleans, `null`, or even other nested `MAP` values. Although the input is provided in a JSON object format for convenience, it can store more than just JSON data.

To access the nested values in a `MAP`, you can use the index operator `[]`:

```sql
SELECT id, nested['a']['foo'] AS foo FROM MapType;
```

This query would return the following result:

```
 id | foo
----|-----
  1 | null
  2 | ok
  3 | null
```

You can also perform arithmetic operations on nested values, like this:

```sql
SELECT id, nested['a']['b']['c']['d'] * 2 AS good2 FROM MapType;
```

This query would return the following result:

```
 id | good2
----|------
  1 | null
  2 | null
  3 | 20
```

If a specified key does not exist in the `MAP`, the result will be `null`. 