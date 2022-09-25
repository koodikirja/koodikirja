---
title: Turtle Roy
pagetype: reference
---

# Koodikirja

<div><img id="turtle-character" src="/images/turtle1.png" alt="kilppari"></div>

## Turtle Roy

Turtle Roy on ohjelma, jossa voit ohjata kilpikonnaa englanninkielisillä käskyillä ja oppia
samalla ohjelmoimaan. Klikkaa [tästä](https://turtle-roy.fly.dev) avataksesi Turtle Royn
uuteen selainikkunaan tai täbiin.

Tsekkaa myös pikku-Milan [Koodikoulu-esittelyvideo](https://www.youtube.com/watch?v=a6hf5cTOyhI)!

Olen koonnut tälle sivulle tärkeimmät Turtle Roy -käskyt suomenkielisine selityksineen.

### Piirtäminen

{::nomarkdown}

<table>
  <tbody>
    <tr><td>fd 100<td>etene 100 askelta</tr>
    <tr><td>lt 90<td>käänny vasemmalle 90 astetta</tr>
    <tr><td>rt 90<td>käänny oikealle 90 astetta</tr>
    <tr><td>penup<td>nosta kynä ylös (ei piirrä)</tr>
    <tr><td>pendown<td>laske kynä alas (piirtää taas)</tr>
    <tr><td>clear<td>tyhjennä paperi ja palaa keskelle</tr>
    <tr><td>home<td>palaa keskelle, älä tyhjennä</tr>
  </tbody>
</table>
{:/nomarkdown}

### Tallentaminen ja lataaminen

{::nomarkdown}

<table>
  <tbody>
    <tr><td>login "juha"<td>kirjaudu sisään käyttäjänä "juha"</tr>
    <tr><td>save "hieno"<td>tallenna teos nimellä "hieno"</tr>
    <tr><td>open "hieno"<td>avaa ja aja teos nimeltä "hieno"</tr>
    <tr><td>ls<td>listaa kaikki teokseni</tr>
  </tbody>
</table>
{:/nomarkdown}

### Ääni ja puhe

{::nomarkdown}

<table>
  <tbody>
    <tr><td>say "hello"<td>sano "hello"</tr>
    <tr><td>play c<td>soita nuotti C</tr>
    <tr><td>play c 500<td>soita nuottia C puoli sekuntia (500 millisekuntia)</tr>
    <tr><td>play c*2<td>soita nuottia C2 (oktaavia ylempi C-nuotti)</tr>
  </tbody>
</table>
{:/nomarkdown}

### Värit ja teksti

{::nomarkdown}

<table>
  <tbody>
    <tr><td>color "red"<td>käytä punaista väriä (piirtämiseen ja tekstiin)</tr>
    <tr><td>bg "blue"<td>vaihda siniseen paperiin</tr>
    <tr><td>text "Koodikirja"<td>kirjoita "Koodikirja"</tr>
    <tr><td>font 100<td>käytä 100 pikselin kirjaisinta (isompaa tekstiä!)</tr>
    <tr><td><td></tr>
  </tbody>
</table>
{:/nomarkdown}

### Ohjelmointi

{::nomarkdown}

<table>
  <tbody>
    <tr><td>s [fd 100, lt 90]<td>tee peräkkäin: eteenpäin ja käännös</tr>
    <tr><td>r 4 (play c)<td>tee 4 kertaa: soita nuotti C</tr>
    <tr><td>let eteen = fd 100<td>opi uusi temppu "eteen"</tr>
  </tbody>
</table>
{:/nomarkdown}
