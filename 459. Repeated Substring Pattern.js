/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length <= 1) {
    return false;
  }
  for (var i = 0; i < s.length / 2; i++) {
    var part = s.substr(0, i + 1);
    if (s == s.substr(i + 1) + part) {
      return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern('ab'))
console.log(repeatedSubstringPattern('aa'))
console.log(repeatedSubstringPattern('a'))
console.log(repeatedSubstringPattern('abcabcabcabc'))
console.log(repeatedSubstringPattern('ababa'))
console.log(repeatedSubstringPattern("uepjrnrzbllldgdmyrpglrhllwnqozfudjpchowhwevbqvjjezsmhylnjpktbspxnktxkmcfxwiaqqbhqjwufmwresfsfaokeaaadziobioqmtsvjgzkgkhbzpaeuexyudhrioicyqsjmngrwqpoherwuvdgeruffmlgphwbxzovyewtfazfpmvfvyguqditjlxnoixsyghyfrdngjfblyveibcapetpmeaidrtpnwwiifhpfgsptkvhhwkzvtvlhhbipjxurgqbtldimsarncplkeweoirjenakyprzzphewoprwyvfpjyglzrmhfqpdubheeqtgrmbxlcmnbtaqakgimuapsbuxzokhwnykughmwrlkjsvtdlzwpbhcsbvjnomutffmjggrmyilgschgwrrztnmvndmuahvnlwpwtglvbtkegzjstpiwllpgnlpcnezqscxkelindfvurtxsezrwzvzechocnvfaimxrqnyiqlybugjsblhzfravznkbtgcpqwovwpxzgxgodlhmixisfzdknoxzasscewgzvqkxuqrsqxsfwdwneyqisozqjfgrvhfsfeuspujvqhydwveadosqafyxbmzgrotyffqblolplosqnfcwxiuwkldpuenodlvotbqiizudxqjvfnkyicjcywjkfvukvveqhjrxdcigwbjdftdyelydzyummmtzuvfmaicednymxoaiuhigfkfavgeemcgofnaefganqoniqebfibigljbceulicojzjfrceigxprunjncymbrljfqmwciqtyncafzjyagimmzuejrttefhdwqcizyiurxvfbwrjxffzbjexshvwrxwrmhrbdxjwipsdfhtknfaswfrvxqdkhbwwefbvqsghhhutdgethcwupzrtsbhbjnbqwpccoaonxwvkhowbzhaoscgykzbiltlwqqatyeczzceuuwgvjxzonhkkfjcbwsezdmifdegsyjtswselknxweimxlnzohgtqthlftjblnphtdwwvsscbhjmruuqscwjpynxbkoomwdecqkrtbxgzgcxhppcjnqtcfqttkkolzcfikwblxkimijeglxsvcrkcqjjwcwuhvzydmegubqavlqffhrzzrhiwxrgftittdxcaybczncsyjlzlxyyklcppoxcgnexmaajzuhabdhaccuualacylsmtkewbprsmoncggqvrvsqqoffmwkplsgbrpurgioajuppvqluhbdetzdzwwzaelmopafumtqugecywglucmugwqiizveswrjevfzdnxlbkakrpzcejvxzeoybbtfdsvewjsivwswzjhudtpqsfclzcmukotirrxxtzksmxnjumofzhhowyftzfzbotrokaxaryxlkmueolqkrdxmzhoqnzvudeowcjloesfmqgvxwfyhnpbepbvbgjtbvqpoeugoqynkbfivmfewjjscjreixyqssxzsydgllfzmobnurxkwcypctjkabigwqtldwhjouaswtovdtkrlonzgeyddkqwuhnimzffxviyvsktqrfafqujhdepvczzhiyjlkxmeplnrvxgshdykehkefpkvepcxhozpjxtreynyliguhuxudbnhmfojordxzmmklgohcmmbukzshyrmooliaobbnlapadutnbetocxylceyxywdsjegdfcrsblbxhjsgcuoxmqftytngzdcmsrfyjjumcbxoleldazwzwtdjoyuqeqjfxazjarqgfmsfxyfqbeoktcctnfqrsjchxpqiltaqzawhguusgenjcfxriyfikpgdvwhbyumthkiktbecjwalsxqjyajrkcvysicisabtbrdeumbvtviihjwxdczpdnrrgmemxydgxlrjzucxyidwcdvdpvjlagwmgcngnpxjkximsogvyhnchlimsxcjwtrijtizpezjlcqekojrrjzvtvhnqvieqmdiedzqswrsnfmnneltcutqfcqyrrwmnwtelvsqrruwfjwrhjcrtbcytnyqmqxceuohpiffaqnrmoybqjjgdyotpmxttqftypfexlvdtgxqafiqbqjlnpbflkgaynkddbzllecdctccvslpdcurkxfoimnwdfvnyqkzlheruxrmiiygnzfovnrwcoqsgoameiunvzemmxtklistlxuynrwsjaxzwmhktdayzzoxbbemejgosgcynfapykbcnzhesvnctfvdspqkuyrjhykpadahbhjbatvsxlngbtxmqrbwqromfqzyabzrcoorbbyklndcqdjzcnsmgmwmpbgjqoykrvnafhqrwfajnfahyqocdbgfnlaozmffvvmoymbmytjvfcgttcijyyljdgwjbztlpswmalgbgpaplqgzqchflxtypttkrpfvxrtkzpzrscwbxqbwfqqvjcukjbsginxqmxryxieyavnzdiludhthpreyelgcnpsoqswsreogbmveofvusdsxcjvdrjkhxkqrqzjbrpljwuzplxczqeevvbvcwhnvzuszqvhlmaptylyufqzyldwwgezlqurzvorxwgdtgjilgydqvpkntwjbgihlwckorgrmxixylxjmlfvhbpoaboylcedyzeayigfagitkrextlipvqqhdmoerchoqxbypihdvpdtjrrkxroowtrexuhucxpiibvmuyarjwqpcoywawqwdmfpwvamisnskbhopoqdsrefjtmnmvkyccremktrniqwoofoeenbzvvlrfcsftapyujmwdupdqikocrdyexjbcxwqeaumqoklsqebuzeziiswzfzgyhvnwjcnshdybjywyaodsywmlmuueocfruntpztlbggsuzctocyilfzpszgrgjsimqypqopfumpmsjvmsbrcfwretbiekoxpmplpcgewmqigymreqevdydvgmuyytguexnycqhwialkbjgzcklmgxgijjyjlplrsxznfkoklxlvpxrbasbznvxasxztwnqbhqultkyfqxsaeqztxbuwpzdpkngnuoayckfykdlarmuwprgtghfxfbgpucqwbihemixqmypjedyedimaanpbdrxpvtoxmxzimgfaouzlteobnadoshnxnufgmypupeikfqrqyexoljhqsaneicvaerqxcngmsidszagpiuiiasrezakiuroadojxmvgqgdodwwjszyeruwnupqgmyrjxigaskpjmzpsbhgokwtfcisjzvepyebwrcpafxzhbdgjykhzemfomgxjphcscuxjnywoiwbdvusywqlsccvsropvrnxtmkgiwfvqfkotpdznjinpobubzbvstkkvubuucilxyhjbcilfldibmyebrlcnvnuuqfvhwxoorbyyiigppuftqswpksfdxicemjbftgoabwrqdoudfbyjutkeqakoarruhwuznnlydivfelxvtggkkkjmxlwbkbklbwfsvrbadvraqovanlsmklnfjxxvzdjlpyurxpjcssebtpznwoytjefobdynaiukctgrzjxzirzosjuncvhfhcnhhrajahitnbkvwtifcoqepqyzwyazzkddxywvgqxofsyxngevsdbatvzmziqpmjewiyorpzsupxoflqpbyzhtvvpjdcqnlvlzrzakvmxzbaeipmwouvpvgtekfkuajjogbxhjiiqisdbplotyakxjvkmxhtmyznhaylqjnqzrwrmgtumbbhflizbpeohsufreefajrcsfoghglucidbnlysamvyatutjdfnvhahxykurbrmmadeaxhghvfacnjxqjathltizloasimpzugutrjfozvgmdakdhaofiephsnuztnpqhdlfrfuyprcrcszmgplszwfndzihegtbxbspaucjbmsamjyqqraszaghzlgnfoasvljxltcnumquohlcgtfjmrmfccjrhfedlievtpieworwhyiucsetdtuquartspkotmxqpnkeluekveljyugrloqczljmwtmfkyvqguqquztpjidglpxqfxvhlftvvimvrozdyywopwyfovdzopwlumocnyuoumehvjqpzkcfcgihicdrdtttiixlhpikbvjgoblttgvmndkqggypgwsibcqahmyyeagklprtvojuwlcblwidhjpugkbuspeynaoocgkzrpcnbqajopjjlfthevbculqsozkndgojnjnxqsoqiazyesldujjlpeedrswybwlfyzphixzluwbtmoxokksbedrqfuizopajzeahvalehdfnrkmnlpimduzgmwszcxmracvelbhjzmiwdnxwruqcugmkscfodjxghwcbmsokdspilajnibphjrvvlwpbojlpwuytkosjjojczwonovrxsiyuidphsklrmialvzpjcjtpblsgqljhuuvkcgpopdruidbaguevssjulnqgsixuhdhffrizkwtcbmrsrmtinefwxwwilbezedywxuitdzyypdgoveeupeusrgkqwfslfnjlybghedeabnrlzcgflgxiftmfzcsnybqcegpxtepyifqblzdjrtynxjgbiymhjumliovwnuepjrnrzbllldgdmyrpglrhllwnqozfudjpchowhwevbqvjjezsmhylnjpktbspxnktxkmcfxwiaqqbhqjwufmwresfsfaokeaaadziobioqmtsvjgzkgkhbzpaeuexyudhrioicyqsjmngrwqpoherwuvdgeruffmlgphwbxzovyewtfazfpmvfvyguqditjlxnoixsyghyfrdngjfblyveibcapetpmeaidrtpnwwiifhpfgsptkvhhwkzvtvlhhbipjxurgqbtldimsarncplkeweoirjenakyprzzphewoprwyvfpjyglzrmhfqpdubheeqtgrmbxlcmnbtaqakgimuapsbuxzokhwnykughmwrlkjsvtdlzwpbhcsbvjnomutffmjggrmyilgschgwrrztnmvndmuahvnlwpwtglvbtkegzjstpiwllpgnlpcnezqscxkelindfvurtxsezrwzvzechocnvfaimxrqnyiqlybugjsblhzfravznkbtgcpqwovwpxzgxgodlhmixisfzdknoxzasscewgzvqkxuqrsqxsfwdwneyqisozqjfgrvhfsfeuspujvqhydwveadosqafyxbmzgrotyffqblolplosqnfcwxiuwkldpuenodlvotbqiizudxqjvfnkyicjcywjkfvukvveqhjrxdcigwbjdftdyelydzyummmtzuvfmaicednymxoaiuhigfkfavgeemcgofnaefganqoniqebfibigljbceulicojzjfrceigxprunjncymbrljfqmwciqtyncafzjyagimmzuejrttefhdwqcizyiurxvfbwrjxffzbjexshvwrxwrmhrbdxjwipsdfhtknfaswfrvxqdkhbwwefbvqsghhhutdgethcwupzrtsbhbjnbqwpccoaonxwvkhowbzhaoscgykzbiltlwqqatyeczzceuuwgvjxzonhkkfjcbwsezdmifdegsyjtswselknxweimxlnzohgtqthlftjblnphtdwwvsscbhjmruuqscwjpynxbkoomwdecqkrtbxgzgcxhppcjnqtcfqttkkolzcfikwblxkimijeglxsvcrkcqjjwcwuhvzydmegubqavlqffhrzzrhiwxrgftittdxcaybczncsyjlzlxyyklcppoxcgnexmaajzuhabdhaccuualacylsmtkewbprsmoncggqvrvsqqoffmwkplsgbrpurgioajuppvqluhbdetzdzwwzaelmopafumtqugecywglucmugwqiizveswrjevfzdnxlbkakrpzcejvxzeoybbtfdsvewjsivwswzjhudtpqsfclzcmukotirrxxtzksmxnjumofzhhowyftzfzbotrokaxaryxlkmueolqkrdxmzhoqnzvudeowcjloesfmqgvxwfyhnpbepbvbgjtbvqpoeugoqynkbfivmfewjjscjreixyqssxzsydgllfzmobnurxkwcypctjkabigwqtldwhjouaswtovdtkrlonzgeyddkqwuhnimzffxviyvsktqrfafqujhdepvczzhiyjlkxmeplnrvxgshdykehkefpkvepcxhozpjxtreynyliguhuxudbnhmfojordxzmmklgohcmmbukzshyrmooliaobbnlapadutnbetocxylceyxywdsjegdfcrsblbxhjsgcuoxmqftytngzdcmsrfyjjumcbxoleldazwzwtdjoyuqeqjfxazjarqgfmsfxyfqbeoktcctnfqrsjchxpqiltaqzawhguusgenjcfxriyfikpgdvwhbyumthkiktbecjwalsxqjyajrkcvysicisabtbrdeumbvtviihjwxdczpdnrrgmemxydgxlrjzucxyidwcdvdpvjlagwmgcngnpxjkximsogvyhnchlimsxcjwtrijtizpezjlcqekojrrjzvtvhnqvieqmdiedzqswrsnfmnneltcutqfcqyrrwmnwtelvsqrruwfjwrhjcrtbcytnyqmqxceuohpiffaqnrmoybqjjgdyotpmxttqftypfexlvdtgxqafiqbqjlnpbflkgaynkddbzllecdctccvslpdcurkxfoimnwdfvnyqkzlheruxrmiiygnzfovnrwcoqsgoameiunvzemmxtklistlxuynrwsjaxzwmhktdayzzoxbbemejgosgcynfapykbcnzhesvnctfvdspqkuyrjhykpadahbhjbatvsxlngbtxmqrbwqromfqzyabzrcoorbbyklndcqdjzcnsmgmwmpbgjqoykrvnafhqrwfajnfahyqocdbgfnlaozmffvvmoymbmytjvfcgttcijyyljdgwjbztlpswmalgbgpaplqgzqchflxtypttkrpfvxrtkzpzrscwbxqbwfqqvjcukjbsginxqmxryxieyavnzdiludhthpreyelgcnpsoqswsreogbmveofvusdsxcjvdrjkhxkqrqzjbrpljwuzplxczqeevvbvcwhnvzuszqvhlmaptylyufqzyldwwgezlqurzvorxwgdtgjilgydqvpkntwjbgihlwckorgrmxixylxjmlfvhbpoaboylcedyzeayigfagitkrextlipvqqhdmoerchoqxbypihdvpdtjrrkxroowtrexuhucxpiibvmuyarjwqpcoywawqwdmfpwvamisnskbhopoqdsrefjtmnmvkyccremktrniqwoofoeenbzvvlrfcsftapyujmwdupdqikocrdyexjbcxwqeaumqoklsqebuzeziiswzfzgyhvnwjcnshdybjywyaodsywmlmuueocfruntpztlbggsuzctocyilfzpszgrgjsimqypqopfumpmsjvmsbrcfwretbiekoxpmplpcgewmqigymreqevdydvgmuyytguexnycqhwialkbjgzcklmgxgijjyjlplrsxznfkoklxlvpxrbasbznvxasxztwnqbhqultkyfqxsaeqztxbuwpzdpkngnuoayckfykdlarmuwprgtghfxfbgpucqwbihemixqmypjedyedimaanpbdrxpvtoxmxzimgfaouzlteobnadoshnxnufgmypupeikfqrqyexoljhqsaneicvaerqxcngmsidszagpiuiiasrezakiuroadojxmvgqgdodwwjszyeruwnupqgmyrjxigaskpjmzpsbhgokwtfcisjzvepyebwrcpafxzhbdgjykhzemfomgxjphcscuxjnywoiwbdvusywqlsccvsropvrnxtmkgiwfvqfkotpdznjinpobubzbvstkkvubuucilxyhjbcilfldibmyebrlcnvnuuqfvhwxoorbyyiigppuftqswpksfdxicemjbftgoabwrqdoudfbyjutkeqakoarruhwuznnlydivfelxvtggkkkjmxlwbkbklbwfsvrbadvraqovanlsmklnfjxxvzdjlpyurxpjcssebtpznwoytjefobdynaiukctgrzjxzirzosjuncvhfhcnhhrajahitnbkvwtifcoqepqyzwyazzkddxywvgqxofsyxngevsdbatvzmziqpmjewiyorpzsupxoflqpbyzhtvvpjdcqnlvlzrzakvmxzbaeipmwouvpvgtekfkuajjogbxhjiiqisdbplotyakxjvkmxhtmyznhaylqjnqzrwrmgtumbbhflizbpeohsufreefajrcsfoghglucidbnlysamvyatutjdfnvhahxykurbrmmadeaxhghvfacnjxqjathltizloasimpzugutrjfozvgmdakdhaofiephsnuztnpqhdlfrfuyprcrcszmgplszwfndzihegtbxbspaucjbmsamjyqqraszaghzlgnfoasvljxltcnumquohlcgtfjmrmfccjrhfedlievtpieworwhyiucsetdtuquartspkotmxqpnkeluekveljyugrloqczljmwtmfkyvqguqquztpjidglpxqfxvhlftvvimvrozdyywopwyfovdzopwlumocnyuoumehvjqpzkcfcgihicdrdtttiixlhpikbvjgoblttgvmndkqggypgwsibcqahmyyeagklprtvojuwlcblwidhjpugkbuspeynaoocgkzrpcnbqajopjjlfthevbculqsozkndgojnjnxqsoqiazyesldujjlpeedrswybwlfyzphixzluwbtmoxokksbedrqfuizopajzeahvalehdfnrkmnlpimduzgmwszcxmracvelbhjzmiwdnxwruqcugmkscfodjxghwcbmsokdspilajnibphjrvvlwpbojlpwuytkosjjojczwonovrxsiyuidphsklrmialvzpjcjtpblsgqljhuuvkcgpopdruidbaguevssjulnqgsixuhdhffrizkwtcbmrsrmtinefwxwwilbezedywxuitdzyypdgoveeupeusrgkqwfslfnjlybghedeabnrlzcgflgxiftmfzcsnybqcegpxtepyifqblzdjrtynxjgbiymhjumliovwn"))