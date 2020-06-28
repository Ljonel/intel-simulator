var item;
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("btn").addEventListener('click', function(){
       
        let ax = document.getElementsByName("item")[0].value; //input ax
        let bx = document.getElementsByName("item")[1].value; //input bx
        let cx = document.getElementsByName("item")[2].value;  
        let dx = document.getElementsByName("item")[3].value;
        let tab = [ax,bx,cx,dx];
        let tabParse = [];

        const regex = RegExp('^[0-1]{1,}$');
        console.log(regex.test(ax));
        
        if(ax == '' || bx==''||cx==''||dx==''){
            alert("You have to enter all data");
        }
        else if(regex.test(ax) && regex.test(bx) && regex.test(cx) && regex.test(dx)){
            
            for(let i =0;i<tab.length;i++){
                tabParse[i] = parseInt(tab[i],2);
             }
            
             let cmd = document.getElementById("command").value; //MOV ADD XUB
             let parametr1 = document.getElementById("par1").value; // PARAMETR1
             let parametr2 = document.getElementById("par2").value; //PARAMETR2

             if(cmd == "MOV")                       
             {
                if(parametr1 == "AX" && parametr2 == "BX") // NO I TU BY MUSIALO BYC MILION WARUNKÓW
                let temp = tabParse[0];
                 tabParse[0] = tabParse[1];
                 tabParse[1] = temp;
                 document.getElementsByName("item")[0].value = tabParse[0].toString(2);
                 document.getElementsByName("item")[1].value = tabParse[1].toString(2);
             }
        }
        else{
            alert("Use binary code!");
        }
        
      function Move(cmd){
        
      }

        




        
        // item = document.getElementsByName("item"); //fruits is now a NodeList
        // item.forEach(element => {
        //     if(!element.value.length) {
        //         alert("Nie mozesz zostawic pustego pola!");
        //     }
        //     else{
                
        //     }
        // });
    });
});

