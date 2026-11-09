export default {
  "title": "Skracanie i rozszerzanie ułamków",
  "icon": "✂️",
  "sections": [
    {
      "id": "pojecia",
      "name": "Pojęcia",
      "icon": "📖",
      "questions": [
        {
          "id": "0001",
          "level": 1,
          "q": "Co to znaczy skrócić ułamek?",
          "correct": [
            "Podzielić licznik i mianownik przez ich wspólny dzielnik"
          ],
          "wrong": [
            "Odjąć tę samą liczbę od licznika i mianownika",
            "Podzielić tylko licznik",
            "Pomnożyć licznik i mianownik przez tę samą liczbę"
          ],
          "explain": "Np. 10/12 = 5/6 – licznik i mianownik podzielono przez 2."
        },
        {
          "id": "0002",
          "level": 1,
          "q": "Co to znaczy rozszerzyć ułamek?",
          "correct": [
            "Pomnożyć licznik i mianownik przez tę samą liczbę różną od 0"
          ],
          "wrong": [
            "Dodać tę samą liczbę do licznika i mianownika",
            "Pomnożyć tylko mianownik",
            "Podzielić licznik przez mianownik"
          ],
          "explain": "Np. 3/5 = 9/15 – licznik i mianownik pomnożono przez 3."
        },
        {
          "id": "0003",
          "level": 1,
          "q": "Jak nazywamy ułamek, którego nie da się skrócić?",
          "correct": [
            "Ułamek nieskracalny"
          ],
          "wrong": [
            "Ułamek właściwy",
            "Ułamek niewłaściwy",
            "Liczba mieszana"
          ],
          "explain": "Np. 1/2, 3/4, 5/7 to ułamki nieskracalne."
        },
        {
          "id": "0004",
          "level": 1,
          "q": "Ułamek po skróceniu lub rozszerzeniu jest:",
          "correct": [
            "Równy ułamkowi danemu"
          ],
          "wrong": [
            "Większy od danego",
            "Mniejszy od danego",
            "Zawsze równy 1"
          ],
          "explain": "4/8, 2/4 i 1/2 opisują tę samą część koła, więc są równe."
        },
        {
          "id": "0005",
          "level": 1,
          "q": "Co to znaczy sprowadzić dwa ułamki do wspólnego mianownika?",
          "correct": [
            "Rozszerzyć je tak, aby miały jednakowy mianownik"
          ],
          "wrong": [
            "Dodać ich mianowniki",
            "Skrócić je do 1",
            "Zamienić je na liczby mieszane"
          ],
          "explain": "Np. 3/8 = 9/24 i 5/6 = 20/24 – wspólny mianownik 24."
        },
        {
          "id": "0006",
          "q": "Który mianownik zawsze może być wspólnym mianownikiem dwóch ułamków?",
          "correct": [
            "Iloczyn ich mianowników"
          ],
          "wrong": [
            "Suma ich mianowników",
            "Różnica ich mianowników",
            "Liczba 10"
          ],
          "explain": "Iloczyn mianowników zawsze jest ich wspólną wielokrotnością, choć często da się znaleźć mniejszy."
        }
      ]
    },
    {
      "id": "skracanie",
      "name": "Skracanie",
      "icon": "✂️",
      "questions": [
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 6/14 tak, aby był nieskracalny.",
          "answer": "3/7",
          "explain": "Licznik i mianownik dzielimy przez 2: 6/14 = 3/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 2/6 tak, aby był nieskracalny.",
          "answer": "1/3",
          "explain": "Licznik i mianownik dzielimy przez 2: 2/6 = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 6/12 tak, aby był nieskracalny.",
          "answer": "1/2",
          "explain": "Licznik i mianownik dzielimy przez 6: 6/12 = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 48/56 tak, aby był nieskracalny.",
          "answer": "6/7",
          "explain": "Licznik i mianownik dzielimy przez 8: 48/56 = 6/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 8/24 tak, aby był nieskracalny.",
          "answer": "1/3",
          "explain": "Licznik i mianownik dzielimy przez 8: 8/24 = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 35/40 tak, aby był nieskracalny.",
          "answer": "7/8",
          "explain": "Licznik i mianownik dzielimy przez 5: 35/40 = 7/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 3/15 tak, aby był nieskracalny.",
          "answer": "1/5",
          "explain": "Licznik i mianownik dzielimy przez 3: 3/15 = 1/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 8/32 tak, aby był nieskracalny.",
          "answer": "1/4",
          "explain": "Licznik i mianownik dzielimy przez 8: 8/32 = 1/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 14/63 tak, aby był nieskracalny.",
          "answer": "2/9",
          "explain": "Licznik i mianownik dzielimy przez 7: 14/63 = 2/9.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 2/4 tak, aby był nieskracalny.",
          "answer": "1/2",
          "explain": "Licznik i mianownik dzielimy przez 2: 2/4 = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 45/72 tak, aby był nieskracalny.",
          "answer": "5/8",
          "explain": "Licznik i mianownik dzielimy przez 9: 45/72 = 5/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 16/40 tak, aby był nieskracalny.",
          "answer": "2/5",
          "explain": "Licznik i mianownik dzielimy przez 8: 16/40 = 2/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 7/63 tak, aby był nieskracalny.",
          "answer": "1/9",
          "explain": "Licznik i mianownik dzielimy przez 7: 7/63 = 1/9.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 8/12 tak, aby był nieskracalny.",
          "answer": "2/3",
          "explain": "Licznik i mianownik dzielimy przez 4: 8/12 = 2/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 9/81 tak, aby był nieskracalny.",
          "answer": "1/9",
          "explain": "Licznik i mianownik dzielimy przez 9: 9/81 = 1/9.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 7/14 tak, aby był nieskracalny.",
          "answer": "1/2",
          "explain": "Licznik i mianownik dzielimy przez 7: 7/14 = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 9/45 tak, aby był nieskracalny.",
          "answer": "1/5",
          "explain": "Licznik i mianownik dzielimy przez 9: 9/45 = 1/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 5/15 tak, aby był nieskracalny.",
          "answer": "1/3",
          "explain": "Licznik i mianownik dzielimy przez 5: 5/15 = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 7/42 tak, aby był nieskracalny.",
          "answer": "1/6",
          "explain": "Licznik i mianownik dzielimy przez 7: 7/42 = 1/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 7/35 tak, aby był nieskracalny.",
          "answer": "1/5",
          "explain": "Licznik i mianownik dzielimy przez 7: 7/35 = 1/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 40/45 tak, aby był nieskracalny.",
          "answer": "8/9",
          "explain": "Licznik i mianownik dzielimy przez 5: 40/45 = 8/9.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 4/14 tak, aby był nieskracalny.",
          "answer": "2/7",
          "explain": "Licznik i mianownik dzielimy przez 2: 4/14 = 2/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 12/18 tak, aby był nieskracalny.",
          "answer": "2/3",
          "explain": "Licznik i mianownik dzielimy przez 6: 12/18 = 2/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 9/27 tak, aby był nieskracalny.",
          "answer": "1/3",
          "explain": "Licznik i mianownik dzielimy przez 9: 9/27 = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 16/24 tak, aby był nieskracalny.",
          "answer": "2/3",
          "explain": "Licznik i mianownik dzielimy przez 8: 16/24 = 2/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 15/27 tak, aby był nieskracalny.",
          "answer": "5/9",
          "explain": "Licznik i mianownik dzielimy przez 3: 15/27 = 5/9.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 20/25 tak, aby był nieskracalny.",
          "answer": "4/5",
          "explain": "Licznik i mianownik dzielimy przez 5: 20/25 = 4/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 18/24 tak, aby był nieskracalny.",
          "answer": "3/4",
          "explain": "Licznik i mianownik dzielimy przez 6: 18/24 = 3/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 24/40 tak, aby był nieskracalny.",
          "answer": "3/5",
          "explain": "Licznik i mianownik dzielimy przez 8: 24/40 = 3/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 54/60 tak, aby był nieskracalny.",
          "answer": "9/10",
          "explain": "Licznik i mianownik dzielimy przez 6: 54/60 = 9/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 21/27 tak, aby był nieskracalny.",
          "answer": "7/9",
          "explain": "Licznik i mianownik dzielimy przez 3: 21/27 = 7/9.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 21/28 tak, aby był nieskracalny.",
          "answer": "3/4",
          "explain": "Licznik i mianownik dzielimy przez 7: 21/28 = 3/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 7/49 tak, aby był nieskracalny.",
          "answer": "1/7",
          "explain": "Licznik i mianownik dzielimy przez 7: 7/49 = 1/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 2/10 tak, aby był nieskracalny.",
          "answer": "1/5",
          "explain": "Licznik i mianownik dzielimy przez 2: 2/10 = 1/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 4/8 tak, aby był nieskracalny.",
          "answer": "1/2",
          "explain": "Licznik i mianownik dzielimy przez 4: 4/8 = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 6/16 tak, aby był nieskracalny.",
          "answer": "3/8",
          "explain": "Licznik i mianownik dzielimy przez 2: 6/16 = 3/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 12/21 tak, aby był nieskracalny.",
          "answer": "4/7",
          "explain": "Licznik i mianownik dzielimy przez 3: 12/21 = 4/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 48/66 tak, aby był nieskracalny.",
          "answer": "8/11",
          "explain": "Licznik i mianownik dzielimy przez 6: 48/66 = 8/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 42/60 tak, aby był nieskracalny.",
          "answer": "7/10",
          "explain": "Licznik i mianownik dzielimy przez 6: 42/60 = 7/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 14/21 tak, aby był nieskracalny.",
          "answer": "2/3",
          "explain": "Licznik i mianownik dzielimy przez 7: 14/21 = 2/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 35/84 tak, aby był nieskracalny.",
          "answer": "5/12",
          "explain": "Licznik i mianownik dzielimy przez 7: 35/84 = 5/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 27/63 tak, aby był nieskracalny.",
          "answer": "3/7",
          "explain": "Licznik i mianownik dzielimy przez 9: 27/63 = 3/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 27/45 tak, aby był nieskracalny.",
          "answer": "3/5",
          "explain": "Licznik i mianownik dzielimy przez 9: 27/45 = 3/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 9/18 tak, aby był nieskracalny.",
          "answer": "1/2",
          "explain": "Licznik i mianownik dzielimy przez 9: 9/18 = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 2/12 tak, aby był nieskracalny.",
          "answer": "1/6",
          "explain": "Licznik i mianownik dzielimy przez 2: 2/12 = 1/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 4/48 tak, aby był nieskracalny.",
          "answer": "1/12",
          "explain": "Licznik i mianownik dzielimy przez 4: 4/48 = 1/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 6/60 tak, aby był nieskracalny.",
          "answer": "1/10",
          "explain": "Licznik i mianownik dzielimy przez 6: 6/60 = 1/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 4/16 tak, aby był nieskracalny.",
          "answer": "1/4",
          "explain": "Licznik i mianownik dzielimy przez 4: 4/16 = 1/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 45/54 tak, aby był nieskracalny.",
          "answer": "5/6",
          "explain": "Licznik i mianownik dzielimy przez 9: 45/54 = 5/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 8/16 tak, aby był nieskracalny.",
          "answer": "1/2",
          "explain": "Licznik i mianownik dzielimy przez 8: 8/16 = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 6/21 tak, aby był nieskracalny.",
          "answer": "2/7",
          "explain": "Licznik i mianownik dzielimy przez 3: 6/21 = 2/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 30/33 tak, aby był nieskracalny.",
          "answer": "10/11",
          "explain": "Licznik i mianownik dzielimy przez 3: 30/33 = 10/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 49/77 tak, aby był nieskracalny.",
          "answer": "7/11",
          "explain": "Licznik i mianownik dzielimy przez 7: 49/77 = 7/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 9/15 tak, aby był nieskracalny.",
          "answer": "3/5",
          "explain": "Licznik i mianownik dzielimy przez 3: 9/15 = 3/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 42/72 tak, aby był nieskracalny.",
          "answer": "7/12",
          "explain": "Licznik i mianownik dzielimy przez 6: 42/72 = 7/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 8/22 tak, aby był nieskracalny.",
          "answer": "4/11",
          "explain": "Licznik i mianownik dzielimy przez 2: 8/22 = 4/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 12/28 tak, aby był nieskracalny.",
          "answer": "3/7",
          "explain": "Licznik i mianownik dzielimy przez 4: 12/28 = 3/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 4/12 tak, aby był nieskracalny.",
          "answer": "1/3",
          "explain": "Licznik i mianownik dzielimy przez 4: 4/12 = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 8/48 tak, aby był nieskracalny.",
          "answer": "1/6",
          "explain": "Licznik i mianownik dzielimy przez 8: 8/48 = 1/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 49/56 tak, aby był nieskracalny.",
          "answer": "7/8",
          "explain": "Licznik i mianownik dzielimy przez 7: 49/56 = 7/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 18/45 tak, aby był nieskracalny.",
          "answer": "2/5",
          "explain": "Licznik i mianownik dzielimy przez 9: 18/45 = 2/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 20/22 tak, aby był nieskracalny.",
          "answer": "10/11",
          "explain": "Licznik i mianownik dzielimy przez 2: 20/22 = 10/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 35/50 tak, aby był nieskracalny.",
          "answer": "7/10",
          "explain": "Licznik i mianownik dzielimy przez 5: 35/50 = 7/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 64/88 tak, aby był nieskracalny.",
          "answer": "8/11",
          "explain": "Licznik i mianownik dzielimy przez 8: 64/88 = 8/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 4/24 tak, aby był nieskracalny.",
          "answer": "1/6",
          "explain": "Licznik i mianownik dzielimy przez 4: 4/24 = 1/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 20/55 tak, aby był nieskracalny.",
          "answer": "4/11",
          "explain": "Licznik i mianownik dzielimy przez 5: 20/55 = 4/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 25/40 tak, aby był nieskracalny.",
          "answer": "5/8",
          "explain": "Licznik i mianownik dzielimy przez 5: 25/40 = 5/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 12/20 tak, aby był nieskracalny.",
          "answer": "3/5",
          "explain": "Licznik i mianownik dzielimy przez 4: 12/20 = 3/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 5/10 tak, aby był nieskracalny.",
          "answer": "1/2",
          "explain": "Licznik i mianownik dzielimy przez 5: 5/10 = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 56/88 tak, aby był nieskracalny.",
          "answer": "7/11",
          "explain": "Licznik i mianownik dzielimy przez 8: 56/88 = 7/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 27/33 tak, aby był nieskracalny.",
          "answer": "9/11",
          "explain": "Licznik i mianownik dzielimy przez 3: 27/33 = 9/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 44/48 tak, aby był nieskracalny.",
          "answer": "11/12",
          "explain": "Licznik i mianownik dzielimy przez 4: 44/48 = 11/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 2/14 tak, aby był nieskracalny.",
          "answer": "1/7",
          "explain": "Licznik i mianownik dzielimy przez 2: 2/14 = 1/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 28/32 tak, aby był nieskracalny.",
          "answer": "7/8",
          "explain": "Licznik i mianownik dzielimy przez 4: 28/32 = 7/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 33/36 tak, aby był nieskracalny.",
          "answer": "11/12",
          "explain": "Licznik i mianownik dzielimy przez 3: 33/36 = 11/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 5/25 tak, aby był nieskracalny.",
          "answer": "1/5",
          "explain": "Licznik i mianownik dzielimy przez 5: 5/25 = 1/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 55/60 tak, aby był nieskracalny.",
          "answer": "11/12",
          "explain": "Licznik i mianownik dzielimy przez 5: 55/60 = 11/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 42/48 tak, aby był nieskracalny.",
          "answer": "7/8",
          "explain": "Licznik i mianownik dzielimy przez 6: 42/48 = 7/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 12/44 tak, aby był nieskracalny.",
          "answer": "3/11",
          "explain": "Licznik i mianownik dzielimy przez 4: 12/44 = 3/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 12/14 tak, aby był nieskracalny.",
          "answer": "6/7",
          "explain": "Licznik i mianownik dzielimy przez 2: 12/14 = 6/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 3/30 tak, aby był nieskracalny.",
          "answer": "1/10",
          "explain": "Licznik i mianownik dzielimy przez 3: 3/30 = 1/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 7/21 tak, aby był nieskracalny.",
          "answer": "1/3",
          "explain": "Licznik i mianownik dzielimy przez 7: 7/21 = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 35/56 tak, aby był nieskracalny.",
          "answer": "5/8",
          "explain": "Licznik i mianownik dzielimy przez 7: 35/56 = 5/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 4/40 tak, aby był nieskracalny.",
          "answer": "1/10",
          "explain": "Licznik i mianownik dzielimy przez 4: 4/40 = 1/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 32/72 tak, aby był nieskracalny.",
          "answer": "4/9",
          "explain": "Licznik i mianownik dzielimy przez 8: 32/72 = 4/9.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 14/16 tak, aby był nieskracalny.",
          "answer": "7/8",
          "explain": "Licznik i mianownik dzielimy przez 2: 14/16 = 7/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 5/35 tak, aby był nieskracalny.",
          "answer": "1/7",
          "explain": "Licznik i mianownik dzielimy przez 5: 5/35 = 1/7.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 35/60 tak, aby był nieskracalny.",
          "answer": "7/12",
          "explain": "Licznik i mianownik dzielimy przez 5: 35/60 = 7/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 30/48 tak, aby był nieskracalny.",
          "answer": "5/8",
          "explain": "Licznik i mianownik dzielimy przez 6: 30/48 = 5/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 21/33 tak, aby był nieskracalny.",
          "answer": "7/11",
          "explain": "Licznik i mianownik dzielimy przez 3: 21/33 = 7/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 6/30 tak, aby był nieskracalny.",
          "answer": "1/5",
          "explain": "Licznik i mianownik dzielimy przez 6: 6/30 = 1/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 16/88 tak, aby był nieskracalny.",
          "answer": "2/11",
          "explain": "Licznik i mianownik dzielimy przez 8: 16/88 = 2/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 5/50 tak, aby był nieskracalny.",
          "answer": "1/10",
          "explain": "Licznik i mianownik dzielimy przez 5: 5/50 = 1/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 5/20 tak, aby był nieskracalny.",
          "answer": "1/4",
          "explain": "Licznik i mianownik dzielimy przez 5: 5/20 = 1/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 20/48 tak, aby był nieskracalny.",
          "answer": "5/12",
          "explain": "Licznik i mianownik dzielimy przez 4: 20/48 = 5/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 15/40 tak, aby był nieskracalny.",
          "answer": "3/8",
          "explain": "Licznik i mianownik dzielimy przez 5: 15/40 = 3/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 32/88 tak, aby był nieskracalny.",
          "answer": "4/11",
          "explain": "Licznik i mianownik dzielimy przez 8: 32/88 = 4/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 20/44 tak, aby był nieskracalny.",
          "answer": "5/11",
          "explain": "Licznik i mianownik dzielimy przez 4: 20/44 = 5/11.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 7/28 tak, aby był nieskracalny.",
          "answer": "1/4",
          "explain": "Licznik i mianownik dzielimy przez 7: 7/28 = 1/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Skracanie do ułamka nieskracalnego",
          "q": "Skróć ułamek 14/18 tak, aby był nieskracalny.",
          "answer": "7/9",
          "explain": "Licznik i mianownik dzielimy przez 2: 14/18 = 7/9.",
          "fractionAnswer": true
        },
        {
          "id": "0007",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "9/11",
            "18/19"
          ],
          "wrong": [
            "15/30",
            "2/16"
          ],
          "explain": "9/11, 18/19 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0008",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "7/23",
            "1/4",
            "3/7"
          ],
          "wrong": [
            "4/8"
          ],
          "explain": "7/23, 1/4, 3/7 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0009",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "2/3",
            "1/5",
            "15/16"
          ],
          "wrong": [
            "15/20"
          ],
          "explain": "2/3, 1/5, 15/16 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0010",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "11/13",
            "3/22",
            "1/10"
          ],
          "wrong": [
            "16/24"
          ],
          "explain": "11/13, 3/22, 1/10 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0011",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "9/14",
            "13/19",
            "1/18"
          ],
          "wrong": [
            "4/12"
          ],
          "explain": "9/14, 13/19, 1/18 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0012",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/8",
            "1/3"
          ],
          "wrong": [
            "14/21",
            "18/20"
          ],
          "explain": "3/8, 1/3 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0013",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "7/20",
            "23/29",
            "5/12"
          ],
          "wrong": [
            "8/26"
          ],
          "explain": "7/20, 23/29, 5/12 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0014",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "12/29",
            "1/3",
            "25/27"
          ],
          "wrong": [
            "20/28"
          ],
          "explain": "12/29, 1/3, 25/27 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0015",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "2/9",
            "1/26",
            "3/11"
          ],
          "wrong": [
            "6/24"
          ],
          "explain": "2/9, 1/26, 3/11 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0016",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/5",
            "2/3"
          ],
          "wrong": [
            "10/30",
            "4/28"
          ],
          "explain": "1/5, 2/3 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0017",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "13/14",
            "9/16",
            "3/5"
          ],
          "wrong": [
            "2/12"
          ],
          "explain": "13/14, 9/16, 3/5 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0018",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "6/7",
            "11/12"
          ],
          "wrong": [
            "3/9",
            "5/10"
          ],
          "explain": "6/7, 11/12 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0019",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "13/14",
            "9/10",
            "9/11"
          ],
          "wrong": [
            "6/8"
          ],
          "explain": "13/14, 9/10, 9/11 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0020",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/3",
            "1/17"
          ],
          "wrong": [
            "5/15",
            "7/14"
          ],
          "explain": "1/3, 1/17 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0021",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "23/28",
            "8/29"
          ],
          "wrong": [
            "9/18",
            "4/6"
          ],
          "explain": "23/28, 8/29 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0022",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "9/26",
            "2/13"
          ],
          "wrong": [
            "8/28",
            "4/6"
          ],
          "explain": "9/26, 2/13 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0023",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "4/29",
            "5/21"
          ],
          "wrong": [
            "7/14",
            "10/15"
          ],
          "explain": "4/29, 5/21 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0024",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "6/11",
            "1/15"
          ],
          "wrong": [
            "14/22",
            "4/8"
          ],
          "explain": "6/11, 1/15 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0025",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/11",
            "1/18"
          ],
          "wrong": [
            "6/15",
            "6/18"
          ],
          "explain": "1/11, 1/18 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0026",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "7/13",
            "2/17"
          ],
          "wrong": [
            "3/12",
            "7/14"
          ],
          "explain": "7/13, 2/17 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0027",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "7/12",
            "5/9"
          ],
          "wrong": [
            "11/22",
            "2/12"
          ],
          "explain": "7/12, 5/9 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0028",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/25",
            "11/17",
            "1/7"
          ],
          "wrong": [
            "4/26"
          ],
          "explain": "3/25, 11/17, 1/7 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0029",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "4/13",
            "7/12",
            "16/27"
          ],
          "wrong": [
            "24/27"
          ],
          "explain": "4/13, 7/12, 16/27 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0030",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "13/18",
            "9/23",
            "17/29"
          ],
          "wrong": [
            "10/24"
          ],
          "explain": "13/18, 9/23, 17/29 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0031",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "22/27",
            "8/21",
            "2/19"
          ],
          "wrong": [
            "4/14"
          ],
          "explain": "22/27, 8/21, 2/19 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0032",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/4",
            "2/21"
          ],
          "wrong": [
            "12/14",
            "2/8"
          ],
          "explain": "1/4, 2/21 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0033",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "7/26",
            "7/10"
          ],
          "wrong": [
            "10/26",
            "12/18"
          ],
          "explain": "7/26, 7/10 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0034",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/4",
            "5/29"
          ],
          "wrong": [
            "13/26",
            "26/28"
          ],
          "explain": "3/4, 5/29 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0035",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "19/28",
            "7/23",
            "13/19"
          ],
          "wrong": [
            "2/22"
          ],
          "explain": "19/28, 7/23, 13/19 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0036",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "14/27",
            "19/20"
          ],
          "wrong": [
            "3/6",
            "2/10"
          ],
          "explain": "14/27, 19/20 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0037",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "15/16",
            "7/11"
          ],
          "wrong": [
            "12/22",
            "2/4"
          ],
          "explain": "15/16, 7/11 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0038",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/5",
            "8/11",
            "1/6"
          ],
          "wrong": [
            "12/24"
          ],
          "explain": "3/5, 8/11, 1/6 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0039",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/13",
            "8/13",
            "6/11"
          ],
          "wrong": [
            "2/4"
          ],
          "explain": "3/13, 8/13, 6/11 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0040",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "26/29",
            "3/4",
            "1/3"
          ],
          "wrong": [
            "4/6"
          ],
          "explain": "26/29, 3/4, 1/3 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0041",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "2/7",
            "13/16",
            "16/25"
          ],
          "wrong": [
            "6/21"
          ],
          "explain": "2/7, 13/16, 16/25 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0042",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/4",
            "3/11",
            "7/17"
          ],
          "wrong": [
            "22/28"
          ],
          "explain": "3/4, 3/11, 7/17 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0043",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "8/19",
            "3/20"
          ],
          "wrong": [
            "22/24",
            "8/26"
          ],
          "explain": "8/19, 3/20 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0044",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/13",
            "8/15"
          ],
          "wrong": [
            "18/21",
            "4/8"
          ],
          "explain": "1/13, 8/15 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0045",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "13/14",
            "1/4"
          ],
          "wrong": [
            "6/9",
            "2/4"
          ],
          "explain": "13/14, 1/4 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0046",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/4",
            "11/13"
          ],
          "wrong": [
            "12/27",
            "6/10"
          ],
          "explain": "1/4, 11/13 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0047",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "5/7",
            "4/15"
          ],
          "wrong": [
            "3/6",
            "16/18"
          ],
          "explain": "5/7, 4/15 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0048",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "5/12",
            "5/16"
          ],
          "wrong": [
            "24/27",
            "6/15"
          ],
          "explain": "5/12, 5/16 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0049",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "13/18",
            "11/28",
            "1/30"
          ],
          "wrong": [
            "12/18"
          ],
          "explain": "13/18, 11/28, 1/30 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0050",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "2/3",
            "4/11",
            "5/11"
          ],
          "wrong": [
            "20/26"
          ],
          "explain": "2/3, 4/11, 5/11 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0051",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "21/23",
            "1/4",
            "13/22"
          ],
          "wrong": [
            "2/18"
          ],
          "explain": "21/23, 1/4, 13/22 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0052",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "6/11",
            "12/13",
            "8/13"
          ],
          "wrong": [
            "6/8"
          ],
          "explain": "6/11, 12/13, 8/13 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0053",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/9",
            "19/20",
            "15/29"
          ],
          "wrong": [
            "20/26"
          ],
          "explain": "1/9, 19/20, 15/29 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0054",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "5/11",
            "17/25"
          ],
          "wrong": [
            "6/10",
            "11/22"
          ],
          "explain": "5/11, 17/25 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0055",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "12/13",
            "19/29",
            "1/3"
          ],
          "wrong": [
            "26/28"
          ],
          "explain": "12/13, 19/29, 1/3 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0056",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/4",
            "8/17",
            "15/29"
          ],
          "wrong": [
            "16/20"
          ],
          "explain": "3/4, 8/17, 15/29 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0057",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "11/18",
            "11/16",
            "17/25"
          ],
          "wrong": [
            "4/14"
          ],
          "explain": "11/18, 11/16, 17/25 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0058",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "9/10",
            "7/9",
            "2/7"
          ],
          "wrong": [
            "2/4"
          ],
          "explain": "9/10, 7/9, 2/7 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0059",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/7",
            "3/10",
            "1/9"
          ],
          "wrong": [
            "20/30"
          ],
          "explain": "3/7, 3/10, 1/9 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0060",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "9/19",
            "2/7"
          ],
          "wrong": [
            "6/10",
            "2/6"
          ],
          "explain": "9/19, 2/7 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0061",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "15/23",
            "5/14",
            "1/23"
          ],
          "wrong": [
            "2/6"
          ],
          "explain": "15/23, 5/14, 1/23 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0062",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "4/29",
            "21/29",
            "9/23"
          ],
          "wrong": [
            "16/18"
          ],
          "explain": "4/29, 21/29, 9/23 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0063",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "3/14",
            "1/21",
            "11/28"
          ],
          "wrong": [
            "10/12"
          ],
          "explain": "3/14, 1/21, 11/28 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0064",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "7/17",
            "9/14"
          ],
          "wrong": [
            "21/27",
            "2/28"
          ],
          "explain": "7/17, 9/14 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0065",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "4/11",
            "15/22",
            "5/18"
          ],
          "wrong": [
            "18/28"
          ],
          "explain": "4/11, 15/22, 5/18 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0066",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "17/28",
            "15/22",
            "5/11"
          ],
          "wrong": [
            "3/15"
          ],
          "explain": "17/28, 15/22, 5/11 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0067",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/16",
            "6/17",
            "7/12"
          ],
          "wrong": [
            "14/18"
          ],
          "explain": "1/16, 6/17, 7/12 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0068",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "2/5",
            "19/27"
          ],
          "wrong": [
            "4/12",
            "18/26"
          ],
          "explain": "2/5, 19/27 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0069",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "13/23",
            "2/3"
          ],
          "wrong": [
            "2/20",
            "5/15"
          ],
          "explain": "13/23, 2/3 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0070",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "9/25",
            "9/29",
            "8/9"
          ],
          "wrong": [
            "3/24"
          ],
          "explain": "9/25, 9/29, 8/9 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0071",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "11/20",
            "13/17",
            "4/27"
          ],
          "wrong": [
            "10/30"
          ],
          "explain": "11/20, 13/17, 4/27 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0072",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "11/26",
            "7/10",
            "2/23"
          ],
          "wrong": [
            "6/30"
          ],
          "explain": "11/26, 7/10, 2/23 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0073",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/29",
            "3/28"
          ],
          "wrong": [
            "9/12",
            "18/21"
          ],
          "explain": "1/29, 3/28 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0074",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "6/17",
            "2/3",
            "5/7"
          ],
          "wrong": [
            "6/16"
          ],
          "explain": "6/17, 2/3, 5/7 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0075",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/5",
            "7/16",
            "18/25"
          ],
          "wrong": [
            "16/20"
          ],
          "explain": "1/5, 7/16, 18/25 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0076",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/10",
            "11/13"
          ],
          "wrong": [
            "12/21",
            "8/30"
          ],
          "explain": "1/10, 11/13 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0077",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "15/16",
            "25/28"
          ],
          "wrong": [
            "2/14",
            "8/26"
          ],
          "explain": "15/16, 25/28 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0078",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/8",
            "2/3",
            "19/23"
          ],
          "wrong": [
            "4/10"
          ],
          "explain": "1/8, 2/3, 19/23 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0079",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "2/5",
            "9/13"
          ],
          "wrong": [
            "4/16",
            "5/10"
          ],
          "explain": "2/5, 9/13 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0080",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "2/3",
            "2/19",
            "7/12"
          ],
          "wrong": [
            "9/15"
          ],
          "explain": "2/3, 2/19, 7/12 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0081",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "9/14",
            "19/24"
          ],
          "wrong": [
            "2/4",
            "21/30"
          ],
          "explain": "9/14, 19/24 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0082",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "8/13",
            "1/19",
            "10/19"
          ],
          "wrong": [
            "22/26"
          ],
          "explain": "8/13, 1/19, 10/19 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0083",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/9",
            "17/24"
          ],
          "wrong": [
            "12/15",
            "8/18"
          ],
          "explain": "1/9, 17/24 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0084",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "1/14",
            "3/4"
          ],
          "wrong": [
            "9/12",
            "16/24"
          ],
          "explain": "1/14, 3/4 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0085",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "5/9",
            "23/26",
            "1/20"
          ],
          "wrong": [
            "14/22"
          ],
          "explain": "5/9, 23/26, 1/20 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "id": "0086",
          "skill": "Ułamek nieskracalny",
          "q": "Które z ułamków są nieskracalne?",
          "correct": [
            "5/12",
            "7/9",
            "11/25"
          ],
          "wrong": [
            "3/18"
          ],
          "explain": "5/12, 7/9, 11/25 – licznik i mianownik nie mają wspólnego dzielnika większego od 1."
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 40 cm? Zapisz ułamek nieskracalny.",
          "answer": "2/5",
          "explain": "40 cm to 40/100 metra = 2/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 45 dag? Zapisz ułamek nieskracalny.",
          "answer": "9/20",
          "explain": "45 dag to 45/100 kilograma = 9/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 70 dag? Zapisz ułamek nieskracalny.",
          "answer": "7/10",
          "explain": "70 dag to 70/100 kilograma = 7/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 18 minut? Zapisz ułamek nieskracalny.",
          "answer": "3/10",
          "explain": "18 minut to 18/60 godziny = 3/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 45 sekund? Zapisz ułamek nieskracalny.",
          "answer": "3/4",
          "explain": "45 sekund to 45/60 minuty = 3/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 6 sekund? Zapisz ułamek nieskracalny.",
          "answer": "1/10",
          "explain": "6 sekund to 6/60 minuty = 1/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby są 4 godziny? Zapisz ułamek nieskracalny.",
          "answer": "1/6",
          "explain": "4 godziny to 4/24 doby = 1/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 25 minut? Zapisz ułamek nieskracalny.",
          "answer": "5/12",
          "explain": "25 minut to 25/60 godziny = 5/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 18 godzin? Zapisz ułamek nieskracalny.",
          "answer": "3/4",
          "explain": "18 godzin to 18/24 doby = 3/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 6 godzin? Zapisz ułamek nieskracalny.",
          "answer": "1/4",
          "explain": "6 godzin to 6/24 doby = 1/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 90 cm? Zapisz ułamek nieskracalny.",
          "answer": "9/10",
          "explain": "90 cm to 90/100 metra = 9/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 76 cm? Zapisz ułamek nieskracalny.",
          "answer": "19/25",
          "explain": "76 cm to 76/100 metra = 19/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 20 dag? Zapisz ułamek nieskracalny.",
          "answer": "1/5",
          "explain": "20 dag to 20/100 kilograma = 1/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra są 84 cm? Zapisz ułamek nieskracalny.",
          "answer": "21/25",
          "explain": "84 cm to 84/100 metra = 21/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 18 cm? Zapisz ułamek nieskracalny.",
          "answer": "9/50",
          "explain": "18 cm to 18/100 metra = 9/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 16 sekund? Zapisz ułamek nieskracalny.",
          "answer": "4/15",
          "explain": "16 sekund to 16/60 minuty = 4/15.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 90 dag? Zapisz ułamek nieskracalny.",
          "answer": "9/10",
          "explain": "90 dag to 90/100 kilograma = 9/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny są 44 minuty? Zapisz ułamek nieskracalny.",
          "answer": "11/15",
          "explain": "44 minuty to 44/60 godziny = 11/15.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 16 godzin? Zapisz ułamek nieskracalny.",
          "answer": "2/3",
          "explain": "16 godzin to 16/24 doby = 2/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 10 sekund? Zapisz ułamek nieskracalny.",
          "answer": "1/6",
          "explain": "10 sekund to 10/60 minuty = 1/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 38 sekund? Zapisz ułamek nieskracalny.",
          "answer": "19/30",
          "explain": "38 sekund to 38/60 minuty = 19/30.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 12 cm? Zapisz ułamek nieskracalny.",
          "answer": "3/25",
          "explain": "12 cm to 12/100 metra = 3/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 36 minut? Zapisz ułamek nieskracalny.",
          "answer": "3/5",
          "explain": "36 minut to 36/60 godziny = 3/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 40 minut? Zapisz ułamek nieskracalny.",
          "answer": "2/3",
          "explain": "40 minut to 40/60 godziny = 2/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 6 minut? Zapisz ułamek nieskracalny.",
          "answer": "1/10",
          "explain": "6 minut to 6/60 godziny = 1/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 58 minut? Zapisz ułamek nieskracalny.",
          "answer": "29/30",
          "explain": "58 minut to 58/60 godziny = 29/30.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 21 sekund? Zapisz ułamek nieskracalny.",
          "answer": "7/20",
          "explain": "21 sekund to 21/60 minuty = 7/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra są 74 cm? Zapisz ułamek nieskracalny.",
          "answer": "37/50",
          "explain": "74 cm to 74/100 metra = 37/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra są 54 cm? Zapisz ułamek nieskracalny.",
          "answer": "27/50",
          "explain": "54 cm to 54/100 metra = 27/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty są 52 sekundy? Zapisz ułamek nieskracalny.",
          "answer": "13/15",
          "explain": "52 sekundy to 52/60 minuty = 13/15.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 48 minut? Zapisz ułamek nieskracalny.",
          "answer": "4/5",
          "explain": "48 minut to 48/60 godziny = 4/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby są 3 godziny? Zapisz ułamek nieskracalny.",
          "answer": "1/8",
          "explain": "3 godziny to 3/24 doby = 1/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 48 sekund? Zapisz ułamek nieskracalny.",
          "answer": "4/5",
          "explain": "48 sekund to 48/60 minuty = 4/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 12 godzin? Zapisz ułamek nieskracalny.",
          "answer": "1/2",
          "explain": "12 godzin to 12/24 doby = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 36 cm? Zapisz ułamek nieskracalny.",
          "answer": "9/25",
          "explain": "36 cm to 36/100 metra = 9/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 14 dag? Zapisz ułamek nieskracalny.",
          "answer": "7/50",
          "explain": "14 dag to 14/100 kilograma = 7/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 20 godzin? Zapisz ułamek nieskracalny.",
          "answer": "5/6",
          "explain": "20 godzin to 20/24 doby = 5/6.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 68 dag? Zapisz ułamek nieskracalny.",
          "answer": "17/25",
          "explain": "68 dag to 68/100 kilograma = 17/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 16 minut? Zapisz ułamek nieskracalny.",
          "answer": "4/15",
          "explain": "16 minut to 16/60 godziny = 4/15.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma są 94 dag? Zapisz ułamek nieskracalny.",
          "answer": "47/50",
          "explain": "94 dag to 94/100 kilograma = 47/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny są 3 minuty? Zapisz ułamek nieskracalny.",
          "answer": "1/20",
          "explain": "3 minuty to 3/60 godziny = 1/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny są 24 minuty? Zapisz ułamek nieskracalny.",
          "answer": "2/5",
          "explain": "24 minuty to 24/60 godziny = 2/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra są 82 cm? Zapisz ułamek nieskracalny.",
          "answer": "41/50",
          "explain": "82 cm to 82/100 metra = 41/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 35 minut? Zapisz ułamek nieskracalny.",
          "answer": "7/12",
          "explain": "35 minut to 35/60 godziny = 7/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty są 3 sekundy? Zapisz ułamek nieskracalny.",
          "answer": "1/20",
          "explain": "3 sekundy to 3/60 minuty = 1/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 66 cm? Zapisz ułamek nieskracalny.",
          "answer": "33/50",
          "explain": "66 cm to 66/100 metra = 33/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby są 2 godziny? Zapisz ułamek nieskracalny.",
          "answer": "1/12",
          "explain": "2 godziny to 2/24 doby = 1/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 15 godzin? Zapisz ułamek nieskracalny.",
          "answer": "5/8",
          "explain": "15 godzin to 15/24 doby = 5/8.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 15 minut? Zapisz ułamek nieskracalny.",
          "answer": "1/4",
          "explain": "15 minut to 15/60 godziny = 1/4.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 21 minut? Zapisz ułamek nieskracalny.",
          "answer": "7/20",
          "explain": "21 minut to 21/60 godziny = 7/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 58 dag? Zapisz ułamek nieskracalny.",
          "answer": "29/50",
          "explain": "58 dag to 58/100 kilograma = 29/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty są 42 sekundy? Zapisz ułamek nieskracalny.",
          "answer": "7/10",
          "explain": "42 sekundy to 42/60 minuty = 7/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 5 sekund? Zapisz ułamek nieskracalny.",
          "answer": "1/12",
          "explain": "5 sekund to 5/60 minuty = 1/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma są 32 dag? Zapisz ułamek nieskracalny.",
          "answer": "8/25",
          "explain": "32 dag to 32/100 kilograma = 8/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 96 dag? Zapisz ułamek nieskracalny.",
          "answer": "24/25",
          "explain": "96 dag to 96/100 kilograma = 24/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny są 52 minuty? Zapisz ułamek nieskracalny.",
          "answer": "13/15",
          "explain": "52 minuty to 52/60 godziny = 13/15.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 95 dag? Zapisz ułamek nieskracalny.",
          "answer": "19/20",
          "explain": "95 dag to 95/100 kilograma = 19/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 8 dag? Zapisz ułamek nieskracalny.",
          "answer": "2/25",
          "explain": "8 dag to 8/100 kilograma = 2/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 9 minut? Zapisz ułamek nieskracalny.",
          "answer": "3/20",
          "explain": "9 minut to 9/60 godziny = 3/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 12 dag? Zapisz ułamek nieskracalny.",
          "answer": "3/25",
          "explain": "12 dag to 12/100 kilograma = 3/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 27 sekund? Zapisz ułamek nieskracalny.",
          "answer": "9/20",
          "explain": "27 sekund to 27/60 minuty = 9/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 30 sekund? Zapisz ułamek nieskracalny.",
          "answer": "1/2",
          "explain": "30 sekund to 30/60 minuty = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 8 godzin? Zapisz ułamek nieskracalny.",
          "answer": "1/3",
          "explain": "8 godzin to 8/24 doby = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 14 sekund? Zapisz ułamek nieskracalny.",
          "answer": "7/30",
          "explain": "14 sekund to 14/60 minuty = 7/30.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 57 sekund? Zapisz ułamek nieskracalny.",
          "answer": "19/20",
          "explain": "57 sekund to 57/60 minuty = 19/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią doby jest 10 godzin? Zapisz ułamek nieskracalny.",
          "answer": "5/12",
          "explain": "10 godzin to 10/24 doby = 5/12.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 80 dag? Zapisz ułamek nieskracalny.",
          "answer": "4/5",
          "explain": "80 dag to 80/100 kilograma = 4/5.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma są 82 dag? Zapisz ułamek nieskracalny.",
          "answer": "41/50",
          "explain": "82 dag to 82/100 kilograma = 41/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 48 dag? Zapisz ułamek nieskracalny.",
          "answer": "12/25",
          "explain": "48 dag to 48/100 kilograma = 12/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra są 24 cm? Zapisz ułamek nieskracalny.",
          "answer": "6/25",
          "explain": "24 cm to 24/100 metra = 6/25.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 6 cm? Zapisz ułamek nieskracalny.",
          "answer": "3/50",
          "explain": "6 cm to 6/100 metra = 3/50.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 20 sekund? Zapisz ułamek nieskracalny.",
          "answer": "1/3",
          "explain": "20 sekund to 20/60 minuty = 1/3.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty są 44 sekundy? Zapisz ułamek nieskracalny.",
          "answer": "11/15",
          "explain": "44 sekundy to 44/60 minuty = 11/15.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty jest 56 sekund? Zapisz ułamek nieskracalny.",
          "answer": "14/15",
          "explain": "56 sekund to 56/60 minuty = 14/15.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią metra jest 30 cm? Zapisz ułamek nieskracalny.",
          "answer": "3/10",
          "explain": "30 cm to 30/100 metra = 3/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny są 54 minuty? Zapisz ułamek nieskracalny.",
          "answer": "9/10",
          "explain": "54 minuty to 54/60 godziny = 9/10.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 50 dag? Zapisz ułamek nieskracalny.",
          "answer": "1/2",
          "explain": "50 dag to 50/100 kilograma = 1/2.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią godziny jest 27 minut? Zapisz ułamek nieskracalny.",
          "answer": "9/20",
          "explain": "27 minut to 27/60 godziny = 9/20.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią minuty są 2 sekundy? Zapisz ułamek nieskracalny.",
          "answer": "1/30",
          "explain": "2 sekundy to 2/60 minuty = 1/30.",
          "fractionAnswer": true
        },
        {
          "type": "number",
          "skill": "Jaka to część – ułamek nieskracalny",
          "q": "Jaką częścią kilograma jest 76 dag? Zapisz ułamek nieskracalny.",
          "answer": "19/25",
          "explain": "76 dag to 76/100 kilograma = 19/25.",
          "fractionAnswer": true
        }
      ]
    },
    {
      "id": "rozszerzanie",
      "name": "Rozszerzanie",
      "icon": "🔎",
      "questions": [
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/3 = 10/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "15",
          "explain": "2 · 5 = 10, więc mianownik też mnożymy przez 5: 3 · 5 = 15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = 2/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "4",
          "explain": "1 · 2 = 2, więc mianownik też mnożymy przez 2: 2 · 2 = 4.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/7 = 36/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "63",
          "explain": "4 · 9 = 36, więc mianownik też mnożymy przez 9: 7 · 9 = 63.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "11/12 = 22/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "24",
          "explain": "11 · 2 = 22, więc mianownik też mnożymy przez 2: 12 · 2 = 24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/9 = ?/27. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "6",
          "explain": "9 · 3 = 27, więc licznik też mnożymy przez 3: 2 · 3 = 6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/5 = 5/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "25",
          "explain": "1 · 5 = 5, więc mianownik też mnożymy przez 5: 5 · 5 = 25.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/10 = ?/30. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "9",
          "explain": "10 · 3 = 30, więc licznik też mnożymy przez 3: 3 · 3 = 9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/8 = ?/24. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "3",
          "explain": "8 · 3 = 24, więc licznik też mnożymy przez 3: 1 · 3 = 3.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "6/7 = 12/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "14",
          "explain": "6 · 2 = 12, więc mianownik też mnożymy przez 2: 7 · 2 = 14.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "7/10 = ?/100. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "70",
          "explain": "10 · 10 = 100, więc licznik też mnożymy przez 10: 7 · 10 = 70.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "10/11 = ?/110. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "100",
          "explain": "11 · 10 = 110, więc licznik też mnożymy przez 10: 10 · 10 = 100.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "10/11 = 80/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "88",
          "explain": "10 · 8 = 80, więc mianownik też mnożymy przez 8: 11 · 8 = 88.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/5 = ?/35. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "14",
          "explain": "5 · 7 = 35, więc licznik też mnożymy przez 7: 2 · 7 = 14.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/5 = ?/15. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "12",
          "explain": "5 · 3 = 15, więc licznik też mnożymy przez 3: 4 · 3 = 12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/5 = 16/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "20",
          "explain": "4 · 4 = 16, więc mianownik też mnożymy przez 4: 5 · 4 = 20.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = 6/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "12",
          "explain": "1 · 6 = 6, więc mianownik też mnożymy przez 6: 2 · 6 = 12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/4 = ?/28. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "7",
          "explain": "4 · 7 = 28, więc licznik też mnożymy przez 7: 1 · 7 = 7.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/5 = 12/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "20",
          "explain": "3 · 4 = 12, więc mianownik też mnożymy przez 4: 5 · 4 = 20.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = 9/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "18",
          "explain": "1 · 9 = 9, więc mianownik też mnożymy przez 9: 2 · 9 = 18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "9/10 = 27/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "30",
          "explain": "9 · 3 = 27, więc mianownik też mnożymy przez 3: 10 · 3 = 30.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "8/11 = 32/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "44",
          "explain": "8 · 4 = 32, więc mianownik też mnożymy przez 4: 11 · 4 = 44.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/7 = 18/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "63",
          "explain": "2 · 9 = 18, więc mianownik też mnożymy przez 9: 7 · 9 = 63.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = ?/16. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "8",
          "explain": "2 · 8 = 16, więc licznik też mnożymy przez 8: 1 · 8 = 8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/11 = ?/22. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "6",
          "explain": "11 · 2 = 22, więc licznik też mnożymy przez 2: 3 · 2 = 6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/4 = 15/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "20",
          "explain": "3 · 5 = 15, więc mianownik też mnożymy przez 5: 4 · 5 = 20.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "8/11 = ?/44. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "32",
          "explain": "11 · 4 = 44, więc licznik też mnożymy przez 4: 8 · 4 = 32.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = 5/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "15",
          "explain": "1 · 5 = 5, więc mianownik też mnożymy przez 5: 3 · 5 = 15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = 6/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "18",
          "explain": "1 · 6 = 6, więc mianownik też mnożymy przez 6: 3 · 6 = 18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/3 = ?/24. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "16",
          "explain": "3 · 8 = 24, więc licznik też mnożymy przez 8: 2 · 8 = 16.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/3 = 18/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "27",
          "explain": "2 · 9 = 18, więc mianownik też mnożymy przez 9: 3 · 9 = 27.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/10 = 15/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "50",
          "explain": "3 · 5 = 15, więc mianownik też mnożymy przez 5: 10 · 5 = 50.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = ?/12. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "6",
          "explain": "2 · 6 = 12, więc licznik też mnożymy przez 6: 1 · 6 = 6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/7 = 8/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "56",
          "explain": "1 · 8 = 8, więc mianownik też mnożymy przez 8: 7 · 8 = 56.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/4 = 27/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "36",
          "explain": "3 · 9 = 27, więc mianownik też mnożymy przez 9: 4 · 9 = 36.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/5 = 3/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "15",
          "explain": "1 · 3 = 3, więc mianownik też mnożymy przez 3: 5 · 3 = 15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "6/11 = ?/66. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "36",
          "explain": "11 · 6 = 66, więc licznik też mnożymy przez 6: 6 · 6 = 36.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/9 = ?/27. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "12",
          "explain": "9 · 3 = 27, więc licznik też mnożymy przez 3: 4 · 3 = 12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/11 = 20/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "110",
          "explain": "2 · 10 = 20, więc mianownik też mnożymy przez 10: 11 · 10 = 110.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = ?/30. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "10",
          "explain": "3 · 10 = 30, więc licznik też mnożymy przez 10: 1 · 10 = 10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/9 = ?/72. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "8",
          "explain": "9 · 8 = 72, więc licznik też mnożymy przez 8: 1 · 8 = 8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "9/10 = 18/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "20",
          "explain": "9 · 2 = 18, więc mianownik też mnożymy przez 2: 10 · 2 = 20.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = 3/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "9",
          "explain": "1 · 3 = 3, więc mianownik też mnożymy przez 3: 3 · 3 = 9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/10 = ?/40. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "12",
          "explain": "10 · 4 = 40, więc licznik też mnożymy przez 4: 3 · 4 = 12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "5/9 = ?/18. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "10",
          "explain": "9 · 2 = 18, więc licznik też mnożymy przez 2: 5 · 2 = 10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/10 = 27/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "90",
          "explain": "3 · 9 = 27, więc mianownik też mnożymy przez 9: 10 · 9 = 90.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/4 = ?/20. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "5",
          "explain": "4 · 5 = 20, więc licznik też mnożymy przez 5: 1 · 5 = 5.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = 7/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "14",
          "explain": "1 · 7 = 7, więc mianownik też mnożymy przez 7: 2 · 7 = 14.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "10/11 = 50/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "55",
          "explain": "10 · 5 = 50, więc mianownik też mnożymy przez 5: 11 · 5 = 55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = ?/6. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "3",
          "explain": "2 · 3 = 6, więc licznik też mnożymy przez 3: 1 · 3 = 3.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/5 = 27/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "45",
          "explain": "3 · 9 = 27, więc mianownik też mnożymy przez 9: 5 · 9 = 45.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/11 = 4/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "44",
          "explain": "1 · 4 = 4, więc mianownik też mnożymy przez 4: 11 · 4 = 44.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = ?/20. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "10",
          "explain": "2 · 10 = 20, więc licznik też mnożymy przez 10: 1 · 10 = 10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "9/11 = ?/99. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "81",
          "explain": "11 · 9 = 99, więc licznik też mnożymy przez 9: 9 · 9 = 81.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/5 = ?/35. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "28",
          "explain": "5 · 7 = 35, więc licznik też mnożymy przez 7: 4 · 7 = 28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/11 = 8/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "22",
          "explain": "4 · 2 = 8, więc mianownik też mnożymy przez 2: 11 · 2 = 22.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = ?/18. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "9",
          "explain": "2 · 9 = 18, więc licznik też mnożymy przez 9: 1 · 9 = 9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/7 = ?/42. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "18",
          "explain": "7 · 6 = 42, więc licznik też mnożymy przez 6: 3 · 6 = 18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/5 = 6/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "10",
          "explain": "3 · 2 = 6, więc mianownik też mnożymy przez 2: 5 · 2 = 10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/7 = 8/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "28",
          "explain": "2 · 4 = 8, więc mianownik też mnożymy przez 4: 7 · 4 = 28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/5 = 7/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "35",
          "explain": "1 · 7 = 7, więc mianownik też mnożymy przez 7: 5 · 7 = 35.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = ?/18. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "6",
          "explain": "3 · 6 = 18, więc licznik też mnożymy przez 6: 1 · 6 = 6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "6/7 = ?/35. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "30",
          "explain": "7 · 5 = 35, więc licznik też mnożymy przez 5: 6 · 5 = 30.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "5/12 = 45/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "108",
          "explain": "5 · 9 = 45, więc mianownik też mnożymy przez 9: 12 · 9 = 108.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/6 = ?/30. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "5",
          "explain": "6 · 5 = 30, więc licznik też mnożymy przez 5: 1 · 5 = 5.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/5 = 6/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "15",
          "explain": "2 · 3 = 6, więc mianownik też mnożymy przez 3: 5 · 3 = 15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "5/11 = ?/66. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "30",
          "explain": "11 · 6 = 66, więc licznik też mnożymy przez 6: 5 · 6 = 30.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/5 = ?/20. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "4",
          "explain": "5 · 4 = 20, więc licznik też mnożymy przez 4: 1 · 4 = 4.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "7/12 = ?/72. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "42",
          "explain": "12 · 6 = 72, więc licznik też mnożymy przez 6: 7 · 6 = 42.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/5 = 10/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "50",
          "explain": "1 · 10 = 10, więc mianownik też mnożymy przez 10: 5 · 10 = 50.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/4 = 6/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "8",
          "explain": "3 · 2 = 6, więc mianownik też mnożymy przez 2: 4 · 2 = 8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/7 = ?/21. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "6",
          "explain": "7 · 3 = 21, więc licznik też mnożymy przez 3: 2 · 3 = 6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = ?/8. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "4",
          "explain": "2 · 4 = 8, więc licznik też mnożymy przez 4: 1 · 4 = 4.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/3 = 14/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "21",
          "explain": "2 · 7 = 14, więc mianownik też mnożymy przez 7: 3 · 7 = 21.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "7/11 = ?/110. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "70",
          "explain": "11 · 10 = 110, więc licznik też mnożymy przez 10: 7 · 10 = 70.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "5/7 = 25/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "35",
          "explain": "5 · 5 = 25, więc mianownik też mnożymy przez 5: 7 · 5 = 35.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/9 = 10/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "45",
          "explain": "2 · 5 = 10, więc mianownik też mnożymy przez 5: 9 · 5 = 45.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = ?/21. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "7",
          "explain": "3 · 7 = 21, więc licznik też mnożymy przez 7: 1 · 7 = 7.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = ?/12. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "4",
          "explain": "3 · 4 = 12, więc licznik też mnożymy przez 4: 1 · 4 = 4.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/7 = ?/14. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "8",
          "explain": "7 · 2 = 14, więc licznik też mnożymy przez 2: 4 · 2 = 8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "7/11 = 21/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "33",
          "explain": "7 · 3 = 21, więc mianownik też mnożymy przez 3: 11 · 3 = 33.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/6 = ?/18. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "3",
          "explain": "6 · 3 = 18, więc licznik też mnożymy przez 3: 1 · 3 = 3.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = 3/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "6",
          "explain": "1 · 3 = 3, więc mianownik też mnożymy przez 3: 2 · 3 = 6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = ?/15. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "5",
          "explain": "3 · 5 = 15, więc licznik też mnożymy przez 5: 1 · 5 = 5.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/3 = ?/12. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "8",
          "explain": "3 · 4 = 12, więc licznik też mnożymy przez 4: 2 · 4 = 8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "6/7 = ?/49. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "42",
          "explain": "7 · 7 = 49, więc licznik też mnożymy przez 7: 6 · 7 = 42.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/5 = 4/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "10",
          "explain": "2 · 2 = 4, więc mianownik też mnożymy przez 2: 5 · 2 = 10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/5 = ?/40. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "24",
          "explain": "5 · 8 = 40, więc licznik też mnożymy przez 8: 3 · 8 = 24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/2 = 5/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "10",
          "explain": "1 · 5 = 5, więc mianownik też mnożymy przez 5: 2 · 5 = 10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "4/11 = ?/55. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "20",
          "explain": "11 · 5 = 55, więc licznik też mnożymy przez 5: 4 · 5 = 20.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/9 = 5/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "45",
          "explain": "1 · 5 = 5, więc mianownik też mnożymy przez 5: 9 · 5 = 45.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "5/11 = 50/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "110",
          "explain": "5 · 10 = 50, więc mianownik też mnożymy przez 10: 11 · 10 = 110.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/11 = 16/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "88",
          "explain": "2 · 8 = 16, więc mianownik też mnożymy przez 8: 11 · 8 = 88.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/3 = ?/27. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "9",
          "explain": "3 · 9 = 27, więc licznik też mnożymy przez 9: 1 · 9 = 9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "1/10 = ?/80. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "8",
          "explain": "10 · 8 = 80, więc licznik też mnożymy przez 8: 1 · 8 = 8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "9/11 = 54/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "66",
          "explain": "9 · 6 = 54, więc mianownik też mnożymy przez 6: 11 · 6 = 66.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "7/8 = ?/16. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "14",
          "explain": "8 · 2 = 16, więc licznik też mnożymy przez 2: 7 · 2 = 14.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "7/9 = 70/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "90",
          "explain": "7 · 10 = 70, więc mianownik też mnożymy przez 10: 9 · 10 = 90.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "3/7 = 12/?. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "28",
          "explain": "3 · 4 = 12, więc mianownik też mnożymy przez 4: 7 · 4 = 28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "9/10 = ?/60. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "54",
          "explain": "10 · 6 = 60, więc licznik też mnożymy przez 6: 9 · 6 = 54.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Rozszerzanie ułamka",
          "q": "2/3 = ?/27. Jaką liczbę trzeba wpisać w miejsce znaku zapytania?",
          "answer": "18",
          "explain": "3 · 9 = 27, więc licznik też mnożymy przez 9: 2 · 9 = 18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/7 i 3/4?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 4 to 28: 1/7 = 4/28, 3/4 = 21/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/4 i 1/2?",
          "answer": "4",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 2 to 4: 1/4, 1/2 = 2/4.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 7/8 i 3/5?",
          "answer": "40",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 5 to 40: 7/8 = 35/40, 3/5 = 24/40.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/5 i 4/7?",
          "answer": "35",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 7 to 35: 3/5 = 21/35, 4/7 = 20/35.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 7/8 i 1/6?",
          "answer": "24",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 6 to 24: 7/8 = 21/24, 1/6 = 4/24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/5 i 5/8?",
          "answer": "40",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 8 to 40: 2/5 = 16/40, 5/8 = 25/40.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 6/7 i 1/6?",
          "answer": "42",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 6 to 42: 6/7 = 36/42, 1/6 = 7/42.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/9 i 2/3?",
          "answer": "9",
          "explain": "Najmniejsza wspólna wielokrotność liczb 9 i 3 to 9: 2/9, 2/3 = 6/9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 4/7?",
          "answer": "21",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 7 to 21: 1/3 = 7/21, 4/7 = 12/21.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 7/9 i 1/2?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 9 i 2 to 18: 7/9 = 14/18, 1/2 = 9/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/3 i 4/5?",
          "answer": "15",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 5 to 15: 2/3 = 10/15, 4/5 = 12/15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 7/11 i 1/4?",
          "answer": "44",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 4 to 44: 7/11 = 28/44, 1/4 = 11/44.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 7/8?",
          "answer": "24",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 8 to 24: 1/3 = 8/24, 7/8 = 21/24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/5 i 7/12?",
          "answer": "60",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 12 to 60: 1/5 = 12/60, 7/12 = 35/60.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/7 i 3/4?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 4 to 28: 2/7 = 8/28, 3/4 = 21/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/12 i 1/6?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 12 i 6 to 12: 5/12, 1/6 = 2/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/5 i 7/12?",
          "answer": "60",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 12 to 60: 2/5 = 24/60, 7/12 = 35/60.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/7 i 2/5?",
          "answer": "35",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 5 to 35: 2/7 = 10/35, 2/5 = 14/35.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/11 i 2/5?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 5 to 55: 5/11 = 25/55, 2/5 = 22/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/8 i 1/3?",
          "answer": "24",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 3 to 24: 5/8 = 15/24, 1/3 = 8/24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/4 i 5/7?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 7 to 28: 1/4 = 7/28, 5/7 = 20/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/9 i 1/2?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 9 i 2 to 18: 1/9 = 2/18, 1/2 = 9/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/7 i 1/4?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 4 to 28: 3/7 = 12/28, 1/4 = 7/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/5 i 5/11?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 11 to 55: 2/5 = 22/55, 5/11 = 25/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 8/9?",
          "answer": "9",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 9 to 9: 1/3 = 3/9, 8/9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/6 i 5/9?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 6 i 9 to 18: 5/6 = 15/18, 5/9 = 10/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 8/11 i 2/5?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 5 to 55: 8/11 = 40/55, 2/5 = 22/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/5 i 5/8?",
          "answer": "40",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 8 to 40: 1/5 = 8/40, 5/8 = 25/40.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/6 i 1/3?",
          "answer": "6",
          "explain": "Najmniejsza wspólna wielokrotność liczb 6 i 3 to 6: 5/6, 1/3 = 2/6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 7/10 i 1/3?",
          "answer": "30",
          "explain": "Najmniejsza wspólna wielokrotność liczb 10 i 3 to 30: 7/10 = 21/30, 1/3 = 10/30.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/4 i 2/7?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 7 to 28: 3/4 = 21/28, 2/7 = 8/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 5/9?",
          "answer": "9",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 9 to 9: 1/3 = 3/9, 5/9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/5 i 1/9?",
          "answer": "45",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 9 to 45: 1/5 = 9/45, 1/9 = 5/45.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/8 i 3/5?",
          "answer": "40",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 5 to 40: 1/8 = 5/40, 3/5 = 24/40.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/2 i 2/3?",
          "answer": "6",
          "explain": "Najmniejsza wspólna wielokrotność liczb 2 i 3 to 6: 1/2 = 3/6, 2/3 = 4/6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/5 i 3/10?",
          "answer": "10",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 10 to 10: 1/5 = 2/10, 3/10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/12 i 2/5?",
          "answer": "60",
          "explain": "Najmniejsza wspólna wielokrotność liczb 12 i 5 to 60: 1/12 = 5/60, 2/5 = 24/60.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 4/7 i 3/5?",
          "answer": "35",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 5 to 35: 4/7 = 20/35, 3/5 = 21/35.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/2 i 5/9?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 2 i 9 to 18: 1/2 = 9/18, 5/9 = 10/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 4/7 i 1/5?",
          "answer": "35",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 5 to 35: 4/7 = 20/35, 1/5 = 7/35.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/7 i 5/8?",
          "answer": "56",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 8 to 56: 2/7 = 16/56, 5/8 = 35/56.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 7/12?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 12 to 12: 1/3 = 4/12, 7/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/5 i 8/11?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 11 to 55: 3/5 = 33/55, 8/11 = 40/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 6/11 i 1/5?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 5 to 55: 6/11 = 30/55, 1/5 = 11/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 9/10 i 2/5?",
          "answer": "10",
          "explain": "Najmniejsza wspólna wielokrotność liczb 10 i 5 to 10: 9/10, 2/5 = 4/10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/7 i 1/4?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 4 to 28: 2/7 = 8/28, 1/4 = 7/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/11 i 1/2?",
          "answer": "22",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 2 to 22: 3/11 = 6/22, 1/2 = 11/22.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/2 i 8/9?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 2 i 9 to 18: 1/2 = 9/18, 8/9 = 16/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 4/5 i 1/3?",
          "answer": "15",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 3 to 15: 4/5 = 12/15, 1/3 = 5/15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 10/11 i 3/5?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 5 to 55: 10/11 = 50/55, 3/5 = 33/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/8 i 3/4?",
          "answer": "8",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 4 to 8: 5/8, 3/4 = 6/8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/4 i 4/7?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 7 to 28: 3/4 = 21/28, 4/7 = 16/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 4/5 i 2/3?",
          "answer": "15",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 3 to 15: 4/5 = 12/15, 2/3 = 10/15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/6 i 1/2?",
          "answer": "6",
          "explain": "Najmniejsza wspólna wielokrotność liczb 6 i 2 to 6: 1/6, 1/2 = 3/6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 6/7 i 1/2?",
          "answer": "14",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 2 to 14: 6/7 = 12/14, 1/2 = 7/14.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/12 i 1/3?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 12 i 3 to 12: 1/12, 1/3 = 4/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/9 i 11/12?",
          "answer": "36",
          "explain": "Najmniejsza wspólna wielokrotność liczb 9 i 12 to 36: 2/9 = 8/36, 11/12 = 33/36.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/4 i 8/11?",
          "answer": "44",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 11 to 44: 3/4 = 33/44, 8/11 = 32/44.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/3 i 1/2?",
          "answer": "6",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 2 to 6: 2/3 = 4/6, 1/2 = 3/6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/4 i 2/3?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 3 to 12: 3/4 = 9/12, 2/3 = 8/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/2 i 2/9?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 2 i 9 to 18: 1/2 = 9/18, 2/9 = 4/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/6 i 3/7?",
          "answer": "42",
          "explain": "Najmniejsza wspólna wielokrotność liczb 6 i 7 to 42: 5/6 = 35/42, 3/7 = 18/42.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/12 i 1/2?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 12 i 2 to 12: 1/12, 1/2 = 6/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 4/7 i 1/6?",
          "answer": "42",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 6 to 42: 4/7 = 24/42, 1/6 = 7/42.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/10 i 2/3?",
          "answer": "30",
          "explain": "Najmniejsza wspólna wielokrotność liczb 10 i 3 to 30: 3/10 = 9/30, 2/3 = 20/30.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/3 i 3/5?",
          "answer": "15",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 5 to 15: 2/3 = 10/15, 3/5 = 9/15.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/5 i 5/6?",
          "answer": "30",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 6 to 30: 3/5 = 18/30, 5/6 = 25/30.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 4/5 i 5/9?",
          "answer": "45",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 9 to 45: 4/5 = 36/45, 5/9 = 25/45.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/4 i 4/5?",
          "answer": "20",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 5 to 20: 3/4 = 15/20, 4/5 = 16/20.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/5 i 4/9?",
          "answer": "45",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 9 to 45: 2/5 = 18/45, 4/9 = 20/45.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 1/2?",
          "answer": "6",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 2 to 6: 1/3 = 2/6, 1/2 = 3/6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 7/12 i 3/8?",
          "answer": "24",
          "explain": "Najmniejsza wspólna wielokrotność liczb 12 i 8 to 24: 7/12 = 14/24, 3/8 = 9/24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 8/9 i 1/2?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 9 i 2 to 18: 8/9 = 16/18, 1/2 = 9/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 6/7 i 1/4?",
          "answer": "28",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 4 to 28: 6/7 = 24/28, 1/4 = 7/28.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 9/10 i 1/6?",
          "answer": "30",
          "explain": "Najmniejsza wspólna wielokrotność liczb 10 i 6 to 30: 9/10 = 27/30, 1/6 = 5/30.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 5/8 i 1/4?",
          "answer": "8",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 4 to 8: 5/8, 1/4 = 2/8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/9 i 3/5?",
          "answer": "45",
          "explain": "Najmniejsza wspólna wielokrotność liczb 9 i 5 to 45: 2/9 = 10/45, 3/5 = 27/45.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 10/11 i 2/5?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 5 to 55: 10/11 = 50/55, 2/5 = 22/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/11 i 1/5?",
          "answer": "55",
          "explain": "Najmniejsza wspólna wielokrotność liczb 11 i 5 to 55: 1/11 = 5/55, 1/5 = 11/55.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/2 i 5/12?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 2 i 12 to 12: 1/2 = 6/12, 5/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/6 i 7/9?",
          "answer": "18",
          "explain": "Najmniejsza wspólna wielokrotność liczb 6 i 9 to 18: 1/6 = 3/18, 7/9 = 14/18.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 5/8?",
          "answer": "24",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 8 to 24: 1/3 = 8/24, 5/8 = 15/24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/4 i 3/5?",
          "answer": "20",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 5 to 20: 3/4 = 15/20, 3/5 = 12/20.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/2 i 6/11?",
          "answer": "22",
          "explain": "Najmniejsza wspólna wielokrotność liczb 2 i 11 to 22: 1/2 = 11/22, 6/11 = 12/22.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/4 i 1/11?",
          "answer": "44",
          "explain": "Najmniejsza wspólna wielokrotność liczb 4 i 11 to 44: 3/4 = 33/44, 1/11 = 4/44.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 8/9 i 1/4?",
          "answer": "36",
          "explain": "Najmniejsza wspólna wielokrotność liczb 9 i 4 to 36: 8/9 = 32/36, 1/4 = 9/36.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 9/10 i 1/8?",
          "answer": "40",
          "explain": "Najmniejsza wspólna wielokrotność liczb 10 i 8 to 40: 9/10 = 36/40, 1/8 = 5/40.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/8 i 3/4?",
          "answer": "8",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 4 to 8: 1/8, 3/4 = 6/8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 7/8 i 1/2?",
          "answer": "8",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 2 to 8: 7/8, 1/2 = 4/8.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/3 i 5/7?",
          "answer": "21",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 7 to 21: 2/3 = 14/21, 5/7 = 15/21.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 2/9?",
          "answer": "9",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 9 to 9: 1/3 = 3/9, 2/9.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/8 i 1/3?",
          "answer": "24",
          "explain": "Najmniejsza wspólna wielokrotność liczb 8 i 3 to 24: 3/8 = 9/24, 1/3 = 8/24.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/5 i 1/2?",
          "answer": "10",
          "explain": "Najmniejsza wspólna wielokrotność liczb 5 i 2 to 10: 1/5 = 2/10, 1/2 = 5/10.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/2 i 5/6?",
          "answer": "6",
          "explain": "Najmniejsza wspólna wielokrotność liczb 2 i 6 to 6: 1/2 = 3/6, 5/6.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/3 i 1/7?",
          "answer": "21",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 7 to 21: 1/3 = 7/21, 1/7 = 3/21.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 11/12 i 1/5?",
          "answer": "60",
          "explain": "Najmniejsza wspólna wielokrotność liczb 12 i 5 to 60: 11/12 = 55/60, 1/5 = 12/60.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 3/7 i 1/6?",
          "answer": "42",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 6 to 42: 3/7 = 18/42, 1/6 = 7/42.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 11/12 i 2/3?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 12 i 3 to 12: 11/12, 2/3 = 8/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 2/3 i 11/12?",
          "answer": "12",
          "explain": "Najmniejsza wspólna wielokrotność liczb 3 i 12 to 12: 2/3 = 8/12, 11/12.",
          "fractionAnswer": false
        },
        {
          "type": "number",
          "skill": "Najmniejszy wspólny mianownik",
          "q": "Jaki jest najmniejszy wspólny mianownik ułamków 1/7 i 1/2?",
          "answer": "14",
          "explain": "Najmniejsza wspólna wielokrotność liczb 7 i 2 to 14: 1/7 = 2/14, 1/2 = 7/14.",
          "fractionAnswer": false
        }
      ]
    }
  ]
};
