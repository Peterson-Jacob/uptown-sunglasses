window.onload = () =>{
    const amt = document.getElementById("total");
    const zPurchase = document.getElementsByClassName('zBtn');
    const xPurchase = document.getElementsByClassName('xBtn');
    const yPurchase = document.getElementsByClassName('yBtn');
    const aPurchase = document.getElementsByClassName('aBtn');

    const dollar = 0;
    const subtotal = new Array();

    zPurchase[0].onclick = () =>{
        const price = 18;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
        //return amt.value;
    
    
    }
    zPurchase[1].onclick = () =>{
    
        const price = 18;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
    
    }
    zPurchase[2].onclick = () =>{
        
        const price = 18;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;

    }
    xPurchase[0].onclick = () =>{
        const price = 16;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
    }
    xPurchase[1].onclick = () =>{
        const price = 16;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
    }
    yPurchase[0].onclick = () =>{
        const price = 45;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
    }
    aPurchase[0].onclick = () =>{
        const price = 60;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
    }
    




} 