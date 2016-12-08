// Number of cats in main cat-clicker section displayed. Default = 1
var numberOfCatsDisplayed = 1;

// Array of all cat image names found in '/img' folder
var catPics = ['garfield.jpg', 'meowth.png', 'simba.png', 'sylvester.png', 'tom.png'];

var selector = $('.cat-selector');
var content = $('.content');
// var randInt = Math.round(Math.random() * 4)

// Builds list of cats to select from
function selectorBuilder() {
    catPics.forEach(function(cat,k) {
        selector.append('<div class="selection"><img class="icon' + k + '" src="img/' + cat + '"><h3 class="catName">' + cat.slice(0, -4) + '</h3></div>');
    });
};
selectorBuilder();

// Builds main cat-clicker counters
function counterBuilder(cats) {
    for (var i = 0; i < cats; i++) {
        content.append('<div class="catBox catBox' + i + '"><div class="counter' + i + '">Clicks: 0</div><img class="cat" src="img/' + catPics[i] + '"></div>');
    };
    for (var j = cats; j < catPics.length; j++) {
        content.append('<div class="catBox catBox' + j + '"><div class="counter' + j + '">Clicks: 0</div><img class="cat" src="img/' + catPics[j] + '"></div>');
        $('.catBox' + j).css('display', 'none');
    };
};
counterBuilder(numberOfCatsDisplayed);

// Click counter function
$('.catBox').click(function(e) {
    var counter = this.firstChild;
    var count = parseInt(counter.innerText.slice(8));
    var newCount = count + 1;
    var catNum = counter.className.slice(7);

    function addOne(catNum) {
        var string = $('.counter' + catNum);
        string.empty().append('Clicks: ' + newCount);
    };
    addOne(catNum);
});

// NEW Select new cat function
$('.selection').click(function(e) {
    $('.catBox').css('display', 'none');
    var num = e.currentTarget.firstChild.className.slice(4);
    $('.catBox' + num).css('display', 'flex');
});

// Reset counter
$('.reset').click(function(e) {
    for (var h = 0; h < catPics.length; h++) {
        function reset() {
           $('.counter' + h).empty().append('Clicks: 0');
        };
        reset();
    };
});