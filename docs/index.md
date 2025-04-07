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

- **[Quick Start](/docs/quick-start)** – Set up SandWorm and run your first query.
- **[Web App](/docs/web-app)** – Learn about the web-based IDE for querying data.
- **[CLI](/docs/cli)** – Use SandWorm from the command line for advanced automation.
- **[WQL Query Language](/docs/wql-query)** – Understand the syntax and capabilities of WQL.

---

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

Continue to the [Quick Start](/docs/quick-start) guide to run your first query!
