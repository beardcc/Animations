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
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['2098px', '1781px','344px','67px','auto', 'auto'],
                text: "(b) Downlink",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [338, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['1011px', '2142px','auto','auto','auto', 'auto'],
                text: "Figure 16.15 SS/TDMA Operation ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [475, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['727px', '1781px','264px','56px','auto', 'auto'],
                text: "(a) Uplink",
                font: ['Times New Roman, Times, serif', [338, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'periodsa',
                display: 'none',
                type: 'image',
                rect: ['180px', '394px','1248px','912px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"periodsa.png",'0px','0px']
            },
            {
                id: '_11a2',
                display: 'block',
                type: 'image',
                rect: ['513px', '458px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"11a.png",'0px','0px']
            },
            {
                id: '_12a',
                display: 'block',
                type: 'image',
                rect: ['410px', '678px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"12a.png",'0px','0px']
            },
            {
                id: '_13a',
                display: 'block',
                type: 'image',
                rect: ['370px', '877px','212px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"13a.png",'0px','0px']
            },
            {
                id: '_21a',
                display: 'block',
                type: 'image',
                rect: ['582px', '606px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"21a.png",'0px','0px']
            },
            {
                id: '_22a',
                display: 'block',
                type: 'image',
                rect: ['610px', '826px','212px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"22a.png",'0px','0px']
            },
            {
                id: '_23a',
                display: 'block',
                type: 'image',
                rect: ['590px', '1367px','65px','67px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"23a.png",'0px','0px']
            },
            {
                id: '_31b',
                display: 'block',
                type: 'image',
                rect: ['742px', '612px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"31b.png",'0px','0px']
            },
            {
                id: '_32b',
                display: 'block',
                type: 'image',
                rect: ['864px', '831px','212px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"32b.png",'0px','0px']
            },
            {
                id: '_33B',
                display: 'none',
                type: 'image',
                rect: ['897px', '1056px','212px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"33B.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['1202px', '330px','732px','220px','auto', 'auto'],
                text: "Stations 3 and 4 can transmit at the same time as Area A, but must share inside Area B using TDMA.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [338, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_41b',
                display: 'block',
                type: 'image',
                rect: ['814px', '466px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"41b.png",'0px','0px']
            },
            {
                id: '_42b',
                display: 'block',
                type: 'image',
                rect: ['908px', '678px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"42b.png",'0px','0px']
            },
            {
                id: '_43b',
                display: 'none',
                type: 'image',
                rect: ['1090px', '877px','212px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"43b.png",'0px','0px']
            },
            {
                id: 'uparrwa',
                display: 'block',
                type: 'image',
                rect: ['453px', '1221px','76px','156px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrwa.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['1158px', '241px','590px','140px','auto', 'auto'],
                text: "Stations in Area A share according to TDMA.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [338, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'uparrwb',
                display: 'block',
                type: 'image',
                rect: ['1130px', '1225px','56px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrwb.png",'0px','0px']
            },
            {
                id: '_4abeam',
                display: 'block',
                type: 'image',
                rect: ['1388px', '1369px','15px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4abeam.png",'0px','0px']
            },
            {
                id: '_3abeam',
                display: 'block',
                type: 'image',
                rect: ['1034px', '1393px','40px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3abeam.png",'0px','0px']
            },
            {
                id: '_2abeam',
                display: 'block',
                type: 'image',
                rect: ['286px', '220px','23.4%','52%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2abeam.png",'0%','0%','748px','1196px']
            },
            {
                id: '_1abeam',
                display: 'block',
                type: 'image',
                rect: ['246px', '228px','23.4%','52%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1abeam.png",'0%','0%','748px','1196px']
            },
            {
                id: 'areaa',
                display: 'block',
                type: 'image',
                rect: ['162px', '1369px','548px','356px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"areaa.png",'0px','0px']
            },
            {
                id: 'areab',
                display: 'block',
                type: 'image',
                rect: ['994px', '1364px','556px','364px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"areab.png",'0px','0px']
            },
            {
                id: 'areaa2',
                display: 'none',
                type: 'image',
                rect: ['1582px', '1366px','548px','356px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"areaa.png",'0px','0px']
            },
            {
                id: 'areab2',
                display: 'none',
                type: 'image',
                rect: ['2411px', '1363px','556px','364px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"areab.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['895px', '2041px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'satellitea3',
                display: 'block',
                type: 'image',
                rect: ['637px', '99px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"satellitea.png",'0px','0px']
            },
            {
                id: '_111bperiod1',
                display: 'none',
                type: 'image',
                rect: ['1640px', '850','39%','19.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"111bperiod1.png",'0%','0%','1248px','440px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['2618px', '254px','556px','272px','auto', 'auto'],
                text: "In Period 1, Area A talks to Area A and Area B to Area B. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_111bperiod2',
                display: 'none',
                type: 'image',
                rect: ['1706px', '630px','29.5%','9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"111bperiod2.png",'0%','0%','944px','208px']
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['2534px', '274px','616px','240px','auto', 'auto'],
                text: "In Period 2, Area B talks to Area A and Area A talks to Area B.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_111bperiod3',
                display: 'none',
                type: 'image',
                rect: ['1796px', '410px','22.9%','9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"111bperiod3.png",'0%','0%','732px','208px']
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['2418px', '214px','748px','288px','auto', 'auto'],
                text: "In Period 3, A to A and B to B communication occurs.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_111downbeama',
                display: 'none',
                type: 'image',
                rect: ['1591px', '95px','22.9%','58.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"111downbeama.png",'0%','0%','732px','1336px']
            },
            {
                id: 'satellitea2',
                display: 'none',
                type: 'image',
                rect: ['2086px', '78px','344px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"satellitea.png",'0px','0px']
            },
            {
                id: '_111period1',
                display: 'none',
                type: 'image',
                rect: ['1756px', '872px','988px','404px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"111period1.png",'0px','0px']
            },
            {
                id: '_111period2',
                display: 'none',
                type: 'image',
                rect: ['1856px', '674px','820px','328px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"111period2.png",'0px','0px']
            },
            {
                id: '_111period3',
                display: 'none',
                type: 'image',
                rect: ['1974px', '472px','628px','328px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"111period3.png",'0px','0px']
            },
            {
                id: 'downbeamb',
                type: 'image',
                rect: ['2204px', '91px','22.9%','58.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downbeamb.png",'0%','0%','732px','1336px']
            },
            {
                id: 'dwnarwb',
                display: 'none',
                type: 'image',
                rect: ['2528px', '1213px','132px','164px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dwnarwb.png",'0px','0px']
            },
            {
                id: 'downarrwa',
                display: 'none',
                type: 'image',
                rect: ['1825px', '1213px','132px','164px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downarrwa.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__23a}": [
                ["style", "top", '1367px'],
                ["style", "height", '67px'],
                ["style", "display", 'block'],
                ["style", "left", '590px'],
                ["style", "width", '65px']
            ],
            "${_dwnarwb}": [
                ["style", "top", '1213px'],
                ["style", "left", '2528px'],
                ["style", "display", 'none']
            ],
            "${_periodsa}": [
                ["style", "top", '394px'],
                ["style", "left", '180px'],
                ["style", "display", 'none']
            ],
            "${_Text8}": [
                ["style", "display", 'none'],
                ["style", "left", '2534px'],
                ["style", "width", '616px']
            ],
            "${_areab2}": [
                ["style", "top", '1363px'],
                ["style", "left", '2411px'],
                ["style", "display", 'none']
            ],
            "${__111bperiod1}": [
                ["style", "display", 'none'],
                ["style", "left", '1640px'],
                ["style", "width", '0%']
            ],
            "${__33B}": [
                ["style", "top", '1349px'],
                ["style", "display", 'none'],
                ["style", "height", '87px'],
                ["style", "left", '1017px'],
                ["style", "width", '84px']
            ],
            "${_areaa}": [
                ["style", "top", '1369px'],
                ["style", "left", '162px'],
                ["style", "display", 'block']
            ],
            "${__11a2}": [
                ["style", "top", '1375px'],
                ["style", "display", 'block'],
                ["style", "height", '36px'],
                ["style", "left", '258px'],
                ["style", "width", '56px']
            ],
            "${__111downbeama}": [
                ["style", "height", '0%'],
                ["style", "display", 'none'],
                ["style", "left", '1591px'],
                ["style", "top", '95px']
            ],
            "${_Text4}": [
                ["style", "top", '2041px'],
                ["style", "font-size", '375%'],
                ["style", "height", '90px'],
                ["style", "display", 'block'],
                ["style", "left", '895px'],
                ["style", "width", '1548px']
            ],
            "${_areaa2}": [
                ["style", "top", '1366px'],
                ["style", "left", '1582px'],
                ["style", "display", 'none']
            ],
            "${__4abeam}": [
                ["style", "top", '1369px'],
                ["style", "height", '24px'],
                ["style", "display", 'block'],
                ["style", "left", '1388px'],
                ["style", "width", '15px']
            ],
            "${_uparrwa}": [
                ["style", "top", '1221px'],
                ["style", "left", '453px'],
                ["style", "display", 'block']
            ],
            "${_satellitea3}": [
                ["style", "top", '99px'],
                ["style", "left", '637px'],
                ["style", "display", 'block']
            ],
            "${_areab}": [
                ["style", "top", '1364px'],
                ["style", "left", '994px'],
                ["style", "display", 'block']
            ],
            "${__41b}": [
                ["style", "top", '1366px'],
                ["style", "display", 'block'],
                ["style", "height", '54px'],
                ["style", "left", '1338px'],
                ["style", "width", '84px']
            ],
            "${__13a}": [
                ["style", "top", '1370px'],
                ["style", "display", 'block'],
                ["style", "height", '46px'],
                ["style", "left", '264px'],
                ["style", "width", '44px']
            ],
            "${__42b}": [
                ["style", "top", '1377px'],
                ["style", "display", 'block'],
                ["style", "height", '49px'],
                ["style", "left", '1352px'],
                ["style", "width", '475%']
            ],
            "${__31b}": [
                ["style", "top", '1377px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '1003px'],
                ["style", "width", '88px']
            ],
            "${_Text9}": [
                ["style", "display", 'none'],
                ["style", "top", '214px'],
                ["style", "left", '2418px'],
                ["style", "width", '748px']
            ],
            "${__111bperiod2}": [
                ["style", "display", 'none'],
                ["style", "top", '630px'],
                ["style", "left", '1706px'],
                ["style", "width", '0%']
            ],
            "${_Text5}": [
                ["style", "top", '241px'],
                ["style", "height", '140px'],
                ["style", "display", 'block'],
                ["style", "left", '1158px'],
                ["style", "width", '590px']
            ],
            "${_uparrwb}": [
                ["style", "display", 'block'],
                ["style", "left", '1130px'],
                ["style", "top", '1225px']
            ],
            "${_downbeamb}": [
                ["style", "top", '91px'],
                ["style", "left", '2204px'],
                ["style", "height", '0%']
            ],
            "${__3abeam}": [
                ["style", "top", '1393px'],
                ["style", "height", '38px'],
                ["style", "display", 'block'],
                ["style", "left", '1034px'],
                ["style", "width", '40px']
            ],
            "${_satellitea2}": [
                ["style", "top", '78px'],
                ["style", "left", '2086px'],
                ["style", "display", 'none']
            ],
            "${__111period2}": [
                ["style", "top", '197px'],
                ["style", "height", '56px'],
                ["style", "display", 'none'],
                ["style", "left", '2180px'],
                ["style", "width", '140px']
            ],
            "${_Text3}": [
                ["style", "top", '2142px'],
                ["style", "width", '1178px'],
                ["style", "left", '1011px'],
                ["style", "font-size", '475%']
            ],
            "${__111bperiod3}": [
                ["style", "display", 'none'],
                ["style", "top", '410px'],
                ["style", "left", '1796px'],
                ["style", "width", '0%']
            ],
            "${__12a}": [
                ["style", "top", '1369px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '246px'],
                ["style", "width", '88px']
            ],
            "${__43b}": [
                ["style", "top", '1377px'],
                ["style", "height", '58px'],
                ["style", "display", 'none'],
                ["style", "left", '1362px'],
                ["style", "width", '56px']
            ],
            "${__22a}": [
                ["style", "top", '1353px'],
                ["style", "display", 'block'],
                ["style", "height", '79px'],
                ["style", "left", '570px'],
                ["style", "width", '76px']
            ],
            "${__111period3}": [
                ["style", "top", '197px'],
                ["style", "height", '69px'],
                ["style", "display", 'none'],
                ["style", "left", '2189px'],
                ["style", "width", '132px']
            ],
            "${__1abeam}": [
                ["style", "top", '228px'],
                ["style", "display", 'block'],
                ["style", "left", '246px'],
                ["style", "width", '0%']
            ],
            "${__32b}": [
                ["style", "top", '1387px'],
                ["style", "display", 'block'],
                ["style", "height", '58px'],
                ["style", "left", '1024px'],
                ["style", "width", '56px']
            ],
            "${_downarrwa}": [
                ["style", "top", '1213px'],
                ["style", "left", '1825px'],
                ["style", "display", 'none']
            ],
            "${_Text6}": [
                ["style", "display", 'none'],
                ["style", "width", '732px']
            ],
            "${_Text2}": [
                ["style", "display", 'none'],
                ["style", "left", '2098px'],
                ["style", "font-size", '338%']
            ],
            "${_Text}": [
                ["style", "top", '1781px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '727px'],
                ["style", "font-size", '338%']
            ],
            "${__111period1}": [
                ["style", "top", '220px'],
                ["style", "height", '36px'],
                ["style", "display", 'none'],
                ["style", "left", '2214px'],
                ["style", "width", '88px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '3200px'],
                ["style", "height", '2300px'],
                ["style", "overflow", 'hidden']
            ],
            "${__2abeam}": [
                ["style", "top", '220px'],
                ["style", "display", 'block'],
                ["style", "left", '286px'],
                ["style", "width", '0%']
            ],
            "${_Text7}": [
                ["style", "display", 'none'],
                ["style", "font-size", '375%']
            ],
            "${__21a}": [
                ["style", "top", '1360px'],
                ["style", "display", 'block'],
                ["style", "height", '56px'],
                ["style", "left", '576px'],
                ["style", "width", '88px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21245,
            autoPlay: true,
            timeline: [
                { id: "eid111", tween: [ "style", "${__41b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${__41b}", "display", 'block', { fromValue: 'none'}], position: 7551, duration: 0 },
                { id: "eid3", tween: [ "style", "${_areaa}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_areaa}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid163", tween: [ "style", "${__43b}", "display", 'block', { fromValue: 'none'}], position: 9662, duration: 0 },
                { id: "eid216", tween: [ "style", "${__111period1}", "left", '1756px', { fromValue: '2214px'}], position: 13500, duration: 1172 },
                { id: "eid122", tween: [ "style", "${__41b}", "height", '220px', { fromValue: '54px'}], position: 7551, duration: 1106 },
                { id: "eid218", tween: [ "style", "${__111period1}", "width", '988px', { fromValue: '88px'}], position: 13500, duration: 1172 },
                { id: "eid102", tween: [ "style", "${__3abeam}", "top", '228px', { fromValue: '1393px'}], position: 6550, duration: 1001 },
                { id: "eid120", tween: [ "style", "${__41b}", "top", '466px', { fromValue: '1366px'}], position: 7551, duration: 1106 },
                { id: "eid107", tween: [ "style", "${__4abeam}", "left", '655px', { fromValue: '1388px'}], position: 6550, duration: 1001 },
                { id: "eid257", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 21126, duration: 0 },
                { id: "eid33", tween: [ "style", "${__11a2}", "left", '513px', { fromValue: '258px'}], position: 1800, duration: 1000 },
                { id: "eid209", tween: [ "style", "${__111period1}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid89", tween: [ "style", "${__23a}", "height", '220px', { fromValue: '67px'}], position: 4595, duration: 1009 },
                { id: "eid178", tween: [ "style", "${__33B}", "display", 'block', { fromValue: 'none'}], position: 10100, duration: 0 },
                { id: "eid68", tween: [ "style", "${__22a}", "left", '610px', { fromValue: '570px'}], position: 3500, duration: 1004 },
                { id: "eid150", tween: [ "style", "${__42b}", "height", '220px', { fromValue: '49px'}], position: 8657, duration: 1005 },
                { id: "eid198", tween: [ "style", "${_downarrwa}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid159", tween: [ "style", "${__32b}", "left", '864px', { fromValue: '1024px'}], position: 9096, duration: 1004 },
                { id: "eid1", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid70", tween: [ "style", "${__22a}", "width", '212px', { fromValue: '76px'}], position: 3500, duration: 1004 },
                { id: "eid255", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 20694, duration: 0 },
                { id: "eid256", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid162", tween: [ "style", "${__32b}", "height", '220px', { fromValue: '58px'}], position: 9096, duration: 1004 },
                { id: "eid45", tween: [ "style", "${__21a}", "top", '606px', { fromValue: '1360px'}], position: 2355, duration: 1000 },
                { id: "eid13", tween: [ "style", "${__2abeam}", "width", '23.38%', { fromValue: '0%'}], position: 800, duration: 1000 },
                { id: "eid86", tween: [ "style", "${__23a}", "left", '565px', { fromValue: '590px'}], position: 4595, duration: 1009 },
                { id: "eid225", tween: [ "style", "${__111period2}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0 },
                { id: "eid186", tween: [ "style", "${__33B}", "top", '1056px', { fromValue: '1349px'}], position: 10100, duration: 1001 },
                { id: "eid88", tween: [ "style", "${__23a}", "width", '212px', { fromValue: '65px'}], position: 4595, duration: 1009 },
                { id: "eid108", tween: [ "style", "${__4abeam}", "top", '197px', { fromValue: '1369px'}], position: 6550, duration: 1001 },
                { id: "eid233", tween: [ "style", "${__111period2}", "top", '674px', { fromValue: '197px'}], position: 16250, duration: 934 },
                { id: "eid91", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5604, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid10", tween: [ "style", "${__2abeam}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${__2abeam}", "display", 'block', { fromValue: 'none'}], position: 800, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 18184, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid236", tween: [ "style", "${__111bperiod2}", "display", 'block', { fromValue: 'none'}], position: 17184, duration: 0 },
                { id: "eid147", tween: [ "style", "${__42b}", "left", '908px', { fromValue: '1352px'}], position: 8657, duration: 1005 },
                { id: "eid250", tween: [ "style", "${__111period3}", "width", '628px', { fromValue: '132px'}], position: 18750, duration: 944 },
                { id: "eid234", tween: [ "style", "${__111period2}", "width", '820px', { fromValue: '140px'}], position: 16250, duration: 934 },
                { id: "eid232", tween: [ "style", "${__111period2}", "left", '1856px', { fromValue: '2180px'}], position: 16250, duration: 934 },
                { id: "eid47", tween: [ "style", "${__21a}", "height", '220px', { fromValue: '56px'}], position: 2355, duration: 1000 },
                { id: "eid187", tween: [ "style", "${__33B}", "width", '212px', { fromValue: '84px'}], position: 10100, duration: 1001 },
                { id: "eid175", tween: [ "style", "${__43b}", "top", '877px', { fromValue: '1377px'}], position: 9662, duration: 993 },
                { id: "eid121", tween: [ "style", "${__41b}", "width", '344px', { fromValue: '84px'}], position: 7551, duration: 1106 },
                { id: "eid185", tween: [ "style", "${__33B}", "left", '897px', { fromValue: '1017px'}], position: 10100, duration: 1001 },
                { id: "eid223", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 15672, duration: 0 },
                { id: "eid224", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
                { id: "eid254", tween: [ "style", "${__111bperiod3}", "width", '22.88%', { fromValue: '0%'}], position: 19694, duration: 1000 },
                { id: "eid238", tween: [ "style", "${__111bperiod2}", "width", '29.5%', { fromValue: '0%'}], position: 17184, duration: 1000 },
                { id: "eid97", tween: [ "style", "${_uparrwb}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_uparrwb}", "display", 'block', { fromValue: 'none'}], position: 6550, duration: 0 },
                { id: "eid251", tween: [ "style", "${__111period3}", "height", '328px', { fromValue: '69px'}], position: 18750, duration: 944 },
                { id: "eid109", tween: [ "style", "${__4abeam}", "width", '748px', { fromValue: '15px'}], position: 6550, duration: 1001 },
                { id: "eid160", tween: [ "style", "${__32b}", "top", '831px', { fromValue: '1387px'}], position: 9096, duration: 1004 },
                { id: "eid44", tween: [ "style", "${__21a}", "left", '582px', { fromValue: '576px'}], position: 2355, duration: 1000 },
                { id: "eid174", tween: [ "style", "${__43b}", "left", '1090px', { fromValue: '1362px'}], position: 9662, duration: 993 },
                { id: "eid176", tween: [ "style", "${__43b}", "width", '212px', { fromValue: '56px'}], position: 9662, duration: 993 },
                { id: "eid5", tween: [ "style", "${_satellitea3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_satellitea3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid138", tween: [ "style", "${__31b}", "height", '220px', { fromValue: '56px'}], position: 8095, duration: 1001 },
                { id: "eid196", tween: [ "style", "${_satellitea2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid87", tween: [ "style", "${__23a}", "top", '1046px', { fromValue: '1367px'}], position: 4595, duration: 1009 },
                { id: "eid119", tween: [ "style", "${__41b}", "left", '814px', { fromValue: '1338px'}], position: 7551, duration: 1106 },
                { id: "eid57", tween: [ "style", "${__12a}", "top", '678px', { fromValue: '1369px'}], position: 2940, duration: 1000 },
                { id: "eid252", tween: [ "style", "${__111bperiod3}", "display", 'block', { fromValue: 'none'}], position: 19694, duration: 0 },
                { id: "eid137", tween: [ "style", "${__31b}", "width", '344px', { fromValue: '88px'}], position: 8095, duration: 1001 },
                { id: "eid197", tween: [ "style", "${_periodsa}", "display", 'block', { fromValue: 'none'}], position: 11101, duration: 0 },
                { id: "eid195", tween: [ "style", "${_areab2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid199", tween: [ "style", "${_dwnarwb}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid101", tween: [ "style", "${__3abeam}", "left", '497px', { fromValue: '1034px'}], position: 6550, duration: 1001 },
                { id: "eid235", tween: [ "style", "${__111period2}", "height", '328px', { fromValue: '56px'}], position: 16250, duration: 934 },
                { id: "eid139", tween: [ "style", "${__42b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${__42b}", "display", 'block', { fromValue: 'none'}], position: 8657, duration: 0 },
                { id: "eid190", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 11101, duration: 0 },
                { id: "eid191", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 11440, duration: 0 },
                { id: "eid249", tween: [ "style", "${__111period3}", "top", '472px', { fromValue: '197px'}], position: 18750, duration: 944 },
                { id: "eid72", tween: [ "style", "${__13a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${__13a}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid35", tween: [ "style", "${__11a2}", "height", '220px', { fromValue: '36px'}], position: 1800, duration: 1000 },
                { id: "eid59", tween: [ "style", "${__12a}", "height", '220px', { fromValue: '56px'}], position: 2940, duration: 1000 },
                { id: "eid135", tween: [ "style", "${__31b}", "left", '742px', { fromValue: '1003px'}], position: 8095, duration: 1001 },
                { id: "eid248", tween: [ "style", "${__111period3}", "left", '1974px', { fromValue: '2189px'}], position: 18750, duration: 944 },
                { id: "eid188", tween: [ "style", "${__33B}", "height", '220px', { fromValue: '87px'}], position: 10100, duration: 1001 },
                { id: "eid151", tween: [ "style", "${__32b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${__32b}", "display", 'block', { fromValue: 'none'}], position: 9096, duration: 0 },
                { id: "eid82", tween: [ "style", "${__13a}", "width", '212px', { fromValue: '44px'}], position: 4000, duration: 1035 },
                { id: "eid81", tween: [ "style", "${__13a}", "top", '877px', { fromValue: '1370px'}], position: 4000, duration: 1035 },
                { id: "eid208", tween: [ "style", "${_downbeamb}", "height", '58.09%', { fromValue: '0%'}], position: 12500, duration: 1000 },
                { id: "eid56", tween: [ "style", "${__12a}", "left", '410px', { fromValue: '246px'}], position: 2940, duration: 1000 },
                { id: "eid95", tween: [ "style", "${_areab}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_areab}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid80", tween: [ "style", "${__13a}", "left", '370px', { fromValue: '264px'}], position: 4000, duration: 1035 },
                { id: "eid110", tween: [ "style", "${__4abeam}", "height", '1196px', { fromValue: '24px'}], position: 6550, duration: 1001 },
                { id: "eid7", tween: [ "style", "${_uparrwa}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_uparrwa}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid200", tween: [ "style", "${__111downbeama}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid32", tween: [ "style", "${__11a2}", "top", '458px', { fromValue: '1375px'}], position: 1800, duration: 1000 },
                { id: "eid136", tween: [ "style", "${__31b}", "top", '612px', { fromValue: '1377px'}], position: 8095, duration: 1001 },
                { id: "eid58", tween: [ "style", "${__12a}", "width", '344px', { fromValue: '88px'}], position: 2940, duration: 1000 },
                { id: "eid148", tween: [ "style", "${__42b}", "top", '678px', { fromValue: '1377px'}], position: 8657, duration: 1005 },
                { id: "eid105", tween: [ "style", "${__4abeam}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${__4abeam}", "display", 'block', { fromValue: 'none'}], position: 6550, duration: 0 },
                { id: "eid69", tween: [ "style", "${__22a}", "top", '826px', { fromValue: '1353px'}], position: 3500, duration: 1004 },
                { id: "eid48", tween: [ "style", "${__12a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${__12a}", "display", 'block', { fromValue: 'none'}], position: 2940, duration: 0 },
                { id: "eid99", tween: [ "style", "${__3abeam}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${__3abeam}", "display", 'block', { fromValue: 'none'}], position: 6550, duration: 0 },
                { id: "eid71", tween: [ "style", "${__22a}", "height", '220px', { fromValue: '79px'}], position: 3500, duration: 1004 },
                { id: "eid149", tween: [ "style", "${__42b}", "width", '344px', { fromValue: '76px'}], position: 8657, duration: 1005 },
                { id: "eid123", tween: [ "style", "${__31b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "style", "${__31b}", "display", 'block', { fromValue: 'none'}], position: 8095, duration: 0 },
                { id: "eid220", tween: [ "style", "${__111bperiod1}", "display", 'block', { fromValue: 'none'}], position: 14672, duration: 0 },
                { id: "eid219", tween: [ "style", "${__111period1}", "height", '404px', { fromValue: '36px'}], position: 13500, duration: 1172 },
                { id: "eid161", tween: [ "style", "${__32b}", "width", '212px', { fromValue: '56px'}], position: 9096, duration: 1004 },
                { id: "eid36", tween: [ "style", "${__21a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${__21a}", "display", 'block', { fromValue: 'none'}], position: 2355, duration: 0 },
                { id: "eid103", tween: [ "style", "${__3abeam}", "width", '748px', { fromValue: '40px'}], position: 6550, duration: 1001 },
                { id: "eid194", tween: [ "style", "${_areaa2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid193", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid104", tween: [ "style", "${__3abeam}", "height", '1196px', { fromValue: '38px'}], position: 6550, duration: 1001 },
                { id: "eid217", tween: [ "style", "${__111period1}", "top", '872px', { fromValue: '220px'}], position: 13500, duration: 1172 },
                { id: "eid206", tween: [ "style", "${__111downbeama}", "height", '58.09%', { fromValue: '0%'}], position: 12500, duration: 1000 },
                { id: "eid60", tween: [ "style", "${__22a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${__22a}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid34", tween: [ "style", "${__11a2}", "width", '344px', { fromValue: '56px'}], position: 1800, duration: 1000 },
                { id: "eid46", tween: [ "style", "${__21a}", "width", '344px', { fromValue: '88px'}], position: 2355, duration: 1000 },
                { id: "eid84", tween: [ "style", "${__23a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${__23a}", "display", 'block', { fromValue: 'none'}], position: 4595, duration: 0 },
                { id: "eid16", tween: [ "style", "${__11a2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${__11a2}", "display", 'block', { fromValue: 'none'}], position: 1800, duration: 0 },
                { id: "eid83", tween: [ "style", "${__13a}", "height", '220px', { fromValue: '46px'}], position: 4000, duration: 1035 },
                { id: "eid177", tween: [ "style", "${__43b}", "height", '220px', { fromValue: '58px'}], position: 9662, duration: 993 },
                { id: "eid241", tween: [ "style", "${__111period3}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0 },
                { id: "eid8", tween: [ "style", "${__1abeam}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${__1abeam}", "display", 'block', { fromValue: 'none'}], position: 800, duration: 0 },
                { id: "eid222", tween: [ "style", "${__111bperiod1}", "width", '39%', { fromValue: '0%'}], position: 14672, duration: 1000 },
                { id: "eid15", tween: [ "style", "${__1abeam}", "width", '23.38%', { fromValue: '0%'}], position: 800, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1214892636");
