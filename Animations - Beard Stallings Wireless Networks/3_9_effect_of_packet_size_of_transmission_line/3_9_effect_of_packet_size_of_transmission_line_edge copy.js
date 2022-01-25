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
                id: 'Background',
                display: 'block',
                type: 'image',
                rect: ['120px', '40px','572px','662px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Background.png",'0px','0px']
            },
            {
                id: 'Sample',
                display: 'block',
                type: 'image',
                rect: ['112px', '4px','612px','708px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Sample.png",'0px','0px']
            },
            {
                id: 'Data_2_1',
                display: 'block',
                type: 'image',
                rect: ['305px', '56px','57px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_2_1.png",'0px','0px']
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['429px', '400px','136px','55px','auto', 'auto'],
                text: "Node b sends Packet 2.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['400px', '523px','232px','58px','auto', 'auto'],
                text: "Since transmissions occur in parallel, the overall transmission finishes earlier.",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Data_2_2',
                display: 'block',
                type: 'image',
                rect: ['305px', '160px','57px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_2_2.png",'0px','0px']
            },
            {
                id: 'Data_1',
                display: 'block',
                type: 'image',
                rect: ['175px', '61px','57px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_1.png",'0px','0px']
            },
            {
                id: 'Data_1Copy5',
                display: 'block',
                type: 'image',
                rect: ['564px', '61px','57px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_1.png",'0px','0px']
            },
            {
                id: 'Text16',
                display: 'block',
                type: 'text',
                rect: ['642px', '74px','145px','30px','auto', 'auto'],
                text: "Node X splits into ten packets.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Data_10',
                display: 'block',
                type: 'image',
                rect: ['563px', '66px','57px','334px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_10.png",'0px','0px']
            },
            {
                id: 'Data_102',
                display: 'block',
                type: 'image',
                rect: ['621px', '132px','57px','334px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_10.png",'0px','0px']
            },
            {
                id: 'Text17',
                display: 'block',
                type: 'text',
                rect: ['621px', '526px','171px','82px','auto', 'auto'],
                text: "Finishing time is later than five packets since header data takes up too much time.",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Data_51',
                display: 'block',
                type: 'image',
                rect: ['433px', '53px','57px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_5.1.png",'0px','0px']
            },
            {
                id: 'Data_52',
                display: 'block',
                type: 'image',
                rect: ['433px', '89px','57px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_5.2.png",'0px','0px']
            },
            {
                id: 'Data_53',
                display: 'block',
                type: 'image',
                rect: ['433px', '122px','57px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_5.3.png",'0px','0px']
            },
            {
                id: 'Data_54',
                display: 'block',
                type: 'image',
                rect: ['433px', '155px','57px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_5.4.png",'0px','0px']
            },
            {
                id: 'Data_55',
                display: 'block',
                type: 'image',
                rect: ['433px', '197px','57px','82px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_5.5.png",'0px','0px']
            },
            {
                id: 'Data_1Copy3',
                display: 'block',
                type: 'image',
                rect: ['305px', '61px','57px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_1.png",'0px','0px']
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['379px', '84px','217px','50px','auto', 'auto'],
                text: "Node X splits into two parts and creates two packets by adding a header to each. Here, it starts sending the first packet.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['105px', '179px','212px','67px','auto', 'auto'],
                text: "Packet 1 finishes and Node a sends it. Simultaneously, Node X sends Packet 2.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['182px', '275px','133px','63px','auto', 'auto'],
                text: "Nodes a and b start sending Packets 2 and 1.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['61px', '262px','117px','44px','auto', 'auto'],
                text: "The packet finishes at time <i>t<sub>1</sub></i>.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['250px', '289px','122px','86px','auto', 'auto'],
                text: "Now Node a can send the packet.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['34px', '458px','189px','77px','auto', 'auto'],
                text: "Node b finishes receiving the packet and starts sending to Node Y.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['300px', '637px','200px','54px','auto', 'auto'],
                text: "Node Y finishes receiving the packet at time <i>t<sub>s</sub></i>.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['14px', '66px','168px','73px','auto', 'auto'],
                text: "Node X starts sending a packet at time <i>t<sub>0</sub></i>.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Data_1Copy4',
                display: 'block',
                type: 'image',
                rect: ['435px', '61px','57px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Data_1.png",'0px','0px']
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['517px', '80px','234px','50px','auto', 'auto'],
                text: "Node X splits into five packets.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_5pac',
                display: 'block',
                type: 'image',
                rect: ['468px', '122px','43px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5pac.png",'0px','0px']
            },
            {
                id: 'Text13',
                display: 'block',
                type: 'text',
                rect: ['269px', '122px','177px','47px','auto', 'auto'],
                text: "All the three nodes are sending in parallel.",
                align: "center",
                font: ['Georgia, \'Times New Roman\', Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: '_5pacCopy',
                display: 'block',
                type: 'image',
                rect: ['498px', '173px','43px','264px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5pac.png",'0px','0px']
            },
            {
                id: 'Text15',
                display: 'block',
                type: 'text',
                rect: ['462px', '459px','97px','67px','auto', 'auto'],
                text: "Finishing time is even earlier.",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['159px', '757px','526px','28px','auto', 'auto'],
                text: "Figure 3.9 Effect of Packet Size on Transmission",
                align: "center",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text19',
                display: 'block',
                type: 'text',
                rect: ['194px', '730px','456px','19px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "center",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Data_51}": [
                ["style", "top", '53px'],
                ["style", "left", '433px'],
                ["style", "display", 'block']
            ],
            "${_Data_2_2}": [
                ["style", "top", '160px'],
                ["style", "left", '305px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "top", '179px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '105px'],
                ["style", "width", '212px']
            ],
            "${_Data_53}": [
                ["style", "top", '122px'],
                ["style", "left", '433px'],
                ["style", "display", 'block']
            ],
            "${_Data_55}": [
                ["style", "top", '197px'],
                ["style", "left", '433px'],
                ["style", "display", 'block']
            ],
            "${_Data_102}": [
                ["style", "top", '132px'],
                ["style", "left", '621px'],
                ["style", "display", 'block']
            ],
            "${_Data_10}": [
                ["style", "top", '67px'],
                ["style", "left", '563px'],
                ["style", "display", 'block']
            ],
            "${_Data_1Copy5}": [
                ["style", "top", '61px'],
                ["style", "left", '564px'],
                ["style", "display", 'block']
            ],
            "${_Text4}": [
                ["style", "top", '289px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '250px'],
                ["style", "width", '122px']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '392px'],
                ["style", "top", '385px']
            ],
            "${_Text9}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '118px']
            ],
            "${_Text19}": [
                ["style", "top", '731px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '189px'],
                ["style", "font-size", '94%']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Text11}": [
                ["style", "top", '523px'],
                ["style", "display", 'block'],
                ["style", "width", '232px']
            ],
            "${_Text3}": [
                ["style", "top", '262px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '61px'],
                ["style", "width", '117px']
            ],
            "${_Text5}": [
                ["style", "top", '458px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '34px'],
                ["style", "width", '189px']
            ],
            "${_Data_54}": [
                ["style", "top", '155px'],
                ["style", "left", '433px'],
                ["style", "display", 'block']
            ],
            "${_Data_52}": [
                ["style", "top", '89px'],
                ["style", "left", '433px'],
                ["style", "display", 'block']
            ],
            "${_Sample}": [
                ["style", "top", '4px'],
                ["style", "left", '112px'],
                ["style", "display", 'block']
            ],
            "${_Data_1Copy3}": [
                ["style", "top", '61px'],
                ["style", "left", '305px'],
                ["style", "display", 'block']
            ],
            "${__5pacCopy}": [
                ["style", "top", '173px'],
                ["style", "left", '498px'],
                ["style", "display", 'block']
            ],
            "${_Text15}": [
                ["style", "top", '459px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '462px'],
                ["style", "width", '97px']
            ],
            "${_Text18}": [
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-size", '119%']
            ],
            "${_Data_1}": [
                ["style", "top", '61px'],
                ["style", "left", '175px'],
                ["style", "display", 'block']
            ],
            "${_Text17}": [
                ["style", "display", 'block'],
                ["style", "left", '621px'],
                ["style", "width", '171px']
            ],
            "${_Text16}": [
                ["style", "top", '74px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '642px'],
                ["style", "width", '112px']
            ],
            "${_Text13}": [
                ["style", "top", '122px'],
                ["style", "display", 'block'],
                ["style", "left", '269px'],
                ["style", "width", '177px']
            ],
            "${_Text6}": [
                ["style", "top", '637px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "width", '200px']
            ],
            "${_Data_2_1}": [
                ["style", "top", '56px'],
                ["style", "left", '305px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "font-weight", '700'],
                ["style", "left", '14px'],
                ["style", "font-size", '94%'],
                ["style", "top", '66px'],
                ["style", "text-align", 'center'],
                ["style", "height", '73px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "display", 'block'],
                ["style", "width", '168px']
            ],
            "${_Text12}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '800px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Data_1Copy4}": [
                ["style", "top", '61px'],
                ["style", "left", '435px'],
                ["style", "display", 'block']
            ],
            "${__5pac}": [
                ["style", "top", '122px'],
                ["style", "left", '468px'],
                ["style", "display", 'block']
            ],
            "${_Background}": [
                ["style", "top", '40px'],
                ["style", "left", '120px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20750,
            autoPlay: true,
            timeline: [
                { id: "eid53", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid126", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Data_1Copy5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Data_1Copy5}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Data_1Copy5}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
                { id: "eid129", tween: [ "style", "${_Data_1Copy5}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Data_2_2}", "left", '334px', { fromValue: '305px'}], position: 10250, duration: 1000 },
                { id: "eid50", tween: [ "style", "${_Data_2_2}", "left", '363px', { fromValue: '334px'}], position: 12000, duration: 1000 },
                { id: "eid74", tween: [ "style", "${_Data_55}", "top", '254px', { fromValue: '197px'}], position: 15250, duration: 1000 },
                { id: "eid76", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 16975, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 17565, duration: 0 },
                { id: "eid139", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Data_52}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Data_52}", "display", 'block', { fromValue: 'none'}], position: 15045, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Data_52}", "display", 'none', { fromValue: 'block'}], position: 16360, duration: 0 },
                { id: "eid134", tween: [ "style", "${_Data_52}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 14585, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
                { id: "eid143", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 3345, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 3855, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Text19}", "left", '189px', { fromValue: '189px'}], position: 350, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Data_1Copy3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Data_1Copy3}", "display", 'block', { fromValue: 'none'}], position: 6609, duration: 0 },
                { id: "eid31", tween: [ "style", "${_Data_1Copy3}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid125", tween: [ "style", "${_Data_1Copy3}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Data_2_1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Data_2_1}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid122", tween: [ "style", "${_Data_2_1}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid88", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Text15}", "display", 'block', { fromValue: 'none'}], position: 17895, duration: 0 },
                { id: "eid149", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'block'}], position: 18345, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Text15}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Data_2_1}", "top", '160px', { fromValue: '56px'}], position: 7250, duration: 1000 },
                { id: "eid46", tween: [ "style", "${_Data_2_1}", "top", '265px', { fromValue: '160px'}], position: 10250, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_Data_2_2}", "top", '265px', { fromValue: '160px'}], position: 10250, duration: 1000 },
                { id: "eid51", tween: [ "style", "${_Data_2_2}", "top", '370px', { fromValue: '265px'}], position: 12000, duration: 1000 },
                { id: "eid164", tween: [ "style", "${_Text16}", "width", '112px', { fromValue: '112px'}], position: 19000, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Data_1}", "left", '205px', { fromValue: '175px'}], position: 500, duration: 1500 },
                { id: "eid13", tween: [ "style", "${_Data_1}", "left", '234px', { fromValue: '205px'}], position: 4375, duration: 1000 },
                { id: "eid96", tween: [ "style", "${_Data_10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Data_10}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Data_10}", "display", 'none', { fromValue: 'block'}], position: 19200, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Data_10}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Data_1Copy4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Data_1Copy4}", "display", 'block', { fromValue: 'none'}], position: 14815, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Data_1Copy4}", "display", 'none', { fromValue: 'block'}], position: 15045, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Data_1Copy4}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Data_51}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Data_51}", "display", 'block', { fromValue: 'none'}], position: 14815, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Data_51}", "display", 'none', { fromValue: 'block'}], position: 16360, duration: 0 },
                { id: "eid130", tween: [ "style", "${_Data_51}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 4143, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 5608, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid124", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Text10}", "top", '385px', { fromValue: '385px'}], position: 13175, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Data_54}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Data_54}", "display", 'block', { fromValue: 'none'}], position: 15045, duration: 0 },
                { id: "eid156", tween: [ "style", "${_Data_54}", "display", 'none', { fromValue: 'block'}], position: 16360, duration: 0 },
                { id: "eid132", tween: [ "style", "${_Data_54}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Data_1}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Text19}", "display", 'none', { fromValue: 'block'}], position: 20750, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Data_102}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Data_102}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Data_102}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
                { id: "eid136", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 5853, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
                { id: "eid138", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid147", tween: [ "style", "${_Sample}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${_Sample}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Background}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Text9}", "width", '118px', { fromValue: '118px'}], position: 10126, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Text16}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'block'}], position: 19200, duration: 0 },
                { id: "eid133", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Data_55}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Data_55}", "display", 'block', { fromValue: 'none'}], position: 15045, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Data_55}", "display", 'none', { fromValue: 'block'}], position: 16360, duration: 0 },
                { id: "eid140", tween: [ "style", "${_Data_55}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Text2}", "left", '136px', { fromValue: '136px'}], position: 410, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Data_54}", "top", '204px', { fromValue: '155px'}], position: 15250, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 2960, duration: 0 },
                { id: "eid127", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid29", tween: [ "style", "${_Data_2_2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Data_2_2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid128", tween: [ "style", "${_Data_2_2}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid85", tween: [ "style", "${__5pac}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${__5pac}", "display", 'block', { fromValue: 'none'}], position: 17065, duration: 0 },
                { id: "eid87", tween: [ "style", "${__5pac}", "display", 'none', { fromValue: 'block'}], position: 17455, duration: 0 },
                { id: "eid135", tween: [ "style", "${__5pac}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Data_1}", "top", '255px', { fromValue: '61px'}], position: 500, duration: 1500 },
                { id: "eid14", tween: [ "style", "${_Data_1}", "top", '450px', { fromValue: '255px'}], position: 4375, duration: 1000 },
                { id: "eid32", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 6390, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid145", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid83", tween: [ "style", "${__5pacCopy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${__5pacCopy}", "display", 'block', { fromValue: 'none'}], position: 17840, duration: 0 },
                { id: "eid131", tween: [ "style", "${__5pacCopy}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Text19}", "top", '731px', { fromValue: '731px'}], position: 350, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Data_53}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Data_53}", "display", 'block', { fromValue: 'none'}], position: 15045, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Data_53}", "display", 'none', { fromValue: 'block'}], position: 16360, duration: 0 },
                { id: "eid142", tween: [ "style", "${_Data_53}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid151", tween: [ "style", "${_Text10}", "left", '392px', { fromValue: '392px'}], position: 13175, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 8930, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid112", tween: [ "style", "${_Text17}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Text17}", "display", 'block', { fromValue: 'none'}], position: 19750, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Text17}", "display", 'none', { fromValue: 'block'}], position: 20250, duration: 0 },
                { id: "eid116", tween: [ "style", "${_Text17}", "display", 'none', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Data_53}", "top", '154px', { fromValue: '122px'}], position: 15250, duration: 1000 },
                { id: "eid71", tween: [ "style", "${_Data_52}", "top", '104px', { fromValue: '89px'}], position: 15250, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_Data_2_1}", "left", '334px', { fromValue: '305px'}], position: 7250, duration: 1000 },
                { id: "eid45", tween: [ "style", "${_Data_2_1}", "left", '363px', { fromValue: '334px'}], position: 10250, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-102362068");
