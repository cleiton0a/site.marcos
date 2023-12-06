fetch('./foto.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    const container = document.querySelector('.album.py-5.bg-body-tertiary'); // Seleciona o contêiner onde os cards serão adicionados

    data.foto.forEach(photo => {
      const card = document.createElement('div'); // Cria um novo card
      card.classList.add('card', 'shadow-sm', 'image-container'); // Adiciona classes ao card

      const img = document.createElement('img');
      img.src = `${data.pasta}/${photo.imagem}`;
      img.alt = photo.titulo;
      img.classList.add('bd-placeholder-img', 'card-img-top');
      img.width = '1000%';
      img.height = '225';

      const cardBody = document.createElement('div'); // Cria um corpo para o card
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h5'); // Cria um título para o card
      cardTitle.classList.add('card-title');
      cardTitle.textContent = photo.titulo;

      cardBody.appendChild(cardTitle); // Adiciona o título ao corpo do card
      card.appendChild(img); // Adiciona a imagem ao card
      card.appendChild(cardBody); // Adiciona o corpo ao card

      container.appendChild(card); // Adiciona o card ao contêiner
    });
  })
  .catch(error => {
    console.error('Houve um erro ao carregar o arquivo JSON:', error);
  });
