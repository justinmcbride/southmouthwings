$.getScript("bower_components/jssor-slider/js/jssor.slider.min.js")
  .done( function() {
    var options =
    {
      $AutoPlay: true,
      $AutoPlaySteps: 1,
      $AutoPlayInterval: 2000,
      $PauseOnHover: 1,
      $SlideDuration: 800,
      $MinDragOffsetToSlide: 20,
      $ArrowNavigatorOptions:
      {
        $Class: $JssorArrowNavigator$,
        $ChanceToShow: 1
      }
    };
    var slider = new $JssorSlider$( 'slider_container', options );
    // $("#slider_container").css("display", "block");
    function ScaleSlider() {
      var parentWidth = $("#slider_container").parent().width();
      if (parentWidth) {
        slider.$ScaleWidth(parentWidth);
      }
      else
        window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
  })
;