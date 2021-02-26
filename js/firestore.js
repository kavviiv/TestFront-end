var firebaseConfig = {
  apiKey: "AIzaSyAEaTvmJ0ctQWFKtL295-WxnLVINRJGBhI",
  authDomain: "web-withfirebase.firebaseapp.com",
  databaseURL: "https://web-withfirebase-default-rtdb.firebaseio.com",
  projectId: "web-withfirebase",
  storageBucket: "web-withfirebase.appspot.com",
  messagingSenderId: "920778922831",
  appId: "1:920778922831:web:9ac26c39a422a92702833a",
  measurementId: "G-8B9E8W89ER",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("Bill")
  .orderBy("order", "asc")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderAccount(doc);
    });
  });

const accountList = document.querySelector("#tbl_account_list");
function renderAccount(doc) {
  let tr = document.createElement("tr");
  let td_approve_status = document.createElement("td");
  let td_order = document.createElement("td");
  let td_bill_number = document.createElement("td");
  let td_list = document.createElement("td");
  let td_category = document.createElement("td");
  let td_type = document.createElement("td");
  let td_quantity = document.createElement("td");
  let td_price_piece = document.createElement("td");
  let td_total_price = document.createElement("td");
  let td_exp = document.createElement("td");
  let td_manage = document.createElement("td");
  let td_note = document.createElement("td");

  tr.setAttribute("data-id", doc.id);
  td_approve_status.textContent = doc.data().approve_status;
  td_order.textContent = doc.data().order;
  td_bill_number.textContent = doc.data().bill_number;
  td_list.textContent = doc.data().list;
  td_category.textContent = doc.data().category;
  td_type.textContent = doc.data().type;
  td_quantity.textContent = doc.data().quantity;
  td_price_piece.textContent = doc.data().price_piece;
  td_total_price.textContent = doc.data().total_price;
  td_exp.textContent = doc.data().exp;
  td_manage.textContent = doc.data().manage;
  td_note.textContent = doc.data().note;

  tr.appendChild(td_approve_status);
  tr.appendChild(td_order);
  tr.appendChild(td_bill_number);
  tr.appendChild(td_list);
  tr.appendChild(td_category);
  tr.appendChild(td_type);
  tr.appendChild(td_quantity);
  tr.appendChild(td_price_piece);
  tr.appendChild(td_total_price);
  tr.appendChild(td_exp);
  tr.appendChild(td_manage);
  tr.appendChild(td_note);

  document.getElementById("tbl_account_list").appendChild(tr);
  if (doc.data().approve_status == "ไม่อนุมัติ") {
    tr.style = "color:red";
  }

  if (doc.data().approve_status == "รอการอนุมัติ") {
    tr.style = "color:grey";
  }
}

function addData() {
  var bill_status = document.getElementById("dropdown1");
  var b_status = bill_status.options[bill_status.selectedIndex].text;
  var cate = document.getElementById("dropdown2");
  var select_cate = cate.options[cate.selectedIndex].text;
  var tp = document.getElementById("dropdown3");
  var select_tp = tp.options[tp.selectedIndex].text;

  var q = document.getElementById("quantity").value;
  var p = document.getElementById("price").value;

  var total = q * p;

  db.collection("Bill")
    .add({
      approve_status: b_status,
      order: "11",
      bill_number: document.getElementById("bnum").value,
      list: document.getElementById("list").value,
      category: select_cate,
      type: select_tp,
      quantity: document.getElementById("quantity").value,
      price_piece: document.getElementById("price").value,
      total_price: total,
    })
    .then(alert("เพิ่มข้อมูลแล้ว"));
  document.getElementById("myModal").style.display = "none";
}
