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
                id: 'bg',
                display: 'none',
                type: 'image',
                rect: ['39px', '-25px','2712px','1908px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: '_1arrw',
                display: 'none',
                type: 'image',
                rect: ['689px', '824px','588px','636px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1arrw.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['122px', '1150px','610px','420px','auto', 'auto'],
                text: "Server sends datagram to home network.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2arrw',
                display: 'none',
                type: 'image',
                rect: ['791px', '715px','43%','7.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2arrw.png",'0%','0%','1204px','156px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['1002px', '350px','715px','199px','auto', 'auto'],
                text: "Home agent tunnels packet to foreign network.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_3arrw',
                display: 'none',
                type: 'image',
                rect: ['1963px', '288px','18.2%','17.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3arrw.png",'0%','0%','508px','388px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['1602px', '190px','560px','292px','auto', 'auto'],
                text: "Foreign agent sends datagram to mobile.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_4arrw',
                display: 'none',
                type: 'image',
                rect: ['2019px', '287px','17.7%','20.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4arrw.png",'0%','0%','496px','444px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['1427px', '331px','770px','260px','auto', 'auto'],
                text: "Mobile sends response to server through foreign agent.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_5arrw',
                display: 'none',
                type: 'image',
                rect: ['1297px', '807px','25%','28.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5arrw.png",'0%','0%','700px','636px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['1852px', '1200px','830px','280px','auto', 'auto'],
                text: "Packet travels directly to the server, not back through the home network. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['840px', '1972px','auto','auto','auto', 'auto'],
                text: "Figure 15.4 Mobile IP Scenario",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['633px', '1930px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "display", 'none']
            ],
            "${__2arrw}": [
                ["style", "top", '715px'],
                ["style", "display", 'none'],
                ["style", "left", '791px'],
                ["style", "width", '0%']
            ],
            "${__4arrw}": [
                ["style", "top", '287px'],
                ["style", "height", '0%'],
                ["style", "left", '2019px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "display", 'none'],
                ["style", "width", '610px']
            ],
            "${_Text6}": [
                ["style", "top", '331px'],
                ["style", "height", '260px'],
                ["style", "display", 'none'],
                ["style", "left", '1427px'],
                ["style", "width", '770px']
            ],
            "${_Text2}": [
                ["style", "top", '1876px'],
                ["style", "display", 'block'],
                ["style", "font-size", '375%'],
                ["style", "left", '633px'],
                ["style", "width", '1520px']
            ],
            "${_Text5}": [
                ["style", "display", 'none']
            ],
            "${__3arrw}": [
                ["style", "top", '288px'],
                ["style", "display", 'none'],
                ["style", "left", '1963px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '1972px'],
                ["style", "font-weight", '700'],
                ["style", "width", '1110px'],
                ["style", "height", '100px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '840px'],
                ["style", "font-size", '475%']
            ],
            "${_bg}": [
                ["style", "top", '-25px'],
                ["style", "left", '39px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2800px'],
                ["style", "height", '2100px'],
                ["style", "overflow", 'hidden']
            ],
            "${__1arrw}": [
                ["style", "top", '1419px'],
                ["style", "display", 'none'],
                ["style", "height", '41px'],
                ["style", "left", '1239px'],
                ["style", "width", '38px']
            ],
            "${__5arrw}": [
                ["style", "top", '807px'],
                ["style", "height", '0%'],
                ["style", "left", '1297px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "top", '350px'],
                ["style", "height", '199px'],
                ["style", "display", 'none'],
                ["style", "left", '1002px'],
                ["style", "width", '715px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9250,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${__5arrw}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text2}", "top", '1876px', { fromValue: '1876px'}], position: 7365, duration: 0 },
                { id: "eid15", tween: [ "style", "${__1arrw}", "left", '689px', { fromValue: '1239px'}], position: 500, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid26", tween: [ "style", "${__3arrw}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid17", tween: [ "style", "${__1arrw}", "width", '588px', { fromValue: '38px'}], position: 500, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_bg}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
                { id: "eid23", tween: [ "style", "${__2arrw}", "width", '43%', { fromValue: '0%'}], position: 2250, duration: 1000 },
                { id: "eid29", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid31", tween: [ "style", "${__4arrw}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid33", tween: [ "style", "${__4arrw}", "height", '20.18%', { fromValue: '0%'}], position: 5750, duration: 1000 },
                { id: "eid2", tween: [ "style", "${__1arrw}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid38", tween: [ "style", "${__5arrw}", "height", '28.91%', { fromValue: '0%'}], position: 7500, duration: 1000 },
                { id: "eid21", tween: [ "style", "${__2arrw}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid28", tween: [ "style", "${__3arrw}", "width", '18.15%', { fromValue: '0%'}], position: 4000, duration: 1000 },
                { id: "eid18", tween: [ "style", "${__1arrw}", "height", '636px', { fromValue: '41px'}], position: 500, duration: 1000 },
                { id: "eid16", tween: [ "style", "${__1arrw}", "top", '824px', { fromValue: '1419px'}], position: 500, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-21928999");
