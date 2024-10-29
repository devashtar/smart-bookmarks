export type ItemType = {
    id: number;
    url: string;
    title: string;
    description: string;
    imgSrc: string;
    tags: Array<string>;
};

const IMG_PATH = `${process.env.PUBLIC_URL}/images`;

/**
 * List of sites.
 */
export const items: ItemType[] = [
    {
        id: 1,
        url: 'https://www.bl.uk/',
        title: 'Британская библиотека',
        description: 'Самая крупная библиотека мира с фондами более 170 миллионов единиц хранения',
        imgSrc: `${IMG_PATH}/bl.uk.jpg`,
        tags: ['библиотека', 'лондон', 'история'],
    },
    {
        id: 2,
        url: 'https://www.loc.gov/',
        title: 'Библиотека Конгресса',
        description: 'Вторая по величине библиотека мира',
        imgSrc: `${IMG_PATH}/loc.gov.jpg`,
        tags: ['библиотека', 'вашингтон', 'национальный'],
    },
    {
        id: 3,
        url: 'https://www.dnb.de/',
        title: 'Немецкая национальная библиотека',
        description: 'Наиболее крупная библиотека Германии',
        imgSrc: `${IMG_PATH}/dnb.de.jpg`,
        tags: ['библиотека', 'франкфурт', 'немецкий'],
    },
    {
        id: 4,
        url: 'https://www.ndl.go.jp/en/',
        title: 'Национальная парламентская библиотека Японии',
        description: 'Наиболее крупная библиотека Японии',
        imgSrc: `${IMG_PATH}/ndl.go.jp.jpg`,
        tags: ['библиотека', 'токио', 'япония'],
    },
    {
        id: 5,
        url: 'https://kb.dk/',
        title: 'Королевская библиотека Дании',
        description: 'Наиболее крупная библиотека Дании',
        imgSrc: `${IMG_PATH}/kb.dk.jpg`,
        tags: ['библиотека', 'копенгаген', 'датский'],
    },
    {
        id: 6,
        url: 'https://www.bnf.fr/',
        title: 'Национальная библиотека Франции',
        description: 'Наиболее крупная библиотека Франции',
        imgSrc: `${IMG_PATH}/bnf.fr.jpg`,
        tags: ['библиотека', 'париж', 'французский'],
    },
    {
        id: 7,
        url: 'https://www.bne.es/',
        title: 'Национальная библиотека Испании',
        description: 'Наиболее крупная библиотека Испании',
        imgSrc: `${IMG_PATH}/bne.es.jpg`,
        tags: ['библиотека', 'мадрид', 'испанский'],
    },
    {
        id: 8,
        url: 'https://www.rsl.ru/',
        title: 'Российская государственная библиотека',
        description: 'Третья по величине библиотека мира',
        imgSrc: `${IMG_PATH}/rsl.ru.jpg`,
        tags: ['библиотека', 'санкт-петербург', 'российский'],
    },
    {
        id: 9,
        url: 'https://www.nlr.ru/',
        title: 'Российская национальная библиотека',
        description: 'Наиболее крупная библиотека Санкт-Петербурга',
        imgSrc: `${IMG_PATH}/nlr.ru.jpg`,
        tags: ['библиотека', 'санкт-петербург', 'российский'],
    },
    {
        id: 10,
        url: 'https://docs.historyrussia.org/',
        title: 'Российская электронная библиотека исторических документов',
        description:
            'Задачей проекта является создание Электронной библиотеки исторических документов, в которой исследователи в открытом доступе смогут найти, в перспективе, все исторические документы, опубликованные в России с 1991 года',
        imgSrc: `${IMG_PATH}/docs.historyrussia.org.jpg`,
        tags: ['библиотека', 'электронная', 'история', 'российский'],
    },
    {
        id: 11,
        url: 'https://archive.org/',
        title: 'Интернет-архив',
        description:
            'Интернет-архив, некоммерческая организация 501(c)(3), создает цифровую библиотеку интернет-сайтов и других культурных артефактов в цифровой форме.',
        imgSrc: `${IMG_PATH}/archive.org.jpg`,
        tags: ['библиотека', 'цифровая', 'интернет', 'архивы интернета'],
    },
    {
        id: 12,
        url: 'https://mythopedia.com/',
        title: 'Мифопедия',
        description:
            'Мифологический словарь, содержащий информацию о мифологии различных культур и народов.',
        imgSrc: `${IMG_PATH}/mythopedia.com.jpg`,
        tags: ['мифы', 'легенды', 'культуры'],
    },
    {
        id: 13,
        url: 'https://www.britannica.com/',
        title: 'Британника',
        description:
            'Официальный интернет-ресурс Британской энциклопедии, предоставляющий широкий спектр знаний по различным темам.',
        imgSrc: `${IMG_PATH}/britannica.com.jpg`,
        tags: ['энциклопедия', 'знания', 'информация', 'образовательные ресурсы'],
    },
    {
        id: 14,
        url: 'https://whc.unesco.org/',
        title: 'ЮНЕСКО Всемирное наследие',
        description:
            'Официальный сайт программы ЮНЕСКО "Всемирное наследие", содержащий список всемирно значимых культурного и природного наследия.',
        imgSrc: `${IMG_PATH}/whc.unesco.org.jpg`,
        tags: ['наследие', 'движущиеся изображения', 'списки'],
    },
    {
        id: 15,
        url: 'https://artsandculture.google.com/',
        title: 'Google Arts & Culture',
        description:
            'Онлайн-платформа Google, предоставляющая доступ к художественным музеям и галереям со всего мира, а также к культурному наследию.',
        imgSrc: `${IMG_PATH}/artsandculture.google.com.jpg`,
        tags: ['музеи', 'художественные галереи', 'диджитализация'],
    },
    {
        id: 16,
        url: 'https://www.artsteps.com/',
        title: 'ArtSteps',
        description:
            'Портал, предоставляющий подробные инструкции по созданию искусства, рисования и творчества для начинающих и опытных художников.',
        imgSrc: `${IMG_PATH}/artsteps.com.jpg`,
        tags: ['инструкции', 'школа рисования', 'креативность'],
    },
    {
        id: 17,
        url: 'https://www.gutenberg.org/',
        title: 'Project Gutenberg',
        description:
            'Библиотека цифровых книг, основанная на принципе свободного распространения, содержащая тысячи классических произведений литературы.',
        imgSrc: `${IMG_PATH}/gutenberg.org.jpg`,
        tags: ['книги', 'литература', 'фильмы', 'аудиокниги'],
    },
    {
        id: 18,
        url: 'https://centurypast.org/',
        title: 'Century Past',
        description:
            'Портал, посвященный истории прошлого века, предоставляющий информацию о событиях, людях и культуре XX века.',
        imgSrc: `${IMG_PATH}/centurypast.org.jpg`,
        tags: ['история', 'события', 'персоналии'],
    },
    {
        id: 19,
        url: 'https://www.tldraw.com/',
        title: 'TLDRAW',
        description:
            'Инструмент для создания диаграмм и схем, позволяющий легко рисовать и редактировать графические представления различных концепций.',
        imgSrc: `${IMG_PATH}/tldraw.com.jpg`,
        tags: ['графика', 'схемы', 'интерактивность'],
    },
    {
        id: 20,
        url: 'https://geoma.space/ru',
        title: 'Geoma Space',
        description:
            'Портал, предоставляющий географическую информацию, карты и инструменты для изучения географии и геологии.',
        imgSrc: `${IMG_PATH}/geoma.space.jpg`,
        tags: ['карты', 'география', 'геология', 'изучение'],
    },
    {
        id: 21,
        url: 'https://excalidraw.com/',
        title: 'Excalidraw',
        description:
            'Инструмент для создания диаграмм и схем, позволяющий рисовать и редактировать графические представления различных концепций.',
        imgSrc: `${IMG_PATH}/excalidraw.com.jpg`,
        tags: ['графика', 'схемы', 'интерактивность'],
    },
    {
        id: 22,
        url: 'https://okso.app/',
        title: 'OKSO',
        description:
            'Портал, предоставляющий образовательные ресурсы, включая учебники, тесты и другие материалы для обучения.',
        imgSrc: `${IMG_PATH}/okso.app.jpg`,
        tags: ['учебники', 'тесты', 'информация'],
    },
    {
        id: 23,
        url: 'https://sci-hub.41610.org/sci-hub-mirrors',
        title: 'Sci-Hub',
        description:
            'Пиратский сайт, предоставляющий бесплатный доступ к научным статьям и исследованиям, нарушая авторские права.',
        imgSrc: `${IMG_PATH}/sci-hub.41610.org.jpg`,
        tags: ['статьи', 'исследования', 'доступ'],
    },
    {
        id: 24,
        url: 'https://runivers.ru/',
        title: 'Руниверс',
        description:
            'Портал, предоставляющий доступ к учебникам, учебным материалам и ресурсам для студентов вузов.',
        imgSrc: `${IMG_PATH}/runivers.ru.jpg`,
        tags: ['учебники', 'методические рекомендации', 'информация'],
    },
    {
        id: 25,
        url: 'https://www.mykrita.ru/',
        title: 'Krita',
        description:
            'Российское сообщество и форум пользователями программы Krita, предоставляющие советы, тренинги и обсуждение использования этой популярной программы для рисования и графика.',
        imgSrc: `${IMG_PATH}/mykrita.ru.jpg`,
        tags: ['рисование', 'графика', 'коммуникации'],
    },
    {
        id: 26,
        url: 'http://gutenberg.net.au/',
        title: 'Project Gutenberg Australia',
        description:
            'Библиотека цифровых книг, содержащая более 33 000 свободных электронных книг, в том числе исторические тексты.',
        imgSrc: `${IMG_PATH}/gutenberg.net.au.jpg`,
        tags: ['история', 'цифровая библиотека', 'свободные книги'],
    },
    {
        id: 27,
        url: 'http://gutenberg.ca/index.html',
        title: 'Project Gutenberg Canada',
        description:
            'Канадская секция проекта Gutenberg, предоставляющая доступ к тысячам исторических и современных канадских текстов.',
        imgSrc: `${IMG_PATH}/gutenberg.ca.jpg`,
        tags: ['история', 'канада', 'цифровая библиотека'],
    },
    {
        id: 28,
        url: 'https://runeberg.org/',
        title: 'Runeberg',
        description:
            'Финская цифровая библиотека, содержащая исторические и литературные тексты на финском языке.',
        imgSrc: `${IMG_PATH}/runeberg.org.jpg`,
        tags: ['история', 'финский язык', 'цифровая библиотека'],
    },
    {
        id: 29,
        url: 'https://mediahistoryproject.org/',
        title: 'Media History Project',
        description:
            'Интерактивный порцал, посвященный истории медиа и коммуникаций, включая радио, телевидение и интернет.',
        imgSrc: `${IMG_PATH}/mediahistoryproject.org.jpg`,
        tags: ['медиа', 'история', 'интерактивные ресурсы'],
    },
    {
        id: 30,
        url: 'https://repository.duke.edu/',
        title: 'Duke University Digital Collections',
        description:
            'Цифровой архив Дьюка, содержащий широкий спектр исторических материалов, включая рукописи, фотографии и документы.',
        imgSrc: `${IMG_PATH}/repository.duke.edu.jpg`,
        tags: ['история', 'цифровые ресурсы', 'образовательные материалы'],
    },
    {
        id: 31,
        url: 'https://www.earlymoderntexts.com/',
        title: 'Early Modern Texts',
        description:
            'Сайт, предлагающий бесплатно скачиваемые тексты раннего нового времени, включая исторические труды и документы.',
        imgSrc: `${IMG_PATH}/earlymoderntexts.com.jpg`,
        tags: ['история', 'ресурс', 'архивные тексты'],
    },
    {
        id: 32,
        url: 'https://www.worldhistory.org/',
        title: 'World History Encyclopedia',
        description:
            'Веб-сайт, предоставляющий краткие статьи о различных исторических темах из разных частей мира.',
        imgSrc: `${IMG_PATH}/worldhistory.org.jpg`,
        tags: ['история', 'энциклопедия', 'просточные статьи'],
    },
    {
        id: 33,
        url: 'https://www.livius.org/',
        title: 'Livius.org',
        description:
            'Ресурс, предоставляющий информацию об античной истории, включая биографии исторических личностей и географию.',
        imgSrc: `${IMG_PATH}/livius.org.jpg`,
        tags: ['история', 'античность', 'биографии'],
    },
    {
        id: 34,
        url: 'https://quod.lib.umich.edu/lib/colllist/',
        title: 'University of Michigan Library Digital Collections',
        description:
            'Цифровой архив Университета Мичигана, содержащий различные коллекции исторических материалов и документов.',
        imgSrc: `${IMG_PATH}/quod.lib.umich.edu.jpg`,
        tags: ['история', 'цифровые ресурсы', 'образовательные материалы'],
    },
    {
        id: 35,
        url: 'http://www.perseus.tufts.edu/hopper/',
        title: 'Perseus Digital Library',
        description:
            'Цифровая библиотека Персея, предоставляющая доступ к античным текстам, изображениям и картам.',
        imgSrc: `${IMG_PATH}/perseus.tufts.edu.jpg`,
        tags: ['история', 'античность', 'цифровые ресурсы'],
    },
    {
        id: 36,
        url: 'https://biblior.net/',
        title: 'Biblior.net',
        description:
            'Портал, предоставляющий доступ к различным цифровым библиотекам и архивам, содержащим исторические материалы.',
        imgSrc: `${IMG_PATH}/biblior.net.jpg`,
        tags: ['история', 'цифровые ресурсы', 'архив'],
    },
    {
        id: 37,
        url: 'http://www.eyewitnesstohistory.com/index.html',
        title: 'Eyewitness to History',
        description:
            'Сайт, содержащий первоисточники и личные рассказы очевидцев важных исторических событий.',
        imgSrc: `${IMG_PATH}/eyewitnesstohistory.com.jpg`,
        tags: ['исторические первоисточники', 'личные рассказы', 'веб-сайты'],
    },
    {
        id: 38,
        url: 'https://celt.ucc.ie/',
        title: 'CELT Project',
        description:
            'Интерактивный порцессор текстов и корпусная база данных для изучения английского языка.',
        imgSrc: `${IMG_PATH}/celt.ucc.ie.jpg`,
        tags: ['аналитика текстов', 'корпусная лингвистика', 'образовательные ресурсы'],
    },
    {
        id: 39,
        url: 'https://siarchives.si.edu/',
        title: 'Smithsonian Institution Archives',
        description:
            'Архивы и документы Национального музея американской истории, содержащие информацию о культуре США.',
        imgSrc: `${IMG_PATH}/siarchives.si.edu.jpg`,
        tags: ['архив', 'национальное наследие', 'культурные ресурсы'],
    },
    {
        id: 40,
        url: 'https://www.archives.gov/',
        title: 'National Archives',
        description:
            'Официальный архив США, предоставляющий доступ к ключевым историческим документам страны.',
        imgSrc: `${IMG_PATH}/archives.gov.jpg`,
        tags: ['государственный архив', 'исторические документы', 'правовые ресурсы'],
    },
    {
        id: 41,
        url: 'https://www.europeana.eu/en',
        title: 'Europeana',
        description:
            'Европейская цифровая библиотека, содержащая коллекции музеев, библиотек и архивов из разных стран Европы.',
        imgSrc: `${IMG_PATH}/europeana.eu.jpg`,
        tags: ['цифровые коллекции', 'музеи', 'библиотека', 'архив'],
    },
    {
        id: 42,
        url: 'https://www.nationalarchives.gov.uk/',
        title: 'The National Archives UK',
        description:
            'Британский национальный архив, содержащий исторические документы Великобритании.',
        imgSrc: `${IMG_PATH}/nationalarchives.gov.uk.jpg`,
        tags: ['британский архив', 'исторические документы', 'наследие'],
    },
    {
        id: 43,
        url: 'https://www.jewishvirtuallibrary.org/',
        title: 'Jewish Virtual Library',
        description:
            'Цифровая библиотека, содержащая информацию об истории и культуре еврейского народа.',
        imgSrc: `${IMG_PATH}/jewishvirtuallibrary.org.jpg`,
        tags: ['еврейская история', 'культура', 'цифровые ресурсы'],
    },
    {
        id: 44,
        url: 'https://www.themorgan.org/music',
        title: 'The Morgan Library & Museum',
        description:
            'Музей в Нью-Йорке, содержащий редкие книги, рукописи и произведения искусства.',
        imgSrc: `${IMG_PATH}/themorgan.org.jpg`,
        tags: ['мужские клубы', 'культурные учреждения', 'искусство'],
    },
    {
        id: 45,
        url: 'https://www.diamm.ac.uk/',
        title: 'Digital Medievalist',
        description:
            'Портал для исследователей средневековой истории и культуры, содержащий цифровые ресурсы.',
        imgSrc: `${IMG_PATH}/diamm.ac.uk.jpg`,
        tags: ['средние века', 'цифровая история', 'исследовательские инструменты'],
    },
    {
        id: 46,
        url: 'https://deremilitari.org/articles/',
        title: 'Deremilitari.org',
        description:
            'Портал, посвященный военной истории и археологии, содержащий статьи и исследования.',
        imgSrc: `${IMG_PATH}/deremilitari.org.jpg`,
        tags: ['военная история', 'археология', 'научные публикации'],
    },
    {
        id: 47,
        url: 'https://byzantinemilitary.blogspot.com/',
        title: 'Byzantine Military Blog',
        description: 'Блог, освещающий военную историю Византии и раннего средневековья.',
        imgSrc: `${IMG_PATH}/byzantinemilitary.blogspot.com.jpg`,
        tags: ['византийская история', 'раннее средневековье', 'блоги'],
    },
    {
        id: 48,
        url: 'http://www.cindyvallar.com/pirates.html',
        title: "Cindy Vallar's Pirate Page",
        description: 'Информационный ресурс о пиратах, содержащий статьи и ресурсы по этой теме.',
        imgSrc: `${IMG_PATH}/cindyvallar.com.jpg`,
        tags: ['пираты', 'исторические ресурсы', 'интернет-сайты'],
    },
    {
        id: 49,
        url: 'https://www.digitaltransgenderarchive.net/',
        title: 'Digital Transgender Archive',
        description:
            'Цифровой архив, содержащий документы и материалы по трансгендерной истории и культуре.',
        imgSrc: `${IMG_PATH}/digitaltransgenderarchive.net.jpg`,
        tags: ['трансгендерная история', 'цифровые ресурсы', 'культурное наследие'],
    },
    {
        id: 50,
        url: 'http://textfiles.com/',
        title: 'Textfiles.com',
        description:
            'Сайт, содержащий различные текстовые файлы, включая исторические документы и первоисточники.',
        imgSrc: `${IMG_PATH}/textfiles.com.jpg`,
        tags: ['исторические документы', 'первоисточники', 'архивы интернета'],
    },
    {
        id: 51,
        url: 'http://www.virtualani.org/',
        title: 'Virtual ANI',
        description:
            'Сайт Virtual ANI предоставляет интерактивные образовательные ресурсы для изучения истории Индии.',
        imgSrc: `${IMG_PATH}/virtualani.org.jpg`,
        tags: ['история индии', 'интерактивное обучение'],
    },
    {
        id: 52,
        url: 'https://www.thearchaeologist.org/',
        title: 'The Archaeologist',
        description:
            'Портал The Archaeologist предлагает различные ресурсы по археологии и древней истории.',
        imgSrc: `${IMG_PATH}/thearchaeologist.org.jpg`,
        tags: ['археологические находки', 'история древних цивилизаций'],
    },
    {
        id: 53,
        url: 'https://keycombiner.com/desktop/',
        title: 'KeyCombiner',
        description: 'Инструмент для создания и управления ключами доступа к сайтам.',
        imgSrc: `${IMG_PATH}/keycombiner.com.jpg`,
        tags: ['управление паролями', 'защита данных'],
    },
    {
        id: 54,
        url: 'https://icons8.com/lunacy',
        title: 'Lunacy',
        description:
            'Программа для создания и редактирования иконок и других векторных изображений.',
        imgSrc: `${IMG_PATH}/icons8.com.jpg`,
        tags: ['создание иконок', 'векторное рисование'],
    },
    {
        id: 55,
        url: 'https://www.sketch.com/',
        title: 'Sketch',
        description: 'Платформа для дизайна пользовательских интерфейсов и прототипирования.',
        imgSrc: `${IMG_PATH}/sketch.com.jpg`,
        tags: ['дизайн', 'прототипирование'],
    },
    {
        id: 56,
        url: 'https://telemost.yandex.ru/',
        title: 'Yandex.Telemost',
        description: 'Интерактивная доска для онлайн-встреч и совещаний.',
        imgSrc: `${IMG_PATH}/telemost.yandex.ru.jpg`,
        tags: ['онлайн-совещения', 'инструмент для коммуникации'],
    },
    {
        id: 57,
        url: 'https://sboard.online/',
        title: 'SBoard',
        description: 'Инструмент для создания интерактивных досок для онлайн-обучения.',
        imgSrc: `${IMG_PATH}/sboard.online.jpg`,
        tags: ['интерактивные доски', 'электронное обучение'],
    },
    {
        id: 58,
        url: 'https://witeboard.com/',
        title: 'Witeboard',
        description: 'Программа для создания интерактивных досок для онлайн-коммуникаций.',
        imgSrc: `${IMG_PATH}/witeboard.com.jpg`,
        tags: ['интерактивные доски', 'онлайн-совещения'],
    },
    {
        id: 59,
        url: 'https://app.ziteboard.com/',
        title: 'Ziteboard',
        description: 'Платформа для создания интерактивных досок и проведения онлайн-встреч.',
        imgSrc: `${IMG_PATH}/app.ziteboard.com.jpg`,
        tags: ['интерактивные доски', 'электронное обучение'],
    },
    {
        id: 60,
        url: 'https://webwhiteboard.com/',
        title: 'WebWhiteboard',
        description: 'Инструмент для создания интерактивных досок для онлайн-коллаборации.',
        imgSrc: `${IMG_PATH}/webwhiteboard.com.jpg`,
        tags: ['интерактивные доски', 'коллаборативный софт'],
    },
    {
        id: 61,
        url: 'https://www.drawio.com/',
        title: 'Draw.io',
        description:
            'Инструмент для создания диаграмм и схем. Позволяет быстро визуализировать исторические события или структуры.',
        imgSrc: `${IMG_PATH}/drawio.com.jpg`,
        tags: ['визуализация', 'создание диаграмм'],
    },
    {
        id: 62,
        url: 'https://www.gingersoftware.com/',
        title: 'Ginger Software',
        description:
            'Плагин для проверки орфографии и грамматики текста. Может быть полезен при написании учебных материалов или ответов на вопросы.',
        imgSrc: `${IMG_PATH}/gingersoftware.com.jpg`,
        tags: ['проверка орфографии', 'грамматика'],
    },
    {
        id: 63,
        url: 'https://prowritingaid.com/',
        title: 'ProWritingAid',
        description:
            'Инструмент для улучшения качества текста. Помогает выявить ошибки и улучшить стиль написания.',
        imgSrc: `${IMG_PATH}/prowritingaid.com.jpg`,
        tags: ['анализ текста', 'улучшение качества'],
    },
    {
        id: 64,
        url: 'https://languagetool.org/',
        title: 'LanguageTool',
        description:
            'Бесплатный инструмент для проверки орфографии и грамматики текста на различных языках.',
        imgSrc: `${IMG_PATH}/languagetool.org.jpg`,
        tags: ['проверка орфографии', 'грамматика', 'письмо'],
    },
    {
        id: 65,
        url: 'https://orfogrammka.ru/',
        title: 'Orfogrammka',
        description:
            'Инструмент для проверки орфографии и правописания русского языка. Может быть полезен учителям истории для проверки письменных работ студентов.',
        imgSrc: `${IMG_PATH}/orfogrammka.ru.jpg`,
        tags: ['проверка орфографии', 'правописание'],
    },
    {
        id: 66,
        url: 'https://glvrd.ru/',
        title: 'GLVRD',
        description:
            'Инструмент для проверки текста на наличие плагиата и улучшения качества текста.',
        imgSrc: `${IMG_PATH}/glvrd.ru.jpg`,
        tags: ['проверка плагиата', 'улучшение качества текста'],
    },
    {
        id: 67,
        url: 'https://rxresu.me/',
        title: 'RXRESU.me',
        description: 'Сервис для проверки текста на наличие плагиата и выявления дубликатов.',
        imgSrc: `${IMG_PATH}/rxresu.me.jpg`,
        tags: ['проверка плагиата', 'поиск дубликатов'],
    },
    {
        id: 68,
        url: 'http://elib.shpl.ru/ru/nodes/9347-elektronnaya-biblioteka-gpib',
        title: 'Электронная библиотека СПБ',
        description:
            'Большая коллекция электронных книг и ресурсов по истории Санкт-Петербурга и Петербургской области.',
        imgSrc: `${IMG_PATH}/elib.shpl.ru.jpg`,
        tags: ['электронная библиотека', 'исторические ресурсы'],
    },
    {
        id: 69,
        url: 'https://onlinepdfedit.com/',
        title: 'Online PDF Editor',
        description:
            'Инструмент для редактирования и обработки PDF-файлов. Может быть полезен для создания учебных материалов или анализа исторических документов.',
        imgSrc: `${IMG_PATH}/onlinepdfedit.com.jpg`,
        tags: ['редактирование pdf', 'обработка документов'],
    },
    {
        id: 70,
        url: 'https://www.wallpaperflare.com/',
        title: 'Wallpaperflare',
        description:
            'База изображений для настольного фонового wallpapers. Может быть полезна для создания атмосферы в классе или оформления презентаций.',
        imgSrc: `${IMG_PATH}/wallpaperflare.com.jpg`,
        tags: ['фоновые изображения', 'декорация класса'],
    },
    {
        id: 71,
        url: 'https://www.flickr.com/',
        title: 'Flickr',
        description:
            'Платформа для хранения и обмена фотографиями. Может быть полезна для поиска исторических изображений или создания учебных материалов.',
        imgSrc: `${IMG_PATH}/flickr.com.jpg`,
        tags: ['фотографии', 'исторические изображения'],
    },
    {
        id: 72,
        url: 'https://education.nationalgeographic.org/',
        title: 'National Geographic Education',
        description:
            'Научно-популярный портал National Geographic предоставляет широкий спектр образовательных ресурсов по истории, географии и другим темам.',
        imgSrc: `${IMG_PATH}/education.nationalgeographic.org.jpg`,
        tags: ['научно-популярная литература', 'образование', 'ресурсы для учителей'],
    },
    {
        id: 73,
        url: 'https://maps.lib.utexas.edu/',
        title: 'UT Library Online Maps Collection',
        description:
            'Библиотека Университета Техаса предлагает огромную коллекцию онлайн карт, включая исторические и современные地ографические материалы.',
        imgSrc: `${IMG_PATH}/maps.lib.utexas.edu.jpg`,
        tags: ['исторические карты', 'географические ресурсы', 'библиотечные базы данных'],
    },
    {
        id: 74,
        url: 'https://www.davidrumsey.com/',
        title: 'David Rumsey Map Collection',
        description:
            'Этот сайт содержит уникальную коллекцию исторических карт и географических материалов, охватывающую различные периоды времени и регионы мира.',
        imgSrc: `${IMG_PATH}/davidrumsey.com.jpg`,
        tags: ['исторические карты', 'географические ресурсы', 'архивные документы'],
    },
    {
        id: 75,
        url: 'https://www.oldmapsonline.org/en',
        title: 'Old Maps Online',
        description:
            'Портал, объединяющий множество библиотек и архивов, предоставляющих доступ к большому количеству старых карт и географических материалов.',
        imgSrc: `${IMG_PATH}/oldmapsonline.org.jpg`,
        tags: ['исторические карты', 'географические ресурсы', 'цифровой архив'],
    },
    {
        id: 76,
        url: 'https://dp.la/',
        title: 'Digital Public Library of America',
        description:
            'Цифровая публичная библиотека США предоставляет доступ к большому количеству цифровых ресурсов, включая исторические карты и географические материалы.',
        imgSrc: `${IMG_PATH}/dp.la.jpg`,
        tags: ['цифровые ресурсы', 'публичные библиотеки', 'исторические материалы'],
    },
    {
        id: 77,
        url: 'https://www.britishmuseum.org',
        title: 'The British Museum',
        description:
            'Музей Британский предоставляет доступ к своей обширной коллекции артефактов и исторических материалов, включая географические и картографические предметы.',
        imgSrc: `${IMG_PATH}/britishmuseum.org.jpg`,
        tags: ['музейные коллекции', 'исторические артефакты', 'географические ресурсы'],
    },
    {
        id: 78,
        url: 'https://www.getty.edu/',
        title: 'The Getty Museum',
        description:
            'Гетти предоставляет доступ к своей обширной коллекции искусства и культурных артефактов, включая географически значимые произведения и экспонаты.',
        imgSrc: `${IMG_PATH}/getty.edu.jpg`,
        tags: ['музейные коллекции', 'исторические артефакты', 'географические ресурсы'],
    },
    {
        id: 79,
        url: 'https://senatehouselibrary.libguides.com/az.php',
        title: 'Библиотека Сената США',
        description:
            'Сайты библиотеки Сената США предоставляют доступ к историческим документам, архивам и учебным материалам.',
        imgSrc: `${IMG_PATH}/senatehouselibrary.libguides.com.jpg`,
        tags: ['исторические документы', 'архив', 'учебные материалы'],
    },
    {
        id: 80,
        url: 'https://library-guides.ucl.ac.uk/az/databases',
        title: 'Университетский колледж Лондона: Библиотека',
        description:
            'Этот ресурс предоставляет доступ к различным историческим базам данных и архивам.',
        imgSrc: `${IMG_PATH}/library-guides.ucl.ac.uk.jpg`,
        tags: ['исторические базы данных', 'архив', 'университетские ресурсы'],
    },
    {
        id: 81,
        url: 'https://libguides.cam.ac.uk/home',
        title: 'Кембриджская библиотека: Руководство по использованию',
        description:
            'Сайт содержит руководства по использованию различных исторических ресурсов в Кембридже.',
        imgSrc: `${IMG_PATH}/libguides.cam.ac.uk.jpg`,
        tags: ['исторические ресурсы', 'руководства по использованию', 'университетские ресурсы'],
    },
    {
        id: 82,
        url: 'https://www.hathitrust.org/',
        title: 'Хейвардская библиотека',
        description:
            'Этот ресурс предоставляет доступ к большому количеству исторических книг и документов.',
        imgSrc: `${IMG_PATH}/hathitrust.org.jpg`,
        tags: ['исторические книги', 'документы', 'цифровые ресурсы'],
    },
    {
        id: 83,
        url: 'https://www.openculture.com/',
        title: 'Open Culture',
        description:
            'Портал предлагает бесплатный доступ к учебным ресурсам, включая исторические курсы и лекции.',
        imgSrc: `${IMG_PATH}/openculture.com.jpg`,
        tags: ['история', 'курсы', 'лекции', 'ресурс'],
    },
    {
        id: 84,
        url: 'https://www.ap.org/',
        title: 'Associated Press',
        description:
            'Сайт новостей Associated Press содержит архивы исторных новостей и фотографий.',
        imgSrc: `${IMG_PATH}/ap.org.jpg`,
        tags: ['исторические новости', 'архив', 'фотографии'],
    },
    {
        id: 85,
        url: 'https://www.gettyimages.com/',
        title: 'Getty Images',
        description:
            'База изображений Getty предоставляет доступ к историческим фотографиям и иллюстрациям.',
        imgSrc: `${IMG_PATH}/gettyimages.com.jpg`,
        tags: ['исторические фото', 'иллюстрации', 'образовательные ресурсы'],
    },
    {
        id: 86,
        url: 'https://www.smithsonianchannel.com/',
        title: 'Smithsonian Channel',
        description: 'Канал Smithsonian предлагает исторические документальные фильмы и программы.',
        imgSrc: `${IMG_PATH}/smithsonianchannel.com.jpg`,
        tags: ['исторические фильмы', 'программы', 'документальное кино'],
    },
    {
        id: 87,
        url: 'https://www.teachaway.com/',
        title: 'Teach Away',
        description:
            'Портал Teach Away предлагает образовательные ресурсы, включая учебники, методические материалы и онлайн-курсы для учителей истории.',
        imgSrc: `${IMG_PATH}/teachaway.com.jpg`,
        tags: ['ресурсы', 'учебники', 'методические материалы', 'онлайн курсы'],
    },
    {
        id: 88,
        url: 'https://www.edweek.org/',
        title: 'Education Week',
        description:
            'Education Week предоставляет актуальные новости и анализ в сфере образования, включая ресурсы для учителей истории.',
        imgSrc: `${IMG_PATH}/edweek.org.jpg`,
        tags: ['новости', 'анализ', 'ресурсы', 'учители истории'],
    },
    {
        id: 89,
        url: 'https://www.teacherspayteachers.com/',
        title: 'Teachers Pay Teachers',
        description:
            'Платформа Teachers Pay Teachers предлагает учебные материалы, созданные учителями, включая ресурсы для преподавания истории.',
        imgSrc: `${IMG_PATH}/teacherspayteachers.com.jpg`,
        tags: ['учебные материалы', 'создание ресурсов', 'преподавание истории'],
    },
    {
        id: 90,
        url: 'https://www.edutopia.org/',
        title: 'Edutopia',
        description:
            'Edutopia предоставляет образовательные ресурсы, включая методы преподавания истории, которые могут быть полезны учителям.',
        imgSrc: `${IMG_PATH}/edutopia.org.jpg`,
        tags: ['образовательные ресурсы', 'методы преподавания', 'история'],
    },
    {
        id: 91,
        url: 'https://www.nea.org/',
        title: 'National Education Association',
        description:
            'NEA предлагает образовательные ресурсы, включая материалы для преподавания истории, доступные для членов организации.',
        imgSrc: `${IMG_PATH}/nea.org.jpg`,
        tags: ['образовательные ресурсы', 'материалы', 'преподавание истории'],
    },
    {
        id: 92,
        url: 'https://www.aft.org/',
        title: 'American Federation of Teachers',
        description:
            'АФТ предоставляет ресурсы для учителей, включая материалы для преподавания истории, которые могут быть полезны учителям.',
        imgSrc: `${IMG_PATH}/aft.org.jpg`,
        tags: ['ресурсы', 'материалы', 'преподавание истории'],
    },
    {
        id: 93,
        url: 'https://www.naesp.org/',
        title: 'National Association of Elementary School Principals',
        description:
            'NAESP предлагает ресурсы для начальных школ, включая методы преподавания истории, которые могут быть полезны учителям.',
        imgSrc: `${IMG_PATH}/naesp.org.jpg`,
        tags: ['начальные школы', 'методы преподавания', 'история'],
    },
    {
        id: 94,
        url: 'https://www.louvre.fr/en',
        title: 'Лувр',
        description:
            'Музей Лувр - один из самых известных музеев мира, содержащий огромное количество произведений искусства и исторических артефактов.',
        imgSrc: `${IMG_PATH}/louvre.fr.jpg`,
        tags: ['музей', 'искусство', 'история'],
    },
    {
        id: 95,
        url: 'https://www.metmuseum.org/',
        title: 'Нью-Йоркский метрополитен-музей',
        description:
            'Один из крупнейших художественных музеев мира, содержащий коллекцию из более чем двух миллионов предметов искусства.',
        imgSrc: `${IMG_PATH}/metmuseum.org.jpg`,
        tags: ['музей', 'искусство', 'история'],
    },
    {
        id: 96,
        url: 'https://www.nationalgallery.org.uk/',
        title: 'Национальная галерея',
        description:
            'Британский музей искусства, содержащий более 2,300 картин из собрания Национальной галереи Великобритании.',
        imgSrc: `${IMG_PATH}/nationalgallery.org.uk.jpg`,
        tags: ['музей', 'искусство', 'история'],
    },
    {
        id: 97,
        url: 'https://www.si.edu/',
        title: 'Смитсоновский институт',
        description:
            'Культурный и образовательный центр в Вашингтоне, содержащий множество музеев, включая Национальный музей американской истории.',
        imgSrc: `${IMG_PATH}/si.edu.jpg`,
        tags: ['музей', 'научные учреждения', 'образование'],
    },
    {
        id: 98,
        url: 'https://muse.jhu.edu/',
        title: 'Project MUSE',
        description:
            'Библиотека цифровых ресурсов в области истории, социальных наук и гуманитарных исследований.',
        imgSrc: `${IMG_PATH}/muse.jhu.edu.jpg`,
        tags: ['библиотека', 'исторические ресурсы', 'образование'],
    },
    {
        id: 99,
        url: 'https://openstax.org/',
        title: 'OpenStax',
        description:
            'Проект по созданию бесплатных учебников для высших учебных заведений, включая курсы по истории.',
        imgSrc: `${IMG_PATH}/openstax.org.jpg`,
        tags: ['образование', 'учебники', 'история'],
    },
    {
        id: 100,
        url: 'https://www.colonialwilliamsburg.org/',
        title: 'Вильямсбург в колониальные времена',
        description: 'Исторический парк и музей, воссоздающий жизнь в колониальной Америке.',
        imgSrc: `${IMG_PATH}/colonialwilliamsburg.org.jpg`,
        tags: ['исторический парк', 'колонии', 'американская история'],
    },
    {
        id: 101,
        url: 'https://www.facinghistory.org/',
        title: 'Общество изучения истории',
        description:
            'Неправительственная организация, занимающаяся образовательной программой по изучению истории и ее влияния на современный мир.',
        imgSrc: `${IMG_PATH}/facinghistory.org.jpg`,
        tags: ['образование', 'мышление', 'гуманитарные науки'],
    },
    {
        id: 102,
        url: 'https://www.historians.org/',
        title: 'Американское историческое общество',
        description:
            'Профессиональная организация историков США, предоставляющая ресурсы для учителей и студентов.',
        imgSrc: `${IMG_PATH}/historians.org.jpg`,
        tags: ['профессиональное сообщество', 'исторические ресурсы', 'образование'],
    },
    {
        id: 103,
        url: 'https://networks.h-net.org/',
        title: 'H-Net: Humanities & Social Sciences Online',
        description:
            'Интернет-сеть академических сетей по различным областям гуманитарных и социальных наук.',
        imgSrc: `${IMG_PATH}/networks.h-net.org.jpg`,
        tags: ['академическая сеть', 'гуманитарные науки', 'социальные науки'],
    },
    {
        id: 104,
        url: 'https://www.archnet.org/',
        title: 'Архнет',
        description:
            'Глобальная онлайн-библиотека археологических ресурсов, содержащая информацию о раскопках, музеях и культурах.',
        imgSrc: `${IMG_PATH}/archnet.org.jpg`,
        tags: ['археология', 'исторические ресурсы', 'образование'],
    },
    {
        id: 105,
        url: 'https://www.jstor.org/',
        title: 'JSTOR',
        description:
            'Библиотека цифровых ресурсов в области истории, социальных наук и гуманитарных исследований.',
        imgSrc: `${IMG_PATH}/jstor.org.jpg`,
        tags: ['библиотека', 'исторические ресурсы', 'образование'],
    },
    {
        id: 106,
        url: 'https://www.khanacademy.org/',
        title: 'Khan Academy',
        description:
            'Некоммерческая организация, предоставляющая бесплатное образование по различным предметам, включая историю.',
        imgSrc: `${IMG_PATH}/khanacademy.org.jpg`,
        tags: ['образование', 'ресурс', 'история'],
    },
    {
        id: 107,
        url: 'https://earth.google.com/',
        title: 'Google Earth',
        description:
            'Виртуальная глобусная система, позволяющая исследовать географические объекты на Земле в реальном времени.',
        imgSrc: `${IMG_PATH}/earth.google.com.jpg`,
        tags: ['география', 'история', 'виртуальные экскурсии'],
    },
    {
        id: 108,
        url: 'https://www.dart-europe.eu/',
        title: 'DART-Europe E-theses Portal',
        description:
            'Портал, предоставляющий доступ к электронным диссертациям европейских университетов, что может быть полезно для исторических исследований.',
        imgSrc: `${IMG_PATH}/dart-europe.eu.jpg`,
        tags: ['исследования', 'электронные диссертации', 'образовательные ресурсы'],
    },
    {
        id: 109,
        url: 'https://library-archives.canada.ca/eng',
        title: 'Library and Archives Canada',
        description:
            'Национальный архив Канады, содержащий богатые исторические документы и ресурсы для изучения истории Канады.',
        imgSrc: `${IMG_PATH}/library-archives.canada.ca.jpg`,
        tags: ['исторические документы', 'архив', 'история канады'],
    },
    {
        id: 110,
        url: 'https://ndltd.org/',
        title: 'Networked Digital Library of Theses and Dissertations',
        description:
            'Глобальная платформа для доступа к электронным диссертациям и тезисам, которые могут быть полезны для исторических исследований.',
        imgSrc: `${IMG_PATH}/ndltd.org.jpg`,
        tags: ['исследования', 'электронные диссертации', 'международные ресурсы'],
    },
    {
        id: 111,
        url: 'https://www.uffizi.it/en',
        title: 'Galleria degli Uffizi',
        description:
            'Видная галерея искусства в Флоренции, содержащая значительную коллекцию произведений итальянского Возрождения.',
        imgSrc: `${IMG_PATH}/uffizi.it.jpg`,
        tags: ['искусство возрождения', 'историческое наследие', 'культурное наследие италии'],
    },
    {
        id: 112,
        url: 'https://www.moma.org/',
        title: 'The Museum of Modern Art',
        description:
            'Модернистский музей современного и современного искусства в Нью-Йорке, предоставляющий доступ к богатой коллекции художественных работ.',
        imgSrc: `${IMG_PATH}/moma.org.jpg`,
        tags: ['современное искусство', 'история искусства', 'культурные центры'],
    },
    {
        id: 113,
        url: 'https://www.tnm.jp/?lang=en',
        title: 'Tokyo National Museum',
        description:
            'Национальный музей Токио, содержащий богатые коллекции японской истории и культуры.',
        imgSrc: `${IMG_PATH}/tnm.jp.jpg`,
        tags: ['япония', 'история', 'музей', 'культура'],
    },
    {
        id: 114,
        url: 'https://www.museodelprado.es/',
        title: 'Museo del Prado',
        description:
            'Престижный испанский музей, известный своей огромной коллекцией европейских художественных произведений, особенно работы Гoya и Velázquez.',
        imgSrc: `${IMG_PATH}/museodelprado.es.jpg`,
        tags: ['европейское искусство', 'испанская культура', 'историческое наследие испании'],
    },
    {
        id: 115,
        url: 'https://www.vangoghmuseum.nl/en',
        title: 'Van Gogh Museum',
        description:
            'Музей, посвященный жизни и творчеству Винсента ван Гога, предоставляющий глубокий погружение в мир этого знаменитого художника.',
        imgSrc: `${IMG_PATH}/vangoghmuseum.nl.jpg`,
        tags: ['ван гог', 'художественные музеи', 'история искусства'],
    },
    {
        id: 116,
        url: 'https://www.nationalgeographic.org/',
        title: 'National Geographic',
        description:
            'Известный журнал и организация, предоставляющая широкий спектр ресурсов по истории, географии и культуре.',
        imgSrc: `${IMG_PATH}/nationalgeographic.org.jpg`,
        tags: ['география', 'история', 'научные исследования', 'образовательные ресурсы'],
    },
    {
        id: 117,
        url: 'https://www.historypin.org/en/',
        title: 'HistoryPin',
        description:
            'Исторический проект HistoryPin позволяет пользователям добавлять геолокационные маркеры к историческим фотографиям и видео. Это отличный способ сделать уроки истории более интерактивными и привязать их к конкретным местам.',
        imgSrc: `${IMG_PATH}/historypin.org.jpg`,
        tags: ['геолокация', 'исторические фото', 'интерактивные уроки'],
    },
    {
        id: 118,
        url: 'https://padlet.com/',
        title: 'Padlet',
        description:
            'Padlet - это виртуальная доска для совместной работы и создания учебных материалов. Учителя могут использовать Padlet для создания интерактивных досок с историческими изображениями, текстами и ссылками.',
        imgSrc: `${IMG_PATH}/padlet.com.jpg`,
        tags: ['совместная работа', 'виртуальная доска', 'исторические ресурсы'],
    },
    {
        id: 119,
        url: 'https://royallib.com/',
        title: 'Royal Library',
        description: 'Библиотека с большим выбором учебников и учебных пособий',
        imgSrc: `${IMG_PATH}/royallib.com.jpg`,
        tags: ['учебники', 'пособия', 'библиотека'],
    },
    {
        id: 120,
        url: 'https://urait.ru/',
        title: 'Урайт',
        description: 'Портал для учителей и студентов с учебными материалами',
        imgSrc: `${IMG_PATH}/urait.ru.jpg`,
        tags: ['учебные материалы', 'ресурсы для учителей', 'для студентов'],
    },
    {
        id: 121,
        url: 'https://morguefile.com/',
        title: 'Morguefile',
        description: 'База изображений для учебных целей',
        imgSrc: `${IMG_PATH}/morguefile.com.jpg`,
        tags: ['образы', 'иллюстрации', 'для учебы'],
    },
    {
        id: 122,
        url: 'https://www.publishersglobal.com/',
        title: 'Publishers Global',
        description: 'Портал для опубликователей и переводчиков учебников',
        imgSrc: `${IMG_PATH}/publishersglobal.com.jpg`,
        tags: ['публикация', 'перевод', 'учебники'],
    },
    {
        id: 123,
        url: 'https://gallerix.ru/',
        title: 'Gallerix',
        description: 'База изображений для учебных целей',
        imgSrc: `${IMG_PATH}/gallerix.ru.jpg`,
        tags: ['образы', 'иллюстрации', 'для учебы'],
    },
    {
        id: 124,
        url: 'https://stamina-online.com',
        title: 'Stamina Online',
        description: 'Портал с ресурсами для учителей и студентов',
        imgSrc: `${IMG_PATH}/stamina-online.com.jpg`,
        tags: ['ресурсы', 'для учителей', 'для студентов'],
    },
    {
        id: 125,
        url: 'https://www.reverso.net',
        title: 'Reverso',
        description: 'Сервис перевода и проверки текста',
        imgSrc: `${IMG_PATH}/reverso.net.jpg`,
        tags: ['перевод', 'проверка текста'],
    },
    {
        id: 126,
        url: 'https://www.onlinecorrection.com/',
        title: 'Online Correction',
        description: 'Инструмент проверки текста на русском языке',
        imgSrc: `${IMG_PATH}/onlinecorrection.com.jpg`,
        tags: ['проверка текста', 'русский язык'],
    },
    {
        id: 127,
        url: 'https://linguix.com/grammar-check',
        title: 'Linguix Grammar Check',
        description: 'Инструмент проверки грамматики текста',
        imgSrc: `${IMG_PATH}/linguix.com.jpg`,
        tags: ['проверка грамматики', 'лингвистика'],
    },
    {
        id: 128,
        url: 'https://text.ru/spelling',
        title: 'Text.ru Spelling',
        description: 'Инструмент проверки орфографии текста',
        imgSrc: `${IMG_PATH}/text.ru.jpg`,
        tags: ['проверка орфографии', 'спеллоувер'],
    },
    {
        id: 129,
        url: 'https://arthive.com/',
        title: 'Arthive',
        description: 'Портал с ресурсами для художников и учителей рисования',
        imgSrc: `${IMG_PATH}/arthive.com.jpg`,
        tags: ['рисование', 'художество', 'ресурсы для учителей'],
    },
];

export const tags = Array.from(
    new Set(items.reduce<Array<string>>((a, c) => [...a, ...c.tags], new Array()))
).sort();
