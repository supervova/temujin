/* eslint-disable no-undef */

ymaps.ready(() => {
  const myMap = new ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 9,
  }, {
    searchControlProvider: 'yandex#search',
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Тимуджин Групп',
    balloonContent: 'Москва, ул. Подъемная, дом 12, стр. 1, кабинет 504',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '/img/components/section/map-pin.svg',
    // Размеры метки.
    iconImageSize: [58, 84],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-29, -84],
  });

  myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
});
