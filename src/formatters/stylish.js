import _ from 'lodash';

const styleObj = (val, depth) => {
  const space = ' ',
   iter = (val, depth) =>{
    const offset = (depth * 2) - depth;
        if (!_.isObject(val)) {
        return `${val}`;
        }
    const keys = Object.keys(val),
    values = keys.map((key) => {
    if(_.isObject(val[key])){
    return `${space.repeat(offset)}  ${key}: ${iter(val[key], depth + 1)}`;
    }
  return `${space.repeat(offset)}  ${key}: ${val[key]}`;
});
return `{\n ${values.join('\n')} \n}`;
}
return iter(val, depth);
 },
 makeStylish = (value) => {
    const space = ' ',
     iter = (currentValue, depth) => {
      if (!_.isObject(currentValue)) {
        return `${currentValue}`;
      }
  
      const indentSize = (depth * 2),
       lines = Object
        .values(currentValue)
        .map((obj) => {
          switch (obj.type){
            case 'added':
              return `${space.repeat(indentSize)}+ ${obj.key}: ${styleObj(obj.val, indentSize)}`;

            case 'deleted':
              return `${space.repeat(indentSize)}- ${obj.key}: ${styleObj(obj.val, indentSize)}`;

            case 'recursion': 
              return `${space.repeat(indentSize)}  ${obj.key}: ${iter(obj.children, indentSize + 1)}`;
            
            case 'changed': 
              return `${space.repeat(indentSize)}- ${obj.key}: ${styleObj(obj.oldVal, indentSize)}\n${space.repeat(indentSize)}+ ${obj.key}: ${styleObj(obj.newVal,indentSize)}`;
              
            default:
              return `${space.repeat(indentSize)}  ${obj.key}: ${styleObj(obj.val, indentSize)}`;
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
  
  export default makeStylish;