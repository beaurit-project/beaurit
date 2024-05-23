$(document).ready(function() {
  $.ajax({
    url: "./product_list.json",
    dataType: "json",
    success: (products) => {
      if(products) {
        const icons = products.find(product => product.id === 15);

        $.each(products, (idx, product) => {
          if (product.id === 15) return;

          const isBestSeller = product.bestSeller ? '<div class="best-seller-box"><p>BEST SELLER</p></div>' : '';

          const productItem = `
            <li class="product-list-item${idx + 1}">
              <div class="thumbnail">
                <a href="../html/detail.html">
                  <img src="${product.url}" alt="${product.title}">
                </a>
                <div class="product-list-img-option-box">
                  <a href="#">
                    <img src="${icons.icon1}" alt="제품옵션 보기">
                  </a>
                  <a href="#">
                    <img src="${icons.icon2}" alt="관심상품 등록">
                  </a>
                  <a href="#">
                    <img src="${icons.icon3}" alt="장바구니 등록">
                  </a>
                </div>
              </div>
              ${isBestSeller}
              <div class="product-list-des">
                <strong class="name">${product.title}</strong>
                <div class="bar"></div>
                <p class="price">${product.price}</p>
              </div>
            </li>
          `;

          $('.product-list-img').append(productItem);
        });
      }
    },
    error: function(xhr, status, error) {
      console.log('AJAX 요청 실패:', xhr, status, error);
    }
  });
});
