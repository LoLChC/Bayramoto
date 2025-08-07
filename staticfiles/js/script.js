document.addEventListener("DOMContentLoaded", function() {
    // Buton hover efekti
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });

    // Sosyal medya ikonlarına animasyon
    const socialIcons = document.querySelectorAll('.social-media a, .sahibinden-logo');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Promosyon kartlarına ek animasyon
    const promoItems = document.querySelectorAll('.promo-item');
    
    promoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});
// Tema değişikliklerini dinle
const favicon = document.getElementById('favicon');
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateFavicon(e) {
  favicon.href = e.matches ? "favicon-dark.ico" : "favicon-light.ico";
}

// İlk yükleme ve tema değişimlerinde çalıştır
darkModeQuery.addListener(updateFavicon);
updateFavicon(darkModeQuery);