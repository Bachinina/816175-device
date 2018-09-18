  var slide1Button = document.querySelector(".slider__button-1");

  var slide1 = document.querySelector(".slide-1");

  var slide2Button = document.querySelector(".slider__button-2");

  var slide2 = document.querySelector(".slide-2");

  var slide3Button = document.querySelector(".slider__button-3");

  var slide3 = document.querySelector(".slide-3");

  var deliveryButton = document.querySelector(".services__button--delivery");

  var delivery = document.querySelector(".services__description--delivery");

  var warrantyButton = document.querySelector(".services__button--warranty");

  var warranty = document.querySelector(".services__description--warranty");

  var creditButton = document.querySelector(".services__button--credit");

  var credit = document.querySelector(".services__description--credit");

  var linkFeedback = document.querySelector(".contacts__button");

  var feedback = document.querySelector(".modal--feedback");

  var closeFeedback = feedback.querySelector(".close__button");

  var formFeedback = feedback.querySelector(".feedback");

  var emailFeedback = feedback.querySelector("[name=e-mail]");

  var linkMap = document.querySelector(".contacts__map");

  var map = document.querySelector(".modal--map");

  var bigMap = document.querySelector(".big-map");

  var closeMap = map.querySelector(".close__button");


  slide1Button.addEventListener("focus", function(evt) {
    evt.preventDefault();
    slide1.classList.remove("visually-hidden");
    slide2.classList.add("visually-hidden");
    slide3.classList.add("visually-hidden");
    slide1Button.classList.add("slider__button--active");
    slide2Button.classList.remove("slider__button--active");
    slide3Button.classList.remove("slider__button--active");
  });

  slide2Button.addEventListener("focus", function(evt) {
    evt.preventDefault();
    slide1.classList.add("visually-hidden");
    slide2.classList.remove("visually-hidden");
    slide3.classList.add("visually-hidden");
    slide1Button.classList.remove("slider__button--active");
    slide2Button.classList.add("slider__button--active");
    slide3Button.classList.remove("slider__button--active");
  });

  slide3Button.addEventListener("focus", function(evt) {
    evt.preventDefault();
    slide1.classList.add("visually-hidden");
    slide2.classList.add("visually-hidden");
    slide3.classList.remove("visually-hidden");
    slide1Button.classList.remove("slider__button--active");
    slide2Button.classList.remove("slider__button--active");
    slide3Button.classList.add("slider__button--active");
  });

   deliveryButton.addEventListener("focus", function(evt) {
    evt.preventDefault;
    delivery.classList.remove("visually-hidden");
    warranty.classList.add("visually-hidden");
    credit.classList.add("visually-hidden");
    deliveryButton.classList.add("services__button--active");
    warrantyButton.classList.remove("services__button--active");
    creditButton.classList.remove("services__button--active");
  });

  warrantyButton.addEventListener("focus", function(evt) {
    evt.preventDefault;
    delivery.classList.add("visually-hidden");
    warranty.classList.remove("visually-hidden");
    credit.classList.add("visually-hidden");
    deliveryButton.classList.remove("services__button--active");
    warrantyButton.classList.add("services__button--active");
    creditButton.classList.remove("services__button--active");
  });

  creditButton.addEventListener("focus", function(evt) {
    evt.preventDefault;
    delivery.classList.add("visually-hidden");
    warranty.classList.add("visually-hidden");
    credit.classList.remove("visually-hidden");
    deliveryButton.classList.remove("services__button--active");
    warrantyButton.classList.remove("services__button--active");
    creditButton.classList.add("services__button--active");
  });

  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-emergence");
    feedback.classList.remove("visually-hidden");
  });

  closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-emergence");
    feedback.classList.remove("modal-shake");
    feedback.classList.add("visually-hidden");
  });

  formFeedback.addEventListener("submit", function(evt){
    if (!emailFeedback.value) {
      evt.preventDefault();
      formFeedback.classList.remove("modal-shake");
      formFeedback.offsetWidth = formFeedback.offsetWidth;
      formFeedback.classList.add("modal-shake");
    }
  });

  linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("visually-hidden");
    bigMap.classList.add("visually-hidden");
  });

  closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("visually-hidden");
  });