function buscaPaises(){
    var url = "https://restcountries.com/v3.1/all";
    fetch(url).then(data => data.json())
        .then(paises =>{
            console.log(paises);
            var html = "";

            for (let i = 0; i < paises.length; i++) {
                const pais = paises[i];

                var card_padrao = `
                <div class="col-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="${pais.flags.png}" class="card-img-top" alt="Bandeira de ${pais.name.common}">
                    <div class="card-body">
                      <h5 class="card-title">${pais.translations.por.common}</h5>
                      <p class="card-text">Continente: ${pais.continents[0]}</p>
                    </div>
                  </div>
            </div>
            `;

            html += card_padrao;
            }

            document.getElementById('linha').innerHTML = html;
        })
        console.log(url);
}


buscaPaises();