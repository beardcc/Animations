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
                id: 'oval3',
                display: 'block',
                type: 'image',
                rect: ['207px', '349px','85px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'oval-23',
                display: 'block',
                type: 'image',
                rect: ['248px', '298px','155px','121px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval-2.png",'0px','0px']
            },
            {
                id: 'arrow-13',
                display: 'block',
                type: 'image',
                rect: ['157px', '318px','104px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'arrow-23',
                display: 'block',
                type: 'image',
                rect: ['170px', '284px','83px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['400px', '341px','147px','23px','auto', 'auto'],
                text: "Sample at the Nyquist rate.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'graph3',
                type: 'image',
                rect: ['89px', '66px','567px','376px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"graph.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['247px', '511px','auto','auto','auto', 'auto'],
                text: "Figure 7.17 Pulse-Code Modulation Example",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['273px', '510px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation<br><br>",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['136px', '457px','272px','36px','auto', 'auto'],
                text: "These are the encoded values for the sample.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Oval2',
                display: 'block',
                type: 'image',
                rect: ['233px', '290px','34px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Oval2.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['73px', '317px','104px','47px','auto', 'auto'],
                text: "Here the value is approximately '1'.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-43',
                display: 'block',
                type: 'image',
                rect: ['280px', '55px','301px','152px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-4.png",'0px','0px']
            },
            {
                id: 'arrow-34',
                display: 'block',
                type: 'image',
                rect: ['238px', '60px','386px','355px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-3.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['533px', '29px','232px','36px','auto', 'auto'],
                text: "Here the value is approximately '9'.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["style", "top", '337px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '385px'],
                ["style", "width", '119px']
            ],
            "${_Text2}": [
                ["style", "top", '485px'],
                ["style", "height", '16px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '245px'],
                ["style", "font-size", '94%']
            ],
            "${_arrow-43}": [
                ["style", "top", '55px'],
                ["style", "left", '280px'],
                ["style", "display", 'block']
            ],
            "${_graph3}": [
                ["style", "left", '89px'],
                ["style", "top", '66px']
            ],
            "${_arrow-13}": [
                ["style", "display", 'block'],
                ["style", "left", '157px'],
                ["style", "top", '318px']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '40px'],
                ["style", "width", '137px']
            ],
            "${_arrow-23}": [
                ["style", "top", '284px'],
                ["style", "display", 'block'],
                ["style", "height", '74px'],
                ["style", "left", '170px'],
                ["style", "width", '83px']
            ],
            "${_arrow-34}": [
                ["style", "top", '60px'],
                ["style", "left", '238px'],
                ["style", "display", 'block']
            ],
            "${_Oval2}": [
                ["style", "top", '290px'],
                ["style", "display", 'block'],
                ["style", "height", '53px'],
                ["style", "left", '233px'],
                ["style", "width", '34px']
            ],
            "${_Text}": [
                ["style", "top", '511px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '247px'],
                ["style", "font-size", '119%']
            ],
            "${_Text3}": [
                ["style", "top", '451px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '239px'],
                ["style", "width", '338px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '550px'],
                ["style", "overflow", 'hidden']
            ],
            "${_oval-23}": [
                ["style", "top", '298px'],
                ["style", "left", '248px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '37px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '581px'],
                ["style", "width", '137px']
            ],
            "${_oval3}": [
                ["style", "top", '349px'],
                ["style", "left", '207px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3930,
            autoPlay: true,
            timeline: [
                { id: "eid60", tween: [ "style", "${_Text3}", "width", '338px', { fromValue: '338px'}], position: 750, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3930, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text3}", "left", '239px', { fromValue: '239px'}], position: 750, duration: 0 },
                { id: "eid23", tween: [ "style", "${_arrow-23}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_arrow-23}", "display", 'block', { fromValue: 'none'}], position: 2060, duration: 0 },
                { id: "eid34", tween: [ "style", "${_arrow-23}", "display", 'none', { fromValue: 'block'}], position: 2840, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 3805, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text4}", "width", '119px', { fromValue: '119px'}], position: 1665, duration: 0 },
                { id: "eid22", tween: [ "style", "${_arrow-13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_arrow-13}", "display", 'block', { fromValue: 'none'}], position: 2565, duration: 0 },
                { id: "eid33", tween: [ "style", "${_arrow-13}", "display", 'none', { fromValue: 'block'}], position: 2840, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1845, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Oval2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Oval2}", "display", 'block', { fromValue: 'none'}], position: 1845, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Oval2}", "display", 'none', { fromValue: 'block'}], position: 2840, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 610, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text4}", "top", '337px', { fromValue: '337px'}], position: 1665, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text4}", "left", '385px', { fromValue: '385px'}], position: 1665, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2315, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2840, duration: 0 },
                { id: "eid1", tween: [ "style", "${_oval3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_oval3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_oval3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text6}", "width", '137px', { fromValue: '137px'}], position: 3665, duration: 0 },
                { id: "eid36", tween: [ "style", "${_arrow-34}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_arrow-34}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid46", tween: [ "style", "${_arrow-34}", "display", 'none', { fromValue: 'block'}], position: 3805, duration: 0 },
                { id: "eid11", tween: [ "style", "${_oval-23}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_oval-23}", "display", 'block', { fromValue: 'none'}], position: 1335, duration: 0 },
                { id: "eid16", tween: [ "style", "${_oval-23}", "display", 'none', { fromValue: 'block'}], position: 1845, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text3}", "top", '451px', { fromValue: '451px'}], position: 750, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text6}", "top", '37px', { fromValue: '37px'}], position: 3665, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text6}", "left", '581px', { fromValue: '581px'}], position: 3665, duration: 0 },
                { id: "eid35", tween: [ "style", "${_arrow-43}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_arrow-43}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_arrow-43}", "display", 'none', { fromValue: 'block'}], position: 3805, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-963024355");
