    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    const closeBtn = document.querySelector('.lightbox .close');
    const nextBtn = document.querySelector('.lightbox .next');
    const prevBtn = document.querySelector('.lightbox .prev');

    let currentIndex = 0;

    function showLightbox(index) {
      currentIndex = index;
      lightbox.style.display = 'flex';
      lightboxImg.src = galleryItems[index].src;
    }

    galleryItems.forEach((img, index) => {
      img.addEventListener('click', () => showLightbox(index));
    });

    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      lightboxImg.src = galleryItems[currentIndex].src;
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      lightboxImg.src = galleryItems[currentIndex].src;
    });

    window.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });

    const filterButtons = document.querySelectorAll('.filter-btns button');
    const items = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        items.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });