window.onload = function(){
    var btns = document.getElementsByClassName('btns');
    
    var btn = [];
    for(var i = 1; i < 19; i++){
        btn[i] = document.createElement('button');
        if(i < 10){
            btn[i].innerHTML = i;
        }//if statement
        
        btns[0].append(btn[i]);
        
        btn[i].onclick = function(){
           var num = this.innerHTML;
           var scr = document.getElementsByClassName('scr')[0];
           scr.append((num !== '='? num : ''));
           if(num === 'C'){scr.innerHTML = ""}
           else if(num === '='){scr.innerHTML = eval(scr.innerHTML)}
        }
    }//for loop
    btn[10].innerHTML= ".";
    btn[11].innerHTML= "0";
    btn[12].innerHTML= "%";
    btn[13].innerHTML= "/";
    btn[14].innerHTML= "*";
    btn[15].innerHTML= "-";
    btn[16].innerHTML= "=";
    btn[17].innerHTML= "C";
    btn[18].innerHTML= "+";
    
    }