
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.visibility = 'hidden';
});

const MIN_LOADING_TIME = 2000; 


function removeLoader() {
  const loader = document.querySelector('.pageloader');
  if (loader) {
    loader.style.display = 'none';
    document.body.style.visibility = 'visible';
    InitcssFix();
  }
}


window.addEventListener('load', function() {
  const loadTime = Date.now() - performance.timing.navigationStart;
  const remainingTime = Math.max(0, MIN_LOADING_TIME - loadTime);

  setTimeout(removeLoader, remainingTime);
});

jQuery(document).ready(function ($) {
  "use strict";
  InitcssFix();

  /* ===================
  Animated Items
  =================== */
  $(".animated").appear(function () {
    var elem = $(this);
    var animation = elem.data("animation");
    if (!elem.hasClass("visible")) {
      var animationDelay = elem.data("animation-delay");
      if (animationDelay) {
        setTimeout(function () {
          elem.addClass(animation + " visible");
        }, animationDelay);
      } else {
        elem.addClass(animation + " visible");
      }
    }
  });

  /* =============================
  Text Slider
  ============================= */
  $(".text-slider").easyTicker({
    direction: "up",
    speed: "slow",
    interval: 3000,
    height: "auto",
    visible: 1,
    mousePause: 0,
  });

  /* =============================
  Carousel Slider
  ============================= */
  $("#app-screenshot").owlCarousel({
    items: 3,
    lazyLoad: true,
    autoPlay: false,
    navigation: true,
    navigationText: [
      '<i class="fa fa-chevron-left color-grey"></i>',
      '<i class="fa fa-chevron-right color-grey"></i>',
    ],
    pagination: false,
    itemsCustom: false,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
  });

  /* =============================
  Services Carousel Slider
  ============================= */
  $("#awesome-services").owlCarousel({
    items: 3,
    lazyLoad: true,
    autoPlay: true,
    navigation: false,
    pagination: false,
    itemsCustom: false,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [480, 1],
  });

  // Menus hide after click on mobile devices
  $(".nav li a").click(function () {
    $(".navbar-collapse").removeClass("in");
    return false;
  });

  /* =============================
  Contact Form Validation
  ============================= */
  $("#contactform").bootstrapValidator({
    message: "",
    feedbackIcons: {
      valid: "fa fa-check",
      invalid: "fa fa-times",
      validating: "fa fa-refresh",
    },
    fields: {
      contact_name: {
        validators: {
          notEmpty: {
            message: "",
          },
        },
      },
      contact_email: {
        validators: {
          notEmpty: {
            message: "",
          },
          emailAddress: {
            message: "",
          },
        },
      },
      contact_message: {
        validators: {
          notEmpty: {
            message: "",
          },
        },
      },
    },
    submitHandler: function (validator, form, submitButton) {
      var data = $("#contactform").serialize();

      $.ajax({
        type: "POST",
        url: "process.php",
        data: $("#contactform").serialize(),
        success: function (msg) {
          $(".gk-form-message").html(msg);
          $(".gk-form-message").show();
          submitButton.removeAttr("disabled");
          resetForm($("#contactform"));
        },
        error: function (msg) {
          $(".gk-form-message").html(msg);
          $(".gk-form-message").show();
          submitButton.removeAttr("disabled");
          resetForm($("#contactform"));
        },
      });

      return false;
    },
  });

  $("#subscribe").bootstrapValidator({
    message: "",
    feedbackIcons: {
      valid: "fa fa-check",
      invalid: "fa fa-times",
      validating: "fa fa-refresh",
    },
    fields: {
      subscribe_email: {
        validators: {
          notEmpty: {
            message: "",
          },
        },
      },
    },
    submitHandler: function (validator, form, submitButton) {
      var data = $("#subscribe").serialize();

      $.ajax({
        type: "POST",
        url: "subscribe.php",
        data: $("#subscribe").serialize(),
        success: function (msg) {
          $(".gk-form-message-subscribe").html(msg);
          $(".gk-form-message-subscribe").show();
          submitButton.removeAttr("disabled");
          resetForm($("#subscribe"));
        },
        error: function (msg) {
          $(".gk-form-message-subscribe").html(msg);
          $(".gk-form-message-subscribe").show();
          submitButton.removeAttr("disabled");
          resetForm($("#subscribe"));
        },
      });

      return false;
    },
  });

  function resetForm($form) {
    $form
      .find("input:text, input:password, input, input:file, select, textarea")
      .val("");
    $form
      .find("input:radio, input:checkbox")
      .removeAttr("checked")
      .removeAttr("selected");
    $form
      .find(
        "input:text, input:password, input, input:file, select, textarea, input:radio, input:checkbox"
      )
      .parent()
      .find(".form-control-feedback")
      .hide();
  }

  /* =============================
  Count Section
  ============================= */
  $(".count-number").appear(function () {
    $(this).each(function () {
      var datacount = $(this).attr("data-count");
      $(this).find(".counter").delay(6000).countTo({
        from: 10,
        to: datacount,
        speed: 3000,
        refreshInterval: 50,
      });
    });
  });

  /* ===================
  Video Script
  =================== */
  $(".player").mb_YTPlayer();
});

$(window).resize(function () {
  "use strict";
  InitcssFix();
});

/* ===============================
 CSS Fix for Background Shapes
=============================== */
function InitcssFix() {
  var width = $(window).width();

  if (width >= 1480 && width < 1600) {
    $(".wrapper-class").addClass("after-1500");
    $(".wrapper-class").removeClass("after-1600");
  } else if (width <= 1480) {
    $(".wrapper-class").removeClass("after-1500");
  }
}