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
                id: 'figure911',
                type: 'text',
                rect: ['146px', '467px','auto','auto','auto', 'auto'],
                text: "Figure 9.11 CDMA in a DSSS Environment",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'clicktoani',
                display: 'block',
                type: 'text',
                rect: ['169px', '447px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'txt_four',
                display: 'none',
                type: 'group',
                rect: ['-4302', '-2652','161','34','auto', 'auto'],
                c: [
                {
                    id: 'txt42',
                    type: 'text',
                    rect: ['4679px', '2949px','auto','auto','auto', 'auto'],
                    text: "Retrieve data <i>d<sub>1</sub>(t)</i>.<br>Hopefully noise and<br>imperfections in codes<br>do not result in errors<br>in <i>d<sub>1</sub>(t)</i>.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'txt41',
                    type: 'text',
                    rect: ['4789px', '2956px','auto','auto','auto', 'auto'],
                    text: "",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', 9, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'txt41Copy',
                    type: 'text',
                    rect: ['4751px', '3025px','auto','auto','auto', 'auto'],
                    text: "",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', 9, "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'four',
                display: 'none',
                type: 'image',
                rect: ['585px', '158px','56px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"four.png",'0px','0px']
            },
            {
                id: 'txt_three',
                display: 'none',
                type: 'group',
                rect: ['360', '294','161','36','auto', 'auto'],
                c: [
                {
                    id: 'Text5',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "To retrieve User 1's data,<br>multiply by <i>c<sub>1</sub>(t)</i>.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'Text5Copy',
                    type: 'text',
                    rect: ['113px', '26px','auto','auto','auto', 'auto'],
                    text: "",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', 9, "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'three',
                display: 'none',
                type: 'image',
                rect: ['441px', '165px','164px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"three.png",'0px','0px']
            },
            {
                id: 'txt_two',
                display: 'none',
                type: 'text',
                rect: ['379px', '269px','auto','auto','auto', 'auto'],
                text: "Receiver antenna retrieves<br>all of these signals<br>plus noise.",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'two',
                display: 'none',
                type: 'image',
                rect: ['241px', '30px','203px','284px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"two.png",'0px','0px']
            },
            {
                id: 'txt_one',
                display: 'none',
                type: 'text',
                rect: ['346px', '72px','auto','auto','auto', 'auto'],
                text: "Multiple users generate<br>signals over the same frequencies,<br>but spread with different <i>c(t)</i><br>codes.<br>",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'one',
                display: 'none',
                type: 'image',
                rect: ['9px', '10px','224px','417px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"one.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text5Copy}": [
                ["style", "top", '26px'],
                ["style", "left", '113px'],
                ["style", "font-size", '9px']
            ],
            "${_txt_four}": [
                ["style", "display", 'none'],
                ["style", "left", '-4302px']
            ],
            "${_txt_one}": [
                ["style", "top", '72px'],
                ["style", "left", '346px'],
                ["style", "display", 'none']
            ],
            "${_figure911}": [
                ["style", "top", '467px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '146px'],
                ["style", "font-size", '119%']
            ],
            "${_one}": [
                ["style", "top", '10px'],
                ["style", "left", '9px'],
                ["style", "display", 'none']
            ],
            "${_txt41}": [
                ["style", "top", '2956px'],
                ["style", "left", '4789px'],
                ["style", "font-size", '9px']
            ],
            "${_Text5}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_txt42}": [
                ["style", "left", '4679px'],
                ["style", "top", '2949px']
            ],
            "${_four}": [
                ["style", "top", '158px'],
                ["style", "left", '585px'],
                ["style", "display", 'none']
            ],
            "${_three}": [
                ["style", "top", '165px'],
                ["style", "left", '441px'],
                ["style", "display", 'none']
            ],
            "${_txt_two}": [
                ["style", "top", '269px'],
                ["style", "left", '379px'],
                ["style", "display", 'none']
            ],
            "${_two}": [
                ["style", "top", '30px'],
                ["style", "left", '241px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '650px']
            ],
            "${_clicktoani}": [
                ["style", "top", '444px'],
                ["style", "font-weight", 'bold'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "left", '141px'],
                ["style", "font-size", '94%']
            ],
            "${_txt_three}": [
                ["style", "display", 'none']
            ],
            "${_txt41Copy}": [
                ["style", "top", '3025px'],
                ["style", "left", '4751px'],
                ["style", "font-size", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            labels: {
                "1": 250,
                "2": 500,
                "3": 750,
                "4": 1000,
                "all": 1250
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_four}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_txt_two}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_txt_two}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid20", tween: [ "style", "${_txt_four}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid21", tween: [ "style", "${_txt_four}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_three}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid2", tween: [ "style", "${_two}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_one}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid25", tween: [ "style", "${_txt_four}", "left", '-4302px', { fromValue: '-4302px'}], position: 1048, duration: 0 },
                { id: "eid7", tween: [ "style", "${_clicktoani}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid12", tween: [ "style", "${_txt_one}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid13", tween: [ "style", "${_txt_one}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_txt_three}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_txt_three}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-3157441");
