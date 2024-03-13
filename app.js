function printsum() {
  var student_name = document.getElementById("std").value;
  var sindhi = parseInt(document.getElementById("sbu1").value);
  var english = parseInt(document.getElementById("sbu2").value);
  var maths = parseInt(document.getElementById("sbu3").value);
  var science = parseInt(document.getElementById("sbu4").value);

  if (sindhi > 100 || english > 100 || maths > 100 || science > 100) {
    alert("Wrong Input");
  } else if (
    student_name == "" ||
    sindhi == "" ||
    english == "" ||
    maths == "" ||
    science == ""
  ) {
    alert("Please Enter value in every fields");
  } else {
    var total = 400;
    var sum = sindhi + english + maths + science;
    var Average = (sindhi + english + maths + science) / 4;
    var percent = (sum * 100) / total;
    alert(
      student_name +
        " Total marks is: " +
        sum +
        " & Average is: " +
        Average +
        " & Total percenteages is:  " +
        percent +
        "%"
    );
  }
}
