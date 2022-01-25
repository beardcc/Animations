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
                id: 'packetCopy4',
                display: 'block',
                type: 'image',
                rect: ['48px', '97px','107px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'timeline',
                display: 'block',
                type: 'image',
                rect: ['-3px', '62px','555px','194px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"timeline.png",'0px','0px']
            },
            {
                id: 'arrow',
                display: 'block',
                type: 'image',
                rect: ['89px', '125px','28px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'arrowCopy',
                display: 'block',
                type: 'image',
                rect: ['89px', '125px','28px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
            },
            {
                id: 'packet',
                display: 'block',
                type: 'image',
                rect: ['48px', '97px','107px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['34px', '20px','211px','auto','auto', 'auto'],
                text: "Master sends the slave a packet in the time slot 'k' using the frequency f(k).",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'packetCopy5',
                display: 'block',
                type: 'image',
                rect: ['191px', '187px','107px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'up-arrow2',
                display: 'block',
                type: 'image',
                rect: ['233px', '126px','28px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"up-arrow.png",'0px','0px']
            },
            {
                id: 'packetCopy2',
                display: 'block',
                type: 'image',
                rect: ['335px', '97px','107px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'packetCopy6',
                display: 'block',
                type: 'image',
                rect: ['335px', '97px','107px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['112px', '75px','auto','15px','auto', 'auto'],
                text: "f(k)<br><br><br><br>",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['248px', '75px','auto','auto','auto', 'auto'],
                text: "f(k+1)",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['391px', '75px','auto','auto','auto', 'auto'],
                text: "f(k+2)",
                align: "left",
                font: ['Georgia, \'Times New Roman\', Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['79px', '321px','auto','38px','auto', 'auto'],
                text: "Figure 12.4 Frequency-Hop Time-Division Duplex",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['111px', '294px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'packetCopy',
                display: 'block',
                type: 'image',
                rect: ['191px', '187px','107px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"packet.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['191px', '12px','229px','auto','auto', 'auto'],
                text: "The slave responds in time slot<br>'k+1' using the next frequency<br>f(k+1).",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['361px', '9px','174px','auto','auto', 'auto'],
                text: "The Master sends the next packet to a different slave on frequency<br>'f(k+2).'",
                align: "left",
                font: ['Times New Roman, Times, serif', [75, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'sample-with-packets',
                display: 'block',
                type: 'image',
                rect: ['-2px', '74px','554px','172px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sample-with-packets.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_up-arrow2}": [
                ["style", "top", '126px'],
                ["style", "left", '233px'],
                ["style", "display", 'block']
            ],
            "${_packetCopy5}": [
                ["style", "top", '187px'],
                ["style", "left", '191px'],
                ["style", "display", 'block']
            ],
            "${_packetCopy4}": [
                ["style", "top", '97px'],
                ["style", "left", '48px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '75px'],
                ["style", "display", 'block'],
                ["style", "height", '15px'],
                ["style", "left", '112px'],
                ["style", "font-size", '75%']
            ],
            "${_Text2}": [
                ["style", "top", '296px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '96px'],
                ["style", "font-size", '94%']
            ],
            "${_packetCopy}": [
                ["style", "top", '187px'],
                ["style", "left", '191px'],
                ["style", "display", 'block']
            ],
            "${_packetCopy2}": [
                ["style", "top", '97px'],
                ["style", "left", '335px'],
                ["style", "display", 'block']
            ],
            "${_sample-with-packets}": [
                ["style", "top", '74px'],
                ["style", "left", '-2px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '75px'],
                ["style", "left", '248px'],
                ["style", "display", 'block']
            ],
            "${_packetCopy6}": [
                ["style", "top", '97px'],
                ["style", "left", '335px'],
                ["style", "display", 'block']
            ],
            "${_timeline}": [
                ["style", "top", '62px'],
                ["style", "left", '-3px'],
                ["style", "display", 'block']
            ],
            "${_arrow}": [
                ["style", "top", '125px'],
                ["style", "left", '89px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '8px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '36px'],
                ["style", "width", '211px']
            ],
            "${_packet}": [
                ["style", "top", '97px'],
                ["style", "left", '48px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '321px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '38px'],
                ["style", "font-weight", '700'],
                ["style", "left", '79px'],
                ["style", "font-size", '119%']
            ],
            "${_arrowCopy}": [
                ["style", "top", '126px'],
                ["style", "left", '377px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '350px'],
                ["style", "width", '550px']
            ],
            "${_Text7}": [
                ["style", "top", '12px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '191px'],
                ["style", "width", '229px']
            ],
            "${_Text5}": [
                ["style", "top", '75px'],
                ["style", "left", '391px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '3px'],
                ["style", "font-size", '94%'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '343px'],
                ["style", "width", '174px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9364,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "style", "${_up-arrow2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_up-arrow2}", "display", 'block', { fromValue: 'none'}], position: 3628, duration: 0 },
                { id: "eid5", tween: [ "style", "${_arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_arrow}", "display", 'block', { fromValue: 'none'}], position: 830, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Text6}", "font-size", '94%', { fromValue: '15px'}], position: 2250, duration: 0 },
                { id: "eid19", tween: [ "style", "${_packetCopy4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_packetCopy4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid21", tween: [ "style", "${_packetCopy4}", "display", 'none', { fromValue: 'block'}], position: 1125, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Text8}", "font-size", '94%', { fromValue: '15px'}], position: 8250, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Text7}", "font-size", '94%', { fromValue: '15px'}], position: 5621, duration: 0 },
                { id: "eid12", tween: [ "style", "${_packet}", "top", '187px', { fromValue: '97px'}], position: 1125, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_arrowCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_arrowCopy}", "display", 'block', { fromValue: 'none'}], position: 6639, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 2125, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 9364, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text8}", "top", '3px', { fromValue: '3px'}], position: 8250, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 9364, duration: 0 },
                { id: "eid108", tween: [ "style", "${_Text8}", "left", '343px', { fromValue: '343px'}], position: 8250, duration: 0 },
                { id: "eid68", tween: [ "style", "${_packetCopy2}", "top", '187px', { fromValue: '97px'}], position: 7250, duration: 1000 },
                { id: "eid70", tween: [ "style", "${_packetCopy2}", "top", '187px', { fromValue: '187px'}], position: 8250, duration: 0 },
                { id: "eid103", tween: [ "style", "${_Text2}", "left", '96px', { fromValue: '96px'}], position: 9250, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5894, duration: 0 },
                { id: "eid56", tween: [ "style", "${_packetCopy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_packetCopy2}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid80", tween: [ "style", "${_packetCopy2}", "display", 'none', { fromValue: 'block'}], position: 9364, duration: 0 },
                { id: "eid23", tween: [ "style", "${_packetCopy5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_packetCopy5}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid27", tween: [ "style", "${_packetCopy5}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 },
                { id: "eid39", tween: [ "style", "${_packetCopy6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_packetCopy6}", "display", 'block', { fromValue: 'none'}], position: 5894, duration: 0 },
                { id: "eid58", tween: [ "style", "${_packetCopy6}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
                { id: "eid1", tween: [ "style", "${_timeline}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_timeline}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 5894, duration: 0 },
                { id: "eid93", tween: [ "style", "${_sample-with-packets}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_sample-with-packets}", "display", 'block', { fromValue: 'none'}], position: 9364, duration: 0 },
                { id: "eid41", tween: [ "style", "${_packetCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_packetCopy}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid83", tween: [ "style", "${_packetCopy}", "display", 'none', { fromValue: 'block'}], position: 9364, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Text2}", "top", '296px', { fromValue: '296px'}], position: 9250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_packet}", "display", 'block', { fromValue: 'none'}], position: 1125, duration: 0 },
                { id: "eid79", tween: [ "style", "${_packet}", "display", 'none', { fromValue: 'block'}], position: 9364, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Text6}", "top", '8px', { fromValue: '8px'}], position: 2250, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Text6}", "left", '36px', { fromValue: '36px'}], position: 2250, duration: 0 },
                { id: "eid36", tween: [ "style", "${_packetCopy}", "top", '96px', { fromValue: '187px'}], position: 4250, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-168832302");
