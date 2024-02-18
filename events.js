function ticketSection() {
    const ticketS = document.getElementById("ticketSection");
    ticketS.scrollIntoView({ behavior: "smooth" });
}

let count= 0;
function button(id){
   
        const take = document.getElementById(id).addEventListener('click',function (){
            const tex = document.getElementById(id).innerText;
            document.getElementById(id).style.backgroundColor='#1DD100'; 
        
            const detail = document.getElementById('details'); 
            const p = document.createElement('p');
            p.innerText = tex + '  ' + 'Economy' + ' '+ 550;
            detail.appendChild(p);
            count = count + 1 ;
            console.log(count);

           const seatleft = document.getElementById('seatleft');
           const left = seatleft.innerText - 1;
           seatleft.innerText = left;
           console.log(left);

           const seatSelected = document.getElementById('seatSelected');
           const num = parseInt(seatSelected.innerText);
           const added = num + 1;
           seatSelected.innerText = added;
           console.log(added);

            
            // if (count===5) {
            //     document.getElementById(id).removeEventListener('click', function(){});
                
            // }
        });     

}


button('A1');button('A2');button('A3');button('A4');
button('B1');button('B2');button('B3');button('B4');
button('C1');button('C2');button('C3');button('C4');
button('D1');button('D2');button('D3');button('D4');



