document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".sliderWrapper");
  const menuItems = document.querySelectorAll(".menuItem");

  const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
  };
  document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
  };

  let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      // Change the chosen product
      chosenProduct = products[index];

      // Change texts of currentProduct
      currentProductTitle.textContent = chosenProduct.title;
      currentProductPrice.textContent = "$" + chosenProduct.price;
      currentProductImg.src = chosenProduct.colors[0].img;

      // Assign new colors
      currentProductColors.forEach((color, colorIndex) => {
        color.style.backgroundColor = chosenProduct.colors[colorIndex].code;
      });
    });
  });

  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });

  close.addEventListener("click", () => {
    payment.style.display = "none";
  });

  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut() {
    setInterval(loader, 2000);
  }

  window.onload = fadeOut;

  const payButton = document.querySelector(".payButton");
  payButton.addEventListener("click", () => {
    payment.style.display = "none";
    displaySuccessMessage();
  });

  function displaySuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.classList.add('successMessage');
    successMessage.textContent = 'Payment Successfully!Hope you enjoy your purchase!!';
    document.body.appendChild(successMessage);

    setTimeout(() => {
      successMessage.style.display = 'block';
    }, 100);

    setTimeout(() => {
      successMessage.style.display = 'none';
      document.body.removeChild(successMessage);
    }, 3000);
  }

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      swiper.slideTo(index + 1);
      playVideo(index + 1);
    });
  });

  function playVideo(slideIndex) {
    const video = document.querySelector(`.swiper-slide:nth-child(${slideIndex}) video`);
    if (video) {
      video.play();
    }
  }
});

