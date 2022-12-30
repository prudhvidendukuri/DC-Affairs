function greetings() {
    var date = new Date();
    var hours = date.getHours();
    var greetings = document.getElementById("greet")
    if (hours < 12) {
        greetings.innerText = 'Hi,Good Morning'
    } else if (hours < 17) {
        greetings.innerText = 'Hi,Good Afternoon'
    } else if (hours < 21) {
        greetings.innerText = 'Hi,Good Evening'
    } else {
        greetings.innerText = 'Hi,Good Night'
    }
}
//DATA
const quotations = [
    "Inspiration does exist, but it must find you working",
    "Long run is a misleading guide to current affairs. In the long run we are all dead.",
    "We must take the current when it serves, or lose our ventures.",
    "Life is extremely short and you cannot dance to current affairs.",
    "I'm interested in current affairs and social policy as a whole, but I don't watch politics for sport.",
    "I don't do too many jokes about current affairs, because almost every comedian always does that."
]
const todayNews = {
    heading: "PM Modi virtually flags off Howrah-NJP Vande Bharat express",
    summary: [
        "After taking part in the last rites of his mother Hiraben Modi in Gandhinagar, Prime Minister Narendra Modi on Friday virtually flagged off Vande Bharat express connecting Howrah and New Jalpaiguri in the presence of West Bengal Chief Minister Mamata Banerjee.",
        "The Prime Minister said the launch of Vande Bharat on December 30 was significant as Netaji Subhas Chandra Bose had hoisted the tricolour in Andamans on the same day in 1943.",
        "Mr. Modi also dedicated 25 new projects in West Bengal under Namami Ganga Project. One of the key projects is the restoration of the Adi Ganga River"
    ]
}
const currentAffairs = {}
//Quotations Dynamic Js
var index = Math.floor(Math.random() * quotations.length);
const quotation = document.getElementById("quotation");
quotation.innerText = quotations[index];

