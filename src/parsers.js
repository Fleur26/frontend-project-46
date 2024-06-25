import yaml from 'js-yaml';

const parse = (file, format) => {
  const parsers = {
    json: JSON.parse,
    yml: yaml.load,
  };

  if (parsers[format]) {
    return parsers[format](file);
  }

  throw Error(`unknow type ${format}`);
};

export default parse;
