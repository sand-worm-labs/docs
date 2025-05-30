# `ACOS`

The `ACOS` function calculates the arccosine (inverse cosine) of a numeric input and returns the result in **radians**. The input must be a float value in the range of **-1 to 1**.

---

## Syntax

```sql
ACOS(value)
```

* **`value`**: A numeric expression between `-1` and `1`. Returns `NULL` if the input is `NULL`.

---

## Examples

Assume your table is named `eth.tokens`.

### Example 1: Using `ACOS` with float values

```sql
SELECT ACOS(0.5) AS acos1, ACOS(1) AS acos2 FROM eth.tokens;
```

**Result:**

```
     acos1      |  acos2
----------------+---------
 1.0471975511966 |   0.0
```

### Example 2: Using `ACOS` with NULL values

```sql
SELECT ACOS(NULL) AS acos FROM eth.tokens;
```

**Result:**

```
  acos
--------
 (null)
```

---

## Errors

### Example 3: Using `ACOS` with non-numeric values

```sql
SELECT ACOS('string') AS acos FROM eth.tokens;
```

**Error:**

```
function acos(unknown) does not exist
```

### Example 4: Using `ACOS` with multiple arguments

```sql
SELECT ACOS(1.0, 2.0) AS acos FROM eth.tokens;
```

**Error:**

```
function acos(numeric, numeric) does not exist
```

---

Let me know if you want the same format for other trigonometric functions!
