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
                id: 'sigma',
                display: 'block',
                type: 'image',
                rect: ['497px', '249px','66px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sigma.png",'0px','0px']
            },
            {
                id: 'eo',
                type: 'image',
                rect: ['554px', '242px','8.5%','7.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"eo.png",'0%','0%','55px','44px']
            },
            {
                id: '_6a',
                type: 'image',
                rect: ['575px', '277px','2.6%','25.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6a.png",'0%','0%','17px','152px']
            },
            {
                id: '_6b',
                type: 'image',
                rect: ['330px', '418px','37.9%','2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6b.png",'0%','0%','246px','12px'],
                transform: [[],['180']]
            },
            {
                id: '_5b',
                type: 'image',
                rect: ['460px', '252px','6.6%','1.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5b.png",'0%','0%','43px','11px']
            },
            {
                id: '_4a',
                type: 'image',
                rect: ['358px', '227px','1.7%','8.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4a.png",'0%','0%','11px','49px']
            },
            {
                id: '_4b',
                type: 'image',
                rect: ['369px', '255px','20.8%','3.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4b.png",'0%','0%','135px','21px']
            },
            {
                id: '_5a',
                type: 'image',
                rect: ['454px', '227px','1.1%','5.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5a.png",'0%','0%','7px','34px']
            },
            {
                id: '_1a2',
                type: 'image',
                rect: ['61px', '215px','4%','16.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1a.png",'0%','0%','26px','99px']
            },
            {
                id: '_1b',
                type: 'image',
                rect: ['87px', '279px','63.7%','5.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1b.png",'0%','0%','414px','35px']
            },
            {
                id: '_2a',
                type: 'image',
                rect: ['181px', '228px','2.9%','13.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2a.png",'0%','0%','19px','81px']
            },
            {
                id: '_2b',
                type: 'image',
                rect: ['200px', '274px','47.4%','5.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2b.png",'0%','0%','308px','35px']
            },
            {
                id: '_3a',
                type: 'image',
                rect: ['276px', '222px','1.1%','13.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3a.png",'0%','0%','7px','81px']
            },
            {
                id: '_3b',
                type: 'image',
                rect: ['282px', '251px','34.2%','8.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3b.png",'0%','0%','222px','51px']
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['12px', '42px','71.5%','12.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0%','0%','465px','62px']
            },
            {
                id: 'downarrows',
                type: 'image',
                rect: ['67px', '121px','61.5%','15.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"downarrows.png",'0%','0%','400px','93px']
            },
            {
                id: 'xcircle',
                display: 'block',
                type: 'image',
                rect: ['42px', '194px','441px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"xcircle.png",'0px','0px']
            },
            {
                id: 'algo',
                display: 'block',
                type: 'image',
                rect: ['218px', '372px','124px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"algo.png",'0px','0px']
            },
            {
                id: '_7a',
                type: 'image',
                rect: ['30px', '417px','31.1%','2.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7a.png",'0%','0%','202px','17px'],
                transform: [[],['180']]
            },
            {
                id: 'do',
                type: 'image',
                rect: ['30px', '229px','66%','34.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"do.png",'0%','0%','429px','205px'],
                transform: [[],['180']]
            },
            {
                id: 'cs',
                type: 'image',
                rect: ['30px', '194px','66%','5.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"c\'s.png",'0%','0%','429px','35px']
            },
            {
                id: 'asas',
                type: 'image',
                rect: ['155px', '385px','11.1%','2.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"asas.png",'0%','0%','72px','16px'],
                transform: [[],['180']]
            },
            {
                id: 'sasa',
                type: 'image',
                rect: ['325px', '386px','12.4%','2.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sasa.png",'0%','0%','81px','13px']
            },
            {
                id: 'carw1',
                display: 'block',
                type: 'image',
                rect: ['74px', '58px','14%','14.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"carw1.png",'0%','0%','91px','88px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['98px', '35px','104px','18px','auto', 'auto'],
                text: "Current signal value is here.",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'carw12',
                display: 'block',
                type: 'image',
                rect: ['181px', '53px','14%','14.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"carw1.png",'0%','0%','91px','88px']
            },
            {
                id: 'cmnt2',
                display: 'block',
                type: 'image',
                rect: ['205px', '-6px','104px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cmnt2.png",'0px','0px']
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['231px', '48px','17px','12px','auto', 'auto'],
                text: ".",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [75, "%"], "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['319px', '4px','267px','44px','auto', 'auto'],
                text: "A total of four delayed signal values are present at the outputs of these blocks. This is a four-tap equalizer.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'darw',
                display: 'block',
                type: 'image',
                rect: ['267px', '53px','29.9%','14.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"darw.png",'0%','0%','194px','88px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['157px', '251px','246px','30px','auto', 'auto'],
                text: "Mutliply each tap by a special weight.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['393px', '319px','246px','46px','auto', 'auto'],
                text: "Sum together to reduce the effects of intersymbol interference.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['294px', '453px','209px','35px','auto', 'auto'],
                text: "Recompute and adjust values to match changing channels.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['167px', '543px','303px','35px','auto', 'auto'],
                text: "Figure 6.16 Linear Equalizer Circuit ",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['131px', '516px','490px','21px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'clabel',
                display: 'block',
                type: 'image',
                rect: ['25px', '184px','408px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"clabel.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__1a2}": [
                ["style", "top", '215px'],
                ["style", "left", '61px'],
                ["style", "height", '0%']
            ],
            "${__6b}": [
                ["style", "top", '418px'],
                ["style", "width", '0%'],
                ["style", "left", '576px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Text2}": [
                ["style", "top", '4px'],
                ["style", "display", 'block'],
                ["style", "left", '319px'],
                ["style", "width", '267px']
            ],
            "${_algo}": [
                ["style", "top", '372px'],
                ["style", "left", '218px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "width", '246px']
            ],
            "${__4b}": [
                ["style", "top", '255px'],
                ["style", "left", '369px'],
                ["style", "width", '0%']
            ],
            "${_sigma}": [
                ["style", "top", '249px'],
                ["style", "left", '497px'],
                ["style", "display", 'block']
            ],
            "${_asas}": [
                ["style", "top", '385px'],
                ["style", "width", '0%'],
                ["style", "left", '227px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sasa}": [
                ["style", "top", '386px'],
                ["style", "left", '325px'],
                ["style", "width", '0%']
            ],
            "${_clabel}": [
                ["style", "top", '184px'],
                ["style", "left", '25px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "top", '251px'],
                ["style", "height", '30px'],
                ["style", "display", 'block'],
                ["style", "left", '157px'],
                ["style", "width", '246px']
            ],
            "${__5b}": [
                ["style", "top", '252px'],
                ["style", "left", '460px'],
                ["style", "width", '0%']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "width", '209px']
            ],
            "${__6a}": [
                ["style", "top", '277px'],
                ["style", "left", '575px'],
                ["style", "height", '0%']
            ],
            "${_Text7}": [
                ["style", "top", '516px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '122px'],
                ["style", "width", '490px']
            ],
            "${__2a}": [
                ["style", "top", '228px'],
                ["style", "left", '181px'],
                ["style", "height", '0%']
            ],
            "${__4a}": [
                ["style", "top", '227px'],
                ["style", "left", '358px'],
                ["style", "height", '0%']
            ],
            "${__5a}": [
                ["style", "top", '227px'],
                ["style", "left", '454px'],
                ["style", "height", '0%']
            ],
            "${__1b}": [
                ["style", "top", '279px'],
                ["style", "left", '87px'],
                ["style", "width", '0%']
            ],
            "${_do}": [
                ["style", "top", '434px'],
                ["style", "height", '0%'],
                ["style", "left", '30px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_carw1}": [
                ["style", "height", '0%'],
                ["style", "top", '58px'],
                ["style", "left", '74px'],
                ["style", "display", 'block']
            ],
            "${__7a}": [
                ["style", "top", '417px'],
                ["style", "width", '0%'],
                ["style", "left", '232px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_downarrows}": [
                ["style", "top", '121px'],
                ["style", "left", '67px'],
                ["style", "height", '0%']
            ],
            "${_Text8}": [
                ["style", "top", '48px'],
                ["style", "font-weight", '400'],
                ["style", "left", '231px'],
                ["style", "font-size", '75%']
            ],
            "${_eo}": [
                ["style", "top", '242px'],
                ["style", "left", '554px'],
                ["style", "width", '0%']
            ],
            "${_xcircle}": [
                ["style", "top", '194px'],
                ["style", "left", '42px'],
                ["style", "display", 'block']
            ],
            "${__3b}": [
                ["style", "top", '251px'],
                ["style", "left", '282px'],
                ["style", "width", '0%']
            ],
            "${__3a}": [
                ["style", "top", '222px'],
                ["style", "left", '276px'],
                ["style", "height", '0%']
            ],
            "${_darw}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '267px'],
                ["style", "top", '53px']
            ],
            "${_Text6}": [
                ["style", "top", '543px'],
                ["style", "font-size", '119%'],
                ["style", "left", '167px'],
                ["style", "width", '303px']
            ],
            "${__1}": [
                ["style", "top", '99px'],
                ["style", "display", 'block'],
                ["style", "left", '12px'],
                ["style", "width", '0%']
            ],
            "${_Text}": [
                ["style", "top", '35px'],
                ["style", "width", '104px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "height", '18px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '98px'],
                ["style", "font-size", '94%']
            ],
            "${_cs}": [
                ["style", "top", '195px'],
                ["style", "left", '30px'],
                ["style", "width", '0%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '650px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cmnt2}": [
                ["style", "display", 'block'],
                ["style", "left", '205px'],
                ["style", "top", '-6px']
            ],
            "${__2b}": [
                ["style", "top", '274px'],
                ["style", "left", '200px'],
                ["style", "width", '0%']
            ],
            "${_carw12}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '181px'],
                ["style", "top", '53px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 18611,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_downarrows}", "height", '15.5%', { fromValue: '0%'}], position: 7000, duration: 1500 },
                { id: "eid48", tween: [ "style", "${__3a}", "height", '13.5%', { fromValue: '0%'}], position: 9250, duration: 1000 },
                { id: "eid87", tween: [ "style", "${_sasa}", "width", '12.47%', { fromValue: '0%'}], position: 16000, duration: 665 },
                { id: "eid93", tween: [ "style", "${__7a}", "left", '30px', { fromValue: '232px'}], position: 16000, duration: 665 },
                { id: "eid104", tween: [ "transform", "${_do}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 16665, duration: 0 },
                { id: "eid71", tween: [ "style", "${__6a}", "height", '25.33%', { fromValue: '0%'}], position: 13750, duration: 1000 },
                { id: "eid113", tween: [ "style", "${_cs}", "top", '195px', { fromValue: '195px'}], position: 18611, duration: 0 },
                { id: "eid26", tween: [ "style", "${_darw}", "height", '14.67%', { fromValue: '0%'}], position: 5250, duration: 1000 },
                { id: "eid52", tween: [ "style", "${__5a}", "height", '5.67%', { fromValue: '0%'}], position: 9250, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_darw}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_darw}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid27", tween: [ "style", "${_darw}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid8", tween: [ "style", "${__1}", "top", '99px', { fromValue: '99px'}], position: 1750, duration: 0 },
                { id: "eid20", tween: [ "style", "${_carw12}", "height", '14.67%', { fromValue: '0%'}], position: 3750, duration: 1000 },
                { id: "eid110", tween: [ "style", "${_Text7}", "left", '122px', { fromValue: '122px'}], position: 12138, duration: 0 },
                { id: "eid101", tween: [ "style", "${_do}", "height", '34.17%', { fromValue: '0%'}], position: 16665, duration: 420 },
                { id: "eid66", tween: [ "style", "${_eo}", "width", '8.47%', { fromValue: '0%'}], position: 11500, duration: 1500 },
                { id: "eid1", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid9", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid14", tween: [ "style", "${_carw1}", "height", '14.67%', { fromValue: '0%'}], position: 2250, duration: 1000 },
                { id: "eid54", tween: [ "style", "${__1b}", "width", '63.7%', { fromValue: '0%'}], position: 10250, duration: 1000 },
                { id: "eid62", tween: [ "style", "${__5b}", "width", '6.62%', { fromValue: '0%'}], position: 10250, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid60", tween: [ "style", "${__4b}", "width", '20.77%', { fromValue: '0%'}], position: 10250, duration: 1000 },
                { id: "eid80", tween: [ "style", "${__6b}", "width", '37.85%', { fromValue: '0%'}], position: 14750, duration: 1000 },
                { id: "eid44", tween: [ "style", "${__1a2}", "height", '16.5%', { fromValue: '0%'}], position: 9250, duration: 1000 },
                { id: "eid95", tween: [ "style", "${__7a}", "width", '31.08%', { fromValue: '0%'}], position: 16000, duration: 665 },
                { id: "eid81", tween: [ "transform", "${__6b}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 14750, duration: 0 },
                { id: "eid38", tween: [ "style", "${_xcircle}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_xcircle}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid97", tween: [ "transform", "${_asas}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 16000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_carw1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_carw1}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid31", tween: [ "style", "${_carw1}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid50", tween: [ "style", "${__4a}", "height", '8.17%', { fromValue: '0%'}], position: 9250, duration: 1000 },
                { id: "eid17", tween: [ "style", "${_carw12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_carw12}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid30", tween: [ "style", "${_carw12}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_cmnt2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_cmnt2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_cmnt2}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid91", tween: [ "style", "${_asas}", "width", '11.08%', { fromValue: '0%'}], position: 16000, duration: 665 },
                { id: "eid4", tween: [ "style", "${__1}", "width", '71.54%', { fromValue: '0%'}], position: 250, duration: 1500 },
                { id: "eid56", tween: [ "style", "${__2b}", "width", '47.39%', { fromValue: '0%'}], position: 10250, duration: 1000 },
                { id: "eid82", tween: [ "style", "${_algo}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_algo}", "display", 'block', { fromValue: 'none'}], position: 15750, duration: 0 },
                { id: "eid33", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
                { id: "eid103", tween: [ "style", "${_do}", "top", '229px', { fromValue: '434px'}], position: 16665, duration: 420 },
                { id: "eid108", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 18250, duration: 0 },
                { id: "eid46", tween: [ "style", "${__2a}", "height", '13.5%', { fromValue: '0%'}], position: 9250, duration: 1000 },
                { id: "eid89", tween: [ "style", "${_asas}", "left", '155px', { fromValue: '227px'}], position: 16000, duration: 665 },
                { id: "eid78", tween: [ "style", "${__6b}", "left", '330px', { fromValue: '576px'}], position: 14750, duration: 1000 },
                { id: "eid68", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid58", tween: [ "style", "${__3b}", "width", '34.16%', { fromValue: '0%'}], position: 10250, duration: 1000 },
                { id: "eid96", tween: [ "transform", "${__7a}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 16000, duration: 0 },
                { id: "eid106", tween: [ "style", "${_cs}", "width", '66%', { fromValue: '0%'}], position: 17085, duration: 655 },
                { id: "eid63", tween: [ "style", "${_sigma}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_sigma}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0 },
                { id: "eid114", tween: [ "style", "${_clabel}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_clabel}", "display", 'block', { fromValue: 'none'}], position: 8573, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-386747");
