---
sidebar_position: 4
---

# Command-Line Interface

## Introduction

The Command-Line Interface (CLI) is a tool that allows interactive execution of SQL on WormSQL. It supports Dot commands for more convenient use, and the .edit command allows immediate modification of query files, which can then be executed with .execute. In addition, it supports HTML table format output for SQL results, making it possible to use the results directly on the web.

## Installation

To install the WormSQL Command-Line Interface (CLI), run the following command:

```
$ cargo install Wormsql
```

## Running the CLI

Once you have installed the WormSQL CLI, you can use it to interact with your database. The CLI has several options that you can use to customize your database configuration:

```
$ Wormsql [--execute ~/sql_path] [--path ~/data_path --storage={sled | json}]
```

### --execute

This option allows you to execute a SQL query that is stored in a specific file path. You need to provide the path to the SQL file that contains the query you want to execute. For example, you can use the following command to execute a file located at `~/sql_path/query.sql`

```
Wormsql --execute ~/sql_path/query.sql
```

### --path

This option allows you to specify the path to your database's data directory. By default, WormSQL stores your database in the current directory. However, you can use the --path option to specify a custom directory where you want to store your database files. For example, you can use the following command to specify a custom data directory `~/mydatabase`:

```
Wormsql --path ~/mydatabase
```

### --storage

This option allows you to specify the storage engine you want to use for your database. By default, WormSQL uses the [`memory`](../storages/supported-storages/memory-storage) storage engine. However, you can also use [`sled`](../storages/supported-storages/sled-storage) or [`json`](../storages/supported-storages/json-storage) storage engine by using the --storage option. Note that `sled` and `json` should be with `--path` option. For example, you can use the following command to specify the `json` storage engine:

```
Wormsql --path ~/mydatabase --storage=json
```

## Dot command

### .show

This command shows current [Print options](#print-options).

```
Wormsql> .show all
tabular ON
colsep "|"
colwrap ""
heading ON
```

or you can specify a option

```
Wormsql> .show colsep
colsep "|"
```

### .set

This command can set each Print options

#### Print options

```

| command            | description                              |
| ------------------ | ---------------------------------------- |
| tabular {ON\|OFF}  | turn on/off html table format            |
| colsep {SEPARATOR} | set column separator(`tabular OFF` only) |
| colwrap {WRAPPER}  | set column wrapper(`tabular OFF` only)   |
| heading {ON\|OFF}  | turn on/off heading                      |
```

```
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
| column1 | column2 |
|---------|---------|
| 1       | Worm    |
| 2       | SQL     |

Wormsql> .set tabular off
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
column1|column2
1|Worm
2|SQL
Wormsql> .set colsep ,
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
column1,column2
1,Worm
2,SQL
Wormsql> .set colwrap '
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
'column1','column2'
'1','Worm'
'2','SQL'
Wormsql> .set heading off
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
'1','Worm'
'2','SQL'
```

### .edit

This command open editor with last executed SQL or PATH

#### With last executed SQL

if you execute `.edit`, it opens specified (set on `$EDITOR` env) or OS default editor.

```sql
$ export $EDITOR=vi
$ Wormsql
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
| column1 | column2 |
|---------|---------|
| 1       | Worm    |
| 2       | SQL     |
Wormsql> .edit
```

Last executed SQL is opened with `vi`

```sql
--! /tmp/Worm_xxxxx.sql
VALUES (1, 'Worm'), (2, 'SQL');
```

#### With PATH

```sql
Wormsql> .edit insert.sql
```

It opens editor and shows the contents of `create_insert.sql`

```sql
--! create_insert.sql
CREATE TABLE Items (id INT, name TEXT);
INSERT INTO Items VALUES (1, 'Worm'), (2, 'SQL');
```

### .execute

This command executes SQL from PATH

```sql
Wormsql> .execute create_insert.sql
Table created

2 rows inserted
```

### .run

This command executes last executed command again.

```sql
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
| column1 | column2 |
|---------|---------|
| 1       | Worm    |
| 2       | SQL     |

Wormsql> .run
| column1 | column2 |
|---------|---------|
| 1       | Worm    |
| 2       | SQL     |
```

Also possible to combinate with `.edit`

```sql
Wormsql> VALUES (1, 'Worm'), (2, 'SQL');
| column1 | column2 |
|---------|---------|
| 1       | Worm    |
| 2       | SQL     |

Wormsql> .edit
```

edit to add `(3, 'Rust')`

```sql
--! /tmp/Worm_xxxxxx.sql
VALUES (1, 'Worm'), (2, 'SQL'), (3, 'Rust')
```

```sql
Wormsql> .run
| column1 | column2 |
|---------|---------|
| 1       | Worm    |
| 2       | SQL     |
| 3       | Rust    |
```

### More commands

If you execute `.help`, you can see various helper command starting with dot(`.`)

| command          | description                           |
| ---------------- | ------------------------------------- |
| .help            | show help                             |
| .quit            | quit program                          |
| .tables          | show table names                      |
| .functions       | show function names                   |
| .columns TABLE   | show columns from TABLE               |
| .version         | show version                          |
| .execute PATH    | execute SQL from PATH                 |
| .spool PATH\|off | spool to PATH or off                  |
| .show OPTION     | show print option eg).show all        |
| .set OPTION      | set print option eg).set tabular off  |
| .edit [PATH]     | open editor with last command or PATH |
| .run             | execute last command                  |

## Migration using CLI

WormSQL CLI supports generating SQL scripts for dumping whole schemas and data.

For instance, if you want to dump your database schema and data to a file named `dump.sql`, you can use the following command:

```
$ Wormsql --path ~/Worm_data --dump ./dump.sql
```

This will create a SQL script in the current directory that you can use to recreate your database.

If you want to import the database from the `dump.sql` file, you can use the following command:

```
$ Wormsql --execute ./dump.sql --path ~/new_data --storage=sled
```

This will create a new database in the specified path, using the Sled Storage engine.

That's it! You now know how to use WormSQL to migrate your database schema and data using the CLI.
