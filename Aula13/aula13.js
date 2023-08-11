    //               01234567
    let umaString = "um texto";

    console.log(umaString.concat(' em um lindo dia.'));// concatena as string
    console.log(umaString.indexOf('Um'));// começa do começo da palavra
    console.log(umaString.lastIndexOf('m', 3)); // começa do final da palavra
    console.log(umaString.match(/[a-z]/g));// expresão regular com array
    console.log(umaString.search(/x/));//pedindo para encontrar a letra
    console.log(umaString.replace(/o/, '#'));//modificar a palavra por #, se tiver mais no texto para modificar colocar letra g no final da estressão /o/g.
    console.log(umaString.slice(-5, -1));// pegar uma determinada palavra do texto com indece, indese com - é palavra de trais para frente.
    console.log(umaString.length); //ver o tamanho de uma frase ou texto

    console.log(umaString.split);
    console.log(umaString.toUpperCase());// Todas as letras maiusculas.
    console.log(umaString.toLowerCase());// Todas as letras minusculas