const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado =  document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [ 
            {
                texto: "alternativa01",
                afirmacao: "afirmacao01"
            },
            {
                texto: "alternativa02",
                afirmacao: "afirmacao02"
            },
        ]    
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Alternativa03",
                afirmacao: "afirmacao03"
            },
            {
                texto: "Alternativa04",
                afirmacao: "afirmacao04"
            },
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Alternativa05",
                afirmacao: "afirmacao05"
            },
            {
                texto: "Alternativa06",
                afirmacao: "afirmacao06"
            }, 
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "Alternativa07",
                afirmacao: "afirmacao07"
            },
            {
                texto: "Alternativa08",
                afirmacao: "afirmacao08"
            },
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
                texto: "Alternativa09",
                afirmacao: "afirmacao09"
            },
            {
                texto: "Alternativa10",
                afirmacao: "afirmacao10"
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
            return
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
    function respostaSelecionada(opcaoselecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " "
        atual++;
        mostraPergunta();
    }
    function mostraResultado (){
        caixaPerguntas.textContent = "Inicio do texto..."
        textoResultado.textContent = historiaFinal
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();