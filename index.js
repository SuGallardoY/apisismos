  $(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.gael.cloud/general/public/sismos",
    dataType: "json",

    success: function(data) {

      $.each(data, function(i, item){
        var row = "<tr>" + 
                  "<td>" + item.Fecha + "</td>" +
                  "<td>" + item.Magnitud + "</td>" +
                  "<td>" + item.RefGeografica + "</td>" + 
                  "</tr>";

      $("#tabla").append(row);
              
      });


    },
  })

});