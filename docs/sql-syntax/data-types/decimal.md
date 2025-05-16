---
sidebar_position: 5
---

# DECIMAL

The `DECIMAL` data type in SQL is used to store exact numeric values, making it suitable for financial calculations and other operations requiring a high level of precision without round-off errors. In WormSQL, the DECIMAL data type is implemented using a pure Rust library, providing a 96-bit integer number, a scaling factor for specifying the decimal fraction, and a 1-bit sign.

Here's an example of how to create a table, insert data, and query data using the `DECIMAL` data type:


## Querying data from the DECIMAL column

To query data from the DECIMAL column, use standard SQL syntax:

```sql
SELECT description, value FROM financial_data;
```

This query will return the following result:

```
description | value
------------|---------
Revenue     | 15000.25
Expense     | 12000.75
Profit      |  2999.50
```

## Truncating trailing zeros

In WormSQL's DECIMAL implementation, trailing zeros are preserved in the binary representation and may be exposed when converting the value to a string. To truncate trailing zeros, you can use the `normalize` or `round_dp` functions in Rust.

## Conclusion

The `DECIMAL` data type is crucial for handling precise numeric values in SQL databases, especially in financial calculations and other applications requiring high accuracy without round-off errors. By understanding the basics of the DECIMAL data type and its use cases, you can effectively use it in your database designs and operations, ensuring that your applications can manage exact numeric values with precision.