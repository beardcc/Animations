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
                id: 'plot',
                display: 'block',
                type: 'image',
                rect: ['392px', '252px','2448px','1848px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"plot.png",'0px','0px']
            },
            {
                id: 'geoalt',
                display: 'block',
                type: 'image',
                rect: ['1993px', '385px','9.9%','61%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"geoalt.png",'0%','0%','316px','1524px']
            },
            {
                id: 'cvrgmask',
                display: 'block',
                type: 'image',
                rect: ['2512px', '180px','416px','1788px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cvrgmask.png",'0px','0px']
            },
            {
                id: 'geoalttxt',
                display: 'block',
                type: 'image',
                rect: ['1519px', '185px','680px','252px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"geoalttxt.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['574px', '180px','auto','auto','auto', 'auto'],
                text: "Period = Time to orbit the planet",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'delay',
                display: 'block',
                type: 'image',
                rect: ['513px', '445px','53.1%','54.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"delay.png",'0%','0%','1700px','1372px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['568px', '159px','auto','auto','auto', 'auto'],
                text: "Delay = One-way propagation delay",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'coverage',
                display: 'block',
                type: 'image',
                rect: ['457px', '356px','57.9%','55.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"coverage.png",'0%','0%','1852px','1384px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['574px', '180px','auto','auto','auto', 'auto'],
                text: "Coverage = Area of the earth’s surface covered",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'cvrgtxt',
                display: 'block',
                type: 'image',
                rect: ['1214px', '752px','212px','268px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cvrgtxt.png",'0px','0px']
            },
            {
                id: 'delay-txt',
                display: 'block',
                type: 'image',
                rect: ['1695px', '1302px','316px','268px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"delay-txt.png",'0px','0px']
            },
            {
                id: 'periodtxt',
                display: 'block',
                type: 'image',
                rect: ['1682px', '1004px','212px','268px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"periodtxt.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['568px', '2241px','auto','auto','auto', 'auto'],
                text: "Figure 16.2 Satellite Parameters as a Function of Orbital Height",
                align: "left",
                font: ['Times New Roman, Times, serif', [475, "%"], "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arrw',
                display: 'block',
                type: 'image',
                rect: ['2006px', '1796px','316px','268px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrw.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['1886px', '2008px','598px','128px','auto', 'auto'],
                text: "35863 km Geostationary altitude",
                align: "center",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['897px', '2156px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'period',
                display: 'block',
                type: 'image',
                rect: ['504px', '437px','53.1%','54.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"period.png",'0%','0%','1700px','1372px']
            },
            {
                id: 'delaymsk',
                display: 'block',
                type: 'image',
                rect: ['2242px', '180px','416px','1788px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"delaymsk.png",'0px','0px']
            },
            {
                id: 'prdmask',
                display: 'block',
                type: 'image',
                rect: ['232px', '180px','416px','1788px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"prdmask.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "height", '152px'],
                ["style", "top", '159px'],
                ["style", "width", '772px']
            ],
            "${_Text3}": [
                ["style", "top", '2156px'],
                ["style", "display", 'block'],
                ["style", "font-size", '375%'],
                ["style", "left", '897px'],
                ["style", "width", '1570px']
            ],
            "${_Text2}": [
                ["style", "top", '2241px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '568px'],
                ["style", "font-size", '500%']
            ],
            "${_geoalttxt}": [
                ["style", "top", '185px'],
                ["style", "left", '1519px'],
                ["style", "display", 'block']
            ],
            "${_periodtxt}": [
                ["style", "top", '1004px'],
                ["style", "left", '1682px'],
                ["style", "display", 'block']
            ],
            "${_geoalt}": [
                ["style", "top", '1909px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '2000px'],
                ["style", "height", '0%']
            ],
            "${_Text4}": [
                ["style", "top", '2008px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "width", '598px'],
                ["style", "left", '1886px'],
                ["style", "font-size", '375%']
            ],
            "${_prdmask}": [
                ["style", "display", 'block'],
                ["style", "left", '232px'],
                ["style", "top", '180px']
            ],
            "${_cvrgmask}": [
                ["style", "top", '180px'],
                ["style", "left", '2512px'],
                ["style", "display", 'block']
            ],
            "${_cvrgtxt}": [
                ["style", "top", '752px'],
                ["style", "left", '1214px'],
                ["style", "display", 'block']
            ],
            "${_arrw}": [
                ["style", "top", '1796px'],
                ["style", "left", '2006px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "top", '180px'],
                ["style", "text-align", 'left'],
                ["style", "height", '188px'],
                ["style", "display", 'block'],
                ["style", "left", '574px'],
                ["style", "width", '598px']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '180px'],
                ["style", "left", '574px'],
                ["style", "width", '640px']
            ],
            "${_delay-txt}": [
                ["style", "top", '1302px'],
                ["style", "left", '1695px'],
                ["style", "display", 'block']
            ],
            "${_delay}": [
                ["style", "top", '445px'],
                ["style", "height", '58.46%'],
                ["style", "display", 'block'],
                ["style", "left", '513px'],
                ["style", "width", '0%']
            ],
            "${_delaymsk}": [
                ["style", "top", '180px'],
                ["style", "left", '2242px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2400px'],
                ["style", "width", '3200px']
            ],
            "${_plot}": [
                ["style", "top", '252px'],
                ["style", "left", '392px'],
                ["style", "display", 'block']
            ],
            "${_coverage}": [
                ["style", "display", 'block'],
                ["style", "top", '356px'],
                ["style", "left", '457px'],
                ["style", "width", '0%']
            ],
            "${_period}": [
                ["style", "top", '427px'],
                ["style", "height", '57.96%'],
                ["style", "display", 'block'],
                ["style", "left", '518px'],
                ["style", "width", '0%']
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
                { id: "eid75", tween: [ "style", "${_Text7}", "width", '772px', { fromValue: '772px'}], position: 8905, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text6}", "width", '640px', { fromValue: '640px'}], position: 6500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_period}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_period}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text5}", "width", '598px', { fromValue: '598px'}], position: 4250, duration: 0 },
                { id: "eid7", tween: [ "style", "${_geoalt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_geoalt}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid28", tween: [ "style", "${_geoalttxt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_geoalttxt}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid44", tween: [ "style", "${_period}", "width", '53.13%', { fromValue: '0%'}], position: 4750, duration: 1500 },
                { id: "eid71", tween: [ "style", "${_prdmask}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0 },
                { id: "eid62", tween: [ "style", "${_period}", "height", '57.96%', { fromValue: '57.96%'}], position: 6675, duration: 0 },
                { id: "eid32", tween: [ "style", "${_coverage}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_coverage}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid65", tween: [ "style", "${_delay}", "height", '58.46%', { fromValue: '58.46%'}], position: 8000, duration: 0 },
                { id: "eid1", tween: [ "style", "${_plot}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_plot}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid72", tween: [ "style", "${_delaymsk}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid39", tween: [ "style", "${_periodtxt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_periodtxt}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid22", tween: [ "style", "${_geoalt}", "height", '60.96%', { fromValue: '0%'}], position: 750, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid68", tween: [ "style", "${_geoalt}", "left", '2000px', { fromValue: '2000px'}], position: 8500, duration: 0 },
                { id: "eid3", tween: [ "style", "${_arrw}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrw}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid27", tween: [ "style", "${_arrw}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid48", tween: [ "style", "${_delay-txt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_delay-txt}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_geoalt}", "top", '385px', { fromValue: '1909px'}], position: 750, duration: 1000 },
                { id: "eid59", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
                { id: "eid55", tween: [ "style", "${_delay}", "width", '35.41%', { fromValue: '0%'}], position: 7000, duration: 1000 },
                { id: "eid66", tween: [ "style", "${_delay}", "width", '53.13%', { fromValue: '35.41%'}], position: 8000, duration: 500 },
                { id: "eid50", tween: [ "style", "${_delay}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_delay}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_cvrgtxt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_cvrgtxt}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid25", tween: [ "transform", "${_geoalt}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 750, duration: 0 },
                { id: "eid70", tween: [ "style", "${_cvrgmask}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_coverage}", "width", '57.88%', { fromValue: '0%'}], position: 2500, duration: 1500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-471509787");
