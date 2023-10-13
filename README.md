# Fullstack React Monorepo Template

## Dependencies

- python ^3.9
- [poetry](https://python-poetry.org/docs/#installation)
- [pnpm](https://pnpm.io/installation)
- [pre-commit](https://pre-commit.com/#install)

## Project Setup

```sh
git clone https://github.com/A-G-D/fullstack-react-monorepo-template.git
cd fullstack-react-monorepo-template
./init # initialization script to install python and npm dependencies

# (Optional) - run linter and tests
cd app
pnpm lint
pnpm test
```

## Package Tasks

You need to execute these commands in the `/app` directory.

- Run dev server: `pnpm lerna run --scope @monorepo/<package> dev [args]`
- Run Storybook server: `pnpm nx run @monorepo/<package>:storybook` (**Note:** Starting Storybook for `mobile` package is different - start the dev server instead with `pnpm lerna run --scope @monorepo/mobile dev` and it will serve the application with a UI toggle option for switching between the app and storybook UI.)
- For other available tasks, refer to `/app/package.json`, `/app/packages/<package>/package.json`, and `/app/packages/<package>/project.json`

## Project Directory Structure

- `/api` - DRF API app
- `/app`
  - `/packages`
    - `/mobile` - React Native app with expo go
    - `/shared` - common package shared by `mobile`, `webapp`, and `website` packages
    - `/webapp` - NextJS SPA webapp
    - `/website` - Static non-SPA frontend website, no api interaction
- `/infra` - Terraform files for AWS ECS + Fargate deployment for different environments - dev, staging, and prod

## Packages

This Repository is divided into 3 main subdirectories:

- `/api` is a python package managed by `poetry`.
- `/app` is a node package managed by `pnpm`. It is a monorepo which further contains other packages.
- `/infra` contains infrasructure code written with Terraform.

In addition, the project contains

- Lerna 3 (powered by Nx, for managing `/app` monorepo)
- ESLint code linter, using [@vercel/style-guide](https://github.com/vercel/style-guide) (for `/app` node package)
- Prettier code formatter (for `/app` node package)
- Black code formatter (for `/api` python package)
- Pre-commit hooks

### API

Package contains:

- Django 4
- Django rest framework
- Poetry virtualenv

### Shared Package

Package contains:

- React 18
- Vite rollup bundler
- Tailwind 3.3
- Storybook 7
- Vitest
- Typescript
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for Fast Refresh

### Mobile

Package contains:

- React Native app
- Expo
- Storybook 7
- Jest
- Typescript

### Webapp

Package contains:

- NextJS 13
- Tailwind 3.3
- Storybook 7
- Vitest
- Typescript 5

### Website

Package contains:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for Fast Refresh
- Prettier 3.0
- Tailwind 3.3
- Storybook 7
- Vitest
- Typescript 5

## License

This repository is released under [MIT License](./LICENSE)
