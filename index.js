namesArray = ["Guadalupe", "Ollie", "Aki"];
beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

  afterEach( () => {
    spy.restore();
  } );
function writeCards(namesArray, surprise) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);
    }
    return thankYouCards;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}

