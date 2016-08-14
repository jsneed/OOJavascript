export let fleet = [
    {
        license: 'ABC123',
        type: 'motorcycle',
        model: 'Ducati',
        offRoadHours: '6050',
        base: 'New York',
        latLong: '40.775596 -73.974615'
    },
    {
        license: 'XYZ456',
        type: 'motorcycle',
        model: 'Honda',
        offRoadHours: '2100',
        base: 'New York',
        latLong: '40.771956 -73.978531'
    },
    {
        license: 'QRS678',
        type: 'motorcycle',
        model: 'BMW',
        offRoadHours: '300',
        base: 'New York',
        latLong: '40.779423 -73.969411'
    },
    {
        license: 'AT9900',
        type: 'car',
        make: 'Tesla',
        model: 'Quick Transport',
        miles: '15600',
        latLong: '40.773272 -73.968875'
    },
    {
        license: 'AT2000',
        type: 'car',
        make: 'Uber',
        model: 'Auto Taxi Plus',
        miles: '400',
        latLong: '40.778878 -73.968435'
    },
    {
        license: 'AT2020',
        type: 'car',
        make: 'Uber',
        model: 'Zip Trip',
        miles: '12200',
        latLong: '40.778984 -73.962266'
    },
    {
        license: 'AT4000',
        type: 'car',
        make: 'Lyft',
        model: 'Pick U Up',
        miles: '400',
        latLong: '40.774036 -73.967319'
    },
    {
        license: 'ABC523',
        type: 'smartcar',                   //error
        model: 'Echo',
        offRoadHours: '6050',
        base: 'New York',
        latLong: '40.775596 -73.974615'
    },
    {
        label: 'AT4000',                    //error
        type: 'car',
        make: 'Lyft',
        model: 'Pick U Up',
        miles: '400',
        latLong: '40.774036 -73.967319'
    },
    {
        license: 'AT4000',
        type: 'car',
        make: 'Lyft',
        model: 'Pick U Up',
        miles: 'sadsadsada400',             //error
        latLong: '40.774036 -73.967319'
    }
];
