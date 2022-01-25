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
                id: 'blue-back',
                display: 'block',
                type: 'image',
                rect: ['147px', '137px','405px','172px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue-back.png",'0px','0px']
            },
            {
                id: 'm-rows',
                display: 'block',
                type: 'image',
                rect: ['542px', '130px','61px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m-rows.png",'0px','0px']
            },
            {
                id: 'data-and-check-bits',
                display: 'block',
                type: 'image',
                rect: ['148px', '294px','415px','55px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"data-and-check-bits.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['197px', '444px','auto','auto','auto', 'auto'],
                text: "Figure 10.9 Block Interleaving",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['141px', '442px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'labelone',
                display: 'block',
                type: 'image',
                rect: ['33px', '179px','85px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"labelone.png",'0px','0px']
            },
            {
                id: 'arrow-1',
                display: 'block',
                type: 'image',
                rect: ['126px', '142px','38px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow-1.png",'0px','0px']
            },
            {
                id: 'first-column',
                type: 'image',
                rect: ['617px', '273px','66px','178px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-column.png",'0px','0px']
            },
            {
                id: 'first-row2',
                display: 'block',
                type: 'image',
                rect: ['164px', '140px','57.2%','7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"first-row2.png",'0%','0%','372px','35px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['22px', '102px','119px','auto','auto', 'auto'],
                text: "Read the first packet into the top row.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'rest-of-the-m-packet',
                display: 'block',
                type: 'image',
                rect: ['103px', '149px','71.1%','34%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rest-of-the-m-packet.png",'0%','0%','462px','170px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['22px', '333px','167px','auto','auto', 'auto'],
                text: "Then read each of the <i>m</i> packets into each row.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'mn',
                display: 'block',
                type: 'image',
                rect: ['491px', '274px','61px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mn.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['477px', '344px','150px','auto','auto', 'auto'],
                text: "There is a time delay to fill all <i>mn</i> bits from the <i>m</i> packets.",
                align: "justify",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'coming-out-arrow',
                display: 'block',
                type: 'image',
                rect: ['160px', '105px','7.1%','10.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"coming-out-arrow.png",'0%','0%','46px','51px']
            },
            {
                id: 'Untitled-1',
                display: 'block',
                type: 'image',
                rect: ['142px', '132px','74px','189px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['76px', '57px','156px','auto','auto', 'auto'],
                text: "Read out the first bits of each packet from the first column.",
                align: "justify",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'labelfour',
                display: 'block',
                type: 'image',
                rect: ['273px', '57px','156px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"labelfour.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['200px', '345px','275px','auto','auto', 'auto'],
                text: "Note: The numbers in the matrix indicate the order in which the bits are read in.<br>Interleaver output sequence : 1, n+1, <br>2n+1,.....",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'all-arrows-out',
                display: 'block',
                type: 'image',
                rect: ['208px', '101px','50.3%','11%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"all-arrows-out.png",'0%','0%','327px','55px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['451px', '70px','182px','auto','auto', 'auto'],
                text: "Then read out the rest, column-by-column.",
                align: "justify",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_mn}": [
                ["style", "top", '274px'],
                ["style", "left", '-51px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "top", '57px'],
                ["style", "display", 'block'],
                ["style", "left", '76px'],
                ["style", "width", '156px']
            ],
            "${_Text3}": [
                ["style", "top", '102px'],
                ["style", "display", 'block'],
                ["style", "left", '22px'],
                ["style", "width", '119px']
            ],
            "${_Text5}": [
                ["style", "top", '332px'],
                ["style", "display", 'block'],
                ["style", "left", '15px'],
                ["style", "width", '167px']
            ],
            "${_coming-out-arrow}": [
                ["style", "top", '156px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '160px'],
                ["style", "height", '0%']
            ],
            "${_data-and-check-bits}": [
                ["style", "top", '294px'],
                ["style", "left", '148px'],
                ["style", "display", 'block']
            ],
            "${_blue-back}": [
                ["style", "top", '137px'],
                ["style", "left", '147px'],
                ["style", "display", 'block']
            ],
            "${_first-column}": [
                ["style", "left", '617px'],
                ["style", "top", '273px']
            ],
            "${_Text9}": [
                ["style", "top", '345px'],
                ["style", "display", 'block'],
                ["style", "left", '200px'],
                ["style", "width", '275px']
            ],
            "${_labelfour}": [
                ["style", "top", '54px'],
                ["style", "left", '272px'],
                ["style", "display", 'block']
            ],
            "${_rest-of-the-m-packet}": [
                ["style", "top", '149px'],
                ["style", "display", 'block'],
                ["style", "left", '103px'],
                ["style", "width", '0%']
            ],
            "${_Text8}": [
                ["style", "top", '70px'],
                ["style", "display", 'block'],
                ["style", "left", '451px'],
                ["style", "width", '182px']
            ],
            "${_arrow-1}": [
                ["style", "top", '142px'],
                ["style", "left", '-41px'],
                ["style", "display", 'block']
            ],
            "${_m-rows}": [
                ["style", "top", '130px'],
                ["style", "left", '542px'],
                ["style", "display", 'block']
            ],
            "${_Text6}": [
                ["style", "top", '344px'],
                ["style", "text-align", 'justify'],
                ["style", "display", 'block'],
                ["style", "left", '493px'],
                ["style", "width", '150px']
            ],
            "${_labelone}": [
                ["style", "top", '179px'],
                ["style", "left", '33px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '444px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '197px'],
                ["style", "font-size", '119%']
            ],
            "${_Text2}": [
                ["style", "top", '423px'],
                ["style", "display", 'block'],
                ["style", "left", '141px'],
                ["style", "font-size", '94%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '480px'],
                ["style", "width", '650px']
            ],
            "${_first-row2}": [
                ["style", "top", '140px'],
                ["style", "display", 'block'],
                ["style", "left", '164px'],
                ["style", "width", '0%']
            ],
            "${_Untitled-1}": [
                ["style", "top", '132px'],
                ["style", "display", 'block'],
                ["style", "left", '142px'],
                ["style", "width", '74px']
            ],
            "${_all-arrows-out}": [
                ["style", "top", '156px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '208px'],
                ["style", "height", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10402,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "style", "${_first-row2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_first-row2}", "display", 'block', { fromValue: 'none'}], position: 2160, duration: 0 },
                { id: "eid9", tween: [ "style", "${_arrow-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_arrow-1}", "display", 'block', { fromValue: 'none'}], position: 905, duration: 0 },
                { id: "eid58", tween: [ "style", "${_all-arrows-out}", "height", '11%', { fromValue: '0%'}], position: 8945, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_labelone}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_labelone}", "display", 'block', { fromValue: 'none'}], position: 660, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text2}", "top", '423px', { fromValue: '423px'}], position: 10304, duration: 0 },
                { id: "eid45", tween: [ "transform", "${_coming-out-arrow}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 7113, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 10402, duration: 0 },
                { id: "eid30", tween: [ "style", "${_mn}", "left", '491px', { fromValue: '-51px'}], position: 5606, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6892, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 7113, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 10215, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 10402, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 10402, duration: 0 },
                { id: "eid27", tween: [ "style", "${_mn}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_mn}", "display", 'block', { fromValue: 'none'}], position: 5606, duration: 0 },
                { id: "eid33", tween: [ "style", "${_coming-out-arrow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_coming-out-arrow}", "display", 'block', { fromValue: 'none'}], position: 7113, duration: 0 },
                { id: "eid44", tween: [ "style", "${_coming-out-arrow}", "top", '105px', { fromValue: '156px'}], position: 7113, duration: 800 },
                { id: "eid16", tween: [ "style", "${_first-row2}", "width", '57.24%', { fromValue: '0%'}], position: 2160, duration: 1000 },
                { id: "eid54", tween: [ "style", "${_all-arrows-out}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_all-arrows-out}", "display", 'block', { fromValue: 'none'}], position: 8945, duration: 0 },
                { id: "eid3", tween: [ "style", "${_data-and-check-bits}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_data-and-check-bits}", "display", 'block', { fromValue: 'none'}], position: 405, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3420, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3627, duration: 0 },
                { id: "eid1", tween: [ "style", "${_blue-back}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_blue-back}", "display", 'block', { fromValue: 'none'}], position: 195, duration: 0 },
                { id: "eid61", tween: [ "transform", "${_all-arrows-out}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 8945, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8945, duration: 0 },
                { id: "eid48", tween: [ "style", "${_labelfour}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_labelfour}", "display", 'block', { fromValue: 'none'}], position: 8214, duration: 0 },
                { id: "eid5", tween: [ "style", "${_m-rows}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_m-rows}", "display", 'block', { fromValue: 'none'}], position: 405, duration: 0 },
                { id: "eid12", tween: [ "style", "${_arrow-1}", "left", '126px', { fromValue: '-41px'}], position: 905, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_rest-of-the-m-packet}", "width", '71.08%', { fromValue: '0%'}], position: 3627, duration: 1500 },
                { id: "eid42", tween: [ "style", "${_coming-out-arrow}", "height", '10.2%', { fromValue: '0%'}], position: 7113, duration: 800 },
                { id: "eid23", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5405, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5606, duration: 0 },
                { id: "eid19", tween: [ "style", "${_rest-of-the-m-packet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_rest-of-the-m-packet}", "display", 'block', { fromValue: 'none'}], position: 3627, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Untitled-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Untitled-1}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Untitled-1}", "display", 'none', { fromValue: 'block'}], position: 8945, duration: 0 },
                { id: "eid60", tween: [ "style", "${_all-arrows-out}", "top", '101px', { fromValue: '156px'}], position: 8945, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-351535020");
