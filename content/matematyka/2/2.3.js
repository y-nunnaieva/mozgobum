export default {
  "title": "Cechy podzielności",
  "icon": "🧩",
  "sections": [
    {
      "id": "zasady",
      "name": "Zasady",
      "icon": "📏",
      "questions": [
        {
          "id": "0001",
          "level": 1,
          "q": "Kiedy liczba jest podzielna przez 2?",
          "correct": [
            "Gdy ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)"
          ],
          "wrong": [
            "Gdy ostatnia cyfra to 0 lub 5",
            "Gdy suma cyfr jest podzielna przez 3",
            "Gdy dwie ostatnie cyfry tworzą liczbę podzielną przez 4"
          ],
          "explain": "Liczba jest podzielna przez 2 tylko wtedy, gdy ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)."
        },
        {
          "id": "0002",
          "level": 1,
          "q": "Kiedy liczba jest podzielna przez 3?",
          "correct": [
            "Gdy suma cyfr jest podzielna przez 3"
          ],
          "wrong": [
            "Gdy ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)",
            "Gdy ostatnia cyfra to 0 lub 5",
            "Gdy ostatnia cyfra to 0"
          ],
          "explain": "Liczba jest podzielna przez 3 tylko wtedy, gdy suma cyfr jest podzielna przez 3."
        },
        {
          "id": "0003",
          "level": 1,
          "q": "Kiedy liczba jest podzielna przez 4?",
          "correct": [
            "Gdy dwie ostatnie cyfry tworzą liczbę podzielną przez 4"
          ],
          "wrong": [
            "Gdy suma cyfr jest podzielna przez 3",
            "Gdy dwie ostatnie cyfry to 00",
            "Gdy ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)"
          ],
          "explain": "Liczba jest podzielna przez 4 tylko wtedy, gdy dwie ostatnie cyfry tworzą liczbę podzielną przez 4."
        },
        {
          "id": "0004",
          "level": 1,
          "q": "Kiedy liczba jest podzielna przez 5?",
          "correct": [
            "Gdy ostatnia cyfra to 0 lub 5"
          ],
          "wrong": [
            "Gdy suma cyfr jest podzielna przez 3",
            "Gdy ostatnia cyfra to 0",
            "Gdy ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)"
          ],
          "explain": "Liczba jest podzielna przez 5 tylko wtedy, gdy ostatnia cyfra to 0 lub 5."
        },
        {
          "id": "0005",
          "level": 1,
          "q": "Kiedy liczba jest podzielna przez 9?",
          "correct": [
            "Gdy suma cyfr jest podzielna przez 9"
          ],
          "wrong": [
            "Gdy ostatnia cyfra to 0 lub 5",
            "Gdy ostatnia cyfra to 0",
            "Gdy suma cyfr jest podzielna przez 3"
          ],
          "explain": "Liczba jest podzielna przez 9 tylko wtedy, gdy suma cyfr jest podzielna przez 9."
        },
        {
          "id": "0006",
          "level": 1,
          "q": "Kiedy liczba jest podzielna przez 10?",
          "correct": [
            "Gdy ostatnia cyfra to 0"
          ],
          "wrong": [
            "Gdy suma cyfr jest podzielna przez 9",
            "Gdy dwie ostatnie cyfry to 00",
            "Gdy dwie ostatnie cyfry tworzą liczbę podzielną przez 4"
          ],
          "explain": "Liczba jest podzielna przez 10 tylko wtedy, gdy ostatnia cyfra to 0."
        },
        {
          "id": "0007",
          "level": 1,
          "q": "Kiedy liczba jest podzielna przez 100?",
          "correct": [
            "Gdy dwie ostatnie cyfry to 00"
          ],
          "wrong": [
            "Gdy ostatnia cyfra to 0",
            "Gdy suma cyfr jest podzielna przez 9",
            "Gdy suma cyfr jest podzielna przez 3"
          ],
          "explain": "Liczba jest podzielna przez 100 tylko wtedy, gdy dwie ostatnie cyfry to 00."
        },
        {
          "id": "0008",
          "level": 1,
          "q": "Przez które liczby podzielność sprawdzamy, licząc sumę cyfr?",
          "correct": [
            "3",
            "9"
          ],
          "wrong": [
            "4",
            "5"
          ],
          "explain": "Przez 3 i przez 9 – suma cyfr musi być podzielna przez 3 lub przez 9."
        },
        {
          "id": "0009",
          "q": "Ile wynosi suma cyfr liczby 327?",
          "correct": [
            "12"
          ],
          "wrong": [
            "327",
            "10",
            "21"
          ],
          "explain": "3 + 2 + 7 = 12. Dzieli się przez 3, więc 327 też jest podzielne przez 3."
        },
        {
          "id": "0010",
          "level": 1,
          "q": "Które zdania są prawdziwe?",
          "correct": [
            "Każda liczba podzielna przez 9 jest podzielna przez 3",
            "Każda liczba podzielna przez 10 jest podzielna przez 5"
          ],
          "wrong": [
            "Każda liczba podzielna przez 3 jest podzielna przez 9",
            "Każda liczba parzysta jest podzielna przez 4"
          ],
          "explain": "Np. 12 dzieli się przez 3, ale nie przez 9. A 6 jest parzysta, ale nie dzieli się przez 4."
        },
        {
          "id": "0011",
          "q": "Klara mówi: „Każda liczba podzielna przez 3 ma ostatnią cyfrę podzielną przez 3”. Czy ma rację?",
          "correct": [
            "Nie – np. 12 jest podzielne przez 3, a 2 nie"
          ],
          "wrong": [
            "Tak",
            "Tylko dla liczb dwucyfrowych",
            "Tak, ale tylko dla parzystych"
          ],
          "explain": "Przez 3 decyduje suma cyfr, a nie ostatnia cyfra."
        }
      ]
    },
    {
      "id": "ktore",
      "name": "Które są podzielne?",
      "icon": "🔍",
      "questions": [
        {
          "id": "0012",
          "q": "Które z podanych liczb są podzielne przez 2?",
          "correct": [
            "612",
            "1242",
            "1234",
            "36054",
            "696"
          ],
          "wrong": [
            "12033"
          ],
          "explain": "Podzielne przez 2: 612, 1242, 1234, 36054, 696 – bo ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)."
        },
        {
          "id": "0013",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 2?",
          "correct": [
            "123456",
            "508",
            "2446"
          ],
          "wrong": [
            "317",
            "2205",
            "125"
          ],
          "explain": "Podzielne przez 2: 123456, 508, 2446 – bo ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)."
        },
        {
          "id": "0014",
          "q": "Które z podanych liczb są podzielne przez 3?",
          "correct": [
            "696",
            "7980",
            "12033",
            "10011"
          ],
          "wrong": [
            "7402",
            "12472"
          ],
          "explain": "Podzielne przez 3: 696, 7980, 12033, 10011 – bo suma cyfr jest podzielna przez 3."
        },
        {
          "id": "0015",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 3?",
          "correct": [
            "10011",
            "36054"
          ],
          "wrong": [
            "12472",
            "3545",
            "317",
            "764"
          ],
          "explain": "Podzielne przez 3: 10011, 36054 – bo suma cyfr jest podzielna przez 3."
        },
        {
          "id": "0016",
          "q": "Które z podanych liczb są podzielne przez 4?",
          "correct": [
            "7980",
            "4300",
            "612",
            "2024",
            "768"
          ],
          "wrong": [
            "10011"
          ],
          "explain": "Podzielne przez 4: 7980, 4300, 612, 2024, 768 – bo dwie ostatnie cyfry tworzą liczbę podzielną przez 4."
        },
        {
          "id": "0017",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 4?",
          "correct": [
            "8244",
            "4300",
            "612"
          ],
          "wrong": [
            "40302",
            "375",
            "317"
          ],
          "explain": "Podzielne przez 4: 8244, 4300, 612 – bo dwie ostatnie cyfry tworzą liczbę podzielną przez 4."
        },
        {
          "id": "0018",
          "q": "Które z podanych liczb są podzielne przez 5?",
          "correct": [
            "72720",
            "3545"
          ],
          "wrong": [
            "768",
            "72518",
            "7402",
            "832"
          ],
          "explain": "Podzielne przez 5: 72720, 3545 – bo ostatnia cyfra to 0 lub 5."
        },
        {
          "id": "0019",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 5?",
          "correct": [
            "1020",
            "6030"
          ],
          "wrong": [
            "832",
            "2446",
            "72518",
            "764"
          ],
          "explain": "Podzielne przez 5: 1020, 6030 – bo ostatnia cyfra to 0 lub 5."
        },
        {
          "id": "0020",
          "q": "Które z podanych liczb są podzielne przez 9?",
          "correct": [
            "8244",
            "2205"
          ],
          "wrong": [
            "317",
            "1001001",
            "9500",
            "7402"
          ],
          "explain": "Podzielne przez 9: 8244, 2205 – bo suma cyfr jest podzielna przez 9."
        },
        {
          "id": "0021",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 9?",
          "correct": [
            "1242"
          ],
          "wrong": [
            "9124",
            "72518",
            "2446",
            "4300",
            "508"
          ],
          "explain": "Podzielne przez 9: 1242 – bo suma cyfr jest podzielna przez 9."
        },
        {
          "id": "0022",
          "q": "Które z podanych liczb są podzielne przez 10?",
          "correct": [
            "4300"
          ],
          "wrong": [
            "36054",
            "506",
            "9124",
            "2446",
            "72518"
          ],
          "explain": "Podzielne przez 10: 4300 – bo ostatnia cyfra to 0."
        },
        {
          "id": "0023",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 10?",
          "correct": [
            "9500",
            "1020",
            "72720"
          ],
          "wrong": [
            "7402",
            "72518",
            "506"
          ],
          "explain": "Podzielne przez 10: 9500, 1020, 72720 – bo ostatnia cyfra to 0."
        },
        {
          "id": "0024",
          "q": "Które z podanych liczb są podzielne przez 100?",
          "correct": [
            "9500"
          ],
          "wrong": [
            "832",
            "1242",
            "1020",
            "764",
            "2205"
          ],
          "explain": "Podzielne przez 100: 9500 – bo dwie ostatnie cyfry to 00."
        },
        {
          "id": "0025",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 100?",
          "correct": [
            "9500"
          ],
          "wrong": [
            "1020",
            "1242",
            "696",
            "123456",
            "2024"
          ],
          "explain": "Podzielne przez 100: 9500 – bo dwie ostatnie cyfry to 00."
        }
      ]
    },
    {
      "id": "cyfra",
      "name": "Brakująca cyfra",
      "icon": "🔢",
      "questions": [
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 99▢ była podzielna przez 3?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 18. 18 + 9 = 27 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 331▢ była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 7. 7 + 2 = 9 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 95▢ była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 14. 14 + 7 = 21 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 8▢9 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 17. 17 + 1 = 18 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 94▢ była podzielna przez 3?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 13. 13 + 5 = 18 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 36▢4 była podzielna przez 3?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 13. 13 + 5 = 18 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 9▢2 była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 3▢8 była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 12▢5 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 8. 8 + 1 = 9 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 58▢ była podzielna przez 3?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 13. 13 + 5 = 18 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 19▢ była podzielna przez 3?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 10. 10 + 5 = 15 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 5▢2 była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 7. 7 + 2 = 9 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 14▢ była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 5. 5 + 7 = 12 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 58▢6 była podzielna przez 3?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 19. 19 + 8 = 27 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 82▢1 była podzielna przez 3?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 11. 11 + 4 = 15 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 90▢4 była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 13. 13 + 2 = 15 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 81▢4 była podzielna przez 3?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 13. 13 + 5 = 18 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢5 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 11. 11 + 1 = 12 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢39 była podzielna przez 3?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 18. 18 + 9 = 27 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢78 była podzielna przez 3?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 21. 21 + 9 = 30 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 340▢ była podzielna przez 3?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 7. 7 + 8 = 15 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 3▢6 była podzielna przez 3?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 9. 9 + 9 = 18 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢0 była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 2. 2 + 7 = 9 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢0 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 2. 2 + 1 = 3 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 17▢ była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 8. 8 + 1 = 9 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 1▢28 była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 33▢ była podzielna przez 3?",
          "answer": "0",
          "explain": "Suma pozostałych cyfr to 6. 6 + 0 = 6 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 92▢6 była podzielna przez 3?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 17. 17 + 4 = 21 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 67▢ była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 13. 13 + 2 = 15 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢05 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 11. 11 + 1 = 12 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 60▢ była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 6. 6 + 3 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 20▢ była podzielna przez 9?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 2. 2 + 7 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 3▢86 była podzielna przez 9?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 17. 17 + 1 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 152▢ była podzielna przez 9?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 8. 8 + 1 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 3▢1 była podzielna przez 9?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 4. 4 + 5 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 515▢ była podzielna przez 9?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 132▢ była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 6. 6 + 3 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 31▢7 była podzielna przez 9?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 320▢ była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 5. 5 + 4 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 44▢8 była podzielna przez 9?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 16. 16 + 2 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 1▢86 była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 15. 15 + 3 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 464▢ była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 14. 14 + 4 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 480▢ była podzielna przez 9?",
          "answer": "6",
          "explain": "Suma pozostałych cyfr to 12. 12 + 6 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢35 była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 14. 14 + 4 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢7 była podzielna przez 9?",
          "answer": "0",
          "explain": "Suma pozostałych cyfr to 9. 9 + 0 = 9 dzieli się przez 9. Pasujące cyfry: 0, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 995▢ była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 23. 23 + 4 = 27 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 74▢9 była podzielna przez 9?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 20. 20 + 7 = 27 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢5 była podzielna przez 9?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 18▢ była podzielna przez 9?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 9. 9 + 9 = 18 dzieli się przez 9. Pasujące cyfry: 0, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 46▢5 była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 15. 15 + 3 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 48▢3 była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 15. 15 + 3 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 94▢ była podzielna przez 9?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 13. 13 + 5 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 31▢9 była podzielna przez 9?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 13. 13 + 5 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 40▢ była podzielna przez 9?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 4. 4 + 5 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 268▢ była podzielna przez 9?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 16. 16 + 2 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 8▢1 była podzielna przez 9?",
          "answer": "0",
          "explain": "Suma pozostałych cyfr to 9. 9 + 0 = 9 dzieli się przez 9. Pasujące cyfry: 0, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 722▢ była podzielna przez 9?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 98▢2 była podzielna przez 9?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 19. 19 + 8 = 27 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 693▢ była podzielna przez 9?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 18. 18 + 9 = 27 dzieli się przez 9. Pasujące cyfry: 0, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 9▢6 była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 15. 15 + 3 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 22034?",
          "answer": "11",
          "explain": "2 + 2 + 0 + 3 + 4 = 11."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 66994?",
          "answer": "34",
          "explain": "6 + 6 + 9 + 9 + 4 = 34."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 62704?",
          "answer": "19",
          "explain": "6 + 2 + 7 + 0 + 4 = 19."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 96605?",
          "answer": "26",
          "explain": "9 + 6 + 6 + 0 + 5 = 26."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 65878?",
          "answer": "34",
          "explain": "6 + 5 + 8 + 7 + 8 = 34."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 57690?",
          "answer": "27",
          "explain": "5 + 7 + 6 + 9 + 0 = 27."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 77291?",
          "answer": "26",
          "explain": "7 + 7 + 2 + 9 + 1 = 26."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 1351?",
          "answer": "10",
          "explain": "1 + 3 + 5 + 1 = 10."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 99199?",
          "answer": "37",
          "explain": "9 + 9 + 1 + 9 + 9 = 37."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 45015?",
          "answer": "15",
          "explain": "4 + 5 + 0 + 1 + 5 = 15."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 70781?",
          "answer": "23",
          "explain": "7 + 0 + 7 + 8 + 1 = 23."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 55983?",
          "answer": "30",
          "explain": "5 + 5 + 9 + 8 + 3 = 30."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 68946?",
          "answer": "33",
          "explain": "6 + 8 + 9 + 4 + 6 = 33."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 65495?",
          "answer": "29",
          "explain": "6 + 5 + 4 + 9 + 5 = 29."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 10676?",
          "answer": "20",
          "explain": "1 + 0 + 6 + 7 + 6 = 20."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 72783?",
          "answer": "27",
          "explain": "7 + 2 + 7 + 8 + 3 = 27."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 44477?",
          "answer": "26",
          "explain": "4 + 4 + 4 + 7 + 7 = 26."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 21431?",
          "answer": "11",
          "explain": "2 + 1 + 4 + 3 + 1 = 11."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 45382?",
          "answer": "22",
          "explain": "4 + 5 + 3 + 8 + 2 = 22."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 31482?",
          "answer": "18",
          "explain": "3 + 1 + 4 + 8 + 2 = 18."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 2544?",
          "answer": "15",
          "explain": "2 + 5 + 4 + 4 = 15."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 20489?",
          "answer": "23",
          "explain": "2 + 0 + 4 + 8 + 9 = 23."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 13020?",
          "answer": "6",
          "explain": "1 + 3 + 0 + 2 + 0 = 6."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 84047?",
          "answer": "23",
          "explain": "8 + 4 + 0 + 4 + 7 = 23."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 35122?",
          "answer": "13",
          "explain": "3 + 5 + 1 + 2 + 2 = 13."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 2703?",
          "answer": "12",
          "explain": "2 + 7 + 0 + 3 = 12."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 69804?",
          "answer": "27",
          "explain": "6 + 9 + 8 + 0 + 4 = 27."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 7713?",
          "answer": "18",
          "explain": "7 + 7 + 1 + 3 = 18."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 9684?",
          "answer": "27",
          "explain": "9 + 6 + 8 + 4 = 27."
        },
        {
          "type": "number",
          "skill": "Suma cyfr",
          "q": "Ile wynosi suma cyfr liczby 13947?",
          "answer": "24",
          "explain": "1 + 3 + 9 + 4 + 7 = 24."
        }
      ]
    }
  ]
};
