export default () => ({
    getResumeCrypto: () => {
        return [
            {title:'Bitcoin',cod:'BTC',img:require('./assets/img/Bitcoin.png'),price: '280.143',percent: '75.32%', up: true},
            {title:'Cardano',cod:'ADA',img:require('./assets/img/Cardano.png'),price: '40.143',percent: '32.12%', up: false},
            {title:'Shiba inu',cod:'SHIB',img:require('./assets/img/Shiba.png'),price: '192.143',percent: '5.32%', up: true}
        ]
    }
})