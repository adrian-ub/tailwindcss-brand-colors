import { Tree, formatFiles, updateJson, readJson } from '@nrwl/devkit';

interface Color {
  [icon: string]: string;
}

interface Schema {
  name: string;
  hex: string;
}

export default async function (host: Tree, schema: Schema) {
  const brandPath = 'brands.json';
  const brands = readJson(host, brandPath);
  const isExist = brands.filter(
    (brand: Color) => brand.title.toLowerCase() === schema.name.toLowerCase()
  );

  if (isExist.length) {
    throw new Error(`The ${schema.name} brand color is already exist`);
  }

  updateJson(host, brandPath, (value) => {
    value.push({ title: schema.name, hex: schema.hex });
    return value;
  });

  await formatFiles(host);
}
