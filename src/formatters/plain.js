const changeFormat = (value) => {
    switch (typeof value) {
      case 'object':
        return value === null ? value : '[complex value]';
      case 'string':
        return `'${value}'`;
      default:
        return value;
    }
  }

const makePlain = (value) => {

    const iter = (array, path) => {
        const result = array.map((obj) => {
          const fullKey = `${path}${obj.key}`;
          switch(obj.type){
            case 'added':
                return `Property '${fullKey}' was added value: ${changeFormat(obj.key)}`;

            case 'deleted':
                return `Property '${fullKey}' was removed`;
            
            case 'changed': 
                return  `Property '${fullKey}' was updated. From ${changeFormat(obj.oldVal)} to ${changeFormat(obj.newVal)}`;
            
            case 'recursion':
                return iter(obj.children, `${fullKey}.`);
            default: 
            return null;
          }
    });
    return result.filter((obj) => obj != null).join('\n');
        }
    return iter(value, '');
}

export default makePlain;