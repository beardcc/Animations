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
                id: 'bsantenna',
                display: 'block',
                type: 'image',
                rect: ['790px', '190px','400px','604px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bsantenna.png",'0px','0px']
            },
            {
                id: 'resthouses',
                display: 'block',
                type: 'image',
                rect: ['1691px', '172px','736px','1104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"resthouses.png",'0px','0px']
            },
            {
                id: 'swcwnter',
                display: 'block',
                type: 'image',
                rect: ['102px', '568px','400px','344px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"swcwnter.png",'0px','0px']
            },
            {
                id: 'wirelink',
                display: 'block',
                type: 'image',
                rect: ['274px', '618px','29.4%','9.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wirelink.png",'0%','0%','736px','156px']
            },
            {
                id: 'wllink',
                display: 'block',
                type: 'image',
                rect: ['1061px', '56px','31.2%','68.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wllink.png",'0%','0%','780px','1096px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['341px', '1409px','auto','auto','auto', 'auto'],
                text: "Figure 16.18 Fixed Broadband Wireless Configuration",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['494px', '1386px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '1498px'],
                ["style", "width", '1818px'],
                ["style", "font-weight", '700'],
                ["style", "height", '100px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '341px'],
                ["style", "font-size", '475%']
            ],
            "${_bsantenna}": [
                ["style", "top", '190px'],
                ["style", "left", '790px'],
                ["style", "display", 'block']
            ],
            "${_resthouses}": [
                ["style", "top", '172px'],
                ["style", "left", '1691px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '1313px'],
                ["style", "display", 'block'],
                ["style", "width", '1510px'],
                ["style", "left", '494px'],
                ["style", "font-size", '375%']
            ],
            "${_Text}": [
                ["style", "top", '1409px'],
                ["style", "font-size", '475%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '100px'],
                ["style", "font-weight", '700'],
                ["style", "left", '341px'],
                ["style", "width", '1818px']
            ],
            "${_wirelink}": [
                ["style", "display", 'block'],
                ["style", "top", '618px'],
                ["style", "left", '274px'],
                ["style", "width", '0%']
            ],
            "${_TextCopy2}": [
                ["style", "top", '1498px'],
                ["style", "width", '1818px'],
                ["style", "font-weight", '700'],
                ["style", "height", '100px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '341px'],
                ["style", "font-size", '475%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1500px'],
                ["style", "width", '2500px']
            ],
            "${_swcwnter}": [
                ["style", "top", '568px'],
                ["style", "left", '102px'],
                ["style", "display", 'block']
            ],
            "${_TextCopy}": [
                ["style", "top", '1498px'],
                ["style", "width", '1818px'],
                ["style", "font-weight", '700'],
                ["style", "height", '100px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '341px'],
                ["style", "font-size", '475%']
            ],
            "${_wllink}": [
                ["style", "top", '56px'],
                ["style", "height", '77.2%'],
                ["style", "display", 'block'],
                ["style", "left", '1061px'],
                ["style", "width", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4335,
            autoPlay: true,
            timeline: [
                { id: "eid15", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4335, duration: 0 },
                { id: "eid5", tween: [ "style", "${_wirelink}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_wirelink}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid8", tween: [ "style", "${_wirelink}", "width", '29.44%', { fromValue: '0%'}], position: 750, duration: 1500 },
                { id: "eid14", tween: [ "style", "${_wllink}", "width", '31.2%', { fromValue: '0%'}], position: 2750, duration: 1453 },
                { id: "eid11", tween: [ "style", "${_wllink}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_wllink}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_bsantenna}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_bsantenna}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_swcwnter}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_swcwnter}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid9", tween: [ "style", "${_resthouses}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_resthouses}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_wllink}", "height", '77.2%', { fromValue: '77.2%'}], position: 4250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-669851001");
