import { colors } from './lib/tailwindcss-brand-colors';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

// eslint-disable-next-line @typescript-eslint/no-empty-function
const tailwindBrandColors = plugin(() => {}, { theme: { extend: { colors } } });

module.exports = tailwindBrandColors;
