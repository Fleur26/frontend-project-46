import makeStylish from './stylish.js';
import getPlain from './plain.js';

export default function makeFormat(tree, formatName = 'stylish') {
  const formmatters = {
    stylish: makeStylish,
    plain: getPlain,
    json: JSON.stringify,
  };

  if (formmatters[formatName]) {
    return formmatters[formatName](tree);
  }

  throw Error(`unknow type ${formatName}`);
}
