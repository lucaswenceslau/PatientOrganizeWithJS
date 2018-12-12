    // Seleciona apartir do querySelector a classe '.titulo' no html e altera o conteúdo de texto para "Aparecida Nutricionista"
    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";

    // Seleciona tudo que está na classe '.paciente' com 'querySelectorAll', no console mostra quantos elementos com essa classe existem.
    var pacientes = document.querySelectorAll(".paciente");
    console.log("Número de Arrays: "+pacientes.length);

    
    for(var i = 0; i < pacientes.length ; i++){

        // Atribui individualmente cada 'paciente' com a posição dele na Array, da posição 0 até o número de arrays que tiver com o .length
        paciente = pacientes[i];
        
        // pega da variavel paciente a seleção da classe ".info-peso" e logo em seguida recebe o conteúdo de texto que está nessa classe
        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;
        
        // a mesma coisa de cima, mas faz isso com a altura
        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;
        
        //seleciona a classe '.info-imc' do html, atribuindo a variavel tdImc
        var tdImc = paciente.querySelector(".info-imc");
            
            // Coloca o pesoValido e alturaValido como padrão booleano true
            pesoValido = validaPeso(peso);
            alturaValido = validaAltura(altura);
        
            //Esse primeiro if verifica se o peso é válido, caso não seja ele muda a variavel pesoValido para 'false' e adiciona uma classe
            // de alteração de cor puxada do css, também muda o conteúdo do texto do IMC para "Peso inválido" para informar o usuario
            if(!pesoValido){
                console.log("Peso inválido");
                pesoValido = false;
                tdImc.textContent = "Peso inválido";
                paciente.classList.add("invalido");
            }
            //Faz o mesmo que o if de cima, mas com a altura
            if(!alturaValido){
                console.log("Altura inválida");
                alturaValido = false;
                tdImc.textContent = "Altura inválida";
                paciente.classList.add("invalido");
            }
            /* Verifica se o pesoValido e a alturaValido estão com o valor true, se estiverem ele calcula o IMC com a função criada 'calculaImc'
            e coloca o conteúdo de texto do tdImc com o resultado do cálculo que a função faz. */ 
            if(pesoValido===true && alturaValido===true){
                       var imc = calculaImc(peso,altura);
            tdImc.textContent = calculaImc(peso,altura);
            }
            
        }

        function validaPeso(peso){
            if (peso >= 0 && peso < 1000){
                return true;
            }else{
                return false;
            }
        }
        function validaAltura(altura){
            if(altura >= 0 && altura < 3.00){
                return true;
            }else{
                return false;
            }
        }



        // Cria a função calculaImc, que recebe peso e altura dos textContent que são colocados nessas variáveis mais acima dentro dos (),
        // na função é declarada a variavel 'imc' e logo em seguida ela recebe o calculo de imc com a informação das variaveis peso e altura.
    function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
