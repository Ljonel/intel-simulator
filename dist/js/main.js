document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener('click', () => {
        const ax = document.getElementsByName("item")[0];
        const bx = document.getElementsByName("item")[1];
        const cx = document.getElementsByName("item")[2];
        const dx = document.getElementsByName("item")[3];
 
        const paramsMap = {
            AX: ax,
            BX: bx,
            CX: cx,
            DX: dx,
        };
 
        const regex = RegExp('^[0-1]{1,}$');
 
        if (ax.value === '' || bx.value === '' || cx.value === '' || dx.value === '') {
            alert("You have to enter all data");
        } else if (regex.test(ax.value) && regex.test(bx.value) && regex.test(cx.value) && regex.test(dx.value)) {
            const cmd = document.getElementById("command").value;
            const firstParam = document.getElementById("par1").value;
            const secondParam = document.getElementById("par2").value;
 
            if (cmd === "MOV") {
                paramsMap[firstParam].value = paramsMap[secondParam].value;
                paramsMap[secondParam].value = paramsMap[firstParam].value;
            }
            else if(cmd === "ADD"){
                const TfirstParam = parseInt(paramsMap[firstParam].value,2);
                const TsecondParam = parseInt(paramsMap[secondParam].value,2);
                const result = TfirstParam + TsecondParam;
                paramsMap[firstParam].value = result.toString(2);
            }
            else if(cmd === "SUB"){
                
            }
        }
        else {
            alert("Use binary code!");
        }
    });
});