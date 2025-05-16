---
sidebar_position: 6
---

# DATE

In WormSQL, the `DATE` data type is used to store date values in the format 'YYYY-MM-DD'. Note that WormSQL currently does not support timezones.

## Querying data from a table with DATE columns

To query data from a table with `DATE` columns, use the `SELECT` statement:

```sql
SELECT id, date1, date2 FROM DateLog;
```

## Filtering data using DATE columns

You can use various comparison operators like `>`, `<`, `<=`, `>=`, and `=` to filter data based on `DATE` columns:

```sql
SELECT * FROM DateLog WHERE date1 > date2;

SELECT * FROM DateLog WHERE date1 <= date2;

SELECT * FROM DateLog WHERE date1 = DATE '2020-06-11';

SELECT * FROM DateLog WHERE date2 < '2000-01-01';

SELECT * FROM DateLog WHERE '1999-01-03' < DATE '2000-01-01';
```

## Performing date arithmetic

You can perform arithmetic operations on `DATE` columns using `INTERVAL` and various date arithmetic operators:

```sql
SELECT
    id,
    date1 - date2 AS date_sub,
    date1 - INTERVAL '1' DAY AS sub,
    date2 + INTERVAL '1' MONTH AS add
FROM DateLog;
```

## Conclusion

In summary, the `DATE` data type in WormSQL allows you to store and manipulate date values in your database. You can create tables with `DATE` columns, insert and query data, filter data based on date comparisons, and perform date arithmetic using various operators and intervals. Always remember to use valid date formats when inserting data into `DATE` columns to avoid errors.