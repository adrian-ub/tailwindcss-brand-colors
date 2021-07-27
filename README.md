<h3 align="center">
TailwindCSS Brand Colors
</h3>

<p align="center">
  Tailwind plugin for adding brands colors.
</p>

---

## Install

```sh
npm install @ublabs/tailwindcss-brand-colors
```

or

```sh
yarn add @ublabs/tailwindcss-brand-colors
```

Add the plugin to your tailwind.config.js file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    //  for all list
    require('@ublabs/tailwindcss-brand-colors'),
    // select the brands
    require('@ublabs/tailwindcss-brand-colors')(['angular', 'tailwindcss']),
    // ...
  ],
};
```

[See the list of all brand colors available here](https://tailwindcss-brand-colors.pages.dev/)

## How to add a new brand color?

- Fork/Clone Repository

  ```sh
  git clone https://github.com/YOUR-USERNAME/tailwindcss-brand-colors
  ```

- Install Dependencies

  ```sh
  yarn install
  ```

- Select Color

  Ex: `#111827`

- Set Brand Color

  ```sh
  yarn nx workspace-schematic add-brand --name=<brand-name> --hex=#111827
  ```

## Credits

- [Adrián UB](https://github.com/adrian-ub)
- [All Contributors](../../contributors)

Inspired by [Simple Icons](https://github.com/simple-icons/simple-icons).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
