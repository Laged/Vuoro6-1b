# Helsinki parking tickets visualisation 2014-2016

CS-1190: Vuorovaikutustekniikan studio, harjoitus 1B
Ryhmä 6: Pekka Lammi, Matti Parkkila, Aliisa Pietilä, Vesa Vahermaa
Pysäköintivirheet Helsingin kartalla


Halusimme tehtävässä testata sitä, miten ääniohjaus toimisi datan visualisoinnin apukeinona esimerkiksi kokoustilanteessa, jossa vaikkapa presiksen yhteydessä voisi olla helpompi ohjata visualisaatiota äänellä kuin tietokoneen näppäimistöltä. Tavoitteenamme oli myös toteuttaa jokin sellainen visualisaatio, joka taipuisi helposti myös muun datan käsittelyyn kuin sen, mitä tässä kyseissä harjoituksessa käytämme. Valitsimmekin aiheeksi monikäyttöisen aikasarja-aineiston visualisoinnin muokkauksen. 


Toteutimme visualisaation pysäköintivirhemääristä Helsingissä. Käytimme avoindata.fi-osoitteesta löytynyttä tilastoa pysäköintivirheistä Helsingissä vuosina 2014-2016. Valitsimme pysäköintivirheaineiston, koska tuntui mielenkiintoiselta tutkia visualisoinnin keinoin sitä, missä tapahtuu erityisen paljon virheitä. Visualisaatio näyttää oletuksena kaikki kirjatut pysäköintivirheet kartalla lämpökartan muodossa. Lämpökarttaa voi muokata puheella, esimerkiksi pyytämällä “show me January 2014”, jolloin kartalla näkyy vain kyseisen kuukauden pysäköintivirheet, tai “go up”, jolloin kartta siirtää näkymää pohjoisemmaksi sekä "zoom in", joka lähentää näkymää. 


Ajatuksenamme oli toteuttaa visualisaatioon myös Google StreetView -yhteensopivuus, jonka avulla olisi voinut esimerkiksi siirtyä katsomaan jotain erityisen sakkointensiivistä kohtaa ja tutkia että onko näkyvissä vaikka sairaala tai muu keskittymän selittävä asia, mutta tämä jäi ajanpuutteen vuoksi toteuttamatta.


Tilaston käsittelyyn käytettiin R:ää, tilastoista luotiin tietokanta PostgreSQL:llä, systeemin backendissä käytettiin Node.js:ää, puheentunnistus toteutettiin api.ai:llä ja lisäksi visualisaatioon käytettiin jQueryä, HTML:ää, CSS:ää ja WebGL Heatmap Leafletiä. Valitsimme käytetyt web-teknologiat processingin sijaan siksi, että työn voisi tulevaisuudessa julkaista helpommin, kun visualisointi toimii kenen tahansa käyttäjän selaimessa.


Käytetyn datan koordinaatistomuotojen muutokset aiheuttivat ongelmia ja tuottivat ylimääräisiä työtunteja, koska alkuperäisessä .csv-tiedostossa koordinaatit olivat väärässä formaatissa työtä ajatellen.



## Licence

The material has been extracted from [avoindata.fi](http://avoindata.fi) and licenced with [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.en)
