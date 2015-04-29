--- 
title: Luku 1
pagetype: book
---

# Koodikirja

<div><img id="turtle-character" src="/images/turtle1.png" alt="kilppari"></div>

## Alkusanat

Tervetuloa Koodikirjaan! 

Koodaus on hauskaa ja siinä oppii paljon. Koodaamalla
voit rakentaa omia pelejä ja maailmoja, joiden säännöt määräät sinä. Olet varmasti
tutustunut moniin hienoihin peleihin tietokoneella, puhelimella tai pelikonsolilla, ja haluaisit ehkä itse tehdä
jotain yhtä hienoa. Se on mahdollista! Ensin täytyy kuitenkin opetella hieman perusasioita. Juuri sitä varten Koodikirja on olemassa.

Koodi on tietokoneiden kieltä. Koodilla voit käskeä tietokonetta 
tekemään mitä haluat. Koodaus puolestaan on koodin kirjoittamista, ja koodista rakennettujen palasten 
yhdistelemistä.

Koodikirjassa kerrotaan koodista ja koodauksesta, mutta pelkästään lukemalla Koodikirjaa et kuitenkaan voi
oppia koodaamaan, sillä koodaamaan oppii vain koodaamalla.
Koodikirjassa koodausta opetellaankin tekemällä pieniä harjoituksia lukemisen ohessa. Lisäksi
kirjassa on kappaleiden lopussa hieman haastavampia harjoituksia, joita tekemällä pääset koodaamaan
ihan itse.

Jos sinua kiinnostaa tietää enemmän Koodikirjasta, niin klikkaa [tästä](/tietoja/). Jos
taas haluat päästä koodaamaan, niin jatka lukemista.

<hr>

## Luku 1 - Konnankoukkuja kahdelle

Jos luet tätä kirjaa puhelimesta tai tabletista (esimerkiksi iPad), tarvitset koodausharjoituksiin "oikean"
tietokoneen, jossa on näppäimistö. Voit myös lukea kirjaa tabletilta ja koodata oikealla tietokoneella.

Ennen kuin aloitat, voit valita alla olevista kuvakkeista, millaista tietokonetta käytät koodaukseen. Tämä valinta
vaikuttaa esimerkiksi kirjassa neuvottuihin näppäimistökomentoihin.

<%=render 'partials/os'%>

Jos et tiedä, mikä käyttöjärjestelmä koneessasi on, kysy vaikkapa äidiltäsi! 
Voit vaihtaa tätä valintaa myös myöhemmin palaamalla tänne.

### 1.1 Konna liikkeelle

Kokeillaanko? Tässä luvussa leikimme Turtle Roy -ohjelmalla, jonka saat avata ihan kohta. Turtle Roy toimii
selaimessasi, joten sinun ei tarvitse asentaa koneellesi mitään uutta. Lue
tästä kuitenkin vielä lyhyt esittely, ennen kuin aloitat. Alla olevassa kuvassa näet, miltä Turtle Roy
näyttää.

<div class="turtle-fake" id="turtle-embed-1.1"></div>

Ylempi, vaalea alue on "piirtopaperi", jolle voit piirtää kuvioita sen keskellä sijaitsevan kolmiomaisen
"kilpikonnan" avulla. Kilpikonnaa ohjataan antamalla sille käskyjä, jotka syötetään alemmalla, tummalla
alueella sijaitsevan *kursorin* avulla. Kursori on se keltainen vilkkuva neliö.

