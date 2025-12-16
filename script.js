// Tanışma tarihi: 4 Ekim 2025 saat 16:00
const startDate = new Date('2025-10-04T16:00:00');

// İleriye doğru sayaç - Geçen süreyi göster
function updateCountdown() {
    const now = new Date().getTime();
    const startTime = startDate.getTime();
    const elapsed = now - startTime;

    // Eğer henüz başlangıç tarihi gelmediyse
    if (elapsed < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    // Geçen süreyi hesapla
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Şarkı sözlerini döndür
let currentLyricIndex = 0;
const lyricCards = document.querySelectorAll('.lyric-card');

function rotateLyrics() {
    // Perfect smooth cross-fade geçişi - üst üste geçiş
    const nextIndex = (currentLyricIndex + 1) % lyricCards.length;
    const currentCard = lyricCards[currentLyricIndex];
    const nextCard = lyricCards[nextIndex];
    
    if (!currentCard || !nextCard) return;
    
    // Eski kartın z-index'ini düşür (yeni kart üstte olacak)
    currentCard.style.zIndex = '1';
    
    // GPU acceleration için translate3d kullan
    // Yeni card'ı hazırla (görünmez, hafif aşağıda ve küçük, üstte)
    nextCard.style.opacity = '0';
    nextCard.style.transform = 'translate3d(0, 25px, 0) scale(0.96)';
    nextCard.style.transition = 'none';
    nextCard.style.zIndex = '2';
    nextCard.classList.add('active');
    
    // requestAnimationFrame ile perfect timing
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            // Yeni card fade-in (smooth ve yavaş)
            nextCard.style.transition = 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            nextCard.style.opacity = '1';
            nextCard.style.transform = 'translate3d(0, 0, 0) scale(1)';
            
            // Eski card fade-out (perfect cross-fade için 300ms sonra başla)
            setTimeout(() => {
                currentCard.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                currentCard.style.opacity = '0';
                currentCard.style.transform = 'translate3d(0, -15px, 0) scale(0.98)';
                
                // Eski card'ı temizle (geçiş tamamlandıktan sonra)
                setTimeout(() => {
                    currentCard.classList.remove('active');
                    currentCard.style.opacity = '';
                    currentCard.style.transform = '';
                    currentCard.style.transition = '';
                    currentCard.style.zIndex = '';
                    currentLyricIndex = nextIndex;
                }, 1000);
            }, 300); // Perfect overlap için 300ms gecikme
        });
    });
}

// Kalp butonu interaktif özellik
const heartBtn = document.getElementById('heartBtn');
const sparklesContainer = document.getElementById('sparkles');
let clickCount = 0;

const specialMessages = [
    "Sen benim için çok özelsin! 💕",
    "Her gün seni daha çok seviyorum! 🌟",
    "Birlikte olmak en güzel şey! ✨",
    "Seninle her an bir macera! 💖",
    "Sen benim en güzel şarkım! 🎵"
];

heartBtn.addEventListener('click', function() {
    clickCount++;
    
    // Kalp animasyonu
    this.style.transform = 'scale(1.3)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);

    // Sparkle efekti
    createSparkles();

    // Özel mesaj göster
    if (clickCount <= specialMessages.length) {
        showSpecialMessage(specialMessages[clickCount - 1]);
    }
});

function createSparkles() {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = '50%';
        sparkle.style.animationDelay = Math.random() * 0.5 + 's';
        sparkle.style.background = `hsl(${Math.random() * 60 + 300}, 100%, 60%)`;
        sparklesContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

function showSpecialMessage(message) {
    const messageElement = document.querySelector('.click-message');
    const originalText = messageElement.textContent;
    messageElement.textContent = message;
    messageElement.style.fontSize = '1.3em';
    messageElement.style.color = '#ffd700';
    messageElement.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.8)';

    setTimeout(() => {
        messageElement.textContent = originalText;
        messageElement.style.fontSize = '';
        messageElement.style.color = '';
        messageElement.style.textShadow = '';
    }, 3000);
}

// Yıldız efekti - Optimize edilmiş
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    // Mobilde yıldız sayısını azalt
    const isMobile = window.innerWidth <= 768;
    const numberOfStars = isMobile ? 8 : 20;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        starsContainer.appendChild(star);
    }
}

