function renderSecondaryPost (item, index, type=2) {
    if (type === 2) {
        const contents = $('<div>').addClass('contents');
        contents
            .append($('<span>').addClass('caption'))
            .append($('<h2>'))
            .append($('<p>').addClass('mb-3'))
            .append(renderAuthor(item));
        return contents;
    } else {
        //;
    }

}

function renderAuthor (item) {
    const postMeta = $('<div>').addClass('post-meta');
    const author = $('<a>').text(item.author).attr('href','#');

        postMeta
        .append($('<span>').addClass('d-block').append(author).append(` in `).append(getTheme$(item.theme)))
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
        const tegA = $('<a>').text(THEMES[item]).attr('href','#');
        if (index !== needed.length-1) {
            tegA.text(' ');
        }
        res.add(tegA);
    });
    return res;
}

function creatReadTime (date, read) {
    let res = $('<span>').addClass('date-read').text(date);
    const point = $('<span>').addClass('mx-1').text('&bullet;');
    const star = $('<span>').addClass('icon-star2');
    res.append(point).append(`${read} min read`).append(star);
    return res;
}