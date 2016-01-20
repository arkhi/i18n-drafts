// translate the text between <<<eot and eot  or between quotes
// text following double slashes (such as this line) provides comments for the translator
// never add any text alongside the eot delimiters - not even spaces !
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below


var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arabiska',
  'bg':'Bulgariska',
  'da':'Danska',
  'de':'Tyska',
  'el':'Grekiska',
  'en':'Engelska',
  'es':'Spanska',
  'fr':'Franska',
  'he':'Hebreiska',
  'hi':'Hindi',
  'hu':'Ungerska',
  'it':'Italienska',
  'ja':'Japanska',
  'ko':'Koreanska',
  'nl':'Nederländska',
  'pl':'Polska',
  'pt':'Portugisiska',
  'pt-br':'Portugisiska',
  'ro':'Rumänska',
  'ru':'Ryska',
  'sv':'Svenska',
  'th':'Thailändska',
  'tr':'Turkiska',
  'uk':'Ukrainska',
  'vi':'Vietnamesiska',
  'zh-hans':'Förenklad kinesiska',
  'zh-hant':'Traditionell kinesiska',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""



// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N-aktivitetens hemsida"
s.moreResourcesOfThisType = "Fler resurser av denna typ."
s.accessKeyN = 'Använd accesskey \'n\' för att hoppa till de interna navigationslänkarna i dokumentet. <a href="#contentstart">Hoppa till början av innehållet.</a>'
s.examplesInAnotherScript = "Detta dokument innehåller exempel uttryckta i andra språk/skript."
s.worldMap = "Världskarta"
s.searchI18nSite = "Sök på I18n:s webbplats" 
s.translationDisclaimer = 'Detta dokument är en översättning av ett engelskt orginal. Om det finns tveksamheter eller fel i detta dokument, så är <a href="'+f.filename+'.en">senaste version av det engelska orginalet</a> den auktoritativa versionen. <a href="#copyright">Copyright</a> tillhör W3C, enligt nedan.'
s.translator = "Översättare:"
s.relatedLinks = "Näraliggande länkar"
s.articles = "Artiklar" // used in breadcrumbs, top right of page 
s.topicIndexText = "Index över ämnen"
s.techIndexText = "Index över tekniker"
s.gotoW3cHome = "Gå till W3C:s hemsida"
s.gotoI18nHome = "Gå till W3C:s hemsida om internationalisering"
s.internationalizationTitle = "Internationalization"
s.i18nActivityHomePage = "Internationaliseringsaktivitetens hemsida."
s.home = "Hemsidan"
s.aboutI18nActivity = "Om internationaliseringsaktiviteten."
s.about = "Om"
s.groupsThatMakeUp = "Arbetsgrupper inom internationaliseringsaktiviteten."
s.groups = "Grupper"
s.topicIndexForInformation = "Ämnesorienterat index över information på denna webbplats."
s.topics = "Ämnen"
s.taskBasedIndex = "Uppgiftsorienterat index över i18n-tekniker."
s.techniques = "Tekniker"
s.informationResources = "Informationsresurser på internationaliseringens webbplats."
s.resources = "Resurser"
s.newsFiltersAndFeeds = "Information om nyhetsfilter och RSS-kanaler för W3C:s internationaliseringsarbete."
s.news = "Nyheter"
s.onThisPage = "På denna sida"
s.questionAlt = "Frågor"
s.questionLink = "Frågor"
s.question = "Frågor"
s.backgroundAlt = "Bakgrundsinformation"
s.backgroundLink = "Bakgrundsinformation"
s.background = "Bakgrundsinformation"
s.answer = "Svar" // heading
s.answerAlt = "Svar"
s.answerLink = "Svar"
s.byTheWayAlt = "Mer nyttig information"
s.byTheWayLink = "Nyttig information"
s.byTheWay = "Nyttig information"
s.furtherReadingAlt = "Mer att läsa"
s.furtherReadingLink = "Mer att läsa"
s.furtherReading = "Mer att läsa"
s.intendedAudience = "Avsedd läsarkrets:"
s.skipToAnswer = "[Hoppa till svaret]"
s.tellUsWhatYouThink = "Tala om för oss vad du tycker."
s.sendAComment = "Sänd oss en kommentar"
s.subscribeToRSS = "Prenumerera på en RSS-kanal."
s.newResourcesAlt = "Informerar dig när en ny resurs publiceras för första gången."
s.newResources = "Nya resurser"
s.homePageNewsAlt = "Alla nyhetsnotiser som visas på hemsidan."
s.homePageNews = "Nyheter på hemsidan"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Av:" // followed by name of author(s)
s.previousAuthors = "Tidigare av:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Ändrad av:" // person's name appears after colon
s.translatedBy = "Översättare:"
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Kodad i UTF-8!"

s.translatedFromEnglishVer = "Översatt från engelskt innehåll skapat/ändrat "+dt.enVersion+". Översättningen senast ändrad "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Information om ändringar i orginaldokumentet kan fås genom att söka efter <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a></span> i i18n-bloggen.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="/International/'+f.directory+f.filename+'.en.php">the English original</a> since this document was translated. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">See the change log.</a></span>'
s.untranslatedChanges = '<strong>Obs:</strong> Det  <a href="/International/'+f.directory+f.filename+'.en.php">engelska originaldokumentet</a> har ändrats sedan det översattes. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">Se ändringsloggen.</a></span>'
s.new="Ny"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Uppdaterad" // same as New
s.translation_updated="Översättning uppdaterad:" // date appears after colon

s.aboutThisArticle="Om denna artikel" // title in the right column near the top of the page
s.status_draft="Denna artikel är ett utkast som ännu genomgått en öppen granskning. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda länken längst ner på denna sida."
s.status_review="Denna artikel är nu publicerad för öppen granskning. Skicka in kommentarer på <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>prenumerera</a>)</span>."
s.status_published="Denna artikel har granskats av W3C:s arbetsgrupp för internationalisering, och har genomgått öppen granskning, för att säkerställa att den är så korrekt som möjligt. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda länken längst ner på denna sida."
s.status_notreviewed="Denna artikel publicerades utan att ha blivit granskad. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda länken längst ner på denna sida."
s.tests="" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Snabbt svar" // heading
s.longeranswer = "Längre svar" // heading
s.acknowledgements = "Även tack till följande personer som bidragit eller gett kommentarer:"  // used at bottom of page to list people who provided feedback. The list comes after this text.
s.cookieMsg1 = "The URL for this page contains 'changelang=' followed by a language tag (" // used in an prompt when switching languages. The language tag appears in the parentheses.
s.cookieMsg2 = "). If you let the page set a cookie, you will continue to see W3C Internationalization Activity pages in the language specified, where available. Do you want to set the cookie?" // continuation of the above message.  Adjust the content of the two messages so that the parentheses appear in the correct location, and the first message ends with ( and the second starts with ).