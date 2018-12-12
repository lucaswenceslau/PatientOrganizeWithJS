// Seleciona o botão pela ID e adiciona o EventListener que é o que ativa a função de evento quando recebe um 'click'.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event){

        //O evento não deixa o elemento agir de forma como deveria, no caso com sua função default que é a padrão.
        event.preventDefault();

        //Seleciona o Formulário pelo ID.
        var form = document.querySelector("#form-adiciona");

        // função de pegar dados dos pacientes pelo form
        PacienteFormulario(form);
        
        //função que monta a Tr dos dados do paciente
        var pacienteTr = montaTr(paciente);

        var erros = validaPaciente(paciente);
        

        if(erros.length > 0){
            exibeMensagemErro(erros);
            
            return;
        }



        //seleciona a tabela-pacientes do html
        var tabela = document.querySelector("#tabela-pacientes");

        // coloca a tr de informações de pacientes pegas pela função e deixa o tr como filho da tabela-pacientes
        tabela.appendChild(pacienteTr);
        
        // reseta o formulario quando envia a informação
        form.reset();

        var ErroMensagem = document.querySelector("#mensagem-erro");
        ErroMensagem.innerHTML = "";


    });
     
    // Criando uma função que pega os valores colocados no formulário
    function PacienteFormulario(form) {
        paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }
    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
              
        var nomeTd = montaTd(paciente.nome ,"info-nome");
        var pesoTd = montaTd(paciente.peso ,"info-peso");
        var alturaTd = montaTd(paciente.altura ,"info-altura");
        var gorduraTd = montaTd(paciente.gordura ,"info-gordura");
        var imcTd = montaTd(paciente.imc ,"info-imc");

        nomeTd.textContent = paciente.nome;
        pesoTd.textContent = paciente.peso;
        alturaTd.textContent = paciente.altura;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = paciente.imc;
        
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
    }
    function montaTd(dados,classe){
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);
        return td;
    }

    function validaPaciente(paciente){
        
        var erros = [];

        if(!validaPeso(paciente.peso)){
             erros.push("Peso inválido");
        }

        if(!validaAltura(paciente.altura)){
             erros.push("Altura inválida");
        }
        if(paciente.peso.length == 0){
            erros.push("Insira o peso do paciente");
        }
        if(paciente.altura.length == 0){
            erros.push("Insira a altura do paciente");
        }
        if(paciente.nome.length == 0){
            erros.push("Insira o nome do paciente");
        }
        if(paciente.gordura.length == 0){
            erros.push("Insira a gordura corporal do paciente");
        }

        return erros;
    }

    function exibeMensagemErro(erros){
        var ul = document.querySelector("#mensagem-erro");

        ul.innerHTML = "";

        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
        }