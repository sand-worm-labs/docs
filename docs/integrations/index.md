# Plugins & Integrations (Experimental)

Sandworm supports experimental integration options for developers and protocols who want to extend or embed WQL (Worm Query Language) outside the core platform.

---

## Plugin Access (Natural Language Interface)

You can integrate Sandworm’s natural language plugin into various environments to allow users to query onchain data using plain language. This interface translates prompts to WQL, executes them, and returns results.

**Supported Environments:**

- Discord (Bot)
- Telegram
- Twitter
- Web app/chat widgets

### Example Use Cases

- Protocols enabling community access to onchain stats via Discord bot
- Meme coin sites showing live token metrics with one-line prompts
- Faster access to easy-to-medium complexity onchain analysis across supported chains and apps

> Example: "Who made the most transactions on our contract today?"  
> Example: "Which wallets interacted with Curve’s CRV-ETH pool in the 12 hours before the exploit?"  
> 🧠 _During the Curve exploit on Ethereum, researchers could instantly surface wallets interacting with vulnerable pools before and after the event._

---

## Indexer SDK (Data Ingestion & Extension)

For advanced use cases, the Sandworm Indexer SDK allows protocols and builders to plug custom contract data directly into Sandworm’s backend. Once registered, this data becomes queryable via WQL.

Ideal for:

- Protocols adding custom table schemas
- Projects enriching Sandworm with proprietary data
- Enabling deep, structured analysis across chains and contracts

---

## Developer Options

- [GitHub Repo (Plugin + SDK)](https://github.com/sand-worm-labs/sandworm_indexer_sdk) ← full code + examples
- Advanced users can also use the [CLI tool](https://github.com/sand-worm-labs/wql) or build custom UIs on top of the Sandworm engine.

Integration instructions will be added soon.
