/*global $ */

$(document).ready(function () {
  $(".box").animate(
    {
      top: "100px",
    },
    1500,
    function () {
      $(".box").animate(
        {
          width: "+=120px",
        },
        1000,
        function () {
          $(".box").animate(
            {
              height: "+=450px",
            },
            1000,
            function () {
              $(".box").animate(
                {
                  borderRadius: "10px",
                },
                1000,
                function () {
                  $(".avatar").fadeIn(1000, function () {
                    $("h1").slideDown(1100, function () {
                      $(".text").slideDown(1200, function () {
                        $(".form-text").fadeIn(1300, function () {
                          $(".pass").slideDown(1300, function () {
                            $(".form-pass").fadeIn(1400, function () {
                              $(".log").fadeIn(1600, function () {
                                $("a").fadeIn(1000, function () {
                                  $("a").animate(
                                    {
                                      left: "220px",
                                    },
                                    1300
                                  );
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }
              );
            }
          );
        }
      );
    }
  );
});
