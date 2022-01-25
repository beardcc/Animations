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
                id: 'titlea',
                display: 'none',
                type: 'image',
                rect: ['497px', '1807px','528px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"titlea.png",'0px','0px']
            },
            {
                id: 'titleb',
                display: 'none',
                type: 'image',
                rect: ['1945px', '1815px','528px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"titleb.png",'0px','0px']
            },
            {
                id: '_1b',
                display: 'none',
                type: 'image',
                rect: ['38px', '659px','1348px','1116px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1b.png",'0px','0px']
            },
            {
                id: '_1a',
                display: 'none',
                type: 'image',
                rect: ['37px', '174px','44.9%','24.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1a.png",'0%','0%','1348px','560px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['946px', '2052px','auto','auto','auto', 'auto'],
                text: "Figure 15.8 Mobile IP Encapsulation",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['818px', '1964px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_2',
                display: 'none',
                type: 'image',
                rect: ['1447px', '92px','47.9%','70.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0%','0%','1436px','1624px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['1677px', '52px','1200px','176px','auto', 'auto'],
                text: "This tunneling process uses reduced headers to avoid duplication. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['270px', '472px','836px','156px','auto', 'auto'],
                text: "This datagram arrives at the home network for the home address.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['1559px', '376px','1060px','112px','auto', 'auto'],
                text: "The home agent tunnels the packet to the foreign network by putting the original datagram into another full datagram. An additional header is added and the original packet is inside the data payload.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_titleb}": [
                ["style", "top", '1815px'],
                ["style", "left", '1945px'],
                ["style", "display", 'none']
            ],
            "${_titlea}": [
                ["style", "top", '1807px'],
                ["style", "left", '497px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '472px'],
                ["style", "width", '836px'],
                ["style", "height", '156px'],
                ["style", "display", 'none'],
                ["style", "left", '270px'],
                ["style", "font-size", '375%']
            ],
            "${__2}": [
                ["style", "display", 'none'],
                ["style", "top", '92px'],
                ["style", "left", '1447px'],
                ["style", "height", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '376px'],
                ["style", "display", 'none'],
                ["style", "left", '1559px'],
                ["style", "width", '1060px']
            ],
            "${_Text}": [
                ["style", "top", '2052px'],
                ["style", "width", '1211px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '946px'],
                ["style", "font-size", '475%']
            ],
            "${_Text5}": [
                ["style", "top", '39px'],
                ["style", "display", 'none'],
                ["style", "left", '1677px'],
                ["style", "width", '1100px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '3000px'],
                ["style", "height", '2300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2}": [
                ["style", "top", '1964px'],
                ["style", "display", 'block'],
                ["style", "font-size", '375%'],
                ["style", "left", '818px'],
                ["style", "width", '1468px']
            ],
            "${__1b}": [
                ["style", "top", '659px'],
                ["style", "left", '38px'],
                ["style", "display", 'none']
            ],
            "${__1a}": [
                ["style", "display", 'none'],
                ["style", "top", '174px'],
                ["style", "left", '37px'],
                ["style", "height", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
                { id: "eid5", tween: [ "style", "${__1a}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid7", tween: [ "style", "${__1a}", "height", '24.35%', { fromValue: '0%'}], position: 1250, duration: 1500 },
                { id: "eid10", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid11", tween: [ "style", "${_titleb}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "width", '1100px', { fromValue: '1100px'}], position: 5625, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text5}", "top", '39px', { fromValue: '39px'}], position: 5625, duration: 0 },
                { id: "eid13", tween: [ "style", "${__2}", "height", '70.61%', { fromValue: '0%'}], position: 3750, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_titlea}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1b}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-36949430");
