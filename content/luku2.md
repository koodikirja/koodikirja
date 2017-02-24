--- 
title: Luku 2
pagetype: book-chapter2
---

# Koodikirja

<div><img id="turtle-character" src="/images/turtle1.png" alt="kilppari"></div>

## Luku 2 - Funktion parametrit

Ensimmäisessä luvussa opit jo paljon koodauskomentoja:

* Perus-piirustuskomennot: `fd`, `lt`, `rt` sekä `penup` ja `pendown`
* Sekvenssi: `s [komento1, komento2, ...]`
* Funktio: `let funktio = s [komento1, komento2, ...]`
* Toisto: `r 5 funktio`

Näitä yksinkertaisia komentoja yhdistelemällä, teimme jo monta jännää temppua: neliöitä, kirjaimia ja portaita!

Koodaus on juuri tätä. Kilpikonnan, eli tietokoneen, tekemät monimutkaisimmatkin temput, ovat oikeasti vain
tällaisten yksinkertaisten komentojen yhdistelmiä. Koodari on ihminen, joka yhdistää komentoja funktioiksi, ja
sitten vielä yhdistelee funktioita yhä monimutkaisemmiksi funktioiksi. Mutta monimutkaisinkin tietokoneohjelma
loppujen lopuksi koostuu hyvin yksinkertaisista komennoista.

Yksinkertaisia peruskomentoja on vielä vähän lisää. Tässä luvussa opimme tärkeän tempun nimeltä *funktion parametrit*.

### 2.1 Funktion parametrit

Ensimmäisessä luvussa opit, että tietokone tekee sen mitä koodari käskee sitä tekemään. Tietokone voi piirtää
vaikka sata porrasta, eikä sitä yhtään väsytä, jos käytit `r`-komentoa ja käskit tietokonetta tekemään niin.

Koodarit taas ovat monesti laiskaa porukkaa. He eivät mielellään halua tehdä samaa asiaa uudestaan ja uudestaan.
Juuri tämän takia ohjelmointikielissä on `r`-komennon tapaisia toistokomentoja: Kirjoittamalla mahdollisimman
vähän koodia, koodari voi käskeä tietokonetta tekemään saman asian monta kertaa, mutta koodarin itse ei tarvitse
kirjoittaa koodia uudestaan ja uudestaan.

Joskus voit haluta tehdä saman asian monta kertaa, mutta *kuitenkin vähän eri tavalla*. Juuri tähän funktioissa
käytetään *parametrejä*. Parametrien avulla voidaan käyttää samaa funktiota, eli samaa koodia niin, että temppu
kuitenkin vähän vaihtelee joka kerta.

