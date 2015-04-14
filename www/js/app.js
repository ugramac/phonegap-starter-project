$(function () {
  "use strict";

  $('.next-window-btn').click(function () {
    $('.list-view').hide();
    $('.card-view').show();
  });

  $('.back-btn').click(function () {
    $('.card-view').hide();
    $('.list-view').show();
  });
});
