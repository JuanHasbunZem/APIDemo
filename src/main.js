import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from 'src/currency.js';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const dollars = $("input#usDollars").val();
    const convertTo = $("#currencies").val();

    $("#welcome").hide();
    $("#welcomeTwo").hide();

    Exchange.getRates(convertTo, dollars)
      .then(function(response) {
        if (response instanceof Error) {
          throw response;
        }
        if (response["error-type"] === "unsupported-code") {
          showErrorTwo();
        } else {
          const total = response.conversion_result;
          showResult(dollars, total);
        }
      })
      .catch(function(error) {
        showError(error.message);
      });
  });
});

  function showError(error) {
    $("#error").show();
    $("#errorMessage").text(error);
  }

  function showErrorTwo() {
    $("#errorTwo").show();
  }

  function showResult(dollars, total) {
    $("#results").show();
    $(".usDollars").text(dollars);
    $(".convertedMoney").text(total);
  }
