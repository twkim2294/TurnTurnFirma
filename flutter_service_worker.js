'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1078ce430ac369d8608a3c1dc17ceee4",
".git/config": "760174ca31feed869d0665f04dd968c0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b2baf8b099147faf3f83be8251f2891c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "08ab7beb2f967ac008fdfae93d5afb5d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b47fda3813945544019adb17f45d40f",
".git/logs/refs/heads/main": "2e5c1712556a0c309010d8fac5d07f8e",
".git/logs/refs/remotes/origin/main": "6a24db45ffa86a9ccc8407301b719832",
".git/objects/01/4f2a51843e5a351c4db8f07f5f08b79e00b43b": "dbb07d70cf5ed377cbe718074f2cedb4",
".git/objects/02/81e9b2f38167a8b7b139ec3e335291c803c400": "4938c306304af018ab1c16ae6c31f739",
".git/objects/02/8be830ebcebc2219128e3a4df80bdab58e1e2c": "c96e2c6e59b072a970ed7a0d04e9fd08",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/40ec071357b98e67d2eea6fdf3c071560bd8c0": "b8ac84cf9fe2735213c0a92005052f34",
".git/objects/06/cf038329e7c3f92f7eafd61b298282be59ee01": "02f8692a10dcdcea00053808932456c0",
".git/objects/08/6052e34c74e32b1185322837edffb3f5bfb8f4": "24333b441e0329fc924faf68b38a4205",
".git/objects/15/dab50dc3869dfc8054fe37a1b6a8cba44e89a8": "8061d4e349cfd9b4055faf6f82200701",
".git/objects/19/617fc61e66232fdb0072e8a702702cc96a4d58": "4db64b7409b9c7bc1eac755db911ba00",
".git/objects/1a/28600b182fd58fa019d4dbc4f97ff78708a431": "836a39730eee4682bd2537f28cff6b79",
".git/objects/1c/936751797d164da8773984946504616d2fec72": "2d5d34535f1fb6cc39c1424ab0eef66e",
".git/objects/1f/b5dc27fd1ee1242f71aee07110a8a23254b617": "c62bf4d7c87e89aad4361cdcc8a39a90",
".git/objects/20/74fd2b14e8d6ba2736a20c1f63ebb4c9c9cecb": "ee7cd0afdde399b8d20f21893287231d",
".git/objects/21/2ce741b8c8e72a6b3ecdf38e16d51efc26c17b": "4b871ab14d4196488952d354922e8e3b",
".git/objects/25/eddeb11eeec4d6a3b3d2eab7b41593b6124646": "a61b09ad017101c6e0cc4680745faae1",
".git/objects/26/2ecbd969db5754b5f43e64d50e984404bbffa1": "5212d34a140db65cfd106a6af014f83e",
".git/objects/27/45b3968ab4d2b1f5757b79cff941fedd381da6": "94cc8b5a6def594b5615a3f730d85c9d",
".git/objects/29/a26093033a7e96eef227abd0d6c5e5d5d0cc79": "8b79d3301fe5e58dd008ebc8f118dc54",
".git/objects/2a/a63dfd6a9782d3c22421b0db8c141d7b1683f5": "9b6909ba4068a71ca1765a7d849fe23e",
".git/objects/2d/9ab70aae1b47c2aa15fe1e327d40963e791a87": "09575f558c0442e3b7a8af0a73070f75",
".git/objects/2d/a49b7684adaa9bdb626553a533687b4351b603": "e7b1c94461be45f7ff3f879579cdd36a",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/d4c6373f89e875ca4be88d68488b7c3000eaa6": "a5b5c595304ffa4164bc13f7957e34ef",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/b265555ed213349472752c901ac7192e11238b": "c25c518eb0b59326cfabf53f5dab0910",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/9ce2bdaf62c57e62ac324db531a51db0b559a2": "de08dba0a214b1256c58c7dade968b32",
".git/objects/3c/f01ba38c5e75dc4d46bdb51dc10be58f1ac037": "cbb3edcd10070b03ad41cb0ff8f02902",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3e/eb814c84f3c95845da79f0dd3441c661d59176": "798a89bf19ed1bf6fa3530e636b99445",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/5be293aeedbb290fc0c5fdf8bae0249fd6c911": "7ce122c2d778367670cbed1508f54592",
".git/objects/45/3574faf98432de53727a1d296ca41c409d490a": "787f7021a2c35d3ecf546f0c038f1671",
".git/objects/45/45f40f4ea31398b33f3118839fc8abf8cc07f9": "42777d21c471b5dad18bd22cc9cb8b23",
".git/objects/46/310e3bce2d4b4bbcbb9e79bb6cfd6ad092f2b5": "e94c2d4ab4bffd5b1fd5b57f9858b04c",
".git/objects/48/b79b9b777ba94fca7d15316ae08e7a0b9df425": "c2e52464f8652894924b93fc6e12f7f6",
".git/objects/4a/8d0dcadd117809a31a03d5d3449b2258d99935": "29fb766e559bbfd64e73a93a7744d7ad",
".git/objects/4e/150beae64f170bbf461aeb4029b43273418266": "89ef8f6c33daf3c976ea03a12cea2351",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/7e17442e8fc50a6de51d442853d7b8fede82cf": "cc739176415569f8dc3f21a73e38158c",
".git/objects/4f/cbecb59cbe2b8054d4f2a64b932de06fa56927": "5a1fa8d58d3732f0f7d7e0371e17105b",
".git/objects/50/6136b1ee991104634d9e7115f1f55d5c745dd0": "043b3d212e9fa377747682cd9339cfdd",
".git/objects/51/2329eff8b038817e728ccda61786398aef75e9": "70c731680244ff6575655bc3234110c5",
".git/objects/53/f519b74b2a0e46721eca928371370b594fc535": "acfff35e9d9021cce1354e343248be99",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/6955975303f0b3afd5b101756147ac67023d51": "2950d75238cf279e23fd1b3e6246de58",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5d/e480b2bbf7ae057036b765a4518f0c2b8e709e": "8b28c735ee48592390c52fe22fd53531",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/d67960e67716d91136494b75938e4e19db6f00": "47bef9bdd82308977dc8a7ce4aed0b56",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/a5e4200b108749f730ed38ae1f244d2d21ac99": "ac0a3b341efb2cbde3da518348b7bacd",
".git/objects/67/8412214b09c31caac7274e567c23d1612c638d": "d17087c1e0a52275a61362043df61d9e",
".git/objects/68/9b8e106b7bb3f57f9dfb8a22be57be6b5b62cf": "40f47e4a66a171855320f5d68c114d2c",
".git/objects/69/55e7cfc50084d6f9cada6fc9dfa44e977fd173": "978b32c1a71953902dbefb62dec9f946",
".git/objects/6b/2fec52c4315afcb07109f6869e3693e513707f": "e9ad6f8acdd099f7d7d3652fa66df694",
".git/objects/6c/c178699931dddfeb2ff489d37d02db72bff2f8": "7aa13eb8fdc45564d00273573ad6bded",
".git/objects/6d/62956be165dfa46b7742362e011faff6c8a009": "3d01f5680e1ff887027b4a346f5861be",
".git/objects/6e/322c0a0b161ac418b8664b0c7b6aa2606c0974": "bf3076066062ea90a9108d8019af9e97",
".git/objects/6f/c31cf3b569630bf619373bb787da535fbb70b5": "3b6bb1dbf6fee6970258024dffcb077a",
".git/objects/71/29c0f0472fc99509cb6f1eee294cc8a7c53e16": "0131bc4d9ada9d5ec3e80cabbe47efc4",
".git/objects/72/8bf172e79a2cc846b8fce5b45a3902664beb56": "e3e38c012e0ca0bac42b07edf08b9592",
".git/objects/76/382088c86b22a209cbc9ea135d0df2ef6121fe": "af46878534e4d622a9070cf66f44c37a",
".git/objects/7b/66ba0e890aa5fdac392477447052634211c34b": "bcabc86cf59d4b89de76aab4ea8927f0",
".git/objects/7c/fa60f674fd282d1dbcedf7407f57ca153ac293": "2f3ca0a8030dacceea59b4f88579d536",
".git/objects/7e/10a947e433307d1e00aafaea55faa1c768a8bd": "86d4266941371a5e92a7a9a273084d94",
".git/objects/7f/27ac3eff58574712c4e201d5194c6f33f09cb3": "7a89e9df45ce8768d51eb655da71747b",
".git/objects/7f/e67b8f7af129a8ba0462f645cfb6f2394a4e41": "070f96687afb16d701834d5c6b4a14af",
".git/objects/82/128a60a9caa9fd3c16afae395e411c2c46b9be": "1bb9d331b8cf91489dfdbb76262582ae",
".git/objects/83/60a12f668fbea24ad69033fe8b01f9b6525e94": "1a2cfa0fde1da52f0fbdf85ebe67541b",
".git/objects/83/eb8aa7ee7f5b56410622312702f730fac2838e": "c56532ee2c106e2bd59395ff9d2dc2ee",
".git/objects/86/1b769c791e8652b39ab571aaf11a587ac05b0d": "d1e997fac1545281f109260be465919b",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/22cfc6dbde11ef0f26270797b505c46aa570d7": "acd55137dab14d7dc01692ee9e17fc25",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c456dad6825b659c9487bdda01d4dd952431e4": "1d7f15f18fbc19c3b88bec690aebc44a",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/a1f9881a36e286d8a5853a96d503448762660e": "4f8b79ffae7909fef85ce50c3d9d5193",
".git/objects/96/24a69cea99c4328b1f8f72e7c158e0160fea0f": "0441aea605d82102f4800a3b3e323218",
".git/objects/97/52c61da6918ca62eb60859822a642fd0890b1a": "af576fe536e56acb53507d87944ba7b7",
".git/objects/9a/3de3b24bc4cc113d4c85621b40dc96e5a3b0ba": "1418188752e918216c1bd482f3dbb9e7",
".git/objects/9a/dee40c36b0f78b35ddd80e56194a451eb49214": "f9bde5c5edc965d8aeef51bf042f6f96",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/eb7eacc2e4b1943a46994d768f41fda66a6151": "165afa130a116560387bb9eed0406648",
".git/objects/a1/f12e54ff9afeb11362b176f4dcb2a9be69cb9c": "a5720aec0705dad67c75f04b7f0a04a8",
".git/objects/a3/b02de8231be7fc67d8ceaa913010b48a30eedc": "50647f19bb71c15f5f6875b8de67b552",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/5edcb3bfb8af7e14bfce40933ab729b02a2cf5": "50f2749fd45120da60dcc0c21a673c40",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/6835363f70b38938020486d343e59c713d2532": "1414a89cd5c61fd99b212d07dde8c0f6",
".git/objects/ab/0d2773bfd46ae9567d8be2933d248cb6980cd0": "d66ef311048ea87ff1d682935137d4e4",
".git/objects/b1/e85b965f2f25d639a51cd28d7e37f3d9431852": "6000a4ce3766fc44a6febd5ec254f24a",
".git/objects/b2/ce10ec35e69fac8009cff746d19f81ed0c0f45": "cb47d504f851ac4f5fdd3d8ef6d7060b",
".git/objects/b3/eba6a7ebd2c81d64dd86589a45f505dedcd7a6": "3bd4abc1ca6a60a7f983bdd7162e1311",
".git/objects/b4/c27c13674070d0aec311380f27a35abfdc939e": "f6697c82cf82022e62842fdef987e822",
".git/objects/b5/bffd8e9d34f842daf0b728dd9b0ad38c0797b1": "ea2d616fe9a482f488dbbd446bc0a6df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7dda9b64234e07efef719feacb72a5518762ca": "cc1834aff7b1fabc964f9e3c3a20f81e",
".git/objects/ba/faf7f5b666e3180dd26aa34563619874389061": "d372c49533b920b3ed6dfe7b741e2fb6",
".git/objects/bc/86ce86792279ea06372a03ca46cf2b59bfd4ac": "3fe75f623c53a78211b9428b90be49fd",
".git/objects/bd/a174d72659b319fca79d2b93c444520b8725be": "651dd2814eedf5a41289952129cbaa4b",
".git/objects/be/fbc2bd9f0fc2dd9661f15e37d53a91482e7362": "4530af8b78bbb3c231f91f36aac836d3",
".git/objects/c3/58f8ca3a489c6a02f79db2d277d46963a74b9b": "68d0fb0e6afd1e9aa3afee2e623bf610",
".git/objects/c3/67b1a3e35b51be9fe7c66d8f0ec3fa6eb6ffad": "ccc62ffd1f8bbc99d72e29e58d1814ed",
".git/objects/ca/423b345a2e43e4353abbb167284ee1d1cbc3b8": "12f67809fa51c55ef2585265c66c567e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/ed1d9ac029103e729692d93f16a990c37a2501": "cb82c48b5039fe3a72dadd941aaf6c13",
".git/objects/cc/638c7c2af10924fa6c3e1edec0636d0fb15698": "c9ccb0b1d141a9fd51af346e0e575ce0",
".git/objects/cd/63d833241d15d55990de2fd90737ffe8eebf0e": "40268f0817beaca58b0a5fc405b148cd",
".git/objects/ce/6cbd3c4411cb0ef1eb7fa4d55a2b848b0d6ab6": "0ff03626365e019b0da889d67978b3a4",
".git/objects/cf/d3bbfbb2ac1a7046bf20f447d6748ad6fb016d": "0a1aa83ff1b06ef567a3c0d07f05f4c4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/edd8e241c204f9d26cb05258a608fcd44a2821": "aac81b32520ac041236088dba1ab5288",
".git/objects/d8/2234f4be618522eca48b6c9a3d5bbf063fac8d": "359f8a71e9a7c18576d421bc8f4e303e",
".git/objects/d9/266f67e5904523949d60694033614beeb8cb47": "1ee3bce4221eaa386e607139444f2699",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/4c404793280f5f38693d3c44a022ade2326885": "217f698ff1ac39a6fa48ece2d74d7d6c",
".git/objects/df/4d2c84a185faa8be7663dea8761f1a8a64e02f": "846b5d4e76959258cbdc38bcf73adda9",
".git/objects/e0/4c16a404ec6dfb9c496a1c3c964a58c4a79414": "d575c2c8c1887eb8bdb693a41745493f",
".git/objects/e3/b358888309f1bab449f43bc83b90ec8342f4de": "2a9d92cce330ce80b387a8b5d9fc76b7",
".git/objects/e3/b697a657e3c3a569ab20aa881d3d1b9841cca6": "a82cb2261037c02f9de71b224f84c5bc",
".git/objects/e3/d5afd1b01c5150c1ce53106992adf59b3ca8c0": "ecb1ec957cacc284625f682a91340dbf",
".git/objects/e5/61a9262196291759f634b4fe4e026eece17740": "8e2ca2ced98829017e64e8406eb85ae7",
".git/objects/e8/b6a07c3b7b1651baee6be66b8cdddd9f42e831": "24361cf75fb5583cf3c845bb2e0a7891",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/0e259911c93e67d1687b16bd0d3ebdd7cf5189": "ec719b3dfa64066f548d6b7a5c4e7981",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/0750bc0b1e58b8a5f75ce178bff35a93cdae3a": "f84c7bfa671230d857a3e102c4a15565",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/54f2326934ba642a0e2be3ceb036cc9427803a": "d8fa41770eff0132b5dae9d6e5fa6d01",
".git/objects/f9/6891f8c19939f64927b6d9c47bcdf56aa5ac78": "4d98cb3dd015382f59c0e1334b1dcd35",
".git/objects/fa/6e34a8afeb85ca1c0edf3897708c59e2464551": "b815ddcd499c4cf23e8b6b3a7d138262",
".git/objects/fa/909e6794d4be14382e8b03644d972a677babca": "f1b7e942a16900a12151a898f3afb273",
".git/objects/fd/d2b08f1f410664233ed2789c15d8e8e3c80a0d": "094d0ffe2ce8ceb8ad1624f3bfcc933b",
".git/ORIG_HEAD": "ff499b02ab8c1776f0fd508f438475d0",
".git/refs/heads/main": "e6d429566ba3c8e5590854ded65f93ac",
".git/refs/remotes/origin/main": "e6d429566ba3c8e5590854ded65f93ac",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a33f987cde4becc5255ca33eb1da2a89",
"assets/NOTICES": "bd8a673e40264cacc57dc95c8e5821d2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7c63dc695eff0835d7837ebc7c87c588",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1aa11fa95e8031a73edaa631f38123c8",
"/": "1aa11fa95e8031a73edaa631f38123c8",
"main.dart.js": "878e73b771f9115cd3c36a9ff9036522",
"manifest.json": "5e609d46fe1d558a53aea00265883bf7",
"README.md": "a28f9a824ccac16a5a652529d733d400",
"version.json": "2ce7088cc4e6c67f33dfe26543d6db41"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
