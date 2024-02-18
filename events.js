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
// seat left
           const seatleft = document.getElementById('seatleft');
           const left = seatleft.innerText - 1;
           seatleft.innerText = left;
           console.log(left);
// seat added 
           const seatSelected = document.getElementById('seatSelected');
           const num = parseInt(seatSelected.innerText);
           const added = num + 1;
           seatSelected.innerText = added;
           console.log(added);
// total price
           const tp =document.getElementById('totalP');
           const tprice = 550*count;
           tp.innerText = tprice; 
// grand total
           const gt = document.getElementById('grandTotal');
           const gt2 = 550*count;
           gt.innerText = gt2;
  //discount price
           const coupon = document.getElementById('apply').addEventListener('click',function(){
            const couponI = document.getElementById('couponI');
            const input = couponI.value ;
            console.log(input);
            if(input==='NEW15'){

                const disP = tprice*0.15;
                console.log(disP);
                const hid = document.getElementById('couponBox');
                const news = tprice - disP ;
                gt.innerText =news;
               
                hid.classList.add('hidden');

            }
            else if(input==='Couple 20'){

                const disP = tprice*0.20;
                const hid = document.getElementById('couponBox');
                const news = gt2 - disP ;
                gt.innerText =news;  

                hid.classList.add('hidden');

            }
            else{
                alert('wrong coupon');
            }

           });     
//  alert  
            if (count===5) {
                
                const leftS = document.getElementById('leftS');
                leftS.classList.add('hidden');
                alert('You can not select more than 4 seats ,please reload again');
          
            }
            
        }); 
          const next = document.getElementById('next').addEventListener('click',function(){
            const done= document.getElementById('done').classList.remove('hidden');
            document.getElementById('ticketSection').classList.add('hidden');
            document.getElementById('cps').classList.add('hidden');
            document.getElementById('banner').classList.add('hidden');
            document.getElementById('nav').classList.add('hidden');
          }); 

}

button('A1');button('A2');button('A3');button('A4');
button('B1');button('B2');button('B3');button('B4');
button('C1');button('C2');button('C3');button('C4');
button('D1');button('D2');button('D3');button('D4');



