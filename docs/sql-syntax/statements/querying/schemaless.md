---
title: "Schemaless Data"
sidebar_position: 5
---

# Querying Schemaless Data

WormSQL is an SQL database that provides a unique feature: it allows you to work with schemaless data, similar to NoSQL databases. Please note this point in the documentation.

## Creating a Schemaless Table

To create a schemaless table, you don't need to specify columns when creating the table. For example:

```sql
CREATE TABLE Sample;
```

This creates a schemaless table. You can now insert data freely into each row, like a NoSQL database. Nested data is also supported.

## Example SQL Queries

Here are some example SQL queries that demonstrate how to use WormSQL with schemaless data:


### Selecting Data

```sql
SELECT name, dex, rare FROM Item WHERE id = 100;
SELECT name, dex, rare FROM Item;
SELECT * FROM Item;
```


### Selecting with Aliases and Joins

```sql
SELECT
    Player.id AS player_id,
    Player.name AS player_name,
    Item.obj['cost'] AS item_cost
FROM Item
JOIN Player
WHERE flag IS NOT NULL;
```

## Notable Exception Cases

Here are some example SQL queries that will raise errors, along with explanations of the issues:


### Selecting Invalid Data

- Using IN with a schemaless subquery:

  ```sql
  SELECT id FROM Item WHERE id IN (SELECT * FROM Item);
  ```
  
  Schemaless projections are not allowed for IN subqueries.

- Using a comparison with a schemaless subquery:

  ```sql
  SELECT id FROM Item WHERE id = (SELECT * FROM Item LIMIT 1);
  ```
  
  Schemaless projections are not allowed for subqueries.