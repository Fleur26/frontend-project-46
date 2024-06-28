import _ from 'lodash';

export default function findDiff(obj1, obj2) {
  const makeNode = (action, key, oldValue, newValue, children) => ({
    action,
    key,
    oldValue,
    newValue,
    children,
  });
  const allKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2))).map((key) => {
    const oldValue = obj1[key];
    const newValue = obj2[key];
    if (!_.has(obj1, key)) {
      return makeNode('deleted', key, oldValue);
    }
    if (!_.has(obj2, key)) {
      return makeNode('added', key, newValue);
    }
    if (_.isObject(oldValue) && _.isObject(newValue)) {
      const children = findDiff(oldValue, newValue);
      return makeNode('nested', key, children);
    }
    if (oldValue !== newValue) {
      return makeNode('changed', key, oldValue, newValue);
    }
    return makeNode('unchanged', key, oldValue);
  });
  return allKeys;
}
