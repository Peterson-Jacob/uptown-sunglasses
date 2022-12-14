window.onload = () =>{
   
    const amt = document.getElementById("total");
    const zPurchase = document.getElementsByClassName('zBtn');
    const xPurchase = document.getElementsByClassName('xBtn');
    const yPurchase = document.getElementsByClassName('yBtn');
    const aPurchase = document.getElementsByClassName('aBtn');
    const cart = document.getElementById("cart-items");
    const check = document.getElementById("checkBtn");
    const emptyMessage = document.getElementById('cartEmpty');

 

    check.onclick = () =>{
        if(amt.value == "0"){
            emptyMessage.textContent = "Cart is empty";
           }else{
            tl5.play(true);
        }
     }


    let zCount = 0;
    let xCount = 0;
    let yCount = 0;
    let aCount = 0;

    const zBuy = () =>{
        zCount += 1;
        const quanity = (0 + zCount);
        const price = 18;
        const itemPrice = (0 + zCount) * price;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
        const zDiv = document.createElement('div');
        const zImg = document.createElement('img');
        const zMod = document.createElement('h1');
        const zQty = document.createElement('p');
        const zPrice = document.createElement('p');
        const zBut = document.createElement('button');


        if(zCount == 1){
        zDiv.classList.add('zModDiv');
        zDiv.appendChild(zImg);
        zImg.src = 'images/glasses3.jpg';
        zDiv.appendChild(zMod);
        zMod.textContent = "Z-Model"
        zDiv.appendChild(zQty);
        zQty.textContent = "Quantity " + quanity;
        zQty.id = "zCountid";
        zDiv.appendChild(zPrice);
        zPrice.textContent = " Price $" + itemPrice;
        zPrice.id = "zPriceid";
        zDiv.appendChild(zBut);
		zBut.textContent = 'Remove';
        cart.appendChild(zDiv);
        emptyMessage.textContent = "";
        }
        if(zCount > 1){
           document.getElementById('zCountid').textContent = "Quantity " + quanity; 
           document.getElementById('zPriceid').textContent = " Price $" + itemPrice;
        }

        zBut.onclick = function( ){
            amt.value = amt.value - (zCount * price);
            zCount = 0;
            zDiv.remove();
        }

        check.addEventListener('click', () =>{
            amt.value = amt.value - (zCount * price);
            zCount = 0;
            zDiv.remove();
        })
    }

    
    const xBuy = () =>{
        xCount += 1;
        const quanity = (0 + xCount);
        const price = 16;
        const itemPrice = (0 + xCount) * price;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
        const xDiv = document.createElement('div');
        const xImg = document.createElement('img');
        const xMod = document.createElement('h1');
        const xQty = document.createElement('p');
        const xPrice = document.createElement('p');
        const xBut = document.createElement('button');

        if(xCount == 1){

        xDiv.appendChild(xImg);
        xImg.src = 'images/glasses4.jpg';
        xDiv.appendChild(xMod);
        xMod.textContent = "X-Model"
        xDiv.appendChild(xQty);
        xQty.textContent = "Quantity " + quanity;
        xQty.id = "xCountid";
        xDiv.appendChild(xPrice);
        xPrice.textContent = " Price $" + itemPrice;
        xPrice.id = "xPriceid";
        xDiv.appendChild(xBut);
		xBut.textContent = 'Remove';
        cart.appendChild(xDiv);
        emptyMessage.textContent = "";
        }
        if(xCount > 1){
           document.getElementById('xCountid').textContent = "Quantity " + quanity; 
           document.getElementById('xPriceid').textContent = " Price $" + itemPrice;
        }

        
        xBut.onclick = function( ){
            amt.value = amt.value - (xCount * price);
            xCount = 0; 
            xDiv.remove();
        }

        check.addEventListener('click', () =>{
            amt.value = amt.value - (xCount * price);
            xCount = 0;
            xDiv.remove();
        })
    }

    zPurchase[0].onclick = () =>{
        zBuy();
       
    }
    zPurchase[1].onclick = () =>{
        zBuy();

    
    }
    zPurchase[2].onclick = () =>{
        zBuy();

    }

    xPurchase[0].onclick = () =>{
        xBuy();
    }
    xPurchase[1].onclick = () =>{
        xBuy();
    }
    yPurchase[0].onclick = () =>{
        yCount += 1;
        const quanity = (0 + yCount);
        const price = 45;
        const itemPrice = (0 + yCount) * price;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
        const yDiv = document.createElement('div');
        const yImg = document.createElement('img');
        const yMod = document.createElement('h1');
        const yQty = document.createElement('p');
        const yPrice = document.createElement('p');
        const yBut = document.createElement('button');

        if(yCount == 1){

        yDiv.appendChild(yImg);
        yImg.src = 'images/glasses2.jpg';
        yDiv.appendChild(yMod);
        yMod.textContent = "Y-Model"
        yDiv.appendChild(yQty);
        yQty.textContent = "Quantity " + quanity;
        yQty.id = "yCountid";
        yDiv.appendChild(yPrice);
        yPrice.textContent = " Price $" + itemPrice;
        yPrice.id = "yPriceid";
        yDiv.appendChild(yBut);
		yBut.textContent = 'Remove';
        cart.appendChild(yDiv);
        emptyMessage.textContent = "";
    
        }
        if(yCount > 1){
           document.getElementById('yCountid').textContent = "Quantity " + quanity; 
           document.getElementById('yPriceid').textContent = " Price $" + itemPrice;
        }

        
        yBut.onclick = function( ){
            amt.value = amt.value - (yCount * price);
            yCount = 0; 
            yDiv.remove();
        }
        check.addEventListener('click', () =>{
            amt.value = amt.value - (yCount * price);
            yCount = 0;
            yDiv.remove();
        })

    }

    aPurchase[0].onclick = () =>{
        aCount += 1;
        const quanity = (0 + aCount);
        const price = 60;
        const itemPrice = (0 + aCount) * price;
        const subTotal = parseInt(amt.value) + price;
        amt.value = subTotal;
        const aDiv = document.createElement('div');
        const aImg = document.createElement('img');
        const aMod = document.createElement('h1');
        const aQty = document.createElement('p');
        const aPrice = document.createElement('p');
        const aBut = document.createElement('button');

        if(aCount == 1){

        aDiv.appendChild(aImg);
        aImg.src = 'images/glasses1.jpg';
        aDiv.appendChild(aMod);
        aMod.textContent = "A-Model"
        aDiv.appendChild(aQty);
        aQty.textContent = "Quantity " + quanity;
        aQty.id = "aCountid";
        aDiv.appendChild(aPrice);
        aPrice.textContent = " Price $" + itemPrice;
        aPrice.id = "aPriceid";
        aDiv.appendChild(aBut);
		aBut.textContent = 'Remove';
        cart.appendChild(aDiv);
        emptyMessage.textContent = "";
        }
        if(aCount > 1){
           document.getElementById('aCountid').textContent = "Quantity " + quanity; 
           document.getElementById('aPriceid').textContent = " Price $" + itemPrice;
        }

        
        aBut.onclick = function( ){
            amt.value = amt.value - (aCount * price);
            aCount = 0;
            aDiv.remove();
        }

        check.addEventListener('click', () =>{
            amt.value = amt.value - (aCount * price);
            aCount = 0;
            aDiv.remove();
        })

        }
    }
    




