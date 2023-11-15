# Template Design System

> 🚧 Work in progress....

Repo Template: vue, storybook

[![CI][ci-badge]][ci-url]

## Scripts

| Action     | Command              | Description                          |
| ---------- | -------------------- | ------------------------------------ |
| storybook  | `npm run storybook`  | Starts Storybook in dev mode         |
| clean      | `npm run clean`      | Clean up temp files and dist folders |
| lint       | `npm run lint`       | Run static code analysis             |
| test       | `npm run test`       | Run unit tests and exit              |
| test-watch | `npm run test-watch` | Watch for changes and re-run tests   |
| format     | `npm run format`     | Check source file formatting         |
| format-fix | `npm run format-fix` | Format source files                  |

## Structure

This repository employs a [monorepo](https://en.wikipedia.org/wiki/Monorepo) setup which hosts a number of associated packages under the `packages` directory.

## Libraries

| Library   | Reference                 |
| --------- | ------------------------- |
| vuejs     | https://vuejs.org/        |
| storybook | https://storybook.js.org/ |

## Tools

| Tool         | Reference                      |
| ------------ | ------------------------------ |
| Node.js      | https://nodejs.org/            |
| Vite         | https://vitejs.dev/            |
| Vitest       | https://vitest.dev/            |
| ESLint       | https://eslint.org/            |
| Prettier     | https://prettier.io            |
| EditorConfig | https://editorconfig.org       |
| jsdom        | https://github.com/jsdom/jsdom |

## References

| Website       | Reference                  |
| ------------- | -------------------------- |
| Can I Use     | https://caniuse.com        |
| Browserslist  | https://browsersl.ist      |
| convertacolor | https://convertacolor.com/ |
| Polyfill.io   | https://polyfill.io        |

## License

This project is released under the [MIT License](LICENSE).

[ci-badge]: https://github.com/epreston/template-design-system/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/epreston/template-design-system/actions
