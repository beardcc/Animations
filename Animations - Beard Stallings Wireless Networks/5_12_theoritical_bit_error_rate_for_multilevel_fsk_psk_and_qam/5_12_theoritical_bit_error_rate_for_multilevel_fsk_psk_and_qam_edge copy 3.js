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
                id: 'axisnew2',
                display: 'none',
                type: 'image',
                rect: ['61px', '114','725px','409px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axisnew.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['255px', '551px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step  of the Animation ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['132px', '600px','auto','auto','auto', 'auto'],
                text: "Figure 5.12  Theoritical Bit Error Rate for Multilevel FSK, PSK and QAM ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 19, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['221px', '100px','auto','auto','auto', 'auto'],
                text: "2 level FSK",
                font: ['Times New Roman, Times, serif', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['132px', '65px','auto','auto','auto', 'auto'],
                text: "4 and 8 level FSK provide higher bit<br>rates and lower BER but also use more<br>bandwidth.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['507px', '73px','auto','auto','auto', 'auto'],
                text: "2 and 4 level PSK (BPSK and QPSK)<br> provide the same performance.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['504px', '71px','auto','auto','auto', 'auto'],
                text: "8 PSK increases the data rate but also uses<br>more energy for the same BER.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['505px', '56px','auto','auto','auto', 'auto'],
                text: "16 QAM increases the bit rate even more <br>at not much worse performance than <br>8 PSK. ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['232', '388','auto','auto','auto', 'auto'],
                text: "M = 8",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['308px', '319','auto','auto','auto', 'auto'],
                text: "M = 4",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['338px', '265px','auto','auto','auto', 'auto'],
                text: "M = 2",
                font: ['Times New Roman, Times, serif', 15, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['623', '399px','auto','auto','auto', 'auto'],
                text: "M = 2, 4",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['646', '296px','auto','auto','auto', 'auto'],
                text: "M = 8",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text13',
                display: 'none',
                type: 'text',
                rect: ['688px', '233px','auto','auto','auto', 'auto'],
                text: "16 QAM",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'purplecurve-axis12',
                display: 'none',
                type: 'image',
                rect: ['112', '110px','296px','328px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"purplecurve-axis1.png",'0px','0px']
            },
            {
                id: 'greenred-axis12',
                display: 'none',
                type: 'image',
                rect: ['115px', '154px','233px','284px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"greenred-axis1.png",'0px','0px']
            },
            {
                id: 'green-axis22',
                display: 'none',
                type: 'image',
                rect: ['480px', '180px','223px','258px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"green-axis2.png",'0px','0px']
            },
            {
                id: 'red-axis22',
                display: 'none',
                type: 'image',
                rect: ['480px', '165px','304px','273px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red-axis2.png",'0px','0px']
            },
            {
                id: 'purple-axis22',
                display: 'none',
                type: 'image',
                rect: ['479px', '153px','305px','284px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"purple-axis2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '600px'],
                ["style", "font-weight", '700'],
                ["style", "left", '132px'],
                ["style", "font-size", '19px']
            ],
            "${_Text11}": [
                ["style", "display", 'none'],
                ["style", "left", '618px'],
                ["style", "top", '-30px']
            ],
            "${_Text3}": [
                ["style", "top", '73px'],
                ["style", "left", '507px'],
                ["style", "display", 'none']
            ],
            "${_Text8}": [
                ["style", "top", '-30px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '338px'],
                ["style", "font-size", '15px']
            ],
            "${_Text4}": [
                ["style", "top", '71px'],
                ["style", "left", '504px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '65px'],
                ["style", "left", '132px'],
                ["style", "display", 'none']
            ],
            "${_red-axis22}": [
                ["style", "top", '165px'],
                ["style", "left", '480px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '100px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '221px'],
                ["style", "font-size", '15px']
            ],
            "${_Text13}": [
                ["style", "top", '-30px'],
                ["style", "left", '688px'],
                ["style", "display", 'none']
            ],
            "${_green-axis22}": [
                ["style", "top", '180px'],
                ["style", "left", '480px'],
                ["style", "display", 'none']
            ],
            "${_purplecurve-axis12}": [
                ["style", "top", '110px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "display", 'none'],
                ["style", "top", '-30px']
            ],
            "${_Text6}": [
                ["style", "top", '568px'],
                ["style", "left", '250px'],
                ["style", "display", 'block']
            ],
            "${_axisnew2}": [
                ["style", "left", '61px'],
                ["style", "display", 'none']
            ],
            "${_purple-axis22}": [
                ["style", "top", '153px'],
                ["style", "left", '479px'],
                ["style", "display", 'none']
            ],
            "${_Text12}": [
                ["style", "top", '-30px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '850px'],
                ["style", "height", '700px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "display", 'none'],
                ["style", "left", '308px'],
                ["style", "top", '-30px']
            ],
            "${_Text5}": [
                ["style", "top", '56px'],
                ["style", "left", '505px'],
                ["style", "display", 'none']
            ],
            "${_greenred-axis12}": [
                ["style", "top", '154px'],
                ["style", "left", '115px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8655,
            autoPlay: true,
            timeline: [
                { id: "eid81", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 3900, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 3150, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3400, duration: 0 },
                { id: "eid94", tween: [ "style", "${_greenred-axis12}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 8450, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 700, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid96", tween: [ "style", "${_red-axis22}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid95", tween: [ "style", "${_green-axis22}", "display", 'block', { fromValue: 'none'}], position: 3650, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 7100, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text9}", "top", '319px', { fromValue: '-30px'}], position: 2250, duration: 800 },
                { id: "eid91", tween: [ "style", "${_Text13}", "top", '233px', { fromValue: '-30px'}], position: 7100, duration: 800 },
                { id: "eid41", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 7950, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 8200, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_axisnew2}", "display", 'block', { fromValue: 'none'}], position: 65, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text11}", "top", '397px', { fromValue: '-30px'}], position: 3900, duration: 800 },
                { id: "eid36", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 6350, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 6600, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text12}", "top", '296px', { fromValue: '-30px'}], position: 5500, duration: 800 },
                { id: "eid80", tween: [ "style", "${_Text10}", "top", '388px', { fromValue: '-30px'}], position: 2250, duration: 800 },
                { id: "eid97", tween: [ "style", "${_purple-axis22}", "display", 'block', { fromValue: 'none'}], position: 6850, duration: 0 },
                { id: "eid93", tween: [ "style", "${_purplecurve-axis12}", "display", 'block', { fromValue: 'none'}], position: 450, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text8}", "top", '265px', { fromValue: '-30px'}], position: 700, duration: 600 },
                { id: "eid23", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-189279015");
