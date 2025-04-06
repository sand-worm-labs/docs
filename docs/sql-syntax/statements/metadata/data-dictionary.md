---
sidebar_position: 2
---

# Data Dictionary

In WormSQL, there are predefined tables, also known as Data Dictionary tables, which store metadata about the database objects like tables, columns, and indexes. These tables can be queried like any other table in the database, and they provide useful information about the database schema.

The Data Dictionary tables in WormSQL include:

1. `Worm_TABLES`
2. `Worm_TABLE_COLUMNS`
3. `Worm_INDEXES`

Please note that the columns provided in these tables are the default columns. Storage implementations may provide additional information in these tables.

## Worm_TABLES

The `Worm_TABLES` table contains a list of all tables in the database.

Columns:
- `TABLE_NAME`: The name of the table.

## Worm_TABLE_COLUMNS

The `Worm_TABLE_COLUMNS` table contains information about the columns in each table.

Columns:
- `TABLE_NAME`: The name of the table that the column belongs to.
- `COLUMN_NAME`: The name of the column.
- `COLUMN_ID`: The column's unique identifier.

## Worm_INDEXES

The `Worm_INDEXES` table contains information about the indexes defined in the database.

Columns:
- `TABLE_NAME`: The name of the table that the index belongs to.
- `INDEX_NAME`: The name of the index.
- `ORDER`: The order in which the index is sorted (e.g., "ASC", "DESC", or "BOTH").
- `EXPRESSION`: The expression used for the indexed column (e.g., "id" or "id + 2").
- `UNIQUENESS`: A boolean value indicating whether the index enforces uniqueness.

## Examples

To query the `Worm_TABLES` table and get a list of all tables in the database:

```sql
SELECT * FROM Worm_TABLES;
```

To query the `Worm_TABLE_COLUMNS` table and get information about the columns in each table:

```sql
SELECT * FROM Worm_TABLE_COLUMNS;
```

To query the `Worm_INDEXES` table and get information about the indexes defined in the database:

```sql
SELECT * FROM Worm_INDEXES;
```
