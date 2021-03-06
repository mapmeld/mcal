//Start of Internationalization (language) ####################################
var X;
var g_Lang="Myanmar";
function LanguageCatalog(a) {X=a;}
//Credit: Mon Language Translation by 'ITVilla' : http://it-villa.blogspot.com/
//and Proof reading by Mikau Nyan

//-------------------------------------------------------------------------
//Select language
//input: (L: number[0=Myanmar, 1=English, 2=Mon, 3=Zawgyi])
function SelectLang(L){
	if (L==1 || L=="English" || L=="my-En" || L=="my-en") {g_Lang="English"; }
	else if (L==2 || L=="Mon" || L=="my-Mon" || L=="my-mon") { g_Lang="Mon";}
	else if (L==3 || L=="Zawgyi" || L=="my-Z1" || L=="my-z1" || L=="Zawgyi-One") { g_Lang="Zawgyi";}
	else {g_Lang="Myanmar";}
	return g_Lang;
}
//-------------------------------------------------------------------------
//Translate to selected language from a string in English -defined in mc_l.js
//input: (es: text in english) output: (ts: translated text)
function T(es){
	try {
		var ts=X[g_Lang][es];
	}
	catch(err){
		ts=undefined;
	}
	if (ts===undefined) {return es;}
	else return ts;
}
//----------------------------------------------------------------------------
//Convert a number to string in the selected language
//input: (n=number, X: global variable that holds the language catalog)
//output: (s: string)
function n2s(n) {
	var r=0,s="",g="";
	if(n<0){g="-"; n=Math.abs(n);}
	n=Math.floor(n);
	do{
		r=n%10; n=Math.floor(n/10);
		s=T(r.toString())+s;
	}while(n>0);
	return (g+s);
}
//-----------------------------------------------------------------------------
LanguageCatalog(
{
  "Myanmar": {
    "0": "၀",
    "1": "၁",
    "2": "၂",
    "3": "၃",
    "4": "၄",
    "5": "၅",
    "6": "၆",
    "7": "၇",
    "8": "၈",
    "9": "၉",
    "January": "ဇန်နဝါရီ",
    "February": "ဖေဖော်ဝါရီ",
    "March": "မတ်",
    "April": "ဧပြီ",
    "May": "မေ",
    "June": "ဇွန်",
    "July": "ဇူလိုင်",
    "August": "ဩဂုတ်",
    "September": "စက်တင်ဘာ",
    "October": "အောက်တိုဘာ",
    "November": "နိုဝင်ဘာ",
    "December": "ဒီဇင်ဘာ",
    "First Waso": "ပဝါဆို",
    "Tagu": "တန်ခူး",
    "Kason": "ကဆုန်",
    "Nayon": "နယုန်",
    "Waso": "ဝါဆို",
    "Wagaung": "ဝါခေါင်",
    "Tawthalin": "တော်သလင်း",
    "Thadingyut": "သီတင်းကျွတ်",
    "Tazaungmon": "တန်ဆောင်မုန်း",
    "Nadaw": "နတ်တော်",
    "Pyatho": "ပြာသို",
    "Tabodwe": "တပို့တွဲ",
    "Tabaung": "တပေါင်း",
    "waxing": "လဆန်း",
    "waning": "လဆုတ်",
    "full moon": "လပြည့်",
    "new moon": "လကွယ်",
    "Myanmar Year": "မြန်မာနှစ်",
    "Ku": "ခု",
    "Late": "နှောင်း",
    "Second": "ဒု",
    "Sunday": "တနင်္ဂနွေ",
    "Monday": "တနင်္လာ",
    "Tuesday": "အင်္ဂါ",
    "Wednesday": "ဗုဒ္ဓဟူး",
    "Thursday": "ကြာသပတေး",
    "Friday": "သောကြာ",
    "Saturday": "စနေ",
    "Nay": "နေ့",
    "Yat": "ရက်",
    "Sabbath Eve": "အဖိတ်",
    "Sabbath": "ဥပုသ်",
    "Yatyaza": "ရက်ရာဇာ",
    "Afternoon Pyathada": "မွန်းလွဲပြဿဒါး",
    "Pyathada": "ပြဿဒါး",
    "New Year Day": "New Year's Day",
    "Independence Day": "လွတ်လပ်ရေးနေ့",
    "Union Day": "ပြည်ထောင်စုနေ့",
    "Peasants Day": "တောင်သူ လယ်သမားနေ့",
    "Resistance Day": "တော်လှန်ရေးနေ့",
    "Labour Day": "အလုပ်သမားနေ့",
    "Martyrs Day": "အာဇာနည်နေ့",
    "Christmas Day": "ခရစ္စမတ်နေ့",
    "Buddha Day": "ညောင်ရေသွန်းပွဲ",
    "Start of Buddhist Lent": "ဓမ္မစကြာနေ့",
    "End of Buddhist Lent": "မီးထွန်းပွဲ",
    "Tazaungdaing": "တန်ဆောင်တိုင်",
    "National Day": "အမျိုးသားနေ့",
    "Karen New Year Day": "ကရင်နှစ်သစ်ကူး",
    "Tabaung Pwe": "တပေါင်းပွဲ",
    "Thingyan Akyo": "သင်္ကြန်အကြို",
    "Thingyan Akya": "သင်္ကြန်အကျ",
    "Thingyan Akyat": "သင်္ကြန်အကြတ်",
    "Thingyan Atat": "သင်္ကြန်အတက်",
    "Myanmar New Year Day": "နှစ်ဆန်းတစ်ရက်",
    "Amyeittasote": "အမြိတ္တစုတ်",
    "Warameittugyi": "ဝါရမိတ္တုကြီး",
    "Warameittunge": "ဝါရမိတ္တုငယ်",
    "Thamaphyu": "သမားဖြူ",
    "Thamanyo": "သမားညို",
    "Yatpote": "ရက်ပုပ်",
    "Yatyotema": "ရက်ယုတ်မာ",
    "Mahayatkyan": "မဟာရက်ကြမ်း",
    "Nagapor": "နဂါးပေါ်",
    "Shanyat": "ရှမ်းရက်",
    ",": "၊",
    ".": "။",
    "Mon National Day": "မွန်အမျိုးသားနေ့",
    "G. Aung San BD": "ဗိုလ်ချုပ်မွေးနေ့",
    "Valentines Day": "ချစ်သူများနေ့",
    "Earth Day": "ကမ္ဘာမြေနေ့",
    "April Fools Day": "ဧပြီအရူးနေ့",
    "Red Cross Day": "ကြက်ခြေနီနေ့",
    "United Nations Day": "ကုလသမ္မဂ္ဂနေ့",
    "Halloween": "သရဲနေ့",
    "Shan New Year Day": "ရှမ်းနှစ်သစ်ကူး",
    "Mothers Day": "အမေနေ့",
    "Fathers Day": "အဖေနေ့",
    "Sasana Year": "သာသနာနှစ်",
    "Eid": "အိဒ်",
    "Diwali": "ဒီဝါလီ",
    "Mahathamaya Day": "မဟာသမယနေ့",
    "Garudhamma Day": "ဂရုဓမ္မနေ့",
    "Metta Day": "မေတ္တာနေ့",
    "Taungpyone Pwe": "တောင်ပြုန်းပွဲ",
    "Yadanagu Pwe": "ရတနာ့ဂူပွဲ",
    "Authors Day": "စာဆိုတော်နေ့",
    "World Teachers Day": "ကမ္ဘာ့ဆရာများနေ့",
    "Holiday": "ရုံးပိတ်ရက်",
    "Chinese New Year": "တရုတ်နှစ်သစ်ကူး",
    "Easter": "ထမြောက်ရာနေ့",
    "Good Friday": "သောကြာနေ့ကြီး"
  },
  "English": {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "January": "January",
    "February": "February",
    "March": "March",
    "April": "April",
    "May": "May",
    "June": "June",
    "July": "July",
    "August": "August",
    "September": "September",
    "October": "October",
    "November": "November",
    "December": "December",
    "First Waso": "First Waso",
    "Tagu": "Tagu",
    "Kason": "Kason",
    "Nayon": "Nayon",
    "Waso": "Waso",
    "Wagaung": "Wagaung",
    "Tawthalin": "Tawthalin",
    "Thadingyut": "Thadingyut",
    "Tazaungmon": "Tazaungmon",
    "Nadaw": "Nadaw",
    "Pyatho": "Pyatho",
    "Tabodwe": "Tabodwe",
    "Tabaung": "Tabaung",
    "waxing": "waxing",
    "waning": "waning",
    "full moon": "full moon",
    "new moon": "new moon",
    "Myanmar Year": "Myanmar Year",
    "Ku": " ",
    "Late": "Late ",
    "Second": "Second ",
    "Sunday": "Sunday",
    "Monday": "Monday",
    "Tuesday": "Tuesday",
    "Wednesday": "Wednesday",
    "Thursday": "Thursday",
    "Friday": "Friday",
    "Saturday": "Saturday",
    "Nay": " ",
    "Yat": " ",
    "Sabbath Eve": "Sb Eve",
    "Sabbath": "Sabbath",
    "Yatyaza": "Yatyaza",
    "Afternoon Pyathada": "Afternoon Pyathada",
    "Pyathada": "Pyathada",
    "New Year Day": "New Year's Day",
    "Independence Day": "Independence Day",
    "Union Day": "Union Day",
    "Peasants Day": "Peasants Day",
    "Resistance Day": "Resistance Day",
    "Labour Day": "Labour Day",
    "Martyrs Day": "Martyrs' Day",
    "Christmas Day": "Christmas Day",
    "Buddha Day": "Buddha Day",
    "Start of Buddhist Lent": "Start of Buddhist Lent",
    "End of Buddhist Lent": "End of Buddhist Lent",
    "Tazaungdaing": "Tazaungdaing",
    "National Day": "National Day",
    "Karen New Year Day": "Karen New Year Day",
    "Tabaung Pwe": "Tabaung Pwe",
    "Thingyan Akyo": "Thingyan Akyo",
    "Thingyan Akya": "Thingyan Akya",
    "Thingyan Akyat": "Thingyan Akyat",
    "Thingyan Atat": "Thingyan Atat",
    "Myanmar New Year Day": "Myanmar New Year Day",
    "Amyeittasote": "Amyeittasote",
    "Warameittugyi": "Warameittugyi",
    "Warameittunge": "Warameittunge",
    "Thamaphyu": "Thamaphyu",
    "Thamanyo": "Thamanyo",
    "Yatpote": "Yatpote",
    "Yatyotema": "Yatyotema",
    "Mahayatkyan": "Mahayatkyan",
    "Nagapor": "Nagapor",
    "Shanyat": "Shanyat",
    ",": ",",
    ".": ".",
    "Mon National Day": "Mon National Day",
    "G. Aung San BD": "G. Aung San BD",
    "Valentines Day": "Valentines Day",
    "Earth Day": "Earth Day",
    "April Fools Day": "April Fools' Day",
    "Red Cross Day": "Red Cross Day",
    "United Nations Day": "United Nations Day",
    "Halloween": "Halloween",
    "Shan New Year Day": "Shan New Year Day",
    "Mothers Day": "Mothers' Day",
    "Fathers Day": "Fathers' Day",
    "Sasana Year": "Sasana Year",
    "Eid": "Eid",
    "Diwali": "Diwali",
    "Mahathamaya Day": "Great Integration",
    "Garudhamma Day": "Garudhamma Day",
    "Metta Day": "Metta Day",
    "Taungpyone Pwe": "Taungpyone Pwe",
    "Yadanagu Pwe": "Yadanagu Pwe",
    "Authors Day": "Authors' Day",
    "World Teachers Day": "World Teachers' Day",
    "Holiday": "Holiday",
    "Chinese New Year": "Chinese New Year",
    "Easter": "Easter",
    "Good Friday": "Good Friday"
  },
  "Mon": {
    "0": "၀",
    "1": "၁",
    "2": "၂",
    "3": "၃",
    "4": "၄",
    "5": "၅",
    "6": "၆",
    "7": "၇",
    "8": "၈",
    "9": "၉",
    "January": "ဂျာန်နျူအာရဳ",
    "February": "ဝှေဝ်ဗျူအာရဳ",
    "March": "မာတ်ချ်",
    "April": "ဨပြေယ်လ်",
    "May": "မေ",
    "June": "ဂျုန်",
    "July": "ဂျူလာၚ်",
    "August": "အဝ်ဂါတ်",
    "September": "သိတ်ထီဗာ",
    "October": "အံက်ထဝ်ဗာ",
    "November": "နဝ်ဝါမ်ဗာ",
    "December": "ဒီဇြေန်ဗာ",
    "First Waso": "ဂိတုပ-ဒ္ဂိုန်",
    "Tagu": "ဂိတုစဲ",
    "Kason": "ဂိတုပသာ်",
    "Nayon": "ဂိတုဇှေ်",
    "Waso": "ဂိတုဒ္ဂိုန်",
    "Wagaung": "ဂိတုခ္ဍဲသဳ",
    "Tawthalin": "ဂိတုဘတ်",
    "Thadingyut": "ဂိတုဝှ်",
    "Tazaungmon": "ဂိတုက္ထိုန်",
    "Nadaw": "ဂိတုမြေက္ကသဵု",
    "Pyatho": "ဂိတုပှော်",
    "Tabodwe": "ဂိတုမာ်",
    "Tabaung": "ဂိတုဖဝ်ရဂိုန်",
    "waxing": "မံက်",
    "waning": "စွေက်",
    "full moon": "ပေၚ်",
    "new moon": "အိုတ်",
    "Myanmar Year": "သက္ကရာဇ်ဍုၚ်",
    "Ku": "သၞာံ",
    "Late": "",
    "Second": "ဒု",
    "Sunday": "တ္ၚဲအဒိုတ်",
    "Monday": "တ္ၚဲစန်",
    "Tuesday": "တ္ၚဲအင္ၚာ",
    "Wednesday": "တ္ၚဲဗုဒ္ဓဝါ",
    "Thursday": "တ္ၚဲဗြဴဗတိ",
    "Friday": "တ္ၚဲသိုက်",
    "Saturday": "တ္ၚဲသ္ၚိသဝ်",
    "Nay": "",
    "Yat": "",
    "Sabbath Eve": "တ္ၚဲတိၚ်",
    "Sabbath": "တ္ၚဲသဳ",
    "Yatyaza": "တ္ရဲရာဇာ",
    "Afternoon Pyathada": "တ္ၚဲရာဟု",
    "Pyathada": "တ္ၚဲပြာဗ္ဗဒါ",
    "New Year Day": "New Year's Day",
    "Independence Day": "တ္ၚဲသၠးပွး",
    "Union Day": "တ္ၚဲကၟိန်ဍုၚ်",
    "Peasants Day": "တ္ၚဲသၟာဗ္ၚ",
    "Resistance Day": "တ္ၚဲပၠန်ဂတးဗၟာ",
    "Labour Day": "တ္ၚဲသၟာကမၠောန်",
    "Martyrs Day": "တ္ၚဲအာဇာနဲ",
    "Christmas Day": "တ္ၚဲခရေဿမာတ်",
    "Buddha Day": "တ္ၚဲသ္ဘၚ်ဖဍာ်ဇြဲ",
    "Start of Buddhist Lent": "တ္ၚဲတွံဓဝ်ဓမ္မစက်",
    "End of Buddhist Lent": "တ္ၚဲအဘိဓရ်",
    "Tazaungdaing": "သ္ဘၚ်ပူဇဴပၟတ်ပၞာၚ်",
    "National Day": "တ္ၚဲကောန်ဂကူဗၟာ",
    "Karen New Year Day": "ကရေၚ်လှာဲသၞာံ",
    "Tabaung Pwe": "သ္ဘၚ်ဖဝ်ရဂိုန်",
    "Thingyan Akyo": "တ္ၚဲဒစးအတး",
    "Thingyan Akya": "တ္ၚဲအတးစှေ်",
    "Thingyan Akyat": "တ္ၚဲအတးကြာပ်",
    "Thingyan Atat": "တ္ၚဲအတးတိုန်",
    "Myanmar New Year Day": "တ္ၚဲသၞာံတၟိ",
    "Amyeittasote": "ကိုန်အမြိုတ်",
    "Warameittugyi": "ကိုန်ဝါရမိတ္တုဇၞော်",
    "Warameittunge": "ကိုန်ဝါရမိတ္တုဍောတ်",
    "Thamaphyu": "ကိုန်လေၚ်ဒိုက်",
    "Thamanyo": "ကိုန်ဟုံဗြမ်",
    "Yatpote": "ကိုန်လီုလာ်",
    "Yatyotema": "ကိုန်ယုတ်မာ",
    "Mahayatkyan": "ကိုန်ဟွံခိုဟ်",
    "Nagapor": "နာ်မံက်",
    "Shanyat": "တ္ၚဲဒတန်",
    ",": "၊",
    ".": "။",
    "Mon National Day": "တ္ၚဲကောန်ဂကူမန်",
    "Mon Fallen Day": "တ္ၚဲဟံသာဝတဳလီု",
    "Mon Revolution Day": "တ္ၚဲပၠန်ဂတးမန်",
    "Mon Women Day": "တ္ၚဲညးဗြဴမန်",
    "G. Aung San BD": "တ္ၚဲသၟိၚ်ဗၟာ အံၚ်သာန်ဒှ်မၞိဟ်",
    "Valentines Day": "တ္ၚဲဝုတ်ဗၠာဲ",
    "Earth Day": "တ္ၚဲဂၠးကဝ်",
    "April Fools Day": "တ္ၚဲသ္ပပရအ်",
    "Red Cross Day": "တ္ၚဲဇိုၚ်ခ္ဍာ်ဍာဲ",
    "United Nations Day": "တ္ၚဲကုလသမ္မဂ္ဂ",
    "Halloween": "တ္ၚဲဟေဝ်လဝ်ဝိန်",
    "Shan New Year Day": "တ္ၚဲသေံလှာဲသၞာံ",
    "Mothers Day": "တ္ၚဲမိအံက်",
    "Fathers Day": "တ္ၚဲမအံက်",
    "Sasana Year": "သက္ကရာဇ် သာသနာ",
    "Eid": "အိဒ်",
    "Diwali": "ဒီဝါလီ",
    "Mahathamaya Day": "မဟာသမယနေ့",
    "Garudhamma Day": "ဂရုဓမ္မနေ့",
    "Metta Day": "မေတ္တာနေ့",
    "Taungpyone Pwe": "တောင်ပြုန်းပွဲ",
    "Yadanagu Pwe": "ရတနာ့ဂူပွဲ",
    "Authors Day": "စာဆိုတော်နေ့",
    "World Teachers Day": "ကမ္ဘာ့ဆရာများနေ့",
    "Holiday": "ရုံးပိတ်ရက်",
    "Chinese New Year": "တရုတ်နှစ်သစ်ကူး",
    "Easter": "ထမြောက်ရာနေ့",
    "Good Friday": "သောကြာနေ့ကြီး"
  },
  "Zawgyi": {
    "0": "၀",
    "1": "၁",
    "2": "၂",
    "3": "၃",
    "4": "၄",
    "5": "၅",
    "6": "၆",
    "7": "၇",
    "8": "၈",
    "9": "၉",
    "January": "ဇန္နဝါရီ",
    "February": "ေဖေဖာ္ဝါရီ",
    "March": "မတ္",
    "April": "ဧၿပီ",
    "May": "ေမ",
    "June": "ဇြန္",
    "July": "ဇူလိုင္",
    "August": "ဩဂုတ္",
    "September": "စက္တင္ဘာ",
    "October": "ေအာက္တိုဘာ",
    "November": "နိုဝင္ဘာ",
    "December": "ဒီဇင္ဘာ",
    "First Waso": "ပဝါဆို",
    "Tagu": "တန္ခူး",
    "Kason": "ကဆုန္",
    "Nayon": "နယုန္",
    "Waso": "ဝါဆို",
    "Wagaung": "ဝါေခါင္",
    "Tawthalin": "ေတာ္သလင္း",
    "Thadingyut": "သီတင္းကြ်တ္",
    "Tazaungmon": "တန္ေဆာင္မုန္း",
    "Nadaw": "နတ္ေတာ္",
    "Pyatho": "ျပာသို",
    "Tabodwe": "တပို႔တြဲ",
    "Tabaung": "တေပါင္း",
    "waxing": "လဆန္း",
    "waning": "လဆုတ္",
    "full moon": "လျပည့္",
    "new moon": "လကြယ္",
    "Myanmar Year": "ျမန္မာႏွစ္",
    "Ku": "ခု",
    "Late": "ေႏွာင္း",
    "Second": "ဒု",
    "Sunday": "တနဂၤေႏြ",
    "Monday": "တနလၤာ",
    "Tuesday": "အဂၤါ",
    "Wednesday": "ဗုဒၶဟူး",
    "Thursday": "ၾကာသပေတး",
    "Friday": "ေသာၾကာ",
    "Saturday": "စေန",
    "Nay": "ေန႔",
    "Yat": "ရက္",
    "Sabbath Eve": "အဖိတ္",
    "Sabbath": "ဥပုသ္",
    "Yatyaza": "ရက္ရာဇာ",
    "Afternoon Pyathada": "မြန္းလြဲျပႆဒါး",
    "Pyathada": "ျပႆဒါး",
    "New Year Day": "New Year's Day",
    "Independence Day": "လြတ္လပ္ေရးေန႔",
    "Union Day": "ျပည္ေထာင္စုေန႔",
    "Peasants Day": "ေတာင္သူ လယ္သမားေန႔",
    "Resistance Day": "ေတာ္လွန္ေရးေန႔",
    "Labour Day": "အလုပ္သမားေန႔",
    "Martyrs Day": "အာဇာနည္ေန႔",
    "Christmas Day": "ခရစၥမတ္ေန႔",
    "Buddha Day": "ေညာင္ေရ သြန္းပြဲ",
    "Start of Buddhist Lent": "ဓမၼစၾကာေန႔",
    "End of Buddhist Lent": "မီးထြန္းပြဲ",
    "Tazaungdaing": "တန္ေဆာင္တိုင္",
    "National Day": "အမ်ိဳးသားေန႔",
    "Karen New Year Day": "ကရင္ နွစ္သစ္ကူး",
    "Tabaung Pwe": "တေပါင္းပြဲ",
    "Thingyan Akyo": "သၾကၤန္ အႀကိဳ",
    "Thingyan Akya": "သႀကၤန္္ အက်",
    "Thingyan Akyat": "သႀကၤန္္ အၾကတ္",
    "Thingyan Atat": "သႀကၤန္္ အတက္",
    "Myanmar New Year Day": "နွစ္ဆန္း တစ္ရက္",
    "Amyeittasote": "အၿမိတၱစုတ္",
    "Warameittugyi": "ဝါရမိတၱဳႀကီး",
    "Warameittunge": "ဝါရမိတၱဳငယ္",
    "Thamaphyu": "သမားျဖဴ",
    "Thamanyo": "သမားညိဳ",
    "Yatpote": "ရက္ပုပ္",
    "Yatyotema": "ရက္ယုတ္မာ",
    "Mahayatkyan": "မဟာရက္ၾကမ္း",
    "Nagapor": "နဂါးေပၚ",
    "Shanyat": "ရွမ္းရက္",
    ",": "၊",
    ".": "။",
    "Mon National Day": "မြန္အမ်ိဳးသားေန႔",
    "G. Aung San BD": "ဗိုလ္ခ်ဳပ္ေမြးေန႔",
    "Valentines Day": "ခ်စ္သူမ်ားေန႔",
    "Earth Day": "ကမၻာေျမေန႔",
    "April Fools Day": "ဧၿပီအ႐ူးေန႔",
    "Red Cross Day": "ၾကက္ေျခနီေန႔",
    "United Nations Day": "ကုလသမၼဂၢေန႔",
    "Halloween": "သရဲေန႔",
    "Shan New Year Day": "ရွမ္းနွစ္သစ္ကူး",
    "Mothers Day": "အေမေန႔",
    "Fathers Day": "အေဖေန႔",
    "Sasana Year": "သာသနာႏွစ္",
    "Eid": "အိဒ္",
    "Diwali": "ဒီဝါလီ",
    "Mahathamaya Day": "မဟာသမယေန႔",
    "Garudhamma Day": "ဂ႐ုဓမၼေန႔",
    "Metta Day": "ေမတၱာေန႔",
    "Taungpyone Pwe": "ေတာင္ျပဳန္းပြဲ",
    "Yadanagu Pwe": "ရတနာ့ဂူပြဲ",
    "Authors Day": "စာဆိုေတာ္ေန႔",
    "World Teachers Day": "ကမၻာ့ဆရာမ်ားေန႔",
    "Holiday": "႐ုံးပိတ္ရက္",
    "Chinese New Year": "တ႐ုတ္ႏွစ္သစ္ကူး",
    "Easter": "ထေျမာက္ရာေန႔",
    "Good Friday": "ေသာၾကာေန႔ႀကီး"
  }
}
);
//End of Internationalization (language)  #####################################
