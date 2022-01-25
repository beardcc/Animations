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
                id: 'Figure_527',
                type: 'text',
                rect: ['42px', '268px','auto','auto','auto', 'auto'],
                text: "Figure 5.27 General Model of Spread Spectrum Digital Communication System",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'click2ani',
                display: 'block',
                type: 'text',
                rect: ['177px', '245px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'txt_three',
                display: 'none',
                type: 'text',
                rect: ['451', '190','auto','auto','auto', 'auto'],
                text: "Use the same pseudonoise<br>code to demodulate.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'three',
                display: 'none',
                type: 'image',
                rect: ['400px', '27px','311px','156px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"three.png",'0px','0px']
            },
            {
                id: 'txt_two',
                display: 'none',
                type: 'text',
                rect: ['474px', '63px','auto','auto','auto', 'auto'],
                text: "Send over the channel.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'two',
                display: 'none',
                type: 'image',
                rect: ['292px', '27px','116px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"two.png",'0px','0px']
            },
            {
                id: 'txt_one',
                display: 'none',
                type: 'text',
                rect: ['379', '46','auto','auto','auto', 'auto'],
                text: "Encode the signal<br>and then spread using<br>a pseudonoise code.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'one',
                display: 'none',
                type: 'image',
                rect: ['14px', '27px','304px','156px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"one.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_one}": [
                ["style", "top", '27px'],
                ["style", "left", '14px'],
                ["style", "display", 'none']
            ],
            "${_click2ani}": [
                ["style", "top", '245px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '177px'],
                ["style", "font-size", '94%']
            ],
            "${_txt_one}": [
                ["style", "display", 'none']
            ],
            "${_three}": [
                ["style", "top", '27px'],
                ["style", "left", '400px'],
                ["style", "display", 'none']
            ],
            "${_txt_two}": [
                ["style", "display", 'none'],
                ["style", "left", '474px'],
                ["style", "top", '63px']
            ],
            "${_two}": [
                ["style", "top", '27px'],
                ["style", "left", '292px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '725px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_txt_three}": [
                ["style", "top", '140px'],
                ["style", "left", '544px'],
                ["style", "display", 'none']
            ],
            "${_Figure_527}": [
                ["style", "top", '268px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '42px'],
                ["style", "font-size", '119%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "1": 250,
                "2": 500,
                "3": 750,
                "All": 1000
            },
            timeline: [
                { id: "eid7", tween: [ "style", "${_txt_two}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_txt_two}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid12", tween: [ "style", "${_txt_three}", "left", '544px', { fromValue: '544px'}], position: 750, duration: 0 },
                { id: "eid5", tween: [ "style", "${_txt_one}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_txt_one}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_two}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_click2ani}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_txt_three}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid10", tween: [ "style", "${_txt_three}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_txt_three}", "top", '140px', { fromValue: '140px'}], position: 750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_one}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid2", tween: [ "style", "${_three}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5280769");
