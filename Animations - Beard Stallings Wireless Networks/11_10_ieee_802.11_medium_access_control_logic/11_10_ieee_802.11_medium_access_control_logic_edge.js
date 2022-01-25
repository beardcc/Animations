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
                id: 'arrow-42',
                display: 'block',
                type: 'image',
                rect: ['425px', '288px','62px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-4.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['445px', '420px','auto','auto','auto', 'auto'],
                text: "No",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-down-common11',
                display: 'block',
                type: 'image',
                rect: ['372px', '529px','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'tx-frme3',
                display: 'block',
                type: 'image',
                rect: ['321px', '520px','131px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tx-frme.png",'0px','0px']
            },
            {
                id: 'arrow-5',
                display: 'block',
                type: 'image',
                rect: ['104px', '66px','239px','534px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-5.png",'0px','0px']
            },
            {
                id: 'arrow-down-common9',
                display: 'block',
                type: 'image',
                rect: ['372px', '457px','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['398px', '470px','auto','auto','auto', 'auto'],
                text: "Yes<br>",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'exp-backoff',
                display: 'block',
                type: 'image',
                rect: ['322px', '458px','131px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"exp-backoff.png",'0px','0px']
            },
            {
                id: 'arrow-left',
                display: 'block',
                type: 'image',
                rect: ['100px', '360px','62px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-left.png",'0px','0px']
            },
            {
                id: 'arrow-1',
                display: 'block',
                type: 'image',
                rect: ['255px', '149px','149px','140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['263px', '140px','auto','auto','auto', 'auto'],
                text: "No",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'side-block-1',
                display: 'block',
                type: 'image',
                rect: ['321px', '152px','131px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"side-block-1.png",'0px','0px']
            },
            {
                id: 'arrow-2',
                display: 'block',
                type: 'image',
                rect: ['251px', '288px','92px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['263px', '283px','auto','auto','auto', 'auto'],
                text: "No",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-down-common6',
                display: 'block',
                type: 'image',
                rect: ['372px', '314px','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'wait-IFS2',
                display: 'block',
                type: 'image',
                rect: ['324px', '316px','130px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wait-IFS.png",'0px','0px']
            },
            {
                id: 'arrow-down-common7',
                display: 'block',
                type: 'image',
                rect: ['372px', '367px','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'still-idle2',
                display: 'block',
                type: 'image',
                rect: ['321px', '357px','131px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"still-idle.png",'0px','0px']
            },
            {
                id: 'block-1',
                display: 'block',
                type: 'image',
                rect: ['144px', '47px','127px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"block-1.png",'0px','0px']
            },
            {
                id: 'arrow-down-common',
                display: 'block',
                type: 'image',
                rect: ['192px', '88px','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'arrow-down-common2',
                display: 'block',
                type: 'image',
                rect: ['192px', '224','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['217px', '194px','auto','auto','auto', 'auto'],
                text: "Yes",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'medium-idle',
                display: 'block',
                type: 'image',
                rect: ['143px', '93px','130px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"medium-idle.png",'0px','0px']
            },
            {
                id: 'wait-IFS',
                display: 'block',
                type: 'image',
                rect: ['144px', '180px','130px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wait-IFS.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['7px', '245px','127px','auto','auto', 'auto'],
                text: "No exponential backoff if medium is idle.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['400px', '75px','164px','38px','auto', 'auto'],
                text: "If not idle, follow the full procedure.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['66px', '651px','467px','auto','auto', 'auto'],
                text: "Figure 11.10 IEEE 802.11 Medium Access Control Logic",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['133px', '641px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'arrow-down-common4',
                display: 'block',
                type: 'image',
                rect: ['192px', '232px','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'still-idle',
                display: 'block',
                type: 'image',
                rect: ['141px', '222px','131px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"still-idle.png",'0px','0px']
            },
            {
                id: 'arrow-down-common5',
                display: 'block',
                type: 'image',
                rect: ['192px', '323px','31px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-down-common.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['217px', '350px','auto','auto','auto', 'auto'],
                text: "Yes",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'tx-frme',
                display: 'block',
                type: 'image',
                rect: ['141px', '313px','131px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tx-frme.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_still-idle2}": [
                ["style", "top", '357px'],
                ["style", "left", '321px'],
                ["style", "display", 'block']
            ],
            "${_arrow-down-common5}": [
                ["style", "top", '323px'],
                ["style", "left", '192px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '350px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '217px'],
                ["style", "display", 'block']
            ],
            "${_wait-IFS}": [
                ["style", "display", 'block'],
                ["style", "left", '144px'],
                ["style", "top", '180px']
            ],
            "${_Text4}": [
                ["style", "top", '283px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '263px'],
                ["style", "display", 'block']
            ],
            "${_medium-idle}": [
                ["style", "top", '93px'],
                ["style", "left", '143px'],
                ["style", "display", 'block']
            ],
            "${_exp-backoff}": [
                ["style", "top", '458px'],
                ["style", "left", '322px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "top", '651px'],
                ["style", "font-size", '119%'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '66px'],
                ["style", "width", '467px']
            ],
            "${_still-idle}": [
                ["style", "top", '222px'],
                ["style", "left", '141px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "top", '75px'],
                ["style", "height", '38px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '400px'],
                ["style", "width", '164px']
            ],
            "${_arrow-down-common}": [
                ["style", "top", '88px'],
                ["style", "left", '192px'],
                ["style", "display", 'block']
            ],
            "${_arrow-left}": [
                ["style", "display", 'block'],
                ["style", "left", '100px'],
                ["style", "top", '360px']
            ],
            "${_Text11}": [
                ["style", "top", '627px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '109px'],
                ["style", "font-size", '94%']
            ],
            "${_Text3}": [
                ["style", "top", '140px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '263px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '470px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '398px'],
                ["style", "display", 'block']
            ],
            "${_arrow-down-common7}": [
                ["style", "top", '367px'],
                ["style", "left", '372px'],
                ["style", "display", 'block']
            ],
            "${_wait-IFS2}": [
                ["style", "top", '316px'],
                ["style", "left", '324px'],
                ["style", "display", 'block']
            ],
            "${_arrow-2}": [
                ["style", "top", '288px'],
                ["style", "left", '251px'],
                ["style", "display", 'block']
            ],
            "${_tx-frme}": [
                ["style", "top", '313px'],
                ["style", "left", '141px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '245px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '7px'],
                ["style", "width", '127px']
            ],
            "${_arrow-down-common11}": [
                ["style", "top", '529px'],
                ["style", "left", '372px'],
                ["style", "display", 'block']
            ],
            "${_arrow-5}": [
                ["style", "top", '66px'],
                ["style", "left", '104px'],
                ["style", "display", 'block']
            ],
            "${_arrow-42}": [
                ["style", "top", '288px'],
                ["style", "left", '425px'],
                ["style", "display", 'block']
            ],
            "${_arrow-down-common2}": [
                ["style", "display", 'block'],
                ["style", "left", '192px'],
                ["style", "top", '178px']
            ],
            "${_arrow-1}": [
                ["style", "top", '149px'],
                ["style", "left", '255px'],
                ["style", "display", 'block']
            ],
            "${_block-1}": [
                ["style", "top", '47px'],
                ["style", "left", '144px'],
                ["style", "display", 'block']
            ],
            "${_arrow-down-common4}": [
                ["style", "top", '232px'],
                ["style", "left", '192px'],
                ["style", "display", 'block']
            ],
            "${_side-block-1}": [
                ["style", "top", '152px'],
                ["style", "left", '321px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '194px'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '217px'],
                ["style", "font-size", '94%']
            ],
            "${_tx-frme3}": [
                ["style", "top", '520px'],
                ["style", "left", '321px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '680px'],
                ["style", "width", '600px']
            ],
            "${_Text6}": [
                ["style", "top", '420px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '445px'],
                ["style", "display", 'block']
            ],
            "${_arrow-down-common6}": [
                ["style", "top", '314px'],
                ["style", "left", '372px'],
                ["style", "display", 'block']
            ],
            "${_arrow-down-common9}": [
                ["style", "top", '457px'],
                ["style", "left", '372px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14566,
            autoPlay: true,
            timeline: [
                { id: "eid134", tween: [ "style", "${_Text11}", "left", '109px', { fromValue: '109px'}], position: 14500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_arrow-1}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid96", tween: [ "style", "${_arrow-42}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_arrow-42}", "display", 'block', { fromValue: 'none'}], position: 12304, duration: 0 },
                { id: "eid64", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_arrow-2}", "display", 'block', { fromValue: 'none'}], position: 7641, duration: 0 },
                { id: "eid31", tween: [ "style", "${_wait-IFS}", "top", '216px', { fromValue: '180px'}], position: 2250, duration: 1000 },
                { id: "eid100", tween: [ "style", "${_arrow-down-common11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_arrow-down-common11}", "display", 'block', { fromValue: 'none'}], position: 12549, duration: 0 },
                { id: "eid85", tween: [ "style", "${_arrow-down-common9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_arrow-down-common9}", "display", 'block', { fromValue: 'none'}], position: 10838, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 7641, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 10838, duration: 0 },
                { id: "eid59", tween: [ "style", "${_side-block-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_side-block-1}", "display", 'block', { fromValue: 'none'}], position: 6460, duration: 0 },
                { id: "eid113", tween: [ "style", "${_wait-IFS}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_wait-IFS}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid26", tween: [ "style", "${_arrow-down-common2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_arrow-down-common2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_medium-idle}", "top", '128px', { fromValue: '93px'}], position: 750, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_medium-idle}", "top", '129px', { fromValue: '128px'}], position: 1750, duration: 1500 },
                { id: "eid43", tween: [ "style", "${_arrow-down-common5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_arrow-down-common5}", "display", 'block', { fromValue: 'none'}], position: 4823, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 4823, duration: 0 },
                { id: "eid68", tween: [ "style", "${_arrow-down-common6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_arrow-down-common6}", "display", 'block', { fromValue: 'none'}], position: 7870, duration: 0 },
                { id: "eid132", tween: [ "style", "${_Text11}", "top", '627px', { fromValue: '627px'}], position: 14500, duration: 0 },
                { id: "eid106", tween: [ "style", "${_tx-frme3}", "top", '555px', { fromValue: '520px'}], position: 12789, duration: 1000 },
                { id: "eid107", tween: [ "style", "${_arrow-5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_arrow-5}", "display", 'block', { fromValue: 'none'}], position: 14103, duration: 0 },
                { id: "eid109", tween: [ "style", "${_arrow-left}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_arrow-left}", "display", 'block', { fromValue: 'none'}], position: 14323, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 12304, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 6182, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 6182, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 14103, duration: 0 },
                { id: "eid77", tween: [ "style", "${_still-idle2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_still-idle2}", "display", 'block', { fromValue: 'none'}], position: 9603, duration: 0 },
                { id: "eid70", tween: [ "style", "${_wait-IFS2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_wait-IFS2}", "display", 'block', { fromValue: 'none'}], position: 8147, duration: 0 },
                { id: "eid3", tween: [ "style", "${_arrow-down-common}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrow-down-common}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid63", tween: [ "style", "${_side-block-1}", "top", '276px', { fromValue: '152px'}], position: 6460, duration: 1000 },
                { id: "eid93", tween: [ "style", "${_exp-backoff}", "top", '492px', { fromValue: '458px'}], position: 11082, duration: 1000 },
                { id: "eid52", tween: [ "style", "${_tx-frme}", "top", '348px', { fromValue: '313px'}], position: 5045, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid1", tween: [ "style", "${_block-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_block-1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid81", tween: [ "style", "${_still-idle2}", "top", '393px', { fromValue: '357px'}], position: 9603, duration: 1000 },
                { id: "eid84", tween: [ "style", "${_still-idle2}", "top", '393px', { fromValue: '393px'}], position: 10603, duration: 0 },
                { id: "eid89", tween: [ "style", "${_exp-backoff}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_exp-backoff}", "display", 'block', { fromValue: 'none'}], position: 11082, duration: 0 },
                { id: "eid42", tween: [ "style", "${_still-idle}", "top", '258px', { fromValue: '222px'}], position: 3630, duration: 1000 },
                { id: "eid118", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 14566, duration: 0 },
                { id: "eid35", tween: [ "style", "${_arrow-down-common4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_arrow-down-common4}", "display", 'block', { fromValue: 'none'}], position: 3434, duration: 0 },
                { id: "eid74", tween: [ "style", "${_wait-IFS2}", "top", '351px', { fromValue: '316px'}], position: 8147, duration: 1000 },
                { id: "eid13", tween: [ "style", "${_medium-idle}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_medium-idle}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid37", tween: [ "style", "${_still-idle}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_still-idle}", "display", 'block', { fromValue: 'none'}], position: 3630, duration: 0 },
                { id: "eid47", tween: [ "style", "${_tx-frme}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_tx-frme}", "display", 'block', { fromValue: 'none'}], position: 5045, duration: 0 },
                { id: "eid102", tween: [ "style", "${_tx-frme3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_tx-frme3}", "display", 'block', { fromValue: 'none'}], position: 12789, duration: 0 },
                { id: "eid75", tween: [ "style", "${_arrow-down-common7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_arrow-down-common7}", "display", 'block', { fromValue: 'none'}], position: 9357, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-454442680");
