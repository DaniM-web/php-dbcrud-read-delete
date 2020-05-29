function init() {

  getPaganti();

}

function getPaganti() {

  $.ajax({
    url: 'getPaganti.php',
    method: 'GET',
    success: function (data) {
      console.log(data);
      var source = $('#paganti-template').html();
      var template = Handlebars.compile(source);

      for (var dati of data) {
        var paganti = dati;
        var compiled = template(paganti);

        $('.paganti').append(compiled);
      }
    },
    error: function (err) {
      console.error(err);

    }
  })
}

$(document).ready(init);
