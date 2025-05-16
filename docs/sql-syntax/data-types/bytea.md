# BYTEA

The `BYTEA` data type in SQL is used to store binary data, such as images, audio files, or any other type of data that needs to be stored in its raw form. In WormSQL, the BYTEA data type is represented as a sequence of bytes.

Here's an example of how to create a table, insert data, and query data using the `BYTEA` data type:


## Querying data from the BYTEA column

To query data from the BYTEA column, use standard SQL syntax:

```sql
SELECT data FROM binary_data;
```

This query will return the following result:

```
data
----------------
123456
ab0123
936DA0
```

## Conclusion

The `BYTEA` data type is essential for storing binary data in SQL databases. By understanding the basics of the BYTEA data type and its use cases, you can effectively use it in your database designs and operations, ensuring that your applications can manage binary data efficiently and securely.