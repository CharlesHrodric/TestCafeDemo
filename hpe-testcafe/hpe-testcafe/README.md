# HPE TestCafe Demo

This repository demonstrates a minimal yet functional end‑to‑end test
framework built with [TestCafe](https://testcafe.io) and TypeScript.  The
test suite exercises key navigation paths through two public HPE websites
without performing any purchases or form submissions.

## Project structure

```
.
├── pages/             # Page Object classes that encapsulate page‑level logic
│   ├── PrivateCloudPage.ts
│   └── GreenLakePage.ts
├── selectors/         # Plain objects containing CSS selectors and expected text
│   ├── privateCloudSelectors.ts
│   └── greenLakeSelectors.ts
├── tests/             # Test files – one per page
│   ├── privateCloud.test.ts
│   └── greenLake.test.ts
├── package.json       # Node/NPM configuration
├── tsconfig.json      # TypeScript compiler settings
└── README.md          # Project overview (this file)
```

### Pages and selectors

The [`selectors`](selectors/) folder holds dictionaries that map logical
element names to their CSS selectors and the expected text they contain.
Keeping selectors in one place makes it easy to update them if the page
structure changes.  The [`pages`](pages/) folder defines classes that
import these dictionaries and create [TestCafe `Selector`
objects](https://testcafe.io/documentation/402631/reference/test-api/selector/selector)
with appropriate text filters.  High‑level actions such as `goToGreenLake()`
are also encapsulated in these classes.

### Writing tests

Each file in the [`tests`](tests/) directory contains a `fixture` and one
or more `test` cases.  The tests import the page objects and call their
methods to drive the browser.  This pattern keeps the test code clean and
focused on verifying behaviour rather than locating elements.

### Running the tests

To execute the test suite locally:

1. Install Node.js (v16 or later) and clone this repository.
2. Install dev dependencies:

   ```sh
   npm install
   ```

3. Run all tests using the default Chromium browser:

   ```sh
   npm test
   ```

   To run only a single page’s tests, use the dedicated scripts:

   ```sh
   npm run test:private    # Private Cloud tests
   npm run test:greenlake  # GreenLake tests
   ```

### Important note

These tests intentionally avoid interacting with any purchase or sign‑up
workflows.  They verify that navigation buttons exist and that the user can
follow them to related content, but they do not submit forms or trigger
transactions.