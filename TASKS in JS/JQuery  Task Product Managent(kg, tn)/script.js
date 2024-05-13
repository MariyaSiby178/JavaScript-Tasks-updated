$(document).ready(function () {
  let products = [];
  let editText;

  // Form Validation
  $("#product-form").validate();

  // Search Filter
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#product-list tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Calculator Form
  $("#calculator-form").submit(function (event) {
    event.preventDefault();

    // Get values from input fields
    var quantityKgs = parseFloat($("#quantityKgs").val()) || 0;
    var quantityTons = parseFloat($("#quantityTons").val()) || 0;
    var price = parseFloat($("#price").val()) || 0;

    // Convert tons to kilograms
    var kilogramsFromTons = quantityTons * 1000;

    // Calculate the total cost
    var totalCost = (quantityKgs + kilogramsFromTons) * price;

    // Display the total cost
    $("#total-cost").text("Total Cost: ₹" + totalCost.toFixed(2));
  });

  // Payment Select
  $("#Payment").change(function () {
    if ($(this).val() === "Kilograms") {
      $("#quantityTons").prop("disabled", true);
      $("#quantityKgs").prop("disabled", false);
    } else {
      $("#quantityTons").prop("disabled", false);
      $("#quantityKgs").prop("disabled", true);
    }
  });

  // Display Products
  function displayProducts() {
    $("#product-list tbody").empty();
    let totalAmount = 0;

    $.each(products, function (index, product) {
      const totalProductAmount =
        product.price * (product.quantityTons * 1000 + product.quantityKgs);
      totalAmount += totalProductAmount;

      const productHTML = `
        <tr>
          <td>
            <button class="edit-btn btn btn-primary px-2 py-1 me-2" data-index="${index}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button class="delete-btn btn btn-danger px-2 py-1 " data-index="${index}"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
          </td>
          <td>${product.name}</td>
          <td>₹${product.price.toFixed(2)}</td>
          <td>${product.quantityTons || 0} Tons ${
        product.quantityKgs || 0
      } Kgs</td>
          <td>${product.Payment}</td>
          <td>₹${totalProductAmount.toFixed(2)}</td>
        </tr>
      `;

      $("#product-list tbody").append(productHTML);
    });

    $("#total-amount").text(`Total: ₹${totalAmount.toFixed(2)}`);
  }

  // Add/Edit Product
  $("#product-form").click(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const price = parseFloat($("#price").val());
    const quantityTons = parseInt($("#quantityTons").val()) || 0;
    const quantityKgs = parseInt($("#quantityKgs").val()) || 0;
    const Payment = $("#Payment").val();

    let showError = false;

    if (name === "") {
      $("#nameError").text("Please enter a name*");
      showError = true;
    } else {
      $("#nameError").text("");
    }

    if (Payment === null || Payment === "") {
      $("#PaymentError").text("Please enter a Payment*");
      showError = true;
    } else {
      $("#PaymentError").text("");
    }
    if (isNaN(price) || price <= 0) {
      $("#priceError").text("Please enter a valid price*");
      showError = true;
    } else {
      $("#priceError").text("");
    }
    if (Payment == "Tons") {
      if (isNaN(quantityTons) || quantityTons <= 0) {
        $("#quantityKgsError").text("");
        $("#quantityTonsError").text("Please enter a valid quantityTons*");
        showError = true;
      } else {
        $("#quantityTonsError").text("");
      }
    }
    if (Payment == "Kilograms") {
      if (isNaN(quantityKgs) || quantityKgs <= 0) {
        $("#quantityTonsError").text("");

        $("#quantityKgsError").text("Please enter a valid quantityKgs*");
        showError = true;
      } else {
        $("#quantityKgsError").text("");
      }
    }

    if (!showError) {
      const product = {
        name: name,
        price: price,
        quantityTons: quantityTons,
        quantityKgs: quantityKgs,
        Payment: $("#Payment").val(),
      };

      if (editText !== undefined) {
        products[editText] = product;
      } else {
        products.push(product);
      }

      $("#name").val("");
      $("#price").val("");
      $("#quantityTons").val("");
      $("#quantityKgs").val("");
      editText = undefined;

      displayProducts();
    }
  });

  // Edit Product
  $(document).on("click", ".edit-btn", function () {
    const index = $(this).data("index");
    editText = index;
    const product = products[index];
    $("#name").val(product.name);
    $("#price").val(product.price);
    $("#quantityTons").val(product.quantityTons);
    $("#quantityKgs").val(product.quantityKgs);
    $("#Payment").val(product.Payment);
  });

  // Delete Product
  $(document).on("click", ".delete-btn", function () {
    const index = $(this).data("index");
    products.splice(index, 1);
    displayProducts();
  });

  $("#Payment").change(function (event) {
    const Payment = $("#Payment").val();
    if (Payment == "Tons") {
      $("#quantityTons").prop("readonly", false);
    }
    if (Payment == "Kilograms") {
      $("#quantityKgs").prop("readonly", false);
    }
  });
});
