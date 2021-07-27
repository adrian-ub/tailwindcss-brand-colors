import { colors } from './lib/tailwindcss-brand-colors';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

function getColors(brands: string[]) {
  const brandColors = {};
  for (const brand of brands) {
    brandColors[brand] = colors[brand] || brand;
  }
  return brandColors;
}

function tailwindBrandColors(brands: string[]) {
  const brandColors = brands && brands.length > 0 ? getColors(brands) : colors;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return plugin(() => {}, { theme: { extend: { colors: brandColors } } });
}

module.exports = (brands = []) => {
  return tailwindBrandColors(brands);
};
