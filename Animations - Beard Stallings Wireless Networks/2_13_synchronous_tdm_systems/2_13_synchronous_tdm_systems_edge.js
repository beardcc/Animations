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
                id: 'o2b',
                display: 'block',
                type: 'image',
                rect: ['540px', '451px','242px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"o2b.png",'0px','0px']
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['725px', '462px','163px','53px','auto', 'auto'],
                text: "Store data briefly to be sent out for each stream.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'o1b',
                display: 'block',
                type: 'image',
                rect: ['239px', '508px','349px','227px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"o1b.png",'0px','0px']
            },
            {
                id: '_03',
                display: 'block',
                type: 'image',
                rect: ['556px', '69px','228px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"03.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['750px', '94px','132px','28px','auto', 'auto'],
                text: "The stream is sent.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'o2',
                display: 'block',
                type: 'image',
                rect: ['419px', '-6px','228px','291px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"o2.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['600px', '24px','166px','45px','auto', 'auto'],
                text: "Each buffer is scanned in order to put together a composite data stream.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'o1',
                display: 'block',
                type: 'image',
                rect: ['254px', '-6px','228px','291px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"o1.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['166px', '18px','112px','22px','auto', 'auto'],
                text: "Incoming data is briefly stored.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['222px', '24px','594px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Untitled-4',
                type: 'image',
                rect: ['213px', '256px','594px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-4.png",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['222px', '515px','594px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['485px', '257px','82px','28px','auto', 'auto'],
                text: "(a) Transmitter",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['475px', '432px','132px','28px','auto', 'auto'],
                text: "(b) TDMA Frames<br>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['495px', '744px','75px','28px','auto', 'auto'],
                text: "(c) Receiver  <br>",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['319px', '845px'],
                text: "Figure 2.13  Synchronous TDM System",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['367px', '836px'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['173px', '500px','132px','45px','auto', 'auto'],
                text: "Receive data  and scan to split into individual streams.",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_o1b}": [
                ["style", "top", '508px'],
                ["style", "left", '239px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "font-size", '75%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '600px'],
                ["style", "width", '166px']
            ],
            "${_Text11}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "top", '462px'],
                ["style", "width", '163px']
            ],
            "${_Text3}": [
                ["style", "top", '744px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '495px'],
                ["style", "width", '75px']
            ],
            "${_Text5}": [
                ["style", "top", '820px'],
                ["style", "width", '378px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '291px'],
                ["style", "font-size", '94%']
            ],
            "${_Text4}": [
                ["style", "top", '845px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '321px'],
                ["style", "height", '33px'],
                ["style", "font-weight", '700'],
                ["style", "left", '319px'],
                ["style", "font-size", '119%']
            ],
            "${_o1}": [
                ["style", "top", '-6px'],
                ["style", "left", '254px'],
                ["style", "display", 'block']
            ],
            "${_Untitled-4}": [
                ["style", "left", '-594px'],
                ["style", "top", '256px']
            ],
            "${__03}": [
                ["style", "top", '69px'],
                ["style", "left", '556px'],
                ["style", "display", 'block']
            ],
            "${__2}": [
                ["style", "left", '222px'],
                ["style", "top", '515px']
            ],
            "${_Text10}": [
                ["style", "top", '500px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '173px'],
                ["style", "width", '162px']
            ],
            "${_Text6}": [
                ["style", "top", '18px'],
                ["style", "font-size", '75%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '166px'],
                ["style", "width", '112px']
            ],
            "${__1}": [
                ["style", "left", '222px'],
                ["style", "top", '24px']
            ],
            "${_Text}": [
                ["style", "top", '257px'],
                ["style", "font-size", '75%'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '485px'],
                ["style", "width", '82px']
            ],
            "${_o2b}": [
                ["style", "top", '467px'],
                ["style", "height", '339px'],
                ["style", "display", 'block'],
                ["style", "left", '531px'],
                ["style", "width", '254px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1000px'],
                ["style", "height", '880px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "top", '94px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '750px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '434px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '480px'],
                ["style", "width", '102px']
            ],
            "${_o2}": [
                ["style", "top", '-6px'],
                ["style", "left", '419px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7750,
            autoPlay: true,
            timeline: [
                { id: "eid41", tween: [ "style", "${_o2b}", "height", '339px', { fromValue: '339px'}], position: 7310, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text2}", "top", '434px', { fromValue: '434px'}], position: 7310, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text7}", "font-size", '75%', { fromValue: '12px'}], position: 1915, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text5}", "top", '820px', { fromValue: '820px'}], position: 7690, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text5}", "left", '291px', { fromValue: '291px'}], position: 7690, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text5}", "width", '378px', { fromValue: '378px'}], position: 7690, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text2}", "left", '480px', { fromValue: '480px'}], position: 7310, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text10}", "width", '162px', { fromValue: '162px'}], position: 6033, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text2}", "width", '102px', { fromValue: '102px'}], position: 7310, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_o1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_o1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_o1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Untitled-4}", "left", '213px', { fromValue: '-594px'}], position: 4000, duration: 1500 },
                { id: "eid9", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid48", tween: [ "style", "${_o2b}", "top", '467px', { fromValue: '467px'}], position: 7310, duration: 0 },
                { id: "eid25", tween: [ "style", "${_o1b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_o1b}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_o1b}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_o2b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_o2b}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_o2b}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_o2b}", "left", '531px', { fromValue: '531px'}], position: 7310, duration: 0 },
                { id: "eid43", tween: [ "style", "${_o2b}", "width", '254px', { fromValue: '254px'}], position: 7310, duration: 0 },
                { id: "eid7", tween: [ "style", "${_o2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_o2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_o2}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid13", tween: [ "style", "${__03}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${__03}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid18", tween: [ "style", "${__03}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-834198033");