// Tema tanımlamaları - Her şarkı için özel tema
const songThemes = {
    "Maroon": {
        colors: ["#8B0000", "#A52A2A", "#800020", "#722F37", "#4B0000"],
        mood: "tutkulu, derin, gece",
        description: "Koyu kırmızı tonları, tutkulu ve derin bir gece atmosferi"
    },
    "Lover": {
        colors: ["#FFB6C1", "#FFC0CB", "#FF69B4", "#FF1493", "#FF91A4"],
        mood: "romantik, yumuşak, sevgi dolu",
        description: "Pembe tonları, romantik ve yumuşak bir atmosfer"
    },
    "Love Story": {
        colors: ["#FFD700", "#FFA500", "#FF8C00", "#FFB347", "#FFE135"],
        mood: "peri masalı, büyülü, altın",
        description: "Altın tonları, peri masalı gibi büyülü bir atmosfer"
    },
    "Mine": {
        colors: ["#FFD700", "#FFA500", "#FFE5B4", "#FFE4B5", "#FFF8DC"],
        mood: "parlak, değerli, ışıltılı",
        description: "Altın ve sarı tonları, parlak ve değerli bir his"
    },
    "Enchanted": {
        colors: ["#9370DB", "#8A2BE2", "#BA55D3", "#DA70D6", "#DDA0DD"],
        mood: "büyülü, gizemli, mor",
        description: "Mor tonları, büyülü ve gizemli bir atmosfer"
    },
    "You Belong With Me": {
        colors: ["#FFD700", "#FFE135", "#FFFACD", "#FFFFE0", "#FFEFD5"],
        mood: "neşeli, genç, sarı",
        description: "Sarı tonları, neşeli ve genç bir enerji"
    },
    "All Too Well (10 Minute Version)": {
        colors: ["#DC143C", "#B22222", "#8B0000", "#CD5C5C", "#F08080"],
        mood: "nostaljik, duygusal, kırmızı",
        description: "Kırmızı tonları, nostaljik ve duygusal bir atmosfer"
    },
    "Daylight": {
        colors: ["#87CEEB", "#B0E0E6", "#ADD8E6", "#E0F6FF", "#F0F8FF"],
        mood: "güneşli, umutlu, açık mavi",
        description: "Açık mavi tonları, güneşli ve umutlu bir his"
    },
    "Paper Rings": {
        colors: ["#FFD700", "#FFA500", "#FF8C00", "#FFB347", "#FFE135"],
        mood: "eğlenceli, neşeli, altın",
        description: "Altın tonları, eğlenceli ve neşeli bir atmosfer"
    },
    "Invisible String": {
        colors: ["#DDA0DD", "#EE82EE", "#DA70D6", "#BA55D3", "#9370DB"],
        mood: "yumuşak, bağlantı, kader",
        description: "Yumuşak mor-pembe tonları, kader bağlantısı hissi"
    },
    "Cardigan": {
        colors: ["#8B7355", "#A0826D", "#CD853F", "#D2B48C", "#DEB887"],
        mood: "sıcak, rahat, kahverengi",
        description: "Kahverengi tonları, sıcak ve rahat bir atmosfer"
    },
    "Wildest Dreams (Taylor's Version)": {
        colors: ["#4169E1", "#1E90FF", "#87CEEB", "#B0E0E6", "#E0F6FF"],
        mood: "hayal, romantik, mavi",
        description: "Mavi tonları, hayal dolu ve romantik bir atmosfer"
    },
    "Delicate": {
        colors: ["#FFB6C1", "#FFC0CB", "#FFE4E1", "#FFF0F5", "#FFE4E1"],
        mood: "hassas, yumuşak, açık pembe",
        description: "Açık pembe tonları, hassas ve yumuşak bir his"
    },
    "The Fate of Ophelia": {
        colors: ["#2F4F4F", "#708090", "#778899", "#B0C4DE", "#E6E6FA"],
        mood: "dramatik, hüzünlü, gri-mavi",
        description: "Gri-mavi tonları, dramatik ve hüzünlü bir atmosfer"
    }
};

