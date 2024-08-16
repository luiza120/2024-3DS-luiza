const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado =  document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "Nos dias atuais vemos que a prática de de hobbies vem aumentando sendo uma ótima maneira desconectar os jovens e adultos dos eletrônicos. De acordo com a visão e autoconhecimento de si mesmo, você prefere atividades tranquilas ou que exijam mais esforço do seu físico?",
        alternativas: [ 
            {
                texto: "sim, prefiro atividades tranquilas e leves",
                afirmacao: "Vejo que você prefere atividades mais tranquilas e calmas, ouvir músicas que goste e a leitura são uma ótima opção para você."
            },
            {
                texto: "não, gosto de optar por movimentar meu físico",
                afirmacao: "Bom, se você opta por movimento físico, academia, pilates e até mesmo a corrida podem ser uma ótima opção, além de eles serem saúde, libera vários hormônios e neurotransmissores que causam bem-estar, felicidade e relaxamento."
            },
        ]    
    },
    {
        enunciado: "Ok, agora quero que você usuário me diga se prefere atividades que tem o objetivo trabalhar a capacidade cerebral em alto nivel ou concentração e foco como principio?",
        alternativas: [
            {
                texto: "geralmente eu gosto muito de trabalhar meu cérebro",
                afirmacao: "Se é alguém que gosta de trabalhar o cérebro quebra cabeças, caça-palavras e até aprender uma nova língua são ótimas maneiras para isso além de trazerem diversão para quem prática."
            },
            {
                texto: "particularmente prefiro treinar foco e concentração",
                afirmacao: "Como disse gosta de trabalhar seu foco e concentração, meditação e yoga são ótimas formas de começar, elas auxiliam na consciência corporal além de reduzir os níveis de estresse."
            },
        ]
    },
    {
        enunciado: "Você costuma gostar de cozinhar ou fazer coisas que envolvam atividades manuais? sua sinceridade é muito importante aqui :)",
        alternativas: [
            {
                texto: "amo cozinhar! cozinhar é como terapia para mim",
                afirmacao: "Já que você é alguém que gosta de atividades manuais e ama cozinhar deveria saber que isso é ou pode se tornar um hobbie, aprender e cozinhar novas receitas fazem muito bem ao nosso cérebro e saúde!"
            },
            {
                texto: "não sou muito bom com atividades culinárias porém tento",
                afirmacao: "Você disse que não é muito bom com atividades culinárias e tudo bem, isso não é problema! uma ótima atividade manual, pode ser aprender crochê ou algum instrumento :)"
            }, 
        ]
    },
    {
        enunciado: "Você é alguém que gosta de sair da rotina de vez em quando e explorar novos ares?",
        alternativas: [
            {
                texto: "É uma das minhas coisas favoritas!",
                afirmacao: "Você disse que sair da rotina é uma de suas coisas preferidas e uma ótima indicação de como fazer isso é saindo fazer uma trilha que tem contato com a natureza, e assim descobrindo novas coisas."
            },
            {
                texto: "Sou uma pessoa mais caseira porém gostaria de mudar isso",
                afirmacao: "Já que você é uma pessoa caseira mas quer mudar isso, uma ótima forma de começar é saindo socializar com seus amigos em lugares que goste além de trabalhar também a comunicação."
            },
        ]
    },
    {
        enunciado: "Como você lida com sua criatividade? Ultimamente ela está mais clara ou se mantém apagada te impedindo de desenvolver e executar ideias novas",
        alternativas: [
            {
                texto: "Minha criatividade está muito ativa, tenho ideias novas que fazem de minha vida mais leve e divertida em meio a rotina corrida.",
                afirmacao: "Como me disse que sua criatividade está ativa, já tentou escrever ultimamente? a escrita ajuda a expressarmos nossos sentimentos!"
            },
            {
                texto: "Está bem apagada porém quero mudar isso para ter mais leveza em meio ao meu cotidiano.",
                afirmacao: "Já que disse que sua criatividade está apagada mas pretende mudar isso, pode começar desenhando ou colorindo, ajuda na coordenação motora, nos traz para o momento presente assim trazendo nossa criatividade para combinar cores e linhas de forma fácil!"
            }, 
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() 
    {
        if (atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = ""
        mostraAlternativas();
    }

    function mostraAlternativas()
    {
        for (const alternativa of perguntaAtual.alternativas)
        {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa))
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " "
        atual++;
        mostraPergunta();
    }
    function mostraResultado (){
        caixaPerguntas.textContent = "Aqui estão alguns hobbies que você pode começar ou incluir na sua rotina!"
        textoResultado.textContent = historiaFinal
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();