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
                id: 'another-piconet',
                display: 'block',
                type: 'image',
                rect: ['142px', '33px','346px','221px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"another-piconet.png",'0px','0px']
            },
            {
                id: 'piconet',
                display: 'block',
                type: 'image',
                rect: ['8px', '214px','373px','210px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"piconet.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['86px', '515px','auto','auto','auto', 'auto'],
                text: "Figure 12.2 Master/Slave Relationships",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['86px', '490px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the  Animation.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'master',
                display: 'block',
                type: 'image',
                rect: ['116px', '194px','52px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"master.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['15px', '171px','142px','auto','auto', 'auto'],
                text: "Master establishes a piconet.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'another-master',
                display: 'block',
                type: 'image',
                rect: ['281px', '16px','49px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"another-master.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['363px', '2px','121px','74px','auto', 'auto'],
                text: "Another master establishes a different piconet.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['19px', '126px','154px','auto','auto', 'auto'],
                text: "Bluetooth node is both a master in one piconet and a slave in another.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'master-and-slave',
                display: 'block',
                type: 'image',
                rect: ['115px', '195px','51px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"master-and-slave.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_master-and-slave}": [
                ["style", "top", '195px'],
                ["style", "left", '115px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '171px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '15px'],
                ["style", "width", '142px']
            ],
            "${_Text2}": [
                ["style", "top", '487px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '61px'],
                ["style", "font-size", '94%']
            ],
            "${_piconet}": [
                ["style", "top", '214px'],
                ["style", "left", '8px'],
                ["style", "display", 'block']
            ],
            "${_another-master}": [
                ["style", "top", '16px'],
                ["style", "left", '281px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '515px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '86px'],
                ["style", "font-size", '119%']
            ],
            "${_another-piconet}": [
                ["style", "top", '33px'],
                ["style", "left", '142px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '500px'],
                ["style", "height", '550px'],
                ["style", "overflow", 'hidden']
            ],
            "${_master}": [
                ["style", "top", '194px'],
                ["style", "left", '116px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '126px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '19px'],
                ["style", "width", '154px']
            ],
            "${_Text4}": [
                ["style", "top", '2px'],
                ["style", "display", 'block'],
                ["style", "height", '74px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '363px'],
                ["style", "width", '121px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2145,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1345, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1835, duration: 0 },
                { id: "eid1", tween: [ "style", "${_master}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_master}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid13", tween: [ "style", "${_master}", "display", 'none', { fromValue: 'block'}], position: 1630, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 2145, duration: 0 },
                { id: "eid14", tween: [ "style", "${_master-and-slave}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_master-and-slave}", "display", 'block', { fromValue: 'none'}], position: 1630, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text2}", "top", '487px', { fromValue: '487px'}], position: 2000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1345, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 2145, duration: 0 },
                { id: "eid5", tween: [ "style", "${_piconet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_piconet}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_another-master}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_another-master}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_another-piconet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_another-piconet}", "display", 'block', { fromValue: 'none'}], position: 1630, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1817021677");
