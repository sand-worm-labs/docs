# IFNULL

The `IFNULL` function is used to return the first non-null value among the provided expressions. It takes two arguments and checks if the first argument is NULL. If the first argument is NULL, it returns the second argument; otherwise, it returns the first argument.

## Syntax

```sql
IFNULL(expression1, expression2)
```

## Examples

Consider the following `SingleItem` table:

Example 1: Using `IFNULL` with integer values:

```sql
SELECT IFNULL(id, 1) AS myid, IFNULL(int8, 2) AS int8, IFNULL(dec, 3)
FROM SingleItem WHERE id IS NOT NULL;
```

Example 2: Using `IFNULL` with date and text values:

```sql
SELECT IFNULL(dt, '2000-01-01') AS mydate, IFNULL(mystring, 'blah') AS name
FROM SingleItem WHERE id IS NOT NULL;
```

Example 3: Using `IFNULL` with boolean and float values:

```sql
SELECT IFNULL(mybool, 'YES') AS mybool, IFNULL(myfloat, 'NO') AS myfloat
FROM SingleItem WHERE id IS NOT NULL;
```

Example 4: Using `IFNULL` with time and timestamp values:

```sql
SELECT IFNULL(mytime, 'YES') AS mybool, IFNULL(mytimestamp, 'NO') AS myfloat
FROM SingleItem WHERE id IS NOT NULL;
```