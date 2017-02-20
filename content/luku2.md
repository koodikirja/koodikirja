--- 
title: Luku 2
pagetype: book
---

# Koodikirja

<div><img id="turtle-character" src="/images/turtle1.png" alt="kilppari"></div>

## Luku 2 - Muuttujat

Ensimmäisessä luvussa opit jo paljon koodauskomentoja:

* Perus-piirustuskomennot: `fd`, `lt`, `rt` sekä `penup` ja `pendown`
* Sekvenssi: `s[ komento1, komento2, ...]`
* Funktio: `let funktio = s[ komento1, komento2, ...]`
* Toisto: `r 5 funktio`

Näitä yksinkertaisia peruspalikoita yhdistelemällä, teimme jo monta jännää temppua: neliöitä, kirjaimia ja portaita!

Koodaus on juuri tätä. Kilpikonnan, eli tietokoneen, tekemät monimutkaisimmatkin temput, ovat oikeasti vain
tällaisten yksinkertaisten komentojen yhdistelmiä. Koodari on ihminen, joka yhdistää komentoja funktioiksi, ja
sitten vielä yhdistelee funktioita yhä monimutkaisemmiksi funktioiksi. Mutta monimutkaisinkin tietokoneohjelma
loppujen lopuksi koostuu hyvin yksinkertaisista komennoista.

Yksinkertaisia peruspalikoita on vielä vähän lisää. Tässä luvussa opimme tärkeän tempun nimeltä *muuttujat*.

### 2.1 Muuttujat

*Muuttuja* on koodin osa, joka voi sisältää numeron. Itse asiassa osaat jo komennon millä muuttujia tehdään. Se on sama
komento, jota käytimme funktion tekemiseen: `let` ja sen jälkeen vielä yhtäsuuruusmerkki: `=`.

Kun yhtäsuuruusmerkin jälkeen tulee sekvenssi, syntyi `let` komennolla funktio. Mutta jos yhtäsuuruusmerkin
jälkeen tuleekin pelkkä numero, sitä kutsutaan muuttujaksi. Teet siis muuttujan näin:

    let korkeus = 10

Ensimmäisessä luvussa opit, että tietokone tekee sen mitä koodari käskee sitä tekemään. Tietokone voi piirtää
vaikka sata porrasta, eikä sitä yhtään väsytä, jos käytit `r`-komentoa ja käskit tietokonetta tekemään niin.

Muuttujien avulla koodia voidaan, juuri niin: *muutella*.

Joskus voit haluta tehdä saman asian monta kertaa, mutta *kuitenkin vähän eri tavalla*. Juuri tähän käytetään *muuttujia*.

Käytetäänpä nyt `korkeus`-muuttujaa erikokoisten portaiden piirtämiseen. Tehdään siis ensin muuttuja, ja sitten funktio:

    clear
    let korkeus = 10
    let porras = s[ fd korkeus, rt 90, fd korkeus, lt 90]

Ja sitten piirretään `r`-komennolla vaikkapa 5 porrasta:

    r 5 porras

Piirsit nyt portaikon, jossa portaat ovat 10 pikselin korkuisia. Kokeile antaa `korkeus`-muuttujalle joku toinen *arvo*,
eli joku toinen *numero*. Piirrä esimerkiksi 3 porrasta, jotka ovat 50 pikselin korkuisia:

    clear
    let korkeus = 50
    let porras = s[ fd korkeus, rt 90, fd korkeus, lt 90]
    r 3 porras


### 2.2 Funktion muuttujat (eli argumentit)

Olet oppinut käyttämään *muuttujia*, eli *muuttelemaan* koodiasi! Valitettavasti yllä oleva esimerkki on kuitenkin vielä vähän
hankala. Turtle Roy ohjelmointikielessä, muuttujan arvo (eli numero) lasketaan siitä hetkestä kun koodisekvenssi kirjoitetaan
ja painat Enter. Jos vaihdat `korkeus`-muuttujan arvoa, pitää sinun myös luoda `porras`-funktio uudestaan. Joka kerta!

Jos käytit nuoli-ylös näppäintä, eli <em class="key">↑</em>, tämä ei ehkä ole kovin suuri vaiva. Mutta se on kuitenkin turhaa.
Voimme yksinkertaistaa ja nopeuttaa koodaustyötämme vielä entisestään käyttämällä *funktiomuuttujia*.

