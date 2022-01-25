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
                id: 'a',
                display: 'block',
                type: 'image',
                rect: ['97px', '14px','86.8%','13.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0%','0%','1042px','136px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['298px', '229px','639px','55px','auto', 'auto'],
                text: "Overall MAC PDU has header, payload and CRC.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [188, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'b',
                display: 'block',
                type: 'image',
                rect: ['65px', '243px','86.8%','14.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0%','0%','1042px','144px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['360px', '477px','516px','43px','auto', 'auto'],
                text: "MAC header for most communnication",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [188, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'c',
                display: 'block',
                type: 'image',
                rect: ['99px', '499px','1038px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c.png",'0px','0px','1038px','144px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['206px', '717px','788px','43px','auto', 'auto'],
                text: "MAC header used to request bandwidth for uplink transmission",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [175, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'a_name',
                display: 'block',
                type: 'text',
                rect: ['445px', '167px','438px','29px','auto', 'auto'],
                text: "(a) Overall MAC PDU format",
                font: ['Times New Roman, Times, serif', [175, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'b_name',
                display: 'block',
                type: 'text',
                rect: ['425px', '408px','418px','21px','auto', 'auto'],
                text: "(b) Generic MAC Header Format",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [175, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'c_name',
                display: 'block',
                type: 'text',
                rect: ['390px', '664px','476px','29px','auto', 'auto'],
                text: "(c) Bandwidth Request Header Format",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [175, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt',
                display: 'block',
                type: 'image',
                rect: ['144px', '732px','330px','124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"txt.png",'0px','0px']
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['261px', '926px','auto','auto','auto', 'auto'],
                text: "Figure 16.21 IEEE 802.16 MAC PDU Formats",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [238, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['279px', '884px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [188, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b_name}": [
                ["style", "top", '408px'],
                ["style", "left", '425px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '477px'],
                ["style", "display", 'block'],
                ["style", "width", '550px'],
                ["style", "left", '397px'],
                ["style", "font-size", '188%']
            ],
            "${_a}": [
                ["style", "top", '14px'],
                ["style", "display", 'block'],
                ["style", "left", '97px'],
                ["style", "width", '0%']
            ],
            "${_Text8}": [
                ["style", "top", '719px'],
                ["style", "display", 'block'],
                ["style", "font-size", '188%'],
                ["style", "left", '427px'],
                ["style", "width", '500px']
            ],
            "${_Text6}": [
                ["style", "top", '233px'],
                ["style", "width", '357px'],
                ["style", "height", '55px'],
                ["style", "display", 'block'],
                ["style", "left", '455px'],
                ["style", "font-size", '188%']
            ],
            "${_txt}": [
                ["style", "top", '732px'],
                ["style", "left", '144px'],
                ["style", "display", 'block']
            ],
            "${_b}": [
                ["style", "top", '243px'],
                ["style", "display", 'block'],
                ["style", "left", '65px'],
                ["style", "width", '0%']
            ],
            "${_Text5}": [
                ["style", "top", '880px'],
                ["style", "display", 'block'],
                ["style", "width", '781px'],
                ["style", "left", '267px'],
                ["style", "font-size", '188%']
            ],
            "${_c}": [
                ["style", "top", '499px'],
                ["style", "display", 'block'],
                ["style", "left", '99px'],
                ["style", "width", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1200px'],
                ["style", "height", '1000px'],
                ["style", "overflow", 'hidden']
            ],
            "${_a_name}": [
                ["style", "top", '167px'],
                ["style", "width", '438px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '445px'],
                ["style", "font-size", '175%']
            ],
            "${_c_name}": [
                ["style", "top", '664px'],
                ["style", "display", 'block'],
                ["style", "left", '390px'],
                ["style", "width", '476px']
            ],
            "${_Text4}": [
                ["style", "top", '926px'],
                ["style", "width", '788px'],
                ["style", "font-size", '238%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7250,
            autoPlay: true,
            timeline: [
                { id: "eid49", tween: [ "style", "${_Text5}", "left", '267px', { fromValue: '267px'}], position: 6546, duration: 0 },
                { id: "eid14", tween: [ "style", "${_b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_b}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text8}", "width", '500px', { fromValue: '500px'}], position: 6546, duration: 0 },
                { id: "eid12", tween: [ "style", "${_b_name}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_b_name}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid24", tween: [ "style", "${_c}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_c}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_b}", "width", '86.84%', { fromValue: '0%'}], position: 2750, duration: 1500 },
                { id: "eid9", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text5}", "top", '880px', { fromValue: '880px'}], position: 6546, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text8}", "left", '427px', { fromValue: '427px'}], position: 6546, duration: 0 },
                { id: "eid5", tween: [ "style", "${_a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_a}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid27", tween: [ "style", "${_c}", "width", '1038px', { fromValue: '0px'}], position: 5000, duration: 1500 },
                { id: "eid3", tween: [ "style", "${_a_name}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_a_name}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text5}", "width", '781px', { fromValue: '781px'}], position: 4635, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text7}", "width", '550px', { fromValue: '550px'}], position: 4330, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text8}", "font-size", '188%', { fromValue: '30px'}], position: 6546, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text7}", "left", '397px', { fromValue: '397px'}], position: 4330, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text8}", "top", '719px', { fromValue: '719px'}], position: 6546, duration: 0 },
                { id: "eid22", tween: [ "style", "${_c_name}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_c_name}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text6}", "width", '357px', { fromValue: '357px'}], position: 2000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_txt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_txt}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text6}", "top", '233px', { fromValue: '233px'}], position: 2000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text6}", "left", '455px', { fromValue: '455px'}], position: 2000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_a}", "width", '86.84%', { fromValue: '0%'}], position: 500, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-692369572");
