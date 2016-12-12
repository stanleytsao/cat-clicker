var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Garfield');
    this.imgSrc = ko.observable('img/garfield.jpg');
    // this.imgAttribution = ko.observable();

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel())