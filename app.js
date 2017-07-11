$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data : {
      "Paracetamol": null,
      "acetaminophen": null,
      "Tylenol": null,
      "ibuprofen": null,
      "Advil": null,
      "aspirin": null,
      "Motrin": null,
      "Bayer Aspirin": null,
      "Anaprox": null,
      "Children's Tylenol": null,
      "Aspirtab": null,
      "Bufferin Low Dose": null,
      "Entercote": null,
      "Fasprin": null

    }
  });

  $("#addToCart").click(function(){
    var drug = $('#autocomplete').val();

	   if(drug != ""){
        $('#drugBill').append("<tr><td>X</td><td>"+ drug +"</td><td>19.00</td><td class = 'increaseqty'><span id = 'qty'>1</td><td> </span><a class='btn btn-floating '><i class='material-icons'>add</i></a></td></tr>");
        $('#dataRequired').css({"display" : "none"});
        $('#autocomplete').val("");
        $('.tableData').css({"display": "none"});
      }
     else {
       $('#dataRequired').text("Data Required");
       $('#dataRequired').css({"display": "block", "font-size": "12px", "color": "red"});
     }
  });




});