Jatketaan nyt siitä mihin ensimmäisessä luvussa jäätiin. Alla on porras-funktio, joka piirtää 10 pikselin korkuisia portaita.
[Siirry Turtle Roy -ympäristöön](http://www.turtle-roy.com), ja kirjoita nämä komennot uudestaan, ja paina lopuksi
enteriä.

    clear
    let porras = s [fd 10, rt 90, fd 10, lt 90]

Nyt on aika lisätä `porras`-funktioon *parametri*. Muutetaan numero `10` parametriksi niin, että samalla funktiolla
voi piirtää eri korkuisia portaita.

Parametrin nimi kerrotaan `let` komennossa heti funktion nimen perään. Eli lisätään parametri `korkeus` ja tämän
jälkeen korvataan myös sekvenssin sisällä numero `10` parametrin nimellä, eli `korkeus`:

    let porras korkeus = s [fd korkeus, rt 90, fd korkeus, lt 90]

Nyt voitkin piirtää erikokoisia portaita. Kirjoita ensin funktion nimi, ja sitten parametrin kohdalle mikä tahansa numero!
Vaikka näin:

    clear
    porras 30
    porras 25
    porras 20
    porras 15
    porras 10
    porras 7
    porras 5
    porras 4
    porras 3
    porras 2

### 2.2 Useamman parametrin käyttö

Toki voit myös edelleen käyttää toistokomentoa `r`. Toistokomentoa pitää nyt kuitenkin vähän auttaa. Jotta toistokomento osaa
lukea funktion nimen ja siihen kuuluvan parametrin yhdessä, pitää funktion nimi ja parametri laittaa kaarisulkeiden sisään:

    clear
    r 50 (porras 5)

<blockquote class="cloud-left">
  <strong>Vinkki:</strong> Kaarisulkeet saat kun painat samaan aikaan <em class="key">Shift ⇧</em> ja <em class="key">8</em>
  tai <em class="key">9</em>.
  <div class="robot"></div>
</blockquote>


Funktiossa voi olla useampiakin parametreja. Itse asiassa toistokomennostakin voi tehdä funktion, ja silloin voi tehdä toistojen
määrästä myös parametrin!

    let portaikko lukumäärä korkeus = s [r lukumäärä (porras korkeus)]

Voit nyt piirtää erilaisia portaikkoja vaihtelemalla `portaikko`-funktion perässä olevaa kahta numeroa, eli parametrejä:

    clear
    portaikko 3 50

tai

    clear
    portaikko 50 5

Olet nyt luonut funktion, joka voi tehdä hyvinkin erikokoisia - ja pituisia - portaikkoja helposti vain
kahta parametriä muuttelemalla!

**Harjoitus:** Muistatko vielä miten Luvussa 1 piirrettiin neliö käyttämällä `mutka`-funktiota? Jos et muista, voit
virkistää muistiasi: Hyppää Turtle Roy ikkunan puolelle ja piirrä neliö, ihan samalla tavalla kuin luvussa 1 piirrettiin.
... Noniin, muistuiko mieleen? Hyvä! Muuta nyt `mutka`-funktiota niin, että neliön sivun pituus onkin parametri. Eli
sen sijaan, että funktiossa kirjoitetaan suoraan `fd 100`, kirjoitakin `fd pituus` ja muista kertoa `let` komennolle,
että `pituus` on funktion parametri.

### 2.3 Piirretään kuvioita

Tässä kappaleessa luodaan yksi funktio, jolla voit piirrellä tosi monia erilaisia kuvioita, pelkästään vaihtelemalla
funktion parametrien arvoja.

Funktio on samanlainen, kuin millä teit edellisessä harjoituksessa neliön, mutta nyt tehdäänkin niin, että kaikki numerot
on muutettu parametreiksi:

    clear
    let sivu pituus kulma = s [fd pituus, rt kulma]
    let kuvio lukumäärä pituus kulma = s [r lukumäärä (sivu pituus kulma)]

Yllä on siis kaksi funktiota: `sivu` ja `kuvio`, ja yhteensä kolme parametria: `lukumäärä`, `pituus` ja `kulma`.

Arvasitko jo mitä kukin parametri tarkoittaa?

`lukumäärä` kertoo kuinka monta *sivua* on *kuviossa*. `pituus` on tietenkin *sivun* pituus ja `kulma` on kahden
*sivun* välinen kulma.

Voit nyt kokeilla piirtää erilaisia kuvioita vaihtelemalla parametrien arvoja. Mikähän kuvio tästäkin muodostuu?

    kuvio 4 100 90

Noniin, vanha tuttu neliöhän se siinä!

Kokeile seuraavaksi vaikka näitä, tai voit keksiä omia numeroita. Muista aina välillä käyttää `clear`-komentoa.

    kuvio 3 100 120
    kuvio 5 100 72
    kuvio 6 100 60
    kuvio 8 100 45
    kuvio 5 100 216
    kuvio 8 100 135
    kuvio 100 100 100
    kuvio 100 100 170
    kuvio 72 5 5

<blockquote class="cloud-huge">
  <strong>Vinkki:</strong> Jos olet jo koulussa oppinut geometriaa, tai kuvioiden matematiikka kiinnostaa sinua
  muuten vaan, saatat huomata, että numeroiden valitsemisessa auttavat seuraavat säännöt. (Ja jos et ole, voit pyytää
  vanhempaa vinkkaamaan sopivia numeroita!)<br />
  <br />
  Monitahokkaissa `sivu` kertaa `kulma` on aina yhteensä `360` astetta!<br />
  Tähtikuvioissa `sivu` kertaa `kulma` on yhteensä `1080` astetta.<br />
  Ympyräkin on monitahokas. Siinä on vain hirveän monta, hirveän lyhyttä sivua. Kulmien summa on edelleen 360!
  <div class="robot"></div>
</blockquote>


**Harjoitus:** Piirrä vielä tähti, jossa on seitsemän sakaraa. Laske vaikka laskimella, paljonko on 1080 jaettuna
seitsemällä. (Vastauksena ei ole tasaluku, vaan siis desimaaliluku. Voit kuitenkin käyttää pelkkää kokonaislukua
tässä harjoituksessa. Jos olet luonteeltasi tarkka, voit kokeilla desimaalilukuakin. Huomaa, että Turtle Roy
ympäristössä desimaalimerkki on piste. Esimerkki: `12.34`.)

***

Hienoa! Olet nyt oppinut käyttämään funktioissa parametrejä. Niiden avulla voit muutella koodia niin, että
samoilla funktioilla voi tehdä kerrasta toiseen hieman erilaisia temppuja!

Tästä pääset Koodikirjan [3.lukuun](/luku3/)!


<%=render('partials/feedback')%>
