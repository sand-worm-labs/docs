---
sidebar_position: 1
---

# Rust

To install and use WormSQL in your Rust project, you'll first need to add it as a dependency from crates.io. You can do this by adding the following lines to your `Cargo.toml` file:

```toml
[dependencies]
Wormsql = "0.15"
```

By default, all available storage features are included with WormSQL. Here's a list of the available features:

- `Wormsql_sled_storage` - Storage based on the persistent key-value database called sled
- `Wormsql_memory_storage` - Simple in-memory storage
- `Wormsql-shared-memory-storage` - A wrapper around memory-storage for easy use in multi-threaded environments
- `Wormsql-json-storage` - Storage that allows you to analyze and modify JSON or JSONL files using SQL
- `Wormsql-composite-storage` - A storage feature that enables joining and processing data from multiple storage types simultaneously
- `Wormsql-web-storage` - Storage supporting localStorage and sessionStorage, available only in web assembly builds
- `Wormsql-idb-storage` - IndexedDB-based storage, available only in web assembly builds

If you don't need all the default storage features, you can disable them and select only the ones you require. To do this, update your `Cargo.toml` file with the following lines:

```toml
[dependencies.Wormsql]
version = "0.15"
default-features = false
features = ["Wormsql_memory_storage", "Wormsql-json-storage"]
```

This configuration will disable the default storage features and only include the `Wormsql_memory_storage` and `Wormsql-json-storage` features in your project.
