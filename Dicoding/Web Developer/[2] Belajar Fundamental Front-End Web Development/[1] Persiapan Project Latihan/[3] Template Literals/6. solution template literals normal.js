clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
  '<div class="club-info">\n' +
  '<h2>' + name + '</h2>\n' +
  '<p>' + description + '</p>' +
  '</div>';

clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';              
          
this.onFailed(keyword + " is not found");