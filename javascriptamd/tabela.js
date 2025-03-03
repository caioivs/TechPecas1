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

function filtraTabelaVideo(){
    let filtro_video = document.getElementById("filtro_video").value
    let linha_2 = document.querySelectorAll("tbody tr");
    linhas.forEach(linha => {
        if (filtro_video === "todos" || linha.classList.contains(filtro_video)) {
            linha_2.style.display = "";
        } else {
            linha_2.style.display = "none";
        }
    });
}