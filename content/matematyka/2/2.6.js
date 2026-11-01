export default {
  "title": "Obliczanie NWD i NWW",
  "icon": "🧮",
  "sections": [
    {
      "id": "sposob",
      "name": "Sposób",
      "icon": "📖",
      "questions": [
        {
          "id": "0001",
          "level": 1,
          "q": "Jak obliczyć NWD dwóch liczb z ich rozkładów na czynniki pierwsze?",
          "correct": [
            "Wybrać wspólne czynniki i je pomnożyć"
          ],
          "wrong": [
            "Pomnożyć wszystkie czynniki obu liczb",
            "Dodać obie liczby",
            "Wybrać największy czynnik"
          ],
          "explain": "Np. 315 = 3 · 3 · 5 · 7, 390 = 2 · 3 · 5 · 13 – wspólne 3 i 5, więc NWD = 15."
        },
        {
          "id": "0002",
          "level": 1,
          "q": "Jak obliczyć NWW dwóch liczb z ich rozkładów na czynniki pierwsze?",
          "correct": [
            "Pomnożyć większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej"
          ],
          "wrong": [
            "Pomnożyć tylko wspólne czynniki",
            "Pomnożyć obie liczby i podzielić przez 2",
            "Dodać wszystkie czynniki"
          ],
          "explain": "Z rozkładu mniejszej liczby skreślamy czynniki, które występują w rozkładzie większej, i mnożymy większą liczbę przez resztę."
        },
        {
          "id": "0003",
          "q": "Które zdanie o NWD i NWW jest prawdziwe?",
          "correct": [
            "NWD nie jest większy od mniejszej liczby, a NWW nie jest mniejsza od większej"
          ],
          "wrong": [
            "NWD jest zawsze większy od NWW",
            "NWW jest zawsze równa iloczynowi liczb",
            "NWD zawsze wynosi 1"
          ],
          "explain": "Wspólny dzielnik nie przekroczy mniejszej liczby, a wspólna wielokrotność nie będzie mniejsza od większej."
        }
      ]
    },
    {
      "id": "z-rozkladow",
      "name": "Z rozkładów",
      "icon": "🔗",
      "questions": [
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 280 = 2 · 2 · 2 · 5 · 7 i 316 = 2 · 2 · 79, oblicz NWD(280, 316).",
          "answer": "4",
          "explain": "Wspólne czynniki dają NWD(280, 316) = 4."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 86 = 2 · 43 i 374 = 2 · 11 · 17, oblicz NWD(86, 374).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(86, 374) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 161 = 7 · 23 i 343 = 7 · 7 · 7, oblicz NWD(161, 343).",
          "answer": "7",
          "explain": "Wspólne czynniki dają NWD(161, 343) = 7."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 94 = 2 · 47 i 164 = 2 · 2 · 41, oblicz NWD(94, 164).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(94, 164) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 169 = 13 · 13 i 390 = 2 · 3 · 5 · 13, oblicz NWD(169, 390).",
          "answer": "13",
          "explain": "Wspólne czynniki dają NWD(169, 390) = 13."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 260 = 2 · 2 · 5 · 13 i 377 = 13 · 29, oblicz NWD(260, 377).",
          "answer": "13",
          "explain": "Wspólne czynniki dają NWD(260, 377) = 13."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 92 = 2 · 2 · 23 i 242 = 2 · 11 · 11, oblicz NWD(92, 242).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(92, 242) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 48 = 2 · 2 · 2 · 2 · 3 i 99 = 3 · 3 · 11, oblicz NWD(48, 99).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(48, 99) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 33 = 3 · 11 i 220 = 2 · 2 · 5 · 11, oblicz NWD(33, 220).",
          "answer": "11",
          "explain": "Wspólne czynniki dają NWD(33, 220) = 11."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 66 = 2 · 3 · 11 i 369 = 3 · 3 · 41, oblicz NWD(66, 369).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(66, 369) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 48 = 2 · 2 · 2 · 2 · 3 i 178 = 2 · 89, oblicz NWD(48, 178).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(48, 178) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 178 = 2 · 89 i 306 = 2 · 3 · 3 · 17, oblicz NWD(178, 306).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(178, 306) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 102 = 2 · 3 · 17 i 333 = 3 · 3 · 37, oblicz NWD(102, 333).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(102, 333) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 162 = 2 · 3 · 3 · 3 · 3 i 350 = 2 · 5 · 5 · 7, oblicz NWD(162, 350).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(162, 350) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 159 = 3 · 53 i 270 = 2 · 3 · 3 · 3 · 5, oblicz NWD(159, 270).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(159, 270) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 66 = 2 · 3 · 11 i 341 = 11 · 31, oblicz NWD(66, 341).",
          "answer": "11",
          "explain": "Wspólne czynniki dają NWD(66, 341) = 11."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 85 = 5 · 17 i 374 = 2 · 11 · 17, oblicz NWD(85, 374).",
          "answer": "17",
          "explain": "Wspólne czynniki dają NWD(85, 374) = 17."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 267 = 3 · 89 i 285 = 3 · 5 · 19, oblicz NWD(267, 285).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(267, 285) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 35 = 5 · 7 i 215 = 5 · 43, oblicz NWD(35, 215).",
          "answer": "5",
          "explain": "Wspólne czynniki dają NWD(35, 215) = 5."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 40 = 2 · 2 · 2 · 5 i 98 = 2 · 7 · 7, oblicz NWD(40, 98).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(40, 98) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 51 = 3 · 17 i 216 = 2 · 2 · 2 · 3 · 3 · 3, oblicz NWD(51, 216).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(51, 216) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 26 = 2 · 13 i 247 = 13 · 19, oblicz NWD(26, 247).",
          "answer": "13",
          "explain": "Wspólne czynniki dają NWD(26, 247) = 13."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 44 = 2 · 2 · 11 i 148 = 2 · 2 · 37, oblicz NWD(44, 148).",
          "answer": "4",
          "explain": "Wspólne czynniki dają NWD(44, 148) = 4."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 296 = 2 · 2 · 2 · 37 i 386 = 2 · 193, oblicz NWD(296, 386).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(296, 386) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 69 = 3 · 23 i 168 = 2 · 2 · 2 · 3 · 7, oblicz NWD(69, 168).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(69, 168) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 55 = 5 · 11 i 88 = 2 · 2 · 2 · 11, oblicz NWD(55, 88).",
          "answer": "11",
          "explain": "Wspólne czynniki dają NWD(55, 88) = 11."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 152 = 2 · 2 · 2 · 19 i 382 = 2 · 191, oblicz NWD(152, 382).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(152, 382) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 185 = 5 · 37 i 270 = 2 · 3 · 3 · 3 · 5, oblicz NWD(185, 270).",
          "answer": "5",
          "explain": "Wspólne czynniki dają NWD(185, 270) = 5."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 159 = 3 · 53 i 267 = 3 · 89, oblicz NWD(159, 267).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(159, 267) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 66 = 2 · 3 · 11 i 200 = 2 · 2 · 2 · 5 · 5, oblicz NWD(66, 200).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(66, 200) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 245 = 5 · 7 · 7 i 252 = 2 · 2 · 3 · 3 · 7, oblicz NWD(245, 252).",
          "answer": "7",
          "explain": "Wspólne czynniki dają NWD(245, 252) = 7."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 162 = 2 · 3 · 3 · 3 · 3 i 297 = 3 · 3 · 3 · 11, oblicz NWD(162, 297).",
          "answer": "27",
          "explain": "Wspólne czynniki dają NWD(162, 297) = 27."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 160 = 2 · 2 · 2 · 2 · 2 · 5 i 340 = 2 · 2 · 5 · 17, oblicz NWD(160, 340).",
          "answer": "20",
          "explain": "Wspólne czynniki dają NWD(160, 340) = 20."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 180 = 2 · 2 · 3 · 3 · 5 i 321 = 3 · 107, oblicz NWD(180, 321).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(180, 321) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 20 = 2 · 2 · 5 i 176 = 2 · 2 · 2 · 2 · 11, oblicz NWD(20, 176).",
          "answer": "4",
          "explain": "Wspólne czynniki dają NWD(20, 176) = 4."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 161 = 7 · 23 i 238 = 2 · 7 · 17, oblicz NWD(161, 238).",
          "answer": "7",
          "explain": "Wspólne czynniki dają NWD(161, 238) = 7."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 36 = 2 · 2 · 3 · 3 i 250 = 2 · 5 · 5 · 5, oblicz NWD(36, 250).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(36, 250) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 22 = 2 · 11 i 58 = 2 · 29, oblicz NWD(22, 58).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(22, 58) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 51 = 3 · 17 i 366 = 2 · 3 · 61, oblicz NWD(51, 366).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(51, 366) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 261 = 3 · 3 · 29 i 279 = 3 · 3 · 31, oblicz NWD(261, 279).",
          "answer": "9",
          "explain": "Wspólne czynniki dają NWD(261, 279) = 9."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 22 = 2 · 11 i 76 = 2 · 2 · 19, oblicz NWW(22, 76).",
          "answer": "836",
          "explain": "76 · 11 = 836: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 39 = 3 · 13 i 57 = 3 · 19, oblicz NWW(39, 57).",
          "answer": "741",
          "explain": "57 · 13 = 741: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 66 = 2 · 3 · 11 i 111 = 3 · 37, oblicz NWW(66, 111).",
          "answer": "2442",
          "explain": "111 · 22 = 2442: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 64 = 2 · 2 · 2 · 2 · 2 · 2 i 88 = 2 · 2 · 2 · 11, oblicz NWW(64, 88).",
          "answer": "704",
          "explain": "88 · 8 = 704: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 38 = 2 · 19 i 86 = 2 · 43, oblicz NWW(38, 86).",
          "answer": "1634",
          "explain": "86 · 19 = 1634: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 111 = 3 · 37 i 114 = 2 · 3 · 19, oblicz NWW(111, 114).",
          "answer": "4218",
          "explain": "114 · 37 = 4218: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 90 = 2 · 3 · 3 · 5 i 98 = 2 · 7 · 7, oblicz NWW(90, 98).",
          "answer": "4410",
          "explain": "98 · 45 = 4410: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 78 = 2 · 3 · 13 i 112 = 2 · 2 · 2 · 2 · 7, oblicz NWW(78, 112).",
          "answer": "4368",
          "explain": "112 · 39 = 4368: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 42 = 2 · 3 · 7 i 70 = 2 · 5 · 7, oblicz NWW(42, 70).",
          "answer": "210",
          "explain": "70 · 3 = 210: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 40 = 2 · 2 · 2 · 5 i 72 = 2 · 2 · 2 · 3 · 3, oblicz NWW(40, 72).",
          "answer": "360",
          "explain": "72 · 5 = 360: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 22 = 2 · 11 i 114 = 2 · 3 · 19, oblicz NWW(22, 114).",
          "answer": "1254",
          "explain": "114 · 11 = 1254: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 54 = 2 · 3 · 3 · 3 i 70 = 2 · 5 · 7, oblicz NWW(54, 70).",
          "answer": "1890",
          "explain": "70 · 27 = 1890: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 45 = 3 · 3 · 5 i 87 = 3 · 29, oblicz NWW(45, 87).",
          "answer": "1305",
          "explain": "87 · 15 = 1305: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 10 = 2 · 5 i 78 = 2 · 3 · 13, oblicz NWW(10, 78).",
          "answer": "390",
          "explain": "78 · 5 = 390: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 24 = 2 · 2 · 2 · 3 i 105 = 3 · 5 · 7, oblicz NWW(24, 105).",
          "answer": "840",
          "explain": "105 · 8 = 840: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 88 = 2 · 2 · 2 · 11 i 92 = 2 · 2 · 23, oblicz NWW(88, 92).",
          "answer": "2024",
          "explain": "92 · 22 = 2024: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 58 = 2 · 29 i 114 = 2 · 3 · 19, oblicz NWW(58, 114).",
          "answer": "3306",
          "explain": "114 · 29 = 3306: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 81 = 3 · 3 · 3 · 3 i 120 = 2 · 2 · 2 · 3 · 5, oblicz NWW(81, 120).",
          "answer": "3240",
          "explain": "120 · 27 = 3240: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 15 = 3 · 5 i 84 = 2 · 2 · 3 · 7, oblicz NWW(15, 84).",
          "answer": "420",
          "explain": "84 · 5 = 420: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 16 = 2 · 2 · 2 · 2 i 60 = 2 · 2 · 3 · 5, oblicz NWW(16, 60).",
          "answer": "240",
          "explain": "60 · 4 = 240: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 21 = 3 · 7 i 49 = 7 · 7, oblicz NWW(21, 49).",
          "answer": "147",
          "explain": "49 · 3 = 147: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 48 = 2 · 2 · 2 · 2 · 3 i 86 = 2 · 43, oblicz NWW(48, 86).",
          "answer": "2064",
          "explain": "86 · 24 = 2064: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 32 = 2 · 2 · 2 · 2 · 2 i 96 = 2 · 2 · 2 · 2 · 2 · 3, oblicz NWW(32, 96).",
          "answer": "96",
          "explain": "96 · 1 = 96: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 60 = 2 · 2 · 3 · 5 i 118 = 2 · 59, oblicz NWW(60, 118).",
          "answer": "3540",
          "explain": "118 · 30 = 3540: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 26 = 2 · 13 i 112 = 2 · 2 · 2 · 2 · 7, oblicz NWW(26, 112).",
          "answer": "1456",
          "explain": "112 · 13 = 1456: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 35 = 5 · 7 i 77 = 7 · 11, oblicz NWW(35, 77).",
          "answer": "385",
          "explain": "77 · 5 = 385: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 114 = 2 · 3 · 19 i 116 = 2 · 2 · 29, oblicz NWW(114, 116).",
          "answer": "6612",
          "explain": "116 · 57 = 6612: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 36 = 2 · 2 · 3 · 3 i 99 = 3 · 3 · 11, oblicz NWW(36, 99).",
          "answer": "396",
          "explain": "99 · 4 = 396: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 15 = 3 · 5 i 24 = 2 · 2 · 2 · 3, oblicz NWW(15, 24).",
          "answer": "120",
          "explain": "24 · 5 = 120: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 20 = 2 · 2 · 5 i 48 = 2 · 2 · 2 · 2 · 3, oblicz NWW(20, 48).",
          "answer": "240",
          "explain": "48 · 5 = 240: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 10 = 2 · 5 i 60 = 2 · 2 · 3 · 5, oblicz NWW(10, 60).",
          "answer": "60",
          "explain": "60 · 1 = 60: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 66 = 2 · 3 · 11 i 69 = 3 · 23, oblicz NWW(66, 69).",
          "answer": "1518",
          "explain": "69 · 22 = 1518: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 28 = 2 · 2 · 7 i 86 = 2 · 43, oblicz NWW(28, 86).",
          "answer": "1204",
          "explain": "86 · 14 = 1204: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 24 = 2 · 2 · 2 · 3 i 28 = 2 · 2 · 7, oblicz NWW(24, 28).",
          "answer": "168",
          "explain": "28 · 6 = 168: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 56 = 2 · 2 · 2 · 7 i 92 = 2 · 2 · 23, oblicz NWW(56, 92).",
          "answer": "1288",
          "explain": "92 · 14 = 1288: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 36 = 2 · 2 · 3 · 3 i 39 = 3 · 13, oblicz NWW(36, 39).",
          "answer": "468",
          "explain": "39 · 12 = 468: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 15 = 3 · 5 i 72 = 2 · 2 · 2 · 3 · 3, oblicz NWW(15, 72).",
          "answer": "360",
          "explain": "72 · 5 = 360: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 20 = 2 · 2 · 5 i 115 = 5 · 23, oblicz NWW(20, 115).",
          "answer": "460",
          "explain": "115 · 4 = 460: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 56 = 2 · 2 · 2 · 7 i 96 = 2 · 2 · 2 · 2 · 2 · 3, oblicz NWW(56, 96).",
          "answer": "672",
          "explain": "96 · 7 = 672: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 14 = 2 · 7 i 49 = 7 · 7, oblicz NWW(14, 49).",
          "answer": "98",
          "explain": "49 · 2 = 98: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        }
      ]
    },
    {
      "id": "tekstowe",
      "name": "Zadania tekstowe",
      "icon": "🚌",
      "questions": [
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 44 jabłek i 99 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(44, 99) = 11. W każdej grupie: 4 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 56 chłopców i 24 dziewczynek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(56, 24) = 8. W każdej grupie: 7 i 3."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 54 czerwonych kredek i 30 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "6",
          "explain": "NWD(54, 30) = 6. W każdej grupie: 9 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 60 batonów i 36 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "12",
          "explain": "NWD(60, 36) = 12. W każdej grupie: 5 i 3."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 42 chłopców i 35 dziewczynek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "7",
          "explain": "NWD(42, 35) = 7. W każdej grupie: 6 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 60 jabłek i 108 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "12",
          "explain": "NWD(60, 108) = 12. W każdej grupie: 5 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 14 chłopców i 12 dziewczynek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "2",
          "explain": "NWD(14, 12) = 2. W każdej grupie: 7 i 6."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 56 batonów i 16 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(56, 16) = 8. W każdej grupie: 7 i 2."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 9 jabłek i 15 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "3",
          "explain": "NWD(9, 15) = 3. W każdej grupie: 3 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 99 jabłek i 44 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(99, 44) = 11. W każdej grupie: 9 i 4."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 60 batonów i 24 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "12",
          "explain": "NWD(60, 24) = 12. W każdej grupie: 5 i 2."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 30 jabłek i 35 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(30, 35) = 5. W każdej grupie: 6 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 32 jabłek i 24 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(32, 24) = 8. W każdej grupie: 4 i 3."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 18 jabłek i 24 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "6",
          "explain": "NWD(18, 24) = 6. W każdej grupie: 3 i 4."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 32 batonów i 20 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "4",
          "explain": "NWD(32, 20) = 4. W każdej grupie: 8 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 84 czerwonych kredek i 48 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "12",
          "explain": "NWD(84, 48) = 12. W każdej grupie: 7 i 4."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 25 batonów i 35 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(25, 35) = 5. W każdej grupie: 5 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 25 czerwonych kredek i 15 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(25, 15) = 5. W każdej grupie: 5 i 3."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 24 jabłek i 60 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "12",
          "explain": "NWD(24, 60) = 12. W każdej grupie: 2 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 55 batonów i 66 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(55, 66) = 11. W każdej grupie: 5 i 6."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 20 jabłek i 45 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(20, 45) = 5. W każdej grupie: 4 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 35 czerwonych kredek i 63 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "7",
          "explain": "NWD(35, 63) = 7. W każdej grupie: 5 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 35 batonów i 40 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(35, 40) = 5. W każdej grupie: 7 i 8."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 88 czerwonych kredek i 55 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(88, 55) = 11. W każdej grupie: 8 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 44 czerwonych kredek i 55 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(44, 55) = 11. W każdej grupie: 4 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 35 jabłek i 49 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "7",
          "explain": "NWD(35, 49) = 7. W każdej grupie: 5 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 20 czerwonych kredek i 45 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(20, 45) = 5. W każdej grupie: 4 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 40 jabłek i 56 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(40, 56) = 8. W każdej grupie: 5 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 72 czerwonych kredek i 64 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(72, 64) = 8. W każdej grupie: 9 i 8."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 42 jabłek i 30 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "6",
          "explain": "NWD(42, 30) = 6. W każdej grupie: 7 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 10 sekund, a drugi co 16 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "80",
          "explain": "NWW(10, 16) = 80, więc po 80 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 10 sekund, a drugi co 12 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "60",
          "explain": "NWW(10, 12) = 60, więc po 60 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 6 minut, a drugiej co 7 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "42",
          "explain": "NWW(6, 7) = 42, więc po 42 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 8 sekund, a drugi co 14 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "56",
          "explain": "NWW(8, 14) = 56, więc po 56 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 14 minut, a drugiej co 16 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "112",
          "explain": "NWW(14, 16) = 112, więc po 112 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 8 sekund, a drugi co 10 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "40",
          "explain": "NWW(8, 10) = 40, więc po 40 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 6 minut, a drugiej co 11 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "66",
          "explain": "NWW(6, 11) = 66, więc po 66 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 8 minut, a drugiej co 20 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "40",
          "explain": "NWW(8, 20) = 40, więc po 40 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 4 minut, a drugiej co 18 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "36",
          "explain": "NWW(4, 18) = 36, więc po 36 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekund, a drugi co 15 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "60",
          "explain": "NWW(4, 15) = 60, więc po 60 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 16 minut, a drugiej co 20 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "80",
          "explain": "NWW(16, 20) = 80, więc po 80 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 3 sekund, a drugi co 11 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "33",
          "explain": "NWW(3, 11) = 33, więc po 33 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 2 sekund, a drugi co 19 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "38",
          "explain": "NWW(2, 19) = 38, więc po 38 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 2 sekund, a drugi co 3 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "6",
          "explain": "NWW(2, 3) = 6, więc po 6 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 10 sekund, a drugi co 18 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "90",
          "explain": "NWW(10, 18) = 90, więc po 90 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 5 sekund, a drugi co 14 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "70",
          "explain": "NWW(5, 14) = 70, więc po 70 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 9 sekund, a drugi co 15 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "45",
          "explain": "NWW(9, 15) = 45, więc po 45 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 2 minut, a drugiej co 19 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "38",
          "explain": "NWW(2, 19) = 38, więc po 38 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 3 sekund, a drugi co 16 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "48",
          "explain": "NWW(3, 16) = 48, więc po 48 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 2 sekund, a drugi co 17 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "34",
          "explain": "NWW(2, 17) = 34, więc po 34 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 3 minut, a drugiej co 19 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "57",
          "explain": "NWW(3, 19) = 57, więc po 57 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 5 sekund, a drugi co 13 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "65",
          "explain": "NWW(5, 13) = 65, więc po 65 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 16 sekund, a drugi co 20 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "80",
          "explain": "NWW(16, 20) = 80, więc po 80 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekund, a drugi co 5 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "20",
          "explain": "NWW(4, 5) = 20, więc po 20 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekund, a drugi co 6 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "12",
          "explain": "NWW(4, 6) = 12, więc po 12 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 10 minut, a drugiej co 15 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "30",
          "explain": "NWW(10, 15) = 30, więc po 30 minut."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekund, a drugi co 17 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "68",
          "explain": "NWW(4, 17) = 68, więc po 68 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 5 sekund, a drugi co 7 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "35",
          "explain": "NWW(5, 7) = 35, więc po 35 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 6 sekund, a drugi co 15 sekund. Teraz mignęły razem. Po ilu sekundach znów mrugną razem?",
          "answer": "30",
          "explain": "NWW(6, 15) = 30, więc po 30 sekund."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 8 minut, a drugiej co 9 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "72",
          "explain": "NWW(8, 9) = 72, więc po 72 minut."
        }
      ]
    }
  ]
};
