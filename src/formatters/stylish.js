import _ from 'lodash';

const makeFormat = (data) => {
    const parseData = data.map((obj) => {
        const {type, key, value, children = 0} = obj;

       switch(obj.type){
        case 'added':
            return `+ ${obj.key}: ${obj.value}`;
       
       case 'deleted':
            return `- ${obj.key}: ${obj.value}`;
        
        case 'recursion':
            return `  ${obj.key}: ${makeFormat(children)}`;
       } 
    })
}