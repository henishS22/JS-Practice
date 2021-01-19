//gives inner functions access to variables in the outer funciton's lexical scope
name = 'Jamwal'
function outerFn(){
    name = 'Vidyut'
    function innerFn(){
        console.log(`Hi !! ${name}`);
    }
    return innerFn;
}

var fn = outerFn();
fn();