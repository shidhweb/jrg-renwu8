//1.以下代码输出什么？ （难度**）
    function getInfo(name, age, sex){
        console.log('name:',name);
        console.log('age:', age);
        console.log('sex:', sex);
        console.log(arguments);
        arguments[0] = 'valley';
        console.log('name', name);
    }

    getInfo('hunger', 28, '男');
/*
    name:hunger
    age:28
    sex:男
    ["hunger",28,"男"]
    name valley
*/
    getInfo('hunger', 28);
/*
    name:hunger
    age:28
    sex:undefined
    ["hunger",28]
    name:valley
*/
    getInfo('男');
/*
    name:男
    age:undefined
    sex:undefined
    ["男"]
    name:valley
*/