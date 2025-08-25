✨ Proje Yapısı
Bu proje, anlaşılır, bakımı kolay ve ölçeklenebilir bir yapıya sahiptir. Aşağıda, her klasör ve dosyanın ayrıntılı bir genel bakışını bulabilirsiniz.

📁 Dizin Ağacı
.
├── 📦 node_modules/ # Yüklü bağımlılıklar (otomatik oluşturulur)
│ ├── pg/ # PostgreSQL istemci kütüphanesi
│ ├── dotenv/ # .env dosyasından ortam değişkenlerini yükler
│ └── ... # Diğer npm bağımlılıkları
│
├── 🛠 .env # Ortam değişkenleri (Git tarafından izlenmez)
├── 📄 .env.exp # Örnek ortam dosyası
├── 📝 .gitignore # Git tarafından göz ardı edilen dosya ve dizinler
├── ⚙️ .gitattributes # Platformlar arası Git uyumluluğu için yapılandırma
│
├── 🚀 app.js # Ana script:
│ │ - PostgreSQL'e bağlanır
│ │ - Örnek bir SQL sorgusu çalıştırır
│ │ - Hataları zarifçe yönetir
│ │ - Sonuçları konsola kaydeder
│
├── 📦 package.json # Proje manifestosu:
│ │ - Proje meta verileri (isim, versiyon, açıklama)
│ │ - Uygulamayı çalıştırmak için scriptler
│ │ - Bağımlılıklar ve geliştirme bağımlılıkları
│
├── 🔒 package-lock.json # Kesin bağımlılık versiyonlarını kilitler
│
└── 📖 README.md # Proje belgeleri:
│ - Kurulum kılavuzu
│ - Kullanım örnekleri
│ - Özelliklere genel bakış
│ - Katkıda bulunma yönergeleri
📌 Ayrıntılı Açıklamalar
Dosya / Klasör	Açıklama
📦 node_modules/	Tüm yüklü npm paketlerini içerir. Manuel olarak değiştirmeyin; bunun yerine npm install komutunu kullanın.
🛠 .env	Veritabanı kimlik bilgileri gibi hassas ortam değişkenlerini saklar.
📄 .env.exp	.env dosyası için bir şablon sunar; bu, geliştiricilerin ortamlarını hızla kurmalarına yardımcı olur.
📝 .gitignore	Sürüm kontrolünden dışlanacak dosya ve klasörleri (.env, node_modules gibi) listeler.
⚙️ .gitattributes	Farklı işletim sistemlerinde tutarlı Git davranışını (satır sonları, kodlama) sağlar.
🚀 app.js	PostgreSQL bağlantısını, sorgu yürütmeyi ve sonuçları loglamayı yöneten ana script'tir. Yeni sorgular veya CRUD işlemleri için kolayca genişletilebilir.
📦 package.json	Proje meta verilerini, bağımlılıkları ve npm scriptlerini yönetir.
🔒 package-lock.json	Tüm bağımlılık versiyonlarını kesin olarak kilitleyerek farklı ortamlarda tutarlı kurulumları garanti eder.
📖 README.md	Proje belgelerini, kullanım talimatlarını ve katkıda bulunma yönergelerini içerir.

E-Tablolar'a aktar
💡 En İyi Uygulamalar
node_modules klasörünü dokunulmaz tutun — bağımlılıkları npm install ile yönetin.

Kimlik bilgilerini versiyon kontrolüne (Git) göndermemek için hassas verileri .env dosyasında saklayın.

Yeni dosyalar eklerken (sorgular, yardımcı programlar vb.) tutarlı bir yapıyı koruyun.

Tüm katkıda bulunanları aynı sayfada tutmak için yeni özellikleri README.md dosyasında belgeleyin.

"Bende çalışıyordu" sorunlarını önlemek için package-lock.json dosyasını kullanın.
