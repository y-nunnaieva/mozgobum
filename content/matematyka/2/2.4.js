export default {
  "title": "Liczby pierwsze i złożone",
  "icon": "💎",
  "sections": [
    {
      "id": "pojecie",
      "name": "Definicje",
      "icon": "📖",
      "questions": [
        {
          "id": "0001",
          "level": 1,
          "group": "pierwsza",
          "q": "Czym jest liczba pierwsza?",
          "correct": [
            "Liczbą naturalną, która ma dokładnie dwa dzielniki"
          ],
          "wrong": [
            "Liczbą, która ma więcej niż dwa dzielniki",
            "Każdą liczbą nieparzystą",
            "Liczbą, która dzieli się tylko przez 2"
          ],
          "explain": "Liczba pierwsza ma dokładnie dwa dzielniki: 1 i samą siebie, np. 2, 3, 5, 7, 11."
        },
        {
          "id": "0002",
          "level": 1,
          "group": "pierwsza",
          "q": "Jak nazywamy liczbę naturalną, która ma dokładnie dwa dzielniki?",
          "correct": [
            "Liczbą pierwszą"
          ],
          "wrong": [
            "Liczbą złożoną",
            "Liczbą parzystą",
            "Liczbą doskonałą"
          ],
          "explain": "To liczba pierwsza."
        },
        {
          "id": "0003",
          "level": 1,
          "group": "zlozona",
          "q": "Czym jest liczba złożona?",
          "correct": [
            "Liczbą naturalną różną od zera, która ma więcej niż dwa dzielniki"
          ],
          "wrong": [
            "Liczbą, która ma dokładnie dwa dzielniki",
            "Każdą liczbą parzystą",
            "Liczbą złożoną z dwóch cyfr"
          ],
          "explain": "Liczby złożone to np. 4, 6, 8, 9, 10, 12."
        },
        {
          "id": "0004",
          "level": 1,
          "group": "zlozona",
          "q": "Jak nazywamy liczbę różną od zera, która ma więcej niż dwa dzielniki?",
          "correct": [
            "Liczbą złożoną"
          ],
          "wrong": [
            "Liczbą pierwszą",
            "Liczbą nieparzystą",
            "Wielokrotnością"
          ],
          "explain": "To liczba złożona."
        },
        {
          "id": "0005",
          "level": 1,
          "q": "Które liczby nie są ani pierwsze, ani złożone?",
          "correct": [
            "0",
            "1"
          ],
          "wrong": [
            "2",
            "9"
          ],
          "explain": "Liczby 0 i 1 nie są ani pierwsze, ani złożone."
        },
        {
          "id": "0006",
          "level": 1,
          "q": "Jaka jest najmniejsza liczba pierwsza?",
          "correct": [
            "2"
          ],
          "wrong": [
            "1",
            "0",
            "3"
          ],
          "explain": "2 – jedyna parzysta liczba pierwsza."
        },
        {
          "id": "0007",
          "q": "Jaka jest najmniejsza liczba złożona?",
          "correct": [
            "4"
          ],
          "wrong": [
            "1",
            "2",
            "6"
          ],
          "explain": "4 ma trzy dzielniki: 1, 2, 4."
        },
        {
          "id": "0008",
          "level": 1,
          "q": "Które zdania są prawdziwe?",
          "correct": [
            "Każda liczba parzysta większa od 2 jest złożona",
            "Iloczyn dwóch liczb pierwszych jest liczbą złożoną"
          ],
          "wrong": [
            "Liczba 1 jest najmniejszą liczbą pierwszą",
            "Suma dwóch nieparzystych liczb pierwszych jest liczbą pierwszą"
          ],
          "explain": "1 nie jest pierwsza, a np. 3 + 5 = 8 to liczba złożona."
        },
        {
          "id": "0009",
          "q": "Ile jest liczb pierwszych mniejszych od 30?",
          "correct": [
            "10"
          ],
          "wrong": [
            "9",
            "11",
            "15"
          ],
          "explain": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29 – dziesięć."
        },
        {
          "id": "0010",
          "level": 3,
          "q": "Jakie cyfry na pewno nie mogą być cyfrą jedności liczby pierwszej większej od 10?",
          "correct": [
            "0",
            "2",
            "4",
            "5",
            "6",
            "8"
          ],
          "wrong": [
            "1",
            "3",
            "7",
            "9"
          ],
          "explain": "Liczba kończąca się na 0, 2, 4, 6, 8 dzieli się przez 2, a na 0 lub 5 – przez 5."
        },
        {
          "id": "0011",
          "q": "Które z podanych liczb są pierwsze?",
          "correct": [
            "53"
          ],
          "wrong": [
            "82",
            "25",
            "27",
            "87",
            "77"
          ],
          "explain": "Pierwsze: 53. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17).",
          "variants": [
            {
              "correct": [
                "5",
                "47"
              ],
              "wrong": [
                "21",
                "15",
                "33",
                "55"
              ],
              "explain": "Pierwsze: 5, 47. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "41",
                "79",
                "97"
              ],
              "wrong": [
                "63",
                "75",
                "77"
              ],
              "explain": "Pierwsze: 41, 79, 97. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "71",
                "61",
                "73",
                "43"
              ],
              "wrong": [
                "21",
                "27"
              ],
              "explain": "Pierwsze: 71, 61, 73, 43. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "59",
                "83"
              ],
              "wrong": [
                "45",
                "15",
                "9",
                "81"
              ],
              "explain": "Pierwsze: 59, 83. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "59",
                "2",
                "19"
              ],
              "wrong": [
                "75",
                "69",
                "93"
              ],
              "explain": "Pierwsze: 59, 2, 19. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "7",
                "71",
                "29",
                "43"
              ],
              "wrong": [
                "63",
                "69"
              ],
              "explain": "Pierwsze: 7, 71, 29, 43. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "47",
                "41"
              ],
              "wrong": [
                "49",
                "75",
                "95",
                "39"
              ],
              "explain": "Pierwsze: 47, 41. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "67",
                "83",
                "7"
              ],
              "wrong": [
                "15",
                "49",
                "39"
              ],
              "explain": "Pierwsze: 67, 83, 7. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "53",
                "23",
                "37",
                "31"
              ],
              "wrong": [
                "65",
                "33"
              ],
              "explain": "Pierwsze: 53, 23, 37, 31. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "19",
                "7"
              ],
              "wrong": [
                "15",
                "99",
                "69",
                "63"
              ],
              "explain": "Pierwsze: 19, 7. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "89",
                "71",
                "53"
              ],
              "wrong": [
                "65",
                "87",
                "93"
              ],
              "explain": "Pierwsze: 89, 71, 53. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "37",
                "17",
                "5",
                "29"
              ],
              "wrong": [
                "39",
                "81"
              ],
              "explain": "Pierwsze: 37, 17, 5, 29. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "73",
                "79"
              ],
              "wrong": [
                "87",
                "25",
                "39",
                "85"
              ],
              "explain": "Pierwsze: 73, 79. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "11",
                "43",
                "23"
              ],
              "wrong": [
                "81",
                "65",
                "51"
              ],
              "explain": "Pierwsze: 11, 43, 23. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "3",
                "83",
                "71",
                "7"
              ],
              "wrong": [
                "95",
                "91"
              ],
              "explain": "Pierwsze: 3, 83, 71, 7. Pozostałe mają więcej dzielników."
            }
          ]
        },
        {
          "id": "0012",
          "q": "Które z podanych liczb są pierwsze?",
          "correct": [
            "43",
            "29",
            "17"
          ],
          "wrong": [
            "65",
            "99",
            "72"
          ],
          "explain": "Pierwsze: 43, 29, 17. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17).",
          "variants": [
            {
              "correct": [
                "5",
                "13"
              ],
              "wrong": [
                "69",
                "33",
                "21",
                "85"
              ],
              "explain": "Pierwsze: 5, 13. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "89",
                "5",
                "11"
              ],
              "wrong": [
                "45",
                "35",
                "75"
              ],
              "explain": "Pierwsze: 89, 5, 11. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "11",
                "41",
                "89",
                "7"
              ],
              "wrong": [
                "77",
                "15"
              ],
              "explain": "Pierwsze: 11, 41, 89, 7. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "37",
                "7"
              ],
              "wrong": [
                "65",
                "81",
                "25",
                "85"
              ],
              "explain": "Pierwsze: 37, 7. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "41",
                "47",
                "29"
              ],
              "wrong": [
                "75",
                "57",
                "25"
              ],
              "explain": "Pierwsze: 41, 47, 29. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "31",
                "71",
                "23",
                "83"
              ],
              "wrong": [
                "69",
                "25"
              ],
              "explain": "Pierwsze: 31, 71, 23, 83. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "19",
                "29"
              ],
              "wrong": [
                "35",
                "65",
                "15",
                "69"
              ],
              "explain": "Pierwsze: 19, 29. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "43",
                "13",
                "19"
              ],
              "wrong": [
                "63",
                "69",
                "21"
              ],
              "explain": "Pierwsze: 43, 13, 19. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "79",
                "7",
                "47",
                "2"
              ],
              "wrong": [
                "55",
                "63"
              ],
              "explain": "Pierwsze: 79, 7, 47, 2. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "23",
                "29"
              ],
              "wrong": [
                "15",
                "51",
                "35",
                "39"
              ],
              "explain": "Pierwsze: 23, 29. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "53",
                "47",
                "79"
              ],
              "wrong": [
                "21",
                "63",
                "87"
              ],
              "explain": "Pierwsze: 53, 47, 79. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "11",
                "83",
                "67",
                "17"
              ],
              "wrong": [
                "35",
                "39"
              ],
              "explain": "Pierwsze: 11, 83, 67, 17. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "31",
                "79"
              ],
              "wrong": [
                "85",
                "9",
                "63",
                "35"
              ],
              "explain": "Pierwsze: 31, 79. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "59",
                "37",
                "97"
              ],
              "wrong": [
                "69",
                "15",
                "99"
              ],
              "explain": "Pierwsze: 59, 37, 97. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "79",
                "53",
                "97",
                "23"
              ],
              "wrong": [
                "39",
                "33"
              ],
              "explain": "Pierwsze: 79, 53, 97, 23. Pozostałe mają więcej dzielników."
            }
          ]
        },
        {
          "id": "0013",
          "q": "Które z podanych liczb są pierwsze?",
          "correct": [
            "19",
            "53"
          ],
          "wrong": [
            "65",
            "91",
            "57",
            "25"
          ],
          "explain": "Pierwsze: 19, 53. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17).",
          "variants": [
            {
              "correct": [
                "23",
                "2"
              ],
              "wrong": [
                "49",
                "69",
                "85",
                "35"
              ],
              "explain": "Pierwsze: 23, 2. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "19",
                "83",
                "11"
              ],
              "wrong": [
                "9",
                "65",
                "69"
              ],
              "explain": "Pierwsze: 19, 83, 11. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "5",
                "29",
                "37",
                "3"
              ],
              "wrong": [
                "81",
                "33"
              ],
              "explain": "Pierwsze: 5, 29, 37, 3. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "71",
                "31"
              ],
              "wrong": [
                "51",
                "55",
                "35",
                "45"
              ],
              "explain": "Pierwsze: 71, 31. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "23",
                "19",
                "47"
              ],
              "wrong": [
                "25",
                "27",
                "57"
              ],
              "explain": "Pierwsze: 23, 19, 47. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "31",
                "19",
                "29",
                "17"
              ],
              "wrong": [
                "9",
                "77"
              ],
              "explain": "Pierwsze: 31, 19, 29, 17. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "71",
                "41"
              ],
              "wrong": [
                "81",
                "9",
                "21",
                "57"
              ],
              "explain": "Pierwsze: 71, 41. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "79",
                "17",
                "19"
              ],
              "wrong": [
                "39",
                "35",
                "45"
              ],
              "explain": "Pierwsze: 79, 17, 19. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "59",
                "73",
                "97",
                "83"
              ],
              "wrong": [
                "49",
                "63"
              ],
              "explain": "Pierwsze: 59, 73, 97, 83. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "53",
                "41"
              ],
              "wrong": [
                "69",
                "27",
                "75",
                "65"
              ],
              "explain": "Pierwsze: 53, 41. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "5",
                "59",
                "47"
              ],
              "wrong": [
                "69",
                "99",
                "55"
              ],
              "explain": "Pierwsze: 5, 59, 47. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "7",
                "19",
                "11",
                "83"
              ],
              "wrong": [
                "63",
                "9"
              ],
              "explain": "Pierwsze: 7, 19, 11, 83. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "89",
                "13"
              ],
              "wrong": [
                "51",
                "9",
                "99",
                "49"
              ],
              "explain": "Pierwsze: 89, 13. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "73",
                "3",
                "19"
              ],
              "wrong": [
                "27",
                "33",
                "35"
              ],
              "explain": "Pierwsze: 73, 3, 19. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "59",
                "79",
                "19",
                "11"
              ],
              "wrong": [
                "27",
                "51"
              ],
              "explain": "Pierwsze: 59, 79, 19, 11. Pozostałe mają więcej dzielników."
            }
          ]
        },
        {
          "id": "0014",
          "q": "Które z podanych liczb są pierwsze?",
          "correct": [
            "43",
            "19"
          ],
          "wrong": [
            "82",
            "51",
            "91",
            "49"
          ],
          "explain": "Pierwsze: 43, 19. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17).",
          "variants": [
            {
              "correct": [
                "5",
                "47"
              ],
              "wrong": [
                "55",
                "95",
                "57",
                "51"
              ],
              "explain": "Pierwsze: 5, 47. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "11",
                "41",
                "2"
              ],
              "wrong": [
                "15",
                "85",
                "51"
              ],
              "explain": "Pierwsze: 11, 41, 2. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "83",
                "47",
                "23",
                "61"
              ],
              "wrong": [
                "85",
                "9"
              ],
              "explain": "Pierwsze: 83, 47, 23, 61. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "43",
                "67"
              ],
              "wrong": [
                "65",
                "35",
                "81",
                "51"
              ],
              "explain": "Pierwsze: 43, 67. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "47",
                "89",
                "17"
              ],
              "wrong": [
                "27",
                "93",
                "33"
              ],
              "explain": "Pierwsze: 47, 89, 17. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "79",
                "23",
                "43",
                "11"
              ],
              "wrong": [
                "35",
                "91"
              ],
              "explain": "Pierwsze: 79, 23, 43, 11. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "83",
                "11"
              ],
              "wrong": [
                "81",
                "99",
                "33",
                "91"
              ],
              "explain": "Pierwsze: 83, 11. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "79",
                "17",
                "97"
              ],
              "wrong": [
                "55",
                "49",
                "93"
              ],
              "explain": "Pierwsze: 79, 17, 97. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "43",
                "79",
                "47",
                "7"
              ],
              "wrong": [
                "69",
                "33"
              ],
              "explain": "Pierwsze: 43, 79, 47, 7. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "71",
                "53"
              ],
              "wrong": [
                "35",
                "99",
                "15",
                "93"
              ],
              "explain": "Pierwsze: 71, 53. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "67",
                "53",
                "71"
              ],
              "wrong": [
                "81",
                "25",
                "35"
              ],
              "explain": "Pierwsze: 67, 53, 71. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "31",
                "2",
                "37",
                "97"
              ],
              "wrong": [
                "49",
                "69"
              ],
              "explain": "Pierwsze: 31, 2, 37, 97. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "47",
                "53"
              ],
              "wrong": [
                "51",
                "87",
                "81",
                "75"
              ],
              "explain": "Pierwsze: 47, 53. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "7",
                "29",
                "2"
              ],
              "wrong": [
                "85",
                "27",
                "99"
              ],
              "explain": "Pierwsze: 7, 29, 2. Pozostałe mają więcej dzielników."
            },
            {
              "correct": [
                "79",
                "37",
                "31",
                "23"
              ],
              "wrong": [
                "95",
                "63"
              ],
              "explain": "Pierwsze: 79, 37, 31, 23. Pozostałe mają więcej dzielników."
            }
          ]
        }
      ]
    }
  ]
};
