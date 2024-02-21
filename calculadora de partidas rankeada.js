function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    function determinarNivel(vitorias) {
        const limites = [10, 20, 50, 80, 90, 100];
        const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
        let nivel = "Imortal"; // Assume Imortal como padrão

        for (let i = 0; i < limites.length; i++) {
            if (vitorias < limites[i]) {
                nivel = niveis[i];
                break;
            }
        }

        return nivel;
    }

    let nivel = determinarNivel(vitorias);

    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

console.log(calcularNivel(95, 4)); // Exemplo de uso da função
        