// Taylor Swift şarkıları playlist - Spotify'dan çalıyor
const taylorSwiftSongs = [
    {
        name: "Maroon",
        album: "Midnights",
        spotifyId: "3xXhjcjiGpm09rB21ZAeTS",
        icon: "🍷",
        theme: songThemes["Maroon"]
    },
    {
        name: "Lover",
        album: "Lover",
        spotifyId: "1dGr1c8CrMLDpV6mPbImSI",
        icon: "💕",
        theme: songThemes["Lover"]
    },
    {
        name: "Love Story",
        album: "Fearless (Taylor's Version)",
        spotifyId: "1D4PL9B8gOg78jiHg3YvRz",
        icon: "💖",
        theme: songThemes["Love Story"]
    },
    {
        name: "Mine",
        album: "Speak Now (Taylor's Version)",
        spotifyId: "7xoUc6faLbCqAV6kVo3wOP",
        icon: "💎",
        theme: songThemes["Mine"]
    },
    {
        name: "Enchanted",
        album: "Speak Now (Taylor's Version)",
        spotifyId: "3sW3oSbzsfecv9XoUdGs7h",
        icon: "✨",
        theme: songThemes["Enchanted"]
    },
    {
        name: "You Belong With Me",
        album: "Fearless (Taylor's Version)",
        spotifyId: "1qrpoAMXodY6895hGKoUpA",
        icon: "🎵",
        theme: songThemes["You Belong With Me"]
    },
    {
        name: "All Too Well (10 Minute Version)",
        album: "Red (Taylor's Version)",
        spotifyId: "5enxwA8aAbwZbf5qCHORXi",
        icon: "🧣",
        theme: songThemes["All Too Well (10 Minute Version)"]
    },
    {
        name: "Daylight",
        album: "Lover",
        spotifyId: "1odExI7RdWc4BT515LTAwj",
        icon: "☀️",
        theme: songThemes["Daylight"]
    },
    {
        name: "Paper Rings",
        album: "Lover",
        spotifyId: "4y5bROuBDPr5fuwXbIBZR4",
        icon: "💍",
        theme: songThemes["Paper Rings"]
    },
    {
        name: "Invisible String",
        album: "Folklore",
        spotifyId: "6EsaF0e3YDOObT8axvkSfN",
        icon: "🧵",
        theme: songThemes["Invisible String"]
    },
    {
        name: "Cardigan",
        album: "Folklore",
        spotifyId: "4R2kfaDFhslZEMJqAFNpdd",
        icon: "🧶",
        theme: songThemes["Cardigan"]
    },
    {
        name: "Wildest Dreams (Taylor's Version)",
        album: "1989 (Taylor's Version)",
        spotifyId: "1Ov37jtRQ2YNAe8HzfczkL",
        icon: "🌙",
        theme: songThemes["Wildest Dreams (Taylor's Version)"]
    },
    {
        name: "Delicate",
        album: "Reputation",
        spotifyId: "6nbx8D5q2SNKOcjVaCpxzf",
        icon: "🦋",
        theme: songThemes["Delicate"]
    },
    {
        name: "The Fate of Ophelia",
        album: "The Tortured Poets Department",
        spotifyId: "4j5qQCOHAvx5X1l3qak4on", // The Fate of Ophelia - TTPD
        icon: "🎭",
        theme: songThemes["The Fate of Ophelia"]
    }
];

// Playlist oluştur fonksiyonu kaldırıldı - artık sadece sağ alttaki liste kullanılıyor

// Sağ alttaki playlist'i oluştur
function createSidePlaylist() {
    const sidePlaylistSongs = document.getElementById('sidePlaylistSongs');
    sidePlaylistSongs.innerHTML = '';
    
    taylorSwiftSongs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.className = 'side-song-item';
        if (index === currentSongIndex) {
            songItem.classList.add('active');
        }
        songItem.innerHTML = `
            <span class="side-song-icon">${song.icon}</span>
            <div class="side-song-info">
                <div class="side-song-name">${song.name}</div>
                <div class="side-song-album">${song.album}</div>
            </div>
            ${index === currentSongIndex ? '<span class="playing-indicator">▶</span>' : ''}
        `;
        
        songItem.addEventListener('click', () => {
            playSong(song, index);
        });
        
        sidePlaylistSongs.appendChild(songItem);
    });
}

// Sağ alttaki playlist'i göster
function showSidePlaylist() {
    const sidePlaylist = document.getElementById('sidePlaylist');
    sidePlaylist.classList.add('visible');
    createSidePlaylist();
}

// Sağ alttaki playlist'i gizle
function hideSidePlaylist() {
    const sidePlaylist = document.getElementById('sidePlaylist');
    sidePlaylist.classList.remove('visible');
}

// Global player state
let currentSongIndex = -1;
let currentSpotifyFrame = null;

