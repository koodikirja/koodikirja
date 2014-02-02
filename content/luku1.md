--- 
title: Luku 1
---

# Koodikirja - Luku 1

## Alkusanat

Koodikirjaa lukemalla ei opi koodaamaan. Koodausta oppii vain koodaamalla. Alkuun kuitenkin
pääsee helpommin, jos joku auttaa hieman. Koodikirjan tarkoitus on auttaa sinut alkuun.

Lue eteenpäin ja toimi ohjeiden mukaan niin opit kyllä varmasti vähän koodausta.

Jos sinua kiinnostaa tietää enemmän Koodikirjasta, niin klikkaa [tästä](/tietoja/). Jos
taas haluat päästä koodaamaan, niin jatka lukemista.

## Luku 1 - Tietokone ja kilpikonna

Mikä on tietokone? Mitä se tekee?

Tietokone ei ole pelkkä viihteen kuluttamiseen suunniteltu laite. TODO

Pohjimmiltaan tietokone on nöyrä palvelija, joka suorittaa sille annetut käskyt järjestyksessä ja uskomattoman nopeasti. Esimerkiksi selaimesi osaa laskea miljoonaan alle sekunnissa.

Mutta tärkeintä on, että se tottelee käskyjä.

***

### 1.1 Konna liikkeelle

Kokeillaanko? Tässä luvussa leikimme Turtle Roy -ohjelmalla, jonka saat avata ihan kohta. Turtle Roy toimii
selaimessasi (TODO: check compatibility), joten sinun ei tarvitse asentaa koneellesi mitään uutta. Lue
tästä kuitenkin vielä lyhyt esittely, ennen kuin aloitat. Alla olevassa kuvassa näet, miltä Turtle Roy
näyttää.

TODO: kuva

{::nomarkdown}
<iframe width=640 height=400 src="http://turtle-roy.herokuapp.com"></iframe>
{:/nomarkdown}

Ylempi, vaalea alue on "piirtopaperi", jolle voit piirtää kuvioita sen keskellä sijaitsevan kolmiomaisen
"kilpikonnan" avulla. Kilpikonnaa ohjataan antamalla sille käskyjä, jotka syötetään alemmalla, tummalla
alueella sijaitsevan *kursorin* avulla. Kursori on se keltainen vilkkuva neliö.

