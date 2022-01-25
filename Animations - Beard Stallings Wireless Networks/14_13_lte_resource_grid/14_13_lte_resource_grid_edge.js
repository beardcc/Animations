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
                id: 'resource-coloumn-frame',
                display: 'none',
                type: 'image',
                rect: ['136px', '715px','620px','1892px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"resource-coloumn-frame.png",'0px','0px']
            },
            {
                id: 'comment-2',
                display: 'none',
                type: 'image',
                rect: ['1014px', '1260px','1296px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment-2.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['687px', '2956px','auto','auto','auto', 'auto'],
                text: "Figure  14.13   LTE  Resource Grid",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['523px', '2868px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'radioframe',
                display: 'none',
                type: 'image',
                rect: ['70px', '-363px','2280px','236px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"radioframe.png",'0px','0px']
            },
            {
                id: 'slottime-frame',
                display: 'none',
                type: 'image',
                rect: ['147px', '-6px','2280px','536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slottime-frame.png",'0px','0px']
            },
            {
                id: 'resource-arrow',
                display: 'none',
                type: 'image',
                rect: ['209px', '394px','936px','452px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"resource-arrow.png",'0px','0px','100%','100%']
            },
            {
                id: 'resource-grid2',
                display: 'none',
                type: 'image',
                rect: ['479px', '755px','644px','188px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"resource-grid.png",'0px','0px']
            },
            {
                id: 'resource-grid-naming',
                display: 'none',
                type: 'image',
                rect: ['954px', '587px','468px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"resource-grid-naming.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['1638px', '660px','auto','auto','auto', 'auto'],
                text: "Seven OFDM symbols in one<br>slot per subcarrier.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'resource-coloumn',
                display: 'none',
                type: 'image',
                rect: ['451px', '771px','220px','1792px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"resource-coloumn.png",'0px','0px']
            },
            {
                id: 'whole-block',
                display: 'none',
                type: 'image',
                rect: ['363px', '684px','1216px','2024px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"whole-block.png",'0px','0px']
            },
            {
                id: 'res-block-outer2',
                display: 'none',
                type: 'image',
                rect: ['412px', '1097px','796px','1140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"res-block-outer.png",'0px','0px']
            },
            {
                id: 'res-block-naming2',
                display: 'none',
                type: 'image',
                rect: ['994px', '1036px','576px','236px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"res-block-naming.png",'0px','0px']
            },
            {
                id: 'res-element',
                display: 'none',
                type: 'image',
                rect: ['876px', '1766px','184px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"res-element.png",'0px','0px']
            },
            {
                id: 'res-element-naming2',
                display: 'none',
                type: 'image',
                rect: ['1123px', '1464px','680px','232px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"res-element-naming.png",'0px','0px']
            },
            {
                id: 'arrow1',
                display: 'none',
                type: 'image',
                rect: ['911px', '1544px','424px','372px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow1.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'none',
                type: 'text',
                rect: ['1690', '912','auto','auto','auto', 'auto'],
                text: "One resource block is 12 <br>subcarriers each with 7 <br>symbols. This is 84 resource <br>elements.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'frequency',
                display: 'none',
                type: 'image',
                rect: ['1522px', '1886px','788px','828px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frequency.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_resource-coloumn}": [
                ["style", "top", '771px'],
                ["style", "left", '451px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '660px'],
                ["style", "left", '1638px'],
                ["style", "display", 'none']
            ],
            "${_resource-arrow}": [
                ["style", "top", '480px'],
                ["style", "display", 'none'],
                ["style", "height", '22px'],
                ["style", "left", '249px'],
                ["style", "width", '274px']
            ],
            "${_Text5}": [
                ["style", "display", 'none']
            ],
            "${_whole-block}": [
                ["style", "top", '684px'],
                ["style", "left", '363px'],
                ["style", "display", 'none']
            ],
            "${_comment-2}": [
                ["style", "top", '1318px'],
                ["style", "height", '217px'],
                ["style", "display", 'none'],
                ["style", "left", '671px'],
                ["style", "width", '620px']
            ],
            "${_res-element-naming2}": [
                ["style", "top", '1464px'],
                ["style", "left", '1123px'],
                ["style", "display", 'none']
            ],
            "${_res-element}": [
                ["style", "top", '1766px'],
                ["style", "left", '2534px'],
                ["style", "display", 'none']
            ],
            "${_frequency}": [
                ["style", "top", '1886px'],
                ["style", "left", '1522px'],
                ["style", "display", 'none']
            ],
            "${_resource-grid2}": [
                ["style", "top", '755px'],
                ["style", "left", '479px'],
                ["style", "display", 'none']
            ],
            "${_res-block-naming2}": [
                ["style", "top", '1036px'],
                ["style", "left", '994px'],
                ["style", "display", 'none']
            ],
            "${_slottime-frame}": [
                ["style", "display", 'none'],
                ["style", "top", '410px'],
                ["style", "left", '147px'],
                ["style", "height", '120px']
            ],
            "${_Text2}": [
                ["style", "top", '2868px'],
                ["style", "display", 'block'],
                ["style", "left", '523px'],
                ["style", "font-size", '375%']
            ],
            "${_Text}": [
                ["style", "top", '2956px'],
                ["style", "font-weight", '700'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '687px'],
                ["style", "font-size", '500%']
            ],
            "${_arrow1}": [
                ["style", "top", '1623px'],
                ["style", "display", 'none'],
                ["style", "height", '260px'],
                ["style", "left", '948px'],
                ["style", "width", '297px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2500px'],
                ["style", "height", '3100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_res-block-outer2}": [
                ["style", "top", '1097px'],
                ["style", "left", '2530px'],
                ["style", "display", 'none']
            ],
            "${_radioframe}": [
                ["style", "top", '-363px'],
                ["style", "left", '121px'],
                ["style", "display", 'none']
            ],
            "${_resource-grid-naming}": [
                ["style", "top", '587px'],
                ["style", "left", '954px'],
                ["style", "display", 'none']
            ],
            "${_resource-coloumn-frame}": [
                ["style", "top", '716px'],
                ["style", "left", '-650px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11060,
            autoPlay: true,
            timeline: [
                { id: "eid91", tween: [ "style", "${_arrow1}", "left", '948px', { fromValue: '948px'}], position: 11060, duration: 0 },
                { id: "eid93", tween: [ "style", "${_arrow1}", "height", '260px', { fromValue: '260px'}], position: 11060, duration: 0 },
                { id: "eid28", tween: [ "style", "${_resource-coloumn}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid57", tween: [ "style", "${_resource-coloumn}", "display", 'none', { fromValue: 'block'}], position: 6865, duration: 0 },
                { id: "eid20", tween: [ "style", "${_resource-arrow}", "width", '936px', { fromValue: '274px'}], position: 2500, duration: 1000 },
                { id: "eid13", tween: [ "style", "${_slottime-frame}", "top", '-6px', { fromValue: '410px'}], position: 1750, duration: 500 },
                { id: "eid94", tween: [ "style", "${_arrow1}", "top", '1623px', { fromValue: '1623px'}], position: 11060, duration: 0 },
                { id: "eid50", tween: [ "style", "${_comment-2}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_comment-2}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid73", tween: [ "style", "${_comment-2}", "display", 'none', { fromValue: 'none'}], position: 11060, duration: 0 },
                { id: "eid16", tween: [ "style", "${_resource-arrow}", "height", '452px', { fromValue: '22px'}], position: 2500, duration: 1000 },
                { id: "eid65", tween: [ "style", "${_res-element-naming2}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0 },
                { id: "eid83", tween: [ "style", "${_comment-2}", "left", '671px', { fromValue: '671px'}], position: 11060, duration: 0 },
                { id: "eid24", tween: [ "style", "${_resource-grid2}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid53", tween: [ "style", "${_resource-grid2}", "display", 'none', { fromValue: 'block'}], position: 6865, duration: 0 },
                { id: "eid60", tween: [ "style", "${_res-block-outer2}", "left", '412px', { fromValue: '2530px'}], position: 7000, duration: 1000 },
                { id: "eid67", tween: [ "style", "${_frequency}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid14", tween: [ "style", "${_resource-arrow}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid58", tween: [ "style", "${_res-block-outer2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_res-element}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid79", tween: [ "style", "${_comment-2}", "height", '217px', { fromValue: '217px'}], position: 11060, duration: 0 },
                { id: "eid61", tween: [ "style", "${_res-block-naming2}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid9", tween: [ "style", "${_slottime-frame}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid18", tween: [ "style", "${_resource-arrow}", "top", '394px', { fromValue: '480px'}], position: 2500, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_resource-arrow}", "left", '209px', { fromValue: '249px'}], position: 2500, duration: 1000 },
                { id: "eid52", tween: [ "style", "${_whole-block}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid49", tween: [ "style", "${_resource-coloumn-frame}", "left", '137px', { fromValue: '-650px'}], position: 5000, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_radioframe}", "top", '309px', { fromValue: '-363px'}], position: 500, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_resource-grid-naming}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_res-element}", "left", '876px', { fromValue: '2534px'}], position: 8500, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_radioframe}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_resource-coloumn-frame}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_resource-coloumn-frame}", "top", '716px', { fromValue: '716px'}], position: 5000, duration: 0 },
                { id: "eid66", tween: [ "style", "${_arrow1}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid81", tween: [ "style", "${_comment-2}", "width", '620px', { fromValue: '620px'}], position: 11060, duration: 0 },
                { id: "eid11", tween: [ "style", "${_slottime-frame}", "height", '536px', { fromValue: '120px'}], position: 1750, duration: 500 },
                { id: "eid95", tween: [ "style", "${_arrow1}", "width", '297px', { fromValue: '297px'}], position: 11060, duration: 0 },
                { id: "eid82", tween: [ "style", "${_comment-2}", "top", '1318px', { fromValue: '1318px'}], position: 11060, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2002058");
