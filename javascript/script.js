let nome = document.getElementById("nome").value;

function totaliza() {
    let planoQuadrimestral = document.form.planos[1]
    let planoAnual = document.form.planos[2]
    let planoMensal = document.form.planos[0]
    let premiere1 = document.form.premiere[0]
    let premiere2 = document.form.premiere[1]
    let total = 0.00;
    let campoTotal = document.form.total
    if (planoMensal.checked)
        total = total + 85.00;
    if (planoQuadrimestral.checked)
        total = total + 300.00 / 4;
    if (planoAnual.checked)
        total = total + 600.00 / 12;
    if (premiere1.checked)
        total = total + 60.00;
    if (premiere2.checked)
        total = total + 80.00;
    campoTotal.value = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function abrirModalSaibaMais() {
    let campoModal = document.querySelector("#modalPlanos")
    campoModal.style.left = '0vw'
}

function fecharModalSaibaMais() {
    let campoModal = document.querySelector("#modalPlanos")
    campoModal.style.left = '200vw'
}

function validar_nome() {
    let value = document.getElementById("nome").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
        alert('Insira um nome válido.');
        document.form.nome.focus();
      
    }
   
}

function validar_numero() {
    let value = document.getElementById("cel").value;
    if (value == "" || value.length != 15) {
        alert('Insira um número válido.');
        document.form.cel.focus();
        
    }

}

function validarEmail() {
    let email = document.getElementById("email")
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
      
    }
    else {
        alert('É necerrásio inserir um email válido.')
    }
}

function validar_cpf() {
    let value = document.getElementById("cpf").value;
    if (value.length != 14) {
        alert('É necessário insirir um CPF válido.')
    }
}

function validar_data(){
    let data = document.getElementById("nascimento").value; // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    let data_array = data.split("-"); // quebra a data em array
    
    // para o IE onde será inserido no formato dd/MM/yyyy
    if(data_array[0].length != 4){
       data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
    }
    let hoje = new Date();
    let nasc  = new Date(data);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    let mes = hoje.getMonth() - nasc.getMonth();
    if (mes < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
    
    if(idade < 18 || data==""){
       alert("Pessoas menores de 18 não podem se cadastrar.");
       
    }
 
    if(idade >= 18){
      
    }
 }

 function validarRadios(){
    let planoQuadrimestral = document.form.planos[1]
    let planoAnual = document.form.planos[2]
    let planoMensal = document.form.planos[0]
    let premiere1 = document.form.premiere[0]
    let premiere2 = document.form.premiere[1]
    let sexoM = document.form.sexo[0]
    let sexoF = document.form.sexo[1]

    if(planoMensal.checked || planoAnual.checked || planoQuadrimestral.checked){

    } else{
        alert('Um dos planos precisa ser escolhido.')
    
    }

    if (premiere1.checked || premiere2.checked) {
        
    } else{
        alert('O premier deve ser escolhido.')
    }

    if (sexoM.checked || sexoF.checked) {
        
    } else{
        alert('Um dos gêneros precisa ser escolhido.')
    }

}

function validarLogin() {
    let usuario = document.getElementById("login").value
    let senha = document.getElementById("senha").value

    if (usuario == "Usuario" && senha == "Abc$123") {
        
    } else{
        alert('O usuário está inválido!')
    }
}

function retornarJSON() {

    let sexoM = document.form.sexo[0]
    let sexoF = document.form.sexo[1]

    if (sexoM.checked) {
        let sexo = sexoM.value;
    } else{
        let sexo = sexoF.value
    }

    let planoQuadrimestral = document.form.planos[1]
    let planoAnual = document.form.planos[2]
    let planoMensal = document.form.planos[0]
    let planoEscolhido
    if(planoQuadrimestral.checked){
        planoEscolhido = planoQuadrimestral.value
    }
    if(planoAnual.checked){
        planoEscolhido = planoAnual.value
    }
    if(planoMensal.checked){
        planoEscolhido = planoMensal.value
    }

    let premiere1 = document.form.premiere[0]
    let premiere2 = document.form.premiere[1]
    let premierEscolhido
    if(premiere1.checked){
        premierEscolhido = premiere1.value
    }
    if(premiere2.checked){
        premierEscolhido = premiere2.value
    }

    let select = document.getElementById('TimePreferido');
	let timePreferido = select.options[select.selectedIndex].value;

    let totalMensal = document.form.total.value

    let usuario = document.getElementById("login").value
    let senha = document.getElementById("senha").value

    const cliente = {
        Nome: document.getElementById("nome").value,
        CPF:  document.getElementById("cpf").value,
        Email: document.getElementById("email").value,
        Numero_De_Celular: document.getElementById("cel").value,
        Data_De_Nascimento: document.getElementById("nascimento").value,
        Salario: document.getElementById("salario").value,
        Genero: sexo,
        Plano_Escolhido: planoEscolhido,
        Premier_Escolhido: premierEscolhido,
        Time_Do_Coracao:  timePreferido,
        Total_A_Pagar_Mensalmente: totalMensal,
        Login: usuario,
        Senha: senha
    }



    alert(JSON.stringify(cliente))
}

function tudoCerto(){
    alert('Cadastro Válido, retornaremos um JSON!')
        retornarJSON()
}

function validar_tudo() {
    validar_cpf() 
    validar_nome() 
    validar_numero() 
    validarEmail() 
    validar_data() 
    validarRadios() 
    validarLogin() 
    tudoCerto()
}


