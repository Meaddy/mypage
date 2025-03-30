
export default {
    reimu: {
        id: "eimu", title: "博丽灵梦", image: "/images/reimu.jpg", content: [
            '神技:每回合限一次,你为你使用的下一张牌选择一项:1.无次数距离限制;2.不能被响应;背水:失去一点体力.',
            '喜:\n封印:当你体力值减少一点时,你可以摸一张牌并令一名其他角色选择:1.弃一张牌,令你每回合使用[神技]的次数加一.2.翻面.',
            '怒:\n退治:一名角色本回合每成为过你使用牌的目标一次,本回合你对其造成的伤害加一.',
            '哀:\n鬼缚:当与你距离不大于一的角色受到伤害后,你可以弃置x-1张手牌,然后你摸x张牌并令其下一次受到的伤害加一并选择:1.将这些牌交给受伤角色.2令其回复x+1点体力并弃置一张手牌.(x等于此次伤害)',
            '乐:\n梦想:锁定技,当你发动[神技]后使用的第一张牌为基本牌,则直到你下个回合开始时,你区域内的所有牌均视为此牌(点数与花色均与此牌相同,不符合游戏规则的牌置入弃牌堆);为锦囊牌,则你下个回合使用的牌均触发此次神技选择的效果(含背水代价);为装备牌,则你失去此技能,然后本局游戏你使用牌时无次数距离限制,不能被响应且无视其他角色装备与技能.'
        ]
    },
    marisa: {
        id: "marisa", title: "雾雨魔理沙", image: "/images/marisa.jpg", content: [
            '魔炮: 出牌阶段限一次, 你可以弃置x张手牌, 令一名角色受到x - 1 / 2点雷属性伤害.(向下取整)',
            '喜:\n盗窃: 摸牌阶段, 你可以少摸一张牌, 然后进行一次判定.若为黑色, 则你获得任意名角色区域内至多两张牌, 若为红色, 则你受到一名其他角色造成的一点伤害, 然后摸三张牌, 本回合[魔炮]不能指定该角色为目标.',
            '怒:\n过载: 限定技, 你回合开始时, 你可以摸四张牌并跳过本回合摸牌阶段与弃牌阶段.这些牌不能使用或打出直到本回合结束.你的下个回合出牌阶段开始时的所有手牌均视为[无中生有].',
            '哀:\n势压: 当你受到伤害前, 其他角色可以依次选择是否交给你一张手牌并防止一点伤害, 然后你下回合[魔炮]不能指定选择交给你牌的角色为目标.你每受到一点伤害, 你下回合发动[魔炮]时视为你额外弃置两张牌.',
            '乐:\n炼金: 你不能使用或打出锦囊牌.当你弃置锦囊牌时, 若你弃置的所有锦囊牌点数和累计达到七的倍数时, 你可以摸一张牌并选择是否将其交给其他角色, 若累计达到七的七倍时, 你改为视为弃置七张牌发动一次[魔炮], 然后失去此技能, 获得[飞扬], [跋扈].'
        ]
    },
    rumia: {
        id: "rumia", title: "露米娅", image: "/images/rumia.jpg", content: [
            '宵暗:其他角色获得牌时,你可以弃置任意张黑色手牌,依次弃置其所获得的等量的牌.每弃置其一张黑色牌,你摸一张牌.',
            '黑暗:出牌阶段限一次.你进行判定,若为黑色,则你获得该判定牌并可以与一名角色拼点.若你赢,你可以弃置一张黑色手牌并弃置其两张牌,若其中有黑色牌,你摸一张牌.',
            '幽暗:锁定技,你不能成为黑色基本牌与黑色锦囊牌的目标,你不能使用红色装备牌.'
        ]
    },
    daiyousei: {
        id: "daiyousei", title: "大妖精", image: "/images/daiyousei.jpg", content: [
            '舍身:当一名角色在一回合内受到大于一点伤害或受到复数次伤害前,你可以防止该伤害,然后你受到一点伤害或减少一点体力上限.当[杀]或伤害型锦囊牌指定包括你的多名角色为目标时,你可以减少x名其他角色为目标,然后令此牌对你的伤害加x(x为你当前体力值).',
            '再生:你的回合开始时或你受到伤害时,你进行一次判定.若结果为♥,你增加一点体力上限并回复一点体力.若结果为♦,你回复一点体力.'
        ]
    },
    cirno: {
        id: "cirno", title: "琪露诺", image: "/images/cirno.jpg", content: [
            '冰封:当你使用[杀]指定一个目标时,你可以令其选择一项:1.弃置一张牌;2.失去一点体力.',
            '冻结:出牌阶段限一次,你选择一名角色,其不因此技能而失去牌时选择一项:1.弃置一张牌;2.你摸一张牌且本回合使用[杀]的此数加一.',
            '燃雪:锁定技,你受到火属性伤害时,你摸一张牌并选择一项:1,令该伤害翻倍;2,你减少等量体力上限.',

        ]
    },
    hong: {
        id: "hong", title: "红美铃", image: "/images/meiling.jpg", content: [
            '守卫:当与你距离不大于一的角色受到伤害时,你可以防止此伤害并受到等量伤害,然后你使该角色摸一张牌并交给你与此伤害值等量张牌.（不足则全给）',
            '虹彩:摸牌阶段结束后,若你已受伤,你可以弃置任意张手牌，其中每有一种类型的牌,你回复一点体力.',
            '睡狮:锁定技,当你受到伤害后,你于本回合结束前视为对伤害来源或当前回合角色使用一张普通[杀].当你于回合外受到不小于两点并会使你进入濒死状态的伤害时,你防止此伤害并休整一轮,休整结束后你摸与此伤害等量张牌.'
        ]
    },
    koakuma: {
        id: "koakuma", title: "小恶魔", image: "/images/koakuma.jpg", content: [
            '契约:其他角色回合开始时,其可以交给你一张手牌,然后直至其下回合开始,其使用牌指定你为目标时,其可以交给你一张手牌并取消你为此牌目标。',
            '反噬:锁定技,当你体力值减少一点时,令你减少体力值的其他角色需弃置所有手牌,然后你令其与未受[契约]影响的角色各交给你一张牌,若其未交给你牌,你摸与未受[契约]影响角色等量的牌并可以将其中任意张交给受[契约]影响的角色。'
        ]
    },
    patchouli: {
        id: "patchouli", title: "帕秋莉·诺蕾姬", image: "/images/patchouli.jpg", content: [
            '五行:连招技,([借刀杀人]既是单目标非伤害牌又是多目标伤害牌.)\n(伤害牌+基本牌),你可以令此牌无视防具,不能被响应,造成任意类型伤害,且伤害量或回复量加一.\n(多目标牌+伤害牌),你可以令此牌即将造成的伤害视为失去等量的体力与体力上限.\n(非伤害牌+非单目标牌),你可以令此牌的一个目标摸五张牌且这些牌不计入手牌上限.\n(非基本牌+非伤害牌),你可以令此牌的一个目标体力值减少时回复等量体力直至其下回合开始.\n(基本牌+非基本牌),你可以令此牌的一个目标弃置所有手牌并在本回合结束后获得一个额外回合',
            '阴阳:转换技,每回合限一次\n阳:当你发动[五行]时,你可以摸两张牌并可以将其中一张当作任意装备牌置入你的装备区并于本回合结束后置入弃牌堆,然后你使用牌无次数距离限制直至本回合结束.\n阴:当你发动[五行]时,你可以弃置两张手牌并可以将其中一张当作任意基本牌或普通锦囊牌使用,然后你可以视为使用一张任意基本牌或普通锦囊牌.',
            '病弱:锁定技,当你一回合发动其他技能多次时,你失去一点体力.'
        ]
    },
    sakuya: {
        id: "sakuya", title: "十六夜咲夜", image: "/images/sakuya.jpg", content: [
            '世界:限定技,在你回合结束时,你可以获得一个额外回合。此回合开始后,你摸与你判定区内等量的牌并废除判定区,此回合中其他角色所有技能失效,你使用[杀]的次数加一,你使用或打出的牌均不可被响应。',
            '喜:\n收束:锁定技,游戏开始时,你摸一张牌,然后将其当作任意延时性锦囊牌对自己使用。场上判定区内除[闪电]以外的牌结算完成后不会移动至其他区域直到你废除判定区。当你回合开始时,场上每存在一张延时性锦囊牌,你摸一张牌并进行一次判定,然后选择场上一张延时性锦囊牌判定结果视为与此次判定相同。判定牌亮出后,你可以选择中断此次判定并摸一张牌。',
            '怒:\n飞刀:你使用[杀]时,可以改为将其置入目标判定区内,以此法使用的[杀]无次数距离限制。一名角色的判定区内可以同时存在多张[杀]。在[世界]的额外回合结束后,判定区内存在[杀]的角色需打出等量的[杀],其每少打出一张[杀],受到一点伤害。以此法置入判定区的[杀]在判定阶段需进行一次判定,若为♠,保留之并视为你对其使用一张♠普通[杀];若为♣,受到一点伤害并视为你对其使用一张♣普通[杀];若为♥或♦,其可以选择打出一张[闪]或保留之。',
            '哀:\n断裂:限定技,当场上有角色受到会令其进入濒死状态的伤害时,你可以取消之并失去[世界],然后你结束当前角色回合并令你因此技能防止伤害的角色获得一个弃牌与结束阶段,然后令其本次结束阶段时使用[世界]。',
            '乐:\n倒流:你于你的第一个回合开始前获得[断裂],于你的第二个回合开始前获得[收束]与[飞刀]。你于你的第三个回合结束后受到三点伤害并失去[收束]与[飞刀],于你的第四个回合结束后失去四点体力上限并失去[断裂]。(因[飞刀]置入判定区的[杀]在[收束]中视为延时性锦囊牌。)'
        ]
    },
    remilia: {
        id: "remilia", title: "蕾米莉亚·斯卡雷特", image: "/images/remilia.jpg", content: [
            '命运:任意角色的判定牌生效前，你可以用一张手牌替换之。此判定结束后，你摸一张牌。',
            '威严:当你受到未使你进入濒死状态的伤害后，你亮出牌堆顶六张牌，获得其中一种花色的所有牌。当你进入濒死状态时，你亮出并获得牌堆顶三张牌，然后获得令你进入濒死状态的角色同花色的手牌。',
            '神枪:若令你触发[命运]或[威严]的角色，在本轮成为过你[杀]的目标，你可以令本轮及上一轮任意角色对其使用的[杀]再次结算。若你令自己上一轮使用的[杀]重新结算，此[杀]不可响应，且造成伤害后，你回复一点体力。',
            '红雾:主公技，你将体力上限调整至三。当你成为红色牌的目标时，你可以弃置一张手牌进行一次判定，若为红色，你取消之。当你的判定牌为红色时，你摸一张牌。'
        ]
    },
    flandre: {
        id: "flandre", title: "芙兰朵露·斯卡雷特", image: "/images/flandre.jpg", content: [
            '四重:锁定技，你的摸牌阶段改为摸四张牌。若你因[禁忌]受到伤害，你本回合使用[禁忌]的次数加一。当你于摸牌阶段外摸牌时，你改为摸x+1张牌（x为你当前已损体力值）。',
            '禁忌:出牌阶段限x+1次，你弃置一张牌，令一名角色进行一次判定，然后其需弃置一张牌。若此牌与判定牌花色类型均相同，你回复一点体力；否则你可以对其造成一点伤害（x为你当前已损体力值）。'
        ]
    },
    saezuki_rin: {
        id: "saezuki_rin", title: "冴月麟", image: "/images/saezuki_rin.jpg", content: [
            '风华:持恒技，锁定技，你的手牌上限始终与场上角色数量相等。你的体力值即将减少时，你改为减少一点体力上限。当场上角色数量不大于三时，你将[水月]描述中"虚拟牌"改为"非虚拟牌"。',
            '镜花:持恒技，锁定技，你不能使用或打出牌。你需要使用或打出牌时，需将一张手牌移出游戏，视为你使用或打出一张花色点数均与此牌相同的同名牌。当任意牌离开你的区域时，你将此牌移出游戏。',
            '水月:持恒技，锁定技，你仅能成为虚拟牌的目标。其他角色仅能使用虚拟牌响应你的牌。你无视场上其他角色武将牌上的技能。当一名其他角色死亡时，杀死其的角色追思其武将牌上的一个技能。'
        ]
    },
    letti: {
        id: "letti", title: "蕾蒂·霍瓦特洛克", image: "/images/letti.jpg", content: [
            '凛冬:游戏开始时，你可以弃置两张手牌，然后直到你的第一个回合开始前，你的体力值不能减少。结束阶段，你可以弃置x张手牌，并选择y名角色，令其减少x/y的手牌上限直至你死亡（x/y向下取整）。受[凛冬]影响的角色不能选择[严寒]选项3。',
            '残雪:弃牌阶段开始时，你可以弃置任意张牌，每弃置一张牌，你本回合手牌上限加一。当你受到一点伤害后，伤害来源需弃置一张牌，否则其下回合弃牌阶段改为弃置所有手牌。受[残雪]影响的角色不能选择[严寒]选项3。',
            '严寒:锁定技，你的手牌上限减一。若任意角色回合结束后，其手牌数量不多于你，你令其选择一项：1.弃置两张牌并失去一点体力；2.失去一点体力上限；3.令你摸一张牌，若你手牌数量大于手牌上限，直到其下回合结束，其手牌上限减一。'
        ]
    },
    chen: { id: "chen", title: "橙", image: "/images/chen.jpg", content: [] },
    alice: { id: "alice", title: "爱丽丝·玛格特罗伊德", image: "/images/alice.jpg", content: [] },
    lily_white: { id: "lily_white", title: "莉莉白", image: "/images/lily_white.jpg", content: [] },
    prismrivers: { id: "prismrivers", title: "普莉兹姆利巴三姐妹", image: "/images/prismrivers.jpg", content: [] },
    youmu: { id: "youmu", title: "魂魄妖梦", image: "/images/youmu.jpg", content: [] },
    yuyuko: { id: "yuyuko", title: "西行寺幽幽子", image: "/images/yuyuko.jpg", content: [] },
    ran: { id: "ran", title: "八云蓝", image: "/images/ran.jpg", content: [] },
    yukari: { id: "yukari", title: "八云紫", image: "/images/yukari.jpg", content: [] },
    wriggle: { id: "wriggle", title: "莉格露·奈特巴格", image: "/images/wriggle.jpg", content: [] },
    mystia: { id: "mystia", title: "米斯蒂娅·萝蕾拉", image: "/images/mystia.jpg", content: [] },
    keine: { id: "keine", title: "上白泽慧音", image: "/images/keine.jpg", content: [] },
    tewi: { id: "tewi", title: "因幡帝", image: "/images/tewi.jpg", content: [] },
    reisen: { id: "reisen", title: "铃仙·优昙华院·因幡", image: "/images/reisen.jpg", content: [] },
    eirin: { id: "eirin", title: "八意永琳", image: "/images/eirin.jpg", content: [] },
    kaguya: { id: "kaguya", title: "蓬莱山辉夜", image: "/images/kaguya.jpg", content: [] },
    mokou: { id: "mokou", title: "藤原妹红", image: "/images/mokou.jpg", content: [] },
    medicine: { id: "medicine", title: "梅蒂欣·梅兰可莉", image: "/images/medicine.jpg", content: [] },
    yuuka: { id: "yuuka", title: "风见幽香", image: "/images/yuuka.jpg", content: [] },
    komachi: { id: "komachi", title: "小野冢小町", image: "/images/komachi.jpg", content: [] },
    shikieiki: { id: "shikieiki", title: "四季映姬·夜摩仙那度", image: "/images/shikieiki.jpg", content: [] },
    aki: { id: "aki", title: "秋姐妹", image: "/images/aki_sisters.jpg", content: [] },
    hina: { id: "hina", title: "键山雏", image: "/images/hina.jpg", content: [] },
    nitori: { id: "nitori", title: "河城荷取", image: "/images/nitori.jpg", content: [] },
    momiji: { id: "momiji", title: "犬走椛", image: "/images/momiji.jpg", content: [] },
    sanae: { id: "sanae", title: "东风谷早苗", image: "/images/sanae.jpg", content: [] },
    kanako: { id: "kanako", title: "八坂神奈子", image: "/images/kanako.jpg", content: [] },
    suwako: { id: "suwako", title: "洩矢诹访子", image: "/images/suwako.jpg", content: [] },
    kisume: { id: "kisume", title: "琪斯美", image: "/images/kisume.jpg", content: [] },
    yamame: { id: "yamame", title: "黑谷山女", image: "/images/yamame.jpg", content: [] },
    parsee: { id: "parsee", title: "水桥帕露西", image: "/images/parsee.jpg", content: [] },
    yuugi: { id: "yuugi", title: "星熊勇仪", image: "/images/yuugi.jpg", content: [] },
    satori: { id: "satori", title: "古明地觉", image: "/images/satori.jpg", content: [] },
    rin: { id: "rin", title: "火焰猫燐", image: "/images/rin.jpg", content: [] },
    utsuho: { id: "utsuho", title: "灵乌路空", image: "/images/utsuho.jpg", content: [] },
    koishi: { id: "koishi", title: "古明地恋", image: "/images/koishi.jpg", content: [] },
    nazrin: { id: "nazrin", title: "娜兹玲", image: "/images/nazrin.jpg", content: [] },
    kogasa: { id: "kogasa", title: "多多良小伞", image: "/images/kogasa.jpg", content: [] },
    ichirin: { id: "ichirin", title: "云居一轮&云山", image: "/images/ichirin.jpg", content: [] },
    murasa: { id: "murasa", title: "村纱水密", image: "/images/murasa.jpg", content: [] },
    shou: { id: "shou", title: "寅丸星", image: "/images/shou.jpg", content: [] },
    byakuren: { id: "byakuren", title: "圣白莲", image: "/images/byakuren.jpg", content: [] },
    nue: { id: "nue", title: "封兽鵺", image: "/images/nue.jpg", content: [] },
    kyouko: { id: "kyouko", title: "幽谷响子", image: "/images/kyouko.jpg", content: [] },
    yoshika: { id: "yoshika", title: "宫古芳香", image: "/images/yoshika.jpg", content: [] },
    seiga: { id: "seiga", title: "霍青娥", image: "/images/seiga.jpg", content: [] },
    tojiko: { id: "tojiko", title: "苏我屠自古", image: "/images/tojiko.jpg", content: [] },
    futo: { id: "futo", title: "物部布都", image: "/images/futo.jpg", content: [] },
    miko: { id: "miko", title: "丰聪耳神子", image: "/images/miko.jpg", content: [] },
    mamizou: { id: "mamizou", title: "二岩猯藏", image: "/images/mamizou.jpg", content: [] },
    wakasagihime: { id: "wakasagihime", title: "若鹭姬", image: "/images/wakasagihime.jpg", content: [] },
    sekibanki: { id: "sekibanki", title: "赤蛮奇", image: "/images/sekibanki.jpg", content: [] },
    kagerou: { id: "kagerou", title: "今泉影狼", image: "/images/kagerou.jpg", content: [] },
    tsukumo: { id: "tsukumo", title: "九十九姐妹", content: [] },
    seija: { id: "seija", title: "鬼人正邪", image: "/images/seja.jpg", content: [] },
    shinmyoumaru: { id: "shinmyoumaru", title: "少名针妙丸", image: "/images/shinmyoumaru.jpg", content: [] },
    raiko: { id: "raiko", title: "堀川雷鼓", image: "/images/raiko.jpg", content: [] },
    seiran: { id: "seiran", title: "清兰", image: "/images/seiran.jpg", content: [] },
    ringo: { id: "ringo", title: "铃瑚", image: "/images/ringo.jpg", content: [] },
    doremy: { id: "doremy", title: "哆来咪·苏伊特", image: "/images/doremy.jpg", content: [] },
    sagume: { id: "sagume", title: "稀神探女", image: "/images/sagume.jpg", content: [] },
    clownpiece: { id: "clownpiece", title: "克劳恩皮丝", image: "/images/clownpiece.jpg", content: [] },
    junko: { id: "junko", title: "纯狐", image: "/images/junko.jpg", content: [] },
    hecatia: { id: "hecatia", title: "赫卡提亚·拉碧斯拉祖利", image: "/images/hecatia.jpg", content: [] },
    larva: { id: "larva", title: "爱塔妮缇拉尔瓦", image: "/images/larva.jpg", content: [] },
    urumi: { id: "urumi", title: "坂田合欢", image: "/images/urumi.jpg", content: [] },
    aunn: { id: "aunn", title: "高丽野阿吽", image: "/images/aunn.jpg", content: [] },
    narumi: { id: "narumi", title: "矢田寺成美", image: "/images/narumi.jpg", content: [] },
    twins: { id: "twins", title: "丁礼田舞&尔子田里乃", image: "/images/twins.jpg", content: [] },
    okina: { id: "okina", title: "摩多罗隐岐奈", image: "/images/okina.jpg", content: [] },
    eika: { id: "eika", title: "戎璎花", image: "/images/eika.jpg", content: [] },
    urumi: { id: "urumi", title: "牛崎润美", image: "/images/urumi.jpg", content: [] },
    kutaka: { id: "kutaka", title: "庭渡久侘歌", image: "/images/kutaka.jpg", content: [] },
    yachie: { id: "yachie", title: "吉吊八千慧", image: "/images/yachie.jpg", content: [] },
    mayumi: { id: "mayumi", title: "杖刀偶磨弓", image: "/images/mayumi.jpg", content: [] },
    keiki: { id: "keiki", title: "埴安神袿姬", image: "/images/keiki.jpg", content: [] },
    saki: { id: "saki", title: "骊驹早鬼", image: "/images/saki.jpg", content: [] },
    miyoi: { id: "miyoi", title: "豪德寺三花", image: "/images/miyoi.jpg", content: [] },
    takane: { id: "takane", title: "山城高岭", image: "/images/takane.jpg", content: [] },
    kurumi: { id: "kurumi", title: "驹草山如", image: "/images/kurumi.jpg", content: [] },
    misumaru: { id: "misumaru", title: "玉造魅须丸", image: "/images/misumaru.jpg", content: [] },
    sannyo: { id: "sannyo", title: "菅牧典", image: "/images/sannyo.jpg", content: [] },
    iwanagahime: { id: "iwanagahime", title: "饭纲丸龙", image: "/images/iwanagahime.jpg", content: [] },
    tsukasa: { id: "tsukasa", title: "天弓千亦", image: "/images/tsukasa.jpg", content: [] },
    momoyo: { id: "momoyo", title: "姬虫百百世", image: "/images/momoyo.jpg", content: [] },
    suika: { id: "suika", title: "伊吹萃香", image: "/images/suika.jpg", content: [] },
    tenshi: { id: "tenshi", title: "比那名居天子", image: "/images/tenshi.jpg", content: [] },
    iku: { id: "iku", title: "永江衣玖", image: "/images/iku.jpg", content: [] },
    ootamadzuchi: { id: "ootamadzuchi", title: "大鲶鱼", image: "/images/ootamadzuchi.jpg", content: [] },
    hatate: { id: "hatate", title: "姬海棠果", image: "/images/hatate.jpg", content: [] },
    kokoro: { id: "kokoro", title: "秦心", image: "/images/kokoro.jpg", content: [] },
    sumireko: { id: "sumireko", title: "宇佐见堇子", image: "/images/sumireko.jpg", content: [] },
    mamizou_a: { id: "mamizou_a", title: "依神女苑", image: "/images/mamizou_a.jpg", content: [] },
    mamizou_b: { id: "mamizou_b", title: "依神紫苑", image: "/images/mamizou_b.jpg", content: [] },
    yumemi: { id: "yumemi", title: "饕餮尤魔", image: "/images/yumemi.jpg", content: [] },
    maribel_renko: { id: "maribel_renko", title: "莲子&梅莉", image: "/images/maribel_renko.jpg", content: [] },
    aya: { id: "aya", title: "射命丸文", image: "/images/aya.jpg", content: [] },
    jz: { id: "jz", title: "朱鹭子", image: "/images/jz.jpg", content: [] },
    rinnosuke_alt: { id: "rinnosuke_alt", title: "森近霖之助", image: "/images/rinnosuke_alt.jpg", content: [] },
    sunny_milk: { id: "sunny_milk", title: "桑尼米尔克", image: "/images/sunny_milk.jpg", content: [] },
    luna_child: { id: "luna_child", title: "露娜切露德", image: "/images/luna_child.jpg", content: [] },
    star_sapphire: { id: "star_sapphire", title: "斯塔萨菲雅", image: "/images/star_sapphire.jpg", content: [] },
    akyu: { id: "akyu", title: "稗田阿求", image: "/images/akyu.jpg", content: [] },
    toyohime: { id: "toyohime", title: "绵月丰姬", image: "/images/toyohime.jpg", content: [] },
    yorihime: { id: "yorihime", title: "绵月依姬", image: "/images/yorihime.jpg", content: [] },
    kasen: { id: "kasen", title: "茨木华扇", image: "/images/kasen.jpg", content: [] },
    kosuzu: { id: "kosuzu", title: "本居小铃", image: "/images/kosuzu.jpg", content: [] },
    mikoto: { id: "mikoto", title: "奥野田美宵", image: "/images/mikoto.jpg", content: [] },
    reirei: { id: "reirei", title: "宫出口瑞灵", image: "/images/reirei.jpg", content: [] }
    // Add more characters as needed
}