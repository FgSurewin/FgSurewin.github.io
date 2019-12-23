
    colors = ['black', 'black', 'black', 'black'];
    let btnStart = document.getElementById('btn-start');
    let btnOver = document.getElementById('btn-over');
    let main = document.getElementById('actionPart');
    let box = document.getElementById('box');
    let count = document.getElementById('count');
    let num = 0;
    let Target;
    function createDiv(){
        index = Math.floor(Math.random()*4);
        let eachDiv = document.createElement('div');
        eachDiv.className = 'row';
        for(let i = 0; i < 4; i++){
            let Div = document.createElement('div');
            eachDiv.append(Div);
        }
        if(main.children.length === 0){
            main.append(eachDiv);
        }else{
            main.insertBefore(eachDiv, main.children[0]);
        }
        eachDiv.children[index].style.backgroundColor = colors[index];
        eachDiv.children[index].className = 'target';
    }
    let test;
    let speed = 5;
    btnStart.onclick = function start(){
        test = setInterval(function(){
            let valueOfTop = parseInt(getComputedStyle(main).top);
            main.style.top = valueOfTop + speed + 'px';
            if(parseInt(getComputedStyle(main).top) >= 0){
                createDiv();
                main.style.top = -150 + 'px';
            }

    
    
    // main.addEventListener('click', function(event){
    //     Target = event.target;
    //     if(Target.className === 'target'){
    //         event.target.style.backgroundColor = '#ccc';
    //         event.target.className = '';
    //     }else{
    //         clearInterval(test);
    //         main.parentElement.insertAdjacentHTML("beforebegin", '<p>Game Over</p>');
    //     }

    // });
    if(main.children.length === 6){
        for(let i = 0; i < 4; i++){
            if(main.children[5].children[i].className === 'target'){
                clearInterval(test);
                main.style.top = 0;
                box.insertAdjacentHTML('beforebegin', '<p>Game Over</p>');
                box.parentElement.children[1].className = 'word';
                setTimeout(removeMain, 1000);
                setTimeout(reloadPage, 2000);
            }
        }
        main.removeChild(main.children[5]);
    }
   
        }, 20)
    }
    main.onclick = function(event){
        Target = event.target;
        if(Target.className === 'target'){
            Target.style.backgroundColor = '#ccc';
            Target.className = '';
            num++;
            count.innerHTML = 'Score: '+num ;
            
        }else{
            clearInterval(test);
            main.style.top = 0;
            box.insertAdjacentHTML('beforebegin', '<p>Game Over</p>');
            box.parentElement.children[1].className = 'word';
            setTimeout(removeMain, 1000);
            setTimeout(reloadPage, 2000);
        }
        if(num%10 == 0){
            speed++;
        }
        
    }
    function reloadPage(){
        location.reload();
    }
   
    function removeMain(){
        main.innerHTML = '';
    }
    // btnOver.onclick = function over(){
    //     clearInterval(test);
    // }
    
