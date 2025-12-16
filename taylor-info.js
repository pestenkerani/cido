// Taylor Swift Bilgileri
const taylorFacts = [
    {
        icon: "🎂",
        title: "Doğum Tarihi",
        content: "Taylor Swift, 13 Aralık 1989'da Pensilvanya, ABD'de doğdu. İsmi, annesinin favori müzisyenlerinden James Taylor'dan esinlenerek verildi."
    },
    {
        icon: "🎸",
        title: "Müzik Kariyeri",
        content: "14 yaşında Nashville, Tennessee'ye taşınarak müzik kariyerine başladı. 2006'da ilk albümünü yayımladı ve 'Our Song' ile country listelerinde bir numaraya ulaştı."
    },
    {
        icon: "🏆",
        title: "Grammy Rekorları",
        content: "2024'te 'Midnights' albümüyle Grammy'de 'Yılın Albümü' kategorisinde dördüncü kez ödül kazanarak bu kategoride en çok ödül alan sanatçı oldu."
    },
    {
        icon: "💰",
        title: "Eras Tour",
        content: "2024'te 'Eras Tour' dünya turnesiyle 2 milyar dolar gelir elde ederek en yüksek hasılat yapan konser turu rekorunu kırdı."
    },
    {
        icon: "🎹",
        title: "Çok Yönlü Müzisyen",
        content: "12 yaşında ilk şarkısını yazıp besteleyen Swift, gitar, piyano, ukulele ve banjo çalabiliyor."
    },
    {
        icon: "💍",
        title: "Kişisel Hayat",
        content: "2023'te Amerikan futbolu oyuncusu Travis Kelce ile ilişkiye başladı ve 2025'te nişanlandılar."
    },
    {
        icon: "📀",
        title: "Albüm Başarıları",
        content: "2025'te 'The Life of a Showgirl' albümü ilk haftasında 4 milyon satış rakamına ulaşarak ABD'de en büyük çıkış yapan albüm oldu."
    },
    {
        icon: "🎵",
        title: "Müzik Tarzı",
        content: "Kariyerine country müzikle başladı, zamanla pop ve diğer türlere yönelerek geniş bir dinleyici kitlesine ulaştı."
    }
];

// Taylor Swift Quiz Soruları
const taylorQuiz = [
    {
        question: "Taylor Swift hangi tarihte doğdu?",
        options: ["13 Aralık 1989", "13 Kasım 1989", "13 Ekim 1989", "13 Eylül 1989"],
        correct: 0
    },
    {
        question: "Taylor Swift'in ilk albümü hangi yılda yayımlandı?",
        options: ["2004", "2005", "2006", "2007"],
        correct: 2
    },
    {
        question: "Taylor Swift kaç Grammy 'Yılın Albümü' ödülü kazandı?",
        options: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        question: "Eras Tour kaç milyar dolar gelir elde etti?",
        options: ["1 milyar", "1.5 milyar", "2 milyar", "2.5 milyar"],
        correct: 2
    },
    {
        question: "Taylor Swift hangi enstrümanları çalabilir?",
        options: ["Sadece gitar", "Gitar ve piyano", "Gitar, piyano, ukulele, banjo", "Sadece piyano"],
        correct: 2
    },
    {
        question: "Taylor Swift'in ismi nereden geliyor?",
        options: ["Babasının isminden", "James Taylor'dan esinlenerek", "Rastgele seçildi", "Annesinin isminden"],
        correct: 1
    },
    {
        question: "Taylor Swift kaç yaşında ilk şarkısını yazdı?",
        options: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        question: "Taylor Swift hangi şehre taşınarak müzik kariyerine başladı?",
        options: ["Los Angeles", "New York", "Nashville", "Miami"],
        correct: 2
    },
    {
        question: "Taylor Swift'in 2025'te nişanlandığı kişi kimdir?",
        options: ["Joe Alwyn", "Travis Kelce", "Calvin Harris", "Tom Hiddleston"],
        correct: 1
    },
    {
        question: "Hangi albüm Taylor Swift'in ilk haftasında 4 milyon satış yaptı?",
        options: ["Midnights", "Folklore", "The Life of a Showgirl", "1989"],
        correct: 2
    },
    {
        question: "Taylor Swift'in ilk country listelerinde bir numaraya ulaşan şarkısı hangisidir?",
        options: ["Love Story", "Our Song", "Teardrops on My Guitar", "Tim McGraw"],
        correct: 1
    },
    {
        question: "Taylor Swift hangi müzik türüyle kariyerine başladı?",
        options: ["Pop", "Rock", "Country", "R&B"],
        correct: 2
    },
    {
        question: "Taylor Swift kaç yaşında Nashville'e taşındı?",
        options: ["12", "13", "14", "15"],
        correct: 2
    },
    {
        question: "Taylor Swift'in 2024'te Grammy kazandığı albüm hangisidir?",
        options: ["Folklore", "Evermore", "Midnights", "Lover"],
        correct: 2
    },
    {
        question: "Taylor Swift Travis Kelce ile hangi yılda ilişkiye başladı?",
        options: ["2021", "2022", "2023", "2024"],
        correct: 2
    },
    {
        question: "Taylor Swift hangi albümle pop müziğe geçiş yaptı?",
        options: ["Red", "1989", "Reputation", "Lover"],
        correct: 1
    },
    {
        question: "Taylor Swift'in 'Fearless' albümüyle kazandığı Grammy ödülü hangisidir?",
        options: ["Yılın Şarkısı", "Yılın Albümü", "En İyi Yeni Sanatçı", "En İyi Pop Albümü"],
        correct: 1
    },
    {
        question: "'Look What You Made Me Do' şarkısı hangi albümde yer alır?",
        options: ["1989", "Reputation", "Lover", "Midnights"],
        correct: 1
    },
    {
        question: "Taylor Swift hangi yıl Time dergisi tarafından 'Yılın Kişisi' seçildi?",
        options: ["2021", "2022", "2023", "2024"],
        correct: 2
    },
    {
        question: "'You Need to Calm Down' şarkısı hangi albümde bulunur?",
        options: ["Reputation", "Lover", "Folklore", "Evermore"],
        correct: 1
    },
    {
        question: "Taylor Swift 2020'de sürpriz şekilde hangi iki albümü yayımladı?",
        options: ["Folklore ve Evermore", "Lover ve Midnights", "1989 ve Reputation", "Red ve Speak Now"],
        correct: 0
    },
    {
        question: "Taylor Swift'in 'Mean' şarkısı hangi albümde yer alır?",
        options: ["Fearless", "Speak Now", "Red", "1989"],
        correct: 1
    },
    {
        question: "Taylor Swift eski albümlerinin haklarını geri almak için şarkılarını hangi isimle yeniden yayımladı?",
        options: ["Deluxe Edition", "Taylor's Version", "Remastered", "Special Edition"],
        correct: 1
    },
    {
        question: "'We Are Never Ever Getting Back Together' hangi albümde bulunur?",
        options: ["Speak Now", "Red", "1989", "Reputation"],
        correct: 1
    },
    {
        question: "Taylor Swift'in çocukluk hobisi neydi?",
        options: ["Piyano çalmak", "İngiliz biniciliği", "Şarkı yazmak", "Gitar çalmak"],
        correct: 1
    },
    {
        question: "Taylor Swift kaç Grammy Ödülü kazandı?",
        options: ["10", "12", "14", "16"],
        correct: 2
    },
    {
        question: "'Midnights' albümü hangi yıl yayımlandı?",
        options: ["2020", "2021", "2022", "2023"],
        correct: 2
    },
    {
        question: "Taylor Swift hangi yıl Forbes tarafından milyarder olarak listelendi?",
        options: ["2021", "2022", "2023", "2024"],
        correct: 2
    },
    {
        question: "Taylor Swift'in '1989' albümü dünya çapında kaç milyon kopya sattı?",
        options: ["10 milyon", "12 milyon", "14 milyon", "16 milyon"],
        correct: 2
    },
    {
        question: "Taylor Swift'in 'All Too Well' şarkısının 10 dakikalık versiyonu hangi albümde yer alır?",
        options: ["Red", "Red (Taylor's Version)", "Folklore", "Evermore"],
        correct: 1
    }
];

