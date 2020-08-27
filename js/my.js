function renderSecondaryPost (item, index, type=2) {
  if (type === 1) { // рендер новости первого уровня
    const result = $();
    const img = $('<div></div>').addClass('img-bg').css({'background-image': `url(${item.img})`});

    const contents = $('<div>').addClass('contents');
    contents
      .append($('<span>').addClass('caption').text('Editor\'s Pick'))
      .append($('<h2>'))
      .append($('<p>').addClass('mb-3'))
      .append(renderAuthor(item));

    result.add(img);
    result.add(contents);

    return result;

  } else if (type === 2) { // рендер новости второго уровня
    const contents = $('<div>').addClass('post-entry-1');

    const img = $('<img>').addClass('img-fluid').attr('src', item.img);
    const a = $('<a>').attr('href', item.href || "#123");
    a.append(img)

    contents
      .append(a)
      .append($('<h2>').text(item.header))
      .append($('<p>').addClass('mb-3').text(item.text.substr(0, 100) + '...'))
      .append(renderAuthor(item));
    return contents;
  } else { // рендер новостей третьего уровня
    const img = $('<div></div>').css({backgroundImage: `url(${item.img})`}).addClass('thumbnail');
    const contents = $('<div>');
    contents
      .addClass('contents')
      .append($('<h2>').text(item.header))
      .append(renderAuthor(item));
    return $().add(img).add(contents);

  }

}

function renderAuthor (item) {
  const postMeta = $('<div>').addClass('post-meta');
  const author = $('<a>').text(item.author).attr('href','#');

  const themes = getTheme$(item.theme);
  console.log('> themes, ', themes)
  postMeta
    .append($('<span>').addClass('d-block').append(author).append(` in `).append(themes))
    .append(creatReadTime(item.dt, item.timeRead));

  return postMeta;
}

// function getTheme (needed) {
//     let res = '';
//     needed.forEach(function (item) {
//         res += THEMES[item] + ' ';
//     });
// }

function getTheme$ (needed) {
  let res = $();

  needed.forEach(function (item, index) {
    const tegA = $('<a>').text(THEMES[item]).attr('href','#123');
    res = res.add(tegA);
    if (index !== needed.length-1) {
      res = res.add($('<span>, </span>'));
    }
  });
  return res;
}

function creatReadTime (date, read) {
  let res = $('<span>').addClass('date-read').text(date);
  const point = $('<span>').addClass('mx-1').text('•');
  const star = $('<span>').addClass('icon-star2');
  res.append(point).append(`${read} min read`).append(star);
  return res;
}

function createNews3 (list,start,length) {

  let res = $(); //bg-light
  for (let i = start; i < start + length; i++  ) {

    const item = $('<div>').addClass('post-entry-2 d-flex');
    const createNews = renderSecondaryPost(list[i],0,3);
    res = res.add(item.append(createNews));
  }
  return res;
}
