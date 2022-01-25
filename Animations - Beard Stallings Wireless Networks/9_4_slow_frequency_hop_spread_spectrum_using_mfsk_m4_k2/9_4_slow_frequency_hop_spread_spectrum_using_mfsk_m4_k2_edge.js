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
                rect: ['99px', '497px','auto','auto','auto', 'auto'],
                text: "Figure 9.4 Slow Frequency Hop Spectrum Using MFSK (<i>M</i>=4, <i>k</i>=2)",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Figure_94',
                display: 'block',
                type: 'text',
                rect: ['189px', '466px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'axis',
                display: 'block',
                type: 'image',
                rect: ['20px', '107px','612px','295px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            },
            {
                id: 'pn-block',
                display: 'block',
                type: 'image',
                rect: ['157px', '-32px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'oval',
                display: 'block',
                type: 'image',
                rect: ['108px', '247px','145px','84px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'pn-block2',
                display: 'block',
                type: 'image',
                rect: ['108px', '-39px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'input-data',
                display: 'block',
                type: 'image',
                rect: ['40px', '54px','678px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"input-data.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['637px', '139px','90px','auto','auto', 'auto'],
                text: "Data to be transmitted",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'pn-seq',
                display: 'block',
                type: 'image',
                rect: ['108px', '50px','598px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-seq.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['232px', '31px','auto','auto','auto', 'auto'],
                text: "PN sequence to determine hopping pattern",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'comment-3',
                display: 'block',
                type: 'image',
                rect: ['228px', '361px','523px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment-3.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['342px', '338px','283px','auto','auto', 'auto'],
                text: "Use 4-MFSK to choose the specific frequencies. For more help, see Figure 7.4.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'oval2',
                display: 'block',
                type: 'image',
                rect: ['104px', '332px','145px','84px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'pn-block3',
                display: 'block',
                type: 'image',
                rect: ['207px', '143px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block4',
                display: 'block',
                type: 'image',
                rect: ['256px', '107px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['135px', '36px','auto','auto','auto', 'auto'],
                text: "Now the PN value equals 11, so use this band of frequencies.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['237px', '50px','29px','78px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'oval3',
                display: 'block',
                type: 'image',
                rect: ['205px', '99px','145px','84px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"oval.png",'0px','0px']
            },
            {
                id: 'comment1',
                display: 'block',
                type: 'image',
                rect: ['320px', '340px','259px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment1.png",'0px','0px']
            },
            {
                id: 'comment1Copy',
                display: 'block',
                type: 'image',
                rect: ['320px', '340px','259px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment1.png",'0px','0px']
            },
            {
                id: 'pn-block5',
                display: 'block',
                type: 'image',
                rect: ['305px', '206px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block6',
                display: 'block',
                type: 'image',
                rect: ['355px', '231px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block7',
                display: 'block',
                type: 'image',
                rect: ['405px', '169px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block8',
                display: 'block',
                type: 'image',
                rect: ['455px', '193px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block9',
                display: 'block',
                type: 'image',
                rect: ['505px', '293px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            },
            {
                id: 'pn-block10',
                display: 'block',
                type: 'image',
                rect: ['554px', '256px','90px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pn-block.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_pn-block7}": [
                ["style", "top", '-39px'],
                ["style", "left", '405px'],
                ["style", "display", 'block']
            ],
            "${_input-data}": [
                ["style", "top", '-85px'],
                ["style", "left", '40px'],
                ["style", "display", 'block']
            ],
            "${_pn-seq}": [
                ["style", "top", '-62px'],
                ["style", "left", '108px'],
                ["style", "display", 'block']
            ],
            "${_arrow}": [
                ["style", "top", '50px'],
                ["style", "display", 'block'],
                ["style", "left", '237px'],
                ["style", "height", '78px']
            ],
            "${_pn-block3}": [
                ["style", "top", '-39px'],
                ["style", "left", '207px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '36px'],
                ["style", "left", '135px'],
                ["style", "display", 'block']
            ],
            "${_comment1Copy}": [
                ["style", "top", '340px'],
                ["style", "left", '320px'],
                ["style", "display", 'block']
            ],
            "${_pn-block2}": [
                ["style", "top", '-39px'],
                ["style", "left", '108px'],
                ["style", "display", 'block']
            ],
            "${_comment1}": [
                ["style", "top", '340px'],
                ["style", "left", '320px'],
                ["style", "display", 'block']
            ],
            "${_pn-block8}": [
                ["style", "top", '-39px'],
                ["style", "left", '455px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '31px'],
                ["style", "left", '232px'],
                ["style", "display", 'block']
            ],
            "${_pn-block6}": [
                ["style", "top", '-39px'],
                ["style", "left", '355px'],
                ["style", "display", 'block']
            ],
            "${_oval}": [
                ["style", "top", '247px'],
                ["style", "left", '108px'],
                ["style", "display", 'block']
            ],
            "${_pn-block9}": [
                ["style", "top", '-39px'],
                ["style", "left", '505px'],
                ["style", "display", 'block']
            ],
            "${_comment-3}": [
                ["style", "top", '361px'],
                ["style", "left", '228px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "top", '139px'],
                ["style", "left", '637px'],
                ["style", "width", '90px']
            ],
            "${_pn-block}": [
                ["style", "display", 'block'],
                ["style", "left", '157px'],
                ["style", "top", '-32px']
            ],
            "${_Figure_94}": [
                ["style", "display", 'block'],
                ["style", "top", '466px'],
                ["style", "left", '189px'],
                ["style", "font-size", '94%']
            ],
            "${_axis}": [
                ["style", "top", '107px'],
                ["style", "left", '20px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '338px'],
                ["style", "left", '342px'],
                ["style", "width", '283px']
            ],
            "${_pn-block4}": [
                ["style", "top", '-39px'],
                ["style", "left", '256px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '497px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '99px'],
                ["style", "font-size", '119%']
            ],
            "${_oval3}": [
                ["style", "top", '100px'],
                ["style", "left", '202px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '520px'],
                ["style", "width", '750px']
            ],
            "${_pn-block5}": [
                ["style", "top", '-39px'],
                ["style", "left", '305px'],
                ["style", "display", 'block']
            ],
            "${_oval2}": [
                ["style", "top", '332px'],
                ["style", "left", '104px'],
                ["style", "display", 'block']
            ],
            "${_pn-block10}": [
                ["style", "top", '-39px'],
                ["style", "left", '554px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13116,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_input-data}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_input-data}", "display", 'block', { fromValue: 'none'}], position: 355, duration: 0 },
                { id: "eid87", tween: [ "style", "${_pn-block7}", "top", '169px', { fromValue: '-39px'}], position: 10435, duration: 800 },
                { id: "eid71", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 9142, duration: 0 },
                { id: "eid74", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 9341, duration: 0 },
                { id: "eid22", tween: [ "style", "${_pn-seq}", "top", '50px', { fromValue: '-62px'}], position: 1585, duration: 700 },
                { id: "eid99", tween: [ "style", "${_pn-block10}", "top", '256px', { fromValue: '-39px'}], position: 12150, duration: 800 },
                { id: "eid105", tween: [ "style", "${_comment1Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_comment1Copy}", "display", 'block', { fromValue: 'none'}], position: 6694, duration: 0 },
                { id: "eid107", tween: [ "style", "${_comment1Copy}", "display", 'none', { fromValue: 'block'}], position: 6898, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2570, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_input-data}", "top", '54px', { fromValue: '-85px'}], position: 355, duration: 785 },
                { id: "eid61", tween: [ "style", "${_pn-block3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_pn-block3}", "display", 'block', { fromValue: 'none'}], position: 7168, duration: 0 },
                { id: "eid30", tween: [ "style", "${_pn-block}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_pn-block}", "display", 'block', { fromValue: 'none'}], position: 4800, duration: 0 },
                { id: "eid91", tween: [ "style", "${_pn-block8}", "top", '193px', { fromValue: '-39px'}], position: 11000, duration: 800 },
                { id: "eid68", tween: [ "style", "${_pn-block4}", "top", '107px', { fromValue: '-39px'}], position: 8170, duration: 700 },
                { id: "eid45", tween: [ "style", "${_oval2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_oval2}", "display", 'block', { fromValue: 'none'}], position: 6449, duration: 0 },
                { id: "eid51", tween: [ "style", "${_oval2}", "display", 'none', { fromValue: 'block'}], position: 6898, duration: 0 },
                { id: "eid64", tween: [ "style", "${_pn-block3}", "top", '143px', { fromValue: '-39px'}], position: 7168, duration: 800 },
                { id: "eid25", tween: [ "style", "${_pn-block2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_pn-block2}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6290, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6449, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 9142, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 9341, duration: 0 },
                { id: "eid35", tween: [ "style", "${_oval}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_oval}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid47", tween: [ "style", "${_oval}", "display", 'none', { fromValue: 'block'}], position: 6449, duration: 0 },
                { id: "eid65", tween: [ "style", "${_pn-block4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_pn-block4}", "display", 'block', { fromValue: 'none'}], position: 8170, duration: 0 },
                { id: "eid76", tween: [ "style", "${_pn-block5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_pn-block5}", "display", 'block', { fromValue: 'none'}], position: 9341, duration: 0 },
                { id: "eid52", tween: [ "style", "${_oval3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_oval3}", "display", 'block', { fromValue: 'none'}], position: 6898, duration: 0 },
                { id: "eid75", tween: [ "style", "${_oval3}", "display", 'none', { fromValue: 'block'}], position: 9341, duration: 0 },
                { id: "eid79", tween: [ "style", "${_pn-block5}", "top", '206px', { fromValue: '-39px'}], position: 9341, duration: 800 },
                { id: "eid34", tween: [ "style", "${_pn-block}", "top", '255px', { fromValue: '-32px'}], position: 4800, duration: 1200 },
                { id: "eid80", tween: [ "style", "${_pn-block6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_pn-block6}", "display", 'block', { fromValue: 'none'}], position: 9900, duration: 0 },
                { id: "eid1", tween: [ "style", "${_axis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_axis}", "display", 'block', { fromValue: 'none'}], position: 170, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1435, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1585, duration: 0 },
                { id: "eid95", tween: [ "style", "${_pn-block9}", "top", '293px', { fromValue: '-39px'}], position: 11569, duration: 800 },
                { id: "eid83", tween: [ "style", "${_pn-block6}", "top", '231px', { fromValue: '-39px'}], position: 9900, duration: 800 },
                { id: "eid102", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_comment1}", "display", 'block', { fromValue: 'none'}], position: 6694, duration: 0 },
                { id: "eid104", tween: [ "style", "${_comment1}", "display", 'none', { fromValue: 'block'}], position: 6898, duration: 0 },
                { id: "eid84", tween: [ "style", "${_pn-block7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_pn-block7}", "display", 'block', { fromValue: 'none'}], position: 10435, duration: 0 },
                { id: "eid29", tween: [ "style", "${_pn-block2}", "top", '280px', { fromValue: '-39px'}], position: 3250, duration: 1300 },
                { id: "eid92", tween: [ "style", "${_pn-block9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_pn-block9}", "display", 'block', { fromValue: 'none'}], position: 11569, duration: 0 },
                { id: "eid96", tween: [ "style", "${_pn-block10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_pn-block10}", "display", 'block', { fromValue: 'none'}], position: 12150, duration: 0 },
                { id: "eid88", tween: [ "style", "${_pn-block8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_pn-block8}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_comment-3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_comment-3}", "display", 'block', { fromValue: 'none'}], position: 3037, duration: 0 },
                { id: "eid43", tween: [ "style", "${_comment-3}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid15", tween: [ "style", "${_pn-seq}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_pn-seq}", "display", 'block', { fromValue: 'none'}], position: 1585, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Figure_94}", "display", 'none', { fromValue: 'block'}], position: 13116, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-351292709");
