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
                id: 'Part_1',
                type: 'image',
                rect: ['52px', '15px','669px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Part_1.png",'0px','0px']
            },
            {
                id: 'Part_2',
                type: 'image',
                rect: ['36px', '272px','691px','156px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Part_2.png",'0px','0px']
            },
            {
                id: 'Analog_signal',
                type: 'image',
                rect: ['66px', '82px','75px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Analog_signal.png",'0px','0px']
            },
            {
                id: 'Analog_signalCopy',
                display: 'block',
                type: 'image',
                rect: ['334px', '81px','75px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Analog_signal.png",'0px','0px']
            },
            {
                id: 'Digital_Signal',
                display: 'block',
                type: 'image',
                rect: ['151px', '80px','75px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Digital_Signal.png",'0px','0px']
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['156px', '590px','488px','50px','auto', 'auto'],
                text: "Figure 7.1 Encoding and Modulation Techniques",
                align: "center",
                font: ['Georgia, Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['273px', '228px','228px','35px','auto', 'auto'],
                text: "(a) Encoding onto a digital signal",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy',
                display: 'block',
                type: 'text',
                rect: ['266px', '475px','242px','35px','auto', 'auto'],
                text: "(b) Modulation onto an analog signal",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['58px', '149px','87px','35px','auto', 'auto'],
                text: "Input voice signal",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['250px', '149px','63px','25px','auto', 'auto'],
                text: "Digitized voice",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['429px', '148px','75px','25px','auto', 'auto'],
                text: "Voice signal back again",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['64px', '153px','75px','35px','auto', 'auto'],
                text: "Digital or analog",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9Copy',
                display: 'block',
                type: 'text',
                rect: ['61px', '418px','75px','35px','auto', 'auto'],
                text: "Digital or analog",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['58px', '428px','117px','25px','auto', 'auto'],
                text: "Broadcast radio program from studio",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['235px', '428px','75px','25px','auto', 'auto'],
                text: "Radio signal over the air",
                align: "center",
                font: ['Georgia, Times New Roman, Times, serif', 10, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['417px', '428px','91px','25px','auto', 'auto'],
                text: "Radio program out of the car stereo",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['252px', '153px','67px','25px','auto', 'auto'],
                text: "Digital",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10Copy',
                display: 'block',
                type: 'text',
                rect: ['242px', '420px','67px','25px','auto', 'auto'],
                text: "Analog",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', 10, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['183px', '547px','413px','35px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '148px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "font-size", '10px'],
                ["style", "width", '75px']
            ],
            "${_Part_1}": [
                ["style", "left", '52px'],
                ["style", "top", '-163px']
            ],
            "${_Text3}": [
                ["style", "top", '590px'],
                ["style", "font-size", '119%'],
                ["style", "font-weight", '700'],
                ["style", "height", '50px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '156px'],
                ["style", "width", '488px']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "top", '428px'],
                ["style", "left", '417px'],
                ["style", "width", '91px']
            ],
            "${_Analog_signal}": [
                ["style", "top", '82px'],
                ["style", "height", '35px'],
                ["style", "left", '-75px'],
                ["style", "width", '75px']
            ],
            "${_Part_2}": [
                ["style", "left", '36px'],
                ["style", "top", '800px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '475px'],
                ["style", "display", 'block'],
                ["style", "font-size", '75%'],
                ["style", "left", '266px'],
                ["style", "width", '242px']
            ],
            "${_Text4}": [
                ["style", "top", '228px'],
                ["style", "display", 'block'],
                ["style", "width", '228px'],
                ["style", "left", '273px'],
                ["style", "font-size", '75%']
            ],
            "${_Text5}": [
                ["style", "top", '149px'],
                ["style", "text-align", 'center'],
                ["style", "width", '87px'],
                ["style", "display", 'block'],
                ["style", "height", '35px'],
                ["style", "left", '58px'],
                ["style", "font-size", '10px']
            ],
            "${_Digital_Signal}": [
                ["style", "top", '80px'],
                ["style", "display", 'block'],
                ["style", "height", '35px'],
                ["style", "left", '151px'],
                ["style", "width", '75px']
            ],
            "${_Analog_signalCopy}": [
                ["style", "top", '81px'],
                ["style", "display", 'block'],
                ["style", "height", '35px'],
                ["style", "left", '334px'],
                ["style", "width", '75px']
            ],
            "${_Text10}": [
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '149px'],
                ["style", "left", '250px'],
                ["style", "display", 'block']
            ],
            "${_Text10Copy}": [
                ["style", "top", '420px'],
                ["style", "left", '242px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '428px'],
                ["style", "font-size", '10px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '235px'],
                ["style", "width", '75px']
            ],
            "${_Text12}": [
                ["style", "top", '566px'],
                ["style", "display", 'block'],
                ["style", "width", '461px'],
                ["style", "left", '173px'],
                ["style", "font-size", '94%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '800px']
            ],
            "${_Text9}": [
                ["style", "top", '153px'],
                ["style", "left", '64px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "top", '428px'],
                ["style", "width", '117px']
            ],
            "${_Text9Copy}": [
                ["style", "top", '418px'],
                ["style", "left", '61px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_Analog_signalCopy}", "left", '429px', { fromValue: '334px'}], position: 4861, duration: 1500 },
                { id: "eid10", tween: [ "style", "${_Analog_signal}", "left", '66px', { fromValue: '-75px'}], position: 1600, duration: 1400 },
                { id: "eid18", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6587, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Digital_Signal}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Digital_Signal}", "display", 'block', { fromValue: 'none'}], position: 3160, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 9400, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1545, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text12}", "top", '548px', { fromValue: '566px'}], position: 0, duration: 10854 },
                { id: "eid11", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3075, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 6587, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Part_1}", "top", '15px', { fromValue: '-163px'}], position: 45, duration: 1500 },
                { id: "eid56", tween: [ "style", "${_Text12}", "width", '461px', { fromValue: '461px'}], position: 10854, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Analog_signalCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Analog_signalCopy}", "display", 'block', { fromValue: 'none'}], position: 4861, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Part_2}", "top", '272px', { fromValue: '800px'}], position: 7750, duration: 1500 },
                { id: "eid59", tween: [ "style", "${_Text12}", "left", '151px', { fromValue: '173px'}], position: 0, duration: 10854 },
                { id: "eid51", tween: [ "style", "${_Text9Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text9Copy}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Digital_Signal}", "left", '244px', { fromValue: '151px'}], position: 3160, duration: 1500 },
                { id: "eid46", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 6447, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 6587, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text10Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text10Copy}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-495983156");
