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
                id: 'background2',
                type: 'image',
                rect: ['321px', '71px','260px','418px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.png",'0px','0px']
            },
            {
                id: 'user_a2',
                type: 'image',
                rect: ['50px', '112px','620px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"user_a.png",'0px','0px']
            },
            {
                id: 'user_b2',
                type: 'image',
                rect: ['50', '256px','618px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"user_b.png",'0px','0px']
            },
            {
                id: 'user_c2',
                type: 'image',
                rect: ['48px', '399px','621px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"user_c.png",'0px','0px']
            },
            {
                id: 'text',
                type: 'group',
                rect: ['55', '26','572','519','auto', 'auto'],
                c: [
                {
                    id: 'header_code',
                    type: 'text',
                    rect: ['17px', '0px','auto','auto','auto', 'auto'],
                    text: "Code",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'nrs1',
                    type: 'text',
                    rect: ['0px', '74px','auto','auto','auto', 'auto'],
                    text: "1 -1 -1 1 -1 1",
                    font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'nrs2',
                    type: 'text',
                    rect: ['2px', '219px','auto','auto','auto', 'auto'],
                    text: "1 1 -1 -1 1 1",
                    font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'nrs3',
                    type: 'text',
                    rect: ['2px', '362px','auto','auto','auto', 'auto'],
                    text: "1 1 -1 1 1 -1",
                    font: ['Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'usera',
                    type: 'text',
                    rect: ['171px', '108px','auto','auto','auto', 'auto'],
                    text: "User A",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'userb',
                    type: 'text',
                    rect: ['171px', '255px','auto','auto','auto', 'auto'],
                    text: "User B",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'userc',
                    type: 'text',
                    rect: ['171px', '404px','auto','auto','auto', 'auto'],
                    text: "User C",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'figure910',
                    type: 'text',
                    rect: ['182px', '497px','auto','auto','auto', 'auto'],
                    text: "Figure 9.10 CDMA Example",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'header_msg',
                    type: 'text',
                    rect: ['340px', '0px','auto','auto','auto', 'auto'],
                    text: "Message \"1101\" Encoded",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: '_1a',
                    type: 'text',
                    rect: ['304px', '47px','auto','auto','auto', 'auto'],
                    text: "1",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: '_1b',
                    type: 'text',
                    rect: ['391px', '47px','auto','auto','auto', 'auto'],
                    text: "1",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: '_1c',
                    type: 'text',
                    rect: ['562px', '47px','auto','auto','auto', 'auto'],
                    text: "1",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: '_0',
                    type: 'text',
                    rect: ['476px', '47px','auto','auto','auto', 'auto'],
                    text: "0",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'touch2animate',
                    display: 'block',
                    type: 'text',
                    rect: ['123px', '475px','auto','auto','auto', 'auto'],
                    text: "Click or Touch on Figure for Each Step of the Animation",
                    align: "center",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                }]
            },
            {
                id: 'Anim_2',
                type: 'group',
                rect: ['51', '111','88','61','auto', 'auto'],
                c: [
                {
                    id: 'a1Copy',
                    type: 'image',
                    rect: ['0px', '1px','88px','61px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
                },
                {
                    id: 'text2',
                    display: 'none',
                    type: 'text',
                    rect: ['54px', '75px','auto','auto','auto', 'auto'],
                    text: "To send \"0\" bits, send<br>the inverted chip sequence.",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'Anim_1',
                type: 'group',
                rect: ['51', '111','88','61','auto', 'auto'],
                c: [
                {
                    id: 'a2',
                    type: 'image',
                    rect: ['0px', '1px','88px','61px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
                },
                {
                    id: 'a1',
                    type: 'image',
                    rect: ['0px', '1px','88px','61px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
                },
                {
                    id: 'Text2',
                    display: 'none',
                    type: 'text',
                    rect: ['54px', '75px','auto','auto','auto', 'auto'],
                    text: "To send \"1\" bits, send<br>the same chip sequence.",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__1b}": [
                ["style", "top", '47px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '391px'],
                ["style", "font-size", '119%']
            ],
            "${__1c}": [
                ["style", "top", '47px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '562px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '119%']
            ],
            "${_userc}": [
                ["style", "top", '404px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '171px'],
                ["style", "font-size", '119%']
            ],
            "${_background2}": [
                ["style", "left", '321px'],
                ["style", "top", '71px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '700px'],
                ["style", "height", '560px'],
                ["style", "overflow", 'hidden']
            ],
            "${_header_code}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '17px'],
                ["style", "font-size", '119%']
            ],
            "${_Text2}": [
                ["style", "top", '75px'],
                ["style", "left", '54px'],
                ["style", "display", 'none']
            ],
            "${__1a}": [
                ["style", "top", '47px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '304px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '119%']
            ],
            "${_a1Copy}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-1px'],
                ["style", "top", '1px']
            ],
            "${_usera}": [
                ["style", "top", '108px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '171px'],
                ["style", "font-size", '119%']
            ],
            "${_userb}": [
                ["style", "top", '255px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '171px'],
                ["style", "font-size", '119%']
            ],
            "${_touch2animate}": [
                ["style", "top", '475px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '123px'],
                ["style", "font-size", '94%']
            ],
            "${_nrs1}": [
                ["style", "top", '74px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '2px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '0px'],
                ["style", "font-size", '10px']
            ],
            "${_text2}": [
                ["style", "top", '75px'],
                ["style", "left", '54px'],
                ["style", "display", 'none']
            ],
            "${_nrs3}": [
                ["style", "top", '362px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '2px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '2px'],
                ["style", "font-size", '10px']
            ],
            "${_a1}": [
                ["style", "left", '-1px'],
                ["style", "top", '1px']
            ],
            "${__0}": [
                ["style", "top", '47px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '476px'],
                ["style", "font-size", '119%']
            ],
            "${_user_c2}": [
                ["style", "top", '399px'],
                ["style", "left", '48px']
            ],
            "${_a2}": [
                ["style", "left", '-1px'],
                ["style", "top", '1px']
            ],
            "${_nrs2}": [
                ["style", "top", '219px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '2px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '2px'],
                ["style", "font-size", '10px']
            ],
            "${_header_msg}": [
                ["style", "top", '0px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '340px'],
                ["style", "font-size", '119%']
            ],
            "${_user_b2}": [
                ["style", "top", '256px']
            ],
            "${_user_a2}": [
                ["style", "left", '50px'],
                ["style", "top", '112px']
            ],
            "${_figure910}": [
                ["style", "top", '497px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '182px'],
                ["style", "font-size", '119%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6250,
            autoPlay: true,
            labels: {
                "start": 0,
                "1": 250,
                "2": 3500,
                "3": 6000,
                "end": 6250
            },
            timeline: [
                { id: "eid30", tween: [ "style", "${_a1Copy}", "left", '443px', { fromValue: '-1px'}], position: 3500, duration: 2500, easing: "easeOutQuint" },
                { id: "eid9", tween: [ "style", "${_a1}", "left", '270px', { fromValue: '-1px'}], position: 250, duration: 2455, easing: "easeOutQuint" },
                { id: "eid38", tween: [ "style", "${_touch2animate}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuint" },
                { id: "eid22", tween: [ "style", "${_a2}", "left", '356px', { fromValue: '-1px'}], position: 1000, duration: 2500, easing: "easeOutQuint" },
                { id: "eid35", tween: [ "transform", "${_a1Copy}", "scaleY", '-1', { fromValue: '1'}], position: 3500, duration: 2500, easing: "easeOutQuint" },
                { id: "eid43", tween: [ "style", "${_text2}", "display", 'block', { fromValue: 'none'}], position: 3508, duration: 0, easing: "easeOutQuint" },
                { id: "eid44", tween: [ "style", "${_text2}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuint" },
                { id: "eid41", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutQuint" },
                { id: "eid42", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 3508, duration: 0, easing: "easeOutQuint" }            ]
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
})(jQuery, AdobeEdge, "EDGE-9892508");
