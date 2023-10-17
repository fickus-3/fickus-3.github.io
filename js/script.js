let lastScroll = 0;
const header = document.querySelector('.header');

const scrollposition = () => window.pageYoffset|| document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide');


window.addEventListener('scroll', () => {

  if(scrollposition() > lastScroll && !containHide()) {
    header.classList.add('hide');
    console.log('down');
  }else if(scrollposition() < lastScroll && containHide()) {
    console.log('up');
    header.classList.remove('hide');
  }
  lastScroll = scrollposition();
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  });

  $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
  });
  
  $('.modal_close').on('click', function() {
      $('.overlay, #consultation, #thanks').fadeOut('slow');
  });

  $("form").each(function () {
      $(this).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          number: "required",
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
          number: "Пожалуйста, введите свой телефон",
        },
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: $(form).attr('action'),
            data: $(form).serialize()
          }).done(function () {
            $(form).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $(form).trigger('reset');
          });
          return false;
        }
      });
  });

  $('input[name=number]').mask("+7(999)-999-99-99");
  

  new WOW().init();

});