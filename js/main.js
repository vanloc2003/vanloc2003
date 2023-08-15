var dssv = [];

var jsonData = localStorage.getItem("DSSV");
console.log("🚀 ~ file: main.js:4 ~ jsonData:", jsonData);
if (jsonData != null) {
  var list = JSON.parse(jsonData);
  dssv = list.map(function (item) {
    return new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matkhau,
      item.toan,
      item.ly,
      item.hoa
    );
  });
  renderDSSV(dssv);
}

function themSv() {
  console.log("yes");
  var sv = layThongTinTuForm();
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matkhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value;
  var _ly = document.getElementById("txtDiemLy").value;
  var _hoa = document.getElementById("txtDiemHoa").value;
  var sv = new SinhVien(_ma, _ten, _email, _matkhau, _toan, _ly, _hoa);
  dssv.push(sv);

  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);
  renderDSSV(dssv);
}
function xoaSV(id) {
  console.log("🚀 ~ file: main.js:56 ~ xoaSV ~ id:", id);

  var index = timvitri(id, dssv);
  dssv.splice(index, 1);
  console.log("🚀 ~ file: main.js:44 ~ xoaSV ~ dssv:", dssv);
  renderDSSV(dssv);
}
function suaSv(id) {
  console.log("🚀 ~ file: main.js:61 ~ suaSv ~ suaSv:", suaSv);
  var index = timvitri(id, dssv);
  var sv = dssv[index];
  showThongTinLenForm(sv);
  document.getElementById("txtMaSV").disabled = true;
}
function capNhapSv() {
  var sv = layThongTinTuForm();
  var index = timvitri(sv.ma, dssv);
  dssv[index] = sv;
  renderDSSV(dssv);
}
