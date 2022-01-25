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
                id: 'bluebg',
                display: 'block',
                type: 'image',
                rect: ['84px', '77px','448px','236px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bluebg.png",'0px','0px']
            },
            {
                id: 'channel',
                display: 'block',
                type: 'image',
                rect: ['30px', '62px','8.2%','49.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"channel%23.png",'0%','0%','53px','249px']
            },
            {
                id: 'minutesdown',
                type: 'image',
                rect: ['71px', '273px','72.6%','13.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"minutesdown.png",'0%','0%','472px','68px']
            },
            {
                id: 'minutesup',
                type: 'image',
                rect: ['71px', '29px','72.6%','10.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"minutesup.png",'0%','0%','472px','54px']
            },
            {
                id: 'octime',
                display: 'block',
                type: 'image',
                rect: ['504px', '21px','108px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"octime.png",'0px','0px']
            },
            {
                id: 'totals',
                display: 'block',
                type: 'image',
                rect: ['469px', '319px','135px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"totals.png",'0px','0px']
            },
            {
                id: 'rest',
                display: 'block',
                type: 'image',
                rect: ['86px', '100px','80.3%','39%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rest.png",'0%','0%','522px','195px']
            },
            {
                id: '_2min-call',
                type: 'image',
                rect: ['90px', '84px','19px','10px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2min-call.png",'0px','0px','100%','100%']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['71px', '341px','377px','35px','auto', 'auto'],
                text: "Line shows Channel 1 is used about 2 minutes for a call.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['100px', '357px','auto','auto','auto', 'auto'],
                text: "17 bars for Channel 1 total 17 calls for 51 of the 60 minutes.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['122px', '355px','347px','35px','auto', 'auto'],
                text: "Channel usage for all 10 channels is now seen.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ch1',
                display: 'block',
                type: 'image',
                rect: ['106px', '75px','77.2%','5.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ch1.png",'0%','0%','502px','26px']
            },
            {
                id: 'note',
                display: 'block',
                type: 'image',
                rect: ['40px', '365px','362px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"note.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['174px', '319px','265px','26px','auto', 'auto'],
                text: "10 channels can be used in this system.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['32px', '451px','auto','auto','auto', 'auto'],
                text: "Figure 13.8 Example Distribution of Traffic in a Cell with Capacity 10",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['131px', '422px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_rest}": [
                ["style", "top", '100px'],
                ["style", "display", 'block'],
                ["style", "left", '86px'],
                ["style", "width", '0%']
            ],
            "${_Text3}": [
                ["style", "top", '426px'],
                ["style", "display", 'block'],
                ["style", "width", '373px'],
                ["style", "left", '138px'],
                ["style", "font-size", '94%']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "width", '448px']
            ],
            "${_ch1}": [
                ["style", "top", '75px'],
                ["style", "display", 'block'],
                ["style", "left", '106px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '319px'],
                ["style", "height", '26px'],
                ["style", "display", 'block'],
                ["style", "left", '174px'],
                ["style", "width", '265px']
            ],
            "${_octime}": [
                ["style", "top", '21px'],
                ["style", "left", '504px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '451px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '32px'],
                ["style", "font-size", '119%']
            ],
            "${_minutesdown}": [
                ["style", "top", '273px'],
                ["style", "left", '71px'],
                ["style", "width", '0%']
            ],
            "${_minutesup}": [
                ["style", "top", '29px'],
                ["style", "left", '71px'],
                ["style", "width", '0%']
            ],
            "${_Text7}": [
                ["style", "top", '357px'],
                ["style", "display", 'block'],
                ["style", "left", '100px'],
                ["style", "width", '395px']
            ],
            "${_Text6}": [
                ["style", "height", '35px'],
                ["style", "display", 'block'],
                ["style", "width", '377px']
            ],
            "${__2min-call}": [
                ["style", "top", '84px'],
                ["style", "left", '90px'],
                ["style", "width", '0px']
            ],
            "${_Text8}": [
                ["style", "display", 'block']
            ],
            "${_note}": [
                ["style", "top", '365px'],
                ["style", "left", '40px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '650px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bluebg}": [
                ["style", "top", '77px'],
                ["style", "left", '84px'],
                ["style", "display", 'block']
            ],
            "${_totals}": [
                ["style", "top", '319px'],
                ["style", "left", '469px'],
                ["style", "display", 'block']
            ],
            "${_channel}": [
                ["style", "display", 'block'],
                ["style", "top", '62px'],
                ["style", "left", '30px'],
                ["style", "height", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10500,
            autoPlay: true,
            timeline: [
                { id: "eid51", tween: [ "style", "${_Text3}", "width", '373px', { fromValue: '373px'}], position: 10345, duration: 0 },
                { id: "eid44", tween: [ "style", "${_totals}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_totals}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid3", tween: [ "style", "${_channel}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_channel}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_note}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_note}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid26", tween: [ "style", "${_octime}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_octime}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 5395, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_minutesup}", "width", '72.62%', { fromValue: '0%'}], position: 2500, duration: 1500 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid12", tween: [ "style", "${_minutesdown}", "width", '72.62%', { fromValue: '0%'}], position: 2500, duration: 1500 },
                { id: "eid1", tween: [ "style", "${_bluebg}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_bluebg}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid40", tween: [ "style", "${_rest}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_rest}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text3}", "left", '138px', { fromValue: '138px'}], position: 10345, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid43", tween: [ "style", "${_rest}", "width", '80.31%', { fromValue: '0%'}], position: 8000, duration: 1500 },
                { id: "eid28", tween: [ "style", "${_ch1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_ch1}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text3}", "top", '426px', { fromValue: '426px'}], position: 10345, duration: 0 },
                { id: "eid23", tween: [ "style", "${__2min-call}", "width", '19px', { fromValue: '0px'}], position: 4250, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_ch1}", "width", '77.24%', { fromValue: '0%'}], position: 5750, duration: 1500 },
                { id: "eid6", tween: [ "style", "${_channel}", "height", '49.8%', { fromValue: '0%'}], position: 500, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-325244154");
