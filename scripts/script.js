$(document).ready(function() {
   var quote = "";

   function getQuote(){
     $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data){
       quote = "<blockquote class = 'blockquote-reverse'>"
       quote += "<strong><p>" + data.quoteText + "</p></strong>";
       quote += "<strong><footer>" + data.quoteAuthor + "</footer></strong";
       quote += "</blockquote>";
       $("#textQuote").html(quote);
       $("a").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + data.quoteText + data.quoteAuthor);
   });
  }

  getQuote();

  $("#newQuote").click(function(){
    $("#textQuote").fadeOut(1000, function(){
      getQuote();
    });
    $("#textQuote").fadeIn(1000);
  });
});
