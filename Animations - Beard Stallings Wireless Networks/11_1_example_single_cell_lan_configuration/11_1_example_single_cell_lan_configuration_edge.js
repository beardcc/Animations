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
                id: 'cm-and-box',
                display: 'block',
                type: 'image',
                rect: ['33px', '71px','534px','306px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cm-and-box.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['416px', '376px','auto','auto','auto', 'auto'],
                text: "Wired network",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['94px', '566px','auto','auto','auto', 'auto'],
                text: "Figure 11.1 Example Single-Cell LAN Configuration",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['146px', '533px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'labels',
                display: 'block',
                type: 'image',
                rect: ['29px', '350px','121px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"labels.png",'0px','0px']
            },
            {
                id: '_1st-part',
                display: 'block',
                type: 'image',
                rect: ['59px', '344px','476px','155px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1st-part.png",'0px','0px']
            },
            {
                id: '_2nd-part',
                display: 'block',
                type: 'image',
                rect: ['57px', '92px','170px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2nd-part.png",'0px','0px']
            },
            {
                id: 'arrow-1',
                display: 'block',
                type: 'image',
                rect: ['199px', '120px','92px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'arrow-2',
                display: 'block',
                type: 'image',
                rect: ['142px', '144px','85px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'end-users',
                display: 'block',
                type: 'image',
                rect: ['318px', '234px','193px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"end-users.png",'0px','0px']
            },
            {
                id: 'arrows-for-end-users',
                display: 'block',
                type: 'image',
                rect: ['287px', '204px','132px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrows-for-end-users.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['77px', '47px','auto','auto','auto', 'auto'],
                text: "Wireless connections to servers and end users",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'wired-network-1',
                display: 'block',
                type: 'image',
                rect: ['44px', '205px','227px','131px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wired-network-1.png",'0px','0px']
            },
            {
                id: 'wired-network-2',
                display: 'block',
                type: 'image',
                rect: ['302px', '72px','227px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wired-network-2.png",'0px','0px']
            },
            {
                id: 'arrow-wn-1',
                display: 'block',
                type: 'image',
                rect: ['167px', '186px','87px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-wn-1.png",'0px','0px']
            },
            {
                id: 'arrow-wn-2',
                display: 'block',
                type: 'image',
                rect: ['308px', '164px','87px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-wn-2.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['444', '55','auto','auto','auto', 'auto'],
                text: "Wireless connections to other wired networks",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_wired-network-1}": [
                ["style", "top", '205px'],
                ["style", "left", '44px'],
                ["style", "display", 'block']
            ],
            "${_arrow-wn-2}": [
                ["style", "top", '164px'],
                ["style", "left", '308px'],
                ["style", "display", 'block']
            ],
            "${__2nd-part}": [
                ["style", "top", '92px'],
                ["style", "left", '57px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '39px'],
                ["style", "height", '42px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '234px'],
                ["style", "display", 'block']
            ],
            "${_wired-network-2}": [
                ["style", "top", '72px'],
                ["style", "left", '302px'],
                ["style", "display", 'block']
            ],
            "${_end-users}": [
                ["style", "display", 'block'],
                ["style", "left", '318px'],
                ["style", "top", '234px']
            ],
            "${_arrow-2}": [
                ["style", "top", '144px'],
                ["style", "left", '142px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '47px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '77px'],
                ["style", "display", 'block']
            ],
            "${_labels}": [
                ["style", "display", 'block'],
                ["style", "left", '29px'],
                ["style", "top", '350px']
            ],
            "${_arrow-wn-1}": [
                ["style", "top", '186px'],
                ["style", "left", '167px'],
                ["style", "display", 'block']
            ],
            "${_arrow-1}": [
                ["style", "top", '120px'],
                ["style", "left", '199px'],
                ["style", "display", 'block']
            ],
            "${_cm-and-box}": [
                ["style", "display", 'block'],
                ["style", "left", '33px'],
                ["style", "top", '71px']
            ],
            "${_Text}": [
                ["style", "top", '566px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '94px'],
                ["style", "font-size", '119%']
            ],
            "${_Text2}": [
                ["style", "top", '543px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '124px'],
                ["style", "font-size", '94%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '600px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text3}": [
                ["style", "top", '376px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '416px'],
                ["style", "display", 'block']
            ],
            "${_arrows-for-end-users}": [
                ["style", "top", '204px'],
                ["style", "left", '287px'],
                ["style", "display", 'block']
            ],
            "${__1st-part}": [
                ["style", "top", '344px'],
                ["style", "left", '59px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4590,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "style", "${_wired-network-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_wired-network-1}", "display", 'block', { fromValue: 'none'}], position: 2955, duration: 0 },
                { id: "eid22", tween: [ "style", "${_arrows-for-end-users}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_arrows-for-end-users}", "display", 'block', { fromValue: 'none'}], position: 1985, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4590, duration: 0 },
                { id: "eid17", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_arrow-2}", "display", 'block', { fromValue: 'none'}], position: 1405, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text2}", "top", '543px', { fromValue: '543px'}], position: 3925, duration: 0 },
                { id: "eid31", tween: [ "style", "${_wired-network-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_wired-network-2}", "display", 'block', { fromValue: 'none'}], position: 3550, duration: 0 },
                { id: "eid11", tween: [ "style", "${_cm-and-box}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_cm-and-box}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_arrow-wn-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_arrow-wn-2}", "display", 'block', { fromValue: 'none'}], position: 3730, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text2}", "left", '124px', { fromValue: '124px'}], position: 3925, duration: 0 },
                { id: "eid6", tween: [ "style", "${__1st-part}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${__1st-part}", "display", 'block', { fromValue: 'none'}], position: 325, duration: 0 },
                { id: "eid20", tween: [ "style", "${_end-users}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_end-users}", "display", 'block', { fromValue: 'none'}], position: 1820, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3925, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 4164, duration: 0 },
                { id: "eid13", tween: [ "style", "${__2nd-part}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${__2nd-part}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid29", tween: [ "style", "${_arrow-wn-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_arrow-wn-1}", "display", 'block', { fromValue: 'none'}], position: 3165, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 860, duration: 0 },
                { id: "eid15", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_arrow-1}", "display", 'block', { fromValue: 'none'}], position: 1405, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2330, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2665, duration: 0 },
                { id: "eid39", tween: [ "style", "${_labels}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_labels}", "display", 'block', { fromValue: 'none'}], position: 4394, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-276993908");
