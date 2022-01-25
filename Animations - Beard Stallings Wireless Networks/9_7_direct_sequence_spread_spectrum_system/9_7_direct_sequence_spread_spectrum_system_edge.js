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
                id: 'text',
                type: 'group',
                rect: ['81', '218','430','308','auto', 'auto'],
                c: [
                {
                    id: 'Figure_531',
                    type: 'text',
                    rect: ['0px', '286px','auto','auto','auto', 'auto'],
                    text: "Figure 9.7  Direct Sequence Spread Spectrum System",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'Click2ani',
                    display: 'block',
                    type: 'text',
                    rect: ['28px', '267px','auto','auto','auto', 'auto'],
                    text: "Click or Touch on Figure for Each Step of the Animation",
                    align: "center",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'b_receiver',
                    display: 'none',
                    type: 'text',
                    rect: ['165px', '229px','auto','auto','auto', 'auto'],
                    text: "(b) Receiver",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'a_transmitter',
                    display: 'none',
                    type: 'text',
                    rect: ['166px', '-17px','auto','auto','auto', 'auto'],
                    text: "(a) Transmitter",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                }]
            },
            {
                id: 'six',
                display: 'none',
                type: 'image',
                rect: ['327px', '259px','179px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"six.png",'0px','0px']
            },
            {
                id: 'five',
                display: 'none',
                type: 'image',
                rect: ['44px', '244px','284px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"five.png",'0px','0px']
            },
            {
                id: 'four',
                display: 'none',
                type: 'image',
                rect: ['68px', '371px','83px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"four.png",'0px','0px']
            },
            {
                id: 'two',
                display: 'none',
                type: 'image',
                rect: ['165px', '11px','228px','174px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"two.png",'0px','0px']
            },
            {
                id: 'three',
                display: 'none',
                type: 'image',
                rect: ['255px', '25px','251px','129px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"three.png",'0px','0px']
            },
            {
                id: 'one',
                display: 'none',
                type: 'image',
                rect: ['82px', '26px','247px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"one.png",'0px','0px']
            },
            {
                id: 'explanations',
                type: 'group',
                rect: ['147px', '106px','371','237','auto', 'auto'],
                c: [
                {
                    id: '_6',
                    display: 'none',
                    type: 'text',
                    rect: ['186px', '250px','auto','auto','auto', 'auto'],
                    text: "Demodulate to retrieve <br>the original data.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: '_5',
                    display: 'none',
                    type: 'text',
                    rect: ['147px', '220px','auto','auto','auto', 'auto'],
                    text: "Multiply the received<br>signal by the PN sequence.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: '_4',
                    display: 'none',
                    type: 'text',
                    rect: ['-55px', '212px','auto','auto','auto', 'auto'],
                    text: "At the receiver, generate<br>the same PN sequence.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: '_3',
                    display: 'none',
                    type: 'text',
                    rect: ['263px', '-8px','auto','auto','auto', 'auto'],
                    text: "Multiply the <br>two together<br>and send.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: '_2',
                    display: 'none',
                    type: 'text',
                    rect: ['-134px', '37px','auto','auto','auto', 'auto'],
                    text: "Create much higher <br>rate PN sequence.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: '_1',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '7px','auto','auto','auto', 'auto'],
                    text: "Create the signal.",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__6}": [
                ["style", "top", '250px'],
                ["style", "left", '186px'],
                ["style", "display", 'none']
            ],
            "${__5}": [
                ["style", "top", '220px'],
                ["style", "left", '147px'],
                ["style", "display", 'none']
            ],
            "${_four}": [
                ["style", "top", '371px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_three}": [
                ["style", "top", '25px'],
                ["style", "left", '255px'],
                ["style", "display", 'none']
            ],
            "${_Click2ani}": [
                ["style", "top", '267px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '28px'],
                ["style", "font-size", '94%']
            ],
            "${_five}": [
                ["style", "top", '244px'],
                ["style", "left", '44px'],
                ["style", "display", 'none']
            ],
            "${__4}": [
                ["style", "top", '212px'],
                ["style", "left", '-55px'],
                ["style", "display", 'none']
            ],
            "${__3}": [
                ["style", "top", '-8px'],
                ["style", "display", 'none'],
                ["style", "left", '263px'],
                ["style", "text-align", 'center']
            ],
            "${_b_receiver}": [
                ["style", "top", '229px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '165px'],
                ["style", "font-size", '94%']
            ],
            "${_a_transmitter}": [
                ["style", "top", '-17px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '166px'],
                ["style", "font-size", '94%']
            ],
            "${__1}": [
                ["style", "top", '7px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_one}": [
                ["style", "top", '26px'],
                ["style", "left", '82px'],
                ["style", "display", 'none']
            ],
            "${_two}": [
                ["style", "top", '11px'],
                ["style", "left", '165px'],
                ["style", "display", 'none']
            ],
            "${_Figure_531}": [
                ["style", "top", '286px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "font-size", '119%']
            ],
            "${__2}": [
                ["style", "top", '37px'],
                ["style", "display", 'none'],
                ["style", "text-align", 'center'],
                ["style", "left", '-134px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '550px'],
                ["style", "overflow", 'hidden']
            ],
            "${_six}": [
                ["style", "top", '259px'],
                ["style", "left", '327px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            labels: {
                "start": 0,
                "1": 250,
                "2": 500,
                "3": 750,
                "4": 1000,
                "5": 1250,
                "6": 1500,
                "all": 1750
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_four}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid5", tween: [ "style", "${_five}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid9", tween: [ "style", "${_b_receiver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid8", tween: [ "style", "${_a_transmitter}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid16", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid17", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid20", tween: [ "style", "${__6}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid22", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid14", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid15", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid12", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid13", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid18", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid19", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid2", tween: [ "style", "${_two}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_six}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid10", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid11", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Click2ani}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_one}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_three}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-38223393");