Nyt on aika avata Turtle Roy -ohjelma [tästä](http://turtle-roy.herokuapp.com), jolloin se aukeaa uuteen ikkunaan
tai täbiin. 

> Nyt kannattaa opetella vaihtelemaan Turtle Royn ja Koodikirjan välillä näppärästi. Jos Turtle
> Roy aukeaa erillisellä täbillä, voit vaihdella täbien välillä pitämällä pohjassa näppäimiä Cmd
> ja Alt (Mac) tai Ctrl ja Alt (Linux, Windows) ja painamalla nuolinäppäimiä. Jos Turtle Roy aukeaa
> erillisessä ikkunassa, voit vaihdella ikkunoiden välillä painamalla yhtä aikaa Ctrl ja Tab -näppäimiä
> (Linux, Windows).

Kokeileppa kirjoittaa näin.

    fd 100

Kun painat Enter-nappia, kilpikonna Roy suorittaa antamasi käskyn. Uskallatko painaa?  Paina vaan!

Hyvä! Liikkuiko konna? Muistithan välilyönnin! Jos meni mönkään, niin ei hätää! Tietokone ilmoittaa virheestä punaisella tekstillä. Yritä uudelleen.

Joko onnistuit?

Onneksi olkoon! Siinä oli ensimmäinen tietokoneohjelmasi, joka teki yhden asian. Kilpikonna liikkui 100 askelta eteenpäin ja piirsi viivan mennessään. Kilpikonnan askeleet ovat hyvin lyhyitä ja niitä sanotaan myös pikseleiksi. Mitä muuta kilpikonna Roy osaa tehdä? Kokeilepa tätä.

    lt 90

Ja kas, kilpikonna kääntyi vasemmalle. Vai kääntyikö? Muistithan painaa taas Enteriä.  Ja vielä

    rt 90

Nyt konna kääntyi oikealle. Näillä kolmella käskyllä pääset jo pitkälle. Lisäksi on hyvä osata palauttaa konna keskelle paperia ja tyhjentää paperi. Se käy näin.

    clear

![Suunnat](/images/suunnat1.png)

> Englanninkieliset sanat
>
> - FD = forward = eteenpäin
>
> - LT = left turn = käännös vasempaan
>
> - RT = right turn = käännös oikeaan
>

Nyt voit kokeilla ohjailla konnaa ympäriinsä. Karkasiko konna ruudun ulkopuolelle? Ei hätää - `clear`-komennolla pääset alkuun. Jos haluat palauttaa konnan keskelle pyyhkimättä paperia tyhjäksi, voit kokeilla myös `home` -komentoa

Harjoitus: saatko käännettyä konnan niin, että se osoittaa alaspäin?
Harjoitus: osaatko piirtää neliön?
Harjoitus: osaatko liikuttaa kilpikonnaa lyhemmän matkan, vaikkapa 50 pikseliä?

> jos haluat suorittaa edellisen komennon uudelleen, paina nuoli ylös `↑` -nappia. Nyt voit suorittaa komennon uudelleen painamalla Enter. Voit myös muokata komentoa. Voit poistaa merkkejä backspace-näppäimellä (kuva) ja liikuttaa kursoria sivunuolilla.

***

### 1.2 Lisää konnankoukkuja

Jäitkö miettimään miksi käytimme lukua 90 käännöksissä? No, sehän tarkoittaa tietenkin 90:n asteen käännöstä. Käyttämällä eri lukua, saat konnan kääntymään eri asentoon. Esimerkiksi jos teet `rt 180` niin konna kääntyy 180 astetta eli täyskäännöksen. Kokeile!

MItä tapahtuu jos teet `lt 360`? Konna pyörähtää ympäri täydet 360 astetta palaten alkuperäiseen asentoonsa.

![Suunnat 2](/images/suunnat2.png)

Tehdäänpä M-kirjain!

![M-Kirjain](/images/mkirjain.png)

TODO: penup, pendown

Harjoitus: piirrä oman nimesi alkukirjain
Harjoitus: voit myös yrittää kirjoittaa koko nimesi (tarvitset `penup`, `pendown` -komentoja kirjainten välillä!)

***

### 1.3 Neliö

Piirsitkö neliön jo? No, nyt piirretään neliö yhdessä!

![Neliö - vaiheet](/images/nelio.png)

1. Aloitetaan `fd 100`:
2. Sitten käännytään oikealle `rt 90`:
3. Taas eteenpäin `fd 100`
4. Ja käännös oikealle...

Ja toistetaan samaa kaavaa kunnes neliö on valmis. Mutta eikö olekin tylsää jankuttaa tietokoneelle samoja käskyjä monta kertaa? Mitäs jos voisitkin sanoa sille että


     *Mene eteenpäin ja käänny oikealle. Toista tämä 4 kertaa.*


Tietokone ei valitettavasti ymmärrä tätä, mutta saman asian pystyy kertomaan sille myös ohjelmointikielellä. Mutta miten? 


Nyt on aika soveltaa "hajoita ja hallitse" -lähestymistapaa. Tämä tarkoittaa sitä, että jos meillä on kaksi asiaa joita emme osaa, opetellaa ensin yksi ja sitten toinen. Lopuksi osaamme molemmat. Aloitetaan siitä, että opetellaan kertomaan ohjelmointikielellä


    *Mene eteenpäin ja käänny oikealle*

Tai siis

    *Tee lista asioita peräkkäin: mene eteenpäin, käänny oikealle*

Ja se käy näin.

    s [fd 100, rt 90]

Huh! Aika kummallinen kieli, vai mitä? Tässä `s` (tulee englanninkielisestä sanasta *sequence*) tarkoittaa sitä, että tehdään useampi asia peräkkäin. Lista tehtävistä asioista laitetaan hakasulkujen [ ] sisään ja erotellaan toisistaan pilkuilla.

Kokeile! Muistithan välilyönnit, hakasulut ja pilkut. Kaikki pitää olla oikeilla paikoillaan tai tietokone ei ymmärrä. Se ei ole kovin älykäs, vaan ottaa kaiken kirjaimellisesti. Sinun on opetettava sitä kärsivällisesti!

Opettamisesta puheen olleen TODO blahblah, kokeilepa tätä:

    let juttu = s [fd 100, rt 90]

Nyt tietokone osaa yhden jutun enemmän kuin äsken. Teepä seuraavaksi näin:

    juttu

Ja uudestaan. Ehkä vielä pari kertaa? Muistathan, että edellisen komennon voi helposti toistaa painamalla `↑` ja Enter. Mitä syntyi? Neliöhän siitä tuli, eikö?

Nyt siis neliön voi tehdä kirjoittamalla neljä kertaa *juttu*. Ei hullumpaa! Mutta sen voi tehdä vielä hieman nopeammin. Tyhjennetäänpä ruutu

    clear

Ja nyt toistetaan *juttu* neljä kertaa yhdellä käskyllä.

    r 4 juttu

Tuliko neliö? Jes!

TODO: kertaus, mitä opittiin.


> miten hakasulut tehdään eri koneilla
> kielen nimi muuten on Roy. Joka on muuten ohjelmointikielen tekijän tyttöystävän koiran nimi.


Harjoitus: Jos jaksat kirjoittaa, voit kokeilla vielä jotain pidempää listaa. Vaikkapa
    s [fd 100, rt 90, fd 100, rt 90, fd 100, rt 90, fd 100] 
Harjoituksia TODO

***

### 1.4 Mutteri

Piirretäänpä seuraavaksi mutteri. Tai oikeastaan kuusikulmio. Kuusikulmiossa on kuusi sivua ja kuusi samanlaista kulmaa. Sen piirtämiseksi siis pitää mennä kuusi kertaa eteenpäin ja joka välissä kääntyä hieman. Kuinka paljon pitää kääntyä?

Sen voimme laskea, kun tiedämme ympyrässä olevan 360 astetta, jolloin käännöksen asteluku on 360 jaettuna kuudella, eli 360 / 6. Kokeileppa syöttää komento

    360 / 6

Jos kaikki meni hyvin, niin Turtle Roy laski laskun puolestasi ja sait vastaukseksi 60. Se osaa siis laskea! Kokeile muitakin laskutoimituksia, esimerkiksi

    1 + 1
    2 * 3
    360 / 4
    1 - 0

Tietokone siis toimii näppäränä laskukoneena. Se on tietysti hauskaa, mutta palataanpa taas piirtämään. Nyt kun tiedämme kuusikulmion kulman asteluvun, voimme piirtää kuusikulmion.

TODO: konstruoidaan 6-kulmio-ohjelma samoin kuin neliö

TODO: tehdään 100-kulmio, huomataan, että lähtee lapasesta.

Harjoitus: tee pienempi 100-kulmio (vinkki, lyhennä kerralla liikuttavaa matkaa!)
Harjoitus: laske 8-kulmion kulman asteluku (kuinka monen asteen kulma)
Harjoitus: piirrä 8-kulmio
Harjoitus: piirrä kuusikulmio paperille
