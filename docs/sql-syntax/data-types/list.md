---
sidebar_position: 10
---

# LIST

The `LIST` data type in WormSQL is used to store ordered collections of elements, similar to JSON arrays. The elements can be any valid data supported by WormSQL, such as numbers, strings, booleans, `null`, `MAP`, or even other nested `LIST` values. Although the input is provided in a JSON array format for convenience, it can store more than just JSON data.


To access the elements in a `LIST`, you can use the index operator `[]`:

```sql
SELECT id, items[1] AS second FROM ListType;
```

This query would return the following result:

```
 id | second
----|--------
  1 | 2
  2 | world
  3 | 10
```

You can also access nested elements using the index operator, like this:

```sql
SELECT id, items[3][0] AS hundred FROM ListType2;
```

This query would return the following result:

```
 id | hundred
----|--------
  1 | null
  2 | 100
  3 | null
```

If a specified index is out of range or the element is not a `MAP` or `LIST`, the result will be `null`.