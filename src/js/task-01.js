function task1(params) {
    const list = document.body.firstElementChild.nextElementSibling;
    const item = list.children;
    

    console.log('Number of categories:', item.length); 
    [...item].forEach(val => {
        console.log('Category:', val.firstElementChild.textContent);
        console.log('Elements:',val.firstElementChild.nextElementSibling.children.length);
        
    });

}

task1();