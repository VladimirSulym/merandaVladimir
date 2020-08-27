function renderSecondaryPost (item, index, type=2) {
  if (type === 1) { // рендер новости первого уровня
    const result = $();
    const img = $('<div></div>').addClass('img-bg').css({
      'background-image': item.img,
    });

    const contents = $('<div>').addClass('contents');
    contents
      .append($('<span>').addClass('caption').text('Editor\'s Pick'))
      .append($('<h2>'))
      .append($('<p>').addClass('mb-3'))
      .append(renderAuthor(item));

    result.add(img);
    result.add(contents);
    $('#news1').append('<h1>test</h1>');
    console.log('>> news1: ', $('#news1'))
    console.log('>> renderSecondaryPost: ', contents, result.length)

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
        //;
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
    console.log('THEME', item, THEMES[item])

    const tegA = $('<a>').text(THEMES[item]).attr('href','#123');

    console.log('>> tegA', res.length)
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
