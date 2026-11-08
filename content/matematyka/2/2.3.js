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
            "Nie"
          ],
          "wrong": [
            "Tak",
            "Tylko dla liczb dwucyfrowych",
            "Tak, ale tylko dla parzystych"
          ],
          "explain": "Przez 3 decyduje suma cyfr, a nie ostatnia cyfra. Np. 12 jest podzielne przez 3, a 2 nie."
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
          "explain": "Podzielne przez 2: 768, 72518, 764, 612, 1234 – bo ostatnia cyfra jest parzysta (0, 2, 4, 6, 8).",
          "variants": [
            {
              "correct": [
                "6864",
                "2684"
              ],
              "wrong": [
                "1927",
                "5707",
                "7051",
                "2585"
              ],
              "explain": "Podzielne przez 2: 6864, 2684 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "6204",
                "4906",
                "3938"
              ],
              "wrong": [
                "7863",
                "3537",
                "1983"
              ],
              "explain": "Podzielne przez 2: 6204, 4906, 3938 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "6908",
                "6380",
                "330",
                "8800"
              ],
              "wrong": [
                "5917",
                "2725"
              ],
              "explain": "Podzielne przez 2: 6908, 6380, 330, 8800 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "594",
                "9108"
              ],
              "wrong": [
                "8647",
                "5581",
                "9501",
                "9739"
              ],
              "explain": "Podzielne przez 2: 594, 9108 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "7854",
                "2618",
                "352"
              ],
              "wrong": [
                "1479",
                "5259",
                "555"
              ],
              "explain": "Podzielne przez 2: 7854, 2618, 352 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "5918",
                "7700",
                "6248",
                "6446"
              ],
              "wrong": [
                "4433",
                "1801"
              ],
              "explain": "Podzielne przez 2: 5918, 7700, 6248, 6446 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "6864",
                "2750"
              ],
              "wrong": [
                "2039",
                "2585",
                "9851",
                "5973"
              ],
              "explain": "Podzielne przez 2: 6864, 2750 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "1914",
                "5896",
                "4862"
              ],
              "wrong": [
                "6183",
                "2823",
                "5945"
              ],
              "explain": "Podzielne przez 2: 1914, 5896, 4862 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "1188",
                "1650",
                "4796",
                "9240"
              ],
              "wrong": [
                "6519",
                "6015"
              ],
              "explain": "Podzielne przez 2: 1188, 1650, 4796, 9240 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "1804",
                "7876"
              ],
              "wrong": [
                "1451",
                "4937",
                "5875",
                "1591"
              ],
              "explain": "Podzielne przez 2: 1804, 7876 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "7194",
                "2442",
                "1474"
              ],
              "wrong": [
                "415",
                "5161",
                "2011"
              ],
              "explain": "Podzielne przez 2: 7194, 2442, 1474 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "6556",
                "1012",
                "924",
                "1518"
              ],
              "wrong": [
                "1395",
                "7667"
              ],
              "explain": "Podzielne przez 2: 6556, 1012, 924, 1518 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "2354",
                "3586"
              ],
              "wrong": [
                "6855",
                "7149",
                "289",
                "6029"
              ],
              "explain": "Podzielne przez 2: 2354, 3586 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "4994",
                "7414",
                "6666"
              ],
              "wrong": [
                "1661",
                "9753",
                "3495"
              ],
              "explain": "Podzielne przez 2: 4994, 7414, 6666 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "8734",
                "3894",
                "1606",
                "6952"
              ],
              "wrong": [
                "6841",
                "2837"
              ],
              "explain": "Podzielne przez 2: 8734, 3894, 1606, 6952 – bo ostatnia cyfra jest parzysta."
            }
          ]
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
          "explain": "Podzielne przez 2: 6030, 123456, 12472 – bo ostatnia cyfra jest parzysta (0, 2, 4, 6, 8).",
          "variants": [
            {
              "correct": [
                "6798",
                "8030"
              ],
              "wrong": [
                "3901",
                "1983",
                "2291",
                "9641"
              ],
              "explain": "Podzielne przez 2: 6798, 8030 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "3762",
                "9944",
                "2002"
              ],
              "wrong": [
                "4083",
                "6981",
                "1577"
              ],
              "explain": "Podzielne przez 2: 3762, 9944, 2002 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "4620",
                "5852",
                "7040",
                "7590"
              ],
              "wrong": [
                "3243",
                "5539"
              ],
              "explain": "Podzielne przez 2: 4620, 5852, 7040, 7590 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "2134",
                "1914"
              ],
              "wrong": [
                "5973",
                "1857",
                "8479",
                "5371"
              ],
              "explain": "Podzielne przez 2: 2134, 1914 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "6666",
                "6094",
                "3388"
              ],
              "wrong": [
                "163",
                "7303",
                "4391"
              ],
              "explain": "Podzielne przez 2: 6666, 6094, 3388 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "3322",
                "9394",
                "8734",
                "8206"
              ],
              "wrong": [
                "9697",
                "7051"
              ],
              "explain": "Podzielne przez 2: 3322, 9394, 8734, 8206 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "2068",
                "3806"
              ],
              "wrong": [
                "3859",
                "9039",
                "8843",
                "6281"
              ],
              "explain": "Podzielne przez 2: 2068, 3806 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "6512",
                "6996",
                "1232"
              ],
              "wrong": [
                "1339",
                "3523",
                "9725"
              ],
              "explain": "Podzielne przez 2: 6512, 6996, 1232 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "1056",
                "8734",
                "4840",
                "5720"
              ],
              "wrong": [
                "8703",
                "499"
              ],
              "explain": "Podzielne przez 2: 1056, 8734, 4840, 5720 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "5192",
                "8580"
              ],
              "wrong": [
                "6491",
                "4979",
                "2053",
                "1493"
              ],
              "explain": "Podzielne przez 2: 5192, 8580 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "1628",
                "792",
                "8470"
              ],
              "wrong": [
                "2221",
                "9039",
                "3201"
              ],
              "explain": "Podzielne przez 2: 1628, 792, 8470 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "198",
                "6908",
                "8074",
                "4994"
              ],
              "wrong": [
                "3005",
                "639"
              ],
              "explain": "Podzielne przez 2: 198, 6908, 8074, 4994 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "9790",
                "8580"
              ],
              "wrong": [
                "4265",
                "6883",
                "6995",
                "5287"
              ],
              "explain": "Podzielne przez 2: 9790, 8580 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "7524",
                "1980",
                "5984"
              ],
              "wrong": [
                "4727",
                "1563",
                "9025"
              ],
              "explain": "Podzielne przez 2: 7524, 1980, 5984 – bo ostatnia cyfra jest parzysta."
            },
            {
              "correct": [
                "8338",
                "4972",
                "990",
                "9988"
              ],
              "wrong": [
                "3243",
                "5245"
              ],
              "explain": "Podzielne przez 2: 8338, 4972, 990, 9988 – bo ostatnia cyfra jest parzysta."
            }
          ]
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
          "explain": "Podzielne przez 3: 612, 72720 – bo suma cyfr jest podzielna przez 3.",
          "variants": [
            {
              "correct": [
                "9603",
                "5478"
              ],
              "wrong": [
                "6260",
                "6778",
                "8731",
                "4342"
              ],
              "explain": "Podzielne przez 3: 9603, 5478 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "6336",
                "8547",
                "1815"
              ],
              "wrong": [
                "3971",
                "1514",
                "8668"
              ],
              "explain": "Podzielne przez 3: 6336, 8547, 1815 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "9174",
                "3630",
                "7128",
                "396"
              ],
              "wrong": [
                "7415",
                "3817"
              ],
              "explain": "Podzielne przez 3: 9174, 3630, 7128, 396 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "4224",
                "6864"
              ],
              "wrong": [
                "6365",
                "6904",
                "4951",
                "2879"
              ],
              "explain": "Podzielne przez 3: 4224, 6864 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "6402",
                "1584",
                "2739"
              ],
              "wrong": [
                "8794",
                "6470",
                "1031"
              ],
              "explain": "Podzielne przez 3: 6402, 1584, 2739 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "7491",
                "462",
                "1749",
                "2640"
              ],
              "wrong": [
                "2557",
                "205"
              ],
              "explain": "Podzielne przez 3: 7491, 462, 1749, 2640 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "7227",
                "7128"
              ],
              "wrong": [
                "7121",
                "8276",
                "1843",
                "7471"
              ],
              "explain": "Podzielne przez 3: 7227, 7128 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "9735",
                "9042",
                "3597"
              ],
              "wrong": [
                "9319",
                "4685",
                "3887"
              ],
              "explain": "Podzielne przez 3: 9735, 9042, 3597 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "561",
                "5181",
                "1089",
                "5247"
              ],
              "wrong": [
                "7415",
                "5672"
              ],
              "explain": "Podzielne przez 3: 561, 5181, 1089, 5247 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "6930",
                "8580"
              ],
              "wrong": [
                "3845",
                "1339",
                "5735",
                "3824"
              ],
              "explain": "Podzielne przez 3: 6930, 8580 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "1551",
                "5082",
                "8679"
              ],
              "wrong": [
                "9599",
                "7492",
                "856"
              ],
              "explain": "Podzielne przez 3: 1551, 5082, 8679 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "5907",
                "594",
                "132",
                "3003"
              ],
              "wrong": [
                "7912",
                "7114"
              ],
              "explain": "Podzielne przez 3: 5907, 594, 132, 3003 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "4884",
                "9834"
              ],
              "wrong": [
                "4307",
                "9235",
                "5896",
                "9844"
              ],
              "explain": "Podzielne przez 3: 4884, 9834 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "2475",
                "957",
                "4191"
              ],
              "wrong": [
                "5315",
                "4657",
                "8164"
              ],
              "explain": "Podzielne przez 3: 2475, 957, 4191 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "8052",
                "1551",
                "297",
                "660"
              ],
              "wrong": [
                "373",
                "7058"
              ],
              "explain": "Podzielne przez 3: 8052, 1551, 297, 660 – bo suma cyfr dzieli się przez 3."
            }
          ]
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
          "explain": "Podzielne przez 3: 8244, 7980 – bo suma cyfr jest podzielna przez 3.",
          "variants": [
            {
              "correct": [
                "9108",
                "3564"
              ],
              "wrong": [
                "4958",
                "2039",
                "4811",
                "7261"
              ],
              "explain": "Podzielne przez 3: 9108, 3564 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "726",
                "297",
                "2343"
              ],
              "wrong": [
                "7975",
                "3383",
                "5420"
              ],
              "explain": "Podzielne przez 3: 726, 297, 2343 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "3762",
                "2376",
                "3102",
                "6072"
              ],
              "wrong": [
                "8164",
                "8500"
              ],
              "explain": "Podzielne przez 3: 3762, 2376, 3102, 6072 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "3597",
                "7491"
              ],
              "wrong": [
                "5623",
                "7009",
                "1276",
                "7268"
              ],
              "explain": "Podzielne przez 3: 3597, 7491 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "2310",
                "6501",
                "5808"
              ],
              "wrong": [
                "8353",
                "6596",
                "8570"
              ],
              "explain": "Podzielne przez 3: 2310, 6501, 5808 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "2376",
                "1155",
                "8712",
                "7293"
              ],
              "wrong": [
                "2221",
                "3271"
              ],
              "explain": "Podzielne przez 3: 2376, 1155, 8712, 7293 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "5676",
                "9306"
              ],
              "wrong": [
                "5819",
                "5546",
                "1178",
                "3656"
              ],
              "explain": "Podzielne przez 3: 5676, 9306 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "9636",
                "7260",
                "2937"
              ],
              "wrong": [
                "6806",
                "2627",
                "4300"
              ],
              "explain": "Podzielne przez 3: 9636, 7260, 2937 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "6006",
                "3135",
                "4785",
                "2871"
              ],
              "wrong": [
                "8444",
                "9851"
              ],
              "explain": "Podzielne przez 3: 6006, 3135, 4785, 2871 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "6633",
                "5445"
              ],
              "wrong": [
                "2417",
                "7772",
                "3964",
                "7513"
              ],
              "explain": "Podzielne przez 3: 6633, 5445 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "7755",
                "6699",
                "9405"
              ],
              "wrong": [
                "3544",
                "5518",
                "2228"
              ],
              "explain": "Podzielne przez 3: 7755, 6699, 9405 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "4059",
                "1815",
                "9900",
                "4092"
              ],
              "wrong": [
                "8668",
                "3194"
              ],
              "explain": "Podzielne przez 3: 4059, 1815, 9900, 4092 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "3333",
                "3861"
              ],
              "wrong": [
                "6701",
                "2788",
                "1087",
                "3110"
              ],
              "explain": "Podzielne przez 3: 3333, 3861 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "9603",
                "6270",
                "7755"
              ],
              "wrong": [
                "4951",
                "2039",
                "6253"
              ],
              "explain": "Podzielne przez 3: 9603, 6270, 7755 – bo suma cyfr dzieli się przez 3."
            },
            {
              "correct": [
                "1188",
                "3564",
                "7095",
                "3927"
              ],
              "wrong": [
                "4489",
                "8101"
              ],
              "explain": "Podzielne przez 3: 1188, 3564, 7095, 3927 – bo suma cyfr dzieli się przez 3."
            }
          ]
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
          "explain": "Podzielne przez 4: 768, 4300, 696 – bo dwie ostatnie cyfry tworzą liczbę podzielną przez 4.",
          "variants": [
            {
              "correct": [
                "5236",
                "5148"
              ],
              "wrong": [
                "6351",
                "8031",
                "6463",
                "5406"
              ],
              "explain": "Podzielne przez 4: 5236, 5148 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "8932",
                "9504",
                "6776"
              ],
              "wrong": [
                "7730",
                "3705",
                "5707"
              ],
              "explain": "Podzielne przez 4: 8932, 9504, 6776 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "7788",
                "6248",
                "6732",
                "8844"
              ],
              "wrong": [
                "2046",
                "5567"
              ],
              "explain": "Podzielne przez 4: 7788, 6248, 6732, 8844 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "4840",
                "5940"
              ],
              "wrong": [
                "3285",
                "4678",
                "1563",
                "8542"
              ],
              "explain": "Podzielne przez 4: 4840, 5940 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "3916",
                "4576",
                "924"
              ],
              "wrong": [
                "9074",
                "205",
                "5511"
              ],
              "explain": "Podzielne przez 4: 3916, 4576, 924 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "5148",
                "8272",
                "5412",
                "484"
              ],
              "wrong": [
                "3334",
                "2494"
              ],
              "explain": "Podzielne przez 4: 5148, 8272, 5412, 484 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "1012",
                "6336"
              ],
              "wrong": [
                "4734",
                "9893",
                "6554",
                "5483"
              ],
              "explain": "Podzielne przez 4: 1012, 6336 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "2640",
                "880",
                "6292"
              ],
              "wrong": [
                "3229",
                "8241",
                "9725"
              ],
              "explain": "Podzielne przez 4: 2640, 880, 6292 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "2552",
                "5500",
                "836",
                "8008"
              ],
              "wrong": [
                "1619",
                "8129"
              ],
              "explain": "Podzielne przez 4: 2552, 5500, 836, 8008 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "1716",
                "8052"
              ],
              "wrong": [
                "2893",
                "359",
                "2830",
                "1381"
              ],
              "explain": "Podzielne przez 4: 1716, 8052 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "7128",
                "6644",
                "2728"
              ],
              "wrong": [
                "3698",
                "3859",
                "9410"
              ],
              "explain": "Podzielne przez 4: 7128, 6644, 2728 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "5896",
                "1760",
                "176",
                "6908"
              ],
              "wrong": [
                "7303",
                "3663"
              ],
              "explain": "Podzielne przez 4: 5896, 1760, 176, 6908 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "7832",
                "9152"
              ],
              "wrong": [
                "9585",
                "2823",
                "9186",
                "4650"
              ],
              "explain": "Podzielne przez 4: 7832, 9152 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "5632",
                "1452",
                "3036"
              ],
              "wrong": [
                "9991",
                "4587",
                "5959"
              ],
              "explain": "Podzielne przez 4: 5632, 1452, 3036 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "2156",
                "2772",
                "9372",
                "3476"
              ],
              "wrong": [
                "5861",
                "4307"
              ],
              "explain": "Podzielne przez 4: 2156, 2772, 9372, 3476 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            }
          ]
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
          "explain": "Podzielne przez 4: 123456, 7980 – bo dwie ostatnie cyfry tworzą liczbę podzielną przez 4.",
          "variants": [
            {
              "correct": [
                "6996",
                "7172"
              ],
              "wrong": [
                "667",
                "8983",
                "8941",
                "6967"
              ],
              "explain": "Podzielne przez 4: 6996, 7172 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "9460",
                "3916",
                "5148"
              ],
              "wrong": [
                "4657",
                "9725",
                "3334"
              ],
              "explain": "Podzielne przez 4: 9460, 3916, 5148 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "7524",
                "8932",
                "1848",
                "9944"
              ],
              "wrong": [
                "8990",
                "3838"
              ],
              "explain": "Podzielne przez 4: 7524, 8932, 1848, 9944 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "8712",
                "4752"
              ],
              "wrong": [
                "6890",
                "1654",
                "5385",
                "5721"
              ],
              "explain": "Podzielne przez 4: 8712, 4752 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "4268",
                "5544",
                "2156"
              ],
              "wrong": [
                "8514",
                "6757",
                "597"
              ],
              "explain": "Podzielne przez 4: 4268, 5544, 2156 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "9152",
                "2332",
                "8800",
                "1056"
              ],
              "wrong": [
                "3621",
                "3677"
              ],
              "explain": "Podzielne przez 4: 9152, 2332, 8800, 1056 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "6776",
                "4400"
              ],
              "wrong": [
                "4398",
                "4027",
                "2270",
                "1122"
              ],
              "explain": "Podzielne przez 4: 6776, 4400 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "3960",
                "2992",
                "3080"
              ],
              "wrong": [
                "5714",
                "6414",
                "9438"
              ],
              "explain": "Podzielne przez 4: 3960, 2992, 3080 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "968",
                "5324",
                "3696",
                "8668"
              ],
              "wrong": [
                "2578",
                "4643"
              ],
              "explain": "Podzielne przez 4: 968, 5324, 3696, 8668 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "9812",
                "2376"
              ],
              "wrong": [
                "478",
                "1003",
                "1899",
                "6358"
              ],
              "explain": "Podzielne przez 4: 9812, 2376 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "792",
                "440",
                "5632"
              ],
              "wrong": [
                "7002",
                "3229",
                "282"
              ],
              "explain": "Podzielne przez 4: 792, 440, 5632 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "5456",
                "8404",
                "2376",
                "5324"
              ],
              "wrong": [
                "1206",
                "926"
              ],
              "explain": "Podzielne przez 4: 5456, 8404, 2376, 5324 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "1628",
                "8668"
              ],
              "wrong": [
                "9193",
                "9487",
                "6925",
                "7121"
              ],
              "explain": "Podzielne przez 4: 1628, 8668 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "7656",
                "1276",
                "9152"
              ],
              "wrong": [
                "9515",
                "5217",
                "1493"
              ],
              "explain": "Podzielne przez 4: 7656, 1276, 9152 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            },
            {
              "correct": [
                "8096",
                "7216",
                "4752",
                "6512"
              ],
              "wrong": [
                "1339",
                "9102"
              ],
              "explain": "Podzielne przez 4: 8096, 7216, 4752, 6512 – bo liczba z dwóch ostatnich cyfr dzieli się przez 4."
            }
          ]
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
          "explain": "Podzielne przez 5: 6030, 125, 9500 – bo ostatnia cyfra to 0 lub 5.",
          "variants": [
            {
              "correct": [
                "4730",
                "7755"
              ],
              "wrong": [
                "1864",
                "1472",
                "3712",
                "2669"
              ],
              "explain": "Podzielne przez 5: 4730, 7755 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "7920",
                "1760",
                "3740"
              ],
              "wrong": [
                "7499",
                "1234",
                "8066"
              ],
              "explain": "Podzielne przez 5: 7920, 1760, 3740 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "9130",
                "5390",
                "3630",
                "8085"
              ],
              "wrong": [
                "7499",
                "6547"
              ],
              "explain": "Podzielne przez 5: 9130, 5390, 3630, 8085 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "6380",
                "8305"
              ],
              "wrong": [
                "177",
                "1248",
                "2753",
                "3089"
              ],
              "explain": "Podzielne przez 5: 6380, 8305 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "5060",
                "8525",
                "8800"
              ],
              "wrong": [
                "6456",
                "2914",
                "289"
              ],
              "explain": "Podzielne przez 5: 5060, 8525, 8800 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "1925",
                "8525",
                "3630",
                "2255"
              ],
              "wrong": [
                "4286",
                "1794"
              ],
              "explain": "Podzielne przez 5: 1925, 8525, 3630, 2255 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "9570",
                "2530"
              ],
              "wrong": [
                "5133",
                "8458",
                "7947",
                "8836"
              ],
              "explain": "Podzielne przez 5: 9570, 2530 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "1925",
                "275",
                "8085"
              ],
              "wrong": [
                "9718",
                "5371",
                "2396"
              ],
              "explain": "Podzielne przez 5: 1925, 275, 8085 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "3795",
                "6435",
                "9295",
                "7205"
              ],
              "wrong": [
                "2963",
                "436"
              ],
              "explain": "Podzielne przez 5: 3795, 6435, 9295, 7205 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "2255",
                "5885"
              ],
              "wrong": [
                "8829",
                "8857",
                "5287",
                "4559"
              ],
              "explain": "Podzielne przez 5: 2255, 5885 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "6765",
                "5720",
                "3795"
              ],
              "wrong": [
                "3362",
                "2298",
                "506"
              ],
              "explain": "Podzielne przez 5: 6765, 5720, 3795 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "990",
                "3410",
                "550",
                "6710"
              ],
              "wrong": [
                "6232",
                "373"
              ],
              "explain": "Podzielne przez 5: 990, 3410, 550, 6710 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "7865",
                "1815"
              ],
              "wrong": [
                "8178",
                "2592",
                "4643",
                "9844"
              ],
              "explain": "Podzielne przez 5: 7865, 1815 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "8470",
                "5940",
                "8745"
              ],
              "wrong": [
                "6778",
                "9949",
                "2431"
              ],
              "explain": "Podzielne przez 5: 8470, 5940, 8745 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "7645",
                "2145",
                "7315",
                "2090"
              ],
              "wrong": [
                "6813",
                "6659"
              ],
              "explain": "Podzielne przez 5: 7645, 2145, 7315, 2090 – bo ostatnia cyfra to 0 albo 5."
            }
          ]
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
          "explain": "Podzielne przez 5: 3545, 8400, 1305, 6030 – bo ostatnia cyfra to 0 lub 5.",
          "variants": [
            {
              "correct": [
                "5720",
                "5775"
              ],
              "wrong": [
                "7023",
                "352",
                "6393",
                "9564"
              ],
              "explain": "Podzielne przez 5: 5720, 5775 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "7535",
                "6325",
                "4950"
              ],
              "wrong": [
                "1094",
                "2564",
                "156"
              ],
              "explain": "Podzielne przez 5: 7535, 6325, 4950 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "1430",
                "385",
                "2200",
                "5005"
              ],
              "wrong": [
                "8402",
                "7268"
              ],
              "explain": "Podzielne przez 5: 1430, 385, 2200, 5005 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "660",
                "8690"
              ],
              "wrong": [
                "5056",
                "9389",
                "2592",
                "1752"
              ],
              "explain": "Podzielne przez 5: 660, 8690 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "3080",
                "8360",
                "1815"
              ],
              "wrong": [
                "9396",
                "4902",
                "5917"
              ],
              "explain": "Podzielne przez 5: 3080, 8360, 1815 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "6380",
                "3575",
                "8745",
                "8195"
              ],
              "wrong": [
                "4496",
                "4153"
              ],
              "explain": "Podzielne przez 5: 6380, 3575, 8745, 8195 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "9130",
                "7920"
              ],
              "wrong": [
                "3453",
                "3656",
                "9613",
                "2284"
              ],
              "explain": "Podzielne przez 5: 9130, 7920 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "825",
                "2145",
                "3685"
              ],
              "wrong": [
                "2438",
                "4461",
                "3607"
              ],
              "explain": "Podzielne przez 5: 825, 2145, 3685 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "1430",
                "2145",
                "3245",
                "8525"
              ],
              "wrong": [
                "6358",
                "6036"
              ],
              "explain": "Podzielne przez 5: 1430, 2145, 3245, 8525 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "8580",
                "5390"
              ],
              "wrong": [
                "1668",
                "1934",
                "8948",
                "5854"
              ],
              "explain": "Podzielne przez 5: 8580, 5390 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "385",
                "1595",
                "5555"
              ],
              "wrong": [
                "3103",
                "4433",
                "7058"
              ],
              "explain": "Podzielne przez 5: 385, 1595, 5555 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "9460",
                "9075",
                "2695",
                "2530"
              ],
              "wrong": [
                "1283",
                "6624"
              ],
              "explain": "Podzielne przez 5: 9460, 9075, 2695, 2530 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "9075",
                "8470"
              ],
              "wrong": [
                "2648",
                "2942",
                "4209",
                "4671"
              ],
              "explain": "Podzielne przez 5: 9075, 8470 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "4895",
                "8635",
                "495"
              ],
              "wrong": [
                "387",
                "7016",
                "1794"
              ],
              "explain": "Podzielne przez 5: 4895, 8635, 495 – bo ostatnia cyfra to 0 albo 5."
            },
            {
              "correct": [
                "5995",
                "9405",
                "2915",
                "165"
              ],
              "wrong": [
                "8731",
                "7499"
              ],
              "explain": "Podzielne przez 5: 5995, 9405, 2915, 165 – bo ostatnia cyfra to 0 albo 5."
            }
          ]
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
          "explain": "Podzielne przez 9: 1305, 612, 12033 – bo suma cyfr jest podzielna przez 9.",
          "variants": [
            {
              "correct": [
                "2178",
                "7920"
              ],
              "wrong": [
                "8976",
                "8591",
                "7401",
                "4062"
              ],
              "explain": "Podzielne przez 9: 2178, 7920 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "8118",
                "2079",
                "4356"
              ],
              "wrong": [
                "4244",
                "5280",
                "982"
              ],
              "explain": "Podzielne przez 9: 8118, 2079, 4356 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "5247",
                "2376",
                "2475",
                "3960"
              ],
              "wrong": [
                "2228",
                "5126"
              ],
              "explain": "Podzielne przez 9: 5247, 2376, 2475, 3960 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "1980",
                "4158"
              ],
              "wrong": [
                "7359",
                "9046",
                "8360",
                "2004"
              ],
              "explain": "Podzielne przez 9: 1980, 4158 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "5148",
                "3762",
                "2376"
              ],
              "wrong": [
                "6652",
                "4657",
                "4776"
              ],
              "explain": "Podzielne przez 9: 5148, 3762, 2376 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "6039",
                "792",
                "396",
                "7821"
              ],
              "wrong": [
                "7394",
                "9781"
              ],
              "explain": "Podzielne przez 9: 6039, 792, 396, 7821 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "3762",
                "8019"
              ],
              "wrong": [
                "2550",
                "4867",
                "8969",
                "2620"
              ],
              "explain": "Podzielne przez 9: 3762, 8019 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "9801",
                "7722",
                "1881"
              ],
              "wrong": [
                "8808",
                "436",
                "2410"
              ],
              "explain": "Podzielne przez 9: 9801, 7722, 1881 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "1584",
                "3861",
                "9900",
                "4158"
              ],
              "wrong": [
                "2963",
                "1990"
              ],
              "explain": "Podzielne przez 9: 1584, 3861, 9900, 4158 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "594",
                "7821"
              ],
              "wrong": [
                "6379",
                "4251",
                "9851",
                "3005"
              ],
              "explain": "Podzielne przez 9: 594, 7821 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "9603",
                "9999",
                "7920"
              ],
              "wrong": [
                "1150",
                "982",
                "2039"
              ],
              "explain": "Podzielne przez 9: 9603, 9999, 7920 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "2871",
                "3069",
                "5346",
                "297"
              ],
              "wrong": [
                "3180",
                "6421"
              ],
              "explain": "Podzielne przez 9: 2871, 3069, 5346, 297 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "3465",
                "9603"
              ],
              "wrong": [
                "6351",
                "317",
                "5938",
                "5077"
              ],
              "explain": "Podzielne przez 9: 3465, 9603 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "2871",
                "1188",
                "4851"
              ],
              "wrong": [
                "8045",
                "352",
                "2095"
              ],
              "explain": "Podzielne przez 9: 2871, 1188, 4851 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "7920",
                "1782",
                "7425",
                "7821"
              ],
              "wrong": [
                "3103",
                "2739"
              ],
              "explain": "Podzielne przez 9: 7920, 1782, 7425, 7821 – bo suma cyfr dzieli się przez 9."
            }
          ]
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
          "explain": "Podzielne przez 9: 12033 – bo suma cyfr jest podzielna przez 9.",
          "variants": [
            {
              "correct": [
                "5346",
                "3267"
              ],
              "wrong": [
                "7989",
                "2767",
                "9347",
                "8710"
              ],
              "explain": "Podzielne przez 9: 5346, 3267 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "5544",
                "5940",
                "990"
              ],
              "wrong": [
                "5343",
                "5280",
                "5434"
              ],
              "explain": "Podzielne przez 9: 5544, 5940, 990 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "6930",
                "297",
                "9108",
                "2376"
              ],
              "wrong": [
                "7499",
                "142"
              ],
              "explain": "Podzielne przez 9: 6930, 297, 9108, 2376 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "4554",
                "9306"
              ],
              "wrong": [
                "7240",
                "8857",
                "9935",
                "3194"
              ],
              "explain": "Podzielne przez 9: 4554, 9306 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "5148",
                "6336",
                "1089"
              ],
              "wrong": [
                "9620",
                "9256",
                "6078"
              ],
              "explain": "Podzielne przez 9: 5148, 6336, 1089 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "1980",
                "3069",
                "8415",
                "6534"
              ],
              "wrong": [
                "9088",
                "9536"
              ],
              "explain": "Podzielne przez 9: 1980, 3069, 8415, 6534 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "2871",
                "792"
              ],
              "wrong": [
                "6099",
                "6505",
                "1626",
                "5070"
              ],
              "explain": "Podzielne przez 9: 2871, 792 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "7920",
                "3465",
                "8316"
              ],
              "wrong": [
                "4748",
                "8290",
                "4146"
              ],
              "explain": "Podzielne przez 9: 7920, 3465, 8316 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "6237",
                "990",
                "7326",
                "495"
              ],
              "wrong": [
                "2284",
                "3887"
              ],
              "explain": "Podzielne przez 9: 6237, 990, 7326, 495 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "2574",
                "6039"
              ],
              "wrong": [
                "3201",
                "9753",
                "9179",
                "9501"
              ],
              "explain": "Podzielne przez 9: 2574, 6039 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "8415",
                "6930",
                "9504"
              ],
              "wrong": [
                "9025",
                "4090",
                "7240"
              ],
              "explain": "Podzielne przez 9: 8415, 6930, 9504 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "5544",
                "5445",
                "5247",
                "396"
              ],
              "wrong": [
                "5392",
                "4398"
              ],
              "explain": "Podzielne przez 9: 5544, 5445, 5247, 396 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "7326",
                "4554"
              ],
              "wrong": [
                "9263",
                "8472",
                "2228",
                "8031"
              ],
              "explain": "Podzielne przez 9: 7326, 4554 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "2772",
                "891",
                "8712"
              ],
              "wrong": [
                "443",
                "4321",
                "8003"
              ],
              "explain": "Podzielne przez 9: 2772, 891, 8712 – bo suma cyfr dzieli się przez 9."
            },
            {
              "correct": [
                "8811",
                "7425",
                "891",
                "9999"
              ],
              "wrong": [
                "8507",
                "485"
              ],
              "explain": "Podzielne przez 9: 8811, 7425, 891, 9999 – bo suma cyfr dzieli się przez 9."
            }
          ]
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
          "explain": "Podzielne przez 10: 6030 – bo ostatnia cyfra to 0.",
          "variants": [
            {
              "correct": [
                "9130",
                "770"
              ],
              "wrong": [
                "387",
                "8164",
                "9193",
                "7352"
              ],
              "explain": "Podzielne przez 10: 9130, 770 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "9790",
                "3410",
                "880"
              ],
              "wrong": [
                "8948",
                "7674",
                "1864"
              ],
              "explain": "Podzielne przez 10: 9790, 3410, 880 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "2090",
                "8580",
                "8690",
                "2200"
              ],
              "wrong": [
                "8815",
                "9788"
              ],
              "explain": "Podzielne przez 10: 2090, 8580, 8690, 2200 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "8580",
                "6930"
              ],
              "wrong": [
                "2305",
                "5693",
                "6274",
                "3628"
              ],
              "explain": "Podzielne przez 10: 8580, 6930 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "880",
                "5940",
                "8030"
              ],
              "wrong": [
                "1094",
                "7856",
                "9592"
              ],
              "explain": "Podzielne przez 10: 880, 5940, 8030 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "7480",
                "4840",
                "660",
                "4290"
              ],
              "wrong": [
                "2865",
                "3978"
              ],
              "explain": "Podzielne przez 10: 7480, 4840, 660, 4290 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "440",
                "4180"
              ],
              "wrong": [
                "177",
                "2781",
                "2998",
                "569"
              ],
              "explain": "Podzielne przez 10: 440, 4180 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "2310",
                "2090",
                "7150"
              ],
              "wrong": [
                "1388",
                "3124",
                "4405"
              ],
              "explain": "Podzielne przez 10: 2310, 2090, 7150 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "8690",
                "7040",
                "9350",
                "220"
              ],
              "wrong": [
                "7954",
                "6848"
              ],
              "explain": "Podzielne przez 10: 8690, 7040, 9350, 220 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "9020",
                "3190"
              ],
              "wrong": [
                "478",
                "9991",
                "5966",
                "4356"
              ],
              "explain": "Podzielne przez 10: 9020, 3190 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "8580",
                "9900",
                "3300"
              ],
              "wrong": [
                "6176",
                "1346",
                "2256"
              ],
              "explain": "Podzielne przez 10: 8580, 9900, 3300 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "8470",
                "9020",
                "5390",
                "4840"
              ],
              "wrong": [
                "786",
                "1871"
              ],
              "explain": "Podzielne przez 10: 8470, 9020, 5390, 4840 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "3520",
                "220"
              ],
              "wrong": [
                "4902",
                "3754",
                "4741",
                "9522"
              ],
              "explain": "Podzielne przez 10: 3520, 220 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "2640",
                "5060",
                "4290"
              ],
              "wrong": [
                "8535",
                "3684",
                "2074"
              ],
              "explain": "Podzielne przez 10: 2640, 5060, 4290 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "2530",
                "4950",
                "110",
                "4840"
              ],
              "wrong": [
                "758",
                "3418"
              ],
              "explain": "Podzielne przez 10: 2530, 4950, 110, 4840 – bo ostatnia cyfra to 0."
            }
          ]
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
          "explain": "Podzielne przez 10: 8400 – bo ostatnia cyfra to 0.",
          "variants": [
            {
              "correct": [
                "9900",
                "7590"
              ],
              "wrong": [
                "3943",
                "3243",
                "2578",
                "7485"
              ],
              "explain": "Podzielne przez 10: 9900, 7590 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "1210",
                "330",
                "8910"
              ],
              "wrong": [
                "5966",
                "1675",
                "7254"
              ],
              "explain": "Podzielne przez 10: 1210, 330, 8910 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "8250",
                "330",
                "1210",
                "5170"
              ],
              "wrong": [
                "1906",
                "1962"
              ],
              "explain": "Podzielne przez 10: 8250, 330, 1210, 5170 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "9570",
                "3080"
              ],
              "wrong": [
                "3355",
                "3096",
                "4846",
                "8836"
              ],
              "explain": "Podzielne przez 10: 9570, 3080 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "1210",
                "660",
                "6270"
              ],
              "wrong": [
                "6057",
                "2095",
                "6484"
              ],
              "explain": "Podzielne przez 10: 1210, 660, 6270 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "4180",
                "8470",
                "6270",
                "2420"
              ],
              "wrong": [
                "9795",
                "7345"
              ],
              "explain": "Podzielne przez 10: 4180, 8470, 6270, 2420 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "8030",
                "1100"
              ],
              "wrong": [
                "3691",
                "8143",
                "6512",
                "6967"
              ],
              "explain": "Podzielne przez 10: 8030, 1100 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "8690",
                "990",
                "8470"
              ],
              "wrong": [
                "5945",
                "6057",
                "4524"
              ],
              "explain": "Podzielne przez 10: 8690, 990, 8470 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "1760",
                "9790",
                "6820",
                "330"
              ],
              "wrong": [
                "8731",
                "7555"
              ],
              "explain": "Podzielne przez 10: 1760, 9790, 6820, 330 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "7370",
                "9020"
              ],
              "wrong": [
                "7506",
                "492",
                "3628",
                "4517"
              ],
              "explain": "Podzielne przez 10: 7370, 9020 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "5830",
                "3300",
                "3630"
              ],
              "wrong": [
                "4412",
                "4454",
                "7345"
              ],
              "explain": "Podzielne przez 10: 5830, 3300, 3630 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "7260",
                "8800",
                "110",
                "1210"
              ],
              "wrong": [
                "7604",
                "9774"
              ],
              "explain": "Podzielne przez 10: 7260, 8800, 110, 1210 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "5170",
                "7700"
              ],
              "wrong": [
                "8094",
                "1157",
                "8283",
                "4734"
              ],
              "explain": "Podzielne przez 10: 5170, 7700 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "4180",
                "7370",
                "6380"
              ],
              "wrong": [
                "2662",
                "9326",
                "3187"
              ],
              "explain": "Podzielne przez 10: 4180, 7370, 6380 – bo ostatnia cyfra to 0."
            },
            {
              "correct": [
                "7920",
                "6050",
                "4400",
                "6930"
              ],
              "wrong": [
                "2081",
                "8416"
              ],
              "explain": "Podzielne przez 10: 7920, 6050, 4400, 6930 – bo ostatnia cyfra to 0."
            }
          ]
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
          "explain": "Podzielne przez 100: 9500 – bo dwie ostatnie cyfry to 00.",
          "variants": [
            {
              "correct": [
                "2800",
                "4200"
              ],
              "wrong": [
                "9298",
                "7905",
                "8570",
                "4748"
              ],
              "explain": "Podzielne przez 100: 2800, 4200 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "1200",
                "6500",
                "9300"
              ],
              "wrong": [
                "1584",
                "2662",
                "2711"
              ],
              "explain": "Podzielne przez 100: 1200, 6500, 9300 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "1900",
                "500",
                "2600",
                "8800"
              ],
              "wrong": [
                "4041",
                "884"
              ],
              "explain": "Podzielne przez 100: 1900, 500, 2600, 8800 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "7400",
                "9500"
              ],
              "wrong": [
                "3131",
                "4874",
                "6337",
                "128"
              ],
              "explain": "Podzielne przez 100: 7400, 9500 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "5300",
                "9600",
                "6500"
              ],
              "wrong": [
                "3040",
                "1437",
                "5077"
              ],
              "explain": "Podzielne przez 100: 5300, 9600, 6500 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "5000",
                "9600",
                "8500",
                "3400"
              ],
              "wrong": [
                "1696",
                "1360"
              ],
              "explain": "Podzielne przez 100: 5000, 9600, 8500, 3400 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "500",
                "2800"
              ],
              "wrong": [
                "1402",
                "9375",
                "9935",
                "6274"
              ],
              "explain": "Podzielne przez 100: 500, 2800 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "5900",
                "2000",
                "3800"
              ],
              "wrong": [
                "7072",
                "6365",
                "7870"
              ],
              "explain": "Podzielne przez 100: 5900, 2000, 3800 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "400",
                "3300",
                "4700",
                "5900"
              ],
              "wrong": [
                "5378",
                "527"
              ],
              "explain": "Podzielne przez 100: 400, 3300, 4700, 5900 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "5900",
                "4900"
              ],
              "wrong": [
                "8031",
                "7688",
                "737",
                "5728"
              ],
              "explain": "Podzielne przez 100: 5900, 4900 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "6900",
                "900",
                "1900"
              ],
              "wrong": [
                "6792",
                "8850",
                "3733"
              ],
              "explain": "Podzielne przez 100: 6900, 900, 1900 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "5200",
                "6900",
                "8600",
                "9800"
              ],
              "wrong": [
                "1738",
                "835"
              ],
              "explain": "Podzielne przez 100: 5200, 6900, 8600, 9800 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "8900",
                "4400"
              ],
              "wrong": [
                "3103",
                "5308",
                "3915",
                "8752"
              ],
              "explain": "Podzielne przez 100: 8900, 4400 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "7800",
                "9700",
                "4300"
              ],
              "wrong": [
                "8696",
                "7912",
                "5392"
              ],
              "explain": "Podzielne przez 100: 7800, 9700, 4300 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "3300",
                "600",
                "6400",
                "2400"
              ],
              "wrong": [
                "1899",
                "3915"
              ],
              "explain": "Podzielne przez 100: 3300, 600, 6400, 2400 – bo dwie ostatnie cyfry to 00."
            }
          ]
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
          "explain": "Podzielne przez 100: 4300 – bo dwie ostatnie cyfry to 00.",
          "variants": [
            {
              "correct": [
                "3000",
                "4400"
              ],
              "wrong": [
                "6197",
                "2431",
                "233",
                "4706"
              ],
              "explain": "Podzielne przez 100: 3000, 4400 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "1300",
                "7200",
                "9000"
              ],
              "wrong": [
                "4468",
                "1164",
                "1934"
              ],
              "explain": "Podzielne przez 100: 1300, 7200, 9000 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "300",
                "8400",
                "5600",
                "2000"
              ],
              "wrong": [
                "7457",
                "5714"
              ],
              "explain": "Podzielne przez 100: 300, 8400, 5600, 2000 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "9900",
                "4800"
              ],
              "wrong": [
                "1787",
                "8325",
                "2907",
                "6855"
              ],
              "explain": "Podzielne przez 100: 9900, 4800 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "1100",
                "6500",
                "9500"
              ],
              "wrong": [
                "4881",
                "6932",
                "2956"
              ],
              "explain": "Podzielne przez 100: 1100, 6500, 9500 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "8000",
                "2500",
                "7000",
                "8900"
              ],
              "wrong": [
                "5056",
                "6806"
              ],
              "explain": "Podzielne przez 100: 8000, 2500, 7000, 8900 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "7300",
                "4900"
              ],
              "wrong": [
                "5707",
                "5399",
                "8122",
                "5420"
              ],
              "explain": "Podzielne przez 100: 7300, 4900 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "2800",
                "4200",
                "9100"
              ],
              "wrong": [
                "9193",
                "1038",
                "6953"
              ],
              "explain": "Podzielne przez 100: 2800, 4200, 9100 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "5600",
                "3900",
                "5400",
                "2500"
              ],
              "wrong": [
                "9333",
                "6638"
              ],
              "explain": "Podzielne przez 100: 5600, 3900, 5400, 2500 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "2400",
                "800"
              ],
              "wrong": [
                "1388",
                "2823",
                "7807",
                "9333"
              ],
              "explain": "Podzielne przez 100: 2400, 800 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "4200",
                "7800",
                "7000"
              ],
              "wrong": [
                "9753",
                "7534",
                "6386"
              ],
              "explain": "Podzielne przez 100: 4200, 7800, 7000 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "4000",
                "9000",
                "7200",
                "4100"
              ],
              "wrong": [
                "450",
                "2368"
              ],
              "explain": "Podzielne przez 100: 4000, 9000, 7200, 4100 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "8700",
                "8600"
              ],
              "wrong": [
                "3789",
                "2410",
                "6757",
                "4027"
              ],
              "explain": "Podzielne przez 100: 8700, 8600 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "6900",
                "7600",
                "8800"
              ],
              "wrong": [
                "7807",
                "9865",
                "6001"
              ],
              "explain": "Podzielne przez 100: 6900, 7600, 8800 – bo dwie ostatnie cyfry to 00."
            },
            {
              "correct": [
                "3400",
                "6400",
                "8500",
                "2900"
              ],
              "wrong": [
                "4041",
                "5336"
              ],
              "explain": "Podzielne przez 100: 3400, 6400, 8500, 2900 – bo dwie ostatnie cyfry to 00."
            }
          ]
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
