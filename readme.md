# Class

## Transation

1. sukurti atskirame faile clase Transation
2. klase turi from, to, ammount, timestamp(iraso laika kada ivyko, nepaduodama argumentu), savybes
3. aprasyti kad savybiu nebutu galima pakeisti po sukurimo
4. isbandyti ar veikia

## Account

1. prideti saybe transactions kuri yra Transation clases objektu masyvas
2. kiekviena karta ivykus depositui i saskaita irasom transakcija
3. vygdant deposita mes gauname argumentu Transation objekta ir jei ne transakcion tada klaida
4. pridedam geteri transacions kuris grazina visas irasytas transakcijas

5. pridedam metoda credit() kuris priesingas deposit(). pvz credit(100) turi isminusuoti 100 is saskaitos.

   4.1. Isitikinti kad uztenka pinigu operacijai. Jei ne grazinti pranesima 'Nepakankamas likutis'

6. Padaryti kad sukuriant account nereiketu prideti id. Id turetu buti didejantis skaicius kiek accountu yra sukurta arba random sugeneruotas skaicius ar stringas.

## Html

1. sukurti htmle forma naujo account sukurimui
2. supildzius name ir pradini likuti sukuriamas naujas account
3. Atvaizduoti htmle visus accountus lenteles ar saraso pavidalu
4. sukurti atskira forma pinigu operacijai atlikti. supildom nuo ko, kam ir kiek. Pateikiant forma papildom balansa. Kam pervedam turetu buti selektas
