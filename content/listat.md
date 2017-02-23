Olet käyttänyt aiemmissa harjoituksissa aika paljon listoja, etkö olekin? Listat ovat niitä hakasulkeilla [ ja ]
reunustettuja ja pilkuilla erotettuja sarjoja sekvensseissä. Esimerkiksi

    s [fd 100, lt 90, fd 100]
    
Listoja voidaan käyttää kuitenkin myös muuten kuin komentosarjoissa. Voit esimerkiksi luoda listan pienistä luvuista näin:

    let numerot = [1,2,3,4,5,6,7,8,9]
    
Listoilla voi tehdä monia asioita. Esimerkiksi voit kertoa kaikki listan numerot kahdella näin:

    let kerro x = x * 2
    map kerro numerot

Tässä käytetty `map`-funktio kutsuu jotain toista funktiota kaikille listan alkioille. Tässä esimerkissä `map` kertoo 
kaikki listan numerot kahdella käyttäen `kerro` funktiota.

**Harjoitus:** Tee lista numeroista 1-3 ja jaa kaikki numerot kahdella.

<blockquote class="cloud2">
  <strong>Vinkki:</strong> Voit tehdä listan numeroista myös nopeammin: Esimerkiksi `range 1 100` tekee listan, jossa on kaikki numerot välillä 1-100.
  <div class="robot"></div>
</blockquote>

`map`-funktiota voidaan käyttää myös komentosarjoissa. Aloitetaanpa tekemällä funktio `kirjoita` joka kirjottaa annetun asian
ja siirtyy hieman ylemmäs. Kokeile:

    let kirjoita sana = s [text sana, fd -20]
    s [kirjoita "Hei!", kirjoita "Mitä kuuluu?"]
    
Mitä jos haluaisit kirjoittaa allekkain numerot 1-10? Tämä onnistuu kätevästi käyttämällä `map`-funktiota, jolla muunnetaan
numerot komennoiksi ja sitten suoritetaan näistä komennoista muodostettu sekvenssi:

    let numerot = range 1 10
    let komennot = map kirjoita numerot
    s komennot
    
Numeroista voidaan myös muodostaa hauska kellotaulu muuttamalla `kirjoita`-funktiota hieman:

    clear    
    penup
    let numerot = range 1 12
    let kirjoita sana = s [text sana, fd 40, rt 30]
    let komennot = map kirjoita numerot
    s komennot
    
**Harjoitus:** Kirjoita ohjelma, joka tekee kunnollisen kellotaulun viisareineen.
