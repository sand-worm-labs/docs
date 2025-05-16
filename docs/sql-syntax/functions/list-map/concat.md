# CONCAT

The `CONCAT` function is used to concatenate two or more list values together.

## Syntax

```sql
CONCAT(list_value1, list_value2, ...)
```

**Parameters:**

- `list_value1`, `list_value2`, ...: List values that will be concatenated.

## Examples

Consider the following table `ListTypeConcat`:

### Example 1: CONCAT two lists

```sql
SELECT CONCAT(items, items2) AS myconcat FROM ListTypeConcat;
```

**Result:**

| myconcat                            |
|-------------------------------------|
| [1, 2, 3, "one", "two", "three"]    |