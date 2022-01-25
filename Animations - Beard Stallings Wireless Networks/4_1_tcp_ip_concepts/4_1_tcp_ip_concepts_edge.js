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
                id: 'Text2',
                type: 'text',
                rect: ['249px', '518px','auto','auto','auto', 'auto'],
                text: "Figure 4.1  TCP/IP Concepts",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_5',
                display: 'none',
                type: 'image',
                rect: ['538px', '135px','147px','248px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"_5.png",'0px','0px']
            },
            {
                id: '_7',
                display: 'none',
                type: 'image',
                rect: ['365px', '27px','319px','115px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"_7.png",'0px','0px']
            },
            {
                id: '_4',
                display: 'none',
                type: 'image',
                rect: ['416px', '375px','199px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"_4.png",'0px','0px']
            },
            {
                id: '_3',
                display: 'none',
                type: 'image',
                rect: ['209px', '320px','208px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"_3.png",'0px','0px']
            },
            {
                id: '_2',
                display: 'none',
                type: 'image',
                rect: ['14px', '135px','302px','358px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"_2.png",'0px','0px']
            },
            {
                id: '_1',
                display: 'none',
                type: 'image',
                rect: ['14px', '8px','624px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"_1.png",'0px','0px']
            },
            {
                id: '_6',
                display: 'none',
                type: 'image',
                rect: ['134px', '129px','436px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"_6.png",'0px','0px']
            },
            {
                id: 'Explanations',
                display: 'block',
                type: 'rect',
                rect: ['1px', '0px','699px','550px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"],
                c: [
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['178px', '501px','auto','auto','auto', 'auto'],
                    text: "Click or Touch on Figure for Each Step of the Animation",
                    align: "center",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'eight',
                    display: 'none',
                    type: 'text',
                    rect: ['283px', '10px','auto','auto','auto', 'auto'],
                    text: "Application at Host B receives<br>data through SAPs.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'seven',
                    display: 'none',
                    type: 'text',
                    rect: ['293px', '41px','auto','auto','auto', 'auto'],
                    text: "Layers of <br>different nodes talk<br>to each other through<br>logical connections.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'six',
                    display: 'none',
                    type: 'text',
                    rect: ['429px', '181px','auto','auto','auto', 'auto'],
                    text: "Protocol<br>layers at<br>Host B check <br>information<br>for their<br>layers.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'five',
                    display: 'none',
                    type: 'text',
                    rect: ['588px', '349px','auto','auto','auto', 'auto'],
                    text: "Through<br>another<br>network or<br>networks to<br>the destination.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'four',
                    display: 'none',
                    type: 'text',
                    rect: ['257px', '467px','auto','auto','auto', 'auto'],
                    text: "Through Network 1 to <br>a router that interconnects<br>with other networks.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'three',
                    display: 'none',
                    type: 'text',
                    rect: ['209px', '391px','97px','auto','auto', 'auto'],
                    text: "Through the <br>subnetwork<br>interface<br>into the<br>first network.",
                    align: "right",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'two',
                    display: 'none',
                    type: 'text',
                    rect: ['164px', '232px','auto','auto','auto', 'auto'],
                    text: "Host A sends<br>data through lower protocol<br>layers.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'one',
                    display: 'none',
                    type: 'text',
                    rect: ['208px', '41','auto','auto','auto', 'auto'],
                    text: "Host A has<br>App Y and<br>App X that<br>wants to send<br>data.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__2}": [
                ["style", "top", '135px'],
                ["style", "left", '14px'],
                ["style", "display", 'none']
            ],
            "${_Explanations}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'block'],
                ["style", "height", '550px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "top", '0px'],
                ["style", "width", '699px']
            ],
            "${_four}": [
                ["style", "display", 'none'],
                ["style", "top", '379px'],
                ["style", "left", '451px'],
                ["style", "font-size", '94%']
            ],
            "${_three}": [
                ["style", "top", '391px'],
                ["style", "text-align", 'right'],
                ["style", "display", 'none'],
                ["style", "width", '97px'],
                ["style", "left", '209px'],
                ["style", "font-size", '94%']
            ],
            "${_six}": [
                ["style", "display", 'none'],
                ["style", "top", '181px'],
                ["style", "left", '429px'],
                ["style", "font-size", '94%']
            ],
            "${_five}": [
                ["style", "display", 'none'],
                ["style", "top", '278px'],
                ["style", "left", '590px'],
                ["style", "font-size", '94%']
            ],
            "${__4}": [
                ["style", "top", '375px'],
                ["style", "left", '416px'],
                ["style", "display", 'none']
            ],
            "${_one}": [
                ["style", "display", 'none'],
                ["style", "left", '208px'],
                ["style", "font-size", '94%']
            ],
            "${_Text2}": [
                ["style", "top", '518px'],
                ["style", "left", '249px'],
                ["style", "font-size", '119%']
            ],
            "${__6}": [
                ["style", "top", '129px'],
                ["style", "left", '134px'],
                ["style", "display", 'none']
            ],
            "${__7}": [
                ["style", "top", '27px'],
                ["style", "left", '365px'],
                ["style", "display", 'none']
            ],
            "${_eight}": [
                ["style", "display", 'none'],
                ["style", "top", '10px'],
                ["style", "left", '283px'],
                ["style", "font-size", '94%']
            ],
            "${__1}": [
                ["style", "top", '8px'],
                ["style", "left", '14px'],
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '501px'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '178px'],
                ["style", "font-size", '94%']
            ],
            "${_two}": [
                ["style", "display", 'none'],
                ["style", "top", '91px'],
                ["style", "left", '227px'],
                ["style", "font-size", '94%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '550px'],
                ["style", "width", '700px']
            ],
            "${_seven}": [
                ["style", "display", 'none'],
                ["style", "top", '41px'],
                ["style", "left", '293px'],
                ["style", "font-size", '94%']
            ],
            "${__3}": [
                ["style", "top", '320px'],
                ["style", "left", '209px'],
                ["style", "display", 'none']
            ],
            "${__5}": [
                ["style", "top", '135px'],
                ["style", "left", '538px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            labels: {
                "Blank": 0,
                "1": 250,
                "2": 500,
                "3": 750,
                "4": 1000,
                "5": 1250,
                "6": 1500,
                "7": 1750,
                "8": 2000,
                "complete": 2250
            },
            timeline: [
                { id: "eid107", tween: [ "style", "${_four}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid108", tween: [ "style", "${_four}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid109", tween: [ "style", "${_five}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid110", tween: [ "style", "${_five}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid115", tween: [ "style", "${_eight}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid116", tween: [ "style", "${_eight}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Explanations}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Explanations}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid113", tween: [ "style", "${_seven}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid114", tween: [ "style", "${_seven}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid79", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid11", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${__6}", "display", 'block', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid78", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid77", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid81", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid103", tween: [ "style", "${_two}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid104", tween: [ "style", "${_two}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid111", tween: [ "style", "${_six}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid112", tween: [ "style", "${_six}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid76", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid80", tween: [ "style", "${__7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${__7}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid101", tween: [ "style", "${_one}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid102", tween: [ "style", "${_one}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid105", tween: [ "style", "${_three}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid106", tween: [ "style", "${_three}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-21135432");
