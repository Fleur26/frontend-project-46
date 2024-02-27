const parse = (file) => {
    switch (file.split('.')[1]){
        case 'json':
            const obj = JSON.parse(file);
            return obj;
        
    }
}  
export {parse};