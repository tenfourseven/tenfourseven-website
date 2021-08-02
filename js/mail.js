let mail = document.querySelector('.mail');
let link = 'mailto:';
let prefix = 'info';
let domain = 'tenfourseven.net';
mail.innerHTML = prefix + '@' + domain;
mail.href = link + prefix + '@' + domain;


