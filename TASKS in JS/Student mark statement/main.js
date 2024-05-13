var index = 0;
function addrowFunction() {
  var table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  if (table.rows.length >= 5) {
    alert("Maximum of 5 rows reached.");
    return;
  }
  var newRow = table.insertRow(table.rows.length);
  index++;
  newRow.innerHTML =
    "<tr><td>" +
    index +
    "</td><td><select class='form-control' onchange='subSelection(this.value," +
    index +
    ")' name='subjects'><option value='' selected disabled  >Select a Subject</option><option value='Tamil'>Tamil</option><option value='English'>English</option><option value='Maths'>Maths</option><option value='Science'>Science</option><option value='Social'>Social</option></select></td>";
  newRow.innerHTML +=
    "<td><input type='text' id='mark_" +
    index +
    "'  onkeyup='mark(this.value," +
    index +
    ")' name='mark' disabled class='form-control'></td><td><input type='text' disabled name='percentage' id='percentage_" +
    index +
    "' class='form-control'></td><td><input type='text' disabled name='grade' id='grade_" +
    index +
    "' class='form-control'></td></tr>";
}

function subSelection(value, index) {
  if (value != null && value) {
    document.getElementById("mark_" + index).disabled = false;
  }
}

function mark(value, index) {
  if (value > 200) {
    alert("Please select a value greater than 100");
    return;
  }
  var percentage = (value / 200) * 100;
  document.getElementById("percentage_" + index).value = percentage + "%";

  if (percentage >= 95) {
    document.getElementById("grade_" + index).value = "O";
    document.getElementById("grade_" + index).style.color = "black";
  } else if (percentage >= 80 && percentage < 95) {
    document.getElementById("grade_" + index).value = "A+";
    document.getElementById("grade_" + index).style.color = "black";
  } else if (percentage >= 70 && percentage < 80) {
    document.getElementById("grade_" + index).value = "A";
    document.getElementById("grade_" + index).style.color = "black";
  } else if (percentage >= 60 && percentage < 70) {
    document.getElementById("grade_" + index).value = "B";
    document.getElementById("grade_" + index).style.color = "black";
  } else if (percentage >= 45 && percentage < 60) {
    document.getElementById("grade_" + index).value = "C";
    document.getElementById("grade_" + index).style.color = "black";
  } else if (percentage >= 35 && percentage < 45) {
    document.getElementById("grade_" + index).value = "D";
    document.getElementById("grade_" + index).style.color = "black";
  } else if (percentage == 0) {
    document.getElementById("grade_" + index).value = "";
  } else {
    document.getElementById("grade_" + index).value = "F";
    document.getElementById("grade_" + index).style.color = "red";
  }
}

function submitFunction() {
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  var data = [];

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var rowData = [];
    for (var j = 1; j < cells.length; j++) {
      // Start from 1 to skip S.NO column
      if (j === 2) {
        // Subject dropdown
        rowData.push(cells[j].querySelector("select").value);
      } else {
        rowData.push(cells[j].querySelector("input").value);
      }
    }
    data.push(rowData);
  }

  console.log(data);
}
