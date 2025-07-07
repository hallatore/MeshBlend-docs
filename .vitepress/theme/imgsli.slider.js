(function (imgsli) {
  var init = function (element, images, basePath) {
    var box = element.querySelector(".box");
    var sliderDiv = element.querySelector(".slider");
    var before = element.querySelector(".before");
    var after = element.querySelector(".after");
    var beforeSelect = element.querySelector(".beforeSelect");
    var afterSelect = element.querySelector(".afterSelect");
    var imgs = element.querySelectorAll("img");
    var follow = false;
    var isFullScreen = false;
    var isZoom = false;

    var beforeSelectChange = function (e) {
      selectChange(before.querySelector("img"), e.currentTarget.value);
    };

    var afterSelectChange = function (e) {
      selectChange(after, e.currentTarget.value);
    };

    var selectChange = function (element, index) {
      var image = images[index];
      element.setAttribute("src", image.id);
      history.replaceState(
        {},
        null,
        basePath + "/" + beforeSelect.value + "/" + afterSelect.value
      );
      drawImage();
    };

    var itemMove = function (e) {
      if (!follow) return;
      var x = e.pageX;

      if (e.touches && e.touches.length === 1) x = e.touches[0].pageX;

      if (x == null) return;

      e.preventDefault();
      var offsetLeft = box.getBoundingClientRect().left;
      var left = Math.max(x - offsetLeft, 0);
      var max = parseInt(window.getComputedStyle(box).width);

      if (left < 0 || max - left < 1) return;

      sliderDiv.style.left = Math.min(max, left) + "px";
      before.style.right = Math.min(max, max - left) + "px";
    };

    var itemMoveStart = function (e) {
      if (
        follow ||
        e.target.closest(".controls") != null ||
        e.target.closest("select") != null
      )
        return;

      if (e.pageX == null && (e.touches == null || e.touches.length > 1))
        return;

      e.preventDefault();
      follow = true;
      element.classList.add("sliding");
      itemMove(e);
    };

    var itemMoveStop = function (e) {
      if (!follow) return;
      e.preventDefault();
      follow = false;
      element.classList.remove("sliding");
    };

    var windowResize = function (e, ignoreReset) {
      if (ignoreReset === true) return;
      sliderDiv.style.left = "";
      before.style.right = "";
    };

    var enterFullscreen = function (e) {
      e.preventDefault();
      e.stopPropagation();
      (
        element.requestFullscreen ||
        element.mozRequestFullScreen ||
        element.msRequestFullscreen ||
        element.webkitRequestFullScreen
      ).call(element);
    };

    var exitFullscreen = function (e) {
      e.preventDefault();
      e.stopPropagation();
      (
        document.exitFullscreen ||
        document.msExitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen
      ).call(document);
    };

    var drawImage = function () {
      setTimeout(windowResize, 100);
      setTimeout(windowResize, 500);
      setTimeout(windowResize, 1000);
      setTimeout(windowResize, 2000);
    };

    var fullscreenChange = function () {
      isFullScreen =
        (document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement) === element;

      drawImage();
    };

    var zoomIn = function (e) {
      e.preventDefault();
      e.stopPropagation();
      element.classList.add("zoom");
    };

    var zoomOut = function (e) {
      e.preventDefault();
      e.stopPropagation();
      element.classList.remove("zoom");
    };

    var currentZoom = 1.0;
    var currentX = 0;
    var currentY = 0;
    var oldX = 0;
    var oldY = 0;

    var mousemoveEvent = function (event) {
      currentX = event.pageX - box.offsetLeft;
      currentY = event.pageY - box.offsetTop;
    };

    var zoomEvent = function (event) {
      event.preventDefault();
      var boxOffsetX = oldX > 0 ? oldX : currentX;
      var boxOffsetY = oldY > 0 ? oldY : currentY;

      var offsetX = (1.0 / box.clientWidth) * boxOffsetX;
      var offsetY = (1.0 / box.clientHeight) * boxOffsetY;

      oldX = currentX;
      oldY = currentY;

      currentZoom += event.deltaY * -0.005;
      currentZoom = Math.min(Math.max(1, currentZoom), 10);

      for (var i = 0; i < imgs.length; i++) {
        if (currentZoom > 1) {
          imgs[i].style.imageRendering = "pixelated";
          imgs[i].style.transform = "scale(" + currentZoom + ")";
          imgs[i].style.transformOrigin =
            offsetX * 100 + "% " + offsetY * 100 + "%";
          imgs[i].style.maxWidth = "unset";
        } else {
          imgs[i].style.imageRendering = null;
          imgs[i].style.transform = null;
          imgs[i].style.transformOrigin = null;
          imgs[i].style.maxWidth = null;
        }
      }
    };

    element.addEventListener("mousedown", itemMoveStart);
    window.addEventListener("mouseup", itemMoveStop);
    window.addEventListener("mousemove", itemMove);

    element.addEventListener("touchstart", itemMoveStart, { passive: true });
    window.addEventListener("touchend", itemMoveStop);
    window.addEventListener("touchmove", itemMove);

    // document.addEventListener("webkitfullscreenchange", fullscreenChange);
    // document.addEventListener("mozfullscreenchange", fullscreenChange);
    // document.addEventListener("fullscreenchange", fullscreenChange);

    // box.addEventListener("wheel", zoomEvent);
    // box.addEventListener("mousemove", mousemoveEvent);

    // if (element.querySelector(".zoom-in"))
    //   element.querySelector(".zoom-in").addEventListener("click", zoomIn);

    // if (element.querySelector(".zoom-out"))
    //   element.querySelector(".zoom-out").addEventListener("click", zoomOut);

    // if (element.querySelector(".fullscreen"))
    //   element
    //     .querySelector(".fullscreen")
    //     .addEventListener("click", enterFullscreen);

    // if (element.querySelector(".fullscreen-exit"))
    //   element
    //     .querySelector(".fullscreen-exit")
    //     .addEventListener("click", exitFullscreen);

    for (var i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("load", windowResize);
    }

    if (beforeSelect != null)
      beforeSelect.addEventListener("change", beforeSelectChange);

    if (afterSelect != null)
      afterSelect.addEventListener("change", afterSelectChange);

    window.addEventListener("resize", windowResize);
    window.addEventListener("orientationchange", function () {
      setTimeout(windowResize, 500);
    });
    windowResize();
  };

  imgsli.slider = function (elements, images, basePath) {
    for (var i = 0; i < elements.length; i++) {
      init(elements[i], images, basePath);
    }
  };

  setTimeout(function () {
    imgsli.slider(document.querySelectorAll(".ImageComparer"));
  }, 1000);
})(window.imgsli || (window.imgsli = {}));
