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
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 66 = 2 · 3 · 11 i 291 = 3 · 97, oblicz NWD(66, 291).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(66, 291) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 122 = 2 · 61 i 182 = 2 · 7 · 13, oblicz NWD(122, 182).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(122, 182) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 206 = 2 · 103 i 288 = 2 · 2 · 2 · 2 · 2 · 3 · 3, oblicz NWD(206, 288).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(206, 288) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 117 = 3 · 3 · 13 i 282 = 2 · 3 · 47, oblicz NWD(117, 282).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(117, 282) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 294 = 2 · 3 · 7 · 7 i 324 = 2 · 2 · 3 · 3 · 3 · 3, oblicz NWD(294, 324).",
          "answer": "6",
          "explain": "Wspólne czynniki dają NWD(294, 324) = 6."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 57 = 3 · 19 i 216 = 2 · 2 · 2 · 3 · 3 · 3, oblicz NWD(57, 216).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(57, 216) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 95 = 5 · 19 i 170 = 2 · 5 · 17, oblicz NWD(95, 170).",
          "answer": "5",
          "explain": "Wspólne czynniki dają NWD(95, 170) = 5."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 129 = 3 · 43 i 177 = 3 · 59, oblicz NWD(129, 177).",
          "answer": "3",
          "explain": "Wspólne czynniki dają NWD(129, 177) = 3."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 68 = 2 · 2 · 17 i 348 = 2 · 2 · 3 · 29, oblicz NWD(68, 348).",
          "answer": "4",
          "explain": "Wspólne czynniki dają NWD(68, 348) = 4."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 186 = 2 · 3 · 31 i 376 = 2 · 2 · 2 · 47, oblicz NWD(186, 376).",
          "answer": "2",
          "explain": "Wspólne czynniki dają NWD(186, 376) = 2."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 340 = 2 · 2 · 5 · 17 i 392 = 2 · 2 · 2 · 7 · 7, oblicz NWD(340, 392).",
          "answer": "4",
          "explain": "Wspólne czynniki dają NWD(340, 392) = 4."
        },
        {
          "type": "number",
          "skill": "NWD z rozkładów",
          "q": "Korzystając z rozkładów 117 = 3 · 3 · 13 i 273 = 3 · 7 · 13, oblicz NWD(117, 273).",
          "answer": "39",
          "explain": "Wspólne czynniki dają NWD(117, 273) = 39."
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
          "q": "Korzystając z rozkładów 42 = 2 · 3 · 7 i 70 = 2 · 5 · 7, oblicz NWW(42, 70).",
          "answer": "210",
          "explain": "70 · 3 = 210: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
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
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 36 = 2 · 2 · 3 · 3 i 93 = 3 · 31, oblicz NWW(36, 93).",
          "answer": "1116",
          "explain": "93 · 12 = 1116: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 45 = 3 · 3 · 5 i 120 = 2 · 2 · 2 · 3 · 5, oblicz NWW(45, 120).",
          "answer": "360",
          "explain": "120 · 3 = 360: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 62 = 2 · 31 i 76 = 2 · 2 · 19, oblicz NWW(62, 76).",
          "answer": "2356",
          "explain": "76 · 31 = 2356: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 34 = 2 · 17 i 52 = 2 · 2 · 13, oblicz NWW(34, 52).",
          "answer": "884",
          "explain": "52 · 17 = 884: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 106 = 2 · 53 i 114 = 2 · 3 · 19, oblicz NWW(106, 114).",
          "answer": "6042",
          "explain": "114 · 53 = 6042: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 18 = 2 · 3 · 3 i 42 = 2 · 3 · 7, oblicz NWW(18, 42).",
          "answer": "126",
          "explain": "42 · 3 = 126: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 70 = 2 · 5 · 7 i 108 = 2 · 2 · 3 · 3 · 3, oblicz NWW(70, 108).",
          "answer": "3780",
          "explain": "108 · 35 = 3780: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 24 = 2 · 2 · 2 · 3 i 102 = 2 · 3 · 17, oblicz NWW(24, 102).",
          "answer": "408",
          "explain": "102 · 4 = 408: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 75 = 3 · 5 · 5 i 93 = 3 · 31, oblicz NWW(75, 93).",
          "answer": "2325",
          "explain": "93 · 25 = 2325: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 70 = 2 · 5 · 7 i 112 = 2 · 2 · 2 · 2 · 7, oblicz NWW(70, 112).",
          "answer": "560",
          "explain": "112 · 5 = 560: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 16 = 2 · 2 · 2 · 2 i 38 = 2 · 19, oblicz NWW(16, 38).",
          "answer": "304",
          "explain": "38 · 8 = 304: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 70 = 2 · 5 · 7 i 118 = 2 · 59, oblicz NWW(70, 118).",
          "answer": "4130",
          "explain": "118 · 35 = 4130: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 54 = 2 · 3 · 3 · 3 i 82 = 2 · 41, oblicz NWW(54, 82).",
          "answer": "2214",
          "explain": "82 · 27 = 2214: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 10 = 2 · 5 i 38 = 2 · 19, oblicz NWW(10, 38).",
          "answer": "190",
          "explain": "38 · 5 = 190: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 80 = 2 · 2 · 2 · 2 · 5 i 114 = 2 · 3 · 19, oblicz NWW(80, 114).",
          "answer": "4560",
          "explain": "114 · 40 = 4560: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 28 = 2 · 2 · 7 i 112 = 2 · 2 · 2 · 2 · 7, oblicz NWW(28, 112).",
          "answer": "112",
          "explain": "112 · 1 = 112: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 84 = 2 · 2 · 3 · 7 i 112 = 2 · 2 · 2 · 2 · 7, oblicz NWW(84, 112).",
          "answer": "336",
          "explain": "112 · 3 = 336: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 70 = 2 · 5 · 7 i 88 = 2 · 2 · 2 · 11, oblicz NWW(70, 88).",
          "answer": "3080",
          "explain": "88 · 35 = 3080: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
        },
        {
          "type": "number",
          "skill": "NWW z rozkładów",
          "q": "Korzystając z rozkładów 35 = 5 · 7 i 55 = 5 · 11, oblicz NWW(35, 55).",
          "answer": "385",
          "explain": "55 · 7 = 385: mnożymy większą liczbę przez czynniki mniejszej, których nie ma w rozkładzie większej."
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
          "q": "Mamy 70 batonów i 50 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "10",
          "explain": "NWD(70, 50) = 10. W każdej grupie: 7 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 81 jabłek i 72 gruszki. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "9",
          "explain": "NWD(81, 72) = 9. W każdej grupie: 9 i 8."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 70 batonów i 80 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "10",
          "explain": "NWD(70, 80) = 10. W każdej grupie: 7 i 8."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 32 czerwone kredki i 72 niebieskie kredki. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(32, 72) = 8. W każdej grupie: 4 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 96 czerwonych kredek i 108 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "12",
          "explain": "NWD(96, 108) = 12. W każdej grupie: 8 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 25 batonów i 40 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(25, 40) = 5. W każdej grupie: 5 i 8."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 8 czerwonych kredek i 36 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "4",
          "explain": "NWD(8, 36) = 4. W każdej grupie: 2 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 18 jabłek i 30 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "6",
          "explain": "NWD(18, 30) = 6. W każdej grupie: 3 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 40 chłopców i 25 dziewczynek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(40, 25) = 5. W każdej grupie: 8 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 63 batony i 49 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "7",
          "explain": "NWD(63, 49) = 7. W każdej grupie: 9 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 6 batonów i 8 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "2",
          "explain": "NWD(6, 8) = 2. W każdej grupie: 3 i 4."
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
          "q": "Mamy 99 batonów i 44 jabłka. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(99, 44) = 11. W każdej grupie: 9 i 4."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 70 batonów i 40 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "10",
          "explain": "NWD(70, 40) = 10. W każdej grupie: 7 i 4."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 27 czerwonych kredek i 6 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "3",
          "explain": "NWD(27, 6) = 3. W każdej grupie: 9 i 2."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 15 czerwonych kredek i 35 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(15, 35) = 5. W każdej grupie: 3 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 16 czerwonych kredek i 56 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(16, 56) = 8. W każdej grupie: 2 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 70 czerwonych kredek i 80 niebieskich kredek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "10",
          "explain": "NWD(70, 80) = 10. W każdej grupie: 7 i 8."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 10 chłopców i 12 dziewczynek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "2",
          "explain": "NWD(10, 12) = 2. W każdej grupie: 5 i 6."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 14 czerwonych kredek i 63 niebieskie kredki. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "7",
          "explain": "NWD(14, 63) = 7. W każdej grupie: 2 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 54 jabłka i 30 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "6",
          "explain": "NWD(54, 30) = 6. W każdej grupie: 9 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 10 batonów i 25 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "5",
          "explain": "NWD(10, 25) = 5. W każdej grupie: 2 i 5."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 21 jabłek i 14 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "7",
          "explain": "NWD(21, 14) = 7. W każdej grupie: 3 i 2."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 40 czerwonych kredek i 64 niebieskie kredki. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "8",
          "explain": "NWD(40, 64) = 8. W każdej grupie: 5 i 8."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 8 chłopców i 12 dziewczynek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "4",
          "explain": "NWD(8, 12) = 4. W każdej grupie: 2 i 3."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 72 batony i 27 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "9",
          "explain": "NWD(72, 27) = 9. W każdej grupie: 8 i 3."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 44 batony i 99 jabłek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(44, 99) = 11. W każdej grupie: 4 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 90 jabłek i 70 gruszek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "10",
          "explain": "NWD(90, 70) = 10. W każdej grupie: 9 i 7."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 99 czerwonych kredek i 22 niebieskie kredki. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "11",
          "explain": "NWD(99, 22) = 11. W każdej grupie: 9 i 2."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWD",
          "q": "Mamy 96 chłopców i 108 dziewczynek. Chcemy podzielić je na jak najwięcej jednakowych grup, wykorzystując wszystko. Ile będzie grup?",
          "answer": "12",
          "explain": "NWD(96, 108) = 12. W każdej grupie: 8 i 9."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekundy, a drugi co 5 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "20",
          "explain": "NWW(4, 5) = 20, więc po 20 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekundy, a drugi co 6 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "12",
          "explain": "NWW(4, 6) = 12, więc po 12 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 10 minut, a drugiej co 15 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "30",
          "explain": "NWW(10, 15) = 30, więc po 30 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekundy, a drugi co 17 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "68",
          "explain": "NWW(4, 17) = 68, więc po 68 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 5 sekund, a drugi co 7 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "35",
          "explain": "NWW(5, 7) = 35, więc po 35 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 2 minuty, a drugiej co 19 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "38",
          "explain": "NWW(2, 19) = 38, więc po 38 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 6 sekund, a drugi co 15 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "30",
          "explain": "NWW(6, 15) = 30, więc po 30 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 8 minut, a drugiej co 9 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "72",
          "explain": "NWW(8, 9) = 72, więc po 72 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 6 minut, a drugiej co 17 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "102",
          "explain": "NWW(6, 17) = 102, więc po 102 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 2 minuty, a drugiej co 11 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "22",
          "explain": "NWW(2, 11) = 22, więc po 22 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 5 sekund, a drugi co 6 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "30",
          "explain": "NWW(5, 6) = 30, więc po 30 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 2 sekundy, a drugi co 19 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "38",
          "explain": "NWW(2, 19) = 38, więc po 38 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 6 minut, a drugiej co 14 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "42",
          "explain": "NWW(6, 14) = 42, więc po 42 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 6 minut, a drugiej co 13 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "78",
          "explain": "NWW(6, 13) = 78, więc po 78 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 12 minut, a drugiej co 15 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "60",
          "explain": "NWW(12, 15) = 60, więc po 60 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 4 minuty, a drugiej co 14 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "28",
          "explain": "NWW(4, 14) = 28, więc po 28 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekundy, a drugi co 10 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "20",
          "explain": "NWW(4, 10) = 20, więc po 20 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 5 minut, a drugiej co 18 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "90",
          "explain": "NWW(5, 18) = 90, więc po 90 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 6 sekund, a drugi co 8 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "24",
          "explain": "NWW(6, 8) = 24, więc po 24 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 8 sekund, a drugi co 10 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "40",
          "explain": "NWW(8, 10) = 40, więc po 40 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 4 sekundy, a drugi co 19 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "76",
          "explain": "NWW(4, 19) = 76, więc po 76 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 15 sekund, a drugi co 18 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "90",
          "explain": "NWW(15, 18) = 90, więc po 90 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 9 sekund, a drugi co 10 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "90",
          "explain": "NWW(9, 10) = 90, więc po 90 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 14 minut, a drugiej co 16 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "112",
          "explain": "NWW(14, 16) = 112, więc po 112 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 2 minuty, a drugiej co 9 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "18",
          "explain": "NWW(2, 9) = 18, więc po 18 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 8 sekund, a drugi co 20 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "40",
          "explain": "NWW(8, 20) = 40, więc po 40 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Jeden sygnał świetlny miga co 8 sekund, a drugi co 11 sekund. Teraz mignęły razem. Po ilu sekundach znów migną razem?",
          "answer": "88",
          "explain": "NWW(8, 11) = 88, więc po 88 sekundach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 6 minut, a drugiej co 15 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "30",
          "explain": "NWW(6, 15) = 30, więc po 30 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 10 minut, a drugiej co 16 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "80",
          "explain": "NWW(10, 16) = 80, więc po 80 minutach."
        },
        {
          "type": "number",
          "skill": "Zadanie tekstowe – NWW",
          "q": "Autobus jednej linii odjeżdża co 3 minuty, a drugiej co 19 minut. Przed chwilą odjechały razem. Po ilu minutach znów odjadą jednocześnie?",
          "answer": "57",
          "explain": "NWW(3, 19) = 57, więc po 57 minutach."
        }
      ]
    }
  ]
};
