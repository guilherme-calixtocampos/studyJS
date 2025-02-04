
function verificaLogin() {
    
    const emailInserido = document.getElementById('email').value;
    const senhaInserida = document.getElementById('senha').value;

    // Credenciais corretas
    const emailCorreto = "gcalixtocampos16@gmail.com"; //email adm
    const senhaCorreta = "Gui312025!"; //senha adm

    // Mensagem de aviso
    const mensagemAviso = document.getElementById('mensagem');

    // Verifica se o e-mail e a senha estão corretos
    if (emailInserido === emailCorreto && senhaInserida === senhaCorreta) {
        // Redireciona para a página principal
        window.location.href = "tela-principal.html"; // Altere para a página que deseja acessar
    } else if (emailInserido === "" || senhaInserida === "") {
        // Verifica se os campos estão vazios
        mensagemAviso.innerText = 'Por favor, preencha as informações!!';
    } else {
        // Se as credenciais estiverem erradas
        mensagemAviso.innerText = 'Credenciais incorretas, tente inserir novamente!!';
    }
}

function cadastroNovo() {
    const nomeUsuario = document.getElementById('nome').value;
    const emailInserido = document.getElementById('email').value;
    const senhaInserida = document.getElementById('senha').value;
    const senhaInseridaConfirmada = document.getElementById('senha1').value;

    // Acessa o elemento da mensagem
    const mensagemAviso = document.getElementById('mensagem');

    // Verificando se algum campo está vazio
    if (emailInserido === "" || senhaInserida === "" || senhaInseridaConfirmada === "" || nomeUsuario === "") {
        mensagemAviso.innerText = "Existem campos em branco que precisam ser preenchidos!";
        return;  // Impede a execução do restante do código
    } 
    // Verificando se as senhas não são iguais
    else if (senhaInserida !== senhaInseridaConfirmada) {
        mensagemAviso.innerText = "As senhas não são iguais, insira a mesma senha por favor!!";
        return;  // Impede a execução do restante do código
    }

    // Arrays para armazenar e-mails e senhas cadastrados
    const emailCadastrado = ["gcalixtocampos16@gmail.com"];
    const senhaCadastrada = ["Gui312025!"];

    // Verificando se o e-mail já está cadastrado
    for (let indice = 0; indice < emailCadastrado.length; indice++) {
        if (emailInserido === emailCadastrado[indice]) {
            mensagemAviso.innerText = `Já existe o email ${emailInserido} cadastrado no sistema`;
            return;  // Impede a execução do restante do código
        }

        // Verificando se a senha corresponde ao e-mail
        if (senhaInserida === senhaCadastrada[indice]) {
            mensagemAviso.innerText = `Já existe a senha ${senhaInserida} cadastrada no sistema`;
            return;  // Impede a execução do restante do código
        }
    }

    // Se tudo estiver certo, registra as informações
    emailCadastrado.push(emailInserido);
    senhaCadastrada.push(senhaInseridaConfirmada);

    // Mensagem de sucesso
    mensagemAviso.innerText = "Cadastro realizado com sucesso!";
    // Limpar os campos de entrada
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
    document.getElementById('senha1').value = "";
    window.location.href = "tela-principal.html";
}

