function UpdateOutput()
{
  var inside = '<html><head><style type="text/css">' + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + '</body></html>'  ;
  $("iframe").contents().find("html").html(inside);

  document.getElementById('outputPanel').contentWindow.eval( document.getElementById("javascriptPanel").value );
}

  $("#html, #css, #javascript, #output").button();

  $('#css, #javascript, #html, #output').click( function()
                                {
                                  $(this).toggleClass('active');

                                  var id = $(this).attr('id');  //it has no #

                                  $( '#' + id + 'Panel').toggleClass('hidden');  // or simply use
                                                                    //built in toggle() as $( '#' + id + 'Panel').toggle()

                                  $(".panel").width( window.innerWidth /(4 - ( $('.hidden').length ) ) - 8);
                                });

  $('.panel').height( window.innerHeight - $("#CodeRunner").height() - 25);

  $(".panel").width( window.innerWidth/2 - 8);

  UpdateOutput();

  $("textarea").on('change keyup paste', function() {
                                                      UpdateOutput();
                                                      });