// Tema değiştir
function changeTheme(song) {
    const theme = song.theme;
    const body = document.body;
    
    // Arka plan gradient'ini değiştir
    const gradientColors = theme.colors.join(', ');
    body.style.background = `linear-gradient(135deg, ${gradientColors})`;
    body.style.backgroundSize = '400% 400%';
    
    // Container'a tema class'ı ekle
    const container = document.querySelector('.container');
    container.setAttribute('data-theme', song.name.toLowerCase().replace(/\s+/g, '-'));
    
    // Yazı renklerini tema göre ayarla (kontrast için)
    const textElements = document.querySelectorAll('.header, .countdown-section, .lyrics-section, .message-section, .interactive-section, .footer, .quiz-section, .side-playlist');
    const isDarkTheme = theme.colors.some(color => {
        const rgb = hexToRgb(color);
        if (!rgb) return false;
        const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        return brightness < 128; // Koyu tema
    });
    
    // Tüm metin elementlerine kontrastlı renk uygula
    textElements.forEach(element => {
        if (isDarkTheme) {
            element.style.color = '#ffffff';
            element.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)';
        } else {
            element.style.color = '#ffffff';
            element.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        }
    });
    
    // Özel elementler için kontrast ayarları
    const titleElements = document.querySelectorAll('.title, h1, h2, h3');
    titleElements.forEach(element => {
        if (isDarkTheme) {
            element.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 255, 255, 0.3)';
        } else {
            element.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.7)';
        }
    });
    
    // Animasyon efekti
    container.style.transition = 'all 0.8s ease';
    setTimeout(() => {
        container.style.transition = '';
    }, 800);
}

// Hex renk kodunu RGB'ye çevir
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Şarkı çal (Spotify)
function playSong(song, index) {
    const sidePlayerWrapper = document.getElementById('sidePlayerWrapper');
    const sideSpotifyPlayer = document.getElementById('sideSpotifyPlayer');
    const backgroundAudio = document.getElementById('backgroundAudio');
    
    // Arka plandaki Maroon'u durdur
    if (backgroundAudio) {
        backgroundAudio.pause();
        backgroundAudio.currentTime = 0;
    }
    
    // Önceki player'ı temizle
    if (currentSpotifyFrame) {
        sideSpotifyPlayer.innerHTML = '';
        currentSpotifyFrame = null;
    }
    
    currentSongIndex = index;
    
    // Tema değiştir
    changeTheme(song);
    
    // Spotify iframe oluştur - Düzeltilmiş format
    const spotifyFrame = document.createElement('iframe');
    spotifyFrame.src = `https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator`;
    spotifyFrame.width = '100%';
    spotifyFrame.height = '152';
    spotifyFrame.frameBorder = '0';
    spotifyFrame.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    spotifyFrame.loading = 'lazy';
    spotifyFrame.style.borderRadius = '12px';
    spotifyFrame.style.border = 'none';
    
    // Hata kontrolü için timeout
    const errorTimeout = setTimeout(() => {
        // 5 saniye sonra hala yüklenmemişse alternatif göster
        const iframeDoc = spotifyFrame.contentDocument || spotifyFrame.contentWindow?.document;
        if (!iframeDoc || iframeDoc.body?.textContent?.includes('Page not found')) {
            console.warn('Spotify şarkı yüklenemedi:', song.name, song.spotifyId);
            // Spotify bazen geç yüklenebilir, bu yüzden sadece log tutuyoruz
        }
    }, 5000);
    
    spotifyFrame.addEventListener('load', () => {
        clearTimeout(errorTimeout);
        console.log('Spotify şarkı yüklendi:', song.name);
    });
    
    sideSpotifyPlayer.appendChild(spotifyFrame);
    currentSpotifyFrame = spotifyFrame;
    
    // Player'ı göster
    sidePlayerWrapper.style.display = 'block';
    
    // Playlist'i güncelle
    createSidePlaylist();
    
    // Sağ alttaki playlist'i göster
    showSidePlaylist();
}

// Bir sonraki şarkıyı çal
function playNextSong() {
    if (currentSongIndex >= 0 && currentSongIndex < taylorSwiftSongs.length - 1) {
        const nextSong = taylorSwiftSongs[currentSongIndex + 1];
        playSong(nextSong, currentSongIndex + 1);
    }
}

// Bir önceki şarkıyı çal
function playPreviousSong() {
    if (currentSongIndex > 0) {
        const prevSong = taylorSwiftSongs[currentSongIndex - 1];
        playSong(prevSong, currentSongIndex - 1);
    }
}

// Sağ alttaki playlist'i kapat
function closeSidePlaylist() {
    hideSidePlaylist();
}

