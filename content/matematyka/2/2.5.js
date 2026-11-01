export default {
  "title": "Rozkład na czynniki pierwsze",
  "icon": "🌧️",
  "sections": [
    {
      "id": "pojecie",
      "name": "Na czym polega",
      "icon": "📖",
      "questions": [
        {
          "id": "0001",
          "level": 1,
          "q": "Co to znaczy rozłożyć liczbę na czynniki pierwsze?",
          "correct": [
            "Przedstawić ją jako iloczyn liczb pierwszych"
          ],
          "wrong": [
            "Przedstawić ją jako sumę liczb pierwszych",
            "Wypisać jej wszystkie dzielniki",
            "Podzielić ją przez 2"
          ],
          "explain": "Każdą liczbę złożoną można przedstawić w postaci iloczynu liczb pierwszych, np. 78 = 2 · 3 · 13."
        },
        {
          "id": "0002",
          "level": 1,
          "q": "Jak zapisać rozkład 100 = 2 · 2 · 5 · 5 za pomocą potęg?",
          "correct": [
            "100 = 2² · 5²"
          ],
          "wrong": [
            "100 = 2 · 5²",
            "100 = 4 · 25",
            "100 = 10²"
          ],
          "explain": "Gdy czynniki się powtarzają, można użyć potęg: 2 · 2 = 2², 5 · 5 = 5²."
        },
        {
          "id": "0003",
          "q": "Dlaczego 420 = 4 · 3 · 5 · 7 to nie jest rozkład na czynniki pierwsze?",
          "correct": [
            "Bo 4 nie jest liczbą pierwszą"
          ],
          "wrong": [
            "Bo iloczyn jest zły",
            "Bo brakuje jedynki",
            "To jest poprawny rozkład"
          ],
          "explain": "4 trzeba rozłożyć dalej: 4 = 2 · 2, więc 420 = 2 · 2 · 3 · 5 · 7."
        },
        {
          "id": "0004",
          "q": "Co warto wykorzystać, szukając kolejnych dzielników przy rozkładzie w słupku?",
          "correct": [
            "Cechy podzielności liczb"
          ],
          "wrong": [
            "Tabliczkę dzielenia przez 10",
            "Tylko dzielenie przez 2",
            "Kalkulator"
          ],
          "explain": "Np. 105 dzieli się przez 3, bo suma cyfr 1 + 0 + 5 = 6 dzieli się przez 3."
        },
        {
          "id": "0005",
          "q": "Który zapis to rozkład liczby 84 na czynniki pierwsze?",
          "correct": [
            "84 = 2 · 2 · 3 · 7"
          ],
          "wrong": [
            "84 = 2 · 2 · 21",
            "84 = 2 · 2 · 3",
            "84 = 2 · 2 · 3 · 7 · 2"
          ],
          "explain": "2 · 2 · 3 · 7 = 84, a wszystkie czynniki są pierwsze."
        },
        {
          "id": "0006",
          "q": "Który zapis to rozkład liczby 280 na czynniki pierwsze?",
          "correct": [
            "280 = 2 · 2 · 2 · 5 · 7"
          ],
          "wrong": [
            "280 = 2 · 2 · 2 · 35",
            "280 = 2 · 2 · 2 · 5",
            "280 = 2 · 2 · 2 · 5 · 7 · 2"
          ],
          "explain": "2 · 2 · 2 · 5 · 7 = 280, a wszystkie czynniki są pierwsze."
        },
        {
          "id": "0007",
          "q": "Który zapis to rozkład liczby 160 na czynniki pierwsze?",
          "correct": [
            "160 = 2 · 2 · 2 · 2 · 2 · 5"
          ],
          "wrong": [
            "160 = 2 · 2 · 2 · 2 · 10",
            "160 = 2 · 2 · 2 · 2 · 2",
            "160 = 2 · 2 · 2 · 2 · 2 · 5 · 2"
          ],
          "explain": "2 · 2 · 2 · 2 · 2 · 5 = 160, a wszystkie czynniki są pierwsze."
        },
        {
          "id": "0008",
          "q": "Który zapis to rozkład liczby 152 na czynniki pierwsze?",
          "correct": [
            "152 = 2 · 2 · 2 · 19"
          ],
          "wrong": [
            "152 = 2 · 2 · 38",
            "152 = 2 · 2 · 2",
            "152 = 2 · 2 · 2 · 19 · 2"
          ],
          "explain": "2 · 2 · 2 · 19 = 152, a wszystkie czynniki są pierwsze."
        },
        {
          "id": "0009",
          "q": "Który zapis to rozkład liczby 81 na czynniki pierwsze?",
          "correct": [
            "81 = 3 · 3 · 3 · 3"
          ],
          "wrong": [
            "81 = 3 · 3 · 9",
            "81 = 3 · 3 · 3",
            "81 = 3 · 3 · 3 · 3 · 2"
          ],
          "explain": "3 · 3 · 3 · 3 = 81, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0010",
          "q": "Który zapis to rozkład liczby 112 na czynniki pierwsze?",
          "correct": [
            "112 = 2 · 2 · 2 · 2 · 7"
          ],
          "wrong": [
            "112 = 2 · 2 · 2 · 14",
            "112 = 2 · 2 · 2 · 2",
            "112 = 2 · 2 · 2 · 2 · 7 · 2"
          ],
          "explain": "2 · 2 · 2 · 2 · 7 = 112, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0011",
          "q": "Który zapis to rozkład liczby 124 na czynniki pierwsze?",
          "correct": [
            "124 = 2 · 2 · 31"
          ],
          "wrong": [
            "124 = 2 · 62",
            "124 = 2 · 2",
            "124 = 2 · 2 · 31 · 2"
          ],
          "explain": "2 · 2 · 31 = 124, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0012",
          "q": "Który zapis to rozkład liczby 264 na czynniki pierwsze?",
          "correct": [
            "264 = 2 · 2 · 2 · 3 · 11"
          ],
          "wrong": [
            "264 = 2 · 2 · 2 · 33",
            "264 = 2 · 2 · 2 · 3",
            "264 = 2 · 2 · 2 · 3 · 11 · 2"
          ],
          "explain": "2 · 2 · 2 · 3 · 11 = 264, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0013",
          "q": "Który zapis to rozkład liczby 154 na czynniki pierwsze?",
          "correct": [
            "154 = 2 · 7 · 11"
          ],
          "wrong": [
            "154 = 2 · 77",
            "154 = 2 · 7",
            "154 = 2 · 7 · 11 · 2"
          ],
          "explain": "2 · 7 · 11 = 154, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0014",
          "q": "Który zapis to rozkład liczby 240 na czynniki pierwsze?",
          "correct": [
            "240 = 2 · 2 · 2 · 2 · 3 · 5"
          ],
          "wrong": [
            "240 = 2 · 2 · 2 · 2 · 15",
            "240 = 2 · 2 · 2 · 2 · 3",
            "240 = 2 · 2 · 2 · 2 · 3 · 5 · 2"
          ],
          "explain": "2 · 2 · 2 · 2 · 3 · 5 = 240, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0015",
          "q": "Który zapis to rozkład liczby 172 na czynniki pierwsze?",
          "correct": [
            "172 = 2 · 2 · 43"
          ],
          "wrong": [
            "172 = 2 · 86",
            "172 = 2 · 2",
            "172 = 2 · 2 · 43 · 2"
          ],
          "explain": "2 · 2 · 43 = 172, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0016",
          "q": "Który zapis to rozkład liczby 66 na czynniki pierwsze?",
          "correct": [
            "66 = 2 · 3 · 11"
          ],
          "wrong": [
            "66 = 2 · 33",
            "66 = 2 · 3",
            "66 = 2 · 3 · 11 · 2"
          ],
          "explain": "2 · 3 · 11 = 66, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0017",
          "q": "Który zapis to rozkład liczby 231 na czynniki pierwsze?",
          "correct": [
            "231 = 3 · 7 · 11"
          ],
          "wrong": [
            "231 = 3 · 77",
            "231 = 3 · 7",
            "231 = 3 · 7 · 11 · 2"
          ],
          "explain": "3 · 7 · 11 = 231, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0018",
          "q": "Który zapis to rozkład liczby 294 na czynniki pierwsze?",
          "correct": [
            "294 = 2 · 3 · 7 · 7"
          ],
          "wrong": [
            "294 = 2 · 3 · 49",
            "294 = 2 · 3 · 7",
            "294 = 2 · 3 · 7 · 7 · 2"
          ],
          "explain": "2 · 3 · 7 · 7 = 294, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0019",
          "q": "Który zapis to rozkład liczby 186 na czynniki pierwsze?",
          "correct": [
            "186 = 2 · 3 · 31"
          ],
          "wrong": [
            "186 = 2 · 93",
            "186 = 2 · 3",
            "186 = 2 · 3 · 31 · 2"
          ],
          "explain": "2 · 3 · 31 = 186, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0020",
          "q": "Który zapis to rozkład liczby 174 na czynniki pierwsze?",
          "correct": [
            "174 = 2 · 3 · 29"
          ],
          "wrong": [
            "174 = 2 · 87",
            "174 = 2 · 3",
            "174 = 2 · 3 · 29 · 2"
          ],
          "explain": "2 · 3 · 29 = 174, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0021",
          "q": "Który zapis to rozkład liczby 75 na czynniki pierwsze?",
          "correct": [
            "75 = 3 · 5 · 5"
          ],
          "wrong": [
            "75 = 3 · 25",
            "75 = 3 · 5",
            "75 = 3 · 5 · 5 · 2"
          ],
          "explain": "3 · 5 · 5 = 75, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0022",
          "q": "Który zapis to rozkład liczby 99 na czynniki pierwsze?",
          "correct": [
            "99 = 3 · 3 · 11"
          ],
          "wrong": [
            "99 = 3 · 33",
            "99 = 3 · 3",
            "99 = 3 · 3 · 11 · 2"
          ],
          "explain": "3 · 3 · 11 = 99, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0023",
          "q": "Który zapis to rozkład liczby 238 na czynniki pierwsze?",
          "correct": [
            "238 = 2 · 7 · 17"
          ],
          "wrong": [
            "238 = 2 · 119",
            "238 = 2 · 7",
            "238 = 2 · 7 · 17 · 2"
          ],
          "explain": "2 · 7 · 17 = 238, a wszystkie czynniki są pierwsze.",
          "level": 3
        },
        {
          "id": "0024",
          "q": "Który zapis to rozkład liczby 90 na czynniki pierwsze?",
          "correct": [
            "90 = 2 · 3 · 3 · 5"
          ],
          "wrong": [
            "90 = 2 · 3 · 15",
            "90 = 2 · 3 · 3",
            "90 = 2 · 3 · 3 · 5 · 2"
          ],
          "explain": "2 · 3 · 3 · 5 = 90, a wszystkie czynniki są pierwsze.",
          "level": 3
        }
      ]
    },
    {
      "id": "zadania",
      "name": "Zadania",
      "icon": "✏️",
      "questions": [
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 41?",
          "answer": "246",
          "explain": "2 · 3 · 41 = 246."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 47?",
          "answer": "188",
          "explain": "2 · 2 · 47 = 188."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 3 · 7?",
          "answer": "84",
          "explain": "2 · 2 · 3 · 7 = 84."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 3 · 3 · 5?",
          "answer": "135",
          "explain": "3 · 3 · 3 · 5 = 135."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 5 · 5?",
          "answer": "100",
          "explain": "2 · 2 · 5 · 5 = 100."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 5 · 11?",
          "answer": "110",
          "explain": "2 · 5 · 11 = 110."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 11?",
          "answer": "66",
          "explain": "2 · 3 · 11 = 66."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 67?",
          "answer": "268",
          "explain": "2 · 2 · 67 = 268."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 59?",
          "answer": "354",
          "explain": "2 · 3 · 59 = 354."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 2 · 3 · 11?",
          "answer": "264",
          "explain": "2 · 2 · 2 · 3 · 11 = 264."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 5 · 5?",
          "answer": "75",
          "explain": "3 · 5 · 5 = 75."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 2 · 2 · 2 · 2?",
          "answer": "64",
          "explain": "2 · 2 · 2 · 2 · 2 · 2 = 64."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 2 · 13?",
          "answer": "104",
          "explain": "2 · 2 · 2 · 13 = 104."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 7 · 19?",
          "answer": "266",
          "explain": "2 · 7 · 19 = 266."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 5 · 5?",
          "answer": "50",
          "explain": "2 · 5 · 5 = 50."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 5?",
          "answer": "20",
          "explain": "2 · 2 · 5 = 20."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 3 · 3 · 5?",
          "answer": "270",
          "explain": "2 · 3 · 3 · 3 · 5 = 270."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 7 · 11?",
          "answer": "231",
          "explain": "3 · 7 · 11 = 231."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 7 · 23?",
          "answer": "322",
          "explain": "2 · 7 · 23 = 322."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 5 · 19?",
          "answer": "285",
          "explain": "3 · 5 · 19 = 285."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 5 · 13?",
          "answer": "390",
          "explain": "2 · 3 · 5 · 13 = 390."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 29?",
          "answer": "174",
          "explain": "2 · 3 · 29 = 174."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 5 · 5 · 7?",
          "answer": "350",
          "explain": "2 · 5 · 5 · 7 = 350."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 7 · 19?",
          "answer": "399",
          "explain": "3 · 7 · 19 = 399."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 5 · 23?",
          "answer": "345",
          "explain": "3 · 5 · 23 = 345."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 3 · 19?",
          "answer": "171",
          "explain": "3 · 3 · 19 = 171."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 2 · 47?",
          "answer": "376",
          "explain": "2 · 2 · 2 · 47 = 376."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 3 · 3 · 3 · 3?",
          "answer": "81",
          "explain": "3 · 3 · 3 · 3 = 81."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 37?",
          "answer": "148",
          "explain": "2 · 2 · 37 = 148."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 2 · 2 · 19?",
          "answer": "304",
          "explain": "2 · 2 · 2 · 2 · 19 = 304."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 19?",
          "answer": "114",
          "explain": "2 · 3 · 19 = 114."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 79?",
          "answer": "316",
          "explain": "2 · 2 · 79 = 316."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 43?",
          "answer": "258",
          "explain": "2 · 3 · 43 = 258."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 2 · 2 · 23?",
          "answer": "368",
          "explain": "2 · 2 · 2 · 2 · 23 = 368."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 3 · 5 · 11?",
          "answer": "330",
          "explain": "2 · 3 · 5 · 11 = 330."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 97?",
          "answer": "388",
          "explain": "2 · 2 · 97 = 388."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 5 · 19?",
          "answer": "380",
          "explain": "2 · 2 · 5 · 19 = 380."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 3 · 23?",
          "answer": "276",
          "explain": "2 · 2 · 3 · 23 = 276."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 2 · 3 · 29?",
          "answer": "348",
          "explain": "2 · 2 · 3 · 29 = 348."
        },
        {
          "type": "number",
          "skill": "Liczba z rozkładu",
          "q": "Jaka liczba ma rozkład na czynniki pierwsze 2 · 11 · 11?",
          "answer": "242",
          "explain": "2 · 11 · 11 = 242."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 88 = 2 · ▢ · 2 · 11. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "88 = 2 · 2 · 2 · 11."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 290 = ▢ · 5 · 29. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "290 = 2 · 5 · 29."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 312 = 2 · 2 · ▢ · 3 · 13. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "312 = 2 · 2 · 2 · 3 · 13."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 90 = 2 · 3 · 3 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "5",
          "explain": "90 = 2 · 3 · 3 · 5."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 27 = ▢ · 3 · 3. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "27 = 3 · 3 · 3."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 232 = 2 · 2 · ▢ · 29. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "232 = 2 · 2 · 2 · 29."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 248 = 2 · 2 · 2 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "31",
          "explain": "248 = 2 · 2 · 2 · 31."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 174 = 2 · ▢ · 29. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "174 = 2 · 3 · 29."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 186 = 2 · ▢ · 31. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "186 = 2 · 3 · 31."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 182 = ▢ · 7 · 13. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "182 = 2 · 7 · 13."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 310 = 2 · ▢ · 31. Jaka liczba jest w miejscu ▢?",
          "answer": "5",
          "explain": "310 = 2 · 5 · 31."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 357 = ▢ · 7 · 17. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "357 = 3 · 7 · 17."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 388 = ▢ · 2 · 97. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "388 = 2 · 2 · 97."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 258 = ▢ · 3 · 43. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "258 = 2 · 3 · 43."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 153 = 3 · ▢ · 17. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "153 = 3 · 3 · 17."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 116 = 2 · 2 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "29",
          "explain": "116 = 2 · 2 · 29."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 333 = 3 · 3 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "37",
          "explain": "333 = 3 · 3 · 37."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 195 = ▢ · 5 · 13. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "195 = 3 · 5 · 13."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 84 = 2 · ▢ · 3 · 7. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "84 = 2 · 2 · 3 · 7."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 125 = 5 · ▢ · 5. Jaka liczba jest w miejscu ▢?",
          "answer": "5",
          "explain": "125 = 5 · 5 · 5."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 279 = 3 · ▢ · 31. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "279 = 3 · 3 · 31."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 110 = 2 · ▢ · 11. Jaka liczba jest w miejscu ▢?",
          "answer": "5",
          "explain": "110 = 2 · 5 · 11."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 316 = 2 · ▢ · 79. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "316 = 2 · 2 · 79."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 188 = ▢ · 2 · 47. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "188 = 2 · 2 · 47."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 78 = 2 · 3 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "13",
          "explain": "78 = 2 · 3 · 13."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 345 = 3 · ▢ · 23. Jaka liczba jest w miejscu ▢?",
          "answer": "5",
          "explain": "345 = 3 · 5 · 23."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 336 = ▢ · 2 · 2 · 2 · 3 · 7. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "336 = 2 · 2 · 2 · 2 · 3 · 7."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 136 = 2 · ▢ · 2 · 17. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "136 = 2 · 2 · 2 · 17."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 390 = 2 · ▢ · 5 · 13. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "390 = 2 · 3 · 5 · 13."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 364 = 2 · ▢ · 7 · 13. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "364 = 2 · 2 · 7 · 13."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 24 = 2 · 2 · 2 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "24 = 2 · 2 · 2 · 3."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 369 = 3 · 3 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "41",
          "explain": "369 = 3 · 3 · 41."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 75 = ▢ · 5 · 5. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "75 = 3 · 5 · 5."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 244 = 2 · 2 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "61",
          "explain": "244 = 2 · 2 · 61."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 369 = 3 · ▢ · 41. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "369 = 3 · 3 · 41."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 352 = 2 · 2 · 2 · 2 · 2 · ▢. Jaka liczba jest w miejscu ▢?",
          "answer": "11",
          "explain": "352 = 2 · 2 · 2 · 2 · 2 · 11."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 63 = ▢ · 3 · 7. Jaka liczba jest w miejscu ▢?",
          "answer": "3",
          "explain": "63 = 3 · 3 · 7."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 50 = ▢ · 5 · 5. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "50 = 2 · 5 · 5."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 234 = ▢ · 3 · 3 · 13. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "234 = 2 · 3 · 3 · 13."
        },
        {
          "type": "number",
          "skill": "Brakujący czynnik",
          "q": "Uzupełnij rozkład: 396 = 2 · ▢ · 3 · 3 · 11. Jaka liczba jest w miejscu ▢?",
          "answer": "2",
          "explain": "396 = 2 · 2 · 3 · 3 · 11."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 5 występuje w rozkładzie liczby 20 na czynniki pierwsze?",
          "answer": "1",
          "explain": "20 = 2 · 2 · 5 – liczba 5 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 3 występuje w rozkładzie liczby 177 na czynniki pierwsze?",
          "answer": "1",
          "explain": "177 = 3 · 59 – liczba 3 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 5 występuje w rozkładzie liczby 125 na czynniki pierwsze?",
          "answer": "3",
          "explain": "125 = 5 · 5 · 5 – liczba 5 występuje 3 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 3 występuje w rozkładzie liczby 243 na czynniki pierwsze?",
          "answer": "5",
          "explain": "243 = 3 · 3 · 3 · 3 · 3 – liczba 3 występuje 5 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 40 na czynniki pierwsze?",
          "answer": "3",
          "explain": "40 = 2 · 2 · 2 · 5 – liczba 2 występuje 3 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 7 występuje w rozkładzie liczby 42 na czynniki pierwsze?",
          "answer": "1",
          "explain": "42 = 2 · 3 · 7 – liczba 7 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 5 występuje w rozkładzie liczby 265 na czynniki pierwsze?",
          "answer": "1",
          "explain": "265 = 5 · 53 – liczba 5 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 288 na czynniki pierwsze?",
          "answer": "5",
          "explain": "288 = 2 · 2 · 2 · 2 · 2 · 3 · 3 – liczba 2 występuje 5 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 64 na czynniki pierwsze?",
          "answer": "6",
          "explain": "64 = 2 · 2 · 2 · 2 · 2 · 2 – liczba 2 występuje 6 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 3 występuje w rozkładzie liczby 147 na czynniki pierwsze?",
          "answer": "1",
          "explain": "147 = 3 · 7 · 7 – liczba 3 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 62 na czynniki pierwsze?",
          "answer": "1",
          "explain": "62 = 2 · 31 – liczba 2 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 61 występuje w rozkładzie liczby 122 na czynniki pierwsze?",
          "answer": "1",
          "explain": "122 = 2 · 61 – liczba 61 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 5 występuje w rozkładzie liczby 95 na czynniki pierwsze?",
          "answer": "1",
          "explain": "95 = 5 · 19 – liczba 5 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 3 występuje w rozkładzie liczby 249 na czynniki pierwsze?",
          "answer": "1",
          "explain": "249 = 3 · 83 – liczba 3 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 13 występuje w rozkładzie liczby 117 na czynniki pierwsze?",
          "answer": "1",
          "explain": "117 = 3 · 3 · 13 – liczba 13 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 19 występuje w rozkładzie liczby 38 na czynniki pierwsze?",
          "answer": "1",
          "explain": "38 = 2 · 19 – liczba 19 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 5 występuje w rozkładzie liczby 235 na czynniki pierwsze?",
          "answer": "1",
          "explain": "235 = 5 · 47 – liczba 5 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 29 występuje w rozkładzie liczby 58 na czynniki pierwsze?",
          "answer": "1",
          "explain": "58 = 2 · 29 – liczba 29 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 14 na czynniki pierwsze?",
          "answer": "1",
          "explain": "14 = 2 · 7 – liczba 2 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 240 na czynniki pierwsze?",
          "answer": "4",
          "explain": "240 = 2 · 2 · 2 · 2 · 3 · 5 – liczba 2 występuje 4 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 31 występuje w rozkładzie liczby 248 na czynniki pierwsze?",
          "answer": "1",
          "explain": "248 = 2 · 2 · 2 · 31 – liczba 31 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 11 występuje w rozkładzie liczby 286 na czynniki pierwsze?",
          "answer": "1",
          "explain": "286 = 2 · 11 · 13 – liczba 11 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 43 występuje w rozkładzie liczby 215 na czynniki pierwsze?",
          "answer": "1",
          "explain": "215 = 5 · 43 – liczba 43 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 13 występuje w rozkładzie liczby 208 na czynniki pierwsze?",
          "answer": "1",
          "explain": "208 = 2 · 2 · 2 · 2 · 13 – liczba 13 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 7 występuje w rozkładzie liczby 91 na czynniki pierwsze?",
          "answer": "1",
          "explain": "91 = 7 · 13 – liczba 7 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 140 na czynniki pierwsze?",
          "answer": "2",
          "explain": "140 = 2 · 2 · 5 · 7 – liczba 2 występuje 2 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 5 występuje w rozkładzie liczby 110 na czynniki pierwsze?",
          "answer": "1",
          "explain": "110 = 2 · 5 · 11 – liczba 5 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 13 występuje w rozkładzie liczby 52 na czynniki pierwsze?",
          "answer": "1",
          "explain": "52 = 2 · 2 · 13 – liczba 13 występuje 1 raz."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 2 występuje w rozkładzie liczby 216 na czynniki pierwsze?",
          "answer": "3",
          "explain": "216 = 2 · 2 · 2 · 3 · 3 · 3 – liczba 2 występuje 3 razy."
        },
        {
          "type": "number",
          "skill": "Ile razy czynnik w rozkładzie",
          "q": "Ile razy liczba 5 występuje w rozkładzie liczby 280 na czynniki pierwsze?",
          "answer": "1",
          "explain": "280 = 2 · 2 · 2 · 5 · 7 – liczba 5 występuje 1 raz."
        }
      ]
    }
  ]
};
