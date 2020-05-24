/*** Initial Code ***/
clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
  '<div class="club-info">\n' +
  '<h2>' + name + '</h2>\n' +
  '<p>' + description + '</p>' +
  '</div>';

clubElement.innerHTML = `
  <img class="fan-art-club" src="${fanArt}" alt=FanArt">
  <div class="club-info">
    <h2>${name}</h2>
    <p>${description}</p>
  </div>`