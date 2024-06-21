import yaml from 'js-yaml';

const parse = (file, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(file);
    case 'yml':
      return yaml.load(file);
    default:
      throw new Error(`Format file ${file} is not correct`);
  }
};
// eslint-disable-next-line import/prefer-default-export
export { parse };
