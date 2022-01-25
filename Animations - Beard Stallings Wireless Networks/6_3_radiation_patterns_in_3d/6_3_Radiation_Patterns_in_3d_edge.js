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
                id: 'figure_63',
                type: 'text',
                rect: ['92px', '420px','auto','auto','auto', 'auto'],
                text: "Figure 6.3 Radiation Patterns in Three Dimensions",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['116px', '402px','auto','auto','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: '_4',
                display: 'block',
                type: 'group',
                rect: ['19', '98','555','336','auto', 'auto'],
                c: [
                {
                    id: 'two',
                    type: 'image',
                    rect: ['200px', '119px','166px','120px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"zyDA.png",'0px','0px']
                },
                {
                    id: 'one',
                    type: 'image',
                    rect: ['0px', '119px','166px','120px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"xyDA.png",'0px','0px']
                },
                {
                    id: 'b_directed_antenna',
                    type: 'text',
                    rect: ['216px', '274px','auto','auto','auto', 'auto'],
                    text: "(b) Directed antenna",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'bsv-xy',
                    type: 'text',
                    rect: ['17px', '245px','auto','auto','auto', 'auto'],
                    text: "Side view (xy-plane)",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'bsv-zy',
                    type: 'text',
                    rect: ['217px', '245px','auto','auto','auto', 'auto'],
                    text: "Side view (zy-plane)",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'Text8',
                    display: 'none',
                    type: 'text',
                    rect: ['78px', '85px','auto','auto','auto', 'auto'],
                    text: "Different side views <br>depending on point <br>of observation.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: '_3',
                display: 'block',
                type: 'group',
                rect: ['422', '217','166','143','auto', 'auto'],
                c: [
                {
                    id: 'three',
                    type: 'image',
                    rect: ['0px', '0px','166px','120px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"zxDA.png",'0px','0px']
                },
                {
                    id: 'btv-xz',
                    type: 'text',
                    rect: ['15px', '126px','auto','auto','auto', 'auto'],
                    text: "Top view (xz-plane)",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'Text9',
                    display: 'none',
                    type: 'text',
                    rect: ['-37px', '48px','auto','auto','auto', 'auto'],
                    text: "No energy in <br>null directions.",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'Text6',
                    display: 'none',
                    type: 'text',
                    rect: ['16', '23px','auto','auto','auto', 'auto'],
                    text: "Sidelobes",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'Text5',
                    display: 'none',
                    type: 'text',
                    rect: ['105px', '85px','51px','31px','auto', 'auto'],
                    text: "\"Main lobe\".",
                    align: "center",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'Text4',
                    display: 'none',
                    type: 'text',
                    rect: ['-11px', '-47px','auto','auto','auto', 'auto'],
                    text: "Directional <br>antenna has<br>very different <br>geographic<br>coverage <br>area.",
                    align: "right",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: '_2',
                display: 'block',
                type: 'group',
                rect: ['420', '17','166','157','auto', 'auto'],
                c: [
                {
                    id: 'zxSD',
                    type: 'image',
                    rect: ['0px', '0px','166px','120px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"zxSD.png",'0px','0px']
                },
                {
                    id: 'atv-xz',
                    type: 'text',
                    rect: ['18px', '140px','auto','auto','auto', 'auto'],
                    text: "Top view (xz-plane)",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'Geographic_cov',
                    display: 'none',
                    type: 'text',
                    rect: ['20px', '103px','auto','auto','auto', 'auto'],
                    text: "Geographic <br>coverage<br>area is circular.",
                    align: "right",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: '_1',
                display: 'none',
                type: 'group',
                rect: ['219', '17','166','157','auto', 'auto'],
                c: [
                {
                    id: 'xySD',
                    type: 'image',
                    rect: ['-201px', '0px','166px','120px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"xySD.png",'0px','0px']
                },
                {
                    id: 'asv-xy',
                    type: 'text',
                    rect: ['-183px', '140px','auto','auto','auto', 'auto'],
                    text: "Side view (xy-plane)",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'zySD',
                    type: 'image',
                    rect: ['0px', '0px','166px','120px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"zySD.png",'0px','0px']
                },
                {
                    id: 'asv-zy',
                    type: 'text',
                    rect: ['18px', '140px','auto','auto','auto', 'auto'],
                    text: "Side view (zy-plane)",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'a_simple_dipole',
                    type: 'text',
                    rect: ['29px', '168px','auto','auto','auto', 'auto'],
                    text: "(a) Simple dipole",
                    font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
                },
                {
                    id: 'no_energy',
                    display: 'none',
                    type: 'text',
                    rect: ['-60px', '186px','auto','auto','auto', 'auto'],
                    text: "No energy is sent <br>directly vertically.",
                    align: "left",
                    font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_atv-xz}": [
                ["style", "top", '140px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '18px'],
                ["style", "font-size", '94%']
            ],
            "${_zySD}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_bsv-zy}": [
                ["style", "top", '245px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '217px'],
                ["style", "font-size", '94%']
            ],
            "${_Text5}": [
                ["style", "top", '85px'],
                ["style", "display", 'none'],
                ["style", "height", '31px'],
                ["style", "left", '105px'],
                ["style", "width", '51px']
            ],
            "${_bsv-xy}": [
                ["style", "top", '245px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '17px'],
                ["style", "font-size", '94%']
            ],
            "${_three}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '166px']
            ],
            "${_Geographic_cov}": [
                ["style", "top", '29px'],
                ["style", "text-align", 'right'],
                ["style", "display", 'none'],
                ["style", "left", '-65px'],
                ["style", "line-height", 'normal']
            ],
            "${_no_energy}": [
                ["style", "top", '-6px'],
                ["style", "left", '-106px'],
                ["style", "display", 'none']
            ],
            "${_b_directed_antenna}": [
                ["style", "top", '274px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '216px'],
                ["style", "font-size", '94%']
            ],
            "${_Text9}": [
                ["style", "line-height", '19px'],
                ["style", "display", 'none'],
                ["style", "left", '-37px'],
                ["style", "top", '46px']
            ],
            "${_figure_63}": [
                ["style", "top", '420px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '92px'],
                ["style", "font-size", '119%']
            ],
            "${_Text4}": [
                ["style", "top", '-51px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "text-align", 'right']
            ],
            "${_zxSD}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_asv-xy}": [
                ["style", "top", '140px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '-183px'],
                ["style", "font-size", '94%']
            ],
            "${__4}": [
                ["style", "top", '98px'],
                ["style", "display", 'block']
            ],
            "${_asv-zy}": [
                ["style", "top", '140px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '18px'],
                ["style", "font-size", '94%']
            ],
            "${__3}": [
                ["style", "display", 'block'],
                ["style", "top", '217px']
            ],
            "${_one}": [
                ["style", "left", '0px'],
                ["style", "top", '119px']
            ],
            "${__2}": [
                ["style", "display", 'block']
            ],
            "${_xySD}": [
                ["style", "left", '-201px'],
                ["style", "top", '0px']
            ],
            "${_Text6}": [
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "top", '24px']
            ],
            "${__1}": [
                ["style", "display", 'none']
            ],
            "${_Text}": [
                ["style", "top", '402px'],
                ["style", "font-weight", '700'],
                ["style", "text-align", 'center'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '116px'],
                ["style", "font-size", '94%']
            ],
            "${_two}": [
                ["style", "left", '200px'],
                ["style", "top", '119px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '600px'],
                ["style", "height", '450px'],
                ["style", "overflow", 'hidden']
            ],
            "${_a_simple_dipole}": [
                ["style", "top", '168px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '29px'],
                ["style", "font-size", '94%']
            ],
            "${_Text8}": [
                ["style", "top", '107px'],
                ["style", "left", '115px'],
                ["style", "display", 'none']
            ],
            "${_btv-xz}": [
                ["style", "top", '126px'],
                ["style", "font-family", '\'Times New Roman\', Times, serif'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '15px'],
                ["style", "font-size", '94%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid69", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid66", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid112", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid34", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid113", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid65", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid62", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid115", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid64", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid45", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid114", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Geographic_cov}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Geographic_cov}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Geographic_cov}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_no_energy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_no_energy}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid35", tween: [ "style", "${_no_energy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-261827846");
