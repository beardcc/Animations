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
                id: 'nxtframe',
                display: 'block',
                type: 'image',
                rect: ['411px', '79px','18%','8.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nxtframe.png",'0%','0%','99px','52px']
            },
            {
                id: 'difssidebars',
                type: 'image',
                rect: ['81px', '61px','13.5%','10.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"difssidebars.png",'0%','0%','74px','62px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['211px', '253px','186px','24px','auto', 'auto'],
                text: "For DCF, first wait a DIFS.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'difsextendedbar',
                type: 'image',
                rect: ['81px', '124px','13.5%','8.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"difsextendedbar.png",'0%','0%','74px','49px']
            },
            {
                id: 'difs2right',
                type: 'image',
                rect: ['282px', '28px','2.6%','15.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"difs2right.png",'0%','0%','14px','93px']
            },
            {
                id: 'difs2left',
                type: 'image',
                rect: ['227px', '31px','2.9%','15.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"difs2left.png",'0%','0%','16px','93px']
            },
            {
                id: 'difs2',
                display: 'block',
                type: 'image',
                rect: ['232px', '34px','58px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"difs2.png",'0px','0px']
            },
            {
                id: 'DIFS',
                display: 'block',
                type: 'image',
                rect: ['81px', '59px','13.5%','6.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"DIFS.png",'0%','0%','74px','auto']
            },
            {
                id: 'differaccessrightbar',
                type: 'image',
                rect: ['282px', '124px','2.6%','7.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"differaccessrightbar.png",'0%','0%','14px','45px']
            },
            {
                id: 'deferaccess',
                type: 'image',
                rect: ['143px', '146px','26.6%','3.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"deferaccess.png",'0%','0%','146px','21px']
            },
            {
                id: 'contentionwindowright',
                display: 'block',
                type: 'image',
                rect: ['403px', '29px','4.2%','16.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contentionwindowright.png",'0%','0%','23px','98px']
            },
            {
                id: 'contentionwindow',
                display: 'block',
                type: 'image',
                rect: ['284px', '35px','132px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contentionwindow.png",'0px','0px']
            },
            {
                id: 'comment2',
                display: 'block',
                type: 'image',
                rect: ['24px', '15px','132px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"comment2.png",'0px','0px']
            },
            {
                id: 'busymedium',
                display: 'block',
                type: 'image',
                rect: ['142px', '82px','95px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"busymedium.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['118px', '243px','auto','auto','auto', 'auto'],
                text: "If busy, wait until no longer busy, then wait applicable IFS.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['155px', '242px','296px','22px','auto', 'auto'],
                text: "Then wait random number of slot times, based on current CW in the range [0, CW-1].",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['253px', '254px','102px','23px','auto', 'auto'],
                text: "Then transmit.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['189px', '458px','194px','11px','auto', 'auto'],
                text: "(b) PCF superframe construction",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [81, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'axis',
                type: 'image',
                rect: ['19px', '361px','94.2%','5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"axis.png",'0%','0%','518px','30px']
            },
            {
                id: 'pcfoptional',
                display: 'block',
                type: 'image',
                rect: ['29px', '327px','115px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pcfoptional.png",'0px','0px']
            },
            {
                id: 'pcfoptional2',
                display: 'block',
                type: 'image',
                rect: ['304px', '355px','107px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pcfoptional2.png",'0px','0px']
            },
            {
                id: 'sidebarssframe',
                type: 'image',
                rect: ['27px', '279px','46.6%','29.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sidebarssframe.png",'0%','0%','256px','179px']
            },
            {
                id: 'superframesidebars',
                type: 'image',
                rect: ['283px', '278px','42.9%','29.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"superframesidebars.png",'0%','0%','236px','179px']
            },
            {
                id: 'sframe',
                display: 'block',
                type: 'image',
                rect: ['33px', '297px','238px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sframe.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['182px', '492px','auto','auto','auto', 'auto'],
                text: "Start superframe using PCF.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'pcfdefers',
                display: 'block',
                type: 'image',
                rect: ['269px', '391px','37px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pcfdefers.png",'0px','0px']
            },
            {
                id: 'foreshrt',
                display: 'block',
                type: 'image',
                rect: ['289px', '301px','225px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"foreshrt.png",'0px','0px']
            },
            {
                id: 'bowin',
                display: 'block',
                type: 'image',
                rect: ['285px', '79px','142px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bowin.png",'0px','0px']
            },
            {
                id: 'sframe2',
                display: 'block',
                type: 'image',
                rect: ['268px', '275px','238px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sframe.png",'0px','0px']
            },
            {
                id: 'busy-medium',
                display: 'block',
                type: 'image',
                rect: ['232px', '361px','71px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"busy-medium.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['118px', '558px','378px','24px','auto', 'auto'],
                text: "Figure 11.11 IEEE 802.11 MAC Timing",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['101px', '531px','378px','21px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['223px', '205px','auto','auto','auto', 'auto'],
                text: "(a) Basic access method",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [81, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'timeaxisa',
                display: 'block',
                type: 'image',
                rect: ['50px', '100px','88.9%','8.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"timeaxisa.png",'0%','0%','489px','49px']
            },
            {
                id: 'slottime',
                display: 'block',
                type: 'image',
                rect: ['266px', '121px','100px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slottime.png",'0px','0px']
            },
            {
                id: 'sifsright',
                type: 'image',
                rect: ['254px', '95px','2.2%','4.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sifsright.png",'0%','0%','12px','28px']
            },
            {
                id: 'sifs',
                display: 'block',
                type: 'image',
                rect: ['226px', '86px','41px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sifs.png",'0px','0px']
            },
            {
                id: 'seletslot',
                type: 'image',
                rect: ['286px', '151px','40.2%','4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"seletslot.png",'0%','0%','221px','24px'],
                transform: [[],['180']]
            },
            {
                id: 'pifsleft',
                type: 'image',
                rect: ['270px', '77px','10px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pifsleft.png",'0px','0px']
            },
            {
                id: 'pifs',
                display: 'block',
                type: 'image',
                rect: ['225px', '59px','58px','24px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pifs.png",'0px','0px']
            },
            {
                id: 'contentionperioddcf',
                display: 'block',
                type: 'image',
                rect: ['156px', '328px','99px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contentionperioddcf.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['247px', '492px','96px','22px','auto', 'auto'],
                text: "Then DCF.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['149px', '483px','307px','24px','auto', 'auto'],
                text: "If in the middle of a DCF frame transmission, defer the start of the next superframe.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['134px', '492px','308px','22px','auto', 'auto'],
                text: "Complete next superframe with  shorter time.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'cfburstCopy',
                display: 'block',
                type: 'image',
                rect: ['306px', '391px','105px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cfburst.png",'0px','0px']
            },
            {
                id: 'blank100',
                display: 'block',
                type: 'image',
                rect: ['246px', '256px','282px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blank100.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_pcfdefers}": [
                ["style", "top", '391px'],
                ["style", "left", '269px'],
                ["style", "display", 'block']
            ],
            "${_difssidebars}": [
                ["style", "height", '0%'],
                ["style", "left", '81px'],
                ["style", "top", '61px']
            ],
            "${_deferaccess}": [
                ["style", "top", '146px'],
                ["style", "left", '143px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0%']
            ],
            "${_sframe2}": [
                ["style", "display", 'block'],
                ["style", "left", '268px'],
                ["style", "top", '275px']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '101px'],
                ["style", "width", '378px']
            ],
            "${_sifsright}": [
                ["style", "top", '95px'],
                ["style", "left", '254px'],
                ["style", "height", '0%']
            ],
            "${_timeaxisa}": [
                ["style", "display", 'block'],
                ["style", "top", '100px'],
                ["style", "left", '50px'],
                ["style", "width", '0%']
            ],
            "${_pcfoptional2}": [
                ["style", "top", '355px'],
                ["style", "left", '304px'],
                ["style", "display", 'block']
            ],
            "${_difs2right}": [
                ["style", "top", '28px'],
                ["style", "left", '282px'],
                ["style", "height", '0%']
            ],
            "${_comment2}": [
                ["style", "top", '15px'],
                ["style", "left", '24px'],
                ["style", "display", 'block']
            ],
            "${_foreshrt}": [
                ["style", "top", '301px'],
                ["style", "left", '289px'],
                ["style", "display", 'block']
            ],
            "${_pifs}": [
                ["style", "top", '59px'],
                ["style", "left", '225px'],
                ["style", "display", 'block']
            ],
            "${_difs2}": [
                ["style", "top", '34px'],
                ["style", "left", '232px'],
                ["style", "display", 'block']
            ],
            "${_contentionperioddcf}": [
                ["style", "top", '328px'],
                ["style", "left", '156px'],
                ["style", "display", 'block']
            ],
            "${_contentionwindow}": [
                ["style", "top", '35px'],
                ["style", "left", '284px'],
                ["style", "display", 'block']
            ],
            "${_DIFS}": [
                ["style", "top", '59px'],
                ["style", "left", '81px'],
                ["style", "display", 'block'],
                ["style", "background-size", [74,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '0%']
            ],
            "${_nxtframe}": [
                ["style", "display", 'block'],
                ["style", "top", '79px'],
                ["style", "left", '411px'],
                ["style", "width", '0%']
            ],
            "${_Text9}": [
                ["style", "top", '492px'],
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '182px'],
                ["style", "width", '187px']
            ],
            "${_differaccessrightbar}": [
                ["style", "top", '124px'],
                ["style", "left", '282px'],
                ["style", "height", '0%']
            ],
            "${_contentionwindowright}": [
                ["style", "height", '0%'],
                ["style", "display", 'block'],
                ["style", "left", '403px'],
                ["style", "top", '29px']
            ],
            "${_Text11}": [
                ["style", "display", 'block'],
                ["style", "top", '483px'],
                ["style", "left", '149px'],
                ["style", "width", '307px']
            ],
            "${_Text3}": [
                ["style", "top", '205px'],
                ["style", "display", 'block'],
                ["style", "font-size", '81%'],
                ["style", "left", '223px'],
                ["style", "width", '146px']
            ],
            "${_sifs}": [
                ["style", "top", '86px'],
                ["style", "left", '226px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "display", 'block']
            ],
            "${_pcfoptional}": [
                ["style", "top", '327px'],
                ["style", "left", '29px'],
                ["style", "display", 'block']
            ],
            "${_blank100}": [
                ["style", "top", '277px'],
                ["style", "height", '32px'],
                ["style", "left", '246px'],
                ["style", "display", 'block']
            ],
            "${_bowin}": [
                ["style", "top", '79px'],
                ["style", "left", '285px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "left", '247px'],
                ["style", "width", '96px']
            ],
            "${_busymedium}": [
                ["style", "top", '82px'],
                ["style", "left", '142px'],
                ["style", "display", 'block']
            ],
            "${_difs2left}": [
                ["style", "top", '31px'],
                ["style", "left", '227px'],
                ["style", "height", '0%']
            ],
            "${_cfburstCopy}": [
                ["style", "top", '391px'],
                ["style", "left", '306px'],
                ["style", "display", 'block']
            ],
            "${_difsextendedbar}": [
                ["style", "top", '124px'],
                ["style", "left", '81px'],
                ["style", "height", '0%']
            ],
            "${_sframe}": [
                ["style", "top", '297px'],
                ["style", "left", '33px'],
                ["style", "display", 'block']
            ],
            "${_slottime}": [
                ["style", "top", '121px'],
                ["style", "left", '266px'],
                ["style", "display", 'block']
            ],
            "${_sidebarssframe}": [
                ["style", "top", '279px'],
                ["style", "left", '27px'],
                ["style", "height", '0%']
            ],
            "${_Text8}": [
                ["style", "top", '458px'],
                ["style", "display", 'block'],
                ["style", "font-size", '81%'],
                ["style", "left", '189px'],
                ["style", "width", '194px']
            ],
            "${_pifsleft}": [
                ["style", "top", '77px'],
                ["style", "left", '270px'],
                ["style", "height", '0px']
            ],
            "${_Text7}": [
                ["style", "top", '254px'],
                ["style", "display", 'block'],
                ["style", "height", '23px'],
                ["style", "left", '253px'],
                ["style", "width", '102px']
            ],
            "${_axis}": [
                ["style", "top", '361px'],
                ["style", "left", '19px'],
                ["style", "width", '0%']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "top", '242px'],
                ["style", "left", '155px'],
                ["style", "width", '308px']
            ],
            "${_busy-medium}": [
                ["style", "top", '361px'],
                ["style", "left", '232px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '558px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-weight", '700'],
                ["style", "font-size", '119%']
            ],
            "${_Text12}": [
                ["style", "display", 'block'],
                ["style", "top", '492px'],
                ["style", "left", '134px'],
                ["style", "width", '308px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '550px']
            ],
            "${_seletslot}": [
                ["style", "top", '151px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '507px'],
                ["style", "width", '0%']
            ],
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "font-size", '94%'],
                ["style", "left", '211px'],
                ["style", "width", '186px']
            ],
            "${_superframesidebars}": [
                ["style", "top", '278px'],
                ["style", "left", '283px'],
                ["style", "height", '0%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21500,
            autoPlay: true,
            timeline: [
                { id: "eid105", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 19250, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 20250, duration: 0 },
                { id: "eid47", tween: [ "style", "${_difsextendedbar}", "height", '8.17%', { fromValue: '0%'}], position: 8500, duration: 1000 },
                { id: "eid22", tween: [ "style", "${_DIFS}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3250, duration: 0 },
                { id: "eid59", tween: [ "style", "${_seletslot}", "width", '40.19%', { fromValue: '0%'}], position: 10250, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_seletslot}", "left", '286px', { fromValue: '507px'}], position: 10250, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_difs2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_difs2}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
                { id: "eid112", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 21250, duration: 0 },
                { id: "eid124", tween: [ "style", "${_blank100}", "display", 'none', { fromValue: 'block'}], position: 20638, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 18250, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3825, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4148, duration: 0 },
                { id: "eid127", tween: [ "style", "${_Text6}", "width", '308px', { fromValue: '308px'}], position: 10309, duration: 0 },
                { id: "eid109", tween: [ "style", "${_busy-medium}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_busy-medium}", "display", 'block', { fromValue: 'none'}], position: 19750, duration: 0 },
                { id: "eid90", tween: [ "style", "${_sframe}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_sframe}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0 },
                { id: "eid125", tween: [ "style", "${_blank100}", "height", '32px', { fromValue: '32px'}], position: 20500, duration: 0 },
                { id: "eid65", tween: [ "style", "${_contentionwindow}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_contentionwindow}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid28", tween: [ "style", "${_busymedium}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_busymedium}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid126", tween: [ "style", "${_blank100}", "top", '277px', { fromValue: '277px'}], position: 20500, duration: 0 },
                { id: "eid89", tween: [ "style", "${_sidebarssframe}", "height", '29.83%', { fromValue: '0%'}], position: 16250, duration: 1000 },
                { id: "eid86", tween: [ "style", "${_pcfoptional}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_pcfoptional}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0 },
                { id: "eid116", tween: [ "style", "${_foreshrt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid117", tween: [ "style", "${_foreshrt}", "display", 'block', { fromValue: 'none'}], position: 20750, duration: 0 },
                { id: "eid61", tween: [ "style", "${_contentionwindowright}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_contentionwindowright}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_timeaxisa}", "width", '88.91%', { fromValue: '0%'}], position: 500, duration: 1000 },
                { id: "eid39", tween: [ "style", "${_pifsleft}", "height", '48px', { fromValue: '0px'}], position: 6500, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_sifs}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_sifs}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid96", tween: [ "style", "${_superframesidebars}", "height", '29.83%', { fromValue: '0%'}], position: 16250, duration: 1000 },
                { id: "eid122", tween: [ "style", "${_cfburstCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_cfburstCopy}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 17865, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0 },
                { id: "eid51", tween: [ "style", "${_deferaccess}", "width", '26.55%', { fromValue: '0%'}], position: 8500, duration: 1000 },
                { id: "eid107", tween: [ "style", "${_pcfdefers}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_pcfdefers}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid33", tween: [ "style", "${_difs2left}", "height", '15.5%', { fromValue: '0%'}], position: 5250, duration: 1000 },
                { id: "eid20", tween: [ "style", "${_difssidebars}", "height", '10.33%', { fromValue: '0%'}], position: 2825, duration: 1000 },
                { id: "eid67", tween: [ "style", "${_bowin}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_bowin}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0 },
                { id: "eid74", tween: [ "style", "${_nxtframe}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_nxtframe}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid102", tween: [ "style", "${_contentionperioddcf}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_contentionperioddcf}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid98", tween: [ "style", "${_sframe2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid99", tween: [ "style", "${_sframe2}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0 },
                { id: "eid64", tween: [ "style", "${_contentionwindowright}", "height", '16.33%', { fromValue: '0%'}], position: 11250, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_difs2right}", "height", '15.5%', { fromValue: '0%'}], position: 5250, duration: 1000 },
                { id: "eid60", tween: [ "transform", "${_seletslot}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 10250, duration: 0 },
                { id: "eid52", tween: [ "style", "${_deferaccess}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 9500, duration: 0 },
                { id: "eid7", tween: [ "style", "${_DIFS}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_DIFS}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid77", tween: [ "style", "${_nxtframe}", "width", '18%', { fromValue: '0%'}], position: 13500, duration: 1000 },
                { id: "eid1", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_timeaxisa}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_timeaxisa}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 14750, duration: 0 },
                { id: "eid40", tween: [ "style", "${_pifs}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_pifs}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
                { id: "eid118", tween: [ "style", "${_pcfoptional2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "style", "${_pcfoptional2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid85", tween: [ "style", "${_axis}", "width", '94.19%', { fromValue: '0%'}], position: 15250, duration: 1000 },
                { id: "eid49", tween: [ "style", "${_differaccessrightbar}", "height", '7.5%', { fromValue: '0%'}], position: 8500, duration: 1000 },
                { id: "eid43", tween: [ "style", "${_sifsright}", "height", '4.67%', { fromValue: '0%'}], position: 7500, duration: 1000 },
                { id: "eid69", tween: [ "style", "${_slottime}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_slottime}", "display", 'block', { fromValue: 'none'}], position: 12750, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0 },
                { id: "eid14", tween: [ "style", "${_DIFS}", "width", '13.46%', { fromValue: '0%'}], position: 1750, duration: 1500 },
                { id: "eid26", tween: [ "style", "${_comment2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_comment2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1084602271");