// Hakkımızda Quiz Soruları
const hakkimizdaQuiz = [
    {
        question: "İlk buluşmamız nerede oldu?",
        options: ["Starbucks", "Atakule", "Kupa", "Bahçelievler"],
        correct: 2  // C
    },
    {
        question: "İlk yediğimiz tatlı nedir?",
        options: ["Baklava", "Trileçe", "Sufle", "Cheesecake"],
        correct: 1  // B
    },
    {
        question: "Atakule'de Çido'nun içtiği şarap?",
        options: ["Kavaklıdere Beyaz Şarap", "Kavaklıdere Kırmızı Şarap", "Doluca Şarap", "Sarafin Şarap"],
        correct: 0  // A
    },
    {
        question: "Atakule'de Dodo'nun yediği yemek?",
        options: ["Burger", "Cafe de Paris", "Pizza", "Makarna"],
        correct: 1  // B
    },
    {
        question: "29 Ekim'de yediğimiz yemek?",
        options: ["Döner", "Lahmacun", "Tavuk Kulbastı", "Kebap"],
        correct: 2  // C
    },
    {
        question: "İlk öpüştüğümüz gün nerede oturduk?",
        options: ["Kupa", "Atakule", "Bahçelievler Starbucks", "Ev"],
        correct: 3  // D
    },
    {
        question: "İlk sinemaya hangi tarihte gittik?",
        options: ["23 Kasım 2025", "24 Kasım 2025", "22 Kasım 2025", "25 Kasım 2025"],
        correct: 0  // A
    },
    {
        question: "Seni ghostladığımı düşündüğün tarih aralığı?",
        options: ["10-14 Ekim", "9-13 Ekim", "8-12 Ekim", "11-15 Ekim"],
        correct: 1  // B
    },
    {
        question: "Birlikte izlediğimiz Fenerbahçe maçında rakip kimdi?",
        options: ["Rizepor", "Galatasaray", "Beşiktaş", "Trabzonspor"],
        correct: 0  // A
    },
    {
        question: "Çido'nun 'İlk aşkım' dediği tarih?",
        options: ["5 Aralık 2025", "3 Aralık 2025", "4 Aralık 2025", "6 Aralık 2025"],
        correct: 3  // D
    }
];

