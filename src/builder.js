export default function buildAst(keys1, keys2){
const diffrents  = _.sortBy(_.union(keys1,keys2)).map((key) => {
    
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])){
        return  { type: 'recursion', key: key, children: findDiff(obj1[key], obj2[key]) }
    } 
    else  if(!Object.hasOwn(obj1, key)){
        return { type: 'added', key: key, val: obj2[key] };
    }
    else if (!Object.hasOwn(obj2, key)){
        return { type: 'deleted', key: key, val: obj1[key] };
    }
    
    else if (obj1[key] !== obj2[key]){
        return { type: 'changed', key: key, newVal: obj2[key], oldVal: obj1[key] };
    }

    return { type: 'unchanged', key: key, val: obj1[key] };

});

return diffrents;
}

// пока что не стала добавлять функцию по созданию объекта