// Splash screen sparkle efektleri - Optimize edilmiş
function createSplashSparkles() {
    const sparklesContainer = document.querySelector('.splash-sparkles');
    if (!sparklesContainer) return;
    
    // Mobilde sparkle sayısını azalt
    const isMobile = window.innerWidth <= 768;
    const numberOfSparkles = isMobile ? 5 : 10;
    
    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'splash-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        sparkle.style.background = `hsl(${Math.random() * 60 + 300}, 100%, 60%)`;
        sparklesContainer.appendChild(sparkle);
    }
}

// Arka plan müziğini başlat (Maroon)
function startBackgroundMusic() {
    const backgroundAudio = document.getElementById('backgroundAudio');
    
    if (!backgroundAudio) return;
    
    // MP3 dosyası kontrolü
    const testAudio = new Audio('music/maroon.mp3');
    
    testAudio.addEventListener('canplay', function() {
        // MP3 dosyası mevcut, arka planda çal
        backgroundAudio.volume = 0.4; // Biraz düşük ses
        backgroundAudio.play().catch(function(error) {
            console.log('Otomatik çalma engellendi, kullanıcı etkileşimi gerekli');
        });
    });
    
    testAudio.addEventListener('error', function() {
        // MP3 dosyası bulunamadı
        console.log('Maroon MP3 dosyası bulunamadı');
    });
    
    // Test için dosyayı yükle
    testAudio.load();
}

