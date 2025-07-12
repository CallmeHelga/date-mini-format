# 📅 date-mini-format

Formats a JavaScript date into the format: `01 Jan 2025`.

Lightweight and simple date formatter with no dependencies — perfect for quick UI displays.

## Features

- Converts any `Date` or date-string to a readable format
- Fallback for invalid input
- Output format: `DD Mon YYYY` (e.g., `01 Jan 2025`)
- No external dependencies

## Installation

```bash
npm install date-mini-format

## Usage

import { formatDate } from 'date-mini-format'

- Example with date string
formatDate('2025-01-01') -> "01 Jan 2025"

- Example with Date object
formatDate(new Date()) -> "12 Jul 2025"

## Handling Invalid Input

formatDate('abc')
Output: "Invalid date"

## Test it locally

node test.js

## License

MIT © Olha Radchenko

