module.exports = {
    refresh: 15000,
    blink: true,
    blinkDelay: 400,
    cleware: {
        usbSwitchCmd: './USBswitch',
        mpg123: 'mpg123'
    },
    jenkins: {
        host: 'slnxvmcdk.renn.fr.sopra',
        port: 9200,
        path: '/',
        jobs : null,
        views : ['IterHotel-1.0-UI']
    },
    transitions: {
        'red-red': [],
        'red-orange': [],
        'red-green': ['applause.mp3'],
        'orange-red': [],
        'orange-orange': [],
        'orange-green': [],
        'green-red': ['siren.mp3'],
        'green-orange': [],
        'green-green': []
    }
};