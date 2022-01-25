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
                id: 'core-protocols',
                display: 'block',
                type: 'image',
                rect: ['-1px', '5px','111px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"core-protocols.png",'0px','0px']
            },
            {
                id: '_first_part',
                display: 'block',
                type: 'image',
                rect: ['105px', '6px','615px','418px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1st-part.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['239px', '15px','277px','auto','auto', 'auto'],
                text: "There are a core set of protocols that every Bluetooth implementation must have.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['231px', '24px','282px','auto','auto', 'auto'],
                text: "Then a particular implementation has options. Here are the protocols that need to be implemented for the cable replacement protocols.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'rfcomm-atcom',
                display: 'block',
                type: 'image',
                rect: ['187px', '-4px','263px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rfcomm-atcom.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['211px', '72px','278px','auto','auto', 'auto'],
                text: "If an implementation wants to use telephony control, then the other protocols need not be implemented and the TCS BIN is implemented instead.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'telephony-protocols',
                display: 'block',
                type: 'image',
                rect: ['-1px', '47px','185px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"telephony-protocols.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['64px', '141px','149px','auto','auto', 'auto'],
                text: "Other adopted protocols can be implemented directly on core protocols.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'audio',
                type: 'image',
                rect: ['107px', '133px','87px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"audio.png",'0px','0px']
            },
            {
                id: 'control',
                type: 'image',
                rect: ['650', '202','87px','121px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"control.png",'0px','0px']
            },
            {
                id: 'adopted-protocols',
                display: 'block',
                type: 'image',
                rect: ['-1px', '72px','185px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"adopted-protocols.png",'0px','0px']
            },
            {
                id: 'tcs-bin',
                display: 'block',
                type: 'image',
                rect: ['452px', '6px','86px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tcs-bin.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['161px', '63px','232px','auto','auto', 'auto'],
                text: "Then additional protocols that are outside Bluetooth, called adopted protocols, can be added.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'wae',
                display: 'block',
                type: 'image',
                rect: ['188px', '-5px','177px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wae.png",'0px','0px']
            },
            {
                id: 'cable-replacement-protocols',
                display: 'block',
                type: 'image',
                rect: ['-1px', '28px','185px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cable-replacement-protocols.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['211px', '470px','auto','auto','auto', 'auto'],
                text: "Figure 12.1 Bluetooth Protocol Stack",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['194px', '452px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '118px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '60px'],
                ["style", "width", '149px']
            ],
            "${_Text3}": [
                ["style", "top", '15px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '239px'],
                ["style", "width", '277px']
            ],
            "${_telephony-protocols}": [
                ["style", "top", '47px'],
                ["style", "left", '-1px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '447px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '176px'],
                ["style", "font-size", '94%']
            ],
            "${_core-protocols}": [
                ["style", "top", '5px'],
                ["style", "left", '-1px'],
                ["style", "display", 'block']
            ],
            "${_rfcomm-atcom}": [
                ["style", "top", '-4px'],
                ["style", "left", '187px'],
                ["style", "display", 'block']
            ],
            "${_audio}": [
                ["style", "left", '118px'],
                ["style", "top", '548px']
            ],
            "${_Text4}": [
                ["style", "top", '24px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '231px'],
                ["style", "width", '282px']
            ],
            "${_cable-replacement-protocols}": [
                ["style", "top", '28px'],
                ["style", "left", '-1px'],
                ["style", "display", 'block']
            ],
            "${_wae}": [
                ["style", "top", '-5px'],
                ["style", "left", '188px'],
                ["style", "display", 'block']
            ],
            "${_adopted-protocols}": [
                ["style", "display", 'block'],
                ["style", "left", '-1px'],
                ["style", "top", '72px']
            ],
            "${_Text6}": [
                ["style", "top", '72px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '211px'],
                ["style", "width", '278px']
            ],
            "${_Text}": [
                ["style", "top", '470px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '211px'],
                ["style", "font-size", '119%']
            ],
            "${__first_part}": [
                ["style", "top", '6px'],
                ["style", "left", '105px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '710px'],
                ["style", "height", '499px'],
                ["style", "overflow", 'hidden']
            ],
            "${_control}": [
                ["style", "left", '615px'],
                ["style", "top", '494px']
            ],
            "${_tcs-bin}": [
                ["style", "top", '6px'],
                ["style", "left", '452px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '63px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '161px'],
                ["style", "width", '232px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3846,
            autoPlay: true,
            timeline: [
                { id: "eid67", tween: [ "style", "${_control}", "left", '624px', { fromValue: '615px'}], position: 2178, duration: 1500 },
                { id: "eid72", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3846, duration: 0 },
                { id: "eid50", tween: [ "style", "${_audio}", "top", '133px', { fromValue: '548px'}], position: 2178, duration: 1500 },
                { id: "eid77", tween: [ "style", "${_Text2}", "top", '447px', { fromValue: '447px'}], position: 3808, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1645, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1875, duration: 0 },
                { id: "eid43", tween: [ "style", "${_adopted-protocols}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_adopted-protocols}", "display", 'block', { fromValue: 'none'}], position: 2090, duration: 0 },
                { id: "eid45", tween: [ "style", "${_adopted-protocols}", "display", 'block', { fromValue: 'block'}], position: 2178, duration: 0 },
                { id: "eid5", tween: [ "style", "${__first_part}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${__first_part}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_audio}", "left", '107px', { fromValue: '118px'}], position: 2178, duration: 1500 },
                { id: "eid76", tween: [ "style", "${_Text2}", "left", '176px', { fromValue: '176px'}], position: 3808, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_wae}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_wae}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid24", tween: [ "style", "${_wae}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid70", tween: [ "style", "${_wae}", "display", 'block', { fromValue: 'none'}], position: 3777, duration: 0 },
                { id: "eid29", tween: [ "style", "${_tcs-bin}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_tcs-bin}", "display", 'block', { fromValue: 'none'}], position: 1875, duration: 0 },
                { id: "eid3", tween: [ "style", "${_core-protocols}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_core-protocols}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 2090, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2178, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid12", tween: [ "style", "${_cable-replacement-protocols}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_cable-replacement-protocols}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid69", tween: [ "style", "${_control}", "top", '123px', { fromValue: '494px'}], position: 2178, duration: 1500 },
                { id: "eid31", tween: [ "style", "${_telephony-protocols}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_telephony-protocols}", "display", 'block', { fromValue: 'none'}], position: 1875, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid17", tween: [ "style", "${_rfcomm-atcom}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_rfcomm-atcom}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid25", tween: [ "style", "${_rfcomm-atcom}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid71", tween: [ "style", "${_rfcomm-atcom}", "display", 'block', { fromValue: 'none'}], position: 3777, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1742659581");
