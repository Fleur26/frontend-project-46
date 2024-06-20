import makeStylish from './stylish.js';
import getPlain from './plain.js';

export default function makeFormat(tree, formatName = 'stylish') {
  switch (formatName) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return getPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error('Format is not correct');
  }
}
