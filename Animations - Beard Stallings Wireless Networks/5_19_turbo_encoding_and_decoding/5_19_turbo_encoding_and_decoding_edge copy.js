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
                id: 'puncture',
                display: 'block',
                type: 'image',
                rect: ['433px', '108px','27.2%','11.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"puncture.png",'0%','0%','177px','auto']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['443px', '193px','157px','auto','auto', 'auto'],
                text: "Then some bits are removed to reduce data rate.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'depuncture',
                display: 'block',
                type: 'image',
                rect: ['51px', '421px','40.2%','8.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"depuncture.png",'0%','0%','261px','auto']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['90px', '495px','158px','auto','auto', 'auto'],
                text: "At the receiver, random bits are added back into the data stream.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'decsai',
                display: 'block',
                type: 'image',
                rect: ['287px', '348px','252px','222px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"decsai.png",'0px','0px']
            },
            {
                id: 'kardec',
                display: 'block',
                type: 'image',
                rect: ['331px', '324px','253px','183px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"kardec.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['388px', '294px','242px','auto','auto', 'auto'],
                text: "Two of the streams are combined and decoded.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['549px', '411px','88px','auto','auto', 'auto'],
                text: "Results are shared between decoders and results are refined.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['406px', '574px','183px','auto','auto', 'auto'],
                text: "Another set of streams are combined by interleaving one and decoding other.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['133px', '105px','auto','18px','auto', 'auto'],
                text: "And the data is encoded.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'int-enc',
                display: 'block',
                type: 'image',
                rect: ['101px', '207px','46.3%','8.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"int-enc.png",'0%','0%','98.43%','auto']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['51px', '270px','228px','auto','auto', 'auto'],
                text: "And the same data is scrambled and encoded to put a third data stream into the multiplexer.<br>",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['420px', '42px','107px','38px','auto', 'auto'],
                text: "The streams are put together.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['155px', '715px','auto','auto','auto', 'auto'],
                text: "Figure 10.14 Turbo Encoing and Decoding",
                font: ['Times New Roman, Times, serif', 19, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['141px', '683px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'multiplexer',
                display: 'block',
                type: 'image',
                rect: ['369px', '54px','51px','216px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"multiplexer.png",'0px','0px']
            },
            {
                id: 'arrow-1',
                display: 'block',
                type: 'image',
                rect: ['40px', '56px','57.9%','7.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0%','0%','376px','auto']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['23px', '24px','auto','auto','auto', 'auto'],
                text: "Input data stream is put straight into the multiplexer.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 15, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'line-2',
                display: 'block',
                type: 'image',
                rect: ['72px', '77px','5.5%','11.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line-2.png",'0%','0%','36px','auto']
            },
            {
                id: 'encoder',
                display: 'block',
                type: 'image',
                rect: ['226px', '130px','26.6%','8.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"encoder.png",'0%','0%','100%','auto']
            },
            {
                id: 'mux-output',
                display: 'none',
                type: 'image',
                rect: ['406px', '88px','19.7%','11.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mux-output.png",'0%','0%','128px','auto']
            },
            {
                id: 'arrow-3',
                display: 'block',
                type: 'image',
                rect: ['86px', '141px','27.1%','5.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-3.png",'0%','0%','176px','41px']
            },
            {
                id: 'arrow-2',
                display: 'block',
                type: 'image',
                rect: ['51px', '164px','52.8%','11.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-2.png",'0%','0%','343px','89px']
            },
            {
                id: 'inter',
                display: 'block',
                type: 'image',
                rect: ['417px', '364px','124px','182px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"inter.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_puncture}": [
                ["style", "top", '108px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'block'],
                ["style", "background-size", [177,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '433px'],
                ["style", "width", '1.24%']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "top", '193px'],
                ["style", "left", '443px'],
                ["style", "width", '157px']
            ],
            "${_Text11}": [
                ["style", "display", 'block'],
                ["style", "top", '281px'],
                ["style", "left", '378px'],
                ["style", "width", '185px']
            ],
            "${_line-2}": [
                ["style", "top", '77px'],
                ["style", "height", '0.8%'],
                ["style", "background-size", [36,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '72px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "top", '270px'],
                ["style", "left", '51px'],
                ["style", "width", '228px']
            ],
            "${_arrow-2}": [
                ["style", "top", '164px'],
                ["style", "height", '0%'],
                ["style", "left", '51px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '683px'],
                ["style", "display", 'block'],
                ["style", "left", '141px'],
                ["style", "font-size", '15px']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "top", '495px'],
                ["style", "left", '90px'],
                ["style", "width", '158px']
            ],
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "top", '105px'],
                ["style", "left", '133px'],
                ["style", "height", '18px']
            ],
            "${_mux-output}": [
                ["style", "top", '88px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'none'],
                ["style", "background-size", [128,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '406px'],
                ["style", "width", '1.71%']
            ],
            "${_encoder}": [
                ["style", "top", '130px'],
                ["style", "left", '226px'],
                ["style", "display", 'block'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0.49%']
            ],
            "${_Text3}": [
                ["style", "top", '24px'],
                ["style", "left", '23px'],
                ["style", "display", 'block']
            ],
            "${_decsai}": [
                ["style", "top", '348px'],
                ["style", "left", '287px'],
                ["style", "display", 'block']
            ],
            "${_arrow-3}": [
                ["style", "display", 'block'],
                ["style", "top", '141px'],
                ["style", "left", '86px'],
                ["style", "width", '0%']
            ],
            "${_multiplexer}": [
                ["style", "top", '54px'],
                ["style", "left", '369px'],
                ["style", "display", 'block']
            ],
            "${_arrow-1}": [
                ["style", "top", '56px'],
                ["style", "left", '41px'],
                ["style", "display", 'block'],
                ["style", "background-size", [376,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0%']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "top", '411px'],
                ["style", "left", '549px'],
                ["style", "width", '88px']
            ],
            "${_Text6}": [
                ["style", "top", '42px'],
                ["style", "height", '38px'],
                ["style", "display", 'block'],
                ["style", "left", '420px'],
                ["style", "width", '107px']
            ],
            "${_kardec}": [
                ["style", "top", '324px'],
                ["style", "left", '331px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '715px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '155px'],
                ["style", "font-size", '19px']
            ],
            "${_inter}": [
                ["style", "top", '364px'],
                ["style", "left", '417px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '750px'],
                ["style", "width", '650px']
            ],
            "${_Text9}": [
                ["style", "display", 'block'],
                ["style", "top", '580px'],
                ["style", "left", '349px'],
                ["style", "width", '242px']
            ],
            "${_depuncture}": [
                ["style", "top", '420px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "display", 'block'],
                ["style", "background-size", [261,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "left", '51px'],
                ["style", "width", '0.93%']
            ],
            "${_int-enc}": [
                ["style", "top", '207px'],
                ["style", "left", '103px'],
                ["style", "display", 'block'],
                ["style", "background-size", [98.43,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "background-position", [0,50.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '1.08%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12750,
            autoPlay: true,
            timeline: [
                { id: "eid95", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid215", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 12297, duration: 0 },
                { id: "eid183", tween: [ "style", "${_mux-output}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid38", tween: [ "style", "${_encoder}", "width", '26.62%', { fromValue: '0.49%'}], position: 3540, duration: 1000 },
                { id: "eid26", tween: [ "style", "${_line-2}", "height", '11.47%', { fromValue: '0.8%'}], position: 1805, duration: 800 },
                { id: "eid66", tween: [ "style", "${_puncture}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_puncture}", "display", 'block', { fromValue: 'none'}], position: 8450, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 12565, duration: 0 },
                { id: "eid214", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 4809, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_mux-output}", "width", '19.7%', { fromValue: '1.71%'}], position: 7500, duration: 500 },
                { id: "eid56", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 7307, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
                { id: "eid240", tween: [ "style", "${_arrow-1}", "width", '57.86%', { fromValue: '0%'}], position: 375, duration: 1000 },
                { id: "eid271", tween: [ "style", "${_decsai}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid272", tween: [ "style", "${_decsai}", "display", 'block', { fromValue: 'none'}], position: 11328, duration: 0 },
                { id: "eid48", tween: [ "style", "${_int-enc}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_int-enc}", "display", 'block', { fromValue: 'none'}], position: 6070, duration: 0 },
                { id: "eid71", tween: [ "style", "${_puncture}", "width", '27.24%', { fromValue: '1.24%'}], position: 8450, duration: 1000 },
                { id: "eid251", tween: [ "style", "${_arrow-2}", "height", '11.87%', { fromValue: '0%'}], position: 5000, duration: 800 },
                { id: "eid147", tween: [ "style", "${_int-enc}", "width", '46.32%', { fromValue: '1.08%'}], position: 6070, duration: 1000 },
                { id: "eid20", tween: [ "style", "${_line-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_line-2}", "display", 'block', { fromValue: 'none'}], position: 1805, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0 },
                { id: "eid244", tween: [ "style", "${_arrow-3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "style", "${_arrow-3}", "display", 'block', { fromValue: 'none'}], position: 2670, duration: 0 },
                { id: "eid33", tween: [ "style", "${_encoder}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_encoder}", "display", 'block', { fromValue: 'none'}], position: 3540, duration: 0 },
                { id: "eid217", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0 },
                { id: "eid219", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 8450, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 11112, duration: 0 },
                { id: "eid212", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 11328, duration: 0 },
                { id: "eid87", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 11551, duration: 0 },
                { id: "eid213", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 12297, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1595, duration: 0 },
                { id: "eid102", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1805, duration: 0 },
                { id: "eid211", tween: [ "style", "${_depuncture}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 9879, duration: 1000 },
                { id: "eid75", tween: [ "style", "${_depuncture}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_depuncture}", "display", 'block', { fromValue: 'none'}], position: 9879, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 9685, duration: 0 },
                { id: "eid207", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 9879, duration: 0 },
                { id: "eid1", tween: [ "style", "${_multiplexer}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_multiplexer}", "display", 'block', { fromValue: 'none'}], position: 175, duration: 0 },
                { id: "eid136", tween: [ "style", "${_encoder}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3540, duration: 0 },
                { id: "eid248", tween: [ "style", "${_arrow-2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid249", tween: [ "style", "${_arrow-2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_arrow-1}", "display", 'block', { fromValue: 'none'}], position: 375, duration: 0 },
                { id: "eid81", tween: [ "style", "${_depuncture}", "width", '40.16%', { fromValue: '0.93%'}], position: 9879, duration: 1000 },
                { id: "eid198", tween: [ "style", "${_puncture}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 8450, duration: 0 },
                { id: "eid273", tween: [ "style", "${_kardec}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid274", tween: [ "style", "${_kardec}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid254", tween: [ "style", "${_inter}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid255", tween: [ "style", "${_inter}", "display", 'block', { fromValue: 'none'}], position: 12297, duration: 0 },
                { id: "eid247", tween: [ "style", "${_arrow-3}", "width", '27.08%', { fromValue: '0%'}], position: 2670, duration: 700 }            ]
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
})(jQuery, AdobeEdge, "EDGE-79350291");
