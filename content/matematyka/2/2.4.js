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
          "explain": "Pierwsze: 53. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17)."
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
          "explain": "Pierwsze: 43, 29, 17. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17)."
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
          "explain": "Pierwsze: 19, 53. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17)."
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
          "explain": "Pierwsze: 43, 19. Pozostałe mają więcej dzielników (np. 91 = 7 · 13, 51 = 3 · 17)."
        }
      ]
    }
  ]
};
