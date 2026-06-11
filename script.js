// Aguarda o documento HTML carregar totalmente
document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DO MODO ESCURO ---
    const botaoTema = document.getElementById("btn-tema");
    
    // Função que alterna as classes de cor do CSS
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("modo-escuro");
        
        // Altera o texto do botão para guiar o usuário
        if (document.body.classList.contains("modo-escuro")) {
            botaoTema.textContent = "☀️ Modo Claro";
        } else {
            botaoTema.textContent = "🌓 Modo Escuro";
        }
    });

    // --- LÓGICA DO SIMULADOR SUSTENTÁVEL ---
    const botaoCalcular = document.getElementById("btn-calcular");
    const caixaResultado = document.getElementById("resultado-caixa");

    botaoCalcular.addEventListener("click", function() {
        // Captura o dado digitado pelo usuário
        const hectares = parseFloat(document.getElementById("input-hectares").value);

        // Validação simples para evitar erros ou números vazios
        if (isNaN(hectares) || hectares <= 0) {
            alert("Por favor, digite um número válido de hectares.");
            return;
        }

        // Processamento de dados: assume-se uma economia média de 15.000 litros por hectare/ano
        const litrosEconomizados = hectares * 15000;

        // Manipulação do DOM para exibir os novos valores na tela
        document.getElementById("res-nome").textContent = hectares;
        document.getElementById("res-agua").textContent = litrosEconomizados.toLocaleString("pt-BR");

        // Remove a classe que escondia a caixa de resposta
        caixaResultado.classList.remove("oculto");
    });
});
