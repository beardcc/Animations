/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'BGM',
                            type: 'image',
                            rect: ['12', '15', '508px', '459px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BGM.png",'0px','0px']
                        },
                        {
                            id: '_1ar',
                            display: 'block',
                            type: 'image',
                            rect: ['53px', '24px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1ar.png",'0%','0%','461px','145px', 'no-repeat']
                        },
                        {
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['81', '-1px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Large input signal",
                            font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: '_1ab',
                            display: 'block',
                            type: 'image',
                            rect: ['52px', '84px', '0%', '13.4%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1ab.png",'0%','0%','462px','25px', 'no-repeat']
                        },
                        {
                            id: 'Text3',
                            display: 'block',
                            type: 'text',
                            rect: ['335px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Small input signal",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", ""]
                        },
                        {
                            id: '_2ar',
                            display: 'block',
                            type: 'image',
                            rect: ['52px', '305px', '0%', '17.9%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2ar.png",'0%','0%','462px','76px', 'no-repeat']
                        },
                        {
                            id: 'Text2',
                            display: 'block',
                            type: 'text',
                            rect: ['69', '233px', '451', '25px', 'auto', 'auto'],
                            text: "The larger input signal is amplified with clipping from non-linear distortion.",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", ""]
                        },
                        {
                            id: '_2bb',
                            display: 'block',
                            type: 'image',
                            rect: ['53px', '322px', '0%', '17.9%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2bb.png",'0%','0%','462px','42px', 'no-repeat']
                        },
                        {
                            id: 'Text4',
                            display: 'block',
                            type: 'text',
                            rect: ['87px', '236px', 'auto', 'auto', 'auto', 'auto'],
                            text: "The smaller input signal is amplified with no distortion.",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'arrow22',
                            display: 'block',
                            type: 'image',
                            rect: ['113px', '252px', '10px', '97', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0px','0px'],
                            transform: [[],['158']]
                        },
                        {
                            id: 'Text5',
                            display: 'block',
                            type: 'text',
                            rect: ['90', '497', '389', '25px', 'auto', 'auto'],
                            text: "Click or Touch on Figure for Each Step of the Animation",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['13', '527', '561', '25px', 'auto', 'auto'],
                            text: "Figure 8.6 Examples of Linear and Non-Linear Amplifier Output",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'arrow2',
                            display: 'block',
                            type: 'image',
                            rect: ['394', '19px', '10px', '84px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0px','0px'],
                            transform: [[],['180']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550', '570', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 9367,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "width",
                            7209,
                            1500,
                            "linear",
                            "${_2bb}",
                            '0%',
                            '87.28%'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${arrow2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            6440,
                            0,
                            "linear",
                            "${arrow2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${arrow2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "width",
                            250,
                            1500,
                            "linear",
                            "${_1ar}",
                            '0%',
                            '100%'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2ar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${_2ar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "width",
                            8340,
                            0,
                            "linear",
                            "${Text2}",
                            '451px',
                            '451px'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            6295,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "linear",
                            "${arrow22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            8865,
                            0,
                            "linear",
                            "${arrow22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${arrow22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "width",
                            2500,
                            1500,
                            "linear",
                            "${_2ar}",
                            '0%',
                            '87.28%'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1ab}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${_1ab}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "top",
                            8340,
                            0,
                            "linear",
                            "${Text2}",
                            '233px',
                            '233px'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            1825,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            9367,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "width",
                            4750,
                            1500,
                            "linear",
                            "${_1ab}",
                            '0%',
                            '87.28%'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2bb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            7209,
                            0,
                            "linear",
                            "${_2bb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            4065,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1ar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            250,
                            0,
                            "linear",
                            "${_1ar}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("8_6_examples_of_linear_and_nonlinear_amplifier_output_edgeActions.js");
})("EDGE-10509993");
