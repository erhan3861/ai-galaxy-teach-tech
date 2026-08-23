(() => {
  const lessons = {
    4: {
      title: 'Ders Planı Geliştirme',
      duration: '18 dakika',
      hero: 'Planı doldurmayın; öğrenme yolunu görünür kılın.',
      intro: 'AI-GALAXY’den önce hedefi ve kanıtı verin. Sonra zamanı öğretmen anlatımına değil, öğrenci düşünmesine göre bölün.',
      image: 'assets/ders4-lesson-flow.jpg',
      pills: ['Hedef → kanıt → akış', '7 ayrı istem', 'Her branşa uygun'],
      modelTitle: 'Dört parçalı uygulanabilir plan',
      modelText: 'İyi plan, etkinlik listesinden önce öğrenme hizasını gösterir.',
      steps: [['🎯', 'Hedef', 'Ders sonunda ne yapılacak?'], ['🔎', 'Kanıt', 'Bunu ne gösterecek?'], ['⏱️', 'Akış', 'Öğrenci ne zaman düşünecek?'], ['↻', 'Uyarlama', 'Anlamazsa ne değişecek?']],
      rule: 'Önce kanıtı seçin; sonra etkinliği üretin.',
      side: 'Her bölümde öğretmen ve öğrenci eylemini ayrı yazdırın. “Konu anlatımı” tek başına plan değildir.',
      password: 'plan',
      source: ['OpenAI Academy', 'https://academy.openai.com/public/clubs/k-12-education-aacga/blogs/build-a-complete-lesson-resource-pack-2026-05-21'],
      practices: [
        ['Basit plan iskeleti', 'İlk taslakta yalnızca gerekli parçaları isteyin.', '“Yarın kullanabileceğim sade bir omurga.”', 'Basit', ['hedef', 'süre', 'kanıt'], `[Sınıf] [branş] dersinde “[öğrenme hedefi]” için [40] dakikalık plan iskeleti oluştur. Yalnızca şu başlıkları kullan: ön bilgiyi yoklama, kısa öğretim, öğrenci uygulaması, anlama kontrolü ve çıkış bileti. Her bölümün süresini yaz. Yeni kazanım ekleme.`],
        ['Dakika dakika eylem', 'Planı öğretmen değil öğrenci eylemi üzerinden görünür kılın.', '“Her dakikanın öğrenmeye hizmeti olsun.”', 'Orta', ['öğretmen eylemi', 'öğrenci eylemi', 'süre'], `[Sınıf/branş] için şu hedefe yönelik [40] dakikalık ders akışı yaz: “[hedef]”. 3 sütunlu tablo kullan: süre, öğretmen eylemi, öğrenci eylemi. En az yarı sürede öğrenciler konuşsun, çözsün, üretsin veya gerekçelendirsin. Son 5 dakikada hedefle eşleşen bir kanıt topla.`],
        ['Ön bilgi köprüsü', 'Yeni konuyu, öğrencinin bildiği günlük bir durumla bağlayın.', '“Isınma değil; tanılayıcı köprü.”', 'Orta', ['ön bilgi', 'günlük hayat', 'yanılgı'], `[Hedef] için 5 dakikalık bir “ön bilgi köprüsü” tasarla. Öğrencinin günlük hayattan tanıyacağı tek durum kullan. 1 tahmin sorusu, 1 kısa eşli konuşma ve öğretmenin dinleyeceği 2 olası kavram yanılgısı ver. Doğru cevabı etkinlik başlamadan açıklama.`],
        ['Geniş katılımlı kontrol', 'Sadece gönüllü öğrencilerden değil, sınıfın tamamından kanıt toplayın.', '“Parmak kaldıran üç kişi sınıfın tamamı değildir.”', 'Orta', ['tüm sınıf', 'hızlı kanıt', 'karar'], `[Hedef] için ders ortasında uygulanacak 3 dakikalık anlama kontrolü oluştur. Tüm öğrencilerin aynı anda yanıt verebileceği bir yöntem kullan. Doğru, kısmen doğru ve hatalı yanıt örneği ver; her yanıt türünde öğretmenin bir sonraki hamlesini tek cümleyle yaz.`],
        ['B planı', 'Zaman, teknoloji veya hazırbulunuşluk değiştiğinde hedefi koruyun.', '“Plan bozulsa da hedef bozulmasın.”', 'Pratik', ['teknolojisiz', '20 dakika', 'aynı hedef'], `Aşağıdaki ders planı için iki yedek sürüm üret: 1) süre 40 dakikadan 20 dakikaya düşerse, 2) internet/akıllı tahta çalışmazsa. Öğrenme hedefi ve başarı kanıtı aynı kalsın. Her sürümde yalnızca vazgeçilecek adımı ve yerine gelecek düşük hazırlıklı seçeneği yaz. Plan: [planı yapıştır].`],
        ['Plan hizası denetimi', 'AI’dan yeni plan değil, mevcut planın açıklarını isteyin.', '“Etkinlik eğlenceli olabilir; hedefle uyumlu mu?”', 'Kontrol', ['hedef', 'kanıt', 'etkinlik'], `Aşağıdaki planı hedef–kanıt–etkinlik hizası açısından denetle. Her etkinlik için “hedefe doğrudan hizmet ediyor / dolaylı / gereksiz” etiketi ver ve kısa gerekçe yaz. Yeni plan yazma. En kritik 2 düzeltmeyi öner; pedagojik kararı öğretmene bırak. Hedef: [hedef]. Plan: [plan].`],
        ['Yarın uygulanabilir son sürüm', 'Parçaları tek, sade öğretmen belgesinde birleştirin.', '“Uzun rapor değil; masada açık kalacak plan.”', 'Kapsamlı', ['tek sayfa', 'malzeme', 'kontrol'], `[Sınıf/branş], hedef “[hedef]”, süre [süre], ön bilgi [ön bilgi]. Yarın uygulanabilir tek sayfalık ders planı taslağı üret. Hedef, gerekli malzeme, zamanlı akış, öğretmen/öğrenci eylemleri, bir anlama kontrolü, çıkış bileti ve gerekirse B planı olsun. Tablo kullan; her bölüm kısa olsun. Doğrulanacak noktaları sona ekle.`]
      ]
    },
    5: {
      title: 'İçeriği Öğrenci Düzeyine Uyarlama',
      duration: '18 dakika',
      hero: 'Hedefi küçültmeden engeli küçültün.',
      intro: 'Uyarlama “kolaylaştırma” değildir. Aynı öğrenme hedefini koruyup erişim, dil, temsil ve ifade seçeneklerini çoğaltır.',
      image: 'assets/ders5-udl-lenses.jpg',
      pills: ['Aynı hedef', 'UDL merceği', '7 ayrı istem'],
      modelTitle: 'Uyarlamanın üç merceği',
      modelText: 'Öğrenci çeşitliliğini sonradan eklenen destek değil, tasarım girdisi olarak görün.',
      steps: [['❤️', 'Katılım', 'Neden ilgilensin?'], ['👁️', 'Temsil', 'Bilgiyi nasıl algılasın?'], ['🛠️', 'Eylem', 'Öğrendiğini nasıl göstersin?'], ['🎯', 'Hedef', 'Beklenti aynı mı?']],
      rule: 'Dili sadeleştirin; düşünme talebini silmeyin.',
      side: 'Her uyarlamadan sonra “Hedef hâlâ aynı kanıtla ölçülüyor mu?” sorusunu sorun.',
      password: 'uyarlama',
      source: ['CAST UDL 3.0', 'https://udlguidelines.cast.org/'],
      practices: [
        ['Dili sadeleştir', 'Cümleyi kısaltın, kavramı kaybetmeyin.', '“Az sözcük; aynı akademik anlam.”', 'Basit', ['kısa cümle', 'anahtar kavram', 'örnek'], `Aşağıdaki öğrenci metnini [sınıf] düzeyi için sadeleştir. Ana kavramları ve neden–sonuç ilişkisini koru. Cümleleri kısalt; gereksiz yan cümleleri çıkar; en fazla 5 anahtar sözcüğü parantez içinde açıkla. Bilimsel/tarihsel anlamı değiştirme. Sonunda “koruduğum fikirler” başlığıyla 3 madde ver. Metin: [metin].`],
        ['Sözcük iskelesi', 'Önceden öğretilecek sözcükleri ve cümle başlangıçlarını seçin.', '“Sözlük değil; görevi yapmaya yarayan dil desteği.”', 'Orta', ['5 sözcük', 'cümle kalıbı', 'örnek'], `[Hedef] görevini yapacak [sınıf] öğrencileri için dil iskelesi oluştur. Yalnızca görevde zorunlu 5 sözcüğü seç; öğrenci dostu tanım ve kısa örnek ver. Ardından gerekçelendirme için 3 cümle başlangıcı yaz. Cevabı verme; öğrencinin düşünmesini destekle.`],
        ['Çoklu temsil', 'Aynı fikri metin, görsel düzen ve günlük örnekle sunun.', '“Tek açıklama, tek erişim yolu demektir.”', 'Orta', ['metin', 'şema', 'benzetme'], `[Kavram] için aynı akademik anlamı taşıyan üç temsil taslağı üret: 1) 80 kelimelik açıklama, 2) oklar ve kısa etiketlerle metinsel şema, 3) yaşa uygun günlük yaşam benzetmesi. Benzetmenin nerede yetersiz kaldığını ayrıca belirt. Sınıf: [sınıf].`],
        ['İfade seçeneği', 'Öğrenciye hedeften sapmadan farklı kanıt yolları verin.', '“Ürün değişebilir; başarı ölçütü değişmez.”', 'Orta', ['yazılı', 'sözlü', 'görsel'], `Hedef “[hedef]” için öğrencinin öğrenmesini gösterebileceği 3 eşdeğer ürün seçeneği tasarla: kısa yazılı, sözlü/sesli ve görsel/model. Üçünde de aynı 3 başarı ölçütü kullanılabilsin. Her seçeneğin yaklaşık süresini ve gerekli aracını yaz. Beklentiyi düşürme.`],
        ['Kademeli destek', 'Başlangıç desteği, standart görev ve genişletme üretin.', '“Üç ayrı ders değil; aynı hedefe üç erişim yolu.”', 'Pratik', ['destek', 'standart', 'genişletme'], `Aşağıdaki görevi aynı hedefi koruyarak üç erişim düzeyine uyarla: A) ek desteğe ihtiyaç duyanlar için ipucu ve parçalara bölme, B) standart görev, C) hazır öğrenciler için daha fazla gerekçelendirme/transfer. C sürümüne yeni konu ekleme. Görev: [görev]. Hedef: [hedef].`],
        ['Yönerge erişilebilirliği', 'Öğrencinin bağımsız okuyabileceği adımlar üretin.', '“Yönerge anlaşılmıyorsa görev ölçülmez.”', 'Kontrol', ['numaralı adım', 'tek eylem', 'kontrol kutusu'], `Aşağıdaki yönergeyi bağımsız öğrenci kullanımı için yeniden yaz. Her adım tek eylem içersin, numaralı olsun ve 8 adımı geçmesin. Gerekli malzemeyi başa, teslim ölçütünü sona koy. Anlamı veya başarı beklentisini değiştirme. Belirsiz bulduğun yeri öğretmene soru olarak işaretle. Yönerge: [metin].`],
        ['Uyarlama kalite denetimi', 'Desteğin hedefi yanlışlıkla düşürüp düşürmediğini görün.', '“Destek, öğrencinin yerine düşünmemeli.”', 'Kontrol', ['engel', 'destek', 'hedef'], `Aşağıdaki uyarlamayı denetle. Tablo sütunları: hedefte gereken düşünme, kaldırılan erişim engeli, verilen destek, istemeden düşürülen beklenti var mı? “Var” ise hedefi koruyan tek düzeltme öner. Öğrenci hakkında tanı koyma veya varsayım üretme. Hedef: [hedef]. Uyarlama: [uyarlama].`]
      ]
    },
    6: {
      title: 'Öğretim Materyali Tasarlama',
      duration: '18 dakika',
      hero: 'Materyal güzel görünmekten önce düşündürmelidir.',
      intro: 'AI-GALAXY’yi metin doldurmak için değil; bir kavramı görünür, kullanılabilir ve kontrol edilebilir bir öğrenme aracına dönüştürmek için kullanın.',
      image: 'assets/ders6-material-craft.jpg',
      pills: ['Tek amaç', 'Görsel hiyerarşi', '7 ayrı istem'],
      modelTitle: 'Bir sayfalık materyal filtresi',
      modelText: 'Her materyal öğrencinin tek bir bilişsel eylemini kolaylaştırmalı.',
      steps: [['1️⃣', 'Amaç', 'Öğrenci ne yapacak?'], ['🧱', 'Yapı', 'Bilgi nasıl gruplanacak?'], ['👀', 'Görsel', 'Neye önce bakacak?'], ['✓', 'Kontrol', 'Doğru ve erişilebilir mi?']],
      rule: 'Bir sayfa, bir ana amaç, bir öğrenci eylemi.',
      side: 'Dekoratif görsel yerine ilişkiyi, sıralamayı veya karşılaştırmayı açıklayan görsel isteyin.',
      password: 'materyal',
      source: ['OpenAI Classroom Images', 'https://academy.openai.com/public/clubs/k-12-education-aacga/blogs/turn-classroom-images-into-study-materials-2026-05-21'],
      practices: [
        ['Tek sayfalık çalışma kâğıdı', 'Yönerge, çalışma alanı ve kontrolü aynı sayfada tutun.', '“Fotokopiden çıkınca da anlaşılır olsun.”', 'Basit', ['tek sayfa', '3 bölüm', 'cevap alanı'], `[Sınıf/branş] için “[hedef]” odaklı tek sayfalık çalışma kâğıdı taslağı yaz. Üç bölüm kullan: kısa hatırlatma, 4 öğrencilik görev, öz kontrol. Yönergeler öğrenci dilinde olsun; cevap için yeterli boşluk/alan öner. Gereksiz süs, uzun açıklama ve yeni kazanım ekleme.`],
        ['Slayt omurgası', 'Slaytı öğretmen metni değil, dikkat yönlendirme aracı yapın.', '“Bir slayt = bir ana fikir.”', 'Orta', ['6 slayt', 'görsel öneri', 'öğrenci sorusu'], `[Kavram] için en fazla 6 slaytlık öğretim omurgası oluştur. Her slaytta: 5 kelimeyi geçmeyen başlık, tek ana fikir, ilişkiyi açıklayan görsel türü ve öğrenciye sorulacak tek soru olsun. Konuşmacı notuna öğretmenin söyleyeceği en fazla 2 cümleyi ekle. Sınıf: [sınıf].`],
        ['Kavram haritası', 'Listeyi ilişki gösteren bir yapıya dönüştürün.', '“Kutular değil, bağlantılar öğretir.”', 'Orta', ['düğüm', 'bağlantı fiili', 'yanılgı'], `[Konu] için metinsel kavram haritası taslağı üret. 1 merkez kavram, en fazla 7 alt kavram ve her ok üzerinde ilişki fiili kullan. Hiyerarşi, neden–sonuç veya parça–bütün ilişkisini açıkça ayır. Sık karıştırılan iki bağlantıyı “öğretmen kontrolü” olarak işaretle.`],
        ['Çalışma kartları', 'Bilgiyi küçük ama anlamlı geri çağırma parçalarına bölün.', '“Ön yüz soru; arka yüz kısa açıklama.”', 'Pratik', ['8 kart', 'geri çağırma', 'karışık tür'], `[Hedef] için 8 çalışma kartı yaz. Kartların 3’ü kavram, 2’si örnek/örnek olmayan, 2’si uygulama, 1’i gerekçelendirme olsun. Her kartta ön yüz sorusu ve arka yüz kısa cevap/açıklama ver. Salt ezber yerine farklı düşünme düzeyleri kullan. Sınıf: [sınıf].`],
        ['Görsel yönerge', 'Bir süreci adım, simge ve kontrol noktalarıyla görünür yapın.', '“Öğrenci her adımda ne yapacağını görsün.”', 'Orta', ['5 adım', 'simge', 'kontrol noktası'], `[Deney/işlem/üretim] için en fazla 5 adımlık görsel yönerge taslağı oluştur. Her adımda kısa eylem fiili, önerilen basit simge ve “tamamlandığını nasıl anlarım?” kontrolü olsun. Güvenlik uyarısını gerekiyorsa ayrı renkle belirt. Görsel üretme; tasarımcıya verilecek net içerik metni yaz.`],
        ['Tahta fotoğrafından çalışma rehberi', 'Mevcut sınıf üretimini tekrar kullanılabilir hâle getirin.', '“Önce isimleri ve özel bilgileri kaldırın.”', 'Pratik', ['kimliksizleştir', 'ana fikir', '3 soru'], `Yükleyeceğim kimliksiz tahta/not görselini tek sayfalık çalışma rehberine dönüştür. Ana fikirleri grupla, en fazla 5 anahtar sözcüğü tanımla ve 3 tekrar sorusu ekle. Okunmayan veya emin olmadığın bölümü uydurma; “[öğretmen kontrol etmeli]” diye işaretle. Görsel: [kimliksiz görseli ekle].`],
        ['Materyal kalite kontrolü', 'Paylaşmadan önce içerik, erişim ve kullanım yükünü denetleyin.', '“Doğru ama kullanışsız materyal de düzeltilmelidir.”', 'Kontrol', ['doğruluk', 'okunabilirlik', 'hedef hizası'], `Aşağıdaki materyali 7 maddelik kontrol listesiyle incele: hedef uyumu, yaş/dil düzeyi, bilimsel doğruluk, görsel hiyerarşi, yönerge açıklığı, erişilebilirlik ve cevap alanı. Her maddeye “uygun / düzelt” yaz; yalnızca en önemli 3 düzeltmeyi öner. Materyal: [metin veya görsel].`]
      ]
    },
    7: {
      title: 'Etkinlik Geliştirme',
      duration: '18 dakika',
      hero: 'Etkinlikte hareket değil, düşünme görünür olsun.',
      intro: 'İyi etkinlik öğrenciyi yalnızca meşgul etmez; tahmin ettirir, konuşturur, ürettirir ve öğrenme kanıtı bırakır.',
      image: 'assets/ders7-active-learning.jpg',
      pills: ['Düşün–yap–konuş–kanıtla', 'Düşük hazırlık', '7 ayrı istem'],
      modelTitle: 'Etkinlik motoru',
      modelText: 'Her etkinlik dört bilişsel duraktan en az üçünü taşısın.',
      steps: [['💭', 'Düşün', 'Tahmin veya seçim'], ['👐', 'Yap', 'Sınıflandır veya üret'], ['💬', 'Konuş', 'Açıkla veya tartış'], ['🔎', 'Kanıtla', 'Ürün veya gerekçe']],
      rule: 'Eğlence amaç değil; öğrenmeye giriş kapısıdır.',
      side: 'Süre, grup rolü, malzeme ve toplanacak kanıtı istemde açıkça belirtin.',
      password: 'etkinlik',
      source: ['MEB Öğrenme Yaşantıları', 'https://tymm.meb.gov.tr/ogrenme-ogretme-yasantilari'],
      practices: [
        ['Günlük yaşam kancası', 'Konuyu öğrencinin tanıdığı bir kararla başlatın.', '“Cevabı anlatma; merak uyandır.”', 'Basit', ['3 dakika', 'tahmin', 'gerekçe'], `[Hedef] için 3 dakikalık günlük yaşam kancası tasarla. Öğrencinin karşılaşabileceği tek bir durum ve iki seçenek ver. Önce bireysel tahmin, sonra yanındakiyle 30 saniyelik gerekçe paylaşımı olsun. Doğru cevabı açıklama; ana etkinliğe geçiş cümlesi yaz.`],
        ['Düşün–eşleş–paylaş', 'Tüm öğrenciyi düşük riskli konuşmaya hazırlayın.', '“Önce düşünme süresi, sonra konuşma.”', 'Orta', ['bireysel', 'eşli', 'sınıf'], `[Kavram] için 8 dakikalık düşün–eşleş–paylaş etkinliği oluştur. 1 açık soru, 60 saniye bireysel not, 3 dakika eşli karşılaştırma ve sınıf paylaşımı ver. Eşlerin kullanacağı 2 cümle başlangıcı ve öğretmenin dinleyeceği 2 başarı işareti ekle.`],
        ['İstasyon rotasyonu', 'Az malzemeyle farklı düşünme eylemleri kurun.', '“Her istasyon aynı hedefin başka kanıtını üretsin.”', 'Orta', ['3 istasyon', '6 dakika', 'rol'], `[Hedef] için üç istasyonlu, düşük malzemeli etkinlik tasarla. İstasyonlar: görsel/veri inceleme, uygulama/çözüm, açıklama/üretim. Her biri 6 dakika olsun; görev, gerekli malzeme, grup rolleri ve geride bırakılacak kanıtı tabloyla ver. Toplam hazırlık 10 dakikayı geçmesin.`],
        ['Hata avcısı', 'Doğru cevaptan önce düşünme hatasını görünür kılın.', '“Hata, tartışılacak veri olsun.”', 'Pratik', ['hatalı örnek', 'bul', 'düzelt'], `[Konu] hakkında gerçekçi bir hatalı çözüm/açıklama yaz. Hata tek ve öğretim açısından anlamlı olsun. Öğrenciler için üç görev ver: hatanın yerini işaretle, nedenini açıkla, doğru sürümü üret. Ardından öğretmen için beklenen düşünme yolu ve olası ikinci yanılgıyı yaz.`],
        ['Rol kartlı senaryo', 'Kavramı bir karar bağlamında kullandırın.', '“Rol, konuşmayı yapılandırır; gösteriye dönüşmez.”', 'Orta', ['3 rol', 'karar', 'kanıt'], `[Hedef] için 12 dakikalık rol kartlı karar senaryosu oluştur. 3 rolün farklı ama dengeli bilgi parçaları olsun. Grup, sonunda tek karar ve iki kanıt sunmalı. Her rol kartını 45 kelimeyi geçmeden yaz; kültürel kalıp yargı üretme. Öğretmen gözlem ölçütlerini sona ekle.`],
        ['Tahmin–gözlem–açıklama', 'Ön bilgiyi sonuçla karşılaştırarak kavramsal değişim yaratın.', '“Tahmin puanlanmaz; düşünme başlangıcıdır.”', 'Pratik', ['tahmin', 'gözlem', 'açıklama'], `[Fen/matematik/sosyal olay] için tahmin–gözlem–açıklama etkinliği tasarla. Güvenli ve sınıfta yapılabilir bir durum seç. Her aşamada öğrenciye 1 soru, kayıt alanı ve eşli paylaşım ekle. Son açıklamanın hedef kavramla bağını öğretmen notunda belirt; sonucu önceden söyleme.`],
        ['Büyük sınıf / araçsız uyarlama', 'Etkinliği koşullar değiştiğinde koruyun.', '“Aynı düşünme, daha sade lojistik.”', 'Kontrol', ['40 öğrenci', 'cihaz yok', '5 dakikada hazırlık'], `Aşağıdaki etkinliği 40 kişilik, cihazsız bir sınıf için yeniden tasarla. Öğrenme hedefi, öğrenci düşünmesi ve toplanan kanıt aynı kalsın. Hazırlık 5 dakikayı geçmesin; sınıf yönetimi için net rol/sinyal ver. Yalnızca değişen adımları önce–sonra tablosunda göster. Etkinlik: [etkinlik].`]
      ]
    },
    8: {
      title: 'Ölçme ve Geri Bildirim',
      duration: '20 dakika',
      hero: 'Ölçme son nokta değil, sonraki öğretim kararıdır.',
      intro: 'AI-GALAXY soru ve geri bildirim taslağı üretir. Hedefle uyum, puanlama ve öğrenciye ilişkin nihai karar öğretmende kalır.',
      image: 'assets/ders8-assessment-rubric.jpg',
      pills: ['Kanıt → yorum → eylem', 'Biçimlendirici', '7 ayrı istem'],
      modelTitle: 'Kanıttan öğretim kararına',
      modelText: 'Ölçme, öğrenciyi etiketlemek için değil öğrenmeyi ilerletmek için kullanılır.',
      steps: [['🎯', 'Hedef', 'Neyi yokluyorum?'], ['🧾', 'Kanıt', 'Hangi yanıt gösterecek?'], ['🔍', 'Yorum', 'Hata örüntüsü ne?'], ['➡️', 'Eylem', 'Yarın ne değişecek?']],
      rule: 'Her sorunun bir öğretim kararı olmalı.',
      side: 'Kimliksiz sınıf örüntülerini kullanın; AI’ya nihai not veya yüksek etkili karar verdirmeyin.',
      password: 'ölçme',
      source: ['MEB Öğrenme Kanıtları', 'https://tymm.meb.gov.tr/olcme-degerlendirme'],
      practices: [
        ['Hedefe bağlı çıkış bileti', 'Üç soru, üç farklı kanıt üretir.', '“Hatırlama + uygulama + gerekçe.”', 'Basit', ['3 soru', '5 dakika', 'karar'], `[Hedef] için 5 dakikalık çıkış bileti oluştur: 1 temel kavram, 1 kısa uygulama, 1 gerekçelendirme sorusu. Her soru için beklenen yanıt ve “bu yanlışsa yarın ne yaparım?” öğretmen notu ekle. Sınıf: [sınıf].`],
        ['Dengeli soru seti', 'Soru sayısını değil düşünme çeşitliliğini artırın.', '“Aynı kalıbın sekiz tekrarı olmasın.”', 'Orta', ['6 soru', 'farklı tür', 'anahtar'], `[Hedef] için 6 soruluk biçimlendirici set tasarla. Türler: 2 kısa cevap, 1 görsel/veri yorumu, 1 hata bulma, 1 günlük yaşam uygulaması, 1 açıklama. Zorluk dağılımını belirt; cevap anahtarı ve kısa gerekçe ver. Her sorunun hedefteki hangi eylemi ölçtüğünü yaz.`],
        ['Üç ölçütlü rubrik', 'Ürünün niteliğini öğrenci dilinde görünür yapın.', '“Süs değil; karar tutarlılığı.”', 'Orta', ['3 ölçüt', '4 düzey', 'gözlenebilir'], `[Öğrenci ürünü] için 3 ölçütlü, 4 düzeyli analitik rubrik taslağı üret. Ölçütler hedefle doğrudan ilişkili ve birbirinden farklı olsun. Düzeyleri “çok iyi/kötü” yerine gözlenebilir ürün özellikleriyle yaz. Öğrenci dilinde kısa tut; öğretmenin doğrulaması gereken belirsiz ifadeleri işaretle.`],
        ['Rubriğe bağlı geri bildirim', 'Kişiliğe değil ürüne, geçmişe değil sonraki adıma odaklanın.', '“Bir güçlü kanıt + bir sonraki adım.”', 'Pratik', ['kanıt', 'ölçüt', 'eylem'], `Aşağıdaki kimliksiz öğrenci ürününe yalnızca verilen rubriğe dayanarak geri bildirim taslağı yaz. Yapı: üründen 1 somut güçlü kanıt, geliştirilmesi gereken 1 ölçüt, öğrencinin yapabileceği 1 sonraki adım ve 1 düşündürücü soru. Not verme, kişilik yorumu yapma. Ürün: [metin]. Rubrik: [rubrik].`],
        ['Sınıf örüntüsünden yeniden öğretim', 'Tek tek öğrenci adı yerine hata türlerini gruplayın.', '“Veri, yarının dersini değiştirsin.”', 'Orta', ['kimliksiz veri', '3 örüntü', 'mini ders'], `[Sınıf/branş] için şu kimliksiz yanıt örüntülerini incele: [örüntüler]. En yaygın 3 öğrenme ihtiyacını kanıtıyla grupla. Ardından 5 dakikalık ısınma, 10 dakikalık yeniden öğretim, eşli uygulama ve hızlı kontrol içeren kısa plan taslağı ver. Son kararı öğretmene bırak.`],
        ['Öz ve akran değerlendirme', 'Öğrencinin ölçütü kullanmasını sağlayın.', '“Yargı değil, kanıt dili.”', 'Pratik', ['ben yaptım', 'kanıtım', 'sonraki adım'], `[Hedef/ürün] için öğrenci dostu öz değerlendirme ve akran geri bildirimi kartı oluştur. En fazla 3 ölçüt kullan. Her ölçütte “yaptım mı?”, “kanıtım ne?” ve “sonraki adımım” alanı olsun. Akran cümle başlangıçları saygılı ve ürüne odaklı olsun.`],
        ['Madde kalite denetimi', 'Sorunun hedef dışı dil veya belirsizlik ölçmesini önleyin.', '“Zor soru, belirsiz soru değildir.”', 'Kontrol', ['tek doğru', 'dil yükü', 'yanlılık'], `Aşağıdaki ölçme maddelerini denetle. Her madde için hedef uyumu, tek/anlaşılır doğru cevap, gereksiz dil yükü, ipucu veren seçenek, kültürel yanlılık ve cevap anahtarı doğruluğunu kontrol et. Soruyu doğrudan değiştirme; sorun ve önerilen düzeltmeyi yan yana yaz. Maddeler: [sorular].`]
      ]
    },
    9: {
      title: 'Doğruluk, Etik ve Güvenlik Kontrolü',
      duration: '20 dakika',
      hero: 'AI çıktısı akıcı olabilir; doğru ve güvenli olduğu anlamına gelmez.',
      intro: 'Sınıfa girmeden önce veri, dayanak, doğruluk, denge ve insan denetimi kontrolünden geçirin.',
      image: 'assets/ders9-ethical-safety.jpg',
      pills: ['5D kontrolü', 'Kişisel veri yok', '7 ayrı istem'],
      modelTitle: 'Sınıfa girmeden önce 5D',
      modelText: 'Kontrol listesi, öğretmen sorumluluğunu görünür ve tekrarlanabilir yapar.',
      steps: [['🔒', 'Data', 'Kişisel veri var mı?'], ['📚', 'Dayanak', 'Kaynağı belli mi?'], ['✓', 'Doğruluk', 'İddia doğrulandı mı?'], ['⚖️', 'Denge', 'Eksik/yanlı temsil var mı?'], ['👩‍🏫', 'Denetim', 'Nihai karar insanda mı?']],
      rule: 'Yüksek etkili karar AI’ya devredilmez.',
      side: 'AI çıktısını başlangıç taslağı kabul edin; resmî program, güvenilir kaynak ve okul politikasıyla kontrol edin.',
      password: 'doğruluk',
      source: ['UNESCO GenAI Rehberi', 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research'],
      practices: [
        ['Kaynağa dayalı doğrulama', 'İddiayı güvenilir kaynakla karşılaştırılabilir parçaya bölün.', '“Akıcılığı değil, kanıtı kontrol et.”', 'Basit', ['iddia', 'kaynak', 'durum'], `Aşağıdaki eğitim içeriğindeki doğrulanabilir iddiaları tek tek çıkar. Her iddiayı “verilen kaynak destekliyor / desteklemiyor / belirsiz” diye etiketle ve kaynak içindeki dayanağı özetle. İnternetten yeni bilgi ekleme; emin olmadığını açıkça belirt. İçerik: [metin]. Kaynak: [resmî/onaylı kaynak].`],
        ['Uydurma ve belirsizlik taraması', 'Kesinlik diliyle sunulan şüpheli noktaları görünür yapın.', '“Bilmiyorsa tahmin etmesin.”', 'Orta', ['kesinlik', 'eksik bağlam', 'kontrol sorusu'], `Aşağıdaki AI taslağını belirsizlik açısından denetle. Kaynaksız sayı/tarih, aşırı kesin ifade, uydurma olabilecek özel ad, eksik bağlam ve çelişkiyi işaretle. Her bulgu için öğretmenin soracağı doğrulama sorusunu yaz. Metni yeniden yazma ve doğruymuş gibi yeni bilgi üretme. Taslak: [metin].`],
        ['Kişisel veriyi çıkar', 'İstemi öğrenci kimliği olmadan aynı işi yapacak biçime dönüştürün.', '“Ad yerine örüntü; dosya yerine özet.”', 'Güvenlik', ['veri minimizasyonu', 'kimliksizleştirme', 'amaç'], `Aşağıdaki öğretmen istemini veri minimizasyonu açısından yeniden yaz. Ad, numara, not dökümü, sağlık/davranış ayrıntısı ve kimlik belirleyici bağlamı çıkar; yalnızca görev için gerekli kimliksiz örüntüyü bırak. İş yapılamıyorsa nedenini söyle ve güvenli alternatif öner. İstem: [istem].`],
        ['Önyargı ve temsil kontrolü', 'Örneklerin kimi görünmez veya kalıp yargılı bıraktığını sorgulayın.', '“Tek bakış açısı tarafsızlık değildir.”', 'Orta', ['temsil', 'kalıp yargı', 'alternatif'], `Aşağıdaki öğrenci materyalini temsil ve önyargı açısından incele. Cinsiyet, engellilik, kültür, dil, sosyoekonomik durum ve coğrafya bakımından kalıp yargı, eksik temsil veya tek bakış açısı ara. Kanıtsız suçlama yapma. En fazla 4 bulgu ve her biri için öğrenme hedefini bozmayan düzeltme öner.`],
        ['Atıf ve telif kontrolü', 'Üretilen içeriğin kaynağını ve kullanım hakkını görünür kılın.', '“Bulmak, kullanma izni demek değildir.”', 'Kontrol', ['yaratıcı', 'lisans', 'bağlantı'], `Bu materyalde kullanılan metin, görsel ve fikirler için atıf kontrol tablosu oluştur. Sütunlar: öğe, yaratıcı/kaynak, bağlantı, lisans/izin, yapılan değişiklik, eksik bilgi. Lisansı tahmin etme; bulunmuyorsa “doğrulanmalı” yaz. AI üretimi bölümleri ayrıca belirt. Materyal kaynakları: [liste].`],
        ['Yüksek etkili karar sınırı', 'AI’nın taslak yardımı ile insan kararını ayırın.', '“Not, tanı, disiplin ve yerleştirme öğretmene/kurula aittir.”', 'Etik', ['taslak', 'kanıt', 'insan kararı'], `Aşağıdaki kullanım senaryosunu üçe ayır: AI’nın yapabileceği düşük riskli taslak işi, öğretmenin doğrulaması gereken kanıtlar, AI’ya devredilemeyecek yüksek etkili karar. Öğrenci hakkında tahmin veya tanı üretme. Riskli noktayı ve daha güvenli iş akışını kısa tabloyla ver. Senaryo: [senaryo].`],
        ['Sınıf öncesi kırmızı takım', 'Materyalin nerede hata verebileceğini kullanımdan önce arayın.', '“En iyi niyetli taslağın zayıf noktasını bul.”', 'Kontrol', ['yanlış anlaşılma', 'güvenlik', 'erişim'], `Aşağıdaki AI destekli ders materyaline “kırmızı takım” incelemesi yap. 5 olası sorun ara: olgusal hata, kavram yanılgısı, yaş uygunsuzluğu, kişisel veri/telif, erişilebilirlik/önyargı. Her sorun için kanıt, olası sınıf etkisi ve öğretmenin tek düzeltmesini yaz. Sonunda “yayınlanabilir / düzeltmeden sonra / kullanma” önerisi ver; nihai karar öğretmende.`]
      ]
    },
    10: {
      title: 'İyileştirme ve Paylaşma',
      duration: '18 dakika',
      hero: 'İlk taslak ürün değildir; test edilmiş sürüm üründür.',
      intro: 'AI destekli içeriği hedefe göre eleştirin, küçük bir örnekle deneyin, meslektaş görüşü alın ve kaynaklarıyla paylaşın.',
      image: 'assets/ders1-teacher-decision.jpg',
      pills: ['Taslak → test → revizyon', 'Atıflı paylaşım', '7 ayrı istem'],
      modelTitle: 'Kapanış döngüsü',
      modelText: 'Kalite, tek büyük istemden değil kısa geri bildirim döngülerinden gelir.',
      steps: [['📝', 'Taslak', 'İlk kullanılabilir sürüm'], ['🧪', 'Test', 'Küçük örnek ve gerçek süre'], ['👥', 'İnceleme', 'Öğrenci/meslektaş kanıtı'], ['🚀', 'Paylaş', 'Kaynak ve sürüm notu']],
      rule: 'Bir revizyonda tek sorunu düzeltin.',
      side: 'Paylaşılan materyale amaç, sınıf düzeyi, kaynak/atıf, kullanım notu ve AI katkısı ekleyin.',
      password: 'iyileştir',
      source: ['UNESCO AI Öğretmen Yeterlikleri', 'https://www.unesco.org/en/articles/ai-competency-framework-teachers'],
      practices: [
        ['Ölçüte göre eleştiri', '“Daha iyi yap” yerine açık kalite ölçütü verin.', '“Beğeni değil, kanıtlı değerlendirme.”', 'Basit', ['hedef', 'ölçüt', 'kanıt'], `Aşağıdaki materyali yalnızca şu ölçütlere göre eleştir: hedef uyumu, yaş düzeyi, yönerge açıklığı, öğrenci düşünmesi ve doğrulanabilirlik. Her ölçüt için materyalden kanıt göster; “uygun / kısmen / düzelt” etiketi ver. Yeni materyal yazma. En yüksek etkili 2 revizyonu seç. Materyal: [metin].`],
        ['Öğretmen notuyla revizyon', 'Gerçek sınıf gözlemini tek revizyon turuna dönüştürün.', '“Ne oldu? Neyi koruyoruz? Neyi değiştiriyoruz?”', 'Orta', ['gözlem', 'koru', 'değiştir'], `Aşağıdaki materyali öğretmen gözlemine göre yeniden düzenle. Önce korunacak 2 güçlü yanı ve değiştirilecek tek sorunu yaz. Sonra yalnızca bu sorunu düzelt; öğrenme hedefi ve başarı ölçütlerini değiştirme. Revizyon sonunda önce–sonra farkını 3 maddede açıkla. Materyal: [metin]. Gözlem: [sınıfta olan].`],
        ['A/B sürüm karşılaştırması', 'İki taslağı aynı ölçütlerle karşılaştırın.', '“Uzun olan değil, sınıfta işe yarayan.”', 'Kontrol', ['aynı ölçüt', 'fark', 'seçim'], `A ve B materyallerini aynı 5 ölçütle karşılaştır: hedef hizası, bilişsel yük, uygulanabilir süre, erişilebilirlik ve ölçülebilir kanıt. Her ölçütte kazananı ve kısa gerekçeyi yaz. Sonunda “A’yı seç / B’yi seç / şu iki öğeyi birleştir” önerisi ver. A: [metin]. B: [metin].`],
        ['Erişilebilirlik son kontrolü', 'Paylaşmadan önce algılama, dil ve eylem engellerini tarayın.', '“Herkes için tek yol değil, erişilebilir ilk sürüm.”', 'Orta', ['okunabilirlik', 'alternatif metin', 'ifade yolu'], `Aşağıdaki materyali erişilebilirlik açısından son kez incele: başlık hiyerarşisi, kısa ve açık yönerge, renk dışında anlam ipucu, görseller için alternatif metin, okunabilir yazı, klavye/ekran okuyucu ve öğrenci yanıt seçenekleri. En fazla 5 gerekli düzeltme ver; akademik beklentiyi düşürme.`],
        ['Meslektaş inceleme notu', 'Görüş istemeyi kolaylaştıran kısa bağlam paketi hazırlayın.', '“Dosyayı değil, karar noktasını paylaşın.”', 'Pratik', ['amaç', 'soru', 'süre'], `Meslektaşıma göndermek üzere 120 kelimeyi geçmeyen inceleme notu yaz. Şunları içersin: sınıf/branş, hedef, materyalin amacı, AI’nın hangi bölümde kullanıldığı, özellikle görüş istediğim 3 soru ve yanıt tarihi. Ton profesyonel ve davetkâr olsun. Bilgiler: [bilgiler].`],
        ['Atıflı paylaşım kartı', 'Materyalin kökenini ve kullanım koşulunu görünür yapın.', '“Kaynak + lisans + değişiklik + AI katkısı.”', 'Paylaşım', ['yaratıcı', 'lisans', 'sürüm'], `Aşağıdaki eğitim materyali için kısa paylaşım kartı oluştur. Alanlar: başlık, amaç/sınıf, oluşturucu, tarih-sürüm, kullanılan kaynaklar ve bağlantıları, lisans/izin, yapılan uyarlamalar, AI’nın katkısı, öğretmen doğrulaması ve iletişim. Bilinmeyen lisansı uydurma; “izin doğrulanmalı” yaz.`],
        ['Yeniden kullanılabilir patika özeti', 'On adımda öğrendiğiniz iş akışını kişisel standarda dönüştürün.','“Bir sonraki işte sıfırdan başlamayın.”', 'Kapsamlı', ['ihtiyaç', 'üretim', 'kontrol'], `Benim için yeniden kullanılabilir “AI destekli eğitim içeriği üretim standardı” taslağı oluştur. Bölümler: ihtiyaç/hedef, istem, plan-materyal-etkinlik, uyarlama, ölçme, doğruluk/etik, pilot test, paylaşım. Her bölümde 1 kontrol sorusu ve 1 sakınılacak hata olsun. Aşağıdaki kişisel notlarımı da ekle: [notlar]. Tek sayfalık kontrol listesi biçiminde ver.`]
      ]
    }
  };

  const n = Number(document.body.dataset.lesson), d = lessons[n]; if (!d) return;
  document.title = `Ders ${n} · ${d.title}`;
  document.getElementById('lessonMeta').innerHTML = `<strong>TeachTech</strong> · Eğitimde Yapay Zeka Patikası · Ders ${n} / ${d.title}`;
  const stage = document.getElementById('lessonStage');

  const practice = (p, i) => `<article class="screen" data-title="Pratik ${i + 1} · ${p[0]}">
    <header class="head">
      <div>
        <p class="eyebrow">İstem pratiği ${i + 1} / 7</p>
        <h2>${p[0]}</h2>
        <p class="lede">${p[1]}</p>
      </div>
      <span class="chip ${i % 3 === 1 ? 'blue' : i % 3 === 2 ? 'amber' : ''}">${p[3]}</span>
    </header>
    <div class="practice-layout">
      <aside class="card insight ${i % 3 === 0 ? 'soft-mint' : i % 3 === 1 ? 'soft-cyan' : 'soft-amber'}">
        <div class="practice-no">${i + 1}</div>
        <div class="insight-visual" style="display:flex;justify-content:center;margin:6px 0;">
          <img src="${d.image}" alt="${p[0]}" style="width:110px;height:110px;object-fit:cover;border-radius:14px;box-shadow:0 6px 16px rgba(0,0,0,0.06);border:1px solid rgba(255,255,255,0.85);">
        </div>
        <blockquote>${p[2]}</blockquote>
        <p class="micro">Köşeli alanları kendi dersinizle değiştirin.</p>
      </aside>
      <section class="panel prompt-panel">
        <div class="prompt-head">
          <div>
            <span class="chip">AI-GALAXY istemi</span>
            <h3 style="margin:7px 0 0">${p[0]}</h3>
          </div>
          <button class="btn small" data-copy-target="prompt-${n}-${i + 1}">Kopyala</button>
        </div>
        <textarea class="prompt-editor" id="prompt-${n}-${i + 1}" aria-label="Düzenlenebilir istem">${p[5]}</textarea>
        <div class="prompt-foot">
          <div class="prompt-tags">${p[4].map(x => `<span>${x}</span>`).join('')}</div>
          <span class="micro">Taslağı öğretmen doğrular.</span>
        </div>
      </section>
    </div>
  </article>`;

  stage.innerHTML = `<article class="screen active hero-screen" data-title="Başlangıç">
    <div class="hero">
      <section class="hero-copy">
        <p class="eyebrow">${d.duration} · uygulamalı ders</p>
        <h1>${d.hero}</h1>
        <p>${d.intro}</p>
        <div class="hero-pills">${d.pills.map(x => `<span>${x}</span>`).join('')}</div>
      </section>
      <section class="panel hero-visual">
        <img src="${d.image}" alt="Öğretmenler için eğitim tasarımı illüstrasyonu">
        <div class="visual-row">
          <div class="visual-cell"><b>1</b><span>amaç</span></div>
          <div class="visual-cell"><b>7</b><span>ayrı istem</span></div>
          <div class="visual-cell"><b>✓</b><span>öğretmen kontrolü</span></div>
        </div>
      </section>
    </div>
  </article>
  <article class="screen" data-title="Konu modeli">
    <header class="head">
      <div>
        <p class="eyebrow">Mini konu anlatımı</p>
        <h2>${d.modelTitle}</h2>
        <p class="lede">${d.modelText}</p>
      </div>
      <span class="chip">Önce model, sonra pratik</span>
    </header>
    <div class="model-layout">
      <section class="panel model-grid" style="grid-template-columns:repeat(${d.steps.length},1fr)">
        ${d.steps.map(s => `<div class="model-step"><span class="ico">${s[0]}</span><b>${s[1]}</b><span>${s[2]}</span></div>`).join('')}
      </section>
      <aside class="card model-side soft-mint">
        <span class="chip">Kısa kural</span>
        <div class="rule">${d.rule}</div>
        <p class="micro">${d.side}</p>
      </aside>
    </div>
  </article>
  ${d.practices.map(practice).join('')}
  <article class="screen hero-screen" data-title="Tamamlandı">
    <div class="finish">
      <section class="card finish-copy">
        <p class="eyebrow">Ders ${n} tamamlandı</p>
        <h2>${d.hero}</h2>
        <p class="lede" style="margin-top:8px">Yedi istemi kendi branşınıza uyarladınız. Son isteminiz tarayıcıda saklanır ve metin olarak indirilebilir.</p>
        <div class="checkline" style="grid-template-columns:repeat(${d.steps.length},1fr)">
          ${d.steps.map((s, i) => `<div><b>${i + 1}</b><span>${s[1]}</span></div>`).join('')}
        </div>
        <div class="finish-actions">
          <button class="btn primary" data-download-target="prompt-${n}-7" data-filename="ai-galaxy-ders${n}-istemim.txt">Son istemi indir</button>
          <button class="btn" data-copy-target="password-${n}">Şifreyi kopyala</button>
        </div>
      </section>
      <section class="panel password-card">
        <div class="password-inner">
          <div class="lock">🔓</div>
          <div style="color:rgba(255,255,255,.7);font-size:11px;font-weight:900;letter-spacing:.12em">ADIM ŞİFRESİ</div>
          <div class="password" id="password-${n}">${d.password}</div>
          <p style="margin:0;color:rgba(255,255,255,.72);font-size:12px">Küçük harflerle yazın.</p>
          <p class="sources">Temel: <a href="${d.source[1]}" target="_blank" rel="noopener">${d.source[0]}</a></p>
        </div>
      </section>
    </div>
  </article>`;
})();
