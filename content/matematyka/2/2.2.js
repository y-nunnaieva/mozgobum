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
            "3",
            "2"
          ],
          "wrong": [
            "16",
            "12",
            "10",
            "8"
          ],
          "explain": "3, 2 dzielą 18 bez reszty. Wszystkie dzielniki 18: 1, 2, 3, 6, 9, 18."
        },
        {
          "id": "0010",
          "q": "Które z podanych liczb są dzielnikami liczby 36?",
          "correct": [
            "9",
            "3",
            "2"
          ],
          "wrong": [
            "27",
            "11",
            "13"
          ],
          "explain": "9, 3, 2 dzielą 36 bez reszty. Wszystkie dzielniki 36: 1, 2, 3, 4, 6, 9, 12, 18, 36."
        },
        {
          "id": "0011",
          "q": "Które z podanych liczb są dzielnikami liczby 45?",
          "correct": [
            "45"
          ],
          "wrong": [
            "27",
            "11",
            "10",
            "26",
            "14"
          ],
          "explain": "45 dzielą 45 bez reszty. Wszystkie dzielniki 45: 1, 3, 5, 9, 15, 45."
        },
        {
          "id": "0012",
          "level": 3,
          "q": "Które z podanych liczb są dzielnikami liczby 60?",
          "correct": [
            "3",
            "6",
            "1",
            "20",
            "4"
          ],
          "wrong": [
            "17"
          ],
          "explain": "3, 6, 1, 20, 4 dzielą 60 bez reszty. Wszystkie dzielniki 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60."
        },
        {
          "id": "0013",
          "level": 3,
          "q": "Które z podanych liczb są dzielnikami liczby 120?",
          "correct": [
            "10",
            "5"
          ],
          "wrong": [
            "22",
            "28",
            "19",
            "7"
          ],
          "explain": "10, 5 dzielą 120 bez reszty. Wszystkie dzielniki 120: 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120."
        },
        {
          "id": "0014",
          "level": 3,
          "q": "Które z podanych liczb są dzielnikami liczby 28?",
          "correct": [
            "14",
            "2"
          ],
          "wrong": [
            "8",
            "3",
            "56",
            "12"
          ],
          "explain": "14, 2 dzielą 28 bez reszty. Wszystkie dzielniki 28: 1, 2, 4, 7, 14, 28."
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
          "q": "Ile dzielników ma liczba 38?",
          "answer": "4",
          "explain": "Dzielniki liczby 38: 1, 2, 19, 38 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 15?",
          "answer": "4",
          "explain": "Dzielniki liczby 15: 1, 3, 5, 15 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 53?",
          "answer": "2",
          "explain": "Dzielniki liczby 53: 1, 53 – jest ich 2."
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
          "q": "Ile dzielników ma liczba 47?",
          "answer": "2",
          "explain": "Dzielniki liczby 47: 1, 47 – jest ich 2."
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
          "q": "Ile dzielników ma liczba 9?",
          "answer": "3",
          "explain": "Dzielniki liczby 9: 1, 3, 9 – jest ich 3."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 46?",
          "answer": "4",
          "explain": "Dzielniki liczby 46: 1, 2, 23, 46 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 21?",
          "answer": "4",
          "explain": "Dzielniki liczby 21: 1, 3, 7, 21 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 57?",
          "answer": "4",
          "explain": "Dzielniki liczby 57: 1, 3, 19, 57 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 55?",
          "answer": "4",
          "explain": "Dzielniki liczby 55: 1, 5, 11, 55 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 73?",
          "answer": "2",
          "explain": "Dzielniki liczby 73: 1, 73 – jest ich 2."
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
          "q": "Ile dzielników ma liczba 25?",
          "answer": "3",
          "explain": "Dzielniki liczby 25: 1, 5, 25 – jest ich 3."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 69?",
          "answer": "4",
          "explain": "Dzielniki liczby 69: 1, 3, 23, 69 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 82?",
          "answer": "4",
          "explain": "Dzielniki liczby 82: 1, 2, 41, 82 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 95?",
          "answer": "4",
          "explain": "Dzielniki liczby 95: 1, 5, 19, 95 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 59?",
          "answer": "2",
          "explain": "Dzielniki liczby 59: 1, 59 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 35?",
          "answer": "4",
          "explain": "Dzielniki liczby 35: 1, 5, 7, 35 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 22?",
          "answer": "4",
          "explain": "Dzielniki liczby 22: 1, 2, 11, 22 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 67?",
          "answer": "2",
          "explain": "Dzielniki liczby 67: 1, 67 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 83?",
          "answer": "2",
          "explain": "Dzielniki liczby 83: 1, 83 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 27?",
          "answer": "4",
          "explain": "Dzielniki liczby 27: 1, 3, 9, 27 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 39?",
          "answer": "4",
          "explain": "Dzielniki liczby 39: 1, 3, 13, 39 – jest ich 4."
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
          "q": "Ile dzielników ma liczba 49?",
          "answer": "3",
          "explain": "Dzielniki liczby 49: 1, 7, 49 – jest ich 3."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 6?",
          "answer": "4",
          "explain": "Dzielniki liczby 6: 1, 2, 3, 6 – jest ich 4."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 37?",
          "answer": "2",
          "explain": "Dzielniki liczby 37: 1, 37 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 13?",
          "answer": "2",
          "explain": "Dzielniki liczby 13: 1, 13 – jest ich 2."
        },
        {
          "type": "number",
          "skill": "Ile dzielników ma liczba",
          "q": "Ile dzielników ma liczba 61?",
          "answer": "2",
          "explain": "Dzielniki liczby 61: 1, 61 – jest ich 2."
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
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(22, 32).",
          "answer": "2",
          "explain": "Dzielniki 22: 1, 2, 11, 22. Dzielniki 32: 1, 2, 4, 8, 16, 32. Największy wspólny to 2."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(27, 33).",
          "answer": "3",
          "explain": "Dzielniki 27: 1, 3, 9, 27. Dzielniki 33: 1, 3, 11, 33. Największy wspólny to 3."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(20, 21).",
          "answer": "1",
          "explain": "Dzielniki 20: 1, 2, 4, 5, 10, 20. Dzielniki 21: 1, 3, 7, 21. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 40).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 40: 1, 2, 4, 5, 8, 10, 20, 40. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(5, 34).",
          "answer": "1",
          "explain": "Dzielniki 5: 1, 5. Dzielniki 34: 1, 2, 17, 34. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(17, 18).",
          "answer": "1",
          "explain": "Dzielniki 17: 1, 17. Dzielniki 18: 1, 2, 3, 6, 9, 18. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(28, 47).",
          "answer": "1",
          "explain": "Dzielniki 28: 1, 2, 4, 7, 14, 28. Dzielniki 47: 1, 47. Największy wspólny to 1."
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
          "q": "Oblicz NWD(30, 50).",
          "answer": "10",
          "explain": "Dzielniki 30: 1, 2, 3, 5, 6, 10, 15, 30. Dzielniki 50: 1, 2, 5, 10, 25, 50. Największy wspólny to 10."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(22, 24).",
          "answer": "2",
          "explain": "Dzielniki 22: 1, 2, 11, 22. Dzielniki 24: 1, 2, 3, 4, 6, 8, 12, 24. Największy wspólny to 2."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(11, 15).",
          "answer": "1",
          "explain": "Dzielniki 11: 1, 11. Dzielniki 15: 1, 3, 5, 15. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(4, 35).",
          "answer": "1",
          "explain": "Dzielniki 4: 1, 2, 4. Dzielniki 35: 1, 5, 7, 35. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(13, 46).",
          "answer": "1",
          "explain": "Dzielniki 13: 1, 13. Dzielniki 46: 1, 2, 23, 46. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(23, 33).",
          "answer": "1",
          "explain": "Dzielniki 23: 1, 23. Dzielniki 33: 1, 3, 11, 33. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(19, 24).",
          "answer": "1",
          "explain": "Dzielniki 19: 1, 19. Dzielniki 24: 1, 2, 3, 4, 6, 8, 12, 24. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(28, 31).",
          "answer": "1",
          "explain": "Dzielniki 28: 1, 2, 4, 7, 14, 28. Dzielniki 31: 1, 31. Największy wspólny to 1."
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
          "q": "Oblicz NWD(16, 35).",
          "answer": "1",
          "explain": "Dzielniki 16: 1, 2, 4, 8, 16. Dzielniki 35: 1, 5, 7, 35. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(23, 31).",
          "answer": "1",
          "explain": "Dzielniki 23: 1, 23. Dzielniki 31: 1, 31. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(10, 33).",
          "answer": "1",
          "explain": "Dzielniki 10: 1, 2, 5, 10. Dzielniki 33: 1, 3, 11, 33. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(16, 32).",
          "answer": "16",
          "explain": "Dzielniki 16: 1, 2, 4, 8, 16. Dzielniki 32: 1, 2, 4, 8, 16, 32. Największy wspólny to 16."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(16, 26).",
          "answer": "2",
          "explain": "Dzielniki 16: 1, 2, 4, 8, 16. Dzielniki 26: 1, 2, 13, 26. Największy wspólny to 2."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(31, 50).",
          "answer": "1",
          "explain": "Dzielniki 31: 1, 31. Dzielniki 50: 1, 2, 5, 10, 25, 50. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(14, 43).",
          "answer": "1",
          "explain": "Dzielniki 14: 1, 2, 7, 14. Dzielniki 43: 1, 43. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(7, 16).",
          "answer": "1",
          "explain": "Dzielniki 7: 1, 7. Dzielniki 16: 1, 2, 4, 8, 16. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(43, 50).",
          "answer": "1",
          "explain": "Dzielniki 43: 1, 43. Dzielniki 50: 1, 2, 5, 10, 25, 50. Największy wspólny to 1."
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
          "q": "Oblicz NWD(29, 31).",
          "answer": "1",
          "explain": "Dzielniki 29: 1, 29. Dzielniki 31: 1, 31. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(40, 43).",
          "answer": "1",
          "explain": "Dzielniki 40: 1, 2, 4, 5, 8, 10, 20, 40. Dzielniki 43: 1, 43. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(29, 40).",
          "answer": "1",
          "explain": "Dzielniki 29: 1, 29. Dzielniki 40: 1, 2, 4, 5, 8, 10, 20, 40. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(11, 19).",
          "answer": "1",
          "explain": "Dzielniki 11: 1, 11. Dzielniki 19: 1, 19. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(15, 35).",
          "answer": "5",
          "explain": "Dzielniki 15: 1, 3, 5, 15. Dzielniki 35: 1, 5, 7, 35. Największy wspólny to 5."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(5, 38).",
          "answer": "1",
          "explain": "Dzielniki 5: 1, 5. Dzielniki 38: 1, 2, 19, 38. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(13, 32).",
          "answer": "1",
          "explain": "Dzielniki 13: 1, 13. Dzielniki 32: 1, 2, 4, 8, 16, 32. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(7, 49).",
          "answer": "7",
          "explain": "Dzielniki 7: 1, 7. Dzielniki 49: 1, 7, 49. Największy wspólny to 7."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(4, 20).",
          "answer": "4",
          "explain": "Dzielniki 4: 1, 2, 4. Dzielniki 20: 1, 2, 4, 5, 10, 20. Największy wspólny to 4."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(14, 35).",
          "answer": "7",
          "explain": "Dzielniki 14: 1, 2, 7, 14. Dzielniki 35: 1, 5, 7, 35. Największy wspólny to 7."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(29, 48).",
          "answer": "1",
          "explain": "Dzielniki 29: 1, 29. Dzielniki 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(18, 31).",
          "answer": "1",
          "explain": "Dzielniki 18: 1, 2, 3, 6, 9, 18. Dzielniki 31: 1, 31. Największy wspólny to 1."
        },
        {
          "type": "number",
          "skill": "NWD małych liczb",
          "q": "Oblicz NWD(6, 44).",
          "answer": "2",
          "explain": "Dzielniki 6: 1, 2, 3, 6. Dzielniki 44: 1, 2, 4, 11, 22, 44. Największy wspólny to 2."
        }
      ]
    }
  ]
};
