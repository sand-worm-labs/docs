# 10. FAQ & Troubleshooting

Here are answers to common questions and issues when using Sandworm.

---

### Why isn’t my query working?

If you run a query and get an error message, the **WQL compiler** will try to explain what went wrong. Common causes:

- **Typos or spelling mistakes** in table or field names
- **Using a table that doesn’t exist** (check the Dataset Explorer to confirm)
- **Incorrect syntax** (e.g., missing commas, unmatched parentheses)
- **Querying a chain or table that hasn’t been indexed yet**

Always double-check:

- The table and field names (case-sensitive)
- The chain you’re targeting
- Whether you're using **Indexed** or **RPC** execution

---

### I see “table not found” or “field does not exist”

This usually means:

- You're querying a table or column that isn't available in the selected chain
- You may have selected the wrong execution mode

Fix:

- Open the **Dataset Explorer** in the side panel and browse available tables and fields for the chain you're working on
- Make sure your query is aligned with what's actually available in **that** chain's schema

---

### What’s the difference between RPC and Indexed mode?

- **RPC Mode** runs queries directly on the live chain using your (or our default) RPC endpoint.
- **Indexed Mode** runs queries on pre-processed, faster data stored in our backend.

Use **Indexed** for better performance and historical queries.
Use **RPC** if you want the most up-to-date, real-time data.

---

### My results show up, but I can’t see a chart?

Not all queries can be visualized as charts — you need structured numeric or time-series data.

Common reasons charts don’t render:

- The result is missing a proper **X and Y axis**
- There’s no numeric value to graph
- Too many nested or ungrouped results

🔧 Tip:
You can **manually select fields for X and Y axes** in the Chart view using the dropdown menus. Try simplifying your query first.

---

### Where are my saved queries?

Saved queries live in your **Dashboard**.
From there you can:

- View and re-run them
- Edit or delete them
- Export results again

---

### What happens to my custom RPC?

If you set a custom RPC in **Workspace Settings**, it stays **local to your browser**.
We **don’t store or transmit** your RPC keys — they’re saved in your local storage only.

---

### I have a feature request / bug report — where do I go?

We’re actively improving Sandworm, and feedback is always welcome.

You can:

- [Join our discussion](https://github.com/orgs/sand-worm-labs/discussions) on GitHub
- Reach out on X (Twitter) @sandwormlabs
- Reach out on Discord

---
