const add = (a,b) => a+b;

add(2,3);

const superAdd = withLogger(add);

superAdd(2,3);


//функция withLogger должна принимать оригинальную функцию add
//withLogger должке возвращать НОВУЮ функцию, которая принимает a,b 
//сохраняет работу оригинальной функции (ее нужно будет вызвать)
//и возвращает рepультат оригинальной функции

function withLogger(originalFunction) {
    
    return function(a, b) {
        
        const args = [a, b];

        const result = originalFunction.apply(null, args);

        console.log(`Function ${originalFunction.name} called with arguments ${args.join(', ')}. Result: ${result}`);

        return result;
    };
}


function add(a, b) {
    return a + b;
}

const addWithLogger = withLogger(add);

const result = addWithLogger(3, 5);




const person = {
    userName: 'Valerchik',
    home: 'Krysha',
    isOboltus: false,
    code,
    stack: ['PHP', 'Wordpress', 'Drupal']
};


const person2 = {
    userName: 'Mitrofan',
    home: 'Pod Mostom',
    isOboltus: true,
    code,
    stack: ['CSS', 'JS', 'React']
};


