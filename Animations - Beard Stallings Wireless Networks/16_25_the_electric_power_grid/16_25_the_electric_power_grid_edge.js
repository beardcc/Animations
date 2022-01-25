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
                id: 'Text',
                type: 'text',
                rect: ['522px', '1252px','auto','auto','auto', 'auto'],
                text: "Figure 16.25 The Electric Power Grid",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['429px', '1143px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'gstn',
                display: 'none',
                type: 'image',
                rect: ['122px', '472px','344px','332px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gstn.png",'0px','0px']
            },
            {
                id: 'glines',
                display: 'none',
                type: 'image',
                rect: ['392px', '632px','7.5%','2.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"glines.png",'0%','0%','172px','36px']
            },
            {
                id: 'buildings',
                display: 'none',
                type: 'image',
                rect: ['1751px', '16px','308px','776px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"buildings.png",'0px','0px']
            },
            {
                id: 'dslines',
                display: 'none',
                type: 'image',
                rect: ['1506px', '198px','15%','50.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dslines.png",'0%','0%','344px','656px']
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['1446px', '818px','822px','180px','auto', 'auto'],
                text: "Some larger customers receive power at distribution voltages.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'house',
                display: 'none',
                type: 'image',
                rect: ['1734px', '818px','404px','196px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"house.png",'0px','0px']
            },
            {
                id: 'housepole',
                display: 'none',
                type: 'image',
                rect: ['1532px', '750px','17.6%','15.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"housepole.png",'0%','0%','404px','196px']
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['864px', '978px','1376px','108px','auto', 'auto'],
                text: "Residential consumers receive voltages stepped down to secondary voltages, like 220 V in the United States.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [275, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'sdtf',
                display: 'none',
                type: 'image',
                rect: ['1383px', '214px','196px','248px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sdtf.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['968px', '38px','990px','134px','auto', 'auto'],
                text: "Distribution substations step down voltage to usable levels for consumers.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['1614px', '105px','638px','237px','auto', 'auto'],
                text: "Distribution devices control voltages and isolate outages.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'suptf',
                display: 'none',
                type: 'image',
                rect: ['506px', '632px','188px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"suptf.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['438px', '304px','1008px','158px','auto', 'auto'],
                text: "Voltage is stepped up to enable power transmission over long distances.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txlines',
                display: 'none',
                type: 'image',
                rect: ['636px', '188px','36.4%','46.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txlines.png",'0%','0%','836px','604px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['368px', '244px','912px','146px','auto', 'auto'],
                text: "Transmission lines carry power over tall towers and long distances.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'tstn',
                display: 'none',
                type: 'image',
                rect: ['771px', '462px','528px','420px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tstn.png",'0px','0px']
            },
            {
                id: 'legend',
                display: 'none',
                type: 'image',
                rect: ['181px', '870px','404px','196px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"legend.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['72px', '188px','770px','180px','auto', 'auto'],
                text: "Power is generated at coal, gas, nuclear, hydroelectric, solar, or wind stations.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_house}": [
                ["style", "top", '818px'],
                ["style", "left", '1734px'],
                ["style", "display", 'none']
            ],
            "${_gstn}": [
                ["style", "top", '472px'],
                ["style", "left", '122px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "top", '244px'],
                ["style", "display", 'none'],
                ["style", "left", '368px'],
                ["style", "width", '912px']
            ],
            "${_Text11}": [
                ["style", "top", '818px'],
                ["style", "display", 'none'],
                ["style", "left", '1446px'],
                ["style", "width", '822px']
            ],
            "${_Text3}": [
                ["style", "top", '188px'],
                ["style", "display", 'none'],
                ["style", "left", '72px'],
                ["style", "width", '770px']
            ],
            "${_legend}": [
                ["style", "top", '870px'],
                ["style", "left", '181px'],
                ["style", "display", 'none']
            ],
            "${_sdtf}": [
                ["style", "top", '214px'],
                ["style", "left", '1383px'],
                ["style", "display", 'none']
            ],
            "${_tstn}": [
                ["style", "top", '462px'],
                ["style", "left", '771px'],
                ["style", "display", 'none']
            ],
            "${_buildings}": [
                ["style", "top", '16px'],
                ["style", "left", '1751px'],
                ["style", "display", 'none']
            ],
            "${_suptf}": [
                ["style", "top", '632px'],
                ["style", "left", '506px'],
                ["style", "display", 'none']
            ],
            "${_dslines}": [
                ["style", "display", 'none'],
                ["style", "height", '0%'],
                ["style", "left", '1506px'],
                ["style", "top", '198px']
            ],
            "${_txlines}": [
                ["style", "top", '188px'],
                ["style", "display", 'none'],
                ["style", "left", '636px'],
                ["style", "width", '0%']
            ],
            "${_glines}": [
                ["style", "top", '632px'],
                ["style", "display", 'none'],
                ["style", "left", '392px'],
                ["style", "width", '0%']
            ],
            "${_Text10}": [
                ["style", "display", 'none'],
                ["style", "width", '638px']
            ],
            "${_Text8}": [
                ["style", "top", '38px'],
                ["style", "display", 'none'],
                ["style", "left", '968px'],
                ["style", "width", '990px']
            ],
            "${_Text}": [
                ["style", "top", '1252px'],
                ["style", "font-weight", '700'],
                ["style", "width", '1280px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '522px'],
                ["style", "font-size", '475%']
            ],
            "${_Text12}": [
                ["style", "top", '978px'],
                ["style", "display", 'none'],
                ["style", "left", '864px'],
                ["style", "width", '1376px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2300px'],
                ["style", "height", '1350px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text5}": [
                ["style", "top", '304px'],
                ["style", "display", 'none'],
                ["style", "left", '438px'],
                ["style", "width", '1008px']
            ],
            "${_Text2}": [
                ["style", "top", '1175px'],
                ["style", "display", 'block'],
                ["style", "width", '1466px'],
                ["style", "left", '429px'],
                ["style", "font-size", '375%']
            ],
            "${_housepole}": [
                ["style", "top", '750px'],
                ["style", "display", 'none'],
                ["style", "left", '1532px'],
                ["style", "width", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid24", tween: [ "style", "${_dslines}", "height", '50.46%', { fromValue: '0%'}], position: 6250, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid4", tween: [ "style", "${_glines}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_txlines}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_glines}", "width", '7.48%', { fromValue: '0%'}], position: 1000, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_dslines}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text2}", "top", '1175px', { fromValue: '1175px'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_buildings}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid35", tween: [ "style", "${_legend}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_housepole}", "width", '17.57%', { fromValue: '0%'}], position: 8250, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_housepole}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid10", tween: [ "style", "${_tstn}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_gstn}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_suptf}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_house}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_txlines}", "width", '36.35%', { fromValue: '0%'}], position: 3000, duration: 1000 },
                { id: "eid16", tween: [ "style", "${_sdtf}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-79508738");
