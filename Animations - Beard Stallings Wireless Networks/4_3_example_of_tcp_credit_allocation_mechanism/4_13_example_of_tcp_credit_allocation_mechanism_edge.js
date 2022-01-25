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
                id: 'part-a1',
                display: 'block',
                type: 'image',
                rect: ['454px', '59px','34.1%','16.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-a1.png",'0%','0%','256px','108px']
            },
            {
                id: 'part-b1',
                display: 'block',
                type: 'image',
                rect: ['33px', '63px','34.1%','14.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-b1.png",'0%','0%','256px','97px']
            },
            {
                id: 'part-b2',
                display: 'block',
                type: 'image',
                rect: ['34px', '159px','34.1%','20.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-b2.png",'0%','0%','256px','136px']
            },
            {
                id: 'part-b3',
                display: 'block',
                type: 'image',
                rect: ['34px', '309px','34.1%','8.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-b3.png",'0%','0%','256px','57px']
            },
            {
                id: 'SN1',
                display: 'block',
                type: 'image',
                rect: ['293px', '116px','20.8%','13.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SN1.png",'0%','0%','156px','88px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['310px', '81px','139px','auto','auto', 'auto'],
                text: "A sends 3 segments of 200 octets each.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'AN1',
                display: 'block',
                type: 'image',
                rect: ['294px', '198px','153px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AN1.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['474px', '295px','225px','auto','auto', 'auto'],
                text: "B will not receive 600 more octets beyond original window, but only 200, now up to 2600.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'SN2',
                display: 'block',
                type: 'image',
                rect: ['294px', '229px','20.4%','16.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SN2.png",'0%','0%','153px','107px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['462px', '300px','300px','auto','auto', 'auto'],
                text: "As A keeps on sending, ACK from B travels to A.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['135px', '621px','auto','auto','auto', 'auto'],
                text: "Figure 4.13 Example of TCP Credit Allocation Mechanism",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Figure_413',
                display: 'block',
                type: 'text',
                rect: ['203px', '588','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['47px', '373px','auto','auto','auto', 'auto'],
                text: "A can now send upto 2600.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'part-b4',
                display: 'block',
                type: 'image',
                rect: ['31px', '382px','258px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-b4.png",'0px','0px']
            },
            {
                id: 'SN3',
                display: 'block',
                type: 'image',
                rect: ['289px', '336px','21.7%','13.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SN3.png",'0%','0%','163px','87px']
            },
            {
                id: 'part-a4',
                display: 'block',
                type: 'image',
                rect: ['425px', '413px','39%','11.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-a4.png",'0%','0%','100%','auto']
            },
            {
                id: 'part-b5',
                display: 'block',
                type: 'image',
                rect: ['19px', '444px','38.9%','11.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-b5.png",'0%','0%','292px','73px']
            },
            {
                id: 'AN2',
                display: 'block',
                type: 'image',
                rect: ['295px', '419px','158px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AN2.png",'0px','0px']
            },
            {
                id: 'part-a3',
                display: 'block',
                type: 'image',
                rect: ['451px', '325px','34.4%','7.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part-a3.png",'0%','0%','258px','47px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['463px', '382px','258px','auto','auto', 'auto'],
                text: "B keeps receiving but does not send an ACK for each received segment.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'partA2',
                display: 'block',
                type: 'image',
                rect: ['426px', '177px','41.1%','17.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"partA2.png",'0%','0%','308px','115px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_part-b1}": [
                ["style", "display", 'block'],
                ["style", "top", '63px'],
                ["style", "left", '33px'],
                ["style", "height", '0%']
            ],
            "${_AN2}": [
                ["style", "top", '419px'],
                ["style", "left", '295px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '373px'],
                ["style", "left", '47px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "top", '81px'],
                ["style", "left", '310px'],
                ["style", "width", '139px']
            ],
            "${_part-b5}": [
                ["style", "display", 'block'],
                ["style", "top", '444px'],
                ["style", "left", '19px'],
                ["style", "height", '0%']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "top", '295px'],
                ["style", "left", '474px'],
                ["style", "width", '225px']
            ],
            "${_Figure_413}": [
                ["style", "height", '18px'],
                ["style", "display", 'block'],
                ["style", "left", '203px'],
                ["style", "font-size", '94%']
            ],
            "${_SN2}": [
                ["style", "display", 'block'],
                ["style", "top", '229px'],
                ["style", "left", '294px'],
                ["style", "width", '0%']
            ],
            "${_AN1}": [
                ["style", "top", '198px'],
                ["style", "left", '294px'],
                ["style", "display", 'block']
            ],
            "${_SN1}": [
                ["style", "display", 'block'],
                ["style", "top", '116px'],
                ["style", "left", '293px'],
                ["style", "width", '0%']
            ],
            "${_partA2}": [
                ["style", "display", 'block'],
                ["style", "top", '177px'],
                ["style", "left", '426px'],
                ["style", "height", '0%']
            ],
            "${_part-a3}": [
                ["style", "display", 'block'],
                ["style", "top", '325px'],
                ["style", "left", '451px'],
                ["style", "height", '0%']
            ],
            "${_part-a4}": [
                ["style", "top", '413px'],
                ["style", "display", 'block'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '425px'],
                ["style", "height", '0%']
            ],
            "${_part-b2}": [
                ["style", "display", 'block'],
                ["style", "top", '159px'],
                ["style", "left", '34px'],
                ["style", "height", '0%']
            ],
            "${_Text6}": [
                ["style", "top", '307px'],
                ["style", "display", 'block'],
                ["style", "left", '480px'],
                ["style", "width", '175px']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "top", '382px'],
                ["style", "left", '463px'],
                ["style", "width", '258px']
            ],
            "${_Text}": [
                ["style", "top", '621px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '135px'],
                ["style", "font-size", '119%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '650px'],
                ["style", "width", '750px']
            ],
            "${_part-a1}": [
                ["style", "top", '59px'],
                ["style", "display", 'block'],
                ["style", "left", '454px'],
                ["style", "height", '0%']
            ],
            "${_part-b4}": [
                ["style", "top", '382px'],
                ["style", "left", '31px'],
                ["style", "display", 'block']
            ],
            "${_part-b3}": [
                ["style", "display", 'block'],
                ["style", "top", '308px'],
                ["style", "left", '34px'],
                ["style", "height", '0%']
            ],
            "${_SN3}": [
                ["style", "display", 'block'],
                ["style", "top", '336px'],
                ["style", "left", '289px'],
                ["style", "width", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12500,
            autoPlay: true,
            timeline: [
                { id: "eid18", tween: [ "style", "${_part-b2}", "height", '20.92%', { fromValue: '0%'}], position: 2000, duration: 800 },
                { id: "eid24", tween: [ "style", "${_part-b3}", "height", '8.77%', { fromValue: '0%'}], position: 7000, duration: 700 },
                { id: "eid25", tween: [ "style", "${_SN1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_SN1}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_part-a3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_part-a3}", "display", 'block', { fromValue: 'none'}], position: 8230, duration: 0 },
                { id: "eid30", tween: [ "style", "${_SN1}", "width", '20.8%', { fromValue: '0%'}], position: 3000, duration: 800 },
                { id: "eid84", tween: [ "style", "${_AN2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_AN2}", "display", 'block', { fromValue: 'none'}], position: 11364, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Text6}", "width", '175px', { fromValue: '175px'}], position: 6810, duration: 0 },
                { id: "eid12", tween: [ "style", "${_part-b1}", "height", '14.92%', { fromValue: '0%'}], position: 1145, duration: 700 },
                { id: "eid76", tween: [ "style", "${_part-a4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_part-a4}", "display", 'block', { fromValue: 'none'}], position: 10410, duration: 0 },
                { id: "eid19", tween: [ "style", "${_part-b3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_part-b3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6810, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 9202, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 9410, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Figure_413}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0 },
                { id: "eid45", tween: [ "style", "${_SN2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_SN2}", "display", 'block', { fromValue: 'none'}], position: 5742, duration: 0 },
                { id: "eid13", tween: [ "style", "${_part-b2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_part-b2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid50", tween: [ "style", "${_SN2}", "width", '20.4%', { fromValue: '0%'}], position: 5742, duration: 800 },
                { id: "eid63", tween: [ "style", "${_part-a3}", "height", '7.23%', { fromValue: '0%'}], position: 8230, duration: 700 },
                { id: "eid7", tween: [ "style", "${_part-b1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_part-b1}", "display", 'block', { fromValue: 'none'}], position: 1145, duration: 0 },
                { id: "eid70", tween: [ "style", "${_SN3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_SN3}", "display", 'block', { fromValue: 'none'}], position: 9410, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5544, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5742, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4084, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4281, duration: 0 },
                { id: "eid90", tween: [ "style", "${_part-b5}", "height", '11.23%', { fromValue: '0%'}], position: 11599, duration: 700 },
                { id: "eid56", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 7974, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 9410, duration: 0 },
                { id: "eid92", tween: [ "style", "${_partA2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_partA2}", "display", 'block', { fromValue: 'none'}], position: 4281, duration: 0 },
                { id: "eid1", tween: [ "style", "${_part-a1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_part-a1}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
                { id: "eid6", tween: [ "style", "${_part-a1}", "height", '16.62%', { fromValue: '0%'}], position: 185, duration: 800 },
                { id: "eid81", tween: [ "style", "${_part-b5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_part-b5}", "display", 'block', { fromValue: 'none'}], position: 11599, duration: 0 },
                { id: "eid68", tween: [ "style", "${_part-b4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_part-b4}", "display", 'block', { fromValue: 'none'}], position: 9410, duration: 0 },
                { id: "eid75", tween: [ "style", "${_SN3}", "width", '21.74%', { fromValue: '0%'}], position: 9410, duration: 800 },
                { id: "eid83", tween: [ "style", "${_part-a4}", "height", '11.23%', { fromValue: '0%'}], position: 10410, duration: 700 },
                { id: "eid95", tween: [ "style", "${_partA2}", "height", '17.69%', { fromValue: '0%'}], position: 4281, duration: 800 },
                { id: "eid39", tween: [ "style", "${_AN1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_AN1}", "display", 'block', { fromValue: 'none'}], position: 5263, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-401895510");
