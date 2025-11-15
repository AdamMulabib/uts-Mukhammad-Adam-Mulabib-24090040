const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const validEmail = "Adamlachowsky@gmail.com";
    const validPassword = "24090040";

    if (email === "" && password === "") {
      alert("Email dan Password harus diisi!");
      return;
    }

    if (email === "") {
      alert("Email belum diisi!");
      return;
    }

    if (password === "") {
      alert("Password belum diisi!");
      return;
    }

    if (email === validEmail && password === validPassword) {
      alert("Login berhasil!");
      window.location.href = "dashboard.html";
    } else {
      alert("Email atau Password salah!");
    }
  });
}

// ===========================
// ===== DASHBOARD DATA ======
// ===========================

const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

// Jika elemennya ada, isi datanya
if (document.getElementById("totalProducts")) {
    document.getElementById("totalProducts").textContent = summary.totalProducts;
    document.getElementById("totalSales").textContent = summary.totalSales;
    document.getElementById("totalRevenue").textContent = "Rp " + summary.totalRevenue.toLocaleString();
}

function goToProducts() {
    window.location.href = "products.html";
}


// ===============================
// ===== PRODUCT TABLE SCRIPT ====
// ===============================

const tableBody = document.getElementById("productTableBody");

if (tableBody) {

  const products = [
      { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
      { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
      { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
  ];

  products.forEach((product, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.stock}</td>
          <td>
              <div class="action-buttons">
                  <i class="fas fa-pen edit"></i>
                  <i class="fas fa-trash delete"></i>
              </div>
          </td>
      `;

      row.querySelector(".edit").addEventListener("click", () => {
          alert(`Edit produk (${product.name})`);
      });

      row.querySelector(".delete").addEventListener("click", () => {
          if (confirm("Yakin hapus produk ini?")) {
              row.remove();
          }
      });

      tableBody.appendChild(row);
  });
}
