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
                display: 'block',
                type: 'image',
                rect: ['157px', '27px','75.6%','17%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0%','0%','612px','136px']
            },
            {
                id: 'noise',
                display: 'block',
                type: 'image',
                rect: ['164px', '170px','75.6%','19.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"noise.png",'0%','0%','612px','159px']
            },
            {
                id: 'noiseCopy',
                display: 'block',
                type: 'image',
                rect: ['164px', '348px','75.6%','19.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"noise.png",'0%','0%','612px','159px']
            },
            {
                id: 'mma',
                display: 'block',
                type: 'image',
                rect: ['146px', '316px','630px','64px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mma.png",'0px','0px']
            },
            {
                id: 'signalnoise',
                display: 'block',
                type: 'image',
                rect: ['165px', '323px','612px','139px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"signal_noise.png",'0px','0px']
            },
            {
                id: 'sampling',
                display: 'block',
                type: 'image',
                rect: ['27px', '500px','68px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sampling.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['356px', '553px','189px','40px','auto', 'auto'],
                text: "Sample at these points.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'signalnoise2',
                display: 'block',
                type: 'image',
                rect: ['26px', '392px','78px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"signalnoise.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['350px', '462px','178px','36px','auto', 'auto'],
                text: "Now added together.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'a',
                display: 'block',
                type: 'image',
                rect: ['9px', '15px','108px','139px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.png",'0px','0px']
            },
            {
                id: 'noisea',
                display: 'block',
                type: 'image',
                rect: ['30px', '247px','45px','25px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"noisea.png",'0px','0px']
            },
            {
                id: 'lastdigits',
                display: 'block',
                type: 'image',
                rect: ['176px', '566px','71.2%','14%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lastdigits.png",'0%','0%','577px','112px']
            },
            {
                id: 'drnod',
                display: 'block',
                type: 'image',
                rect: ['26px', '573px','95px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drnod.png",'0px','0px']
            },
            {
                id: 'sampp',
                type: 'image',
                rect: ['171px', '464px','71.4%','8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sampp.png",'0%','0%','578px','64px']
            },
            {
                id: 'arrows',
                display: 'block',
                type: 'image',
                rect: ['176px', '372px','71.2%','14%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrows.png",'0%','0%','577px','112px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['212px', '766px','auto','auto','auto', 'auto'],
                text: "Figure 2.9 Effect of Noise on a Digital Signal",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['207px', '734px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['297px', '687px','auto','auto','auto', 'auto'],
                text: "Burst of posative noise makes a sent 1 look like a received 0.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'a1',
                display: 'block',
                type: 'image',
                rect: ['369px', '270px','6.7%','53.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a1.png",'0%','0%','54px','427px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['389px', '694px','auto','auto','auto', 'auto'],
                text: "Burst of negative noise makes a sent 0 look like a received 1.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'a2',
                display: 'block',
                type: 'image',
                rect: ['658px', '328px','6.7%','47.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.png",'0%','0%','54px','383px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_drnod}": [
                ["style", "top", '573px'],
                ["style", "left", '26px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '694px'],
                ["style", "display", 'block'],
                ["style", "left", '389px'],
                ["style", "width", '372px']
            ],
            "${_arrows}": [
                ["style", "top", '484px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '176px'],
                ["style", "height", '0%']
            ],
            "${_Text3}": [
                ["style", "top", '462px'],
                ["style", "left", '350px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '730px'],
                ["style", "width", '378px'],
                ["style", "display", 'block'],
                ["style", "height", '25px'],
                ["style", "left", '208px'],
                ["style", "font-size", '94%']
            ],
            "${_noise}": [
                ["style", "top", '170px'],
                ["style", "display", 'block'],
                ["style", "left", '164px'],
                ["style", "width", '0%']
            ],
            "${_sampp}": [
                ["style", "top", '464px'],
                ["style", "left", '171px'],
                ["style", "width", '0%']
            ],
            "${_sampling}": [
                ["style", "top", '500px'],
                ["style", "left", '27px'],
                ["style", "display", 'block']
            ],
            "${_signalnoise}": [
                ["style", "top", '323px'],
                ["style", "left", '165px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '553px'],
                ["style", "display", 'block'],
                ["style", "left", '356px'],
                ["style", "width", '189px']
            ],
            "${_a2}": [
                ["style", "top", '711px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '666px'],
                ["style", "width", '6.67%']
            ],
            "${_noisea}": [
                ["style", "top", '247px'],
                ["style", "left", '30px'],
                ["style", "display", 'block']
            ],
            "${_a}": [
                ["style", "top", '15px'],
                ["style", "left", '9px'],
                ["style", "display", 'block']
            ],
            "${_a1}": [
                ["style", "top", '697px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "height", '0%'],
                ["style", "left", '397px'],
                ["style", "width", '6.67%']
            ],
            "${_Text6}": [
                ["style", "top", '687px'],
                ["style", "display", 'block'],
                ["style", "left", '297px'],
                ["style", "width", '389px']
            ],
            "${__1}": [
                ["style", "top", '27px'],
                ["style", "display", 'block'],
                ["style", "left", '157px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '766px'],
                ["style", "width", '385px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '212px'],
                ["style", "font-size", '119%']
            ],
            "${_lastdigits}": [
                ["style", "top", '566px'],
                ["style", "display", 'block'],
                ["style", "left", '176px'],
                ["style", "width", '0%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '810px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'visible']
            ],
            "${_signalnoise2}": [
                ["style", "top", '392px'],
                ["style", "left", '26px'],
                ["style", "display", 'block']
            ],
            "${_mma}": [
                ["style", "top", '316px'],
                ["style", "left", '146px'],
                ["style", "display", 'block']
            ],
            "${_noiseCopy}": [
                ["style", "display", 'block'],
                ["style", "top", '348px'],
                ["style", "left", '164px'],
                ["style", "width", '75.56%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 19250,
            autoPlay: true,
            timeline: [
                { id: "eid56", tween: [ "transform", "${_arrows}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 10250, duration: 0 },
                { id: "eid97", tween: [ "style", "${_a2}", "width", '6.67%', { fromValue: '6.67%'}], position: 18750, duration: 0 },
                { id: "eid36", tween: [ "style", "${_sampling}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_sampling}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid42", tween: [ "style", "${_arrows}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_arrows}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
                { id: "eid90", tween: [ "style", "${_arrows}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_mma}", "top", '347px', { fromValue: '316px'}], position: 5920, duration: 1500 },
                { id: "eid79", tween: [ "style", "${_a2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_a2}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0 },
                { id: "eid87", tween: [ "style", "${_a2}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_noise}", "width", '75.56%', { fromValue: '0%'}], position: 3000, duration: 2000 },
                { id: "eid38", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid63", tween: [ "style", "${_lastdigits}", "width", '71.24%', { fromValue: '0%'}], position: 12500, duration: 2000 },
                { id: "eid31", tween: [ "style", "${_noiseCopy}", "top", '330px', { fromValue: '348px'}], position: 5920, duration: 1500 },
                { id: "eid70", tween: [ "style", "${_a1}", "height", '38%', { fromValue: '0%'}], position: 15000, duration: 1500 },
                { id: "eid85", tween: [ "style", "${_a2}", "top", '428px', { fromValue: '711px'}], position: 17250, duration: 1500 },
                { id: "eid3", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 545, duration: 0 },
                { id: "eid58", tween: [ "style", "${_drnod}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_drnod}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid102", tween: [ "style", "${_Text2}", "height", '25px', { fromValue: '25px'}], position: 19086, duration: 0 },
                { id: "eid13", tween: [ "style", "${_signalnoise2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_signalnoise2}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 19250, duration: 0 },
                { id: "eid7", tween: [ "style", "${_noisea}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_noisea}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Text2}", "top", '730px', { fromValue: '730px'}], position: 19086, duration: 0 },
                { id: "eid86", tween: [ "transform", "${_a2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 17250, duration: 0 },
                { id: "eid83", tween: [ "style", "${_a2}", "height", '35.38%', { fromValue: '0%'}], position: 17250, duration: 1500 },
                { id: "eid60", tween: [ "style", "${_lastdigits}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_lastdigits}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 16750, duration: 0 },
                { id: "eid41", tween: [ "style", "${_sampp}", "width", '71.36%', { fromValue: '0%'}], position: 8500, duration: 1500 },
                { id: "eid100", tween: [ "style", "${_Text2}", "width", '378px', { fromValue: '378px'}], position: 19086, duration: 0 },
                { id: "eid15", tween: [ "style", "${_signalnoise}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_signalnoise}", "display", 'block', { fromValue: 'none'}], position: 7420, duration: 0 },
                { id: "eid103", tween: [ "style", "${_Text2}", "left", '208px', { fromValue: '208px'}], position: 19086, duration: 0 },
                { id: "eid74", tween: [ "transform", "${_a1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 15000, duration: 0 },
                { id: "eid52", tween: [ "style", "${_arrows}", "height", '14%', { fromValue: '0%'}], position: 10250, duration: 1500 },
                { id: "eid20", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 5580, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 7667, duration: 0 },
                { id: "eid6", tween: [ "style", "${__1}", "width", '75.56%', { fromValue: '0%'}], position: 545, duration: 2000 },
                { id: "eid54", tween: [ "style", "${_arrows}", "top", '372px', { fromValue: '484px'}], position: 10250, duration: 1500 },
                { id: "eid77", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid16", tween: [ "style", "${_noiseCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_noiseCopy}", "display", 'block', { fromValue: 'none'}], position: 5920, duration: 0 },
                { id: "eid32", tween: [ "style", "${_noiseCopy}", "display", 'none', { fromValue: 'block'}], position: 7420, duration: 0 },
                { id: "eid9", tween: [ "style", "${_noise}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_noise}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid95", tween: [ "style", "${_a1}", "width", '6.67%', { fromValue: '6.67%'}], position: 16500, duration: 0 },
                { id: "eid66", tween: [ "style", "${_a1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_a1}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid76", tween: [ "style", "${_a1}", "display", 'none', { fromValue: 'block'}], position: 16750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_a}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_a}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid18", tween: [ "style", "${_mma}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_mma}", "display", 'block', { fromValue: 'none'}], position: 5920, duration: 0 },
                { id: "eid33", tween: [ "style", "${_mma}", "display", 'none', { fromValue: 'block'}], position: 7420, duration: 0 },
                { id: "eid94", tween: [ "style", "${_a1}", "left", '397px', { fromValue: '397px'}], position: 15000, duration: 0 },
                { id: "eid72", tween: [ "style", "${_a1}", "top", '393px', { fromValue: '697px'}], position: 15000, duration: 1500 },
                { id: "eid96", tween: [ "style", "${_a2}", "left", '666px', { fromValue: '666px'}], position: 17250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-112431025");
