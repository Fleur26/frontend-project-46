import _ from 'lodash';
const data = {

}
const makeFormat = (value) => {
    const space = ' ';
    const iter = (currentValue, depth) => {
      if (!_.isObject(currentValue)) {
        return `${currentValue}`;
      }
  
      const indentSize = depth;
      const lines = Object
        .values(currentValue)
        .map((obj) => {
          switch (obj.type){
            case 'added':
              return `${space.repeat(indentSize)}+ ${obj.key}: ${obj.val}`;

            case 'deleted':
              return `${space.repeat(indentSize)}- ${obj.key}: ${obj.val}`;

            case 'recursion': 
              return `${space.repeat(indentSize)}  ${obj.key}: ${iter(obj.children, depth + 1)}`;
            
            case 'changed': 
            return `${space.repeat(indentSize)}+ ${obj.key}: ${obj.newVal}\n${space.repeat(indentSize)}- ${obj.key}: ${obj.oldVal}`;
            default:
              return `${space.repeat(indentSize)}  ${obj.key}: ${obj.val}`;
          }
        });
  
      return [
        '{',
        ...lines,
        `${space.repeat(indentSize)}}`,
      ].join('\n');
    };
  
    return iter(value, 1);
  };
  
  export default makeFormat;