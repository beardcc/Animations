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
                id: '_1',
                type: 'image',
                rect: ['94px', '30px','612px','455px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['282px', '454px','197px','24px','auto', 'auto'],
                text: "Another alternate route",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['235px', '566px','auto','auto','auto', 'auto'],
                text: "Figure 3.3 Simple Switching Network",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['228px', '564px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the  Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Arrow1',
                display: 'block',
                type: 'image',
                rect: ['163px', '378px','436px','78px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Arrow1.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['302px', '470px','auto','auto','auto', 'auto'],
                text: "A intends to send to F.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'r456_12',
                display: 'block',
                type: 'image',
                rect: ['146px', '315px','115px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_1.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['302px', '466px','183px','24px','auto', 'auto'],
                text: "First send to Node 4.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'r456_2',
                display: 'block',
                type: 'image',
                rect: ['250px', '326px','115px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_2.png",'0px','0px']
            },
            {
                id: 'r456_3',
                display: 'block',
                type: 'image',
                rect: ['391px', '334px','115px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_3.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['249px', '466px','297px','42px','auto', 'auto'],
                text: "Node 4 chooses to send to  Node 7. Node 7 only switches internal to the network.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'r456_4',
                display: 'block',
                type: 'image',
                rect: ['499px', '345px','101px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_4.png",'0px','0px']
            },
            {
                id: 'r456_13',
                display: 'block',
                type: 'image',
                rect: ['132px', '295px','115px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_1.png",'0px','0px']
            },
            {
                id: 'r456_13Copy',
                display: 'block',
                type: 'image',
                rect: ['261px', '230px','115px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_1.png",'0px','0px']
            },
            {
                id: 'r456_22',
                display: 'block',
                type: 'image',
                rect: ['392px', '241px','115px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_2.png",'0px','0px']
            },
            {
                id: 'r456_42',
                display: 'block',
                type: 'image',
                rect: ['517px', '326px','89px','96px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_4.png",'0px','0px']
            },
            {
                id: 'r456_14',
                display: 'block',
                type: 'image',
                rect: ['135px', '290px','115px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_1.png",'0px','0px']
            },
            {
                id: 'r412356_3',
                display: 'block',
                type: 'image',
                rect: ['282px', '120px','101px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r412356_3.png",'0px','0px']
            },
            {
                id: 'r412356_4',
                display: 'block',
                type: 'image',
                rect: ['420px', '140px','101px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r412356_4.png",'0px','0px']
            },
            {
                id: 'r412356_5',
                display: 'block',
                type: 'image',
                rect: ['408px', '181px','101px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r412356_5.png",'0px','0px']
            },
            {
                id: 'r412356_6',
                display: 'block',
                type: 'image',
                rect: ['389px', '241px','101px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r412356_6.png",'0px','0px']
            },
            {
                id: 'r456_43',
                display: 'block',
                type: 'image',
                rect: ['497px', '345px','101px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r456_4.png",'0px','0px']
            },
            {
                id: 'r412356_2',
                display: 'block',
                type: 'image',
                rect: ['199px', '211px','101px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r412356_2.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['302px', '450px','204px','24px','auto', 'auto'],
                text: "Alternate route",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['298px', '466px','211px','37px','auto', 'auto'],
                text: "Node 6 sends to the destination.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8Copy',
                display: 'block',
                type: 'text',
                rect: ['298px', '466px','211px','37px','auto', 'auto'],
                text: "Node 6 sends to the destination.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Arrow1}": [
                ["style", "top", '378px'],
                ["style", "display", 'block'],
                ["style", "height", '78px'],
                ["style", "left", '163px'],
                ["style", "width", '436px']
            ],
            "${_r456_4}": [
                ["style", "top", '345px'],
                ["style", "left", '496px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '466px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'block'],
                ["style", "height", '58px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '249px'],
                ["style", "width", '286px']
            ],
            "${_r456_43}": [
                ["style", "top", '345px'],
                ["style", "left", '497px'],
                ["style", "display", 'block']
            ],
            "${_r412356_3}": [
                ["style", "display", 'block'],
                ["style", "left", '282px'],
                ["style", "top", '120px']
            ],
            "${_r456_42}": [
                ["style", "top", '326px'],
                ["style", "height", '96px'],
                ["style", "display", 'block'],
                ["style", "left", '517px'],
                ["style", "width", '89px']
            ],
            "${_Text8Copy}": [
                ["style", "top", '466px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '298px'],
                ["style", "width", '211px']
            ],
            "${_Text2}": [
                ["style", "top", '535px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '175px'],
                ["style", "width", '437px']
            ],
            "${_r456_13}": [
                ["style", "top", '295px'],
                ["style", "left", '132px'],
                ["style", "display", 'block']
            ],
            "${_r412356_2}": [
                ["style", "top", '211px'],
                ["style", "left", '199px'],
                ["style", "display", 'block']
            ],
            "${_r412356_5}": [
                ["style", "top", '181px'],
                ["style", "left", '408px'],
                ["style", "display", 'block']
            ],
            "${_r456_2}": [
                ["style", "top", '326px'],
                ["style", "left", '250px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '466px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '298px'],
                ["style", "width", '211px']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '302px'],
                ["style", "width", '157px']
            ],
            "${_r456_13Copy}": [
                ["style", "top", '230px'],
                ["style", "left", '261px'],
                ["style", "display", 'block']
            ],
            "${_r412356_6}": [
                ["style", "top", '241px'],
                ["style", "left", '389px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "top", '478px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block']
            ],
            "${_r456_14}": [
                ["style", "top", '290px'],
                ["style", "left", '135px'],
                ["style", "display", 'block']
            ],
            "${_r456_3}": [
                ["style", "top", '334px'],
                ["style", "left", '391px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '466px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '302px'],
                ["style", "display", 'block']
            ],
            "${__1}": [
                ["style", "left", '94px'],
                ["style", "top", '30px']
            ],
            "${_Text}": [
                ["style", "top", '566px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '317px'],
                ["style", "height", '24px'],
                ["style", "font-weight", '700'],
                ["style", "left", '235px'],
                ["style", "font-size", '119%']
            ],
            "${_r456_22}": [
                ["style", "top", '241px'],
                ["style", "left", '392px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "top", '479px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '302px'],
                ["style", "display", 'block']
            ],
            "${_r456_12}": [
                ["style", "top", '315px'],
                ["style", "left", '146px'],
                ["style", "display", 'block']
            ],
            "${_r412356_4}": [
                ["style", "top", '140px'],
                ["style", "left", '420px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8100,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "style", "${_r456_2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_r456_2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid51", tween: [ "style", "${_r456_2}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Arrow1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Arrow1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Arrow1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 8100, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Text8Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_Text8Copy}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Text8Copy}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_r456_42}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_r456_42}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid68", tween: [ "style", "${_r456_42}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text7}", "width", '286px', { fromValue: '286px'}], position: 2500, duration: 0 },
                { id: "eid82", tween: [ "style", "${_r456_43}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_r456_43}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid93", tween: [ "style", "${_r456_43}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Text2}", "top", '535px', { fromValue: '535px'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_r412356_6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_r412356_6}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid92", tween: [ "style", "${_r412356_6}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_r456_3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_r456_3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid52", tween: [ "style", "${_r456_3}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Text2}", "left", '175px', { fromValue: '175px'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_r456_12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_r456_12}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid50", tween: [ "style", "${_r456_12}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid76", tween: [ "style", "${_r412356_4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_r412356_4}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid91", tween: [ "style", "${_r412356_4}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Text9}", "top", '479px', { fromValue: '479px'}], position: 5615, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid103", tween: [ "style", "${_Text5}", "width", '157px', { fromValue: '157px'}], position: 590, duration: 0 },
                { id: "eid78", tween: [ "style", "${_r412356_5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_r412356_5}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid90", tween: [ "style", "${_r412356_5}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid74", tween: [ "style", "${_r412356_3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_r412356_3}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid89", tween: [ "style", "${_r412356_3}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_r412356_2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_r412356_2}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid88", tween: [ "style", "${_r412356_2}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid69", tween: [ "style", "${_r456_14}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_r456_14}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid87", tween: [ "style", "${_r456_14}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Text10}", "top", '478px', { fromValue: '478px'}], position: 7210, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Text7}", "height", '58px', { fromValue: '58px'}], position: 2500, duration: 0 },
                { id: "eid54", tween: [ "style", "${_r456_13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_r456_13}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid65", tween: [ "style", "${_r456_13}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_r456_22}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_r456_22}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_r456_22}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid56", tween: [ "style", "${_r456_13Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_r456_13Copy}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid66", tween: [ "style", "${_r456_13Copy}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_r456_4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_r456_4}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_r456_4}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-74562861");
