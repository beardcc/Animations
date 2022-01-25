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
                id: 'axis',
                display: 'block',
                type: 'image',
                rect: ['33px', '58px','479px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            },
            {
                id: 'title',
                type: 'group',
                rect: ['34px', '650px','510','58','auto', 'auto'],
                c: [
                {
                    id: 'title1',
                    type: 'text',
                    rect: ['0px', '0px','426px','41px','auto', 'auto'],
                    text: "Figure 7.15 ",
                    font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'title2',
                    type: 'text',
                    rect: ['99px', '0px','411px','58px','auto', 'auto'],
                    text: "Amplitude, Phase, and Frequency Modulation of a Sine-Wave Carrier by a Sine-Wave Signal",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'instruction',
                display: 'block',
                type: 'text',
                rect: ['101px', '622px','411px','41px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'carrier',
                display: 'block',
                type: 'text',
                rect: ['252px', '113px','42px','15px','auto', 'auto'],
                text: "Carrier",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'carrier2',
                display: 'block',
                type: 'image',
                rect: ['37px', '29px','86.9%','12.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"carrier.png",'0%','0%','478px','85px']
            },
            {
                id: 'modulating_txt',
                display: 'block',
                type: 'text',
                rect: ['172px', '207px','208px','15px','auto', 'auto'],
                text: "Modulating sine-wave signal",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'modulating-sine-wave',
                display: 'block',
                type: 'image',
                rect: ['38px', '128px','86.9%','12.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"modulating-sine-wave.png",'0%','0%','478px','85px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['140px', '317px','auto','auto','auto', 'auto'],
                text: "Amplitude-modulated (DSBTC) wave",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'axis3',
                display: 'block',
                type: 'image',
                rect: ['31px', '257px','479px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            },
            {
                id: 'amplitude-modulated',
                display: 'block',
                type: 'image',
                rect: ['38px', '228px','86.9%','12.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"amplitude-modulated.png",'0%','0%','478px','85px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['158px', '355px','320px','70px','auto', 'auto'],
                text: "Amplitude changes with the signal.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['210px', '441px','133px','15px','auto', 'auto'],
                text: "Phase-modulated wave",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 13, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['198px', '556px','155px','15px','auto', 'auto'],
                text: "Frequency-modulated wave",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 13, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'axis4',
                display: 'block',
                type: 'image',
                rect: ['31px', '375px','479px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            },
            {
                id: 'axis5',
                display: 'block',
                type: 'image',
                rect: ['32px', '488px','479px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            },
            {
                id: 'frequency-modulated',
                display: 'block',
                type: 'image',
                rect: ['38px', '460px','86.9%','12.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"frequency-modulated.png",'0%','0%','478px','85px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['40px', '576px','498px','41px','auto', 'auto'],
                text: "Amplitude does not change. Phase or frequency changes with the signal.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'phase-modulated',
                display: 'block',
                type: 'image',
                rect: ['38px', '347px','86.9%','12.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phase-modulated.png",'0%','0%','478px','85px']
            },
            {
                id: 'axis2',
                display: 'block',
                type: 'image',
                rect: ['33px', '156px','479px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_frequency-modulated}": [
                ["style", "top", '460px'],
                ["style", "display", 'block'],
                ["style", "left", '38px'],
                ["style", "width", '0%']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "top", '350px'],
                ["style", "left", '218px'],
                ["style", "width", '125px']
            ],
            "${_modulating-sine-wave}": [
                ["style", "top", '128px'],
                ["style", "display", 'block'],
                ["style", "left", '38px'],
                ["style", "width", '0%']
            ],
            "${_carrier}": [
                ["style", "top", '113px'],
                ["style", "display", 'block'],
                ["style", "left", '255px'],
                ["style", "font-size", '13px']
            ],
            "${_Text8}": [
                ["style", "top", '441px'],
                ["style", "display", 'block'],
                ["style", "width", '195px'],
                ["style", "left", '210px'],
                ["style", "font-size", '13px']
            ],
            "${_modulating_txt}": [
                ["style", "top", '208px'],
                ["style", "display", 'block'],
                ["style", "font-size", '13px'],
                ["style", "left", '195px'],
                ["style", "width", '220px']
            ],
            "${_axis2}": [
                ["style", "top", '156px'],
                ["style", "left", '33px'],
                ["style", "display", 'block']
            ],
            "${_carrier2}": [
                ["style", "top", '29px'],
                ["style", "display", 'block'],
                ["style", "left", '37px'],
                ["style", "width", '0%']
            ],
            "${_axis5}": [
                ["style", "top", '488px'],
                ["style", "left", '32px'],
                ["style", "display", 'block']
            ],
            "${_title}": [
                ["style", "top", '650px'],
                ["style", "left", '34px']
            ],
            "${_instruction}": [
                ["style", "top", '630px'],
                ["style", "height", '20px'],
                ["style", "display", 'block'],
                ["style", "left", '101px'],
                ["style", "font-size", '94%']
            ],
            "${_amplitude-modulated}": [
                ["style", "top", '228px'],
                ["style", "display", 'block'],
                ["style", "left", '38px'],
                ["style", "width", '0%']
            ],
            "${_phase-modulated}": [
                ["style", "top", '347px'],
                ["style", "display", 'block'],
                ["style", "left", '38px'],
                ["style", "width", '0%']
            ],
            "${_Text10}": [
                ["style", "top", '572px'],
                ["style", "display", 'block'],
                ["style", "width", '277px'],
                ["style", "left", '156px'],
                ["style", "font-size", '94%']
            ],
            "${_title1}": [
                ["style", "top", '0px'],
                ["style", "width", '426px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '119%']
            ],
            "${_axis}": [
                ["style", "top", '58px'],
                ["style", "left", '33px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '321px'],
                ["style", "display", 'block'],
                ["style", "font-size", '13px'],
                ["style", "left", '171px'],
                ["style", "width", '249px']
            ],
            "${_axis4}": [
                ["style", "top", '375px'],
                ["style", "left", '31px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '700px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text9}": [
                ["style", "display", 'block'],
                ["style", "top", '551px'],
                ["style", "left", '198px'],
                ["style", "width", '217px']
            ],
            "${_axis3}": [
                ["style", "top", '257px'],
                ["style", "left", '31px'],
                ["style", "display", 'block']
            ],
            "${_title2}": [
                ["style", "top", '0px'],
                ["style", "left", '99px'],
                ["style", "width", '411px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9250,
            autoPlay: true,
            timeline: [
                { id: "eid92", tween: [ "style", "${_Text9}", "width", '217px', { fromValue: '217px'}], position: 8938, duration: 0 },
                { id: "eid1", tween: [ "style", "${_carrier}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_carrier}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid88", tween: [ "style", "${_modulating_txt}", "width", '220px', { fromValue: '220px'}], position: 8938, duration: 0 },
                { id: "eid14", tween: [ "style", "${_carrier}", "left", '255px', { fromValue: '255px'}], position: 2250, duration: 0 },
                { id: "eid5", tween: [ "style", "${_carrier2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_carrier2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Text10}", "width", '277px', { fromValue: '277px'}], position: 8938, duration: 0 },
                { id: "eid83", tween: [ "style", "${_instruction}", "height", '20px', { fromValue: '20px'}], position: 8938, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text9}", "top", '551px', { fromValue: '551px'}], position: 8750, duration: 0 },
                { id: "eid66", tween: [ "style", "${_frequency-modulated}", "width", '86.91%', { fromValue: '0%'}], position: 7000, duration: 1500 },
                { id: "eid30", tween: [ "style", "${_amplitude-modulated}", "width", '86.91%', { fromValue: '0%'}], position: 4500, duration: 1500 },
                { id: "eid63", tween: [ "style", "${_frequency-modulated}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_frequency-modulated}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_carrier}", "font-size", '13px', { fromValue: '13px'}], position: 6250, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text8}", "width", '195px', { fromValue: '195px'}], position: 8938, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Text6}", "width", '249px', { fromValue: '249px'}], position: 8938, duration: 0 },
                { id: "eid13", tween: [ "style", "${_carrier2}", "width", '86.91%', { fromValue: '0%'}], position: 500, duration: 1500 },
                { id: "eid73", tween: [ "style", "${_Text7}", "left", '218px', { fromValue: '218px'}], position: 6308, duration: 0 },
                { id: "eid25", tween: [ "style", "${_axis3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_axis3}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid59", tween: [ "style", "${_phase-modulated}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_phase-modulated}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid55", tween: [ "style", "${_axis4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_axis4}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_axis2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_axis2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text7}", "top", '350px', { fromValue: '350px'}], position: 6308, duration: 0 },
                { id: "eid19", tween: [ "style", "${_modulating-sine-wave}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_modulating-sine-wave}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_axis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_axis}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid71", tween: [ "style", "${_instruction}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid57", tween: [ "style", "${_axis5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_axis5}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid15", tween: [ "style", "${_modulating_txt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_modulating_txt}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text10}", "top", '572px', { fromValue: '572px'}], position: 8938, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text7}", "width", '125px', { fromValue: '125px'}], position: 6308, duration: 0 },
                { id: "eid27", tween: [ "style", "${_amplitude-modulated}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_amplitude-modulated}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid82", tween: [ "style", "${_instruction}", "top", '630px', { fromValue: '630px'}], position: 8938, duration: 0 },
                { id: "eid22", tween: [ "style", "${_modulating-sine-wave}", "width", '86.91%', { fromValue: '0%'}], position: 2500, duration: 1500 },
                { id: "eid62", tween: [ "style", "${_phase-modulated}", "width", '86.91%', { fromValue: '0%'}], position: 7000, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1047365220");
