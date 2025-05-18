# Dataset Explorer

The **Dataset Explorer** is the side panel in the Workspace that lets you browse available datasets across supported chains. It's your map to what's queryable — no guessing, no guessing field names, no flipping through docs.

---

### Chains & Multi-Chain Support

The explorer is organized by **chain**. Each supported chain appears in a collapsible menu.

Clicking a chain will reveal its available datasets, grouped into:

- **Raw Tables** — direct, unprocessed blockchain data (e.g., transactions, events, blocks)
- **Project Tables** — structured data specific to protocols (e.g., token swaps, staking events)
- **Decoded Tables** — cleaned, human-readable tables built for analysis (e.g., daily volumes, unique wallets, active users)

> More chains and datasets will be added over time as we expand indexing support.

---

### Table Structure

Each table is made up of **fields** (aka columns) that you can reference in your WQL queries.

When you click a table, you'll see:

- A **list of fields**
- Their **data types** (e.g., string, number, timestamp)
- A quick **description** (where available)

These fields are directly usable in your queries — no need to guess what’s available.

---

### 🧠 Using Fields in Queries

Once you find a table and field you want, just plug it into your WQL query.

#### Example:

```sql
SELECT
  sender,
  amount
FROM transactions
ON sui_mainnet
WHERE amount > 1000000
LIMIT 50
```

> Need to filter by date? Just look for timestamp fields (like `block_time`, `created_at`) inside the table schema.

---

### Workflow Tip

1. Open the Dataset Explorer
2. Browse a table
3. Click it to view fields
4. Start building your query using real field names — **no trial and error**
