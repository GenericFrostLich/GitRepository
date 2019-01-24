const disableNumberifyInVisibleElements = [
    '#passage-hairdressers-seat',
    '#passage-start',
    '#passage-wardrobe',
    '#passage-cheats',
    '#passage-testing-room'
];

let currentLinks = [];

function getPrettyKeyNumber(counter) {
    var str = "";

    if (counter > 30)
        str = "Ctrl + ";
    else if (counter > 20)
        str = "Alt + ";
    else if (counter > 10)
        str = "Shift + ";

    if (counter % 10 === 0)
        str += "0";
    else if (counter < 10)
        str += counter;
    else {
        let c = Math.floor(counter / 10);
        str += (counter - (10 * c)).toString();
    }

    return str;
}

$(document).on(':passagerender', (ev) => {
    currentLinks = [];

    for (var i = 0; i < disableNumberifyInVisibleElements.length; i++) {
        if ($(ev.content).find(disableNumberifyInVisibleElements[i]).length || $(ev.content).is(disableNumberifyInVisibleElements[i]))
            return; // simply skip this render
    }

    currentLinks = $(ev.content).find(".link-internal"); // wanted to use .macro-link, but wardrobe and something else doesn't get selected, lmao

    $(currentLinks).each(function(i, el) {
        $(el).html("(" + getPrettyKeyNumber(i + 1) + ") " + $(el).html());
    });
});

$(document).on('keyup', (ev) => {
    if ((ev.keyCode >= 48 && ev.keyCode <= 57) || (ev.keyCode >= 96 && ev.keyCode <= 105)) {
        const fixedKeyIndex = (ev.keyCode < 60 ? ev.keyCode - 48 : ev.keyCode - 96);

        let requestedLinkIndex = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8][fixedKeyIndex];

        if (ev.ctrlKey)
            requestedLinkIndex += 30;
        else if (ev.altKey)
            requestedLinkIndex += 20;
        else if (ev.shiftKey)
            requestedLinkIndex += 10;

        if ($(currentLinks).length >= requestedLinkIndex + 1)
            $(currentLinks[requestedLinkIndex]).click();
    }
});
