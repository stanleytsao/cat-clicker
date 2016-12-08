$cats = 1;

var catPics = ['garfield.jpg', 'meowth.png', 'simba.png', 'sylvester.png', 'tom.png'];
var $selector = $('.cat-selector');
var $content = $('.content');

// Builds list of cats to select from
function selectorBuilder() {
    catPics.forEach(function(cat) {
        $selector.append('<div class="selection"><img class="icon" src="img/' + cat + '"><h3 class="catName">' + cat.slice(0, -4) + '</h3></div>');
    });
};
selectorBuilder();

// Builds main cat-clicker counters
function counterBuilder(cats) {
    for (var i = 0; i < cats; i++) {
        $content.append('<div class="catBox catBox' + i + '"><div class="counter' + i + '">Clicks: 0</div><img class="cat" src="img/' + catPics[Math.round(Math.random() * 4)] + '"></div>');
    };
};
counterBuilder($cats);

// Click counter function
$('.catBox').click(function(e) {
    var $counter = this.firstChild;
    var $count = parseInt($counter.innerText.slice(8));
    var $newCount = $count + 1;
    var $catNum = $counter.className.slice(7);

    function addOne(catNum) {
        var $string = $('.counter' + catNum);
        $string.empty().append('Clicks: ' + $newCount);
    };
    addOne($catNum);
});

// Select new cat function
$('.selection').click(function(e) {
    var $selectedCat = this.children[0].src;
    var $lastBox = $content["0"].lastChild;

    $lastBox.remove();

    function change(selectedCat) {
        for (i = $cats; i > 1; i--) {
            $oldBox = $content["0"].children[i - 2];
            $oldCounter = $oldBox.firstChild;

            function moveDown() {
                var $newBoxClass = $oldBox.className.slice(0, -1) + (i - 1);
                var $newBox = $oldBox.className = $newBoxClass;
                var $newCounterClass = $oldCounter.className.slice(0, -1) + (i - 1);
                var $newCounter = $oldCounter.className = $newCounterClass;
            };
            moveDown();


        };

        $content.prepend('<div class="catBox catBox0"><div class="counter0">Clicks: 0</div><img class="cat" src="' + selectedCat + '"></div>');
    }
    change($selectedCat);

    $('.catBox0').click(function(e) {
    var $counter = this.firstChild;
    var $count = parseInt($counter.innerText.slice(8));
    var $newCount = $count + 1;
    var $catNum = $counter.className.slice(7);

    function addOne(catNum) {
        var $string = $('.counter' + catNum);
        $string.empty().append('Clicks: ' + $newCount);
    };
    addOne($catNum);
});
});


