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
                id: 'info',
                display: 'block',
                type: 'image',
                rect: ['292px', '179px','377px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"info.png",'0px','0px']
            },
            {
                id: 'mac-frames',
                display: 'block',
                type: 'image',
                rect: ['3px', '141px','668px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mac-frames.png",'0px','0px']
            },
            {
                id: 'dsap',
                display: 'block',
                type: 'image',
                rect: ['364px', '179px','90px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dsap.png",'0px','0px']
            },
            {
                id: 'ssap',
                display: 'block',
                type: 'image',
                rect: ['395px', '179px','90px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ssap.png",'0px','0px']
            },
            {
                id: 'llc-ctrl',
                display: 'block',
                type: 'image',
                rect: ['409px', '179px','130px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"llc-ctrl.png",'0px','0px']
            },
            {
                id: 'dsap-value',
                display: 'block',
                type: 'image',
                rect: ['73px', '325px','246px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dsap-value.png",'0px','0px']
            },
            {
                id: 'IG',
                display: 'block',
                type: 'image',
                rect: ['76px', '325px','54px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IG.png",'0px','0px']
            },
            {
                id: 'CR',
                display: 'block',
                type: 'image',
                rect: ['147px', '325px','54px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CR.png",'0px','0px']
            },
            {
                id: 'paths-1',
                display: 'block',
                type: 'image',
                rect: ['68px', '175px','641px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paths-1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['358px', '97px','246px','auto','auto', 'auto'],
                text: "The LLC frame fits within the data portion of the MAC frame.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'paths-2',
                display: 'block',
                type: 'image',
                rect: ['74px', '317px','520px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"paths-2.png",'0px','0px']
            },
            {
                id: 'ssap-value',
                display: 'block',
                type: 'image',
                rect: ['143px', '325px','246px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ssap-value.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['239px', '105px','auto','auto','auto', 'auto'],
                text: "Now we can see the details for the DSAP and SSAP fields.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'abbreviations',
                display: 'block',
                type: 'image',
                rect: ['75px', '492px','456px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"abbreviations.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['24px', '296px','48px','36px','auto', 'auto'],
                text: "LLC PDU",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['620px', '440px','102px','auto','auto', 'auto'],
                text: "LLC Address Fields",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['156px', '612px','auto','auto','auto', 'auto'],
                text: "Figure 11.7 LLC PDU in a Generic MAC Frame Format",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['193px', '573px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ssap}": [
                ["style", "top", '179px'],
                ["style", "left", '395px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '612px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '156px'],
                ["style", "font-size", '119%']
            ],
            "${_Text3}": [
                ["style", "top", '97px'],
                ["style", "width", '246px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "left", '358px'],
                ["style", "font-size", '94%']
            ],
            "${_Text8}": [
                ["style", "top", '588px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '203px'],
                ["style", "font-size", '94%']
            ],
            "${_paths-1}": [
                ["style", "top", '175px'],
                ["style", "left", '68px'],
                ["style", "display", 'block']
            ],
            "${_abbreviations}": [
                ["style", "top", '492px'],
                ["style", "left", '75px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '105px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '239px'],
                ["style", "display", 'block']
            ],
            "${_info}": [
                ["style", "top", '179px'],
                ["style", "left", '288px'],
                ["style", "display", 'block']
            ],
            "${_ssap-value}": [
                ["style", "top", '325px'],
                ["style", "left", '143px'],
                ["style", "display", 'block']
            ],
            "${_paths-2}": [
                ["style", "top", '317px'],
                ["style", "left", '74px'],
                ["style", "display", 'block']
            ],
            "${_dsap}": [
                ["style", "top", '179px'],
                ["style", "left", '364px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '440px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '620px'],
                ["style", "width", '102px']
            ],
            "${_mac-frames}": [
                ["style", "top", '141px'],
                ["style", "left", '3px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '296px'],
                ["style", "height", '36px'],
                ["style", "display", 'block'],
                ["style", "left", '24px'],
                ["style", "width", '48px']
            ],
            "${_IG}": [
                ["style", "top", '325px'],
                ["style", "left", '76px'],
                ["style", "display", 'block']
            ],
            "${_CR}": [
                ["style", "top", '325px'],
                ["style", "left", '147px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '750px'],
                ["style", "height", '650px'],
                ["style", "overflow", 'hidden']
            ],
            "${_llc-ctrl}": [
                ["style", "top", '179px'],
                ["style", "left", '409px'],
                ["style", "display", 'block']
            ],
            "${_dsap-value}": [
                ["style", "top", '325px'],
                ["style", "left", '73px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid55", tween: [ "style", "${_IG}", "top", '432px', { fromValue: '325px'}], position: 2840, duration: 1500 },
                { id: "eid16", tween: [ "style", "${_dsap}", "top", '287px', { fromValue: '179px'}], position: 625, duration: 1500 },
                { id: "eid67", tween: [ "style", "${_CR}", "top", '432px', { fromValue: '325px'}], position: 2840, duration: 1500 },
                { id: "eid5", tween: [ "style", "${_ssap}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_ssap}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0 },
                { id: "eid22", tween: [ "style", "${_dsap}", "left", '72px', { fromValue: '364px'}], position: 625, duration: 1500 },
                { id: "eid3", tween: [ "style", "${_dsap}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_dsap}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0 },
                { id: "eid1", tween: [ "style", "${_mac-frames}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_mac-frames}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
                { id: "eid46", tween: [ "style", "${_ssap-value}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_ssap-value}", "display", 'block', { fromValue: 'none'}], position: 2840, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2669, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4820, duration: 0 },
                { id: "eid23", tween: [ "style", "${_ssap}", "left", '143px', { fromValue: '395px'}], position: 625, duration: 1500 },
                { id: "eid81", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2125, duration: 0 },
                { id: "eid9", tween: [ "style", "${_info}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_info}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0 },
                { id: "eid48", tween: [ "style", "${_dsap-value}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_dsap-value}", "display", 'block', { fromValue: 'none'}], position: 2840, duration: 0 },
                { id: "eid37", tween: [ "style", "${_paths-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_paths-1}", "display", 'block', { fromValue: 'none'}], position: 2125, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Text8}", "top", '588px', { fromValue: '588px'}], position: 4940, duration: 0 },
                { id: "eid35", tween: [ "style", "${_info}", "left", '328px', { fromValue: '288px'}], position: 625, duration: 1500 },
                { id: "eid30", tween: [ "style", "${_llc-ctrl}", "top", '287px', { fromValue: '179px'}], position: 625, duration: 1500 },
                { id: "eid60", tween: [ "style", "${_dsap-value}", "left", '101px', { fromValue: '73px'}], position: 2840, duration: 1500 },
                { id: "eid79", tween: [ "style", "${_abbreviations}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_abbreviations}", "display", 'block', { fromValue: 'none'}], position: 4672, duration: 0 },
                { id: "eid72", tween: [ "style", "${_ssap-value}", "left", '351px', { fromValue: '143px'}], position: 2840, duration: 1500 },
                { id: "eid76", tween: [ "style", "${_paths-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_paths-2}", "display", 'block', { fromValue: 'none'}], position: 4340, duration: 0 },
                { id: "eid7", tween: [ "style", "${_llc-ctrl}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_llc-ctrl}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Text8}", "left", '203px', { fromValue: '203px'}], position: 4940, duration: 0 },
                { id: "eid42", tween: [ "style", "${_IG}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_IG}", "display", 'block', { fromValue: 'none'}], position: 2840, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2425, duration: 0 },
                { id: "eid54", tween: [ "style", "${_IG}", "left", '72px', { fromValue: '76px'}], position: 2840, duration: 1500 },
                { id: "eid61", tween: [ "style", "${_dsap-value}", "top", '432px', { fromValue: '325px'}], position: 2840, duration: 1500 },
                { id: "eid29", tween: [ "style", "${_llc-ctrl}", "left", '212px', { fromValue: '409px'}], position: 625, duration: 1500 },
                { id: "eid44", tween: [ "style", "${_CR}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_CR}", "display", 'block', { fromValue: 'none'}], position: 2840, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid73", tween: [ "style", "${_ssap-value}", "top", '432px', { fromValue: '325px'}], position: 2840, duration: 1500 },
                { id: "eid83", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4340, duration: 0 },
                { id: "eid66", tween: [ "style", "${_CR}", "left", '324px', { fromValue: '147px'}], position: 2840, duration: 1500 },
                { id: "eid36", tween: [ "style", "${_info}", "top", '287px', { fromValue: '179px'}], position: 625, duration: 1500 },
                { id: "eid24", tween: [ "style", "${_ssap}", "top", '287px', { fromValue: '179px'}], position: 625, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-449693972");