// Splash screen'i kapat ve ana sayfayı göster
function closeSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    const mainContainer = document.getElementById('mainContainer');
    
    splashScreen.classList.add('hidden');
    
    // Ana sayfaya geç ve müziği başlat
    setTimeout(() => {
        mainContainer.style.display = 'grid';
        splashScreen.style.display = 'none';
        
        // Maroon'u arka planda başlat
        startBackgroundMusic();
    }, 800);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Splash screen sparkle efektleri
    createSplashSparkles();
    
    // Splash screen'e tıklama
    const splashScreen = document.getElementById('splashScreen');
    splashScreen.addEventListener('click', closeSplashScreen);
    
    // Ana sayfa fonksiyonları
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // İlk şarkı sözünü göster
    if (lyricCards.length > 0) {
        lyricCards[0].classList.add('active');
    }
    
    // Şarkı sözlerini daha uzun aralıklarla değiştir (smooth geçiş için)
    // Perfect timing: 7 saniye (geçiş animasyonu için yeterli süre)
    setInterval(rotateLyrics, 7000);
    
    // Scroll performans optimizasyonu - Passive event listeners
    let ticking = false;
    function optimizeScroll() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Scroll sırasında yapılacak işlemler buraya
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Passive scroll listener ekle (performans için)
    window.addEventListener('scroll', optimizeScroll, { passive: true });
    window.addEventListener('touchmove', optimizeScroll, { passive: true });
    
    // Yıldızları oluştur
    createStars();
    
    // Sağ alttaki playlist kontrolleri
    document.getElementById('closeSidePlaylist').addEventListener('click', closeSidePlaylist);
    
    // Müzik butonu ile playlist'i aç/kapa
    const musicToggleBtn = document.getElementById('musicToggleBtn');
    musicToggleBtn.addEventListener('click', function() {
        const sidePlaylist = document.getElementById('sidePlaylist');
        if (sidePlaylist.classList.contains('visible')) {
            closeSidePlaylist();
        } else {
            showSidePlaylist();
        }
    });
    
    // Playlist kapalı başlasın - kullanıcı tıklayınca açılacak
    // Otomatik açılma kaldırıldı
    
    // Taylor Swift bilgi butonu
    const taylorInfoBtn = document.getElementById('taylorInfoBtn');
    const taylorInfoModal = document.getElementById('taylorInfoModal');
    const closeInfoModal = document.getElementById('closeInfoModal');
    
    taylorInfoBtn.addEventListener('click', function() {
        taylorInfoModal.classList.add('visible');
        displayTaylorFacts();
    });
    
    closeInfoModal.addEventListener('click', function() {
        taylorInfoModal.classList.remove('visible');
    });
    
    // Modal dışına tıklayınca kapat
    taylorInfoModal.addEventListener('click', function(e) {
        if (e.target === taylorInfoModal) {
            taylorInfoModal.classList.remove('visible');
        }
    });

    // Sürpriz Butonu
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseModal = document.getElementById('surpriseModal');
    const closeSurpriseModal = document.getElementById('closeSurpriseModal');
    
    surpriseBtn.addEventListener('click', function() {
        surpriseModal.classList.add('visible');
    });
    
    closeSurpriseModal.addEventListener('click', function() {
        surpriseModal.classList.remove('visible');
    });
    
    // Modal dışına tıklayınca kapat
    surpriseModal.addEventListener('click', function(e) {
        if (e.target === surpriseModal) {
            surpriseModal.classList.remove('visible');
        }
    });
    
    // Resimlere tıklayınca büyüt
    const surpriseImages = document.querySelectorAll('.surprise-image');
    const imageZoomOverlay = document.getElementById('imageZoomOverlay');
    const zoomedImage = document.getElementById('zoomedImage');
    
    surpriseImages.forEach(image => {
        image.addEventListener('click', function(e) {
            e.stopPropagation();
            const imageSrc = this.getAttribute('data-image') || this.getAttribute('src');
            zoomedImage.setAttribute('src', imageSrc);
            imageZoomOverlay.classList.add('active');
        });
    });
    
    // Zoom overlay'e tıklayınca kapat
    imageZoomOverlay.addEventListener('click', function() {
        this.classList.remove('active');
    });

    // SAKIN BASMA Butonu - Fenerbahçe Teması
    const dangerBtn = document.getElementById('dangerBtn');
    const fenerbahceMars = document.getElementById('fenerbahceMars');
    let fenerbahceActive = false;
    
    if (dangerBtn) {
        dangerBtn.addEventListener('click', function() {
            if (!fenerbahceActive) {
                // Fenerbahçe temasını aktif et
                document.body.classList.add('fenerbahce-theme');
                fenerbahceActive = true;
                
                // Maroon'u durdur
                const backgroundAudio = document.getElementById('backgroundAudio');
                if (backgroundAudio && !backgroundAudio.paused) {
                    backgroundAudio.pause();
                }
                
                // Kıraç 100. Yıl marşını çal
                if (fenerbahceMars) {
                    fenerbahceMars.volume = 0.8;
                    fenerbahceMars.play().catch(e => {
                        console.log("Kıraç 100. Yıl marşı çalınamadı:", e);
                        // Dosya yoksa uyarı göster
                        alert("Kıraç 100. Yıl marşı dosyası bulunamadı! Lütfen music/kirac-100-yil-mars.mp3 dosyasını ekleyin.");
                    });
                }
                
                // Buton metnini değiştir
                const dangerText = dangerBtn.querySelector('.danger-text');
                if (dangerText) {
                    dangerText.textContent = 'FENERBAHÇE! 💛💙';
                }
                
                // Buton stilini değiştir
                dangerBtn.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.95), rgba(30, 58, 138, 0.95))';
                dangerBtn.style.borderColor = 'rgba(255, 215, 0, 0.6)';
                dangerBtn.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6), 0 0 0 1px rgba(255, 215, 0, 0.2) inset, 0 0 15px rgba(255, 215, 0, 0.5)';
            } else {
                // Temayı kapat
                document.body.classList.remove('fenerbahce-theme');
                fenerbahceActive = false;
                
                // Kıraç 100. Yıl marşını durdur
                if (fenerbahceMars && !fenerbahceMars.paused) {
                    fenerbahceMars.pause();
                    fenerbahceMars.currentTime = 0;
                }
                
                // Maroon'u tekrar başlat
                const backgroundAudio = document.getElementById('backgroundAudio');
                if (backgroundAudio) {
                    backgroundAudio.volume = 0.4;
                    backgroundAudio.play().catch(e => console.log("Maroon çalınamadı:", e));
                }
                
                // Buton metnini geri al
                const dangerText = dangerBtn.querySelector('.danger-text');
                if (dangerText) {
                    dangerText.textContent = 'SAKIN BASMA';
                }
                
                // Buton stilini geri al
                dangerBtn.style.background = '';
                dangerBtn.style.borderColor = '';
                dangerBtn.style.boxShadow = '';
            }
        });
    }
    
    // Quiz başlatma
    const startQuizBtn = document.getElementById('startQuizBtn');
    startQuizBtn.addEventListener('click', startQuiz);
    
    // Hakkımızda Quiz başlatma
    const startHakkimizdaQuizBtn = document.getElementById('startHakkimizdaQuizBtn');
    if (startHakkimizdaQuizBtn) {
        startHakkimizdaQuizBtn.addEventListener('click', startHakkimizdaQuiz);
    }
});

