$cats = 2;

var catPics = ['garfield.jpg', 'meowth.png', 'simba.png', 'sylvester.png', 'tom.png'];
var $container = $('.container');

function builder(cats) {
	for (var i = 0; i < cats; i++) {
		$container.append('<div class="catBox catBox' + i + '"><div class="counter' + i + '">Clicks: 0</div><img class="cat" src="img/' + catPics[Math.round(Math.random() * 4)] + '"></div>');
	};
};
builder($cats);
	
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