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
                id: 'Text',
                type: 'text',
                rect: ['270px', '522px','auto','auto','auto', 'auto'],
                text: "Figure 3.5 Circuit Establishment",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['244px', '546px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['251px', '17px','240px','43px','auto', 'auto'],
                text: "Two phones can connect directly through an end office.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_12',
                type: 'image',
                rect: ['120px', '67px','555px','378px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"12.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['20px', '269px','180px','41px','auto', 'auto'],
                text: "Connection can also be made through an intermediate exchange.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['159px', '244px','291px','92px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'oval',
                display: 'block',
                type: 'image',
                rect: ['92px', '28px','185px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'path12',
                display: 'block',
                type: 'image',
                rect: ['183px', '77px','80px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"path1.png",'0px','0px']
            },
            {
                id: 'path_2',
                display: 'block',
                type: 'image',
                rect: ['177px', '187px','373px','205px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"path_2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '240px']
            ],
            "${_Text2}": [
                ["style", "top", '498px'],
                ["style", "text-align", 'center'],
                ["style", "width", '373px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '220px'],
                ["style", "font-size", '94%']
            ],
            "${_path12}": [
                ["style", "top", '77px'],
                ["style", "left", '183px'],
                ["style", "display", 'block']
            ],
            "${_path_2}": [
                ["style", "top", '187px'],
                ["style", "left", '177px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '522px'],
                ["style", "width", '273px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '31px'],
                ["style", "font-weight", '700'],
                ["style", "left", '270px'],
                ["style", "font-size", '119%']
            ],
            "${_Text4}": [
                ["style", "top", '269px'],
                ["style", "height", '41px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '20px'],
                ["style", "width", '173px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '580px'],
                ["style", "overflow", 'hidden']
            ],
            "${_arrow}": [
                ["style", "top", '244px'],
                ["style", "left", '159px'],
                ["style", "display", 'block']
            ],
            "${__12}": [
                ["style", "left", '120px'],
                ["style", "top", '67px']
            ],
            "${_oval}": [
                ["style", "top", '28px'],
                ["style", "left", '92px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid42", tween: [ "style", "${_Text2}", "left", '220px', { fromValue: '220px'}], position: 2045, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid12", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text2}", "top", '498px', { fromValue: '498px'}], position: 2045, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text4}", "width", '173px', { fromValue: '173px'}], position: 1692, duration: 0 },
                { id: "eid14", tween: [ "style", "${_path12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_path12}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_oval}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_oval}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid5", tween: [ "style", "${_oval}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid29", tween: [ "style", "${_path_2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_path_2}", "display", 'block', { fromValue: 'none'}], position: 1555, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text2}", "width", '373px', { fromValue: '373px'}], position: 2045, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5120234");
