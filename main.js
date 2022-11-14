const moneyMask = () => {
    const money = document.getElementById('money');
    let quantity = [];
    
    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    quantity = currency.format(money.value);
    money.value = `USD${quantity}`;
}



const telMask = () => {
    const tel = document.getElementById('tel');
    let index = [];
    let areaCode = [];
    let lstPart = [];
    let frsPart = [];

    if (tel.value.length == 11) {
        try {
            index = tel.value.slice(0, 1)
            areaCode = tel.value.slice(1, 4);
            frsPart = tel.value.slice(4, 7);
            lstPart = tel.value.slice(7, 11);
            tel.value = `+${index} (${areaCode}) ${frsPart} - ${lstPart}`;

        } catch {
            console.log('there is a trouble');
        }

    } else if (tel.value.length == 10) {
        areaCode = tel.value.slice(0, 3);
        frsPart = tel.value.slice(3, 6);
        lstPart = tel.value.slice(6, 10);
        tel.value = `(${areaCode}) ${frsPart} - ${lstPart}`;
    }

}



const creditCardMask = () => {
    const number = document.querySelector('.item-2');
    let frsPart = [];
    let sndPart = [];
    let trdPart = [];
    let lstPart = [];
    

    if (number.value.length == 16) {
        try {
            frsPart = number.value.slice(0, 4);
            sndPart = number.value.slice(4, 8);
            trdPart = number.value.slice(8, 12);
            lstPart = number.value.slice(12, 16);
            number.value = `${frsPart} - ${sndPart} - ${trdPart} - ${lstPart}`;

        } catch {
            console.log('there is a trouble');
        }
    }
}



const cvvNumber = () => {
    const cvv = document.querySelector('.item-4');
    
    if (cvv.value.length > 3) {
        cvv.value = '';
    }
}



const secondaryBtn = () => {
    try {
        email.value = '';
        money.value = '';
        tel.value = '';
        date.value = '';
        creditCard.value = '';

    } catch {
        console.error('there is a trouble');
    }    
}