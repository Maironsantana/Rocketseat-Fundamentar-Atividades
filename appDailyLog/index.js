const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) =>{
    return process.stdout.write("\n"+questions[index]+ " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(
        'Show!'+
        '\nO que você aprendeu hoje foi:\n'+answers[0]+
        '\nO que te deixou aborrecido foi:\n'+answers[1]+
        '\nO que te deixou feliz foi:\n'+answers[2]+
        '\nVocê ajudou '+answers[3]+' pessoas hoje!'+
        '\nVolte amanhã para um novo resumo!'
        )
}) 