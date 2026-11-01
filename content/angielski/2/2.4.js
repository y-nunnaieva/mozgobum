export default {
  "title": "Is there…? Are there…?",
  "icon": "🤸",
  "sections": [
    {
      "id": "pytania",
      "name": "Pytania i krótkie odpowiedzi",
      "icon": "❓",
      "questions": [
        {
          "id": "0001",
          "q": "___ there a table in the kitchen?",
          "correct": [
            "Is"
          ],
          "wrong": [
            "Are",
            "Has",
            "Does"
          ],
          "explain": "Jedna rzecz: Is there…?"
        },
        {
          "id": "0002",
          "q": "___ there any flowers in your garden?",
          "correct": [
            "Are"
          ],
          "wrong": [
            "Is",
            "Have",
            "Do"
          ],
          "explain": "Wiele rzeczy: Are there any…?"
        },
        {
          "id": "0003",
          "q": "Is there a garage? – Yes, there ___.",
          "correct": [
            "is"
          ],
          "wrong": [
            "are",
            "'s",
            "has"
          ],
          "explain": "Yes, there is. (bez skrótu w krótkiej odpowiedzi)"
        },
        {
          "id": "0004",
          "q": "Are there any chairs? – No, there ___.",
          "correct": [
            "aren't"
          ],
          "wrong": [
            "isn't",
            "not",
            "haven't"
          ],
          "explain": "No, there aren't."
        },
        {
          "id": "0005",
          "q": "Is there a bathroom upstairs? – No, there ___.",
          "correct": [
            "isn't"
          ],
          "wrong": [
            "aren't",
            "not",
            "hasn't"
          ],
          "explain": "No, there isn't."
        },
        {
          "id": "0006",
          "q": "Are there ___ exercises upstairs?",
          "correct": [
            "any"
          ],
          "wrong": [
            "some",
            "a",
            "an"
          ],
          "explain": "W pytaniu – any."
        },
        {
          "id": "0007",
          "q": "How many bedrooms ___ there in your house?",
          "correct": [
            "are"
          ],
          "wrong": [
            "is",
            "have",
            "has"
          ],
          "explain": "How many… are there? – Ile… jest?"
        },
        {
          "id": "0008",
          "q": "What ___ there in your house? – There's a living room and a kitchen.",
          "correct": [
            "is"
          ],
          "wrong": [
            "are",
            "has",
            "have"
          ],
          "explain": "What is there…? – Co jest…?"
        },
        {
          "id": "0009",
          "q": "How many bathrooms are there? – ___",
          "correct": [
            "There are two."
          ],
          "wrong": [
            "There is two.",
            "Yes, there are.",
            "They are two."
          ],
          "explain": "Odpowiadamy liczbą: There are two."
        },
        {
          "id": "0010",
          "type": "order",
          "q": "Ułóż pytanie:",
          "items": [
            "How",
            "many",
            "chairs",
            "are",
            "there",
            "in the kitchen?"
          ],
          "explain": "How many chairs are there in the kitchen?"
        }
      ]
    },
    {
      "id": "meble",
      "name": "W pokoju",
      "icon": "🛏️",
      "questions": [
        {
          "id": "0011",
          "group": "w-chair",
          "type": "text",
          "q": "Jak po angielsku jest „krzesło”?",
          "answers": [
            "chair"
          ],
          "explain": "chair – krzesło."
        },
        {
          "id": "0012",
          "group": "w-chair",
          "q": "Co znaczy „chair”?",
          "correct": [
            "krzesło"
          ],
          "wrong": [
            "biurko",
            "łóżko",
            "szuflada"
          ],
          "explain": "chair – krzesło."
        },
        {
          "id": "0013",
          "group": "w-table",
          "type": "text",
          "q": "Jak po angielsku jest „stół”?",
          "answers": [
            "table"
          ],
          "explain": "table – stół."
        },
        {
          "id": "0014",
          "group": "w-table",
          "q": "Co znaczy „table”?",
          "correct": [
            "stół"
          ],
          "wrong": [
            "krzesło",
            "łóżko",
            "szuflada"
          ],
          "explain": "table – stół."
        },
        {
          "id": "0015",
          "group": "w-desk",
          "type": "text",
          "q": "Jak po angielsku jest „biurko”?",
          "answers": [
            "desk"
          ],
          "explain": "desk – biurko."
        },
        {
          "id": "0016",
          "group": "w-desk",
          "q": "Co znaczy „desk”?",
          "correct": [
            "biurko"
          ],
          "wrong": [
            "łóżko",
            "stół",
            "krzesło"
          ],
          "explain": "desk – biurko."
        },
        {
          "id": "0017",
          "group": "w-bed",
          "type": "text",
          "q": "Jak po angielsku jest „łóżko”?",
          "answers": [
            "bed"
          ],
          "explain": "bed – łóżko."
        },
        {
          "id": "0018",
          "group": "w-bed",
          "q": "Co znaczy „bed”?",
          "correct": [
            "łóżko"
          ],
          "wrong": [
            "stół",
            "krzesło",
            "wanna"
          ],
          "explain": "bed – łóżko."
        },
        {
          "id": "0019",
          "group": "w-bath",
          "type": "text",
          "q": "Jak po angielsku jest „wanna”?",
          "answers": [
            "bath"
          ],
          "explain": "bath – wanna."
        },
        {
          "id": "0020",
          "group": "w-bath",
          "q": "Co znaczy „bath”?",
          "correct": [
            "wanna"
          ],
          "wrong": [
            "biurko",
            "stół",
            "łóżko"
          ],
          "explain": "bath – wanna."
        },
        {
          "id": "0021",
          "group": "w-drawer",
          "type": "text",
          "q": "Jak po angielsku jest „szuflada”?",
          "answers": [
            "drawer"
          ],
          "explain": "drawer – szuflada."
        },
        {
          "id": "0022",
          "group": "w-drawer",
          "q": "Co znaczy „drawer”?",
          "correct": [
            "szuflada"
          ],
          "wrong": [
            "krzesło",
            "biurko",
            "wanna"
          ],
          "explain": "drawer – szuflada."
        }
      ]
    },
    {
      "id": "useful",
      "name": "Useful!",
      "icon": "💬",
      "questions": [
        {
          "id": "0023",
          "q": "Co znaczy „I like the sound of that.”?",
          "correct": [
            "Brzmi nieźle."
          ],
          "wrong": [
            "Lubię tę piosenkę.",
            "Słyszę to.",
            "Głośno tu."
          ],
          "explain": "I like the sound of that. – Brzmi nieźle."
        },
        {
          "id": "0024",
          "q": "Co znaczy „Keep your chin up!”?",
          "correct": [
            "Głowa do góry!"
          ],
          "wrong": [
            "Podnieś rękę!",
            "Uważaj!",
            "Trzymaj się z daleka!"
          ],
          "explain": "Keep your chin up! – Głowa do góry!"
        },
        {
          "id": "0025",
          "q": "Co znaczy „Poor you.”?",
          "correct": [
            "Biedactwo."
          ],
          "wrong": [
            "Jesteś biedny.",
            "Brawo ty.",
            "Twoja kolej."
          ],
          "explain": "Poor you. – Biedactwo."
        },
        {
          "id": "0026",
          "q": "Co znaczy „Ouch!”?",
          "correct": [
            "Oj! / Ojej!"
          ],
          "wrong": [
            "Hurra!",
            "Cicho!",
            "Brawo!"
          ],
          "explain": "Ouch! – Oj! / Ojej!"
        },
        {
          "id": "0027",
          "q": "Kolega zapomniał o urodzinach mamy i jest smutny. Co mówisz?",
          "correct": [
            "Keep your chin up!"
          ],
          "wrong": [
            "Ouch!",
            "I like the sound of that.",
            "See you later!"
          ],
          "explain": "Keep your chin up! – Głowa do góry!"
        },
        {
          "id": "0028",
          "q": "Kolega zgubił portfel. Co mówisz?",
          "correct": [
            "Poor you."
          ],
          "wrong": [
            "I like the sound of that.",
            "Ouch!",
            "Not again!"
          ],
          "explain": "Poor you. – Biedactwo."
        },
        {
          "id": "0029",
          "q": "Siostra proponuje wspólne wyjście do kina. Podoba ci się ten pomysł. Co mówisz?",
          "correct": [
            "I like the sound of that."
          ],
          "wrong": [
            "Poor you.",
            "Keep your chin up!",
            "Ouch!"
          ],
          "explain": "I like the sound of that. – Brzmi nieźle."
        },
        {
          "id": "0030",
          "q": "Skaleczyłeś się. Co mówisz?",
          "correct": [
            "Ouch!"
          ],
          "wrong": [
            "Poor you.",
            "I like the sound of that.",
            "Keep your chin up!"
          ],
          "explain": "Ouch! – Oj!"
        }
      ]
    }
  ]
};
