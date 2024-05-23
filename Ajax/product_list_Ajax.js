$(document).ready(function() {

  $.ajax({
    url: "./product_list.json",
    dataType: "json",
    success: (users) => {
      if(users) {
        console.log(users);
        $.each(users, (idx, user) => {
          // Skip the icon object with id 15
          if (user.id === 15) return;

          const dataList = `
            <div class="product-item">
              <img src="${user.url}" alt="${user.title}">
              <h3>${user.title}</h3>
              <p>${user.price}</p>
              <div class="icons">
                <img src="${users[14].icon1}" alt="Option Icon">
                <img src="${users[14].icon2}" alt="Wish Icon">
                <img src="${users[14].icon3}" alt="Cart Icon">
              </div>
            </div>
          `;

          // Debug message to check the data being appended
          console.log(`Appending data for idx ${idx}:`, dataList);

          $('.product-list-img li').eq(idx).append(dataList);
        });
      }
    },
    error: (xhr, status, error) => {
      console.log('AJAX 요청 실패:', xhr, status, error);
    }
  });
});