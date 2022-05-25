
// let temperatureC = 0;
// let temperatureF = 0;

// function convertFtoC(temperature){
//     let celsius = 0;
//     celsius = (temperature - 32) * 5/9;
//     console.log(celsius);
// }

// function convertCtoF(temperature){
//     let fahrenheit = 0;
//     fahrenheit = temperature * 9/5 + 32;
//     console.log(fahrenheit);
// }

// convertCtoF(temperatureC);
// convertFtoC(temperatureF);

function convertTemperature(degree){
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

//Fluxo de erro
    if (!celsiusExists && !fahrenheitExists){
        throw new Error ('InvalidTypeException');
    }

//Fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    degreeSign = 'C';

//Fluxo alternativo C -> F
    if (celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F';
    }

    return formula(updatedDegree) + degreeSign;
}

try{
    console.log(convertTemperature('50F'));
} catch (error){
    console.log(error);
}