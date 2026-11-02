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
            "Gdy ostatnia cyfra to 0",
            "Gdy ostatnia cyfra to 0 lub 5",
            "Gdy suma cyfr jest podzielna przez 9"
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
            "Gdy ostatnia cyfra to 0 lub 5",
            "Gdy dwie ostatnie cyfry tworzą liczbę podzielną przez 4",
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
            "Gdy suma cyfr jest podzielna przez 9",
            "Gdy ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)",
            "Gdy ostatnia cyfra to 0"
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
            "Gdy suma cyfr jest podzielna przez 9",
            "Gdy dwie ostatnie cyfry to 00",
            "Gdy suma cyfr jest podzielna przez 3"
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
            "Gdy ostatnia cyfra to 0",
            "Gdy suma cyfr jest podzielna przez 3",
            "Gdy dwie ostatnie cyfry to 00"
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
            "Gdy ostatnia cyfra to 0 lub 5"
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
            "Gdy ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)",
            "Gdy ostatnia cyfra to 0 lub 5",
            "Gdy ostatnia cyfra to 0"
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
            "768",
            "72518",
            "764",
            "612",
            "1234"
          ],
          "wrong": [
            "12033"
          ],
          "explain": "Podzielne przez 2: 768, 72518, 764, 612, 1234 – bo ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)."
        },
        {
          "id": "0013",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 2?",
          "correct": [
            "6030",
            "123456",
            "12472"
          ],
          "wrong": [
            "2205",
            "10011",
            "317"
          ],
          "explain": "Podzielne przez 2: 6030, 123456, 12472 – bo ostatnia cyfra jest parzysta (0, 2, 4, 6, 8)."
        },
        {
          "id": "0014",
          "q": "Które z podanych liczb są podzielne przez 3?",
          "correct": [
            "612",
            "72720"
          ],
          "wrong": [
            "2446",
            "2024",
            "3545",
            "72518"
          ],
          "explain": "Podzielne przez 3: 612, 72720 – bo suma cyfr jest podzielna przez 3."
        },
        {
          "id": "0015",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 3?",
          "correct": [
            "8244",
            "7980"
          ],
          "wrong": [
            "2024",
            "508",
            "764",
            "2446"
          ],
          "explain": "Podzielne przez 3: 8244, 7980 – bo suma cyfr jest podzielna przez 3."
        },
        {
          "id": "0016",
          "q": "Które z podanych liczb są podzielne przez 4?",
          "correct": [
            "768",
            "4300",
            "696"
          ],
          "wrong": [
            "2205",
            "375",
            "317"
          ],
          "explain": "Podzielne przez 4: 768, 4300, 696 – bo dwie ostatnie cyfry tworzą liczbę podzielną przez 4."
        },
        {
          "id": "0017",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 4?",
          "correct": [
            "123456",
            "7980"
          ],
          "wrong": [
            "36054",
            "317",
            "2446",
            "1242"
          ],
          "explain": "Podzielne przez 4: 123456, 7980 – bo dwie ostatnie cyfry tworzą liczbę podzielną przez 4."
        },
        {
          "id": "0018",
          "q": "Które z podanych liczb są podzielne przez 5?",
          "correct": [
            "6030",
            "125",
            "9500"
          ],
          "wrong": [
            "36054",
            "832",
            "612"
          ],
          "explain": "Podzielne przez 5: 6030, 125, 9500 – bo ostatnia cyfra to 0 lub 5."
        },
        {
          "id": "0019",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 5?",
          "correct": [
            "3545",
            "8400",
            "1305",
            "6030"
          ],
          "wrong": [
            "123456",
            "768"
          ],
          "explain": "Podzielne przez 5: 3545, 8400, 1305, 6030 – bo ostatnia cyfra to 0 lub 5."
        },
        {
          "id": "0020",
          "q": "Które z podanych liczb są podzielne przez 9?",
          "correct": [
            "1305",
            "612",
            "12033"
          ],
          "wrong": [
            "8400",
            "17317",
            "1001001"
          ],
          "explain": "Podzielne przez 9: 1305, 612, 12033 – bo suma cyfr jest podzielna przez 9."
        },
        {
          "id": "0021",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 9?",
          "correct": [
            "12033"
          ],
          "wrong": [
            "696",
            "7980",
            "12472",
            "1020",
            "2446"
          ],
          "explain": "Podzielne przez 9: 12033 – bo suma cyfr jest podzielna przez 9."
        },
        {
          "id": "0022",
          "q": "Które z podanych liczb są podzielne przez 10?",
          "correct": [
            "6030"
          ],
          "wrong": [
            "12472",
            "506",
            "72518",
            "508",
            "40302"
          ],
          "explain": "Podzielne przez 10: 6030 – bo ostatnia cyfra to 0."
        },
        {
          "id": "0023",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 10?",
          "correct": [
            "8400"
          ],
          "wrong": [
            "768",
            "612",
            "1242",
            "17317",
            "3545"
          ],
          "explain": "Podzielne przez 10: 8400 – bo ostatnia cyfra to 0."
        },
        {
          "id": "0024",
          "q": "Które z podanych liczb są podzielne przez 100?",
          "correct": [
            "9500"
          ],
          "wrong": [
            "2205",
            "764",
            "3545",
            "125",
            "317"
          ],
          "explain": "Podzielne przez 100: 9500 – bo dwie ostatnie cyfry to 00."
        },
        {
          "id": "0025",
          "level": 3,
          "q": "Które z podanych liczb są podzielne przez 100?",
          "correct": [
            "4300"
          ],
          "wrong": [
            "6030",
            "36054",
            "72518",
            "2024",
            "768"
          ],
          "explain": "Podzielne przez 100: 4300 – bo dwie ostatnie cyfry to 00."
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
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 5▢69 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 20. 20 + 1 = 21 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 694▢ była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 19. 19 + 2 = 21 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢62 była podzielna przez 3?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 10. 10 + 8 = 18 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢6 była podzielna przez 3?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 8. 8 + 4 = 12 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 1▢10 była podzielna przez 3?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 2. 2 + 4 = 6 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 92▢8 była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 19. 19 + 2 = 21 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
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
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢29 była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 17. 17 + 7 = 24 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 54▢ była podzielna przez 3?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 9. 9 + 9 = 18 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢03 była podzielna przez 3?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 5. 5 + 4 = 9 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 863▢ była podzielna przez 3?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 17. 17 + 4 = 21 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 7▢32 była podzielna przez 3?",
          "answer": "0",
          "explain": "Suma pozostałych cyfr to 12. 12 + 0 = 12 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 694▢ była podzielna przez 3?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 19. 19 + 5 = 24 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 470▢ była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 77▢ była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 14. 14 + 7 = 21 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 8▢7 była podzielna przez 3?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 15. 15 + 9 = 24 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 47▢ była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 4▢04 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 8. 8 + 1 = 9 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 74▢ była podzielna przez 3?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 11. 11 + 4 = 15 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką środkową (ani najmniejszą, ani największą) cyfrę trzeba wpisać w miejsce ▢, aby liczba 667▢ była podzielna przez 3?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 19. 19 + 5 = 24 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 3▢4 była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 7. 7 + 2 = 9 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 1▢49 była podzielna przez 3?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 14. 14 + 1 = 15 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 95▢9 była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 23. 23 + 7 = 30 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 56▢ była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 11. 11 + 7 = 18 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 8▢31 była podzielna przez 3?",
          "answer": "9",
          "explain": "Suma pozostałych cyfr to 12. 12 + 9 = 21 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 88▢ była podzielna przez 3?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 16. 16 + 2 = 18 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 7▢5 była podzielna przez 3?",
          "answer": "0",
          "explain": "Suma pozostałych cyfr to 12. 12 + 0 = 12 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 1▢9 była podzielna przez 3?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 10. 10 + 8 = 18 dzieli się przez 3. Pasujące cyfry: 2, 5, 8."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką największą cyfrę trzeba wpisać w miejsce ▢, aby liczba 68▢ była podzielna przez 3?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 14. 14 + 7 = 21 dzieli się przez 3. Pasujące cyfry: 1, 4, 7."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 3",
          "q": "Jaką najmniejszą cyfrę trzeba wpisać w miejsce ▢, aby liczba 8▢1 była podzielna przez 3?",
          "answer": "0",
          "explain": "Suma pozostałych cyfr to 9. 9 + 0 = 9 dzieli się przez 3. Pasujące cyfry: 0, 3, 6, 9."
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
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 60▢ była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 6. 6 + 3 = 9 dzieli się przez 9."
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
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 76▢ była podzielna przez 9?",
          "answer": "5",
          "explain": "Suma pozostałych cyfr to 13. 13 + 5 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 19▢7 była podzielna przez 9?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 17. 17 + 1 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 17▢2 była podzielna przez 9?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 10. 10 + 8 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢8 była podzielna przez 9?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 10. 10 + 8 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 10▢1 była podzielna przez 9?",
          "answer": "7",
          "explain": "Suma pozostałych cyfr to 2. 2 + 7 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 2▢6 była podzielna przez 9?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 8. 8 + 1 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 59▢ była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 14. 14 + 4 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 365▢ była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 14. 14 + 4 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 62▢ była podzielna przez 9?",
          "answer": "1",
          "explain": "Suma pozostałych cyfr to 8. 8 + 1 = 9 dzieli się przez 9."
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
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 856▢ była podzielna przez 9?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 19. 19 + 8 = 27 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 165▢ była podzielna przez 9?",
          "answer": "6",
          "explain": "Suma pozostałych cyfr to 12. 12 + 6 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 9▢79 była podzielna przez 9?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 25. 25 + 2 = 27 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 21▢ była podzielna przez 9?",
          "answer": "6",
          "explain": "Suma pozostałych cyfr to 3. 3 + 6 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 6▢18 była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 15. 15 + 3 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 9▢59 była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 23. 23 + 4 = 27 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 69▢ była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 15. 15 + 3 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 43▢ była podzielna przez 9?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 7. 7 + 2 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 59▢9 była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 23. 23 + 4 = 27 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 32▢ była podzielna przez 9?",
          "answer": "4",
          "explain": "Suma pozostałych cyfr to 5. 5 + 4 = 9 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 1▢9 była podzielna przez 9?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 10. 10 + 8 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 523▢ była podzielna przez 9?",
          "answer": "8",
          "explain": "Suma pozostałych cyfr to 10. 10 + 8 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 615▢ była podzielna przez 9?",
          "answer": "6",
          "explain": "Suma pozostałych cyfr to 12. 12 + 6 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 79▢ była podzielna przez 9?",
          "answer": "2",
          "explain": "Suma pozostałych cyfr to 16. 16 + 2 = 18 dzieli się przez 9."
        },
        {
          "type": "number",
          "skill": "Brakująca cyfra – podzielność przez 9",
          "q": "Jaką cyfrę trzeba wpisać w miejsce ▢, aby liczba 15▢ była podzielna przez 9?",
          "answer": "3",
          "explain": "Suma pozostałych cyfr to 6. 6 + 3 = 9 dzieli się przez 9."
        }
      ]
    }
  ]
};
