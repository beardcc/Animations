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
                            id: 'signal-spec',
                            display: 'none',
                            type: 'image',
                            rect: ['97px', '69px', '1140px', '760px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"signal-spec.png",'0px','0px']
                        },
                        {
                            id: 'partb',
                            display: 'none',
                            type: 'image',
                            rect: ['1167px', '156px', '1344px', '904px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"partb.png",'0px','0px'],
                            transform: [[],[],[],['0.05952']]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['472px', '1987px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Figure 11.14 IEEE  802.11a Channel Scheme",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [563, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: '_11mhz',
                            display: 'none',
                            type: 'image',
                            rect: ['309px', '324px', '468px', '52', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11mhz.png",'0px','0px']
                        },
                        {
                            id: '_11mhz-top',
                            display: 'none',
                            type: 'image',
                            rect: ['314px', '333px', '468px', '124px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11mhz-top.png",'0px','0px'],
                            transform: [[],[],[],['0.02136']]
                        },
                        {
                            id: 'arrow2',
                            display: 'none',
                            type: 'image',
                            rect: ['966', '163', '88px', '480', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-120'],[],['1','0.0765']]
                        },
                        {
                            id: '_20mhz',
                            display: 'none',
                            type: 'image',
                            rect: ['173px', '948', '740px', '64', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"20mhz.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['1366', '184', 'auto', 'auto', 'auto', 'auto'],
                            text: "Down 20 dB at 11 MHz.",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'first',
                            display: 'none',
                            type: 'image',
                            rect: ['78px', '39px', '964px', '930px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"first.png",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: '_9mhz',
                            display: 'none',
                            type: 'image',
                            rect: ['333px', '923', '396px', '80', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"9mhz.png",'0px','0px']
                        },
                        {
                            id: 'arrow',
                            display: 'block',
                            type: 'image',
                            rect: ['856', '-16', '88px', '437', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-117'],[],['1','0.00928']]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['1115', '64', 'auto', 'auto', 'auto', 'auto'],
                            text: "No attenuation required in 9 MHz.",
                            font: ['Times New Roman, Times, serif', [375, "%"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: '_20mhz-top',
                            display: 'none',
                            type: 'image',
                            rect: ['178px', '336px', '740px', '176px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"20mhz-top.png",'0px','0px'],
                            transform: [[],[],[],['0.01621']]
                        },
                        {
                            id: 'arrow3',
                            display: 'none',
                            type: 'image',
                            rect: ['1026', '-10', '88px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-133'],[],['1','0.10473']]
                        },
                        {
                            id: 'arrow4',
                            display: 'none',
                            type: 'image',
                            rect: ['1110', '875', '88px', '336', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-54'],[],['1','0.19309']]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['1330', '1145', 'auto', 'auto', 'auto', 'auto'],
                            text: "Down 40 dB at 30 MHz.",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['1283', '113', 'auto', 'auto', 'auto', 'auto'],
                            text: "Down 28 dB at 20 MHz.",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'partc',
                            display: 'none',
                            type: 'image',
                            rect: ['389px', '1026px', '1768px', '920px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"partc.png",'0px','0px'],
                            transform: [[],[],[],['-0.01358']]
                        },
                        {
                            id: 'Text5',
                            display: 'block',
                            type: 'text',
                            rect: ['600px', '1901px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Click or Touch on Figure for Each Step of the Animation",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [375, "%"], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2600px', '2100px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 15250,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            10750,
                            0,
                            "linear",
                            "${arrow4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${arrow4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "height",
                            3250,
                            1000,
                            "linear",
                            "${_11mhz}",
                            '52px',
                            '552px'
                        ],
                        [
                            "eid61",
                            "top",
                            7000,
                            1000,
                            "linear",
                            "${_20mhz}",
                            '948px',
                            '333px'
                        ],
                        [
                            "eid55",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${_20mhz}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${arrow2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${arrow2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            13800,
                            0,
                            "linear",
                            "${partc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            11810,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${signal-spec}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            4250,
                            800,
                            "linear",
                            "${_11mhz-top}",
                            '0.02136',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            5250,
                            1000,
                            "linear",
                            "${arrow2}",
                            '0.0765',
                            '1.40027'
                        ],
                        [
                            "eid34",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${_11mhz}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1",
                            "display",
                            500,
                            0,
                            "linear",
                            "${first}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            750,
                            0,
                            "linear",
                            "${_9mhz}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "height",
                            7000,
                            1000,
                            "linear",
                            "${_20mhz}",
                            '64px',
                            '512px'
                        ],
                        [
                            "eid41",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${_11mhz-top}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            12750,
                            800,
                            "linear",
                            "${partb}",
                            '0.05952',
                            '1'
                        ],
                        [
                            "eid62",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${_20mhz-top}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            12750,
                            0,
                            "linear",
                            "${partb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            9000,
                            1000,
                            "linear",
                            "${arrow3}",
                            '0.10473',
                            '0.7636'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            8000,
                            800,
                            "linear",
                            "${_20mhz-top}",
                            '0.01621',
                            '1'
                        ],
                        [
                            "eid92",
                            "scaleX",
                            13800,
                            1000,
                            "linear",
                            "${partc}",
                            '-0.01358',
                            '1'
                        ],
                        [
                            "eid81",
                            "scaleY",
                            10750,
                            800,
                            "linear",
                            "${arrow4}",
                            '0.19309',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            2000,
                            500,
                            "linear",
                            "${arrow}",
                            '0.00928',
                            '1'
                        ],
                        [
                            "eid29",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${arrow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "top",
                            750,
                            1000,
                            "linear",
                            "${_9mhz}",
                            '923px',
                            '60px'
                        ],
                        [
                            "eid3",
                            "height",
                            750,
                            1000,
                            "linear",
                            "${_9mhz}",
                            '80px',
                            '776px'
                        ],
                        [
                            "eid71",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${arrow3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${arrow3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("11.14-ieee_802_11a_channel_scheme_edgeActions.js");
})("EDGE-83163368");
