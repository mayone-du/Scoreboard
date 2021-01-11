(() => {

  const $doc = document;
  const $resetBtn = $doc.querySelector(".bl_resetBtn");
  const $scoreLeft = $doc.querySelector("#js-scoreLeft");
  const $scoreRight = $doc.querySelector("#js-scoreRight");
  const $leftMinusBtn = $doc.querySelector("#js-leftMinusBtn");
  const $leftPlusBtn = $doc.querySelector("#js-leftPlusBtn");
  const $rightMinusBtn = $doc.querySelector("#js-rightMinusBtn");
  const $rightPlusBtn = $doc.querySelector("#js-rightPlusBtn");
  
  class Counter {
    constructor() {
      this.reset();
    }

    reset() {
      $scoreLeft.textContent = "0";
      $scoreRight.textContent = "0";
    }

    countUp(element: any) {
      element.textContent++;
    }

    countDown(element: any) {
      if (element.textContent == 0) return;
      element.textContent--;
    }

  }

  const counter = new Counter();

  $resetBtn.addEventListener("click", function() {
    counter.reset();
  })


  $leftMinusBtn.addEventListener("click", function() {
    counter.countDown($scoreLeft);
  })
  $leftPlusBtn.addEventListener("click", function() {
    counter.countUp($scoreLeft);
  })
  $rightMinusBtn.addEventListener("click", function() {
    counter.countDown($scoreRight);
  })
  $rightPlusBtn.addEventListener("click", function() {
    counter.countUp($scoreRight);
  })



})();