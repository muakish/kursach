document.addEventListener("DOMContentLoaded", function() {
    var productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(function(card) {
      card.addEventListener('click', function() {
        var productId = card.getAttribute('id');
        var productInfo = getProductInfo(productId);
        displayModal(productInfo);
        document.querySelector('.overlay').style.display = 'block'; 
      });
    });

    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeModal);
  
    var overlay = document.querySelector('.overlay');
    setTimeout(function() {
        document.getElementById('modal').style.opacity = '1'; // Постепенно делаем модальное окно видимым
      }, 10);
    overlay.addEventListener('click', closeModal);
  });

  function getProductInfo(productId) {
    switch(productId) {
    case "CS":
            return "Counter-Strike 2 — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensive."
    case "Dota":
            return "Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensi"
    case "Pubg":
            return "Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensi"
    case "Fortnite":
            return "Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensi"
    case "Rust":
            return "Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensi"
    case "Tarkov":
            return "Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensi"
    case "Outlast":
            return "Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensi"
    case "Forza":
            return "Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensi"
        
      default:
        return "Информация о продукте отсутствует";
    }
  }
  

  function displayModal(productInfo) {
    var modal = document.getElementById('modal');
    var productInfoContainer = document.getElementById('product-info');
    productInfoContainer.textContent = productInfo;
    modal.style.display = 'block';
  }
  

  function closeModal() {
    var modal = document.getElementById('modal');
    var overlay = document.querySelector('.overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none'; 
  }
  