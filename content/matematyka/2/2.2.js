export default {
  "title": "Dzielniki",
  "icon": "🍪",
  "sections": [
    {
      "id": "pojecie",
      "name": "Co to jest dzielnik",
      "icon": "📖",
      "questions": [
        {
          "id": "0001",
          "level": 1,
          "q": "Kiedy mówimy, że liczba jest podzielna przez jakąś liczbę?",
          "correct": [
            "Gdy dzieli się przez nią bez reszty"
          ],
          "wrong": [
            "Gdy jest od niej większa",
            "Gdy obie są parzyste",
            "Gdy reszta z dzielenia wynosi 1"
          ],
          "explain": "Liczba jest podzielna przez jakąś liczbę, gdy dzieli się przez nią bez reszty."
        },
        {
          "id": "0002",
          "level": 1,
          "q": "Czym jest dzielnik liczby 20?",
          "correct": [
            "Każdą liczbą, przez którą 20 jest podzielna"
          ],
          "wrong": [
            "Każdą liczbą mniejszą od 20",
            "Wynikiem mnożenia 20 przez inną liczbę",
            "Liczbą 2 i 0"
          ],
          "explain": "Dzielniki liczby 20 to 1, 2, 4, 5, 10, 20."
        },
        {
          "id": "0003",
          "level": 1,
          "q": "Co oznacza skrót NWD?",
          "correct": [
            "Największy wspólny dzielnik"
          ],
          "wrong": [
            "Najmniejszą wspólną wielokrotność",
            "Najmniejszy wspólny dzielnik",
            "Największą wspólną wielokrotność"
          ],
          "explain": "NWD – największy wspólny dzielnik."
        },
        {
          "id": "0004",
          "level": 1,
          "q": "Ile co najmniej dzielników ma każda liczba naturalna większa od 1?",
          "correct": [
            "Dwa – 1 i samą siebie"
          ],
          "wrong": [
            "Jeden",
            "Trzy",
            "Zero"
          ],
          "explain": "Każda liczba większa od 1 jest podzielna przez 1 i przez samą siebie."
        },
        {
          "id": "0005",
          "q": "Ile dzielników ma liczba 1?",
          "correct": [
            "Jeden"
          ],
          "wrong": [
            "Dwa",
            "Zero",
            "Nieskończenie wiele"
          ],
          "explain": "Liczba 1 dzieli się tylko przez 1."
        },
        {
          "id": "0006",
          "level": 1,
          "q": "Które zdania są prawdziwe?",
          "correct": [
            "Liczba 1 jest dzielnikiem każdej liczby naturalnej",
            "Liczba 2 jest dzielnikiem każdej liczby parzystej"
          ],
          "wrong": [
            "Liczba 3 jest dzielnikiem każdej liczby nieparzystej",
            "Każdy dzielnik liczby 24 jest dzielnikiem liczby 12"
          ],
          "explain": "3 nie dzieli np. 5. A 8 i 24 dzielą 24, ale nie 12."
        },
        {
          "id": "0007",
          "q": "Na czym polega sposób Marty na szukanie dzielników liczby 32?",
          "correct": [
            "Wypisuje iloczyny: 1 · 32, 2 · 16, 4 · 8 – czynniki to dzielniki"
          ],
          "wrong": [
            "Dodaje kolejne liczby",
            "Dzieli przez 10",
            "Wypisuje wielokrotności liczby 32"
          ],
          "explain": "Dzielniki liczby 32 to 1, 2, 4, 8, 16, 32 – wszystkie czynniki z iloczynów."
        },
        {
          "id": "0008",
          "q": "Czy NWD liczb 15 i 27 może być większy od 15?",
          "correct": [
            "Nie – dzielnik liczby nie może być większy od niej samej"
          ],
          "wrong": [
            "Tak",
            "Tylko gdy obie są nieparzyste",
            "Zawsze jest równy 27"
          ],
          "explain": "NWD(15, 27) = 3. Wspólny dzielnik nie przekroczy mniejszej z liczb."
        },
        {
          "id": "0009",
          "q": "Które z podanych liczb są dzielnikami liczby 18?",
          "correct": [
            "9",
            "3"
          ],
          "wrong": [
            "36",
            "8",
            "17",
            "11"
          ],
          "explain": "9, 3 dzielą 18 bez reszty. Wszystkie dzielniki 18: 1, 2, 3, 6, 9, 18."
        },
        {
          "id": "0010",
          "q": "Które z podanych liczb są dzielnikami liczby 36?",
          "correct": [
            "3",
            "36"
          ],
          "wrong": [
            "24",
            "28",
            "20",
            "11"
          ],
          "explain": "3, 36 dzielą 36 bez reszty. Wszystkie dzielniki 36: 1, 2, 3, 4, 6, 9, 12, 18, 36."
        },
        {
          "id": "0011",
          "q": "Które z podanych liczb są dzielnikami liczby 45?",
          "correct": [
            "9"
          ],
          "wrong": [
            "20",
            "4",
            "14",
            "2",
            "19"
          ],
          "explain": "9 dzielą 45 bez reszty. Wszystkie dzielniki 45: 1, 3, 5, 9, 15, 45."
        },
        {
          "id": "0012",
          "level": 3,
          "q": "Które z podanych liczb są dzielnikami liczby 60?",
          "correct": [
            "15"
          ],
          "wrong": [
            "22",
            "8",
            "27",
            "7",
            "26"
          ],
          "explain": "15 dzielą 60 bez reszty. Wszystkie dzielniki 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60."
        },
        {
          "id": "0013",
          "level": 3,
          "q": "Które z podanych liczb są dzielnikami liczby 120?",
          "correct": [
            "8",
            "12",
            "30"
          ],
          "wrong": [
            "19",
            "26",
            "13"
          ],
          "explain": "8, 12, 30 dzielą 120 bez reszty. Wszystkie dzielniki 120: 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120."
        },
        {
          "id": "0014",
          "level": 3,
          "q": "Które z podanych liczb są dzielnikami liczby 28?",
          "correct": [
            "2"
          ],
          "wrong": [
            "16",
            "10",
            "26",
            "12",
            "20"
          ],
          "explain": "2 dzielą 28 bez reszty. Wszystkie dzielniki 28: 1, 2, 4, 7, 14, 28."
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
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 71?",
          "answer": "2",
          "explain": "Dzielniki liczby 71: 1, 71 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 44?",
          "answer": "6",
          "explain": "Dzielniki liczby 44: 1, 2, 4, 11, 22, 44 – jest ich 6."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 26?",
          "answer": "4",
          "explain": "Dzielniki liczby 26: 1, 2, 13, 26 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 74?",
          "answer": "4",
          "explain": "Dzielniki liczby 74: 1, 2, 37, 74 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 24?",
          "answer": "8",
          "explain": "Dzielniki liczby 24: 1, 2, 3, 4, 6, 8, 12, 24 – jest ich 8."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 41?",
          "answer": "2",
          "explain": "Dzielniki liczby 41: 1, 41 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 88?",
          "answer": "8",
          "explain": "Dzielniki liczby 88: 1, 2, 4, 8, 11, 22, 44, 88 – jest ich 8."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 40?",
          "answer": "8",
          "explain": "Dzielniki liczby 40: 1, 2, 4, 5, 8, 10, 20, 40 – jest ich 8."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 66?",
          "answer": "8",
          "explain": "Dzielniki liczby 66: 1, 2, 3, 6, 11, 22, 33, 66 – jest ich 8."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 77?",
          "answer": "4",
          "explain": "Dzielniki liczby 77: 1, 7, 11, 77 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 39?",
          "answer": "4",
          "explain": "Dzielniki liczby 39: 1, 3, 13, 39 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 52?",
          "answer": "6",
          "explain": "Dzielniki liczby 52: 1, 2, 4, 13, 26, 52 – jest ich 6."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 9?",
          "answer": "3",
          "explain": "Dzielniki liczby 9: 1, 3, 9 – jest ich 3."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 87?",
          "answer": "4",
          "explain": "Dzielniki liczby 87: 1, 3, 29, 87 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 91?",
          "answer": "4",
          "explain": "Dzielniki liczby 91: 1, 7, 13, 91 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 63?",
          "answer": "6",
          "explain": "Dzielniki liczby 63: 1, 3, 7, 9, 21, 63 – jest ich 6."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 85?",
          "answer": "4",
          "explain": "Dzielniki liczby 85: 1, 5, 17, 85 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 73?",
          "answer": "2",
          "explain": "Dzielniki liczby 73: 1, 73 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 18?",
          "answer": "6",
          "explain": "Dzielniki liczby 18: 1, 2, 3, 6, 9, 18 – jest ich 6."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 8?",
          "answer": "4",
          "explain": "Dzielniki liczby 8: 1, 2, 4, 8 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 81?",
          "answer": "5",
          "explain": "Dzielniki liczby 81: 1, 3, 9, 27, 81 – jest ich 5."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 58?",
          "answer": "4",
          "explain": "Dzielniki liczby 58: 1, 2, 29, 58 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 72?",
          "answer": "12",
          "explain": "Dzielniki liczby 72: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72 – jest ich 12."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 80?",
          "answer": "10",
          "explain": "Dzielniki liczby 80: 1, 2, 4, 5, 8, 10, 16, 20, 40, 80 – jest ich 10."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 29?",
          "answer": "2",
          "explain": "Dzielniki liczby 29: 1, 29 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 75?",
          "answer": "6",
          "explain": "Dzielniki liczby 75: 1, 3, 5, 15, 25, 75 – jest ich 6."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 33?",
          "answer": "4",
          "explain": "Dzielniki liczby 33: 1, 3, 11, 33 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 16?",
          "answer": "5",
          "explain": "Dzielniki liczby 16: 1, 2, 4, 8, 16 – jest ich 5."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 42?",
          "answer": "8",
          "explain": "Dzielniki liczby 42: 1, 2, 3, 6, 7, 14, 21, 42 – jest ich 8."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 84?",
          "answer": "12",
          "explain": "Dzielniki liczby 84: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84 – jest ich 12."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 98?",
          "answer": "6",
          "explain": "Dzielniki liczby 98: 1, 2, 7, 14, 49, 98 – jest ich 6."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 10?",
          "answer": "4",
          "explain": "Dzielniki liczby 10: 1, 2, 5, 10 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 11?",
          "answer": "2",
          "explain": "Dzielniki liczby 11: 1, 11 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 94?",
          "answer": "4",
          "explain": "Dzielniki liczby 94: 1, 2, 47, 94 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 79?",
          "answer": "2",
          "explain": "Dzielniki liczby 79: 1, 79 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 51?",
          "answer": "4",
          "explain": "Dzielniki liczby 51: 1, 3, 17, 51 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 47?",
          "answer": "2",
          "explain": "Dzielniki liczby 47: 1, 47 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 65?",
          "answer": "4",
          "explain": "Dzielniki liczby 65: 1, 5, 13, 65 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 97?",
          "answer": "2",
          "explain": "Dzielniki liczby 97: 1, 97 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 54?",
          "answer": "8",
          "explain": "Dzielniki liczby 54: 1, 2, 3, 6, 9, 18, 27, 54 – jest ich 8."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(20, 27).",
          "answer": "1",
          "explain": "Dzielniki 20: 1, 2, 4, 5, 10, 20. Dzielniki 27: 1, 3, 9, 27. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(10, 50).",
          "answer": "10",
          "explain": "Dzielniki 10: 1, 2, 5, 10. Dzielniki 50: 1, 2, 5, 10, 25, 50. Największy wspólny to 10."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 36).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(11, 47).",
          "answer": "1",
          "explain": "Dzielniki 11: 1, 11. Dzielniki 47: 1, 47. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 42).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 42: 1, 2, 3, 6, 7, 14, 21, 42. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(5, 13).",
          "answer": "1",
          "explain": "Dzielniki 5: 1, 5. Dzielniki 13: 1, 13. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(13, 34).",
          "answer": "1",
          "explain": "Dzielniki 13: 1, 13. Dzielniki 34: 1, 2, 17, 34. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(10, 11).",
          "answer": "1",
          "explain": "Dzielniki 10: 1, 2, 5, 10. Dzielniki 11: 1, 11. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(14, 32).",
          "answer": "2",
          "explain": "Dzielniki 14: 1, 2, 7, 14. Dzielniki 32: 1, 2, 4, 8, 16, 32. Największy wspólny to 2."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(21, 39).",
          "answer": "3",
          "explain": "Dzielniki 21: 1, 3, 7, 21. Dzielniki 39: 1, 3, 13, 39. Największy wspólny to 3."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(8, 15).",
          "answer": "1",
          "explain": "Dzielniki 8: 1, 2, 4, 8. Dzielniki 15: 1, 3, 5, 15. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(6, 42).",
          "answer": "6",
          "explain": "Dzielniki 6: 1, 2, 3, 6. Dzielniki 42: 1, 2, 3, 6, 7, 14, 21, 42. Największy wspólny to 6."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(7, 40).",
          "answer": "1",
          "explain": "Dzielniki 7: 1, 7. Dzielniki 40: 1, 2, 4, 5, 8, 10, 20, 40. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(19, 23).",
          "answer": "1",
          "explain": "Dzielniki 19: 1, 19. Dzielniki 23: 1, 23. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(42, 49).",
          "answer": "7",
          "explain": "Dzielniki 42: 1, 2, 3, 6, 7, 14, 21, 42. Dzielniki 49: 1, 7, 49. Największy wspólny to 7."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(42, 45).",
          "answer": "3",
          "explain": "Dzielniki 42: 1, 2, 3, 6, 7, 14, 21, 42. Dzielniki 45: 1, 3, 5, 9, 15, 45. Największy wspólny to 3."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(19, 37).",
          "answer": "1",
          "explain": "Dzielniki 19: 1, 19. Dzielniki 37: 1, 37. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 28).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 28: 1, 2, 4, 7, 14, 28. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 33).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 33: 1, 3, 11, 33. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(7, 37).",
          "answer": "1",
          "explain": "Dzielniki 7: 1, 7. Dzielniki 37: 1, 37. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(18, 29).",
          "answer": "1",
          "explain": "Dzielniki 18: 1, 2, 3, 6, 9, 18. Dzielniki 29: 1, 29. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(10, 34).",
          "answer": "2",
          "explain": "Dzielniki 10: 1, 2, 5, 10. Dzielniki 34: 1, 2, 17, 34. Największy wspólny to 2."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(26, 36).",
          "answer": "2",
          "explain": "Dzielniki 26: 1, 2, 13, 26. Dzielniki 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Największy wspólny to 2."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(5, 10).",
          "answer": "5",
          "explain": "Dzielniki 5: 1, 5. Dzielniki 10: 1, 2, 5, 10. Największy wspólny to 5."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 38).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 38: 1, 2, 19, 38. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(29, 46).",
          "answer": "1",
          "explain": "Dzielniki 29: 1, 29. Dzielniki 46: 1, 2, 23, 46. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(21, 34).",
          "answer": "1",
          "explain": "Dzielniki 21: 1, 3, 7, 21. Dzielniki 34: 1, 2, 17, 34. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(42, 43).",
          "answer": "1",
          "explain": "Dzielniki 42: 1, 2, 3, 6, 7, 14, 21, 42. Dzielniki 43: 1, 43. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(30, 49).",
          "answer": "1",
          "explain": "Dzielniki 30: 1, 2, 3, 5, 6, 10, 15, 30. Dzielniki 49: 1, 7, 49. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(16, 49).",
          "answer": "1",
          "explain": "Dzielniki 16: 1, 2, 4, 8, 16. Dzielniki 49: 1, 7, 49. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(31, 46).",
          "answer": "1",
          "explain": "Dzielniki 31: 1, 31. Dzielniki 46: 1, 2, 23, 46. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(24, 31).",
          "answer": "1",
          "explain": "Dzielniki 24: 1, 2, 3, 4, 6, 8, 12, 24. Dzielniki 31: 1, 31. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(40, 45).",
          "answer": "5",
          "explain": "Dzielniki 40: 1, 2, 4, 5, 8, 10, 20, 40. Dzielniki 45: 1, 3, 5, 9, 15, 45. Największy wspólny to 5."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(22, 29).",
          "answer": "1",
          "explain": "Dzielniki 22: 1, 2, 11, 22. Dzielniki 29: 1, 29. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(32, 49).",
          "answer": "1",
          "explain": "Dzielniki 32: 1, 2, 4, 8, 16, 32. Dzielniki 49: 1, 7, 49. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(25, 27).",
          "answer": "1",
          "explain": "Dzielniki 25: 1, 5, 25. Dzielniki 27: 1, 3, 9, 27. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(34, 49).",
          "answer": "1",
          "explain": "Dzielniki 34: 1, 2, 17, 34. Dzielniki 49: 1, 7, 49. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 39).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 39: 1, 3, 13, 39. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(11, 40).",
          "answer": "1",
          "explain": "Dzielniki 11: 1, 11. Dzielniki 40: 1, 2, 4, 5, 8, 10, 20, 40. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(19, 26).",
          "answer": "1",
          "explain": "Dzielniki 19: 1, 19. Dzielniki 26: 1, 2, 13, 26. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 37?",
          "answer": "38",
          "explain": "1 + 37 = 38."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 36?",
          "answer": "91",
          "explain": "1 + 2 + 3 + 4 + 6 + 9 + 12 + 18 + 36 = 91."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 11?",
          "answer": "12",
          "explain": "1 + 11 = 12."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 47?",
          "answer": "48",
          "explain": "1 + 47 = 48."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 46?",
          "answer": "72",
          "explain": "1 + 2 + 23 + 46 = 72."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 39?",
          "answer": "56",
          "explain": "1 + 3 + 13 + 39 = 56."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 13?",
          "answer": "14",
          "explain": "1 + 13 = 14."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 59?",
          "answer": "60",
          "explain": "1 + 59 = 60."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 41?",
          "answer": "42",
          "explain": "1 + 41 = 42."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 23?",
          "answer": "24",
          "explain": "1 + 23 = 24."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 54?",
          "answer": "120",
          "explain": "1 + 2 + 3 + 6 + 9 + 18 + 27 + 54 = 120."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 26?",
          "answer": "42",
          "explain": "1 + 2 + 13 + 26 = 42."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 48?",
          "answer": "124",
          "explain": "1 + 2 + 3 + 4 + 6 + 8 + 12 + 16 + 24 + 48 = 124."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 20?",
          "answer": "42",
          "explain": "1 + 2 + 4 + 5 + 10 + 20 = 42."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 12?",
          "answer": "28",
          "explain": "1 + 2 + 3 + 4 + 6 + 12 = 28."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 43?",
          "answer": "44",
          "explain": "1 + 43 = 44."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 22?",
          "answer": "36",
          "explain": "1 + 2 + 11 + 22 = 36."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 19?",
          "answer": "20",
          "explain": "1 + 19 = 20."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 35?",
          "answer": "48",
          "explain": "1 + 5 + 7 + 35 = 48."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 51?",
          "answer": "72",
          "explain": "1 + 3 + 17 + 51 = 72."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 32?",
          "answer": "63",
          "explain": "1 + 2 + 4 + 8 + 16 + 32 = 63."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 58?",
          "answer": "90",
          "explain": "1 + 2 + 29 + 58 = 90."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 38?",
          "answer": "60",
          "explain": "1 + 2 + 19 + 38 = 60."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 27?",
          "answer": "40",
          "explain": "1 + 3 + 9 + 27 = 40."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 25?",
          "answer": "31",
          "explain": "1 + 5 + 25 = 31."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 29?",
          "answer": "30",
          "explain": "1 + 29 = 30."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 31?",
          "answer": "32",
          "explain": "1 + 31 = 32."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 42?",
          "answer": "96",
          "explain": "1 + 2 + 3 + 6 + 7 + 14 + 21 + 42 = 96."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 15?",
          "answer": "24",
          "explain": "1 + 3 + 5 + 15 = 24."
        },
        {
          "type": "number",
          "skill": "Suma dzielników",
          "q": "Ile wynosi suma wszystkich dzielników liczby 45?",
          "answer": "78",
          "explain": "1 + 3 + 5 + 9 + 15 + 45 = 78."
        }
      ]
    }
  ]
};
