(function () {
  'use strict';

  const config = typeof BIONICLE_CONFIG !== 'undefined' ? BIONICLE_CONFIG : {};

  // ----- Nav (mobile toggle + smooth scroll) -----
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // ----- Apply config: gallery -----
  const galleryEl = document.getElementById('gallery');
  if (galleryEl && config.gallery && config.gallery.length) {
    galleryEl.innerHTML = config.gallery
      .map(
        (item, i) =>
          `<article class="gallery-item" data-index="${i}">
            <div class="gallery-image-wrap">
              <img src="${item.src}" alt="${item.alt || ''}" loading="lazy" />
            </div>
            <div class="gallery-caption">${item.caption || ''}</div>
          </article>`
      )
      .join('');
  }

  // ----- Apply config: YouTube embed -----
  const embedIframe = document.querySelector('.video-embed iframe');
  if (embedIframe && config.youtubeChannelId) {
    embedIframe.src =
      'https://www.youtube.com/embed/videoseries?list=UU' +
      config.youtubeChannelId.replace(/^UC/, '');
  }
  const channelLink = document.querySelector('a.video-link-inner');
  if (channelLink && config.youtubeChannel) {
    channelLink.href = config.youtubeChannel;
  }

  // ----- Apply config: social links -----
  if (config.social) {
    Object.keys(config.social).forEach(function (platform) {
      const card = document.querySelector('.social-card[data-platform="' + platform + '"]');
      if (card && config.social[platform]) {
        card.href = config.social[platform];
      }
    });
  }

  // ----- Lightbox -----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  function openLightbox(src, alt, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightboxCaption.textContent = caption || '';
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      const img = item.querySelector('.gallery-image-wrap img');
      const cap = item.querySelector('.gallery-caption');
      if (img && img.src) {
        openLightbox(img.src, img.alt, cap ? cap.textContent : '');
      }
    });
  });
})();
