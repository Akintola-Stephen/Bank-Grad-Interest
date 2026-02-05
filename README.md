# `README.md` — Daily Interest Accrual Service

# Daily Interest Accrual Service

A **precision-safe daily interest calculation service** built with **Node.js, TypeScript, Sequelize, and Postgres**.

Designed for **financial-grade accuracy**, it handles:

* **Daily interest calculation at 27.5% per annum**
* **Integer-based math** to avoid floating-point errors
* **Leap years and fractional cents**
* **Ledger-style accrual** for full auditability

---

## Core Concepts

1. **Precision-first math**

   * All money is stored in **cents** (or the smallest currency unit).
   * Daily interest is calculated using **integer math**, ensuring no rounding errors accumulate.

2. **Ledger-based accrual**

   * Interest is stored as immutable daily ledger entries.
   * Balances are computed by summing the ledger, **no direct balance mutation**.

3. **Calendar-aware interest**

   * Leap years (366 days) are automatically accounted for.
   * Fractional cents are **always rounded down**, following banking best practices.

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create a `.env` file at the project root with your database configuration:

* `DB_NAME` – Postgres database name
* `DB_USER` – Postgres username
* `DB_PASSWORD` – Postgres password
* `DB_HOST` – Host (usually `localhost`)
* `DB_PORT` – Port (usually `5432`)
* `PORT` – API server port

### 3. Set Up Database

Ensure your Postgres database exists. Example:

```bash
createdb interest_db
```

Sequelize will automatically create tables on first run (`sequelize.sync()`).

### 4. Run the Service

**Development mode (hot reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm run build
npm start
```

### 5. Run Tests

```bash
NODE_ENV=test npm test
```

Tests cover:

* Daily interest calculation accuracy
* Leap year handling
* Fractional cent rounding
* Coverage report generation

---

## Using the Service

### Daily Interest Accrual

**Function:** Accrue daily interest for a principal amount.

**Inputs:**

* `principal`: Amount in cents (smallest currency unit)
* `date`: Date for which interest should be calculated

**Example Request (JSON-style):**

```json
{
  "principal": 100000,
  "date": "2026-02-05"
}
```

**Response:**

* Daily interest in cents
* Ledger entry is recorded in the database

---

## Notes

* Interest is **recomputable** at any time using ledger entries.
* **Precision-safe integer math** ensures reliable calculations.
* **Leap years** are handled automatically.
* **Fractional cents** are rounded down to prevent over-crediting.

---

## Workflow

1. Seed principal amounts in the database.
2. Run the **daily accrual job** (`accrueDailyInterest`) for each principal.
3. Ledger entries are stored with date, principal, and interest.
4. Compute balances by summing ledger entries.

---

## Why This Approach

* Guarantees **exact interest calculations** without floating-point errors.
* Fully **auditable ledger** allows verification of all daily accruals.
* Handles **leap years** and fractional cents correctly.
* Scalable and ready for **production-grade financial applications**.
