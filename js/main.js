var nameList = [];

$("body")

  .on("submit", "#add-name", function(e){

    e.preventDefault();

    var $usernameField = $("[name=username]", this);

    nameList.push($usernameField.val());

    $usernameField.val("").focus();

  })

  .on("click", "#display-names", function(e){

    console.log(nameList);

    var $nameList = $("#name-list");

    $("> *", $nameList).remove();

    $.each(nameList, function(){
      $nameList.append($("<li/>").text(this));
    });
  });
