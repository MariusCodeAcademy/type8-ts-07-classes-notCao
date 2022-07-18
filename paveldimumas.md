# paveldimumas

1. sukurti klase Person
2. firstName, lastName,
3. fullName getteris = grazina 'James Bond'
4. walk metodas paduodam sk kilomentrais ir atspausdina kad nuejom xx kilometru
5. prideti is isores neprieinama savybe todayWalked. Sukurimo metu ji lygi 0. Ji seka kiek zmogus nuejo per diena. Reiskia kiekviena karta kai zmogus eina kazkiek km tie km prisideda prie todayWalked.
   5.1 sukurti geteri pamatyti kiek nuejom. Getteris truretu grazinti skaiciu km. ir isspausdinti 'James walked for 10km today'

## paveld

1. Sukurti Teacher clase kuri paveldi Person
2. prideti Subject gali buti 'Math', 'Literature', 'Architecture'
3. Teacher klasei prideti workWeek savybe kuri yra skaiciu masyvas ir zymi kuriomis dienomis jis dirba. pvz [1, 3, 5] reiskia pirmadieni treciadini, penktadieni
4. sukurti getteri kuris grazina stringo pavidalu kuriom dienom dirbama, pvz [1, 3, 5] => 'pirmadienis, treciadinis, penktadienis'.
5. sukurti 2 mokytojus ir padaryti kad jie nueitu po 20km per 2-3 kartus.
6. nustatyti workWeek mokytojui kad dirbtu sestadieni sekmadieni. paziureti ar veikia

## Calculator

1. sukurti Calc clase. Ji priima 2 skaitinius argumentus.
2. aprasyti 'add', 'minus', 'divide', 'multiply' metodus kurie atlieka isvardintus veiksmus, atspausdina ir grazina rezultata.
3. sukurti ScientificCalc clase kuri paveldi Calc clase.
4. prideti papildomai 'pliusProc'(100 + 20% = 120), 'minusProc', 'power'(kelti laipsniu) veiksmus.
5. sukurti buda irasyti visas atliktas operacijas su skaiciuotuvu nuo jo sukurimo su 'new'
6. pasileisti fronta su `npm run dev` (lite serveris)
7. padaryti kad veiktu skaiciuotuvo html