(Koodarit kutsuvat funktiomuuttujia yleensä *"argumenteiksi"*. Koska "argumentti" ei oikeastaan ole suomenkielinen sana ollenkaan,
emme käytä sitä koodikirjassa. Puhumme vain yksinkertaisesti muuttujista.)

Jotta funktio tietäisi, että `korkeus` on muuttuja, se pitää kertoa tietokoneelle funktiota luotaessa. Voit kertoa funktiolle
sen muuttujien nimet, kun luot funktion `let`-komennolla. Funktiossa käytettävien muuttujien nimet, kirjoitetaan funktion
oman nimen jälkeen, näin:

    let porras korkeus = s[ fd korkeus, rt 90, fd korkeus, lt 90]

Nyt kun seuraavan kerran käsket kilpikonnaa piirtäämään `porras`-funktion, sinun pitää myös kertoa portaan korkeus samalla kertaa.
Kokeile piirtää erikorkuisia portaita, vaikka näin:

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
    porras 1

Toki voit myös edelleen käyttää toistokomentoa `r`. Toistokomentoa pitää nyt kuitenkin vähän auttaa. Jotta toistokomento osaa
lukea funktion nimen ja siihen kuuluvan muuttujan yhdessä, pitää funktion nimi ja muuttuja laittaa kaarisulkeiden sisään:

    clear
    r 50 (porras 5)

Funktiossa voi olla useampiakin muuttujia. Itse asiassa toistokomennostakin voi tehdä funktion, ja silloin voi tehdä toistojen
määrästä myös muuttujan!

    let portaikko lukumäärä korkeus = s[ r lukumäärä (porras korkeus)]

Voit nyt piirtää erilaisia portaikkoja vaihtelemalla `portaikko`-funktion perässä olevaa kahta numeroa:

    clear
    portaikko 3 50

tai

    clear
    portaikko 50 5

Olet nyt luonut funktion, joka voi tehdä hyvinkin erikokoisia - ja pituisia - portaikkoja helposti vain
kahta muuttujaa muuttelemalla!

**Harjoitus:** Muistatko vielä miten Luvussa 1 piirrettiin neliö käyttämällä `mutka`-funktiota? Jos et muista, voit
virkistää muistiasi: Hyppää Turtle Roy ikkunan puolelle ja piirrä neliö, ihan samalla tavalla kuin luvussa 1 piirrettiin.
... Noniin, muistuiko mieleen? Hyvä! Muuta nyt `mutka`-funktiota niin, että neliön sivun pituus onkin muuttuja. Eli
sen sijaan, että funktiossa kirjoitetaan suoraan `fd 100`, kirjoitakin `fd pituus` ja muista kertoa `let` komennolle,
että `pituus` on funktion muuttuja.

### 2.3 Piirretään kuvioita

Tässä kappaleessa luodaan yksi funktio, jolla voit piirrellä monia erilaisia kuvioita, pelkästään vaihtelemalla
funktion muuttujien arvoja.

Funktio on samanlainen, kuin millä teit edellisessä harjoituksessa neliön, mutta nyt tehdäänkin niin, että kaikki numerot
on muutettu muuttujiksi:

    clear
    let sivu pituus kulma = s[ fd pituus, rt kulma]
    let kuvio lukumäärä pituus kulma = s[ r lukumäärä (sivu pituus kulma)]

Voit nyt kokeilla piirtää erilaisia kuvioita vaihtelemalla muuttujien arvoja. Mikähän kuvio tästäkin muodostuu:

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

<blockquote class="cloud-left">
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

Hienoa! Olet nyt oppinut käyttämään muuttujia. Niiden avulla voit muutella koodia niin, että samoilla funktioilla
voi tehdä kerrasta toiseen hieman erilaisia temppuja!

(Turtle Roy:ssa muuttujien käyttö on aika rajattua moniin muihin ohjelmointikieliin verrattuna. Muuttujien käyttö
rajoittuu lähinnä funktion alkuarvojen - eli argumenttien - käyttöön. Mutta näilläkin muuttujilla tehtiin jo
monta kivaa temppua, eikö vain?)

Tästä pääset Koodikirjan [3.lukuun](/luku3/)!


<%=render('partials/feedback')%>
