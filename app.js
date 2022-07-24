const tableBody = document.getElementById('table-body');

let flight = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "QR 0778",
        gate: "A 01",
        remarks: "ON TIME"  
    },
    {
        time: "12:39",
        destination: "LONDON",
        flight: "CL 320",
        gate: "C 31",
        remarks: "CANCELLED" 
    },
    {
        time: "13:21",
        destination: "DUBAI",
        flight: "DXB 201",
        gate: "A 019",
        remarks: "CANELLED"
    },
    {
        time: "14:01",
        destination: "FRANKFURT",
        flight: "FR 402",
        gate: "B 02",
        remarks: "ON TIME"
    },
    {
        time: "15:22",
        destination: "TOKYO",
        flight: "TK 211",
        gate: "A 32",
        remarks: "DELAYED"
    }
]

const destination = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"] 
let hour = 15 

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr") 
         
        for( const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for(const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letter)

                }, 100 * index)

            }

            tableRow.append(tableCell) 
        }

        tableBody.append(tableRow)
    }
}

populateTable() 

function generateRamdomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.ramdom() * alphabet.length))
}

function generateRamdomNumbre(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1) 
        return newNumbers.charAt(Math.floor(Math.ramdom() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.ramdom() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if(hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }

    return displayHour + ":" + generateRamdomNumber() + generateRamdomNumber()
}

function shuffleUp () {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.ramdom() * destinations.length)],
        flight: generateRamdomLetter() + generateRamdomLetter() + " " + generateRamdomNumber() + generateRamdomNumber(),
        gate: generateRamdomLetter() + " " + generateRamdomNumber() + generateRamdomNumber(), 
        remarks: remarks[Math.floor(Math.ramdom() * remarks.length)]
    }) 
    tableBody.textContent = ""
    populateTable()

}

setInterval(shuffleUp, 5000) 

