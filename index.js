(function () {
    var $doc = document;
    var $resetBtn = $doc.querySelector(".bl_resetBtn");
    var $scoreLeft = $doc.querySelector("#js-scoreLeft");
    var $scoreRight = $doc.querySelector("#js-scoreRight");
    var $leftMinusBtn = $doc.querySelector("#js-leftMinusBtn");
    var $leftPlusBtn = $doc.querySelector("#js-leftPlusBtn");
    var $rightMinusBtn = $doc.querySelector("#js-rightMinusBtn");
    var $rightPlusBtn = $doc.querySelector("#js-rightPlusBtn");
    var Counter = /** @class */ (function () {
        function Counter() {
            this.reset();
        }
        Counter.prototype.reset = function () {
            $scoreLeft.textContent = "0";
            $scoreRight.textContent = "0";
        };
        Counter.prototype.countUp = function (element) {
            element.textContent++;
        };
        Counter.prototype.countDown = function (element) {
            if (element.textContent == 0)
                return;
            element.textContent--;
        };
        return Counter;
    }());
    var counter = new Counter();
    $resetBtn.addEventListener("click", function () {
        counter.reset();
    });
    $leftMinusBtn.addEventListener("click", function () {
        counter.countDown($scoreLeft);
    });
    $leftPlusBtn.addEventListener("click", function () {
        counter.countUp($scoreLeft);
    });
    $rightMinusBtn.addEventListener("click", function () {
        counter.countDown($scoreRight);
    });
    $rightPlusBtn.addEventListener("click", function () {
        counter.countUp($scoreRight);
    });
})();
