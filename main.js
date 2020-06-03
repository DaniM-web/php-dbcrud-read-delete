function init() {

  getPaganti();
  $('.paganti').on('click','.delete', removeElement)

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

function removeElement() {
 var bin = $(this);
 var container = bin.parent();



 var id = container.data('id');

$.ajax({
  url: 'removePaganti.php',
  method: 'POST',
  data: {
    id: id
  },
  success: function () {
    container.fadeOut();
  },
  error: function (err) {
    console.error(err);
  }
})

}

$(document).ready(init);
