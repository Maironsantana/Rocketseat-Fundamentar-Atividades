let notaNumerica = 101;
let notaCaractere = 'placeholder';

function converterNotas(nota){
    if (nota >= 90 && nota <= 100){
        notaCaractere = 'A';
    } else if (nota >= 80 && nota <= 89) {
        notaCaractere = 'B';
    } else if (nota >= 70 && nota <= 79){
        notaCaractere = 'C';
    } else if (nota >= 60 && nota <= 69){
        notaCaractere = 'D';
    } else if (nota >= 0 && nota <= 59) {
        notaCaractere = 'F';
    } else {
        notaCaractere = 'Nota inválida'
    }
}

converterNotas(notaNumerica);

console.log(notaCaractere);