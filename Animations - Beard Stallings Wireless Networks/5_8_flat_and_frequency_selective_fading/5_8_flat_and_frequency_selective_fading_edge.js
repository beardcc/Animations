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
                id: 'single-signal2',
                display: 'none',
                type: 'image',
                rect: ['359px', '238px','332px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"single-signal.png",'0px','0px']
            },
            {
                id: 'arrow14',
                display: 'none',
                type: 'image',
                rect: ['514px', '429px','38px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px']
            },
            {
                id: 'frequency-outpt',
                display: 'none',
                type: 'image',
                rect: ['370px', '484px','332px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frequency-outpt.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['198px', '81px','auto','auto','auto', 'auto'],
                text: "Two scenarios start with the same signal spectrum.",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'arrow1',
                display: 'none',
                type: 'image',
                rect: ['170px', '225px','38px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px']
            },
            {
                id: 'flatfadingchannel3',
                display: 'none',
                type: 'image',
                rect: ['26px', '246px','321px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flatfadingchannel.png",'0px','0px']
            },
            {
                id: 'flatfadingchannel2',
                display: 'none',
                type: 'image',
                rect: ['26px', '246px','321px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flatfadingchannel.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['320', '225','auto','auto','auto', 'auto'],
                text: "A flat fading channel has<br>a wider spectrum than the<br>signal and is flat in the <br>bandwidth of the signal.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow12',
                display: 'none',
                type: 'image',
                rect: ['170px', '428px','38px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px']
            },
            {
                id: 'flatoutput',
                display: 'none',
                type: 'image',
                rect: ['26px', '483px','321px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flatoutput.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['320px', '469px','auto','auto','auto', 'auto'],
                text: "The signal output has<br>not been reshaped,<br>only maybe weaker.<br>No distortion occurs.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow13',
                display: 'none',
                type: 'image',
                rect: ['515px', '226px','38px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px']
            },
            {
                id: 'frequency-channel',
                display: 'none',
                type: 'image',
                rect: ['370px', '239px','321px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frequency-channel.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['188px', '693px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of The Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['177px', '729px','auto','auto','auto', 'auto'],
                text: "Figure  5.8  Flat and Frequency Selective Fading",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'signal-spectrum',
                display: 'none',
                type: 'image',
                rect: ['30px', '99px','655px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"signal-spectrum.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['331px', '244px','auto','auto','auto', 'auto'],
                text: "A frequency selective<br>channel has variations<br>inside the bandwidth<br>of the signal.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'frequency-channel2',
                display: 'none',
                type: 'image',
                rect: ['371px', '304px','321px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frequency-channel.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['342px', '469','auto','auto','auto', 'auto'],
                text: "The channel treats the<br>frequencies in the signal<br>differently (selectively).<br>The output is not at all<br>similar to the original<br>input.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'single-signal',
                display: 'none',
                type: 'image',
                rect: ['15px', '238px','332px','161px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"single-signal.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrow13}": [
                ["style", "display", 'none'],
                ["style", "left", '515px'],
                ["transform", "scaleY", '0.04347'],
                ["style", "top", '226px']
            ],
            "${_frequency-outpt}": [
                ["style", "top", '484px'],
                ["style", "left", '370px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '729px'],
                ["style", "left", '177px'],
                ["style", "font-size", '119%']
            ],
            "${_signal-spectrum}": [
                ["style", "top", '99px'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_Text5}": [
                ["style", "top", '469px'],
                ["style", "left", '320px'],
                ["style", "display", 'none']
            ],
            "${_single-signal}": [
                ["style", "top", '91px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_flatoutput}": [
                ["style", "top", '483px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_arrow14}": [
                ["style", "display", 'none'],
                ["style", "left", '514px'],
                ["transform", "scaleY", '0.08696'],
                ["style", "top", '429px']
            ],
            "${_flatfadingchannel3}": [
                ["style", "top", '246px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_Text4}": [
                ["style", "display", 'none']
            ],
            "${_flatfadingchannel2}": [
                ["style", "top", '246px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_arrow12}": [
                ["style", "top", '428px'],
                ["style", "left", '170px'],
                ["transform", "scaleY", '0.08695'],
                ["style", "display", 'none']
            ],
            "${_frequency-channel}": [
                ["style", "top", '239px'],
                ["style", "left", '370px'],
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '693px'],
                ["style", "left", '188px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '244px'],
                ["style", "left", '331px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '81px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '198px'],
                ["style", "font-size", '94%']
            ],
            "${_single-signal2}": [
                ["style", "top", '91px'],
                ["style", "left", '359px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '750px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "left", '342px'],
                ["style", "display", 'none']
            ],
            "${_frequency-channel2}": [
                ["style", "top", '238px'],
                ["style", "left", '371px'],
                ["style", "display", 'none']
            ],
            "${_arrow1}": [
                ["style", "display", 'none'],
                ["style", "left", '170px'],
                ["transform", "scaleY", '0.08695'],
                ["style", "top", '225px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14500,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "style", "${_flatfadingchannel2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid33", tween: [ "transform", "${_arrow12}", "scaleY", '1', { fromValue: '0.08695'}], position: 5750, duration: 1000 },
                { id: "eid65", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrow1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid13", tween: [ "style", "${_arrow1}", "display", 'none', { fromValue: 'block'}], position: 2650, duration: 0 },
                { id: "eid39", tween: [ "transform", "${_arrow13}", "scaleY", '1', { fromValue: '0.04347'}], position: 7750, duration: 1000 },
                { id: "eid49", tween: [ "style", "${_frequency-channel2}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_frequency-channel2}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_signal-spectrum}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid57", tween: [ "style", "${_arrow14}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_arrow13}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid41", tween: [ "style", "${_arrow13}", "display", 'none', { fromValue: 'block'}], position: 9155, duration: 0 },
                { id: "eid26", tween: [ "style", "${_arrow12}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid46", tween: [ "style", "${_single-signal2}", "top", '238px', { fromValue: '91px'}], position: 9750, duration: 1000 },
                { id: "eid54", tween: [ "style", "${_single-signal2}", "top", '302px', { fromValue: '238px'}], position: 11000, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid53", tween: [ "style", "${_frequency-channel2}", "top", '304px', { fromValue: '238px'}], position: 11000, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid20", tween: [ "style", "${_flatfadingchannel3}", "top", '310px', { fromValue: '246px'}], position: 4500, duration: 1000 },
                { id: "eid60", tween: [ "style", "${_frequency-outpt}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_single-signal2}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid61", tween: [ "style", "${_single-signal2}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_frequency-channel}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid59", tween: [ "transform", "${_arrow14}", "scaleY", '1', { fromValue: '0.08696'}], position: 12250, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_flatoutput}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_single-signal}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid55", tween: [ "style", "${_single-signal}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_single-signal}", "top", '238px', { fromValue: '91px'}], position: 3250, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_single-signal}", "top", '302px', { fromValue: '238px'}], position: 4500, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_flatfadingchannel3}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_flatfadingchannel3}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid6", tween: [ "transform", "${_arrow1}", "scaleY", '1', { fromValue: '0.08695'}], position: 1250, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1446796");
