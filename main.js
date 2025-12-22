function createStars() {
  const starsContainer = document.getElementById("starsContainer");
  const starCount = 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 3 + 1;
    const starType =
      size < 1.5 ? "star-small" : size < 2.5 ? "star-medium" : "star-large";

    star.className = `star ${starType}`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = Math.random() * 0.7 + 0.3;

    starsContainer.appendChild(star);

    // حركة النجوم
    gsap.to(star, {
      duration: Math.random() * 3 + 2,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      opacity: Math.random() * 0.5 + 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }
}

gsap.registerPlugin(ScrollTrigger);

// بيانات المنتجات
const products = [
  {
    id: 1,
    name: "تفاح أحمر",
    category: "fruit",
    price: "15 جنية / كجم",
    image: "./img/تفاح احمر.png",
  },
  {
    id: 2,
    name: "موز",
    category: "fruit",
    price: "10 جنية / كجم",
    image: "./img/موز.png",
  },
  {
    id: 3,
    name: "برتقال",
    category: "fruit",
    price: "12 جنية / كجم",
    image: "./img/برتقال.png",
  },
  {
    id: 4,
    name: "فراولة",
    category: "fruit",
    price: "20 جنية / كجم",
    image: "./img/فراوله.png",
  },
  {
    id: 5,
    name: "عنب",
    category: "fruit",
    price: "18 جنية / كجم",
    image: "./img/عنب.png",
  },
  {
    id: 6,
    name: "بطيخ",
    category: "fruit",
    price: "25 جنية / كجم",
    image: "./img/بطيخ.png",
  },
  {
    id: 7,
    name: "طماطم",
    category: "vegetable",
    price: "8 جنية / كجم",
    image: "./img/طماطم.png",
  },
  {
    id: 8,
    name: "خيار",
    category: "vegetable",
    price: "7 جنية / كجم",
    image: "./img/خيار.png",
  },
  {
    id: 9,
    name: "جزر",
    category: "vegetable",
    price: "9 جنية / كجم",
    image: "./img/جزر.png",
  },
  {
    id: 10,
    name: "فلفل ملون",
    category: "vegetable",
    price: "12 جنية / كجم",
    image: "./img/فلفل.png",
  },
  {
    id: 11,
    name: "باذنجان",
    category: "vegetable",
    price: "10 جنية / كجم",
    image: "./img/باذنجان.png",
  },
  {
    id: 12,
    name: "بروكلي",
    category: "vegetable",
    price: "14 جنية / كجم",
    image: "./img/بروكلي.png",
  },
  {
    id: 13,
    name: "رمان",
    category: "fruit",
    price: "14 جنية / كجم",
    image: "./img/رمان.png",
  },
  {
    id: 14,
    name: "تفاح اخضر",
    category: "fruit",
    price: "60 جنية / كجم",
    image: "./img/تفاح اخضر.png",
  },
];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

// تحميل المنتجات
function loadProducts(filter = "all", searchTerm = "") {
  productsGrid.innerHTML = "";

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "all" || product.category === filter;
    const matchesSearch =
      product.name.includes(searchTerm) ||
      product.category.includes(searchTerm) ||
      product.price.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-aos", "fade-up");

    productCard.innerHTML = `
                    <div class="product-image">
                        <span style="font-size: 80px;"><img src="${
                          product.image
                        }" alt="${product.name}"></span>
                    </div>
                    <div class="product-info">
                        <span class="product-category ${product.category}">${
      product.category === "fruit" ? "فاكهة" : "خضار"
    }</span>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">${product.price}</p>
                        <a href="https://wa.me/+201009039628?text=مساء الخير، أريد أن أطلب ${
                          product.name
                        } الكمية المطلوبة: " class="order-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i> طلب عبر الواتساب
                        </a>
                    </div>
                `;

    productsGrid.appendChild(productCard);
  });
}

// فلترة المنتجات
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // إزالة النشاط من جميع الأزرار
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // إضافة النشاط للزر المختار
    button.classList.add("active");
    // تحميل المنتجات المفلترة
    loadProducts(button.dataset.filter, searchInput.value);
  });
});
// بحث المنتجات
searchInput.addEventListener("input", () => {
  const activeFilter =
    document.querySelector(".filter-btn.active").dataset.filter;
  loadProducts(activeFilter, searchInput.value);
});
document.addEventListener("DOMContentLoaded", function () {
  createStars();
  loadProducts();
});

// تكوين القائمة المتنقلة
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// تهيئة AOS
AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
});