Nyt on aika avata Turtle Roy -ohjelma [tästä](http://turtle-roy.herokuapp.com), jolloin se aukeaa uuteen ikkunaan
tai täbiin.

<blockquote class="os-specific os-mac browser-specific  browser-firefox">
  <strong>Vinkki:</strong> Jos Turtle
  Roy aukeaa erillisellä täbillä, voit vaihdella täbien välillä pitämällä pohjassa näppäimiä <em class="key">cmd</em>
  ja <em class="key">alt</em> ja painamalla nuolinäppäimiä.
  <div class="robot"></div>
</blockquote>

<blockquote class="os-specific os-mac browser-specific browser-chrome">
  <strong>Vinkki:</strong> Jos Turtle
  Roy aukeaa erillisellä täbillä, voit vaihdella täbien välillä pitämällä pohjassa näppäimiä <em class="key">cmd</em>
  ja <em class="key">alt</em> ja painamalla nuolinäppäimiä.
  <div class="robot"></div>
</blockquote>

<blockquote class="os-specific os-mac browser-specific browser-safari">
  <strong>Vinkki:</strong> Jos Turtle
  Roy aukeaa erillisellä täbillä, voit vaihdella täbien välillä pitämällä pohjassa näppäimiä <em class="key">cmd</em>
  ja <em class="key">shift</em> ja painamalla nuolinäppäimiä.
  <div class="robot"></div>
</blockquote>

<blockquote class="os-specific os-windows os-linux large">
  <strong>Vinkki:</strong> Jos Turtle
  Roy aukeaa erillisellä täbillä, voit vaihdella täbien välillä pitämällä pohjassa näppäimiä <em class="key">ctrl</em> 
  ja <em class="key">alt</em> ja 
  painamalla nuolinäppäimiä. Jos Turtle Roy aukeaa
  erillisessä ikkunassa, voit vaihdella ikkunoiden välillä painamalla yhtä aikaa <em class="key">ctrl</em> ja 
  <em class="key">tab</em> -näppäimiä.
  <div class="robot"></div>
</blockquote>

Kokeilepa kirjoittaa näin.

    fd 100

Kun painat <em class="key">enter</em>-nappia, kilpikonna Roy suorittaa antamasi käskyn. Uskallatko painaa?  Paina vaan!

Hyvä! Liikkuiko konna? Muistithan välilyönnin! Jos meni mönkään, niin ei hätää! Tietokone ilmoittaa virheestä punaisella tekstillä. Yritä uudelleen.

Joko onnistuit?

Onneksi olkoon! 
Siinä oli ensimmäinen tietokoneohjelmasi, joka teki yhden asian. 
Kilpikonna liikkui 100 askelta eteenpäin ja piirsi viivan mennessään.
Kilpikonnan askeleet ovat hyvin lyhyitä ja niitä sanotaan myös pikseleiksi. 
Mitä muuta Kilpikonna Roy osaa tehdä? Kokeilepa tätä.

    lt 90

Ja kas, kilpikonna kääntyi vasemmalle. Vai kääntyikö? Muistithan painaa taas Enteriä.  Ja vielä

    rt 90

Nyt konna kääntyi oikealle. Näillä kolmella käskyllä pääset jo pitkälle. 
Lisäksi on hyvä osata palauttaa konna keskelle paperia ja tyhjentää paperi. Se käy näin.

    clear

Tässä vielä piirros käännöksistä eri suuntiin.

<div class="turtle-diagram" style="width:400px;height:300px;" id="suunnat1-diagram" data-id="suunnat1"></div>

Onko vaikeaa muistaa, kumpi oikea ja kumpi on vasen? Minua ainakin auttaa se, että kirjoitan aina
oikealla kädellä. Kun otan kynän käteen, tiedän, kumpi on oikea. Myös englanninkielinen lause "You
write with your right" auttaa ainakin oikeakätisiä muistamaan sen, että oikea (right) on kirjoituskäsi.

{::nomarkdown}
<table>
  <thead><tr><th>Komento</th><th>Englanniksi</th><th>Suomeksi</th></thead>
  <tbody>
    <tr><td>fd<td>forward<td>eteenpäin</tr>
    <tr><td>lt<td>left turn<td>käännös vasemmalle</tr>
    <tr><td>rt<td>right turn<td>käännös oikealle</tr>
  </tbody>
</table>
{:/nomarkdown}

Nyt voit kokeilla ohjailla konnaa ympäriinsä. Karkasiko konna ruudun ulkopuolelle? Ei hätää - `clear`-komennolla pääset alkuun. 
Jos haluat palauttaa konnan keskelle pyyhkimättä paperia tyhjäksi, voit kokeilla myös `home` -komentoa

***

**Harjoitus:** saatko käännettyä konnan niin, että se osoittaa alaspäin?

**Harjoitus:** osaatko piirtää neliön?

**Harjoitus:** osaatko liikuttaa kilpikonnaa lyhemmän matkan, vaikkapa 50 pikseliä?

***

<blockquote class="cloud2">
  <strong>Vinkki:</strong> Jos haluat suorittaa edellisen komennon uudelleen, paina <em class="key">↑</em> ja
  <em class="key">enter</em>. 
  Voit myös muokata komentoa ennen suorittamista käyttämällä sivunuolia ja poistonäppäintä.
  <div class="robot"></div>
</blockquote>

<blockquote class="cloud-left">
  <strong>Vinkki:</strong> Jos on vaikea päätellä, pitäisikö konnaa kääntää oikealle <code>rt</code> vai vasemmalle
  <code>lt</code>, voit
  askarrella pahvista oman pienen kilpikonnan. Laita kilpikonna näytölle samaan asentoon kuin
  Kilpikonna Roy ja käännä haluttuun suuntaan. Jos käänsit myötäpäivään (suuntaan johon kello
  pöyrii), on kyseessä käännös oikeaan eli <code>rt</code>.
  <div class="robot"></div>
</blockquote>
***

### 1.2 Lisää konnankoukkuja

Jäitkö miettimään miksi käytimme lukua 90 käännöksissä? 
No, sehän tarkoittaa tietenkin 90:n asteen käännöstä eli *suoraa kulmaa*.
Käyttämällä eri lukua, saat konnan kääntymään eri asentoon. 
Esimerkiksi jos teet `rt 180` niin konna kääntyy 180 astetta eli täyskäännöksen. Kokeile!

Mitä tapahtuu jos teet `lt 360`? Konna pyörähtää ympäri täydet 360 astetta 
palaten alkuperäiseen asentoonsa. Alla olevassa kuvassa vielä hieman lisää eri
asteisia käännöksiä.

<div class="turtle-diagram" style="width:640px;height:500px;" id="suunnat2-diagram" data-id="suunnat2"></div>

Eri asteisia käännöksiä tarvitset, kun koetat piirtää hieman monimutkaisempia kuvioita.
Alla näet M-kirjaimen eri nurkissa tarvittavat kulmat. Kokeile piirtää
M-kirjain itse Turtle Roylla!

<div class="turtle-diagram" style="width:400px;height:300px;" id="mkirjain-diagram" data-id="mkirjain"></div>

Joitain kuvioita piirrettäessä on tarpeellista nostaa välillä kynä ylös paperista.
Turtle Royssa kynä voidaan nostaa ylös komennolla `penup`. Kynän voi laskea uudelleen
alas komennolla `pendown`. Jos haluaisit piirtää kaksi viivaa vierekkäin, se kävisi näin.

<div class="turtle-diagram" style="width:400px;height:300px" id="kaksiviivaa-diagram" data-id="kaksiviivaa"></div>

**Harjoitus:** Etsi suoria kulmia kotoasi. Onko pöydän kulma suora kulma?

**Harjoitus:** Piirrä oman nimesi alkukirjain

**Harjoitus:** Voit myös yrittää kirjoittaa koko nimesi (tarvitset `penup`, `pendown` -komentoja kirjainten välillä!)

***

### 1.3 Neliö

Piirsitkö neliön jo? No, nyt piirretään neliö yhdessä! Mietitään aluksi,
millaisia vaiheita neliön piirtämisessä on... suoria viivoja ja käännöksiä, eikö niin?
Jos neliö piirtämisestä tehtäisiin sarjakuva, se näyttäisi suurin piirtein tältä:

<div class="turtle-diagram" style="width:640px;height:300px;" id="neliovaiheet-diagram" data-id="neliovaiheet"></div>

Ja toistetaan samaa kaavaa kunnes neliö on valmis... Kokeile!

Mutta eikö olekin tylsää jankuttaa tietokoneelle samoja käskyjä monta kertaa? 
Mitä jos voisitkin sanoa sille että

   *"Mene eteenpäin ja käänny oikealle. Toista tämä 4 kertaa."*

Tietokone ei valitettavasti ymmärrä tätä, 
mutta saman asian pystyy kertomaan sille myös ohjelmointikielellä. 
Miten?

Seuraavissa kappaleissa teemme neliön, niin kuin koodari sen tekisi.
Samalla saat tutustua sekvensseihin, funktioihin ja toistorakenteisiin.
Ne ovat koodarin tärkeitä rakennuspalikoita ja saattavat aluksi tuntua
aika monimutkaisilta. Mutta ei hätää! Tulemme käsittelemään niitä vielä
monesti. Jos jokin siis tuntuu liian vaikealta, älä luovuta! Asiat selkiytyvät
ajan myötä.

***

### 1.4 Sekvenssit

Mieti miten rakentaisit Lego-palikoista valtavan robotin! Ehkä rakentaisit
ensin vartalon ja jalat ja yhdistäisit ne. Sitten rakentaisit vielä pään ja
kädet ja pian robotti olisi valmis. 

Juuri tällä tavalla koodari ajattelee! Hän keksii, mistä osista koodi koostuu,
sitten rakentaa osat, ja lopuksi kytkee ne yhteen.

Vaikka robottien rakennus onkin hyvin mielenkiintoista, palataan vielä hetkeksi
neliön piirtämiseen. Aloitetaan siitä, että opetellaan kertomaan ohjelmointikielellä

    *Mene eteenpäin ja käänny oikealle*

Ja se käy näin.

    s [fd 100, rt 90]

Huh! Aika kummallinen kieli, vai mitä? 
Tässä `s` (tulee englanninkielisestä sanasta *sequence*) tarkoittaa sitä, 
että tehdään temppuja peräkkäin. Sitä kutsutaan myös *sekvenssiksi*.
Lista tehtävistä tempuista laitetaan hakasulkujen [ ] sisään ja erotellaan toisistaan pilkuilla.

<div class="os-specific os-mac">
Osaatko tehdä hakasulut? Mac-tietokoneissa hakasulut tehdään painamalla samanaikaisesti
<em class="key">alt</em> ja
<em class="key">8</em> tai
<em class="key">9</em>.
</div>

<div class="os-specific os-linux os-windows">
Osaatko tehdä hakasulut? Linux- ja Windows-tietokoneissa hakasulut tehdään painamalla samanaikaisesti
<em class="key">alt gr</em> ja
<em class="key">8</em> tai
<em class="key">9</em>.
</div>

Kokeile! Muistithan välilyönnit, hakasulut ja pilkut.
Kaikki pitää olla oikeilla paikoillaan tai tietokone ei ymmärrä.
Se ei ole kovin älykäs, vaan ottaa kaiken kirjaimellisesti.
Sinun on opetettava sitä kärsivällisesti!

Kun onnistuit, niin teepä samaa vielä muutaman kerran uudestaan.
Muistathan, että edellisen komennon voi helposti toistaa painamalla <em class="key">↑</em> ja <em class="key">Enter</em>. 
Mitä syntyi? Neliöhän siitä tuli, eikö?

Neliön piirtämiseen siis riittää tehdä neljä kertaa peräkkäin sama sekvenssi. Harjoitellaanpa
vielä hieman sekvenssejä! Kokeilepa tätä:

    s [clear, fd 100, rt 90, fd 100]

Tämän sekvenssin alussa on `clear`, joten tätä temppua tehdessään kilpikonna Roy
tyhjentää aina aluksi paperin ja aloittaa keskeltä.

**Harjoitus:** Piirrä oman nimesi alkukirjain (tai jokin muu kirjain)  yhdellä sekvenssillä. 
Aloita sekvenssi `clear` -komennolla.

***

### 1.5 Funktiot

Tyhjennetäänpä taas ruutu.

    clear

Seuraavaksi saat opettaa Turtle Roylle uuden tempun. Kokeilepa tätä:

    let mutka = s [fd 100, rt 90]

Jos kirjoitit oikein, niin Roy osaa nyt yhden tempun enemmän kuin äsken. Teepä seuraavaksi näin:

    mutka

Ja uudestaan. Ehkä vielä pari kertaa? Taas neliö!

Nyt siis neliön voi tehdä kirjoittamalla neljä kertaa peräkkäin *mutka*.

Kun opetit tietokoneelle tempun nimeltä *mutka*, teit koodarien kielellä
uuden *funktion*. Roy-ohjelmointikielessä funktioita tehdään sanomalla "let nimi = ohjeet",
missä sanan "nimi" tilalle tulee funktion nimi ja sanan "ohjeet" tilalle tulee
funktion toteutus eli ohjeet uuden tempun tekoon.

Ei hullumpaa! Mutta neliön voi tehdä vielä hieman nopeammin. Vaikkapa näin:

    s [clear, mutka, mutka, mutka, mutka]

Nyt neliö piirtyikin jo yhdellä koodirivillä!

**Harjoitus:** Opeta kilpikonnalle funktio, joka piirtää nimesi alkukirjaimen. Vinkki: aloita `let kirjain = `.
Kun funktio on opetettu, voit piirtää nimesi alkukirjaimen komennolla `kirjain`.

***

### 1.5 Toistorakenteet

Kokeilepa vielä tätä:

    r 4 mutka

Tuliko neliö? Jes! Käskit juuri tietokonetta tekemään "mutkan" 4 kertaa. Tässä `r`
(tulee englannin sanasta *repeat*) tarkoittaa sitä, että toistetaan jokin temppu
monta kertaa.

Toistoa käyttäen voit piirtää vaikkapa tällaiset portaat melko helposti:

<div class="turtle-diagram" style="width:450px;height:200px;" id="portaat-diagram" data-id="portaat"></div>

**Harjoitus:** Kokeile piirtää portaat itse käyttämällä toistoa.

**Harjoitus:** Opeta Turtle Roylle temppu, jolla saat tehtyä neliön yhdellä sanalla. Piirrä neliöitä eri puolille ruutua.

***

### Teoksen tallentaminen ja lataaminen

Voit tallentaa Turtle Royssa tekemäsi komennot melko helposti.

1. Kirjoita `login "omanimi"`. Korvaa sana *omanimi* omalla nimelläsi. Muista lainausmerkit!
2. Kirjoita `save "teos"`. Korvaa sana *teos* nimellä jonka haluat piirrustuksellsei antaa.

Kun palaat Turtle Roy:hin, tee `login "omanimi"` uudestaan ja sitten `open "teos"`, niin kilpikonna
piirtää piirrustuksesi uudelleen. Komennolla `ls` näet listan tallentamistasi piirrustuksista.

Tässä vielä [listaus](/turtle-roy/) tärkeimmistä Turtle Roy -komennoista suomenkielisine selityksineen.

Tähän päättyy Koodikirjan ensimmäinen luku. Minulla oli hauskaa, kun kirjoitin tämän. 
Toivottavasti sinullakin oli hauskaa!

Nähdään taas Koodauskirjan [2.luvussa](/luku2/)!

***

P. S. Jos koodauskipinä iski, niin voit tutustua esimerkiksi näihin loistaviin koodauspeleihin ja -ympäristöihin.
Nämä linkit johtavat englanninkielisille sivuille, joten saatat tarvita vanhemman apua.

- [code.org/learn](http://code.org/learn) paljon hauskoja koodauspelejä ja puuhasteltavaa
- [Scratch](http://scratch.mit.edu) MIT-yliopiston graafinen koodausympäristö

<%=render('partials/feedback')%>
