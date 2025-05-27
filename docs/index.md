---
sidebar_position: 1
---

# 🐛 Introduction

**SandWorm** ia an open-source blockchain data analytics SandWorm provides an easy-to-use interface for querying blockchain data using a SQL-like query language called **WQL (Worm Query Language)**. Unlike traditional indexers, SandWorm offers a fully decentralized and community-driven approach to blockchain analytics.

---

## ⚡ What Sandworm Offers

- **Fast and Efficient Data Queries:** Fetch onchain data with minimal latency.
- **Open-Source and Free:** Built by the community, for the community.
- **Multiple Query Methods:** Supports JSON-RPC, GraphQL, and HTTP API requests.
- **User-Friendly Interface:** Use the web app IDE for interactive querying.
- **Public Gists:** Share and remix queries within the community.

---

## Get Started

Choose how you want to explore SandWorm:

### Launch the IDE

Hit the web app at [**sandwormlabs.xyz**](https://www.sandwormlabs.xyz) and you're in.

### 🧑‍💻 Explore Queries

Jumpstart your flow by forking a query from [**community gists**](https://sandwormlabs.xyz).

### ✍️ Write Your First WQL Query

```sql
SELECT * FROM transactions
WHERE sender = '0xYourAddress'
ORDER BY timestamp DESC
LIMIT 10;
```

Done. You just pulled your latest 10 txns.

---

### 🧪 Sample Query (Basic Schema)

```sql
CREATE TABLE Names (id INTEGER, name TEXT);
INSERT INTO Names VALUES (1, 'Worm'), (2, 'SQL');
```

### 🐍 Sample Query (Schemaless Join)

```sql
CREATE TABLE Logs;
SELECT * FROM Names
JOIN Logs ON Names.id = Logs.id;
```

🔍 WQL smartly merges structure where possible:

| id  | list     | name | rate | value |
| --- | -------- | ---- | ---- | ----- |
| 1   |          | Worm |      | 30    |
| 2   | \[1,2,3] | SQL  | 3    |       |

Even with missing keys, WQL makes the merge work. That's schemaless SQL magic, baby.

---

---

## 📚 Learn More

- 📦 [Quick Start](/quick-start) – Deploy and run your first query.
- 🧠 [WQL Language Reference](/sql-syntax/intro.md) – Dive deep into the syntax.
- 🖥️ [Web IDE Guide](/web-app) – Tips and tricks for the querying interface.

---

## 💬 Community

- 🧑‍💻 **GitHub** – [github.com/sandworm-hq](https://github.com/sandworm-labs)
- 🌐 **Website** – [sandwormlabs.xyz](https://sandwormlabs.xyz)
- 💬 **Discord** – [Join us](#)
- 🐦 **Twitter/X** – [Follow @SandwormLabs](#)

---

## 📄 API Reference

Full API docs — endpoints, parameters, and how to plug into the WQL backend.

---

---

## 🤝 Contribute

Sandworm is open to devs, designers, docs writers, data nerds — **you name it**.

Every commit counts. Join the movement and help shape the future of onchain search.

---

```

```
