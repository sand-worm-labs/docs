# Workspace

The **Workspace** is where you write, run, and manage your WQL queries. It’s the core of the Sandworm experience — like your terminal, notebook, and dashboard all in one.

---

### 🧾 Editor Modes

When entering the Workspace, you can start in one of two ways:

- **Blank Editor**

  - Launches a fresh, empty editor window where you can write your own query from scratch.

- **Template Mode**

  - Choose from a set of pre-built queries. Ideal for learning WQL or getting a quick result without starting cold.
  - You can open templates in a **new tab** for easy editing and saving.

---

### Running Queries

Once you've written a query, click **Run** to execute it using one of two modes:

- 🟢 **RPC Mode (Live)**

  - Executes your query using a live connection to the blockchain.
  - Perfect for fetching real-time state, recent events, or latest wallet activity.
  - Slightly slower depending on chain response.

- ⚡ **Indexed Mode**

  - Executes against Sandworm’s pre-indexed data for fast, optimized performance.
  - Best for historical queries, larger datasets, and less latency.

You can toggle between RPC and Indexed mode depending on your use case.

---

### Result Views

Query results are displayed instantly below the editor, and you can switch between different visual formats:

- **Table (default)** – classic structured view for inspecting rows/columns
- **Chart** – visualize data as bar, pie, or line graphs
- **JSON** – for raw data inspection
- **Counter** – shows a single numeric value (e.g., count, sum, etc.)

---

### Saving & Exporting

Once you're happy with your query:

- **Save** it to your personal Dashboard for future use
- **Export** the results in multiple formats:

  - `CSV`
  - `PDF`
  - `Parquet`
  - `Raw JSON`

- **Share** the query via link — others can view or fork it straight from their browser

> Pro tip: Forking is how queries evolve. Remix, improve, and share it back.
