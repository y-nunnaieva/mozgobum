export default {
  "title": "Kolejność działań",
  "icon": "🧮",
  "sections": [
    {
      "id": "zasady",
      "name": "Zasady",
      "icon": "📏",
      "questions": [
        {
          "id": "0001",
          "level": 1,
          "q": "Które działanie wykonujemy jako pierwsze w wyrażeniu 2 · (3 + 5)?",
          "correct": [
            "Dodawanie w nawiasie"
          ],
          "wrong": [
            "Mnożenie",
            "Obojętnie które",
            "Od lewej – mnożenie"
          ],
          "explain": "Jeśli występują nawiasy, zaczynamy od obliczeń w nawiasach."
        },
        {
          "id": "0002",
          "level": 1,
          "q": "Które działanie wykonujemy jako pierwsze w wyrażeniu 3 + 5 · 2?",
          "correct": [
            "Mnożenie"
          ],
          "wrong": [
            "Dodawanie",
            "Od lewej – dodawanie",
            "Obojętnie które"
          ],
          "explain": "Mnożenie i dzielenie wykonujemy zawsze przed dodawaniem i odejmowaniem: 3 + 10 = 13."
        },
        {
          "id": "0003",
          "level": 1,
          "q": "Jak wykonujemy dodawanie i odejmowanie występujące obok siebie, np. 20 − 3 + 5?",
          "correct": [
            "Od lewej do prawej"
          ],
          "wrong": [
            "Najpierw dodawanie",
            "Najpierw odejmowanie",
            "Od prawej do lewej"
          ],
          "explain": "20 − 3 + 5 = 17 + 5 = 22."
        },
        {
          "id": "0004",
          "level": 1,
          "q": "Jak wykonujemy mnożenie i dzielenie występujące obok siebie, np. 24 : 3 · 2?",
          "correct": [
            "Od lewej do prawej"
          ],
          "wrong": [
            "Najpierw mnożenie",
            "Najpierw dzielenie",
            "Od prawej do lewej"
          ],
          "explain": "24 : 3 · 2 = 8 · 2 = 16."
        },
        {
          "id": "0005",
          "level": 1,
          "q": "Kiedy wykonujemy potęgowanie?",
          "correct": [
            "Przed innymi działaniami"
          ],
          "wrong": [
            "Na samym końcu",
            "Razem z dodawaniem",
            "Od lewej, jak wszystkie działania"
          ],
          "explain": "Potęgowanie wykonujemy przed innymi działaniami: 5² − 2³ = 25 − 8 = 17. Ale po nawiasach."
        },
        {
          "id": "0006",
          "level": 1,
          "q": "W jakiej kolejności wykonujemy działania?",
          "correct": [
            "Nawiasy → potęgi → mnożenie i dzielenie → dodawanie i odejmowanie"
          ],
          "wrong": [
            "Od lewej do prawej, bez wyjątków",
            "Dodawanie → mnożenie → potęgi → nawiasy",
            "Mnożenie → nawiasy → dodawanie → potęgi"
          ],
          "explain": "Najpierw nawiasy, potem potęgi, mnożenie i dzielenie, a na końcu dodawanie i odejmowanie."
        },
        {
          "id": "0007",
          "q": "Kiedy możemy wykonywać działania w dowolnej kolejności?",
          "correct": [
            "Gdy tylko dodajemy kilka liczb",
            "Gdy tylko mnożymy kilka liczb"
          ],
          "wrong": [
            "Gdy tylko odejmujemy",
            "Gdy tylko dzielimy"
          ],
          "explain": "Dodawanie kilku liczb i mnożenie kilku liczb można wykonywać w dowolnej kolejności. Z odejmowaniem i dzieleniem tak nie wolno."
        },
        {
          "id": "0008",
          "level": 1,
          "q": "Ile wynosi 2 · (8 + 5)? Wybierz poprawne sposoby obliczenia.",
          "correct": [
            "2 · 13 = 26",
            "2 · 8 + 2 · 5 = 16 + 10 = 26"
          ],
          "wrong": [
            "2 · 8 + 5 = 21",
            "(2 + 8) · 5 = 50"
          ],
          "explain": "Liczbę mnożymy przez nawias albo przez każdy składnik osobno – wynik ten sam."
        },
        {
          "id": "0009",
          "q": "W którym wyrażeniu jako pierwsze wykonamy odejmowanie?",
          "correct": [
            "48 : (8 − 2)"
          ],
          "wrong": [
            "48 : 8 − 2",
            "20 − 7 · 5",
            "6² − 2"
          ],
          "explain": "Odejmowanie w nawiasie – zawsze najpierw nawias."
        },
        {
          "id": "0010",
          "q": "Które wyrażenie ma wartość 13?",
          "correct": [
            "3 + 5 · 2"
          ],
          "wrong": [
            "(3 + 5) · 2",
            "3 · 5 + 2 · 2",
            "(3 + 5) : 2"
          ],
          "explain": "3 + 5 · 2 = 3 + 10 = 13. (3 + 5) · 2 = 16."
        },
        {
          "id": "0011",
          "q": "Jaki znak zamazano: 23 − (5 ▢ 4) = 22?",
          "correct": [
            "−"
          ],
          "wrong": [
            "+",
            "·",
            ":"
          ],
          "explain": "23 − (5 − 4) = 23 − 1 = 22."
        },
        {
          "id": "0012",
          "q": "Jaki znak zamazano: 7 · 4 ▢ 2 − 1 = 55?",
          "correct": [
            "·"
          ],
          "wrong": [
            "+",
            "−",
            ":"
          ],
          "explain": "7 · 4 · 2 − 1 = 56 − 1 = 55."
        }
      ]
    },
    {
      "id": "typ-1",
      "name": "Dodawanie i odejmowanie od lewej",
      "icon": "➕",
      "questions": [
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 93 − 25 + 20",
          "answer": "88",
          "explain": "Od lewej: 93 − 25 = 68, potem 68 + 20 = 88."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 70 − 21 + 37",
          "answer": "86",
          "explain": "Od lewej: 70 − 21 = 49, potem 49 + 37 = 86."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 57 − 30 − 26",
          "answer": "1",
          "explain": "Od lewej: 57 − 30 = 27, potem 27 − 26 = 1."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 77 − 53 + 11",
          "answer": "35",
          "explain": "Od lewej: 77 − 53 = 24, potem 24 + 11 = 35."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 57 − 7 − 38",
          "answer": "12",
          "explain": "Od lewej: 57 − 7 = 50, potem 50 − 38 = 12."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 91 − 87 + 18",
          "answer": "22",
          "explain": "Od lewej: 91 − 87 = 4, potem 4 + 18 = 22."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 75 − 48 + 4",
          "answer": "31",
          "explain": "Od lewej: 75 − 48 = 27, potem 27 + 4 = 31."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 71 − 55 + 24",
          "answer": "40",
          "explain": "Od lewej: 71 − 55 = 16, potem 16 + 24 = 40."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 90 − 46 − 18",
          "answer": "26",
          "explain": "Od lewej: 90 − 46 = 44, potem 44 − 18 = 26."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 91 − 76 + 40",
          "answer": "55",
          "explain": "Od lewej: 91 − 76 = 15, potem 15 + 40 = 55."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 50 − 28 + 8",
          "answer": "30",
          "explain": "Od lewej: 50 − 28 = 22, potem 22 + 8 = 30."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 87 − 42 − 15",
          "answer": "30",
          "explain": "Od lewej: 87 − 42 = 45, potem 45 − 15 = 30."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 37 − 16 + 4",
          "answer": "25",
          "explain": "Od lewej: 37 − 16 = 21, potem 21 + 4 = 25."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 47 − 20 + 9",
          "answer": "36",
          "explain": "Od lewej: 47 − 20 = 27, potem 27 + 9 = 36."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 39 − 11 − 21",
          "answer": "7",
          "explain": "Od lewej: 39 − 11 = 28, potem 28 − 21 = 7."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 58 − 39 + 21",
          "answer": "40",
          "explain": "Od lewej: 58 − 39 = 19, potem 19 + 21 = 40."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 67 − 54 + 8",
          "answer": "21",
          "explain": "Od lewej: 67 − 54 = 13, potem 13 + 8 = 21."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 78 − 20 + 27",
          "answer": "85",
          "explain": "Od lewej: 78 − 20 = 58, potem 58 + 27 = 85."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 51 − 23 + 2",
          "answer": "30",
          "explain": "Od lewej: 51 − 23 = 28, potem 28 + 2 = 30."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 47 − 25 + 6",
          "answer": "28",
          "explain": "Od lewej: 47 − 25 = 22, potem 22 + 6 = 28."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 57 − 25 − 30",
          "answer": "2",
          "explain": "Od lewej: 57 − 25 = 32, potem 32 − 30 = 2."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 58 − 29 + 2",
          "answer": "31",
          "explain": "Od lewej: 58 − 29 = 29, potem 29 + 2 = 31."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 82 − 23 + 23",
          "answer": "82",
          "explain": "Od lewej: 82 − 23 = 59, potem 59 + 23 = 82."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 71 − 68 + 15",
          "answer": "18",
          "explain": "Od lewej: 71 − 68 = 3, potem 3 + 15 = 18."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 77 − 66 + 2",
          "answer": "13",
          "explain": "Od lewej: 77 − 66 = 11, potem 11 + 2 = 13."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 59 − 51 + 27",
          "answer": "35",
          "explain": "Od lewej: 59 − 51 = 8, potem 8 + 27 = 35."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 93 − 82 + 32",
          "answer": "43",
          "explain": "Od lewej: 93 − 82 = 11, potem 11 + 32 = 43."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 30 − 5 + 14",
          "answer": "39",
          "explain": "Od lewej: 30 − 5 = 25, potem 25 + 14 = 39."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 60 − 7 − 22",
          "answer": "31",
          "explain": "Od lewej: 60 − 7 = 53, potem 53 − 22 = 31."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 57 − 45 + 32",
          "answer": "44",
          "explain": "Od lewej: 57 − 45 = 12, potem 12 + 32 = 44."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 64 − 40 + 12",
          "answer": "36",
          "explain": "Od lewej: 64 − 40 = 24, potem 24 + 12 = 36."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 62 − 46 − 16",
          "answer": "0",
          "explain": "Od lewej: 62 − 46 = 16, potem 16 − 16 = 0."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 62 − 12 + 9",
          "answer": "59",
          "explain": "Od lewej: 62 − 12 = 50, potem 50 + 9 = 59."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 69 − 20 − 36",
          "answer": "13",
          "explain": "Od lewej: 69 − 20 = 49, potem 49 − 36 = 13."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 78 − 9 − 4",
          "answer": "65",
          "explain": "Od lewej: 78 − 9 = 69, potem 69 − 4 = 65."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 83 − 28 − 9",
          "answer": "46",
          "explain": "Od lewej: 83 − 28 = 55, potem 55 − 9 = 46."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 50 − 42 + 27",
          "answer": "35",
          "explain": "Od lewej: 50 − 42 = 8, potem 8 + 27 = 35."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 72 − 49 − 3",
          "answer": "20",
          "explain": "Od lewej: 72 − 49 = 23, potem 23 − 3 = 20."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 30 − 13 − 3",
          "answer": "14",
          "explain": "Od lewej: 30 − 13 = 17, potem 17 − 3 = 14."
        },
        {
          "type": "number",
          "skill": "Dodawanie i odejmowanie od lewej",
          "q": "Oblicz: 98 − 53 + 4",
          "answer": "49",
          "explain": "Od lewej: 98 − 53 = 45, potem 45 + 4 = 49."
        }
      ]
    },
    {
      "id": "typ-2",
      "name": "Mnożenie i dzielenie od lewej",
      "icon": "➗",
      "questions": [
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 36 : 4 · 2",
          "answer": "18",
          "explain": "Od lewej: 36 : 4 = 9, potem 9 · 2 = 18."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 35 : 5 · 4",
          "answer": "28",
          "explain": "Od lewej: 35 : 5 = 7, potem 7 · 4 = 28."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 48 · 3 : 6",
          "answer": "24",
          "explain": "Od lewej: 48 · 3 = 144, potem 144 : 6 = 24."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 45 : 5 · 5",
          "answer": "45",
          "explain": "Od lewej: 45 : 5 = 9, potem 9 · 5 = 45."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 36 : 6 · 7",
          "answer": "42",
          "explain": "Od lewej: 36 : 6 = 6, potem 6 · 7 = 42."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 18 : 6 · 3",
          "answer": "9",
          "explain": "Od lewej: 18 : 6 = 3, potem 3 · 3 = 9."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 15 : 5 · 2",
          "answer": "6",
          "explain": "Od lewej: 15 : 5 = 3, potem 3 · 2 = 6."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 49 · 7 : 7",
          "answer": "49",
          "explain": "Od lewej: 49 · 7 = 343, potem 343 : 7 = 49."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 18 : 3 · 3",
          "answer": "18",
          "explain": "Od lewej: 18 : 3 = 6, potem 6 · 3 = 18."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 40 : 5 · 4",
          "answer": "32",
          "explain": "Od lewej: 40 : 5 = 8, potem 8 · 4 = 32."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 15 · 9 : 5",
          "answer": "27",
          "explain": "Od lewej: 15 · 9 = 135, potem 135 : 5 = 27."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 18 · 2 : 3",
          "answer": "12",
          "explain": "Od lewej: 18 · 2 = 36, potem 36 : 3 = 12."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 36 : 6 · 9",
          "answer": "54",
          "explain": "Od lewej: 36 : 6 = 6, potem 6 · 9 = 54."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 10 · 2 : 2",
          "answer": "10",
          "explain": "Od lewej: 10 · 2 = 20, potem 20 : 2 = 10."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 28 · 4 : 7",
          "answer": "16",
          "explain": "Od lewej: 28 · 4 = 112, potem 112 : 7 = 16."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 40 · 8 : 5",
          "answer": "64",
          "explain": "Od lewej: 40 · 8 = 320, potem 320 : 5 = 64."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 72 · 3 : 9",
          "answer": "24",
          "explain": "Od lewej: 72 · 3 = 216, potem 216 : 9 = 24."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 49 : 7 · 2",
          "answer": "14",
          "explain": "Od lewej: 49 : 7 = 7, potem 7 · 2 = 14."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 10 : 2 · 3",
          "answer": "15",
          "explain": "Od lewej: 10 : 2 = 5, potem 5 · 3 = 15."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 24 · 6 : 8",
          "answer": "18",
          "explain": "Od lewej: 24 · 6 = 144, potem 144 : 8 = 18."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 56 · 8 : 8",
          "answer": "56",
          "explain": "Od lewej: 56 · 8 = 448, potem 448 : 8 = 56."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 32 : 4 · 7",
          "answer": "56",
          "explain": "Od lewej: 32 : 4 = 8, potem 8 · 7 = 56."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 72 · 9 : 8",
          "answer": "81",
          "explain": "Od lewej: 72 · 9 = 648, potem 648 : 8 = 81."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 16 : 4 · 2",
          "answer": "8",
          "explain": "Od lewej: 16 : 4 = 4, potem 4 · 2 = 8."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 14 : 7 · 3",
          "answer": "6",
          "explain": "Od lewej: 14 : 7 = 2, potem 2 · 3 = 6."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 72 : 8 · 7",
          "answer": "63",
          "explain": "Od lewej: 72 : 8 = 9, potem 9 · 7 = 63."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 25 : 5 · 3",
          "answer": "15",
          "explain": "Od lewej: 25 : 5 = 5, potem 5 · 3 = 15."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 32 : 4 · 8",
          "answer": "64",
          "explain": "Od lewej: 32 : 4 = 8, potem 8 · 8 = 64."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 42 : 6 · 9",
          "answer": "63",
          "explain": "Od lewej: 42 : 6 = 7, potem 7 · 9 = 63."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 72 : 8 · 4",
          "answer": "36",
          "explain": "Od lewej: 72 : 8 = 9, potem 9 · 4 = 36."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 30 · 2 : 5",
          "answer": "12",
          "explain": "Od lewej: 30 · 2 = 60, potem 60 : 5 = 12."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 20 : 4 · 7",
          "answer": "35",
          "explain": "Od lewej: 20 : 4 = 5, potem 5 · 7 = 35."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 8 : 4 · 3",
          "answer": "6",
          "explain": "Od lewej: 8 : 4 = 2, potem 2 · 3 = 6."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 20 : 4 · 8",
          "answer": "40",
          "explain": "Od lewej: 20 : 4 = 5, potem 5 · 8 = 40."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 18 : 2 · 9",
          "answer": "81",
          "explain": "Od lewej: 18 : 2 = 9, potem 9 · 9 = 81."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 35 · 9 : 7",
          "answer": "45",
          "explain": "Od lewej: 35 · 9 = 315, potem 315 : 7 = 45."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 42 · 3 : 7",
          "answer": "18",
          "explain": "Od lewej: 42 · 3 = 126, potem 126 : 7 = 18."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 54 · 9 : 6",
          "answer": "81",
          "explain": "Od lewej: 54 · 9 = 486, potem 486 : 6 = 81."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 24 · 3 : 3",
          "answer": "24",
          "explain": "Od lewej: 24 · 3 = 72, potem 72 : 3 = 24."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie od lewej",
          "q": "Oblicz: 63 : 9 · 8",
          "answer": "56",
          "explain": "Od lewej: 63 : 9 = 7, potem 7 · 8 = 56."
        }
      ]
    },
    {
      "id": "typ-3",
      "name": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
      "icon": "✖️",
      "questions": [
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 19 + 4 · 7",
          "answer": "47",
          "explain": "Najpierw mnożenie: 4 · 7 = 28, potem 19 + 28 = 47."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 8 · 14 − 8 · 6",
          "answer": "64",
          "explain": "Najpierw mnożenia: 112 i 48, potem odejmowanie: 64."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 84 + 64 : 8",
          "answer": "92",
          "explain": "Najpierw dzielenie: 64 : 8 = 8, potem 84 + 8 = 92."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 88 − 3 · 4",
          "answer": "76",
          "explain": "Najpierw mnożenie: 3 · 4 = 12, potem 88 − 12 = 76."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 10 + 5 · 9",
          "answer": "55",
          "explain": "Najpierw mnożenie: 5 · 9 = 45, potem 10 + 45 = 55."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 48 + 6 : 2",
          "answer": "51",
          "explain": "Najpierw dzielenie: 6 : 2 = 3, potem 48 + 3 = 51."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 4 · 3 + 5 · 8",
          "answer": "52",
          "explain": "Najpierw mnożenia: 12 i 40, potem 12 + 40 = 52."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 2 · 2 + 6 · 9",
          "answer": "58",
          "explain": "Najpierw mnożenia: 4 i 54, potem 4 + 54 = 58."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 5 · 4 + 2 · 3",
          "answer": "26",
          "explain": "Najpierw mnożenia: 20 i 6, potem 20 + 6 = 26."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 6 · 6 − 3 · 2",
          "answer": "30",
          "explain": "Najpierw mnożenia: 36 i 6, potem odejmowanie: 30."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 77 − 7 · 7",
          "answer": "28",
          "explain": "Najpierw mnożenie: 7 · 7 = 49, potem 77 − 49 = 28."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 86 − 5 · 5",
          "answer": "61",
          "explain": "Najpierw mnożenie: 5 · 5 = 25, potem 86 − 25 = 61."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 2 · 8 + 7 · 6",
          "answer": "58",
          "explain": "Najpierw mnożenia: 16 i 42, potem 16 + 42 = 58."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 80 + 18 : 9",
          "answer": "82",
          "explain": "Najpierw dzielenie: 18 : 9 = 2, potem 80 + 2 = 82."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 37 − 4 · 5",
          "answer": "17",
          "explain": "Najpierw mnożenie: 4 · 5 = 20, potem 37 − 20 = 17."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 7 · 8 + 6 · 3",
          "answer": "74",
          "explain": "Najpierw mnożenia: 56 i 18, potem 56 + 18 = 74."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 87 + 36 : 6",
          "answer": "93",
          "explain": "Najpierw dzielenie: 36 : 6 = 6, potem 87 + 6 = 93."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 62 + 3 · 5",
          "answer": "77",
          "explain": "Najpierw mnożenie: 3 · 5 = 15, potem 62 + 15 = 77."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 64 − 5 · 4",
          "answer": "44",
          "explain": "Najpierw mnożenie: 5 · 4 = 20, potem 64 − 20 = 44."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 33 + 27 : 9",
          "answer": "36",
          "explain": "Najpierw dzielenie: 27 : 9 = 3, potem 33 + 3 = 36."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 6 · 8 − 2 · 4",
          "answer": "40",
          "explain": "Najpierw mnożenia: 48 i 8, potem odejmowanie: 40."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 75 − 3 · 8",
          "answer": "51",
          "explain": "Najpierw mnożenie: 3 · 8 = 24, potem 75 − 24 = 51."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 9 · 9 − 7 · 7",
          "answer": "32",
          "explain": "Najpierw mnożenia: 81 i 49, potem odejmowanie: 32."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 83 + 3 · 4",
          "answer": "95",
          "explain": "Najpierw mnożenie: 3 · 4 = 12, potem 83 + 12 = 95."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 86 + 15 : 3",
          "answer": "91",
          "explain": "Najpierw dzielenie: 15 : 3 = 5, potem 86 + 5 = 91."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 48 + 5 · 6",
          "answer": "78",
          "explain": "Najpierw mnożenie: 5 · 6 = 30, potem 48 + 30 = 78."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 37 + 72 : 9",
          "answer": "45",
          "explain": "Najpierw dzielenie: 72 : 9 = 8, potem 37 + 8 = 45."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 7 · 10 − 2 · 4",
          "answer": "62",
          "explain": "Najpierw mnożenia: 70 i 8, potem odejmowanie: 62."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 66 + 9 : 3",
          "answer": "69",
          "explain": "Najpierw dzielenie: 9 : 3 = 3, potem 66 + 3 = 69."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 91 − 5 · 3",
          "answer": "76",
          "explain": "Najpierw mnożenie: 5 · 3 = 15, potem 91 − 15 = 76."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 3 · 9 − 2 · 4",
          "answer": "19",
          "explain": "Najpierw mnożenia: 27 i 8, potem odejmowanie: 19."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 8 · 7 + 7 · 8",
          "answer": "112",
          "explain": "Najpierw mnożenia: 56 i 56, potem 56 + 56 = 112."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 3 · 9 + 9 · 3",
          "answer": "54",
          "explain": "Najpierw mnożenia: 27 i 27, potem 27 + 27 = 54."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 84 + 30 : 6",
          "answer": "89",
          "explain": "Najpierw dzielenie: 30 : 6 = 5, potem 84 + 5 = 89."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 5 · 5 + 6 · 9",
          "answer": "79",
          "explain": "Najpierw mnożenia: 25 i 54, potem 25 + 54 = 79."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 67 + 5 · 6",
          "answer": "97",
          "explain": "Najpierw mnożenie: 5 · 6 = 30, potem 67 + 30 = 97."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 35 − 5 · 2",
          "answer": "25",
          "explain": "Najpierw mnożenie: 5 · 2 = 10, potem 35 − 10 = 25."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 4 · 4 + 2 · 2",
          "answer": "20",
          "explain": "Najpierw mnożenia: 16 i 4, potem 16 + 4 = 20."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 37 + 2 · 7",
          "answer": "51",
          "explain": "Najpierw mnożenie: 2 · 7 = 14, potem 37 + 14 = 51."
        },
        {
          "type": "number",
          "skill": "Mnożenie i dzielenie przed dodawaniem i odejmowaniem",
          "q": "Oblicz: 4 · 5 + 2 · 7",
          "answer": "34",
          "explain": "Najpierw mnożenia: 20 i 14, potem 20 + 14 = 34."
        }
      ]
    },
    {
      "id": "typ-4",
      "name": "Nawiasy",
      "icon": "🔲",
      "questions": [
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 3 · (17 + 11)",
          "answer": "84",
          "explain": "Najpierw nawias: 17 + 11 = 28, potem 3 · 28 = 84."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 140 − 9 · (19 − 16)",
          "answer": "113",
          "explain": "Najpierw nawias: 19 − 16 = 3, potem 9 · 3 = 27, na końcu 140 − 27 = 113."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 4 · (14 + 17)",
          "answer": "124",
          "explain": "Najpierw nawias: 14 + 17 = 31, potem 4 · 31 = 124."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 5 · (13 + 17)",
          "answer": "150",
          "explain": "Najpierw nawias: 13 + 17 = 30, potem 5 · 30 = 150."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: (40 − 20) : 5",
          "answer": "4",
          "explain": "Najpierw nawias: 40 − 20 = 20, potem 20 : 5 = 4."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 70 − 2 · (11 − 8)",
          "answer": "64",
          "explain": "Najpierw nawias: 11 − 8 = 3, potem 2 · 3 = 6, na końcu 70 − 6 = 64."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 140 − 9 · (15 − 12)",
          "answer": "113",
          "explain": "Najpierw nawias: 15 − 12 = 3, potem 9 · 3 = 27, na końcu 140 − 27 = 113."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 2 · (18 + 10) − 15 : 3",
          "answer": "51",
          "explain": "Nawias: 28. Potem 2 · 28 = 56 i 15 : 3 = 5. Na końcu 56 − 5 = 51."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 140 − 9 · (12 − 9)",
          "answer": "113",
          "explain": "Najpierw nawias: 12 − 9 = 3, potem 9 · 3 = 27, na końcu 140 − 27 = 113."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 5 · (13 + 3) − 54 : 6",
          "answer": "71",
          "explain": "Nawias: 16. Potem 5 · 16 = 80 i 54 : 6 = 9. Na końcu 80 − 9 = 71."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: (53 − 8) : 5",
          "answer": "9",
          "explain": "Najpierw nawias: 53 − 8 = 45, potem 45 : 5 = 9."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 90 − 4 · (18 − 15)",
          "answer": "78",
          "explain": "Najpierw nawias: 18 − 15 = 3, potem 4 · 3 = 12, na końcu 90 − 12 = 78."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 4 · (4 + 6)",
          "answer": "40",
          "explain": "Najpierw nawias: 4 + 6 = 10, potem 4 · 10 = 40."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 6 · (3 + 3) − 16 : 4",
          "answer": "32",
          "explain": "Nawias: 6. Potem 6 · 6 = 36 i 16 : 4 = 4. Na końcu 36 − 4 = 32."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 3 · (3 + 9)",
          "answer": "36",
          "explain": "Najpierw nawias: 3 + 9 = 12, potem 3 · 12 = 36."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: (60 − 12) : 6",
          "answer": "8",
          "explain": "Najpierw nawias: 60 − 12 = 48, potem 48 : 6 = 8."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 3 · (4 + 4) − 40 : 5",
          "answer": "16",
          "explain": "Nawias: 8. Potem 3 · 8 = 24 i 40 : 5 = 8. Na końcu 24 − 8 = 16."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 6 · (12 + 20)",
          "answer": "192",
          "explain": "Najpierw nawias: 12 + 20 = 32, potem 6 · 32 = 192."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 8 · (8 + 8)",
          "answer": "128",
          "explain": "Najpierw nawias: 8 + 8 = 16, potem 8 · 16 = 128."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 6 · (9 + 15) − 49 : 7",
          "answer": "137",
          "explain": "Nawias: 24. Potem 6 · 24 = 144 i 49 : 7 = 7. Na końcu 144 − 7 = 137."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 7 · (10 + 15)",
          "answer": "175",
          "explain": "Najpierw nawias: 10 + 15 = 25, potem 7 · 25 = 175."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 120 − 7 · (5 − 2)",
          "answer": "99",
          "explain": "Najpierw nawias: 5 − 2 = 3, potem 7 · 3 = 21, na końcu 120 − 21 = 99."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 5 · (8 + 14)",
          "answer": "110",
          "explain": "Najpierw nawias: 8 + 14 = 22, potem 5 · 22 = 110."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 7 · (11 + 4)",
          "answer": "105",
          "explain": "Najpierw nawias: 11 + 4 = 15, potem 7 · 15 = 105."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 70 − 2 · (12 − 9)",
          "answer": "64",
          "explain": "Najpierw nawias: 12 − 9 = 3, potem 2 · 3 = 6, na końcu 70 − 6 = 64."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 3 · (3 + 7)",
          "answer": "30",
          "explain": "Najpierw nawias: 3 + 7 = 10, potem 3 · 10 = 30."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 5 · (9 + 13) − 40 : 5",
          "answer": "102",
          "explain": "Nawias: 22. Potem 5 · 22 = 110 i 40 : 5 = 8. Na końcu 110 − 8 = 102."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 80 − 3 · (7 − 4)",
          "answer": "71",
          "explain": "Najpierw nawias: 7 − 4 = 3, potem 3 · 3 = 9, na końcu 80 − 9 = 71."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 9 · (10 + 5)",
          "answer": "135",
          "explain": "Najpierw nawias: 10 + 5 = 15, potem 9 · 15 = 135."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 100 − 5 · (18 − 15)",
          "answer": "85",
          "explain": "Najpierw nawias: 18 − 15 = 3, potem 5 · 3 = 15, na końcu 100 − 15 = 85."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 9 · (8 + 14) − 27 : 3",
          "answer": "189",
          "explain": "Nawias: 22. Potem 9 · 22 = 198 i 27 : 3 = 9. Na końcu 198 − 9 = 189."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 3 · (12 + 6)",
          "answer": "54",
          "explain": "Najpierw nawias: 12 + 6 = 18, potem 3 · 18 = 54."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 2 · (13 + 3)",
          "answer": "32",
          "explain": "Najpierw nawias: 13 + 3 = 16, potem 2 · 16 = 32."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 5 · (2 + 15) − 56 : 8",
          "answer": "78",
          "explain": "Nawias: 17. Potem 5 · 17 = 85 i 56 : 8 = 7. Na końcu 85 − 7 = 78."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: (19 − 11) : 2",
          "answer": "4",
          "explain": "Najpierw nawias: 19 − 11 = 8, potem 8 : 2 = 4."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 9 · (12 + 14)",
          "answer": "234",
          "explain": "Najpierw nawias: 12 + 14 = 26, potem 9 · 26 = 234."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 4 · (14 + 3)",
          "answer": "68",
          "explain": "Najpierw nawias: 14 + 3 = 17, potem 4 · 17 = 68."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 4 · (4 + 7)",
          "answer": "44",
          "explain": "Najpierw nawias: 4 + 7 = 11, potem 4 · 11 = 44."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 90 − 4 · (22 − 19)",
          "answer": "78",
          "explain": "Najpierw nawias: 22 − 19 = 3, potem 4 · 3 = 12, na końcu 90 − 12 = 78."
        },
        {
          "type": "number",
          "skill": "Nawiasy",
          "q": "Oblicz: 4 · (2 + 12) − 48 : 6",
          "answer": "48",
          "explain": "Nawias: 14. Potem 4 · 14 = 56 i 48 : 6 = 8. Na końcu 56 − 8 = 48."
        }
      ]
    },
    {
      "id": "typ-5",
      "name": "Potęgi",
      "icon": "🔺",
      "questions": [
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 72 : 2³",
          "answer": "9",
          "explain": "Najpierw potęga: 2³ = 8, potem 72 : 8 = 9."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 8² + 2 · 3",
          "answer": "70",
          "explain": "Najpierw potęga: 8² = 64, potem mnożenie: 2 · 3 = 6, na końcu 70."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 200 : 5²",
          "answer": "8",
          "explain": "Najpierw potęga: 5² = 25, potem 200 : 25 = 8."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 8² + 5 · 2",
          "answer": "74",
          "explain": "Najpierw potęga: 8² = 64, potem mnożenie: 5 · 2 = 10, na końcu 74."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (2 + 2)²",
          "answer": "16",
          "explain": "Najpierw nawias: 4, potem 4² = 16."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (2 + 5)²",
          "answer": "49",
          "explain": "Najpierw nawias: 7, potem 7² = 49."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (4 + 4)²",
          "answer": "64",
          "explain": "Najpierw nawias: 8, potem 8² = 64."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 24 : 2²",
          "answer": "6",
          "explain": "Najpierw potęga: 2² = 4, potem 24 : 4 = 6."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 8² − 2²",
          "answer": "60",
          "explain": "Najpierw potęgi: 64 i 4, potem 64 − 4 = 60."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (6 + 5)²",
          "answer": "121",
          "explain": "Najpierw nawias: 11, potem 11² = 121."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 1000 : 5³",
          "answer": "8",
          "explain": "Najpierw potęga: 5³ = 125, potem 1000 : 125 = 8."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 576 : 4³",
          "answer": "9",
          "explain": "Najpierw potęga: 4³ = 64, potem 576 : 64 = 9."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 7² + 2 · 3",
          "answer": "55",
          "explain": "Najpierw potęga: 7² = 49, potem mnożenie: 2 · 3 = 6, na końcu 55."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 162 : 3³",
          "answer": "6",
          "explain": "Najpierw potęga: 3³ = 27, potem 162 : 27 = 6."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (5 + 2)²",
          "answer": "49",
          "explain": "Najpierw nawias: 7, potem 7² = 49."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 4² − 4²",
          "answer": "0",
          "explain": "Najpierw potęgi: 16 i 16, potem 16 − 16 = 0."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 4² + 9 · 2",
          "answer": "34",
          "explain": "Najpierw potęga: 4² = 16, potem mnożenie: 9 · 2 = 18, na końcu 34."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 20 : 2²",
          "answer": "5",
          "explain": "Najpierw potęga: 2² = 4, potem 20 : 4 = 5."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (9 + 4)²",
          "answer": "169",
          "explain": "Najpierw nawias: 13, potem 13² = 169."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (8 + 5)²",
          "answer": "169",
          "explain": "Najpierw nawias: 13, potem 13² = 169."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 100 : 5²",
          "answer": "4",
          "explain": "Najpierw potęga: 5² = 25, potem 100 : 25 = 4."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 8³ + 8 · 2",
          "answer": "528",
          "explain": "Najpierw potęga: 8³ = 512, potem mnożenie: 8 · 2 = 16, na końcu 528."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 4² + 6 · 2",
          "answer": "28",
          "explain": "Najpierw potęga: 4² = 16, potem mnożenie: 6 · 2 = 12, na końcu 28."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 320 : 4³",
          "answer": "5",
          "explain": "Najpierw potęga: 4³ = 64, potem 320 : 64 = 5."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 5² − 5²",
          "answer": "0",
          "explain": "Najpierw potęgi: 25 i 25, potem 25 − 25 = 0."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 3² − 2³",
          "answer": "1",
          "explain": "Najpierw potęgi: 9 i 8, potem 9 − 8 = 1."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 8³ + 2 · 5",
          "answer": "522",
          "explain": "Najpierw potęga: 8³ = 512, potem mnożenie: 2 · 5 = 10, na końcu 522."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 4² + 6 · 4",
          "answer": "40",
          "explain": "Najpierw potęga: 4² = 16, potem mnożenie: 6 · 4 = 24, na końcu 40."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (8 + 3)²",
          "answer": "121",
          "explain": "Najpierw nawias: 11, potem 11² = 121."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 45 : 3²",
          "answer": "5",
          "explain": "Najpierw potęga: 3² = 9, potem 45 : 9 = 5."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 3³ + 9 · 2",
          "answer": "45",
          "explain": "Najpierw potęga: 3³ = 27, potem mnożenie: 9 · 2 = 18, na końcu 45."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 6² − 3³",
          "answer": "9",
          "explain": "Najpierw potęgi: 36 i 27, potem 36 − 27 = 9."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 6³ + 2 · 2",
          "answer": "220",
          "explain": "Najpierw potęga: 6³ = 216, potem mnożenie: 2 · 2 = 4, na końcu 220."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (7 + 4)²",
          "answer": "121",
          "explain": "Najpierw nawias: 11, potem 11² = 121."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 6² − 5²",
          "answer": "11",
          "explain": "Najpierw potęgi: 36 i 25, potem 36 − 25 = 11."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: (7 + 3)²",
          "answer": "100",
          "explain": "Najpierw nawias: 10, potem 10² = 100."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 2² + 4 · 2",
          "answer": "12",
          "explain": "Najpierw potęga: 2² = 4, potem mnożenie: 4 · 2 = 8, na końcu 12."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 6² − 3²",
          "answer": "27",
          "explain": "Najpierw potęgi: 36 i 9, potem 36 − 9 = 27."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 3³ − 3²",
          "answer": "18",
          "explain": "Najpierw potęgi: 27 i 9, potem 27 − 9 = 18."
        },
        {
          "type": "number",
          "skill": "Potęgi",
          "q": "Oblicz: 250 : 5³",
          "answer": "2",
          "explain": "Najpierw potęga: 5³ = 125, potem 250 : 125 = 2."
        }
      ]
    },
    {
      "id": "typ-6",
      "name": "Brakująca liczba",
      "icon": "🔍",
      "questions": [
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 2 + 17 = 26",
          "answer": "18",
          "explain": "▢ : 2 = 9, więc ▢ = 9 · 2 = 18."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 7 · ▢ − 16 = 26",
          "answer": "6",
          "explain": "26 + 16 = 42, a 42 : 7 = 6."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 3 · ▢ − 16 = 8",
          "answer": "8",
          "explain": "8 + 16 = 24, a 24 : 3 = 8."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 8 + 18 = 21",
          "answer": "24",
          "explain": "▢ : 8 = 3, więc ▢ = 3 · 8 = 24."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 5 · ▢ + 13 = 58",
          "answer": "9",
          "explain": "58 − 13 = 45, a 45 : 5 = 9."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 4 · ▢ − 6 = 22",
          "answer": "7",
          "explain": "22 + 6 = 28, a 28 : 4 = 7."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 9 + 7 = 11",
          "answer": "36",
          "explain": "▢ : 9 = 4, więc ▢ = 4 · 9 = 36."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 6 + 3 = 8",
          "answer": "30",
          "explain": "▢ : 6 = 5, więc ▢ = 5 · 6 = 30."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 3 · ▢ − 9 = 12",
          "answer": "7",
          "explain": "12 + 9 = 21, a 21 : 3 = 7."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 8 · ▢ + 14 = 54",
          "answer": "5",
          "explain": "54 − 14 = 40, a 40 : 8 = 5."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 4 + 14 = 21",
          "answer": "28",
          "explain": "▢ : 4 = 7, więc ▢ = 7 · 4 = 28."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 2 + 6 = 15",
          "answer": "18",
          "explain": "▢ : 2 = 9, więc ▢ = 9 · 2 = 18."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 5 · ▢ − 7 = 8",
          "answer": "3",
          "explain": "8 + 7 = 15, a 15 : 5 = 3."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 9 + 1 = 10",
          "answer": "81",
          "explain": "▢ : 9 = 9, więc ▢ = 9 · 9 = 81."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 3 · ▢ + 17 = 41",
          "answer": "8",
          "explain": "41 − 17 = 24, a 24 : 3 = 8."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 2 · ▢ − 5 = 7",
          "answer": "6",
          "explain": "7 + 5 = 12, a 12 : 2 = 6."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 7 · ▢ − 1 = 34",
          "answer": "5",
          "explain": "34 + 1 = 35, a 35 : 7 = 5."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 3 + 1 = 8",
          "answer": "21",
          "explain": "▢ : 3 = 7, więc ▢ = 7 · 3 = 21."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 4 + 23 = 31",
          "answer": "32",
          "explain": "▢ : 4 = 8, więc ▢ = 8 · 4 = 32."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 5 · ▢ + 7 = 22",
          "answer": "3",
          "explain": "22 − 7 = 15, a 15 : 5 = 3."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 9 · ▢ + 6 = 33",
          "answer": "3",
          "explain": "33 − 6 = 27, a 27 : 9 = 3."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 8 · ▢ − 3 = 37",
          "answer": "5",
          "explain": "37 + 3 = 40, a 40 : 8 = 5."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 7 + 3 = 9",
          "answer": "42",
          "explain": "▢ : 7 = 6, więc ▢ = 6 · 7 = 42."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 3 · ▢ + 1 = 28",
          "answer": "9",
          "explain": "28 − 1 = 27, a 27 : 3 = 9."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? ▢ : 3 + 8 = 15",
          "answer": "21",
          "explain": "▢ : 3 = 7, więc ▢ = 7 · 3 = 21."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 7 · ▢ + 5 = 19",
          "answer": "2",
          "explain": "19 − 5 = 14, a 14 : 7 = 2."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 5 · ▢ + 22 = 47",
          "answer": "5",
          "explain": "47 − 22 = 25, a 25 : 5 = 5."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 2 · ▢ − 10 = 2",
          "answer": "6",
          "explain": "2 + 10 = 12, a 12 : 2 = 6."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 8 · ▢ − 5 = 67",
          "answer": "9",
          "explain": "67 + 5 = 72, a 72 : 8 = 9."
        },
        {
          "type": "number",
          "skill": "Brakująca liczba",
          "q": "Jaką liczbę trzeba wpisać w miejsce ▢? 7 · ▢ − 8 = 41",
          "answer": "7",
          "explain": "41 + 8 = 49, a 49 : 7 = 7."
        }
      ]
    },
    {
      "id": "typ-7",
      "name": "Wyrażenie ze słów",
      "icon": "💬",
      "questions": [
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 7 większa od ilorazu liczby 24 przez 6?",
          "answer": "11",
          "explain": "24 : 6 + 7 = 4 + 7 = 11."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 3 większa od ilorazu liczby 24 przez 6?",
          "answer": "7",
          "explain": "24 : 6 + 3 = 4 + 3 = 7."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 6 razy większa od różnicy liczb 45 i 42?",
          "answer": "18",
          "explain": "6 · (45 − 42) = 6 · 3 = 18."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 3 razy większa od różnicy liczb 40 i 29?",
          "answer": "33",
          "explain": "3 · (40 − 29) = 3 · 11 = 33."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 5 mniejsza od iloczynu liczb 11 i 4?",
          "answer": "39",
          "explain": "11 · 4 − 5 = 44 − 5 = 39."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 6 mniejsza od iloczynu liczb 11 i 8?",
          "answer": "82",
          "explain": "11 · 8 − 6 = 88 − 6 = 82."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 16 większa od ilorazu liczby 24 przez 4?",
          "answer": "22",
          "explain": "24 : 4 + 16 = 6 + 16 = 22."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 4 razy większa od różnicy liczb 53 i 13?",
          "answer": "160",
          "explain": "4 · (53 − 13) = 4 · 40 = 160."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 20 większa od ilorazu liczby 18 przez 3?",
          "answer": "26",
          "explain": "18 : 3 + 20 = 6 + 20 = 26."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 13 większa od ilorazu liczby 20 przez 5?",
          "answer": "17",
          "explain": "20 : 5 + 13 = 4 + 13 = 17."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 14 większa od ilorazu liczby 9 przez 3?",
          "answer": "17",
          "explain": "9 : 3 + 14 = 3 + 14 = 17."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 8 razy większa od różnicy liczb 48 i 24?",
          "answer": "192",
          "explain": "8 · (48 − 24) = 8 · 24 = 192."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 6 mniejsza od iloczynu liczb 9 i 7?",
          "answer": "57",
          "explain": "9 · 7 − 6 = 63 − 6 = 57."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 7 razy większa od różnicy liczb 34 i 18?",
          "answer": "112",
          "explain": "7 · (34 − 18) = 7 · 16 = 112."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 4 większa od ilorazu liczby 72 przez 9?",
          "answer": "12",
          "explain": "72 : 9 + 4 = 8 + 4 = 12."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 2 razy większa od różnicy liczb 60 i 55?",
          "answer": "10",
          "explain": "2 · (60 − 55) = 2 · 5 = 10."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 5 mniejsza od iloczynu liczb 9 i 3?",
          "answer": "22",
          "explain": "9 · 3 − 5 = 27 − 5 = 22."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 9 razy większa od różnicy liczb 21 i 16?",
          "answer": "45",
          "explain": "9 · (21 − 16) = 9 · 5 = 45."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 4 większa od ilorazu liczby 20 przez 5?",
          "answer": "8",
          "explain": "20 : 5 + 4 = 4 + 4 = 8."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 19 większa od ilorazu liczby 54 przez 9?",
          "answer": "25",
          "explain": "54 : 9 + 19 = 6 + 19 = 25."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 6 razy większa od różnicy liczb 35 i 10?",
          "answer": "150",
          "explain": "6 · (35 − 10) = 6 · 25 = 150."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 16 większa od ilorazu liczby 9 przez 3?",
          "answer": "19",
          "explain": "9 : 3 + 16 = 3 + 16 = 19."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 7 większa od ilorazu liczby 12 przez 3?",
          "answer": "11",
          "explain": "12 : 3 + 7 = 4 + 7 = 11."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 3 razy większa od różnicy liczb 36 i 22?",
          "answer": "42",
          "explain": "3 · (36 − 22) = 3 · 14 = 42."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 13 większa od ilorazu liczby 24 przez 4?",
          "answer": "19",
          "explain": "24 : 4 + 13 = 6 + 13 = 19."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest 9 razy większa od różnicy liczb 53 i 14?",
          "answer": "351",
          "explain": "9 · (53 − 14) = 9 · 39 = 351."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 16 większa od ilorazu liczby 72 przez 8?",
          "answer": "25",
          "explain": "72 : 8 + 16 = 9 + 16 = 25."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 5 mniejsza od iloczynu liczb 10 i 6?",
          "answer": "55",
          "explain": "10 · 6 − 5 = 60 − 5 = 55."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 18 większa od ilorazu liczby 9 przez 3?",
          "answer": "21",
          "explain": "9 : 3 + 18 = 3 + 18 = 21."
        },
        {
          "type": "number",
          "skill": "Wyrażenie ze słów",
          "q": "Jaka liczba jest o 17 większa od ilorazu liczby 49 przez 7?",
          "answer": "24",
          "explain": "49 : 7 + 17 = 7 + 17 = 24."
        }
      ]
    }
  ]
};
