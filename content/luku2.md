--- 
title: Luku 2
pagetype: book-chapter2
---

# Koodikirja

<div><img id="turtle-character" src="/images/turtle1.png" alt="kilppari"></div>

## Luku 2 - Funktion parametrit

Ensimmäisessä luvussa opit jo paljon koodauskomentoja:

* Piirustuskomennot: `fd`, `lt`, `rt` sekä `penup` ja `pendown`
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
[Siirry Turtle Roy -ympäristöön](http://turtle-roy.herokuapp.com), ja kirjoita nämä komennot uudestaan, ja paina lopuksi
enteriä.

    clear
    let porras = s [fd 10, rt 90, fd 10, lt 90]
    porras

Käyttämällä toistorakennetta `r 5 porras`, voit tehdä myös 5-portaiset portaat nopeasti!

<blockquote class="cloud2">
  <strong>Vinkki:</strong>
  Koodaus Turtle Roylla sujuu kätevimmin, kun klikkaat koodi-ikkunan yläreunassa olevaa <i>Show editor</i> -linkkiä.
  Nyt voit muokata koodia vapaasti ja ajaa koko koodin uudestaan <i>Run</i>-linkistä.
  <div class="robot"></div>
</blockquote>

Entäpä jos haluaisit tehdä eri korkuisia portaita?

Nyt on aika lisätä `porras`-funktioon *parametri*. Muutetaan numero 10 parametriksi niin, että samalla funktiolla
voi piirtää eri korkuisia portaita.

Lisätään funktion nimen perään parametri `korkeus` ja tämän
jälkeen korvataan myös sekvenssin sisällä numero 10 parametrin nimellä `korkeus`:

    let porras korkeus = s [fd korkeus, rt 90, fd korkeus, lt 90]

Nyt voitkin piirtää erikokoisia portaita. Kirjoita ensin funktion nimi, ja sitten parametrin kohdalle mikä tahansa numero!
Vaikka näin:

<div class="turtle-diagram" style="width:400px;height:300px;" 
  id="suunnat1-diagram" 
  data-commands='[["fd",[30]],["rt",[90]],["fd",[30]],["lt",[90]],["fd",[25]],["rt",[90]],["fd",[25]],["lt",[90]],["fd",[20]],["rt",[90]],["fd",[20]],["lt",[90]],["fd",[15]],["rt",[90]],["fd",[15]],["lt",[90]],["fd",[10]],["rt",[90]],["fd",[10]],["lt",[90]],["penup",[]],["lt",[90]],["fd",[300]],["rt",[90]],["text",["clear"]],["fd",[-20]],["text",["porras 30"]],["fd",[-20]],["text",["porras 25"]],["fd",[-20]],["text",["porras 20"]],["fd",[-20]],["text",["porras 15"]],["fd",[-20]],["text",["porras 10"]],["fd",[-20]]]'
  data-offsetx='-40'
  data-offsety='50'
></div>

<blockquote>
  <strong>Vinkki:</strong>
<p>Parametrillista funktiota suorittaessaan tietokone korvaa parametrin nimen sille annetulla arvolla. Esimerkiksi suorittaessaan
komentoa <code>porras 30</code>, se korvaa <i>korkeus</i> -sanan arvolla 30 ja toimii samoin kuin suorittaessaan komentoa
<code>s [fd 30, rt 90, fd 30, lt 90]</code>.</p>
  <div class="robot"></div>
</blockquote>

### 2.2 Useamman parametrin käyttö

Toki voit myös edelleen käyttää toistokomentoa `r`. Toistokomentoa pitää nyt kuitenkin vähän auttaa. Jotta toistokomento osaa
lukea funktion nimen ja siihen kuuluvan parametrin yhdessä, pitää funktion nimi ja parametri laittaa kaarisulkeiden sisään:

    clear
    r 50 (porras 5)

<blockquote class="cloud-small">
  <strong>Vinkki:</strong> Kaarisulkeet saat kun painat samaan aikaan <em class="key">Shift ⇧</em> ja <em class="key">8</em>
  tai <em class="key">9</em>.
  <div class="robot"></div>
</blockquote>


Funktiossa voi olla useampiakin parametreja. Itse asiassa toistokomennostakin voi tehdä funktion, ja silloin voi tehdä toistojen
määrästä myös parametrin!

    let portaikko lukumäärä korkeus = r lukumäärä (porras korkeus)

Voit nyt piirtää erilaisia portaikkoja vaihtelemalla funktion nimen perässä olevaa kahta numeroa eli funktion parametrejä.
Kokeile vaikkapa esimerkiksi `portaikko 3 50` tai `portaikko 50 5`.

Olet nyt luonut funktion, joka voi tehdä hyvinkin erikokoisia - ja pituisia - portaikkoja helposti vain
kahta parametriä muuttelemalla!

**Harjoitus:** Muistatko vielä miten Luvussa 1 piirrettiin neliö käyttämällä *mutka*-funktiota? Jos et muista, voit
virkistää muistiasi: Hyppää Turtle Roy ikkunan puolelle ja piirrä neliö, ihan samalla tavalla kuin luvussa 1 piirrettiin.
... Noniin, muistuiko mieleen? Hyvä! Muuta nyt `mutka`-funktiota niin, että neliön sivun pituus onkin parametri. Eli
sen sijaan, että funktiossa kirjoitetaan suoraan `fd 100`, kirjoitakin `fd pituus` ja muista kertoa *let* komennolle,
että *pituus* on funktion parametri.
<a class="ratkaisu" href="http://turtle-roy.herokuapp.com/?code=let%20mutka%20pituus%20%20%3D%20s%20%5Bfd%20pituus%20%2C%20rt%2090%5D%0Alet%20neli%C3%B6%20pituus%20%3D%20r%204%20(mutka%20pituus)%0Aneli%C3%B6%2050%0Aneli%C3%B6%20100%0Aneli%C3%B6%20200">
Ratkaisu</a>

### 2.3 Piirretään kuvioita

Tässä kappaleessa luodaan yksi funktio, jolla voit piirrellä tosi monia erilaisia kuvioita, pelkästään vaihtelemalla
funktion parametrien arvoja.

Funktio on samanlainen, kuin millä teit edellisessä harjoituksessa neliön, mutta nyt tehdäänkin niin, että kaikki numerot
on muutettu parametreiksi:

    clear
    let sivu pituus kulma = s [fd pituus, rt kulma]
    let kuvio lukumäärä pituus kulma = s [r lukumäärä (sivu pituus kulma)]

Yllä on siis kaksi funktiota: *sivu* ja *kuvio*, ja yhteensä kolme parametria: *lukumäärä*, *pituus* ja *kulma*.

Arvasitko jo mitä kukin parametri tarkoittaa?

- *lukumäärä* kertoo kuinka monta sivua on kuviossa.
- *pituus* on tietenkin sivun pituus ja 
- *kulma* on kahden sivun välinen kulma.

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

<blockquote class="cloud-large">
  <strong>Vinkki:</strong> Jos olet jo koulussa oppinut geometriaa, tai kuvioiden matematiikka kiinnostaa sinua
  muuten vaan, saatat huomata, että numeroiden valitsemisessa auttavat seuraavat säännöt:
  <ul>
  <li>Monitahokkaissa <i>sivu</i> kertaa <i>kulma</i> on aina yhteensä <i>360</i> astetta!</li>
  <li>Tähtikuvioissa <i>sivu</i> kertaa <i>kulma</i> on yhteensä <i>1080</i> astetta.</li>
  </ul>
  <div class="robot"></div>
</blockquote>


**Harjoitus:** Piirrä tähti, jossa on seitsemän sakaraa. Voit toki laskea vaikka laskimella, paljonko on 1080 jaettuna
seitsemällä, mutta helpompaa on antaa Turtle Royn laskea sinun puolestasi. Voit siis käyttää kulmana arvoa `(1080 / 7)`.
<a class="ratkaisu" href="http://turtle-roy.herokuapp.com/?code=clear%0Alet%20sivu%20pituus%20kulma%20%3D%20s%20%5Bfd%20pituus%2C%20rt%20kulma%5D%0Alet%20kuvio%20lukum%C3%A4%C3%A4r%C3%A4%20pituus%20kulma%20%3D%20s%20%5Br%20lukum%C3%A4%C3%A4r%C3%A4%20(sivu%20pituus%20kulma)%5D%0Akuvio%207%20200%20(1080%20%2F%207)">
Ratkaisu</a>

**Harjoitus:** Piirrä ympyrä. Vinkki: tietokoneelle ympyräkin on monitahokas, jossa vain on hirveän monta, hirveän lyhyttä sivua.
<a class="ratkaisu" href="http://turtle-roy.herokuapp.com/?code=clear%0Alet%20sivu%20pituus%20kulma%20%3D%20s%20%5Bfd%20pituus%2C%20rt%20kulma%5D%0Alet%20kuvio%20lukum%C3%A4%C3%A4r%C3%A4%20pituus%20kulma%20%3D%20s%20%5Br%20lukum%C3%A4%C3%A4r%C3%A4%20(sivu%20pituus%20kulma)%5D%0Akuvio%20360%201%201">
Ratkaisu</a>

***

Hienoa! Olet nyt oppinut käyttämään funktioissa parametrejä. Niiden avulla voit muutella koodia niin, että
samoilla funktioilla voi tehdä kerrasta toiseen hieman erilaisia temppuja!

Tästä pääset Koodikirjan [3.lukuun](/luku3/)!


<%=render('partials/feedback')%>
