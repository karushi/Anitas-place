
      $(document).ready(function() {
        $("button#hello").click(function() {
          $("ul").prepend("<li>Hello!</li>");
                 $("ul#webpage").prepend("<li>Why hello there!</li>");
                    $('li').css('background-color', 'red');
        });

        $("button#goodbye").click(function() {
          $("ul").prepend("<li>Goodbye!</li>");
        });

        $("button#stop").click(function() {
          $("ul").prepend("<li>Stop copying me!</li>");
        });
      })
