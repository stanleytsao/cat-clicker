$cats = 2;

var catPics = ['garfield.jpg', 'meowth.png', 'simba.png', 'sylvester.png', 'tom.png'];
var $selector = $('.cat-selector');
var $content = $('.content');

function selectorBuilder() {
	

	catPics.forEach(function (cat) {
		$selector.append('<div class="selection"><img class="icon" src="img/' + cat + '"><h3 class="catName">' + cat.slice(0,-4) + '</h3></div>');
	})
};
selectorBuilder();

function counterBuilder(cats) {
	for (var i = 0; i < cats; i++) {
		$content.append('<div class="catBox catBox' + i + '"><div class="counter' + i + '">Clicks: 0</div><img class="cat" src="img/' + catPics[Math.round(Math.random() * 4)] + '"></div>');
	};
};
counterBuilder($cats);
	
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