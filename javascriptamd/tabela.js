function filtrarTabela() {
    let filtro = document.getElementById("filtro").value;
    let linhas = document.querySelectorAll("tbody tr");
    
    linhas.forEach(linha => {
        if (filtro === "todos" || linha.classList.contains(filtro)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
}