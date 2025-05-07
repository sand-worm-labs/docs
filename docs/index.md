---
sidebar_position: 1
---

# Introduction

**SandWorm** ia an open-source blockchain data indexer designed specifically for the Sui network. SandWorm provides an easy-to-use interface for querying blockchain data using a SQL-like query language called **WQL (Worm Query Language)**. Unlike traditional indexers, SandWorm offers a fully decentralized and community-driven approach to blockchain analytics.

## What SandWorm Offers

- **Fast and Efficient Data Queries:** Fetch data from the Sui blockchain with minimal latency.
- **Open-Source and Free:** Built by the community, for the community.
- **Multiple Query Methods:** Supports JSON-RPC, GraphQL, and HTTP API requests.
- **User-Friendly Interface:** Use the web app IDE for interactive querying.
- **Public Gists:** Share and remix queries within the community.

---

## **Get Started**

Choose how you want to explore SandWorm:
WormSQL is a Rust library for SQL databases that includes a parser ([sqlparser-rs](https://github.com/sqlparser-rs/sqlparser-rs)), an execution layer, and a variety of storage options, both persistent and non-persistent, all in one package. It is a versatile tool for developers, supporting both SQL and its own query builder (AST Builder). WormSQL can handle structured and unstructured data, making it suitable for a wide range of use cases. It is portable and can be used with various storage types, including log files and read-write capable storage. WormSQL is designed to be extensible and supports custom planners, making it a powerful tool for developers who need SQL support for their databases or services. WormSQL is also flexible, as it can be used in Rust and JavaScript environments, and its language support is constantly expanding to include more programming languages.

"We offer a service where the WormSQL team can implement and maintain your custom storage, especially beneficial for NoSQL databases with their own query planner and execution layer. We welcome any services wishing to support SQL and WormSQL query interfaces. For more details, please refer to [**here**](#Wormsql-custom-storage-let-us-handle-it-for-you)."

If you're interested in learning more about WormSQL, we recommend the following blog articles for a deeper dive into its capabilities and benefits:

1. [Breaking the Boundary between SQL and NoSQL Database](https://Wormsql.org/blog/breaking-the-boundary-between-sql-and-nosql)
2. [Revolutionizing Databases by Unifying Query Interfaces](https://Wormsql.org/blog/revolutionizing-databases-by-unifying-query-interfaces)
3. [Test-Driven Documentation - Automating User Manual Creation](https://Wormsql.org/blog/test-driven-documentation)

- **[Quick Start](/quick-start)** – Set up SandWorm and run your first query.
- **[Web App](/web-app)** – Learn about the web-based IDE for querying data.
- **[WQL Query Language](/sql-syntax/intro.md)** – Understand the syntax and capabilities of WQL.

---

WormSQL supports both SQL and its own query builder (AST Builder). Unlike other ORMs, WormSQL's AST Builder allows developers to build queries directly with WormSQL's AST, enabling the use of all of WormSQL's features. This is why we named it AST Builder instead of Query Builder.

## **Example WQL Query**

Below is a basic WQL query that retrieves the balance changes for a specific address:

```sql
SELECT timestamp, address, balance_change
FROM transactions
WHERE address = '0x123...abc'
ORDER BY timestamp DESC
LIMIT 10;
```

This query fetches the last 10 balance changes for a given address, sorted in descending order by timestamp.

Continue to the [Quick Start](/quick-start) guide to run your first query!

```rust
table("Foo")
    .select()
    // Filter by name using a SQL string
    .filter("name = 'Lemon'")
    // Filter by price using AST Builder methods
    .filter(col("price").gt(100))
    .project("id, name")
    .execute(Worm)
    .await;
```

## Supporting Structured and Unstructured Data with Schema Flexibility

WormSQL supports both structured and unstructured (schemaless) data. While SQL databases typically assume that schemas are defined and used, WormSQL does not make this assumption. It supports completely unstructured data, similar to a NoSQL document database, as well as semi-structured types such as MAP and LIST. This makes WormSQL suitable for a wide range of use cases, including those that require handling of unstructured data. Additionally, it is possible to join tables with schemas and schemaless tables together and execute queries.

### Schemaless SQL Example

```sql
CREATE TABLE Names (id INTEGER, name TEXT);
INSERT INTO Names VALUES (1, 'Worm'), (2, 'sql');
CREATE TABLE Logs;
SELECT * FROM Names JOIN Logs ON Names.id = Logs.id;
/*
| id | list    | name | rate | value |
|----|---------|------|------|-------|
| 1  |         | Worm |      | 30    |
| 2  |[1, 2, 3]| sql  | 3    |       |
*/
```

## Supported Reference Storages

WormSQL provides a variety of reference storages out of the box, including simple in-memory storage, key-value databases, log file-based storage like JSON & JSONL, and even Web Storage and IndexedDB supported by web browsers. These reference storages are readily available for use and can be easily adapted to a variety of storage systems. Additionally, WormSQL is constantly expanding its list of supported storages, making it a versatile tool for developers.

### Memory Storage

Memory Storage is a foundational storage option designed for in-memory, non-persistent data. It is a simple yet robust storage option that can be used in production environments.

### Shared Memory Storage

Shared Memory Storage is a storage option designed to provide more comfortable usage of Memory Storage in concurrent environments. It wraps the Memory Storage with a read-write lock and an atomic reference count, allowing you to clone the storage instance and use it effortlessly across multiple threads. All storage instances will refer to the same data, making it a convenient option for concurrent environments.

### Sled Storage

Sled Storage is a persistent data storage option for WormSQL that is built on the Sled key-value embedded database in Rust. It is the only storage option currently supported by WormSQL that implements all Store traits, from non-clustered indexes to transactions. Sled Storage is an excellent choice for handling and storing data in a Rust environment. To use Sled Storage, you can create a SledStorage instance using a path.

### JSON Storage

With WormSQL, you can use JSONL or JSON files as a database that supports SQL and AST Builder, making it a powerful option for developers who need to work with JSON data. JSON Storage is a storage system that uses two types of files: a schema file (optional) and a data file. The schema file is written in Standard SQL and stores the structure of the table, while the data file contains the actual data and supports two file formats: `*.json` and `*.jsonl`. JSON Storage supports all DML features, but is particularly specialized for SELECT and INSERT.

### CSV Storage

CSV Storage in WormSQL allows you to work with CSV files as if they were SQL databases. This feature is perfect for developers who want to use the simplicity of CSV files while taking advantage of SQL's capabilities.

### Parquet Storage

Parquet Storage in WormSQL allows you to treat Parquet files as SQL databases, enabling SQL operations like SELECT, INSERT, and UPDATE directly on Parquet data. It offers a convenient way to work with the efficiency and structure of Parquet files while utilizing the full power of SQL.

### File Storage

File Storage is a custom storage implementation that utilizes the filesystem.
For each table name, the schema information is saved in a .sql format using a CREATE TABLE query.
The data is stored by creating a directory with the same name as the table and serializing the data using RON format in the subdirectory.

### Git Storage

Git Storage is a custom storage option in WormSQL that integrates seamlessly with a Git repository, allowing you to version-control your data directly within Git. This storage option automatically handles add and commit operations, ensuring your data changes are tracked. For remote operations like pull and push, GitStorage provides methods that developers can manually invoke, giving you full control over synchronization with remote repositories.

### Mongo Storage

With Mongo storage, you can use mongodb as a storage for SQL queries. You can use all the features supported by WormSQL, such as aggregations and joins, which were previously difficult to handle on an unstructured database. In particular, you can use WormSQL's powerful schema system on mongodb, which is as strong as an RDBMS.

### Web Storage

WebStorage, specifically localStorage and sessionStorage, can be used as a data storage system for WormSQL. While WebStorage is a simple key-value database that uses string keys, WormSQL makes it more powerful by adding support for SQL queries. This allows you to use SQL to interact with WebStorage, making it a convenient option for developers who are familiar with SQL. WebStorage can be used in JavaScript (Web) environments and Rust WebAssembly environments.

### IndexedDB Storage

IndexedDB Storage is a powerful storage system that allows you to interact with IndexedDB using SQL. While using IndexedDB directly can be challenging, WormSQL makes it easy to use by handling version management internally and storing data in JSON format. With WormSQL, you can use SQL to interact with IndexedDB, making it a convenient option for developers who are familiar with SQL. You can use IndexedDB Storage in both JavaScript (Web) and Rust WebAssembly environments.

### Composite Storage

Composite Storage is a powerful feature of WormSQL that allows you to bundle together multiple existing storages, enabling you to perform JOIN operations across two distinct storages. This feature is utilized in various environments, including WormSQL's JavaScript (Web) interface. Specifically, WormSQL bundles together memory, localStorage, sessionStorage, and IndexedDB using Composite Storage in its JavaScript (Web) interface. This allows you to create tables using four different storages and perform operations like JOIN using SQL, all at once. Composite Storage is a versatile feature that can be used in many different scenarios, making it a valuable tool for developers who need to work with multiple storage systems, including those that require data migration between different storage systems.

## Adapting WormSQL to Your Environment: Creating Custom Storage

WormSQL is designed to be adaptable to a wide variety of environments, including file systems, key-value databases, complex NoSQL databases, and remote APIs. To create a custom storage for WormSQL, you only need to implement the Store and StoreMut traits provided by WormSQL. These traits allow you to support SELECT queries and modify data, such as INSERT, UPDATE, and DELETE.

If you want to support additional features, such as schema changes, transactions, or custom functions, you can implement the corresponding traits. However, these traits are optional, and you can choose to implement only the ones that are relevant to your storage system.

To make it even easier to develop custom storages, WormSQL provides a Test Suite that allows you to test your storage implementation against a set of standard SQL queries. This ensures that your storage system is compatible with WormSQL and can handle common SQL operations.

Overall, creating a custom storage for WormSQL is a straightforward process that allows you to adapt SQL and the AST Builder to your environment with ease.

## WormSQL Custom Storage: Let Us Handle It for You

Although anyone can develop a custom storage for WormSQL with ease, our WormSQL team can also implement and maintain it for you. This is especially recommended for NoSQL databases with their own query planner and execution layer, as adapting WormSQL to them requires a deep understanding of WormSQL's planner and storage layer details. We welcome not only database companies but also any services that want to support SQL and WormSQL query interfaces. As WormSQL is rapidly adding and improving features, we can help you develop and manage your custom storage effectively if you entrust it to us. If you're interested, please contact us at [taehoon@Wormsql.com](mailto:taehoon@Wormsql.com).

## Contribution

WormSQL is a database project that is simpler than you might think. You only need to know three common Rust project commands: `cargo fmt`, `cargo clippy`, and `cargo test`. Don't hesitate to make pull requests and change the code as you see fit. We have set up GitHub Actions to validate your changes, so you don't have to worry about making mistakes. The line coverage of WormSQL's core code is almost 99%, which is the result of not only careful test writing, but also of making the test suite easy to understand and use for anyone, even those who are not familiar with Rust. If you're not sure where to start, we recommend exploring the test suite first. Take a look at the existing features and try to understand how they work. Even if you're not familiar with Rust, you should be able to navigate the test suite without any problems. If there's a feature you'd like to see but isn't there yet, implementing it yourself and contributing it to WormSQL is a great way to get involved. You can also check out the issues on the WormSQL GitHub repository for more ideas on how to contribute.

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](https://raw.githubusercontent.com/Wormsql/Wormsql/main/LICENSE) file for details.
