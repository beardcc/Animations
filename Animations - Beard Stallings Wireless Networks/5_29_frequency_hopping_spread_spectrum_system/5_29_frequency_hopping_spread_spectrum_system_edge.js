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
                rect: ['42', '275px','465','374','auto', 'auto'],
                c: [
                {
                    id: 'figure528',
                    type: 'text',
                    rect: ['0px', '338px','auto','auto','auto', 'auto'],
                    text: "Figure 5.29  Frequency Hopping Spread Spectrum System",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'click2ani',
                    display: 'block',
                    type: 'text',
                    rect: ['47px', '330px','auto','auto','auto', 'auto'],
                    text: "Click or Touch on Figure for Each Step of the Animation",
                    align: "center",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'receiver',
                    display: 'none',
                    type: 'text',
                    rect: ['192px', '287px','auto','auto','auto', 'auto'],
                    text: "(b) Receiver",
                    align: "center",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'Transmitter',
                    display: 'none',
                    type: 'text',
                    rect: ['193px', '0px','auto','auto','auto', 'auto'],
                    text: "(a) Transmitter",
                    align: "center",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                }]
            },
            {
                id: 'seven',
                display: 'none',
                type: 'image',
                rect: ['13px', '295px','246px','243px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"seven.png",'0px','0px']
            },
            {
                id: 'eight',
                display: 'none',
                type: 'image',
                rect: ['229px', '310px','307px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eight.png",'0px','0px']
            },
            {
                id: 'six',
                display: 'none',
                type: 'image',
                rect: ['22px', '490px','154px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"six.png",'0px','0px']
            },
            {
                id: 'three',
                display: 'none',
                type: 'image',
                rect: ['67px', '0px','246px','244px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"three.png",'0px','0px']
            },
            {
                id: 'four',
                display: 'none',
                type: 'image',
                rect: ['284px', '16px','254px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"four.png",'0px','0px']
            },
            {
                id: 'two',
                display: 'none',
                type: 'image',
                rect: ['76px', '196px','154px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"two.png",'0px','0px']
            },
            {
                id: 'one',
                display: 'none',
                type: 'image',
                rect: ['13px', '16px','235px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"one.png",'0px','0px']
            },
            {
                id: 'txt_8',
                display: 'none',
                type: 'text',
                rect: ['344px', '445px','auto','auto','auto', 'auto'],
                text: "Demodulate to <br>retrieve the signal.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt_7',
                display: 'none',
                type: 'text',
                rect: ['314px', '342px','auto','auto','auto', 'auto'],
                text: "Create the same frequency<br>and multiply by this<br>frequency to shift the signal<br>back down to baseband.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt_6',
                display: 'none',
                type: 'text',
                rect: ['67px', '395px','auto','auto','auto', 'auto'],
                text: "At the receiver,<br>generate the same<br>pseudonoise sequence.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt_5',
                display: 'none',
                type: 'text',
                rect: ['111', '214','auto','auto','auto', 'auto'],
                text: "Filter out extra <br>noise and send.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt_4',
                display: 'none',
                type: 'text',
                rect: ['337px', '32px','auto','auto','auto', 'auto'],
                text: "Multiply by the frequency<br>to hop the signal <br>to the new frequency.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt_3',
                display: 'none',
                type: 'text',
                rect: ['356px', '95px','auto','auto','auto', 'auto'],
                text: "Use the pseudonoise<br>sequence to look up<br>the corresponding<br>frequency. Then create<br>that frequency.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt_2',
                display: 'none',
                type: 'text',
                rect: ['77px', '139px','auto','auto','auto', 'auto'],
                text: "Create the pseudonoise<br>sequence to determine<br>frequency hopping.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'txt_1',
                display: 'none',
                type: 'text',
                rect: ['120px', '119px','auto','auto','auto', 'auto'],
                text: "Create the signal.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_txt_4}": [
                ["style", "display", 'none'],
                ["style", "left", '337px'],
                ["style", "top", '32px']
            ],
            "${_figure528}": [
                ["style", "top", '338px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '119%']
            ],
            "${_four}": [
                ["style", "top", '27px'],
                ["style", "left", '284px'],
                ["style", "display", 'none']
            ],
            "${_three}": [
                ["style", "top", '11px'],
                ["style", "left", '67px'],
                ["style", "display", 'none']
            ],
            "${_txt_1}": [
                ["style", "display", 'none'],
                ["style", "left", '120px'],
                ["style", "top", '119px']
            ],
            "${_txt_3}": [
                ["style", "display", 'none'],
                ["style", "left", '356px'],
                ["style", "top", '95px']
            ],
            "${_txt_8}": [
                ["style", "display", 'none'],
                ["style", "left", '344px'],
                ["style", "top", '445px']
            ],
            "${_txt_7}": [
                ["style", "display", 'none'],
                ["style", "left", '314px'],
                ["style", "top", '342px']
            ],
            "${_Transmitter}": [
                ["style", "top", '0px'],
                ["style", "font-weight", 'bold'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'none'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '193px'],
                ["style", "font-size", '94%']
            ],
            "${_one}": [
                ["style", "top", '27px'],
                ["style", "left", '13px'],
                ["style", "display", 'none']
            ],
            "${_six}": [
                ["style", "top", '501px'],
                ["style", "left", '22px'],
                ["style", "display", 'none']
            ],
            "${_click2ani}": [
                ["style", "top", '316px'],
                ["style", "font-weight", 'bold'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '47px'],
                ["style", "font-size", '94%']
            ],
            "${_text}": [
                ["style", "top", '275px']
            ],
            "${_eight}": [
                ["style", "top", '321px'],
                ["style", "left", '229px'],
                ["style", "display", 'none']
            ],
            "${_receiver}": [
                ["style", "top", '287px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'none'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '192px'],
                ["style", "font-size", '94%']
            ],
            "${_txt_5}": [
                ["style", "display", 'none'],
                ["style", "left", '378px'],
                ["style", "top", '133px']
            ],
            "${_two}": [
                ["style", "top", '207px'],
                ["style", "left", '76px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '650px'],
                ["style", "width", '550px']
            ],
            "${_seven}": [
                ["style", "top", '306px'],
                ["style", "left", '13px'],
                ["style", "display", 'none']
            ],
            "${_txt_6}": [
                ["style", "display", 'none'],
                ["style", "left", '67px'],
                ["style", "top", '395px']
            ],
            "${_txt_2}": [
                ["style", "display", 'none'],
                ["style", "left", '77px'],
                ["style", "top", '139px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            labels: {
                "start": 0,
                "1": 250,
                "2": 500,
                "3": 750,
                "4": 1000,
                "5": 1250,
                "6": 1500,
                "7": 1750,
                "8": 2000,
                "all": 2250
            },
            timeline: [
                { id: "eid28", tween: [ "style", "${_txt_2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_txt_2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Transmitter}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "style", "${_eight}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_txt_8}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid41", tween: [ "style", "${_txt_8}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid1", tween: [ "style", "${_click2ani}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid26", tween: [ "style", "${_txt_1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_txt_1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_four}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid38", tween: [ "style", "${_txt_7}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid39", tween: [ "style", "${_txt_7}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_txt_3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid31", tween: [ "style", "${_txt_3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_txt_6}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid37", tween: [ "style", "${_txt_6}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid6", tween: [ "style", "${_three}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_six}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_two}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_txt_5}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid35", tween: [ "style", "${_txt_5}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_txt_4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_txt_4}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_seven}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid8", tween: [ "style", "${_one}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid10", tween: [ "style", "${_receiver}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-6043462");
