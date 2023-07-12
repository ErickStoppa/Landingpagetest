  // Get the necessary elements
  const container = document.getElementById('carousel-container');
  const images = container.getElementsByTagName('img');
  const pagination = document.getElementById('carousel-pagination');

  let currentImageIndex = 0;

  // Display the current image
  function showImage(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
  }

  // Create pagination dots
  function createPaginationDots() {
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => {
        currentImageIndex = i;
        showImage(currentImageIndex);
        updateActiveDot();
      });
      pagination.appendChild(dot);
    }
  }

  // Update the active pagination dot
  function updateActiveDot() {
    const dots = pagination.getElementsByTagName('span');
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[currentImageIndex].classList.add('active');
  }

  // Initialize the carousel
  function initCarousel() {
    showImage(currentImageIndex);
    createPaginationDots();
    updateActiveDot();

    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
      updateActiveDot();
    }, 3000);
  }

  initCarousel();

  
  // Get the necessary elements
  const portfolioContainer = document.getElementById('portfolio-carousel');
  const portfolioImages = portfolioContainer.getElementsByTagName('a');
  const portfolioPagination = document.getElementById('portfolio-carousel-pagination');

  let portfolioCurrentImageIndex = 0;

  // Display the current image
  function portfolioShowImage(index) {
    for (let i = 0; i < portfolioImages.length; i++) {
      portfolioImages[i].style.left = '-500px';
    }
    portfolioImages[index].style.left = '0';
  }

  // Create pagination dots
  function portfolioCreatePaginationDots() {
    for (let i = 0; i < portfolioImages.length; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => {
        portfolioCurrentImageIndex = i;
        portfolioShowImage(portfolioCurrentImageIndex);
        portfolioUpdateActiveDot();
      });
      portfolioPagination.appendChild(dot);
    }
  }

  // Update the active pagination dot
  function portfolioUpdateActiveDot() {
    const dots = portfolioPagination.getElementsByTagName('span');
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[portfolioCurrentImageIndex].classList.add('active');
  }

  // Initialize the carousel
  function portfolioInitCarousel() {
    portfolioShowImage(portfolioCurrentImageIndex);
    portfolioCreatePaginationDots();
    portfolioUpdateActiveDot();

    setInterval(() => {
      portfolioCurrentImageIndex = (portfolioCurrentImageIndex + 1) % portfolioImages.length;
      portfolioShowImage(portfolioCurrentImageIndex);
      portfolioUpdateActiveDot();
    }, 3000);
  }

  portfolioInitCarousel();

  

  
  