// Taylor Swift bilgilerini göster
function displayTaylorFacts() {
    const infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = '';
    
    taylorFacts.forEach((fact, index) => {
        const factCard = document.createElement('div');
        factCard.className = 'fact-card';
        factCard.style.animationDelay = (index * 0.1) + 's';
        factCard.innerHTML = `
            <div class="fact-icon">${fact.icon}</div>
            <h3>${fact.title}</h3>
            <p>${fact.content}</p>
        `;
        infoContent.appendChild(factCard);
    });
}

// Quiz değişkenleri
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// Quiz başlat
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizQuestions').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    
    showQuestion();
}

// Soru göster
function showQuestion() {
    const quizQuestions = document.getElementById('quizQuestions');
    const question = taylorQuiz[currentQuestion];
    
    quizQuestions.innerHTML = `
        <div class="question-header">
            <span class="question-number">Soru ${currentQuestion + 1} / ${taylorQuiz.length}</span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${((currentQuestion + 1) / taylorQuiz.length) * 100}%"></div>
            </div>
        </div>
        <div class="question-content">
            <h3 class="question-text">${question.question}</h3>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectAnswer(${index})">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Cevap seç
function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    const question = taylorQuiz[currentQuestion];
    
    if (answerIndex === question.correct) {
        score++;
    }
    
    // Tüm butonları devre dışı bırak
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === answerIndex && index !== question.correct) {
            btn.classList.add('wrong');
        }
    });
    
    // Sonraki soruya geç
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < taylorQuiz.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Sonuçları göster
function showResults() {
    const quizQuestions = document.getElementById('quizQuestions');
    const quizResults = document.getElementById('quizResults');
    
    quizQuestions.style.display = 'none';
    quizResults.style.display = 'block';
    
    const percentage = Math.round((score / taylorQuiz.length) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
        message = 'Mükemmel! Sen gerçek bir Swiftie\'sin! 🎉';
        emoji = '👑';
    } else if (percentage >= 80) {
        message = 'Harika! Taylor Swift konusunda çok iyisin! 🌟';
        emoji = '✨';
    } else if (percentage >= 60) {
        message = 'İyi gidiyorsun! Biraz daha pratik yapmalısın! 💫';
        emoji = '🎵';
    } else if (percentage >= 40) {
        message = 'Fena değil ama daha çok öğrenmelisin! 📚';
        emoji = '🎸';
    } else {
        message = 'Taylor Swift hakkında daha fazla şey öğrenmelisin! 🎤';
        emoji = '💕';
    }
    
    quizResults.innerHTML = `
        <div class="results-content">
            <div class="results-emoji">${emoji}</div>
            <h3>${message}</h3>
            <div class="score-display">
                <p class="score-text">Skorun: <span class="score-number">${score} / ${taylorQuiz.length}</span></p>
                <p class="score-percentage">${percentage}%</p>
            </div>
            <div class="results-details">
                <h4>Detaylar:</h4>
                <div class="answers-list">
                    ${taylorQuiz.map((q, index) => {
                        const userAnswer = userAnswers[index];
                        const isCorrect = userAnswer === q.correct;
                        const correctAnswerText = q.options[q.correct];
                        const userAnswerText = userAnswer !== null ? q.options[userAnswer] : 'Cevaplanmadı';
                        return `
                            <div class="answer-item ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                                <div class="answer-item-header">
                                    <span class="answer-number">${index + 1}.</span>
                                    <span class="answer-text">${q.question}</span>
                                    <span class="answer-status">${isCorrect ? '✓' : '✗'}</span>
                                </div>
                                <div class="answer-details">
                                    ${!isCorrect ? `<span class="user-answer">Senin cevabın: ${userAnswerText}</span>` : ''}
                                    <span class="correct-answer-text">Doğru cevap: ${correctAnswerText}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <button class="restart-quiz-btn" onclick="startQuiz()">Tekrar Dene 🔄</button>
        </div>
    `;
}

// Hakkımızda Quiz değişkenleri
let hakkimizdaCurrentQuestion = 0;
let hakkimizdaScore = 0;
let hakkimizdaUserAnswers = [];

// Hakkımızda Quiz başlat
function startHakkimizdaQuiz() {
    hakkimizdaCurrentQuestion = 0;
    hakkimizdaScore = 0;
    hakkimizdaUserAnswers = [];
    
    const hakkimizdaQuizStart = document.getElementById('hakkimizdaQuizStart');
    const hakkimizdaQuizQuestions = document.getElementById('hakkimizdaQuizQuestions');
    const hakkimizdaQuizResults = document.getElementById('hakkimizdaQuizResults');
    
    hakkimizdaQuizStart.style.display = 'none';
    hakkimizdaQuizQuestions.style.display = 'block';
    hakkimizdaQuizResults.style.display = 'none';
    
    showHakkimizdaQuestion();
}

// Hakkımızda soruyu göster
function showHakkimizdaQuestion() {
    const hakkimizdaQuizQuestions = document.getElementById('hakkimizdaQuizQuestions');
    const question = hakkimizdaQuiz[hakkimizdaCurrentQuestion];
    
    hakkimizdaQuizQuestions.innerHTML = `
        <div class="question-header">
            <span class="question-number">Soru ${hakkimizdaCurrentQuestion + 1} / ${hakkimizdaQuiz.length}</span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${((hakkimizdaCurrentQuestion + 1) / hakkimizdaQuiz.length) * 100}%"></div>
            </div>
        </div>
        <div class="question-content">
            <h3 class="question-text">${question.question}</h3>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectHakkimizdaAnswer(${index})">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Hakkımızda cevap seç
function selectHakkimizdaAnswer(answerIndex) {
    const question = hakkimizdaQuiz[hakkimizdaCurrentQuestion];
    hakkimizdaUserAnswers[hakkimizdaCurrentQuestion] = answerIndex;
    
    if (answerIndex === question.correct) {
        hakkimizdaScore++;
    }
    
    // Tüm butonları devre dışı bırak
    const optionBtns = document.querySelectorAll('#hakkimizdaQuizQuestions .option-btn');
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === answerIndex && index !== question.correct) {
            btn.classList.add('wrong');
        }
    });
    
    // Sonraki soruya geç
    setTimeout(() => {
        hakkimizdaCurrentQuestion++;
        if (hakkimizdaCurrentQuestion < hakkimizdaQuiz.length) {
            showHakkimizdaQuestion();
        } else {
            showHakkimizdaResults();
        }
    }, 1500);
}

// Hakkımızda sonuçları göster
function showHakkimizdaResults() {
    const hakkimizdaQuizQuestions = document.getElementById('hakkimizdaQuizQuestions');
    const hakkimizdaQuizResults = document.getElementById('hakkimizdaQuizResults');
    
    hakkimizdaQuizQuestions.style.display = 'none';
    hakkimizdaQuizResults.style.display = 'block';
    
    const percentage = Math.round((hakkimizdaScore / hakkimizdaQuiz.length) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
        message = 'Mükemmel! Tüm anılarımızı hatırlıyorsun! 🎉';
        emoji = '👑';
    } else if (percentage >= 80) {
        message = 'Harika! Anılarımızı çok iyi hatırlıyorsun! 🌟';
        emoji = '✨';
    } else if (percentage >= 60) {
        message = 'İyi gidiyorsun! Biraz daha hatırlamalısın! 💫';
        emoji = '🎵';
    } else if (percentage >= 40) {
        message = 'Fena değil ama daha çok hatırlamalısın! 📚';
        emoji = '🎸';
    } else {
        message = 'Anılarımızı daha çok hatırlamalısın! 🎤';
        emoji = '💕';
    }
    
    hakkimizdaQuizResults.innerHTML = `
        <div class="results-content">
            <div class="results-emoji">${emoji}</div>
            <h3>${message}</h3>
            <div class="score-display">
                <p class="score-text">Skorun: <span class="score-number">${hakkimizdaScore} / ${hakkimizdaQuiz.length}</span></p>
                <p class="score-percentage">${percentage}%</p>
            </div>
            <div class="results-details">
                <h4>Detaylar:</h4>
                <div class="answers-list">
                    ${hakkimizdaQuiz.map((q, index) => {
                        const userAnswer = hakkimizdaUserAnswers[index];
                        const isCorrect = userAnswer === q.correct;
                        const correctAnswerText = q.options[q.correct];
                        const userAnswerText = userAnswer !== null ? q.options[userAnswer] : 'Cevaplanmadı';
                        return `
                            <div class="answer-item ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                                <div class="answer-item-header">
                                    <span class="answer-number">${index + 1}.</span>
                                    <span class="answer-text">${q.question}</span>
                                    <span class="answer-status">${isCorrect ? '✓' : '✗'}</span>
                                </div>
                                <div class="answer-details">
                                    ${!isCorrect ? `<span class="user-answer">Senin cevabın: ${userAnswerText}</span>` : ''}
                                    <span class="correct-answer-text">Doğru cevap: ${correctAnswerText}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <button class="restart-quiz-btn" onclick="startHakkimizdaQuiz()">Tekrar Dene 🔄</button>
        </div>
    `;
}

