document.getElementById('burger').addEventListener('click',
    function(){
        const menu = 
        document.getElementById('menu');
        menu.classList.toggle(`active`);
        const burger_btn = 
        document.getElementById('burger');
        burger_btn.classList.toggle(`active`);
        const lock = 
        document.getElementById('body');
        lock.classList.toggle(`lock`)
    });

    