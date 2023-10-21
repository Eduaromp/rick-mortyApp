/*const apiR=async (pagina)=>{
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);

    data.results.map(item=>{
        document.write(item.image + " " +  item.name + " " + item.status + " " + item.gender + "<br>");
    })
}

apiR();*/

const charactersEl = document.getElementById('char');
const nameFilterEl = document.getElementById('name-filter');
const statusFilter = document.getElementById('status-filter');

async function getCharacters(name, status) {
    let url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

getCharacters();

async function displayCharacters(name, status) {
    const characters = await getCharacters(name, status);

    for (let character of characters) {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        card.innerHTML = `
              
              <div class="card mb-4 box-shadow">
              <img src="${character.image}"/>
              <p class="card-text"> Name: ${character.name}</p>
                <p class="card-text"> Status: ${character.status}</p>
                <p class="card-text">${character.species}</p>
                <div class="card-body">
                  <p class="card-text"></p>
                </div>
              </div>
        `;

        charactersEl.appendChild(card);

    }
}

displayCharacters();