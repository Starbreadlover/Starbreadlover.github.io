const payroll = [];

const $ = (id) => document.getElementById(id);
const num = (v) => Number(v) || 0;

function ensureTable() {
  if (document.getElementById("payrollTable")) return;

  const table = document.createElement("table");
  table.id = "payrollTable";
  table.border = "1";
  table.cellPadding = "6";
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "12px";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>No.</th>
      <th>Employee Name</th>
      <th>Days Worked</th>
      <th>Daily Rate</th>
      <th>Gross Pay</th>
      <th>Deduction Amount</th>
      <th>Net Pay</th>
    </tr>
  `;

  const tbody = document.createElement("tbody");
  tbody.id = "payrollBody";

  table.appendChild(thead);
  table.appendChild(tbody);

  const delDiv = document.getElementById("delete");
  delDiv.insertAdjacentElement("afterend", table);
}

function render() {
  ensureTable();
  const tbody = document.getElementById("payrollBody");
  tbody.innerHTML = "";

  payroll.forEach((p, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="No.">${idx + 1}</td>
      <td data-label="Employee Name">${p.name}</td>
      <td data-label="Days Worked">${p.days}</td>
      <td data-label="Daily Rate">${p.rate.toFixed(2)}</td>
      <td data-label="Gross Pay">${p.gross.toFixed(2)}</td>
      <td data-label="Deduction Amount">${p.deduction.toFixed(2)}</td>
      <td data-label="Net Pay">${p.net.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function addEmployee() {
  const name = $("name").value.trim();
  const days = num($("Days").value);
  const rate = num($("Daily").value);
  const deduction = num($("Deduction").value);

  if (!name) return alert("Please enter employee name.");
  if (days < 0 || rate < 0 || deduction < 0) {
    return alert("Days, Daily Rate, and Deduction must be non-negative.");
  }

  const gross = days * rate;
  const net = gross - deduction;

  payroll.push({ name, days, rate, gross, deduction, net });
  render();

  $("name").value = "";
  $("Days").value = "";
  $("Daily").value = "";
  $("Deduction").value = "";
  $("name").focus();
}

function deleteEmployee() {
  const line = Number($("delButton").value);
  if (!Number.isInteger(line) || line < 1 || line > payroll.length) {
    return alert("Enter a valid employee number to delete.");
  }
  payroll.splice(line - 1, 1);
  render();
  $("delButton").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#Inputs button");
  addBtn.addEventListener("click", addEmployee);

  $("deleteButton").addEventListener("click", deleteEmployee);

  ["name", "Days", "Daily", "Deduction"].forEach((id) => {
    $(id).addEventListener("keydown", (e) => {
      if (e.key === "Enter") addEmployee();
    });
  });

  $("delButton").addEventListener("keydown", (e) => {
    if (e.key === "Enter") deleteEmployee();
  });

  ensureTable();
});