# blurple-web

> The source for projectblurple.com\
> Stats and information about Project Blurple

This is a static site built with Vue & Nuxt.
There is only a single page for this Nuxt site, but we still use components to keep the content nicely split up.
For styling, we are using SCSS and pulling in only the bits of the Bulma framework that we need, as well as some custom styling.

## Development

Install the dependencies for the project using the lockfile:
```bash
$ npm ci
```

Run a version of the site with hot reload enabled on localhost:3000:
```bash
$ npm run dev
```

Lint the project code before committing:
```bash
$ npm run lint
```

Automatically fix some linting errors:
```bash
$ npm run lint:fix
```

Analyze the size of the project bundle:
```bash
$ npm run analyze
```

## Production

Install the dependencies for the project using the lockfile:
```bash
$ npm ci
```

Generate a static version of the site in `dist`:
```bash
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## License

This project is licensed under the [GNU GPLv3 license](LICENSE).

We 💖 Open source
