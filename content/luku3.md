--- 
title: Luku 3
pagetype: book
---

# Koodikirja

<div><img id="turtle-character" src="/images/turtle1.png" alt="kilppari"></div>

## Luku 3 - Musiikkia korville

Tiesitkö, että Turtle Roy osaa soittaa musiikkia? Kokelepa

    play c

Kuuluiko ääni? Jos ei kuulunut, varmista, että tietokoneessasi on äänet päällä!

### 3.1 Musiikki on koodausta

Miten tietokoneen saa sitten soittamaan musiikkia? Tietenkin soittamalla peräkkäin useita nuotteja. 
Käytetään taas aiemmin opittua komentosarjaa `s`:

    s [play c, play c, play g, play g, play a, play a, play g]

Kuulostiko tutulta? Jos meni oikein, niin tämä saattoi kuulostaa Tuiki tuiki tähtönen -kappaleen ensimmäiseltä säkeeltä.

**Harjoitus:** Saatko tietokoneen soittamaan koko kappaleen?

<blockquote class="cloud-small">
  <strong>Vinkki:</strong> Musiikissa käytetään usein taukoja. Turtle Roy osaa pitää tauon komennolla `pause`.
  <div class="robot"></div>
</blockquote>

### 3.2 Musikaaliset funktiot

Jos kirjoitit koko kappaleen yhdeksi komentosarjapötköksi, tuli pötköstä varmasti aika pitkä. 
Itse en jaksaisi edes kirjoittaa näin pitkää pötköä, mutta onneksi koodareilla on keinonsa! Oletkin jo saattanut huomata, että
kappaleessa on toistuvia osia. Esimerkiksi ensimmäinen säe toistuu myös kappaleen lopussa. Kappaleen eri osista voidaankin 
tehdä omat funktionsa, joista koko kappale voidaan lopuksi koostaa. 
Tässä pari ensimmäistä osaa ja niistä koostettu kappaleen alku:

    let säe1 = s [play c, play c, play g, play g, play a, play a, play g, pause]
    let säe2 = s [play f, play f, play e, play e, play d, play d, play c, pause]
    s [säe1, säe2]

**Harjoitus:** Tee koko Tuiki tuiki tähtönen vielä uudestaan jakamalla se osiin, kuten yllä.

### 3.3 Äänen olemuksesta

Tiesithän, että ääni on ilman värähtelyä? Me kuulemme toiset äänet korkeampina (vaikkapa hyttysen ininä) ja 
toiset äänet matalampina (vaikkapa ison koiran murina). Oikeasti korkeammat äänet ovat nopeampaa ilman värinaa ja 
matalammat hitaampaa värinää. Ilman värähtelyn nopeutta kutsutaan *taajuudeksi* ja sen yksikkö on *hertsi* eli 
värähdysten määrä sekunnissa. Esimerkiksi keski-C -nuotin taajuus on noin 261,6 Hz eli hertsiä.

Myös Turtle Roy ymmärtää tämän ja osaa soittaa nuotteja niiden taajuuden mukaan. Voit siis käyttää `play` -komennossa myös
taajuuslukuja:

    play 1000

Itse asiassa nuotit c,d,e,f,g,a ja h ovatkin vain funktioita, joiden arvo on tietty taajuus. Kokeile vaikka

    c

Turtle Roy kertoo sinulle C-nuotin taajuuden hertseissä.

**Harjoitus:** Mikä on F-nuotin taajuus?

Eräs hauska piirre nuoteissa on se, että yhtä oktaavia korkeamman nuotin taajuus on aina kaksinkertainen edelliseen. Esimerkiksi
korkeamman C-nuotin taajuus on 2 * 261,6 Hz. Voit siis soittaa nuotteja oktaavia korkeammalta kertomall nuotin taajuden kahdella.

    play c*2

<blockquote class="os-specific os-mac browser-specific  browser-firefox">
  <strong>Vinkki:</strong> Tähtisymbolia * käytetään ohjelmoinnissa kertomerkkinä ja kutsutaan asteriskiksi.
  näppäin löytyy suomalaisesta näppäimistöstä enter-näppäimen vierestä ja asteriskin saa tehtyä painamalla samanaikaisesti 
  <em class="key">shift</em> ja <em class="key">*</em> 
  <div class="robot"></div>
</blockquote>

Jos haluat todella korkean C-nuotin voit kokeilla tätä:

    play c*32

Kokeilin myös nuottia `c*64` mutta en kuullut mitään. Kuuletko sinä näin korkean äänen? Jos kuulet, niin sinulla on hyvä kuulo!

### 3.4 Polyfonia ja parallelismi

Polyfonialla tarkoitetaan sitä, että soitetaan samanaikaisesti monta eri säveltä. Usein polyfonia muodostuu, kun orkesterin eri soittimet soittavat samanaikaisesti erilaisia, toisiaan tukevia melodioita. Ohjelmoinnissa samaa asiaa kutsutaan parallelismiksi; tietokoneohjelma voidaan haarauttaa tekemään rinnakkain kahta eri asiaa. Turtle Royssa parallelismi onnistuu funktiolla `par`. Jos siis haluat soittaa samanaikaisesti kaksi nuottia, kokeile tätä:

    par [play c, play e]

Jos taas haluat soittaa rinnakkain kahta eri melodiaa, voit kokeilla tätä:

    par [s [play c, play d, play e], s [play e, play f, play g]]

**Harjoitus:** Tee oma kappale, jossa soitetaan rinnakkain kahta ääntä

Soitetaanpa vielä Tuiki tuiki tähtönen -kappaleen kaanonissa, eli siten, että toinen ääni seuraa ensimmäistä ääntä esimerkiksi yhden tahdin verran jäljessä.

Kaanonissa soittaminen on itse asiassa aika helppoa: jos olet tehnyt funktion `tuiki` joka soittaa kappaleen, voit soittaa sen kaanonissa näin:

    par [tuiki, s [r 4 pause, tuiki]]

***

P. S. Musiikki ja ohjelmointi ovat aika samanlaisia, eikö? Jos haluat sukeltaa syvemmälle musiikkiohjelmoinnin maailmaan, kannattaa tutustua Sonic Pi -ohjelmaa [Mehackit -sivuston ohjeilla](http://sonic-pi.mehackit.org/index_fi.html)!
