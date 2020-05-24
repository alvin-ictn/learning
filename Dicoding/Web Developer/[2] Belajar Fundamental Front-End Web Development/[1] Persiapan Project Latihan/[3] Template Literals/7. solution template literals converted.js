clubElement.innerHTML = `
   <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
   <div class="club-info">
       <h2>${name}</h2>
       <p>${description}</p>
   </div>`;

clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;

this.onFailed(`${keyword} is not found`);