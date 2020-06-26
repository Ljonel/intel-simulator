var item;
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("btn").addEventListener('click', function(){
       
        let ax = document.getElementsByName("item")[0].value;
        let bx = document.getElementsByName("item")[1].value;
        let cx = document.getElementsByName("item")[2].value;
        let dx = document.getElementsByName("item")[3].value;
        let tab = [ax,bx,cx,dx];
        let tabParse = [];

        const regex = RegExp('^[0-1]{1,}$');
        console.log(regex.test(ax));
        
        if(ax == '' || bx==''||cx==''||dx==''){
            alert("Musisz wprowadzić dane");
        }
        else if(regex.test(ax) && regex.test(bx) && regex.test(cx) && regex.test(dx)){
            for(let i =0;i<tab.length;i++){
                tabParse[i] = parseInt(tab[i],2);
             }
             console.log(tabParse);
        }
        else{
            alert("Użyj tylko liczb binarnch");
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

