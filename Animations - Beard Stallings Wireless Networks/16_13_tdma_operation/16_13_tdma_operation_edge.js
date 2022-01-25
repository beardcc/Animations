/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'stntarrows',
                display: 'block',
                type: 'image',
                rect: ['474px', '1218px','916px','236px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"stntarrows.png",'0px','0px']
            },
            {
                id: 'txta',
                display: 'block',
                type: 'image',
                rect: ['355px', '597px','1056px','536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txta.png",'0px','0px']
            },
            {
                id: 'dl1',
                display: 'block',
                type: 'image',
                rect: ['2284px', '423px','160px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dl1.png",'0px','0px']
            },
            {
                id: 'dl2',
                display: 'block',
                type: 'image',
                rect: ['1953px', '959px','808px','276px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dl2.png",'0px','0px']
            },
            {
                id: 'dl3',
                display: 'block',
                type: 'image',
                rect: ['2041px', '809px','636px','276px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dl3.png",'0px','0px']
            },
            {
                id: 'ts1',
                display: 'block',
                type: 'image',
                rect: ['2680px', '1104px','436px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ts1.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['2798px', '282px','608px','276px','auto', 'auto'],
                text: "These are the first to come on the downlink",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['855px', '1517px','124px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_3',
                display: 'block',
                type: 'image',
                rect: ['1027px', '877px','316px','216px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['355px', '1502px','124px','88px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['102px', '362px','516px','252px','auto', 'auto'],
                text: "Station 1 sends two transmissions.",
                font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'ts2',
                display: 'block',
                type: 'image',
                rect: ['2603px', '947px','436px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ts2.png",'0px','0px']
            },
            {
                id: 'ts3',
                display: 'block',
                type: 'image',
                rect: ['2528px', '795px','436px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ts3.png",'0px','0px']
            },
            {
                id: 'ts4',
                display: 'block',
                type: 'image',
                rect: ['2457px', '644px','436px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ts4.png",'0px','0px']
            },
            {
                id: 'satellitea',
                display: 'block',
                type: 'image',
                rect: ['209px', '1517px','1428px','304px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"satellitea.png",'0px','0px']
            },
            {
                id: 'satelliteb',
                display: 'block',
                type: 'image',
                rect: ['1621px', '1519px','1488px','304px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"satelliteb.png",'0px','0px']
            },
            {
                id: 'raysb',
                display: 'block',
                type: 'image',
                rect: ['1589px', '297px','42.5%','54.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"raysb.png",'0%','0%','1488px','1360px']
            },
            {
                id: 'arrowb',
                display: 'block',
                type: 'image',
                rect: ['2250px', '442px','228px','224px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrowb.png",'0px','0px']
            },
            {
                id: 'raysa',
                type: 'image',
                rect: ['250px', '408px','37.6%','50.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"raysa.png",'0%','0%','1316px','1264px']
            },
            {
                id: 'raysa2',
                display: 'block',
                type: 'image',
                rect: ['491px', '1638px','23.7%','0%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"raysa2.png",'0%','0%','828px','1236px']
            },
            {
                id: 'raysa3',
                display: 'block',
                type: 'image',
                rect: ['1467px', '1582px','60px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"raysa3.png",'0px','0px','100%','100%']
            },
            {
                id: 'gsata',
                display: 'block',
                type: 'image',
                rect: ['710px', '220px','424px','296px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gsata.png",'0px','0px'],
                transform: [[],['360']]
            },
            {
                id: 'gsatb',
                display: 'block',
                type: 'image',
                rect: ['2210px', '223px','300px','224px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gsatb.png",'0px','0px']
            },
            {
                id: '_45454',
                display: 'block',
                type: 'image',
                rect: ['2111px', '635px','500px','252px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"45454.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['1134px', '2234px','auto','auto','auto', 'auto'],
                text: "Figure 16.13 TDMA Operation",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['858px', '2118px','auto','auto','auto', 'auto'],
                text: "Click or Touch on the Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'raysa12',
                display: 'block',
                type: 'image',
                rect: ['317px', '1598px','100px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"raysa1.png",'0px','0px']
            },
            {
                id: '_4',
                display: 'block',
                type: 'image',
                rect: ['481px', '985','248px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
            },
            {
                id: 'hrays12',
                display: 'block',
                type: 'image',
                rect: ['609px', '597px','18%','12.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hrays1.png",'0%','0%','628px','304px']
            },
            {
                id: 'hrays2',
                display: 'block',
                type: 'image',
                rect: ['607px', '702px','19%','12.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hrays2.png",'0%','0%','664px','304px']
            },
            {
                id: 'hrays3',
                display: 'block',
                type: 'image',
                rect: ['531px', '838px','22.5%','12.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hrays3.png",'0%','0%','788px','304px']
            },
            {
                id: 'hrays4',
                display: 'block',
                type: 'image',
                rect: ['426px', '935px','27.1%','12.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hrays4.png",'0%','0%','948px','304px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text2}": [
                ["style", "top", '2118px'],
                ["style", "display", 'block'],
                ["style", "width", '1576px'],
                ["style", "left", '858px'],
                ["style", "font-size", '375%']
            ],
            "${_ts2}": [
                ["style", "top", '947px'],
                ["style", "left", '2603px'],
                ["style", "display", 'block']
            ],
            "${_ts4}": [
                ["style", "top", '644px'],
                ["style", "left", '2457px'],
                ["style", "display", 'block']
            ],
            "${_gsatb}": [
                ["style", "top", '223px'],
                ["style", "left", '2210px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "display", 'block']
            ],
            "${__45454}": [
                ["style", "top", '415px'],
                ["style", "height", '53px'],
                ["style", "display", 'block'],
                ["style", "left", '2301px'],
                ["style", "width", '106px']
            ],
            "${_satellitea}": [
                ["style", "top", '1517px'],
                ["style", "left", '209px'],
                ["style", "display", 'block']
            ],
            "${__3}": [
                ["style", "top", '1556px'],
                ["style", "display", 'block'],
                ["style", "height", '49px'],
                ["style", "left", '1423px'],
                ["style", "width", '72px']
            ],
            "${_hrays3}": [
                ["style", "display", 'block'],
                ["style", "top", '838px'],
                ["style", "left", '531px'],
                ["style", "width", '0%']
            ],
            "${_dl3}": [
                ["style", "top", '413px'],
                ["style", "height", '58px'],
                ["style", "display", 'block'],
                ["style", "left", '2293px'],
                ["style", "width", '134px']
            ],
            "${_dl1}": [
                ["style", "top", '423px'],
                ["style", "display", 'block'],
                ["style", "height", '48px'],
                ["style", "left", '2284px'],
                ["style", "width", '160px']
            ],
            "${_arrowb}": [
                ["style", "top", '442px'],
                ["style", "left", '2250px'],
                ["style", "display", 'block']
            ],
            "${_dl2}": [
                ["style", "top", '441px'],
                ["style", "display", 'block'],
                ["style", "height", '44px'],
                ["style", "left", '2290px'],
                ["style", "width", '128px']
            ],
            "${_Text3}": [
                ["style", "top", '362px'],
                ["style", "font-size", '375%'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '102px'],
                ["style", "width", '476px']
            ],
            "${_raysa12}": [
                ["style", "top", '1598px'],
                ["style", "display", 'block'],
                ["style", "height", '40px'],
                ["style", "left", '317px'],
                ["style", "width", '100px']
            ],
            "${_raysa2}": [
                ["style", "top", '1592px'],
                ["style", "height", '0%'],
                ["style", "left", '508px'],
                ["style", "display", 'block']
            ],
            "${_gsata}": [
                ["style", "display", 'block'],
                ["style", "top", '220px'],
                ["style", "left", '710px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_raysa3}": [
                ["style", "top", '1582px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '1467px'],
                ["style", "width", '60px']
            ],
            "${_ts1}": [
                ["style", "top", '1104px'],
                ["style", "left", '2680px'],
                ["style", "display", 'block']
            ],
            "${_raysb}": [
                ["style", "top", '297px'],
                ["style", "height", '0%'],
                ["style", "left", '1589px'],
                ["style", "display", 'block']
            ],
            "${__4}": [
                ["style", "top", '1555px'],
                ["style", "display", 'block'],
                ["style", "height", '62px'],
                ["style", "left", '345px'],
                ["style", "width", '84px']
            ],
            "${_raysa}": [
                ["style", "top", '1672px'],
                ["style", "height", '0%'],
                ["style", "left", '250px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_ts3}": [
                ["style", "top", '795px'],
                ["style", "left", '2528px'],
                ["style", "display", 'block']
            ],
            "${_hrays2}": [
                ["style", "display", 'block'],
                ["style", "top", '702px'],
                ["style", "left", '607px'],
                ["style", "width", '0%']
            ],
            "${_satelliteb}": [
                ["style", "top", '1527px'],
                ["style", "left", '1621px'],
                ["style", "display", 'block']
            ],
            "${_txta}": [
                ["style", "top", '597px'],
                ["style", "left", '354px'],
                ["style", "display", 'block']
            ],
            "${__1}": [
                ["style", "top", '1502px'],
                ["style", "display", 'block'],
                ["style", "height", '88px'],
                ["style", "left", '355px'],
                ["style", "width", '124px']
            ],
            "${_Text}": [
                ["style", "top", '2234px'],
                ["style", "font-size", '500%'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '1134px'],
                ["style", "width", '1107px']
            ],
            "${__2}": [
                ["style", "top", '1517px'],
                ["style", "display", 'block'],
                ["style", "height", '72px'],
                ["style", "left", '855px'],
                ["style", "width", '124px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2400px'],
                ["style", "width", '3500px']
            ],
            "${_hrays4}": [
                ["style", "display", 'block'],
                ["style", "top", '935px'],
                ["style", "left", '426px'],
                ["style", "width", '0%']
            ],
            "${_hrays12}": [
                ["style", "display", 'block'],
                ["style", "top", '597px'],
                ["style", "left", '609px'],
                ["style", "width", '0%']
            ],
            "${_stntarrows}": [
                ["style", "top", '1218px'],
                ["style", "left", '474px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 19250,
            autoPlay: true,
            timeline: [
                { id: "eid241", tween: [ "style", "${_dl3}", "left", '2041px', { fromValue: '2293px'}], position: 16750, duration: 1000 },
                { id: "eid108", tween: [ "style", "${_raysa2}", "top", '402px', { fromValue: '1592px'}], position: 750, duration: 1500 },
                { id: "eid124", tween: [ "style", "${__1}", "left", '578px', { fromValue: '355px'}], position: 4750, duration: 1500 },
                { id: "eid228", tween: [ "style", "${_dl2}", "left", '1950px', { fromValue: '2290px'}], position: 15500, duration: 1000 },
                { id: "eid231", tween: [ "style", "${_dl2}", "height", '276px', { fromValue: '44px'}], position: 15500, duration: 1000 },
                { id: "eid170", tween: [ "style", "${__3}", "height", '216px', { fromValue: '49px'}], position: 11613, duration: 1003 },
                { id: "eid144", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid145", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 9683, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid125", tween: [ "style", "${__1}", "top", '574px', { fromValue: '1502px'}], position: 4750, duration: 1500 },
                { id: "eid184", tween: [ "style", "${__4}", "width", '248px', { fromValue: '84px'}], position: 12616, duration: 1002 },
                { id: "eid243", tween: [ "style", "${_dl3}", "width", '636px', { fromValue: '134px'}], position: 16750, duration: 1000 },
                { id: "eid140", tween: [ "style", "${_dl1}", "width", '920px', { fromValue: '160px'}], position: 7870, duration: 1509 },
                { id: "eid141", tween: [ "style", "${_dl1}", "height", '276px', { fromValue: '48px'}], position: 7870, duration: 1509 },
                { id: "eid167", tween: [ "style", "${__3}", "left", '1027px', { fromValue: '1423px'}], position: 11613, duration: 1003 },
                { id: "eid102", tween: [ "style", "${_raysa2}", "height", '49.44%', { fromValue: '0%'}], position: 750, duration: 1500 },
                { id: "eid261", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 19250, duration: 0 },
                { id: "eid151", tween: [ "style", "${__2}", "width", '372px', { fromValue: '124px'}], position: 10500, duration: 1113 },
                { id: "eid152", tween: [ "style", "${__2}", "height", '216px', { fromValue: '72px'}], position: 10500, duration: 1113 },
                { id: "eid189", tween: [ "style", "${_hrays4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_hrays4}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_satellitea}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_satellitea}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid229", tween: [ "style", "${_dl2}", "top", '959px', { fromValue: '441px'}], position: 15500, duration: 1000 },
                { id: "eid188", tween: [ "style", "${_hrays3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid191", tween: [ "style", "${_hrays3}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_hrays2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid192", tween: [ "style", "${_hrays2}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid244", tween: [ "style", "${_dl3}", "height", '276px', { fromValue: '58px'}], position: 16750, duration: 1000 },
                { id: "eid74", tween: [ "style", "${_raysa3}", "left", '699px', { fromValue: '1467px'}], position: 750, duration: 1500 },
                { id: "eid255", tween: [ "style", "${__45454}", "left", '2111px', { fromValue: '2301px'}], position: 18000, duration: 1000 },
                { id: "eid245", tween: [ "style", "${_ts3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid246", tween: [ "style", "${_ts3}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0 },
                { id: "eid136", tween: [ "style", "${_dl1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_dl1}", "display", 'block', { fromValue: 'none'}], position: 7870, duration: 0 },
                { id: "eid76", tween: [ "style", "${_raysa3}", "width", '828px', { fromValue: '60px'}], position: 750, duration: 1500 },
                { id: "eid120", tween: [ "style", "${_arrowb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid121", tween: [ "style", "${_arrowb}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid134", tween: [ "style", "${_Text3}", "width", '476px', { fromValue: '476px'}], position: 7250, duration: 0 },
                { id: "eid232", tween: [ "style", "${_ts2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid233", tween: [ "style", "${_ts2}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid81", tween: [ "style", "${_raysa12}", "top", '402px', { fromValue: '1598px'}], position: 750, duration: 1500 },
                { id: "eid247", tween: [ "style", "${__45454}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid248", tween: [ "style", "${__45454}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid195", tween: [ "style", "${_hrays3}", "width", '22.52%', { fromValue: '0%'}], position: 14000, duration: 1000 },
                { id: "eid142", tween: [ "style", "${_ts1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid143", tween: [ "style", "${_ts1}", "display", 'block', { fromValue: 'none'}], position: 9379, duration: 0 },
                { id: "eid110", tween: [ "style", "${_stntarrows}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_stntarrows}", "display", 'block', { fromValue: 'none'}], position: 577, duration: 0 },
                { id: "eid264", tween: [ "style", "${_satelliteb}", "top", '1527px', { fromValue: '1527px'}], position: 19250, duration: 0 },
                { id: "eid5", tween: [ "style", "${_gsata}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_gsata}", "display", 'block', { fromValue: 'none'}], position: 450, duration: 0 },
                { id: "eid171", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 12616, duration: 0 },
                { id: "eid257", tween: [ "style", "${__45454}", "width", '500px', { fromValue: '106px'}], position: 18000, duration: 1000 },
                { id: "eid183", tween: [ "style", "${__4}", "top", '985px', { fromValue: '1555px'}], position: 12616, duration: 1002 },
                { id: "eid127", tween: [ "style", "${__1}", "height", '304px', { fromValue: '88px'}], position: 4750, duration: 1500 },
                { id: "eid168", tween: [ "style", "${__3}", "top", '877px', { fromValue: '1556px'}], position: 11613, duration: 1003 },
                { id: "eid242", tween: [ "style", "${_dl3}", "top", '809px', { fromValue: '413px'}], position: 16750, duration: 1000 },
                { id: "eid185", tween: [ "style", "${__4}", "height", '184px', { fromValue: '62px'}], position: 12616, duration: 1002 },
                { id: "eid122", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid153", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 11613, duration: 0 },
                { id: "eid114", tween: [ "style", "${_satelliteb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_satelliteb}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid169", tween: [ "style", "${__3}", "width", '316px', { fromValue: '72px'}], position: 11613, duration: 1003 },
                { id: "eid259", tween: [ "style", "${_ts4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_ts4}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid82", tween: [ "style", "${_raysa12}", "width", '828px', { fromValue: '100px'}], position: 750, duration: 1500 },
                { id: "eid77", tween: [ "style", "${_raysa3}", "height", '1236px', { fromValue: '56px'}], position: 750, duration: 1500 },
                { id: "eid78", tween: [ "style", "${_raysa12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_raysa12}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid256", tween: [ "style", "${__45454}", "top", '635px', { fromValue: '415px'}], position: 18000, duration: 1000 },
                { id: "eid119", tween: [ "style", "${_raysb}", "height", '54.4%', { fromValue: '0%'}], position: 3000, duration: 1500 },
                { id: "eid209", tween: [ "style", "${_dl2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${_dl2}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 },
                { id: "eid138", tween: [ "style", "${_dl1}", "left", '1885px', { fromValue: '2284px'}], position: 7870, duration: 1509 },
                { id: "eid147", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid66", tween: [ "style", "${_raysa3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_raysa3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid182", tween: [ "style", "${__4}", "left", '481px', { fromValue: '345px'}], position: 12616, duration: 1002 },
                { id: "eid112", tween: [ "style", "${_gsatb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_gsatb}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid80", tween: [ "style", "${_raysa12}", "left", '285px', { fromValue: '317px'}], position: 750, duration: 1500 },
                { id: "eid116", tween: [ "style", "${_raysb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid117", tween: [ "style", "${_raysb}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid83", tween: [ "style", "${_raysa12}", "height", '1236px', { fromValue: '40px'}], position: 750, duration: 1500 },
                { id: "eid186", tween: [ "style", "${_hrays12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid193", tween: [ "style", "${_hrays12}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid126", tween: [ "style", "${__1}", "width", '428px', { fromValue: '124px'}], position: 4750, duration: 1500 },
                { id: "eid88", tween: [ "style", "${_raysa2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_raysa2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid139", tween: [ "style", "${_dl1}", "top", '1116px', { fromValue: '423px'}], position: 7870, duration: 1509 },
                { id: "eid128", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid135", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid150", tween: [ "style", "${__2}", "top", '826px', { fromValue: '1517px'}], position: 10500, duration: 1113 },
                { id: "eid197", tween: [ "style", "${_hrays4}", "width", '27.09%', { fromValue: '0%'}], position: 14000, duration: 1000 },
                { id: "eid201", tween: [ "style", "${_hrays2}", "width", '18.98%', { fromValue: '0%'}], position: 14000, duration: 1000 },
                { id: "eid107", tween: [ "style", "${_raysa2}", "left", '491px', { fromValue: '508px'}], position: 750, duration: 1500 },
                { id: "eid234", tween: [ "style", "${_dl3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid235", tween: [ "style", "${_dl3}", "display", 'block', { fromValue: 'none'}], position: 16750, duration: 0 },
                { id: "eid230", tween: [ "style", "${_dl2}", "width", '808px', { fromValue: '128px'}], position: 15500, duration: 1000 },
                { id: "eid258", tween: [ "style", "${__45454}", "height", '252px', { fromValue: '53px'}], position: 18000, duration: 1000 },
                { id: "eid75", tween: [ "style", "${_raysa3}", "top", '407px', { fromValue: '1582px'}], position: 750, duration: 1500 },
                { id: "eid149", tween: [ "style", "${__2}", "left", '723px', { fromValue: '855px'}], position: 10500, duration: 1113 },
                { id: "eid199", tween: [ "style", "${_hrays12}", "width", '17.95%', { fromValue: '0%'}], position: 14000, duration: 1000 },
                { id: "eid208", tween: [ "style", "${_txta}", "left", '354px', { fromValue: '354px'}], position: 15000, duration: 0 },
                { id: "eid202", tween: [ "style", "${_txta}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid203", tween: [ "style", "${_txta}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-364552152");
