function filtrarTabela(filtroId, tabelaId) {
    let filtro = document.getElementById(filtroId).value;
    let linhas = document.querySelectorAll(`#${tabelaId} tbody tr`);
    
    linhas.forEach(linha => {
        if (filtro === "todos" || linha.classList.contains(filtro)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
}

