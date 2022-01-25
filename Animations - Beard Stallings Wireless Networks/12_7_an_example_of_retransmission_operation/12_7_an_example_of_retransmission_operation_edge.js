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
                id: 'BG',
                display: 'block',
                type: 'image',
                rect: ['94px', '48px','612px','304px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG.png",'0px','0px']
            },
            {
                id: 'B2',
                display: 'block',
                type: 'image',
                rect: ['326px', '78px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"B.png",'0px','0px']
            },
            {
                id: 'ACK_Txt2',
                display: 'block',
                type: 'image',
                rect: ['339px', '118px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK_Txt.png",'0px','0px']
            },
            {
                id: 'Downarrow_Short2',
                display: 'block',
                type: 'image',
                rect: ['351px', '119px','19px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Downarrow_Short.png",'0px','0px']
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['212px', '25px','221px','28px','auto', 'auto'],
                text: "The Master retransmits B, along with ACK for Packet G.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text6',
                display: 'block',
                type: 'text',
                rect: ['192px', '24px','320px','28px','auto', 'auto'],
                text: "Packet B is successful, so Slave 1 sends H with ACK for B.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'block',
                type: 'text',
                rect: ['210px', '27px','332px','21px','auto', 'auto'],
                text: "The Master sends Packet X to Slave 2.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ACK_Txt3',
                display: 'block',
                type: 'image',
                rect: ['373px', '153px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK_Txt.png",'0px','0px']
            },
            {
                id: 'Uparrow_Short3',
                display: 'block',
                type: 'image',
                rect: ['389px', '137px','19px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Uparrow_Short.png",'0px','0px']
            },
            {
                id: 'A',
                display: 'block',
                type: 'image',
                rect: ['175px', '78px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"A.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'block',
                type: 'text',
                rect: ['175px', '15px','186px','32px','auto', 'auto'],
                text: "The Master sends Packet A.",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'B',
                display: 'block',
                type: 'image',
                rect: ['252px', '78px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"B.png",'0px','0px']
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['175px', '12px','342px','50px','auto', 'auto'],
                text: "Packet B fails, so Slave 1 sends the NAK bit (ARQN=0) along with Packet G.<br>",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'explosion',
                display: 'block',
                type: 'image',
                rect: ['472px', '230px','49px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"explosion.png",'0px','0px']
            },
            {
                id: 'Downarrow_Long',
                display: 'block',
                type: 'image',
                rect: ['426px', '119px','19px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Downarrow_Long.png",'0px','0px']
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['191px', '27px','279px','32px','auto', 'auto'],
                text: "The Master goes back to sending to Slave 1 and sends Packet C.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text10',
                display: 'block',
                type: 'text',
                rect: ['230px', '30px','326px','22px','auto', 'auto'],
                text: "Slave 1 has no data to send but still replies with an ACK for successful Packet C.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text11',
                display: 'block',
                type: 'text',
                rect: ['224px', '10px','430px','32px','auto', 'auto'],
                text: "The Master sends NAK to Slave 2 since Packet Z failed, Master has no other data to send to Slave 2.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'NAK_Text2',
                display: 'block',
                type: 'image',
                rect: ['565px', '123px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"NAK_Text.png",'0px','0px']
            },
            {
                id: 'Downarrow_Long2',
                display: 'block',
                type: 'image',
                rect: ['576px', '121px','19px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Downarrow_Long.png",'0px','0px']
            },
            {
                id: 'ACK_Txt5',
                display: 'block',
                type: 'image',
                rect: ['490px', '118px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK_Txt.png",'0px','0px']
            },
            {
                id: 'Downarrow_Short3',
                display: 'block',
                type: 'image',
                rect: ['501px', '118px','19px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Downarrow_Short.png",'0px','0px']
            },
            {
                id: 'NAK_Text',
                display: 'block',
                type: 'image',
                rect: ['300px', '145px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"NAK_Text.png",'0px','0px']
            },
            {
                id: 'Uparrow_Short2',
                display: 'block',
                type: 'image',
                rect: ['316px', '137px','19px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Uparrow_Short.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['204px', '13px','439px','32px','auto', 'auto'],
                text: "The Master continues with Packet B, with ACK since Packet F was successful.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'X',
                display: 'block',
                type: 'image',
                rect: ['401px', '78px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"X.png",'0px','0px']
            },
            {
                id: 'C',
                display: 'block',
                type: 'image',
                rect: ['477px', '78px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"C.png",'0px','0px']
            },
            {
                id: 'F',
                display: 'block',
                type: 'image',
                rect: ['212px', '168px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F.png",'0px','0px']
            },
            {
                id: 'ACK_Txt',
                display: 'block',
                type: 'image',
                rect: ['224px', '150px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK_Txt.png",'0px','0px']
            },
            {
                id: 'Uparrow_Short',
                display: 'block',
                type: 'image',
                rect: ['237px', '140px','19px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Uparrow_Short.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['147px', '15px','365px','40px','auto', 'auto'],
                text: "Packet A is successful, so Slave 1 sends the ACK bit (ARQN = 1) along with Packet F.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'H',
                display: 'block',
                type: 'image',
                rect: ['364px', '168px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"H.png",'0px','0px']
            },
            {
                id: 'Untitled-1',
                display: 'block',
                type: 'image',
                rect: ['591px', '258px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px']
            },
            {
                id: 'Text12',
                display: 'block',
                type: 'text',
                rect: ['436px', '16px','224px','32px','auto', 'auto'],
                text: "Slave 2 retransmits Packet Z.",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'uparrow_long2',
                display: 'block',
                type: 'image',
                rect: ['616px', '133px','19px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrow_long.png",'0px','0px']
            },
            {
                id: 'Untitled-12',
                display: 'block',
                type: 'image',
                rect: ['439px', '258px','69px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px']
            },
            {
                id: 'explosion2',
                display: 'block',
                type: 'image',
                rect: ['637', '151','940px','536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"explosion.png",'0px','0px']
            },
            {
                id: 'ACK_Txt4',
                display: 'block',
                type: 'image',
                rect: ['452px', '242px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK_Txt.png",'0px','0px']
            },
            {
                id: 'uparrow_long',
                display: 'block',
                type: 'image',
                rect: ['464px', '140px','19px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"uparrow_long.png",'0px','0px']
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['150px', '12px','381px','22px','auto', 'auto'],
                text: "Packet X is successful, so Slave 2 sends Packet Z with ACK for X .",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'ACK',
                display: 'block',
                type: 'image',
                rect: ['526px', '177px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK.png",'0px','0px']
            },
            {
                id: 'ACK_Txt7',
                display: 'block',
                type: 'image',
                rect: ['526px', '147px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK_Txt.png",'0px','0px']
            },
            {
                id: 'Uparrow_Short4',
                display: 'block',
                type: 'image',
                rect: ['538px', '139px','19px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Uparrow_Short.png",'0px','0px']
            },
            {
                id: 'Downarrow_Short',
                display: 'block',
                type: 'image',
                rect: ['200px', '119px','19px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Downarrow_Short.png",'0px','0px']
            },
            {
                id: 'ACK2',
                display: 'block',
                type: 'image',
                rect: ['565px', '87px','22px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ACK.png",'0px','0px']
            },
            {
                id: 'G',
                display: 'block',
                type: 'image',
                rect: ['304px', '180px','35px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"G.png",'0px','0px']
            },
            {
                id: 'Original2',
                display: 'block',
                type: 'image',
                rect: ['58px', '45px','612px','304px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Original.png",'0px','0px']
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['151px', '410px','524px','50px','auto', 'auto'],
                text: "Figure 12.7 An Example of Retransmission Operation",
                align: "left",
                font: ['Times New Roman, Times, serif', [119, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'Text14',
                display: 'block',
                type: 'text',
                rect: ['143px', '366px','480px','26px','auto', 'auto'],
                text: "Click or Touch on Figure for Each Step of the Animation",
                align: "left",
                font: ['Times New Roman, Times, serif', [94, "%"], "rgba(0,0,0,1)", "bold", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_X}": [
                ["style", "top", '78px'],
                ["style", "left", '401px'],
                ["style", "display", 'block']
            ],
            "${_explosion}": [
                ["style", "top", '165px'],
                ["style", "height", '28px'],
                ["style", "display", 'block'],
                ["style", "left", '262px'],
                ["style", "width", '49px']
            ],
            "${_ACK_Txt}": [
                ["style", "top", '150px'],
                ["style", "left", '224px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_BG}": [
                ["style", "top", '48px'],
                ["style", "left", '94px'],
                ["style", "display", 'block']
            ],
            "${_B}": [
                ["style", "top", '78px'],
                ["style", "left", '252px'],
                ["style", "display", 'block']
            ],
            "${_Uparrow_Short3}": [
                ["style", "top", '137px'],
                ["style", "left", '389px'],
                ["style", "display", 'block']
            ],
            "${_Text14}": [
                ["style", "top", '392px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '205px'],
                ["style", "font-size", '94%']
            ],
            "${_Text4}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '276px']
            ],
            "${_ACK}": [
                ["style", "top", '177px'],
                ["style", "left", '526px'],
                ["style", "display", 'block']
            ],
            "${_Uparrow_Short2}": [
                ["style", "top", '137px'],
                ["style", "left", '316px'],
                ["style", "display", 'block']
            ],
            "${_Downarrow_Long2}": [
                ["style", "top", '121px'],
                ["style", "left", '576px'],
                ["style", "display", 'block']
            ],
            "${_ACK_Txt4}": [
                ["style", "top", '242px'],
                ["style", "left", '452px'],
                ["style", "display", 'block']
            ],
            "${_Text9}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_C}": [
                ["style", "top", '78px'],
                ["style", "left", '477px'],
                ["style", "display", 'block']
            ],
            "${_Uparrow_Short}": [
                ["style", "top", '140px'],
                ["style", "left", '237px'],
                ["style", "display", 'block']
            ],
            "${_Untitled-1}": [
                ["style", "top", '258px'],
                ["style", "left", '591px'],
                ["style", "display", 'block']
            ],
            "${_Untitled-12}": [
                ["style", "top", '258px'],
                ["style", "left", '439px'],
                ["style", "display", 'block']
            ],
            "${_G}": [
                ["style", "top", '180px'],
                ["style", "left", '304px'],
                ["style", "display", 'block']
            ],
            "${_A}": [
                ["style", "top", '78px'],
                ["style", "left", '175px'],
                ["style", "display", 'block']
            ],
            "${_Text7}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif']
            ],
            "${_Downarrow_Long}": [
                ["style", "top", '119px'],
                ["style", "left", '426px'],
                ["style", "display", 'block']
            ],
            "${_Text3}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '267px']
            ],
            "${_NAK_Text}": [
                ["style", "top", '145px'],
                ["style", "left", '300px'],
                ["style", "display", 'block']
            ],
            "${_Text5}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '221px']
            ],
            "${_Text11}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '341px']
            ],
            "${_Downarrow_Short3}": [
                ["style", "top", '118px'],
                ["style", "left", '501px'],
                ["style", "display", 'block']
            ],
            "${_H}": [
                ["style", "top", '168px'],
                ["style", "left", '364px'],
                ["style", "display", 'block']
            ],
            "${_Original2}": [
                ["style", "top", '45px'],
                ["style", "left", '58px'],
                ["style", "display", 'block']
            ],
            "${_Downarrow_Short2}": [
                ["style", "top", '119px'],
                ["style", "left", '351px'],
                ["style", "display", 'block']
            ],
            "${_ACK_Txt2}": [
                ["style", "top", '118px'],
                ["style", "left", '339px'],
                ["style", "display", 'block']
            ],
            "${_uparrow_long2}": [
                ["style", "top", '133px'],
                ["style", "left", '616px'],
                ["style", "display", 'block']
            ],
            "${_Uparrow_Short4}": [
                ["style", "top", '139px'],
                ["style", "left", '538px'],
                ["style", "display", 'block']
            ],
            "${_ACK_Txt3}": [
                ["style", "top", '153px'],
                ["style", "left", '373px'],
                ["style", "display", 'block']
            ],
            "${_B2}": [
                ["style", "top", '78px'],
                ["style", "left", '326px'],
                ["style", "display", 'block']
            ],
            "${_Text8}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "width", '251px']
            ],
            "${_ACK_Txt5}": [
                ["style", "top", '118px'],
                ["style", "left", '490px'],
                ["style", "display", 'block']
            ],
            "${_ACK2}": [
                ["style", "top", '87px'],
                ["style", "left", '565px'],
                ["style", "display", 'block']
            ],
            "${_ACK_Txt7}": [
                ["style", "top", '147px'],
                ["style", "left", '526px'],
                ["style", "display", 'block']
            ],
            "${_uparrow_long}": [
                ["style", "top", '140px'],
                ["style", "left", '464px'],
                ["style", "display", 'block']
            ],
            "${_explosion2}": [
                ["style", "top", '151px'],
                ["style", "height", '536px'],
                ["style", "display", 'block'],
                ["style", "left", '637px'],
                ["style", "width", '940px']
            ],
            "${_Text13}": [
                ["style", "top", '418px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '173px'],
                ["style", "font-size", '119%']
            ],
            "${_Text6}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "top", '24px'],
                ["style", "width", '241px']
            ],
            "${_Downarrow_Short}": [
                ["style", "top", '119px'],
                ["style", "left", '200px'],
                ["style", "display", 'block']
            ],
            "${_Text}": [
                ["style", "top", '15px'],
                ["style", "width", '186px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "font-size", '94%']
            ],
            "${_Text12}": [
                ["style", "top", '16px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '436px'],
                ["style", "width", '224px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '450px'],
                ["style", "width", '750px']
            ],
            "${_NAK_Text2}": [
                ["style", "top", '123px'],
                ["style", "left", '565px'],
                ["style", "display", 'block']
            ],
            "${_Text10}": [
                ["style", "display", 'block'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '228px'],
                ["style", "width", '316px']
            ],
            "${_F}": [
                ["style", "top", '168px'],
                ["style", "left", '212px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 26139,
            autoPlay: true,
            timeline: [
                { id: "eid120", tween: [ "style", "${_Downarrow_Long2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_Downarrow_Long2}", "display", 'block', { fromValue: 'none'}], position: 21150, duration: 0 },
                { id: "eid125", tween: [ "style", "${_Downarrow_Long2}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Text14}", "left", '205px', { fromValue: '205px'}], position: 26038, duration: 0 },
                { id: "eid184", tween: [ "style", "${_Text13}", "left", '173px', { fromValue: '173px'}], position: 26038, duration: 0 },
                { id: "eid87", tween: [ "style", "${_explosion2}", "height", '22px', { fromValue: '536px'}], position: 15250, duration: 1250 },
                { id: "eid112", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid117", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 20750, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 6845, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid132", tween: [ "style", "${_Untitled-1}", "top", '78px', { fromValue: '258px'}], position: 23900, duration: 1350 },
                { id: "eid19", tween: [ "style", "${_ACK_Txt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_ACK_Txt}", "display", 'block', { fromValue: 'none'}], position: 2615, duration: 0 },
                { id: "eid23", tween: [ "style", "${_ACK_Txt}", "display", 'none', { fromValue: 'block'}], position: 3895, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 290, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2045, duration: 0 },
                { id: "eid11", tween: [ "style", "${_A}", "top", '168px', { fromValue: '78px'}], position: 750, duration: 1000 },
                { id: "eid101", tween: [ "style", "${_ACK_Txt5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_ACK_Txt5}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0 },
                { id: "eid106", tween: [ "style", "${_ACK_Txt5}", "display", 'none', { fromValue: 'block'}], position: 18585, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Downarrow_Short2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Downarrow_Short2}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Downarrow_Short2}", "display", 'none', { fromValue: 'block'}], position: 10685, duration: 0 },
                { id: "eid89", tween: [ "style", "${_explosion2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_explosion2}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid154", tween: [ "style", "${_explosion2}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Text6}", "width", '241px', { fromValue: '241px'}], position: 11375, duration: 0 },
                { id: "eid85", tween: [ "style", "${_explosion2}", "left", '454px', { fromValue: '637px'}], position: 15250, duration: 1250 },
                { id: "eid41", tween: [ "style", "${_Uparrow_Short2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Uparrow_Short2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Uparrow_Short2}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid145", tween: [ "style", "${_ACK}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid146", tween: [ "style", "${_ACK}", "display", 'block', { fromValue: 'none'}], position: 19087, duration: 0 },
                { id: "eid153", tween: [ "style", "${_ACK}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 14913, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 16835, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 17070, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 18874, duration: 0 },
                { id: "eid181", tween: [ "style", "${_Text11}", "width", '341px', { fromValue: '341px'}], position: 21108, duration: 0 },
                { id: "eid28", tween: [ "style", "${_B}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_B}", "display", 'block', { fromValue: 'none'}], position: 4800, duration: 0 },
                { id: "eid37", tween: [ "style", "${_B}", "display", 'none', { fromValue: 'block'}], position: 6323, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 13294, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 14653, duration: 0 },
                { id: "eid114", tween: [ "style", "${_ACK}", "top", '88px', { fromValue: '177px'}], position: 19298, duration: 1000 },
                { id: "eid190", tween: [ "style", "${_Text10}", "left", '228px', { fromValue: '228px'}], position: 19166, duration: 0 },
                { id: "eid75", tween: [ "style", "${_X}", "top", '258px', { fromValue: '78px'}], position: 13500, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_B}", "top", '154px', { fromValue: '78px'}], position: 5313, duration: 1010 },
                { id: "eid139", tween: [ "style", "${_X}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${_X}", "display", 'block', { fromValue: 'none'}], position: 13358, duration: 0 },
                { id: "eid159", tween: [ "style", "${_X}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid163", tween: [ "style", "${_BG}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid127", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 23250, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Downarrow_Long}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Downarrow_Long}", "display", 'block', { fromValue: 'none'}], position: 13440, duration: 0 },
                { id: "eid95", tween: [ "style", "${_Downarrow_Long}", "display", 'none', { fromValue: 'block'}], position: 14575, duration: 0 },
                { id: "eid108", tween: [ "style", "${_Uparrow_Short4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_Uparrow_Short4}", "display", 'block', { fromValue: 'none'}], position: 19166, duration: 0 },
                { id: "eid115", tween: [ "style", "${_Uparrow_Short4}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid35", tween: [ "style", "${_explosion}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_explosion}", "display", 'block', { fromValue: 'none'}], position: 6323, duration: 0 },
                { id: "eid160", tween: [ "style", "${_explosion}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid180", tween: [ "style", "${_Text10}", "width", '316px', { fromValue: '316px'}], position: 19087, duration: 0 },
                { id: "eid121", tween: [ "style", "${_NAK_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_NAK_Text2}", "display", 'block', { fromValue: 'none'}], position: 21150, duration: 0 },
                { id: "eid126", tween: [ "style", "${_NAK_Text2}", "display", 'none', { fromValue: 'block'}], position: 23000, duration: 0 },
                { id: "eid54", tween: [ "style", "${_ACK_Txt2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_ACK_Txt2}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0 },
                { id: "eid58", tween: [ "style", "${_ACK_Txt2}", "display", 'none', { fromValue: 'block'}], position: 10685, duration: 0 },
                { id: "eid149", tween: [ "style", "${_Untitled-1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Untitled-1}", "display", 'block', { fromValue: 'none'}], position: 23669, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Untitled-1}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid185", tween: [ "style", "${_Text13}", "top", '418px', { fromValue: '418px'}], position: 26038, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 10954, duration: 0 },
                { id: "eid109", tween: [ "style", "${_ACK_Txt7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_ACK_Txt7}", "display", 'block', { fromValue: 'none'}], position: 19166, duration: 0 },
                { id: "eid116", tween: [ "style", "${_ACK_Txt7}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid124", tween: [ "style", "${_ACK2}", "top", '267px', { fromValue: '87px'}], position: 21355, duration: 1480 },
                { id: "eid16", tween: [ "style", "${_F}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_F}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid157", tween: [ "style", "${_F}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid57", tween: [ "style", "${_B2}", "top", '168px', { fromValue: '78px'}], position: 9460, duration: 1040 },
                { id: "eid18", tween: [ "style", "${_Uparrow_Short}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Uparrow_Short}", "display", 'block', { fromValue: 'none'}], position: 2615, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Uparrow_Short}", "display", 'none', { fromValue: 'block'}], position: 3895, duration: 0 },
                { id: "eid166", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 26139, duration: 0 },
                { id: "eid143", tween: [ "style", "${_C}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid144", tween: [ "style", "${_C}", "display", 'block', { fromValue: 'none'}], position: 17192, duration: 0 },
                { id: "eid158", tween: [ "style", "${_C}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid130", tween: [ "style", "${_uparrow_long2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_uparrow_long2}", "display", 'block', { fromValue: 'none'}], position: 23750, duration: 0 },
                { id: "eid133", tween: [ "style", "${_uparrow_long2}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
                { id: "eid79", tween: [ "style", "${_ACK_Txt4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_ACK_Txt4}", "display", 'block', { fromValue: 'none'}], position: 15079, duration: 0 },
                { id: "eid92", tween: [ "style", "${_ACK_Txt4}", "display", 'none', { fromValue: 'block'}], position: 16690, duration: 0 },
                { id: "eid147", tween: [ "style", "${_ACK2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${_ACK2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid152", tween: [ "style", "${_ACK2}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid64", tween: [ "style", "${_ACK_Txt3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_ACK_Txt3}", "display", 'block', { fromValue: 'none'}], position: 11460, duration: 0 },
                { id: "eid69", tween: [ "style", "${_ACK_Txt3}", "display", 'none', { fromValue: 'block'}], position: 12841, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Untitled-12}", "top", '116px', { fromValue: '258px'}], position: 15250, duration: 1250 },
                { id: "eid88", tween: [ "style", "${_explosion2}", "width", '39px', { fromValue: '940px'}], position: 15250, duration: 1250 },
                { id: "eid189", tween: [ "style", "${_Text14}", "top", '392px', { fromValue: '392px'}], position: 26038, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 13090, duration: 0 },
                { id: "eid51", tween: [ "style", "${_B2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_B2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid162", tween: [ "style", "${_B2}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid104", tween: [ "style", "${_C}", "top", '168px', { fromValue: '78px'}], position: 17405, duration: 1050 },
                { id: "eid45", tween: [ "style", "${_G}", "top", '90px', { fromValue: '180px'}], position: 7190, duration: 1000 },
                { id: "eid128", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0 },
                { id: "eid134", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 25750, duration: 0 },
                { id: "eid135", tween: [ "style", "${_G}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${_G}", "display", 'block', { fromValue: 'none'}], position: 6955, duration: 0 },
                { id: "eid151", tween: [ "style", "${_G}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4210, duration: 0 },
                { id: "eid22", tween: [ "style", "${_F}", "top", '78px', { fromValue: '168px'}], position: 2750, duration: 1000 },
                { id: "eid63", tween: [ "style", "${_Uparrow_Short3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Uparrow_Short3}", "display", 'block', { fromValue: 'none'}], position: 11460, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Uparrow_Short3}", "display", 'none', { fromValue: 'block'}], position: 12841, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4650, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 6555, duration: 0 },
                { id: "eid141", tween: [ "style", "${_Untitled-12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid142", tween: [ "style", "${_Untitled-12}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Untitled-12}", "display", 'none', { fromValue: 'block'}], position: 16500, duration: 0 },
                { id: "eid86", tween: [ "style", "${_explosion2}", "top", '128px', { fromValue: '151px'}], position: 15250, duration: 1250 },
                { id: "eid1", tween: [ "style", "${_A}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_A}", "display", 'block', { fromValue: 'none'}], position: 460, duration: 0 },
                { id: "eid161", tween: [ "style", "${_A}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid42", tween: [ "style", "${_NAK_Text}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_NAK_Text}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_NAK_Text}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0 },
                { id: "eid67", tween: [ "style", "${_H}", "top", '78px', { fromValue: '168px'}], position: 11671, duration: 1010 },
                { id: "eid177", tween: [ "style", "${_Text4}", "width", '276px', { fromValue: '276px'}], position: 7060, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Text8}", "width", '251px', { fromValue: '251px'}], position: 15631, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Downarrow_Short}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Downarrow_Short}", "display", 'block', { fromValue: 'none'}], position: 635, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Downarrow_Short}", "display", 'none', { fromValue: 'block'}], position: 1860, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Original2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Original2}", "display", 'block', { fromValue: 'none'}], position: 26139, duration: 0 },
                { id: "eid80", tween: [ "style", "${_uparrow_long}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_uparrow_long}", "display", 'block', { fromValue: 'none'}], position: 15079, duration: 0 },
                { id: "eid91", tween: [ "style", "${_uparrow_long}", "display", 'none', { fromValue: 'block'}], position: 16690, duration: 0 },
                { id: "eid137", tween: [ "style", "${_H}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid138", tween: [ "style", "${_H}", "display", 'block', { fromValue: 'none'}], position: 11334, duration: 0 },
                { id: "eid156", tween: [ "style", "${_H}", "display", 'none', { fromValue: 'block'}], position: 25874, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Downarrow_Short3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_Downarrow_Short3}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Downarrow_Short3}", "display", 'none', { fromValue: 'block'}], position: 18585, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2805072");
