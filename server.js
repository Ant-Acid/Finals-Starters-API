const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const player = {
    'andrew wiggins': {
        'position': 'Small Forward',
        'birthPlace': 'Toronto, Ontario',
        'height': `6'7"`,
        'handedness': 'right',
        'weight': '197lb',
        'college': 'Kansas'
    },
    'Draymond Green': {
        'position': 'Power Forward',
        'birthPlace': 'Saginaw, Michigan',
        'height': `6'6"`,
        'handedness': 'right',
        'weight': '230lb',
        'college': 'Michigan State'
    },
    'Klay Thompson': {
        'position': 'Shooting Guard',
        'birthPlace': 'Los Angeles, California',
        'height': `6'6"`,
        'handedness': 'right',
        'weight': '215lb',
        'college': 'Washington State'
    },
    'Kevin Looney': {
        'position': 'Power Forward',
        'birthPlace': 'Milwaukee, Wisconsin',
        'height': `6'9"`,
        'handedness': 'right',
        'weight': '222lb',
        'college': 'UCLA'
    },
    'Jayson Tatum': {
        'position': 'Small Forward',
        'birthPlace': 'St. Louis, Missouri',
        'height': `6'8"`,
        'handedness': 'right',
        'weight': '210lb',
        'college': 'Duke'
    },
    'Al Horford': {
        'position': 'Center',
        'birthPlace': 'Puerto Plata, Dominican Republic',
        'height': `6'9"`,
        'handedness': 'right',
        'weight': '240lb',
        'college': 'Florida'
    },
    'Jaylen Brown': {
        'position': 'Shooting Guard',
        'birthPlace': 'Marietta, Georgia',
        'height': `6'6"`,
        'handedness': 'right',
        'weight': '223lb',
        'college': 'California'
    },
    'Marcus Smart': {
        'position': 'Shooting Guard',
        'birthPlace': 'Flower Mound, Texas',
        'height': `6'3"`,
        'handedness': 'right',
        'weight': '220lb',
        'college': 'Oklahoma State'
    },
    'Robert Williams': {
        'position': 'Center',
        'birthPlace': 'Shreveport, Louisiana',
        'height': `6'8"`,
        'handedness': 'right',
        'weight': '237lb',
        'college': 'Texas A&M'
    },
    'unknown': {
        'position': 'unknown',
        'birthPlace': 'unknown',
        'height': `unknown"`,
        'handedness': 'unknown',
        'weight': 'unknown',
        'college': 'unknown'

    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const playerName = request.params.name.toLowerCase()
    if (player[playerName]) {
        response.json(player[playerName])
    } else {
        response.json(player['unknown'])
    }
})
app.get('/api', (request, response) => {
    response.json(player)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})