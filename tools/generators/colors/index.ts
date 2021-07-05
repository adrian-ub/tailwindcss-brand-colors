import {
  Tree,
  formatFiles,
  readJson,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';

export default async function (host: Tree, schema: any) {
  const json = readJson(host, 'brands.json');
  let brandColors = convertArrayToObject(json, 'title', 'hex');
  const templatePath = joinPathFragments(__dirname, 'files');
  const targetPath = joinPathFragments(
    'packages/tailwindcss-brand-colors/src/lib'
  );
  const substitutions = { brandColors, tmpl: '' };

  generateFiles(host, templatePath, targetPath, substitutions);

  await formatFiles(host);
}

interface Color {
  [icon: string]: string;
}

function convertArrayToObject(array: [], key: string, data: string): Color {
  const initialValue = {};
  return array.reduce((obj, item) => {
    const title = titleToSlug(item[key]);
    return {
      ...obj,
      [title]: item[data],
    };
  }, initialValue);
}

function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/\./g, 'dot')
    .replace(/&/g, 'and')
    .replace(/đ/g, 'd')
    .replace(/ħ/g, 'h')
    .replace(/ı/g, 'i')
    .replace(/ĸ/g, 'k')
    .replace(/ŀ/g, 'l')
    .replace(/ł/g, 'l')
    .replace(/ß/g, 'ss')
    .replace(/ŧ/g, 't')
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, '');
}
