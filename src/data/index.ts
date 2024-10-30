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
        description:
            'Одна из крупнейших библиотек мира, предлагающая доступ к более чем 170 миллионам объектов, включая редкие книги, манускрипты и архивные материалы.',
        imgSrc: `${IMG_PATH}/bl.uk.jpg`,
        tags: ['библиотека', 'лондон', 'архивы'],
    },
    {
        id: 2,
        url: 'https://www.loc.gov/',
        title: 'Библиотека Конгресса',
        description:
            'Вторая по величине библиотека мира, хранящая более 170 миллионов единиц информации, включая книги, записи, фотографии и карты.',
        imgSrc: `${IMG_PATH}/loc.gov.jpg`,
        tags: ['библиотека', 'вашингтон', 'ресурсы'],
    },
    {
        id: 3,
        url: 'https://www.dnb.de/',
        title: 'Немецкая национальная библиотека',
        description:
            'Крупнейшая библиотека Германии, осуществляющая сбор и хранение всех публикаций, издаваемых в стране.',
        imgSrc: `${IMG_PATH}/dnb.de.jpg`,
        tags: ['библиотека', 'франкфурт', 'публикации'],
    },
    {
        id: 4,
        url: 'https://www.ndl.go.jp/en/',
        title: 'Национальная парламентская библиотека Японии',
        description:
            'Крупнейшая библиотека Японии, обеспечивающая доступ к обширной коллекции японских и международных материалов.',
        imgSrc: `${IMG_PATH}/ndl.go.jp.jpg`,
        tags: ['библиотека', 'токио', 'ресурсы'],
    },
    {
        id: 5,
        url: 'https://kb.dk/',
        title: 'Королевская библиотека Дании',
        description:
            'Главная библиотека Дании, предлагающая обширные коллекции, включая манускрипты, книги и цифровые ресурсы.',
        imgSrc: `${IMG_PATH}/kb.dk.jpg`,
        tags: ['библиотека', 'копенгаген', 'коллекции'],
    },
    {
        id: 6,
        url: 'https://www.bnf.fr/',
        title: 'Национальная библиотека Франции',
        description:
            'Крупнейшая библиотека Франции с богатейшими коллекциями книг, карт, манускриптов и цифровых материалов.',
        imgSrc: `${IMG_PATH}/bnf.fr.jpg`,
        tags: ['библиотека', 'париж', 'манускрипты'],
    },
    {
        id: 7,
        url: 'https://www.bne.es/',
        title: 'Национальная библиотека Испании',
        description:
            'Главная библиотека Испании, собирающая и хранящая все испанские публикации, а также международные материалы.',
        imgSrc: `${IMG_PATH}/bne.es.jpg`,
        tags: ['библиотека', 'мадрид', 'публикации'],
    },
    {
        id: 8,
        url: 'https://www.rsl.ru/',
        title: 'Российская государственная библиотека',
        description:
            'Третья по величине библиотека мира, обладающая обширными коллекциями книг и архивов, представляющих историю России.',
        imgSrc: `${IMG_PATH}/rsl.ru.jpg`,
        tags: ['библиотека', 'санкт-Петербург', 'история'],
    },
    {
        id: 9,
        url: 'https://www.nlr.ru/',
        title: 'Российская национальная библиотека',
        description:
            'Наиболее крупная библиотека Санкт-Петербурга, хранящая уникальные исторические и культурные материалы.',
        imgSrc: `${IMG_PATH}/nlr.ru.jpg`,
        tags: ['библиотека', 'санкт-Петербург', 'культура'],
    },
    {
        id: 10,
        url: 'https://docs.historyrussia.org/',
        title: 'Российская электронная библиотека исторических документов',
        description:
            'Проект, создающий обширную электронную библиотеку исторических документов с возможностью доступа к материалам, опубликованным в России с 1991 года.',
        imgSrc: `${IMG_PATH}/docs.historyrussia.org.jpg`,
        tags: ['библиотека', 'история', 'документы'],
    },
    {
        id: 11,
        url: 'https://archive.org/',
        title: 'Интернет-архив',
        description:
            'Некоммерческая организация, создающая цифровую библиотеку интернет-сайтов и культурных артефактов, доступную для широкой аудитории.',
        imgSrc: `${IMG_PATH}/archive.org.jpg`,
        tags: ['библиотека', 'ресурсы', 'архивы'],
    },
    {
        id: 12,
        url: 'https://mythopedia.com/',
        title: 'Мифопедия',
        description:
            'Обширный мифологический словарь, предлагающий информацию о мифах и легендах различных культур и народов.',
        imgSrc: `${IMG_PATH}/mythopedia.com.jpg`,
        tags: ['мифология', 'культуры', 'легенды'],
    },
    {
        id: 13,
        url: 'https://www.britannica.com/',
        title: 'Британника',
        description:
            'Официальный интернет-ресурс Британской энциклопедии, предоставляющий обширную информацию по различным темам.',
        imgSrc: `${IMG_PATH}/britannica.com.jpg`,
        tags: ['энциклопедия', 'знания', 'образование'],
    },
    {
        id: 14,
        url: 'https://whc.unesco.org/',
        title: 'ЮНЕСКО Всемирное наследие',
        description:
            'Официальный сайт программы ЮНЕСКО "Всемирное наследие", предлагающий информацию о значимых культурных и природных объектах.',
        imgSrc: `${IMG_PATH}/whc.unesco.org.jpg`,
        tags: ['наследие', 'культура', 'сохранение'],
    },
    {
        id: 15,
        url: 'https://artsandculture.google.com/',
        title: 'Google Arts & Culture',
        description:
            'Онлайн-платформа Google, обеспечивающая доступ к художественным музеям и галереям, а также к культурному наследию со всего мира.',
        imgSrc: `${IMG_PATH}/artsandculture.google.com.jpg`,
        tags: ['искусство', 'музеи', 'культура'],
    },
    {
        id: 16,
        url: 'https://www.artsteps.com/',
        title: 'ArtSteps',
        description:
            'Портал с подробными инструкциями по созданию искусства и рисованию, подходящий как для начинающих, так и для опытных художников.',
        imgSrc: `${IMG_PATH}/artsteps.com.jpg`,
        tags: ['искусство', 'инструкции', 'творчество'],
    },
    {
        id: 17,
        url: 'https://www.gutenberg.org/',
        title: 'Project Gutenberg',
        description:
            'Цифровая библиотека, основанная на принципе свободного распространения, содержащая тысячи классических литературных произведений.',
        imgSrc: `${IMG_PATH}/gutenberg.org.jpg`,
        tags: ['книги', 'литература'],
    },
    {
        id: 18,
        url: 'https://centurypast.org/',
        title: 'Century Past',
        description:
            'Портал, посвященный истории XX века, предлагающий информацию о ключевых событиях, людях и культурных явлениях.',
        imgSrc: `${IMG_PATH}/centurypast.org.jpg`,
        tags: ['история', 'XX век', 'события'],
    },
    {
        id: 19,
        url: 'https://www.tldraw.com/',
        title: 'TLDRAW',
        description:
            'Инструмент для создания диаграмм и схем, позволяющий легко рисовать и редактировать графические представления различных идей.',
        imgSrc: `${IMG_PATH}/tldraw.com.jpg`,
        tags: ['графика', 'диаграммы', 'инструмент'],
    },
    {
        id: 20,
        url: 'https://geoma.space/ru',
        title: 'Geoma Space',
        description:
            'Портал, предоставляющий географическую информацию, карты и инструменты для изучения географии и геологии.',
        imgSrc: `${IMG_PATH}/geoma.space.jpg`,
        tags: ['география', 'карты', 'изучение'],
    },
    {
        id: 21,
        url: 'https://excalidraw.com/',
        title: 'Excalidraw',
        description:
            'Интуитивно понятный инструмент для создания диаграмм и схем, позволяющий легко рисовать и редактировать графические представления различных идей.',
        imgSrc: `${IMG_PATH}/excalidraw.com.jpg`,
        tags: ['графика', 'диаграммы', 'инструмент'],
    },
    {
        id: 22,
        url: 'https://okso.app/',
        title: 'OKSO',
        description:
            'Портал с образовательными ресурсами, включая учебники, тесты и дополнительные материалы для самостоятельного обучения.',
        imgSrc: `${IMG_PATH}/okso.app.jpg`,
        tags: ['учебники', 'ресурсы', 'тесты'],
    },
    {
        id: 23,
        url: 'https://sci-hub.41610.org/sci-hub-mirrors',
        title: 'Sci-Hub',
        description:
            'Сайт, предоставляющий бесплатный доступ к научным статьям и исследованиям, что позволяет обойти платные подписки и авторские права.',
        imgSrc: `${IMG_PATH}/sci-hub.41610.org.jpg`,
        tags: ['наука', 'статьи', 'доступ'],
    },
    {
        id: 24,
        url: 'https://runivers.ru/',
        title: 'Руниверс',
        description:
            'Портал, предлагающий доступ к учебным материалам, включая учебники и методические рекомендации для студентов вузов.',
        imgSrc: `${IMG_PATH}/runivers.ru.jpg`,
        tags: ['учебные материалы', 'студенты', 'ресурсы'],
    },
    {
        id: 25,
        url: 'https://www.mykrita.ru/',
        title: 'Krita',
        description:
            'Сообщество пользователей программы Krita, предлагающее советы, тренинги и обсуждения для художников и графиков.',
        imgSrc: `${IMG_PATH}/mykrita.ru.jpg`,
        tags: ['рисование', 'графика', 'сообщество'],
    },
    {
        id: 26,
        url: 'http://gutenberg.net.au/',
        title: 'Project Gutenberg Australia',
        description:
            'Библиотека цифровых книг с более чем 33 000 свободных электронных книг, включая исторические тексты и литературу.',
        imgSrc: `${IMG_PATH}/gutenberg.net.au.jpg`,
        tags: ['цифровая библиотека', 'литература'],
    },
    {
        id: 27,
        url: 'http://gutenberg.ca/index.html',
        title: 'Project Gutenberg Canada',
        description:
            'Канадская секция проекта Gutenberg, предоставляющая доступ к тысячам текстов, как исторических, так и современных.',
        imgSrc: `${IMG_PATH}/gutenberg.ca.jpg`,
        tags: ['цифровая библиотека', 'канада', 'литература'],
    },
    {
        id: 28,
        url: 'https://runeberg.org/',
        title: 'Runeberg',
        description:
            'Финская цифровая библиотека, содержащая исторические и литературные тексты на финском языке, доступные для бесплатного чтения.',
        imgSrc: `${IMG_PATH}/runeberg.org.jpg`,
        tags: ['история', 'финский язык', 'литература'],
    },
    {
        id: 29,
        url: 'https://mediahistoryproject.org/',
        title: 'Media History Project',
        description:
            'Интерактивный портал, посвященный истории медиа и коммуникаций, включая радио, телевидение и интернет, с полезными ресурсами и исследованиями.',
        imgSrc: `${IMG_PATH}/mediahistoryproject.org.jpg`,
        tags: ['медиа', 'история', 'коммуникации'],
    },
    {
        id: 30,
        url: 'https://repository.duke.edu/',
        title: 'Duke University Digital Collections',
        description:
            'Цифровой архив Дьюка, предлагающий широкий спектр исторических материалов, включая рукописи, фотографии и документы для исследователей и студентов.',
        imgSrc: `${IMG_PATH}/repository.duke.edu.jpg`,
        tags: ['цифровая библиотека', 'история', 'ресурсы'],
    },
    {
        id: 31,
        url: 'https://www.earlymoderntexts.com/',
        title: 'Early Modern Texts',
        description:
            'Ресурс, предлагающий бесплатно скачиваемые тексты раннего нового времени, включая важные исторические труды и документы.',
        imgSrc: `${IMG_PATH}/earlymoderntexts.com.jpg`,
        tags: ['история', 'тексты', 'архив'],
    },
    {
        id: 32,
        url: 'https://www.worldhistory.org/',
        title: 'World History Encyclopedia',
        description:
            'Веб-сайт с краткими статьями по различным историческим темам, охватывающий события из разных частей мира.',
        imgSrc: `${IMG_PATH}/worldhistory.org.jpg`,
        tags: ['история', 'энциклопедия', 'статьи'],
    },
    {
        id: 33,
        url: 'https://www.livius.org/',
        title: 'Livius.org',
        description:
            'Ресурс, предоставляющий информацию об античной истории, включая биографии исторических личностей и географические данные.',
        imgSrc: `${IMG_PATH}/livius.org.jpg`,
        tags: ['античность', 'история', 'биографии'],
    },
    {
        id: 34,
        url: 'https://quod.lib.umich.edu/lib/colllist/',
        title: 'University of Michigan Library Digital Collections',
        description:
            'Цифровой архив Университета Мичигана с разнообразными коллекциями исторических материалов и документов.',
        imgSrc: `${IMG_PATH}/quod.lib.umich.edu.jpg`,
        tags: ['ресурсы', 'история', 'архив'],
    },
    {
        id: 35,
        url: 'http://www.perseus.tufts.edu/hopper/',
        title: 'Perseus Digital Library',
        description:
            'Цифровая библиотека, предлагающая доступ к античным текстам, изображениям и картам для исследователей.',
        imgSrc: `${IMG_PATH}/perseus.tufts.edu.jpg`,
        tags: ['античность', 'история', 'тексты'],
    },
    {
        id: 36,
        url: 'https://biblior.net/',
        title: 'Biblior.net',
        description:
            'Портал, предоставляющий доступ к различным цифровым библиотекам и архивам с историческими материалами.',
        imgSrc: `${IMG_PATH}/biblior.net.jpg`,
        tags: ['история', 'ресурсы', 'архивы'],
    },
    {
        id: 37,
        url: 'http://www.eyewitnesstohistory.com/index.html',
        title: 'Eyewitness to History',
        description:
            'Сайт с первоисточниками и личными рассказами свидетелей важных исторических событий.',
        imgSrc: `${IMG_PATH}/eyewitnesstohistory.com.jpg`,
        tags: ['первоисточники', 'история', 'рассказы'],
    },
    {
        id: 38,
        url: 'https://celt.ucc.ie/',
        title: 'CELT Project',
        description:
            'Интерактивный ресурс для анализа текстов и корпусная база данных для изучения английского языка.',
        imgSrc: `${IMG_PATH}/celt.ucc.ie.jpg`,
        tags: ['лингвистика', 'тексты', 'образование'],
    },
    {
        id: 39,
        url: 'https://siarchives.si.edu/',
        title: 'Smithsonian Institution Archives',
        description:
            'Архивы и документы Национального музея американской истории с информацией о культуре США.',
        imgSrc: `${IMG_PATH}/siarchives.si.edu.jpg`,
        tags: ['архив', 'культура', 'история'],
    },
    {
        id: 40,
        url: 'https://www.archives.gov/',
        title: 'National Archives',
        description:
            'Официальный архив США, предоставляющий доступ к ключевым историческим документам и ресурсам.',
        imgSrc: `${IMG_PATH}/archives.gov.jpg`,
        tags: ['государственный архив', 'документы', 'история'],
    },
    {
        id: 41,
        url: 'https://www.europeana.eu/en',
        title: 'Europeana',
        description:
            'Европейская цифровая библиотека с коллекциями музеев, библиотек и архивов из разных стран Европы.',
        imgSrc: `${IMG_PATH}/europeana.eu.jpg`,
        tags: ['коллекции', 'архивы', 'музеи'],
    },
    {
        id: 42,
        url: 'https://www.nationalarchives.gov.uk/',
        title: 'The National Archives UK',
        description:
            'Британский национальный архив, содержащий значимые исторические документы Великобритании.',
        imgSrc: `${IMG_PATH}/nationalarchives.gov.uk.jpg`,
        tags: ['архив', 'история', 'документы'],
    },
    {
        id: 43,
        url: 'https://www.jewishvirtuallibrary.org/',
        title: 'Jewish Virtual Library',
        description:
            'Цифровая библиотека, предоставляющая информацию об истории и культуре еврейского народа.',
        imgSrc: `${IMG_PATH}/jewishvirtuallibrary.org.jpg`,
        tags: ['еврейская история', 'культура', 'ресурсы'],
    },
    {
        id: 44,
        url: 'https://www.themorgan.org/music',
        title: 'The Morgan Library & Museum',
        description: 'Музей в Нью-Йорке с редкими книгами, рукописями и произведениями искусства.',
        imgSrc: `${IMG_PATH}/themorgan.org.jpg`,
        tags: ['искусство', 'музей', 'культура'],
    },
    {
        id: 45,
        url: 'https://www.diamm.ac.uk/',
        title: 'Digital Medievalist',
        description:
            'Портал для исследователей средневековой истории и культуры с полезными цифровыми ресурсами.',
        imgSrc: `${IMG_PATH}/diamm.ac.uk.jpg`,
        tags: ['средние века', 'история', 'исследования'],
    },
    {
        id: 46,
        url: 'https://deremilitari.org/articles/',
        title: 'Deremilitari.org',
        description:
            'Портал, посвященный военной истории и археологии, с обширными статьями и исследованиями.',
        imgSrc: `${IMG_PATH}/deremilitari.org.jpg`,
        tags: ['военная история', 'археология', 'научные публикации'],
    },
    {
        id: 47,
        url: 'https://byzantinemilitary.blogspot.com/',
        title: 'Byzantine Military Blog',
        description:
            'Блог, который освещает военную историю Византии и раннего средневековья с подробными анализами.',
        imgSrc: `${IMG_PATH}/byzantinemilitary.blogspot.com.jpg`,
        tags: ['византийская история', 'раннее средневековье', 'блоги'],
    },
    {
        id: 48,
        url: 'http://www.cindyvallar.com/pirates.html',
        title: "Cindy Vallar's Pirate Page",
        description:
            'Информационный ресурс о пиратах с статьями и полезными ссылками по этой увлекательной теме.',
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
        tags: ['трансгендерная история', 'ресурсы', 'культурное наследие'],
    },
    {
        id: 50,
        url: 'http://textfiles.com/',
        title: 'Textfiles.com',
        description:
            'Сайт, собирающий разнообразные текстовые файлы, включая исторические документы и первоисточники.',
        imgSrc: `${IMG_PATH}/textfiles.com.jpg`,
        tags: ['исторические документы', 'первоисточники', 'архивы интернета'],
    },
    {
        id: 51,
        url: 'http://www.virtualani.org/',
        title: 'Virtual ANI',
        description:
            'Интерактивные образовательные ресурсы для изучения истории Индии, подходящие для всех уровней.',
        imgSrc: `${IMG_PATH}/virtualani.org.jpg`,
        tags: ['история Индии', 'интерактивное обучение', 'образование'],
    },
    {
        id: 52,
        url: 'https://www.thearchaeologist.org/',
        title: 'The Archaeologist',
        description:
            'Портал с ресурсами по археологии и древней истории, включая исследования и статьи.',
        imgSrc: `${IMG_PATH}/thearchaeologist.org.jpg`,
        tags: ['археология', 'древние цивилизации', 'исследования'],
    },
    {
        id: 53,
        url: 'https://keycombiner.com/desktop/',
        title: 'KeyCombiner',
        description:
            'Инструмент для создания и управления ключами доступа к сайтам, обеспечивающий безопасность данных.',
        imgSrc: `${IMG_PATH}/keycombiner.com.jpg`,
        tags: ['управление паролями', 'безопасность', 'данные'],
    },
    {
        id: 54,
        url: 'https://icons8.com/lunacy',
        title: 'Lunacy',
        description:
            'Программа для создания и редактирования иконок и векторных изображений с мощными функциями.',
        imgSrc: `${IMG_PATH}/icons8.com.jpg`,
        tags: ['создание иконок', 'векторное рисование', 'дизайн'],
    },
    {
        id: 55,
        url: 'https://www.sketch.com/',
        title: 'Sketch',
        description:
            'Платформа для дизайна пользовательских интерфейсов и прототипирования, популярная среди дизайнеров.',
        imgSrc: `${IMG_PATH}/sketch.com.jpg`,
        tags: ['дизайн', 'прототипирование', 'интерфейсы'],
    },
    {
        id: 56,
        url: 'https://telemost.yandex.ru/',
        title: 'Yandex.Telemost',
        description:
            'Интерактивная доска для онлайн-встреч и совещаний, обеспечивающая удобное взаимодействие.',
        imgSrc: `${IMG_PATH}/telemost.yandex.ru.jpg`,
        tags: ['онлайн-совещания', 'коммуникации', 'инструменты'],
    },
    {
        id: 57,
        url: 'https://sboard.online/',
        title: 'SBoard',
        description:
            'Инструмент для создания интерактивных досок, способствующий онлайн-обучению и сотрудничеству.',
        imgSrc: `${IMG_PATH}/sboard.online.jpg`,
        tags: ['интерактивные доски', 'обучение', 'коммуникации', 'инструменты'],
    },
    {
        id: 58,
        url: 'https://witeboard.com/',
        title: 'Witeboard',
        description:
            'Программа для создания интерактивных досок, идеально подходящая для онлайн-коммуникаций.',
        imgSrc: `${IMG_PATH}/witeboard.com.jpg`,
        tags: ['интерактивные доски', 'онлайн-совещания', 'коммуникации', 'коллаборация'],
    },
    {
        id: 59,
        url: 'https://app.ziteboard.com/',
        title: 'Ziteboard',
        description:
            'Платформа для создания интерактивных досок и проведения онлайн-встреч, поддерживающая совместную работу.',
        imgSrc: `${IMG_PATH}/app.ziteboard.com.jpg`,
        tags: ['интерактивные доски', 'онлайн-встречи', 'обучение'],
    },
    {
        id: 60,
        url: 'https://webwhiteboard.com/',
        title: 'WebWhiteboard',
        description:
            'Инструмент для создания интерактивных досок, подходящий для онлайн-коллаборации и обмена идеями.',
        imgSrc: `${IMG_PATH}/webwhiteboard.com.jpg`,
        tags: ['интерактивные доски', 'коллаборация', 'инструменты'],
    },
    {
        id: 61,
        url: 'https://www.drawio.com/',
        title: 'Draw.io',
        description:
            'Инструмент для создания диаграмм и схем, позволяющий визуализировать исторические события и структуры.',
        imgSrc: `${IMG_PATH}/drawio.com.jpg`,
        tags: ['визуализация', 'создание диаграмм', 'презентации'],
    },
    {
        id: 62,
        url: 'https://www.gingersoftware.com/',
        title: 'Ginger Software',
        description:
            'Плагин для проверки орфографии и грамматики, полезный для написания учебных материалов и ответов на вопросы.',
        imgSrc: `${IMG_PATH}/gingersoftware.com.jpg`,
        tags: ['проверка орфографии', 'грамматика', 'письмо'],
    },
    {
        id: 63,
        url: 'https://prowritingaid.com/',
        title: 'ProWritingAid',
        description:
            'Инструмент для анализа текста, который помогает выявить ошибки и улучшить стиль написания.',
        imgSrc: `${IMG_PATH}/prowritingaid.com.jpg`,
        tags: ['проверка орфографии', 'анализ текста', 'улучшение качества', 'письмо'],
    },
    {
        id: 64,
        url: 'https://languagetool.org/',
        title: 'LanguageTool',
        description:
            'Бесплатный инструмент для проверки орфографии и грамматики на различных языках.',
        imgSrc: `${IMG_PATH}/languagetool.org.jpg`,
        tags: ['проверка орфографии', 'грамматика', 'письмо'],
    },
    {
        id: 65,
        url: 'https://orfogrammka.ru/',
        title: 'Orfogrammka',
        description:
            'Инструмент для проверки орфографии русского языка, полезный для учителей истории при проверке работ студентов.',
        imgSrc: `${IMG_PATH}/orfogrammka.ru.jpg`,
        tags: ['проверка орфографии', 'правописание', 'письмо'],
    },
    {
        id: 66,
        url: 'https://glvrd.ru/',
        title: 'GLVRD',
        description: 'Инструмент для проверки текста на наличие плагиата и улучшения его качества.',
        imgSrc: `${IMG_PATH}/glvrd.ru.jpg`,
        tags: ['проверка плагиата', 'улучшение текста', 'письмо'],
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
            'Большая коллекция электронных книг и ресурсов по истории Санкт-Петербурга и региона.',
        imgSrc: `${IMG_PATH}/elib.shpl.ru.jpg`,
        tags: ['библиотека', 'ресурсы', 'книги'],
    },
    {
        id: 69,
        url: 'https://onlinepdfedit.com/',
        title: 'Online PDF Editor',
        description:
            'Инструмент для редактирования и обработки PDF-файлов, полезный для создания учебных материалов.',
        imgSrc: `${IMG_PATH}/onlinepdfedit.com.jpg`,
        tags: ['редактирование pdf', 'обработка документов'],
    },
    {
        id: 70,
        url: 'https://www.wallpaperflare.com/',
        title: 'Wallpaperflare',
        description:
            'База изображений для настольных фонов, полезная для создания атмосферы в классе или оформления презентаций.',
        imgSrc: `${IMG_PATH}/wallpaperflare.com.jpg`,
        tags: ['фоновые изображения', 'декорация класса'],
    },
    {
        id: 71,
        url: 'https://www.flickr.com/',
        title: 'Flickr',
        description:
            'Платформа для хранения и обмена фотографиями, подходящая для поиска исторических изображений.',
        imgSrc: `${IMG_PATH}/flickr.com.jpg`,
        tags: ['фотографии', 'исторические изображения'],
    },
    {
        id: 72,
        url: 'https://education.nationalgeographic.org/',
        title: 'National Geographic Education',
        description:
            'Научно-популярный портал с образовательными ресурсами по истории, географии и многим другим темам.',
        imgSrc: `${IMG_PATH}/education.nationalgeographic.org.jpg`,
        tags: ['научно-популярная литература', 'образование', 'ресурсы для учителей'],
    },
    {
        id: 73,
        url: 'https://maps.lib.utexas.edu/',
        title: 'UT Library Online Maps Collection',
        description:
            'Библиотека Университета Техаса предлагает коллекцию онлайн-карт, включая исторические и современные материалы.',
        imgSrc: `${IMG_PATH}/maps.lib.utexas.edu.jpg`,
        tags: ['исторические карты', 'географические ресурсы', 'библиотечные базы данных'],
    },
    {
        id: 74,
        url: 'https://www.davidrumsey.com/',
        title: 'David Rumsey Map Collection',
        description:
            'Уникальная коллекция исторических карт и географических материалов, охватывающая разные регионы и эпохи.',
        imgSrc: `${IMG_PATH}/davidrumsey.com.jpg`,
        tags: ['исторические карты', 'географические ресурсы', 'архивные документы'],
    },
    {
        id: 75,
        url: 'https://www.oldmapsonline.org/en',
        title: 'Old Maps Online',
        description:
            'Портал, объединяющий множество библиотек и архивов, предоставляющий доступ к большому количеству старых карт.',
        imgSrc: `${IMG_PATH}/oldmapsonline.org.jpg`,
        tags: ['исторические карты', 'географические ресурсы', 'цифровой архив'],
    },
    {
        id: 76,
        url: 'https://dp.la/',
        title: 'Digital Public Library of America',
        description:
            'Цифровая публичная библиотека США предлагает доступ к множеству ресурсов, включая исторические карты и культурные материалы.',
        imgSrc: `${IMG_PATH}/dp.la.jpg`,
        tags: ['библиотека', 'ресурсы', 'история', 'культура'],
    },
    {
        id: 77,
        url: 'https://www.britishmuseum.org',
        title: 'The British Museum',
        description:
            'Британский музей предоставляет доступ к обширной коллекции артефактов и исторических материалов, включая уникальные предметы из разных эпох.',
        imgSrc: `${IMG_PATH}/britishmuseum.org.jpg`,
        tags: ['музей', 'артефакты', 'история', 'культура'],
    },
    {
        id: 78,
        url: 'https://www.getty.edu/',
        title: 'The Getty Museum',
        description:
            'Гетти музей предлагает доступ к коллекции искусства и культурных артефактов, важным для изучения истории.',
        imgSrc: `${IMG_PATH}/getty.edu.jpg`,
        tags: ['музей', 'искусство', 'культура', 'исторические материалы'],
    },
    {
        id: 79,
        url: 'https://senatehouselibrary.libguides.com/az.php',
        title: 'Библиотека Сената США',
        description:
            'Сайт библиотеки Сената США предлагает доступ к историческим документам и архивам, полезным для исследования.',
        imgSrc: `${IMG_PATH}/senatehouselibrary.libguides.com.jpg`,
        tags: ['архив', 'документы', 'история', 'исследования'],
    },
    {
        id: 80,
        url: 'https://library-guides.ucl.ac.uk/az/databases',
        title: 'Университетский колледж Лондона: Библиотека',
        description:
            'Ресурс предоставляет доступ к историческим базам данных и архивам для исследователей и студентов.',
        imgSrc: `${IMG_PATH}/library-guides.ucl.ac.uk.jpg`,
        tags: ['база', 'архив', 'исторические ресурсы'],
    },
    {
        id: 81,
        url: 'https://libguides.cam.ac.uk/home',
        title: 'Кембриджская библиотека: Руководство по использованию',
        description:
            'Сайт предлагает инструкции по использованию различных исторических ресурсов в Кембридже для студентов и исследователей.',
        imgSrc: `${IMG_PATH}/libguides.cam.ac.uk.jpg`,
        tags: ['руководство', 'ресурсы', 'исторические исследования'],
    },
    {
        id: 82,
        url: 'https://www.hathitrust.org/',
        title: 'Хейвардская библиотека',
        description:
            'Ресурс предоставляет доступ к большому количеству исторических книг и документов в цифровом формате.',
        imgSrc: `${IMG_PATH}/hathitrust.org.jpg`,
        tags: ['книги', 'документы', 'ресурсы', 'история'],
    },
    {
        id: 83,
        url: 'https://www.openculture.com/',
        title: 'Open Culture',
        description:
            'Портал, предлагающий бесплатный доступ к учебным ресурсам, включая курсы и лекции по истории и культуре.',
        imgSrc: `${IMG_PATH}/openculture.com.jpg`,
        tags: ['курсы', 'лекции', 'образование', 'история'],
    },
    {
        id: 84,
        url: 'https://www.ap.org/',
        title: 'Associated Press',
        description:
            'Сайт Associated Press содержит архивы исторических новостей и фотографий, полезных для изучения современности и истории.',
        imgSrc: `${IMG_PATH}/ap.org.jpg`,
        tags: ['новости', 'архив', 'фото', 'журналистика'],
    },
    {
        id: 85,
        url: 'https://www.gettyimages.com/',
        title: 'Getty Images',
        description:
            'База изображений Getty предлагает доступ к историческим фотографиям и иллюстрациям для образовательных и исследовательских целей.',
        imgSrc: `${IMG_PATH}/gettyimages.com.jpg`,
        tags: ['фото', 'иллюстрации', 'образование', 'история'],
    },
    {
        id: 86,
        url: 'https://www.smithsonianchannel.com/',
        title: 'Smithsonian Channel',
        description:
            'Канал Smithsonian предлагает документальные фильмы и программы, исследующие важные исторические события и личности.',
        imgSrc: `${IMG_PATH}/smithsonianchannel.com.jpg`,
        tags: ['документалистика', 'фильмы', 'история', 'образование'],
    },
    {
        id: 87,
        url: 'https://www.teachaway.com/',
        title: 'Teach Away',
        description:
            'Портал предлагает образовательные ресурсы, включая учебники и онлайн-курсы для преподавателей истории.',
        imgSrc: `${IMG_PATH}/teachaway.com.jpg`,
        tags: ['ресурсы', 'учебники', 'образование', 'история'],
    },
    {
        id: 88,
        url: 'https://www.edweek.org/',
        title: 'Education Week',
        description:
            'Education Week предоставляет актуальные новости и анализ в сфере образования, включая ресурсы для учителей истории.',
        imgSrc: `${IMG_PATH}/edweek.org.jpg`,
        tags: ['новости', 'анализ', 'образование', 'учительство'],
    },
    {
        id: 89,
        url: 'https://www.teacherspayteachers.com/',
        title: 'Teachers Pay Teachers',
        description:
            'Платформа предлагает учебные материалы, созданные учителями, включая ресурсы для преподавания истории.',
        imgSrc: `${IMG_PATH}/teacherspayteachers.com.jpg`,
        tags: ['материалы', 'ресурсы', 'преподавание', 'учительство'],
    },
    {
        id: 90,
        url: 'https://www.edutopia.org/',
        title: 'Edutopia',
        description:
            'Edutopia предлагает разнообразные образовательные ресурсы и инновационные методы преподавания, полезные для учителей истории.',
        imgSrc: `${IMG_PATH}/edutopia.org.jpg`,
        tags: ['образование', 'методы', 'история', 'учительство'],
    },
    {
        id: 91,
        url: 'https://www.nea.org/',
        title: 'National Education Association',
        description:
            'NEA предоставляет образовательные ресурсы и материалы для преподавания истории, доступные для членов организации.',
        imgSrc: `${IMG_PATH}/nea.org.jpg`,
        tags: ['образование', 'ресурсы', 'преподавание', 'история'],
    },
    {
        id: 92,
        url: 'https://www.aft.org/',
        title: 'American Federation of Teachers',
        description:
            'АФТ предлагает разнообразные ресурсы для учителей, включая материалы и методические рекомендации для преподавания истории.',
        imgSrc: `${IMG_PATH}/aft.org.jpg`,
        tags: ['ресурсы', 'методические материалы', 'преподавание', 'история'],
    },
    {
        id: 93,
        url: 'https://www.naesp.org/',
        title: 'National Association of Elementary School Principals',
        description:
            'NAESP предлагает ресурсы и методы преподавания истории, специально разработанные для начальных школ.',
        imgSrc: `${IMG_PATH}/naesp.org.jpg`,
        tags: ['начальные школы', 'методы', 'преподавание', 'история'],
    },
    {
        id: 94,
        url: 'https://www.louvre.fr/en',
        title: 'Лувр',
        description:
            'Лувр — один из самых известных музеев мира, где хранится огромное количество произведений искусства и исторических артефактов.',
        imgSrc: `${IMG_PATH}/louvre.fr.jpg`,
        tags: ['музей', 'искусство', 'артефакты', 'история'],
    },
    {
        id: 95,
        url: 'https://www.metmuseum.org/',
        title: 'Нью-Йоркский метрополитен-музей',
        description:
            'Один из крупнейших художественных музеев мира, имеющий коллекцию более двух миллионов предметов искусства различных эпох.',
        imgSrc: `${IMG_PATH}/metmuseum.org.jpg`,
        tags: ['музей', 'искусство', 'коллекция', 'история'],
    },
    {
        id: 96,
        url: 'https://www.nationalgallery.org.uk/',
        title: 'Национальная галерея',
        description:
            'Британская галерея искусства, содержащая более 2300 картин из собрания Национальной галереи Великобритании.',
        imgSrc: `${IMG_PATH}/nationalgallery.org.uk.jpg`,
        tags: ['музей', 'искусство', 'коллекция', 'история'],
    },
    {
        id: 97,
        url: 'https://www.si.edu/',
        title: 'Смитсоновский институт',
        description:
            'Культурный и образовательный центр в Вашингтоне, включающий множество музеев, включая Национальный музей американской истории.',
        imgSrc: `${IMG_PATH}/si.edu.jpg`,
        tags: ['музей', 'научные учреждения', 'образование', 'история'],
    },
    {
        id: 98,
        url: 'https://muse.jhu.edu/',
        title: 'Project MUSE',
        description:
            'Библиотека цифровых ресурсов, охватывающая историю, социальные науки и гуманитарные исследования, с акцентом на доступность материалов.',
        imgSrc: `${IMG_PATH}/muse.jhu.edu.jpg`,
        tags: ['библиотека', 'история', 'социальные науки', 'образование'],
    },
    {
        id: 99,
        url: 'https://openstax.org/',
        title: 'OpenStax',
        description:
            'Проект, предлагающий бесплатные учебники для высших учебных заведений, включая курсы по истории и смежным дисциплинам.',
        imgSrc: `${IMG_PATH}/openstax.org.jpg`,
        tags: ['образование', 'учебники', 'история', 'высшее образование'],
    },
    {
        id: 100,
        url: 'https://www.colonialwilliamsburg.org/',
        title: 'Вильямсбург в колониальные времена',
        description:
            'Исторический парк и музей, воссоздающий жизнь в колониальной Америке с акцентом на образование и культурное наследие.',
        imgSrc: `${IMG_PATH}/colonialwilliamsburg.org.jpg`,
        tags: ['исторический парк', 'америка', 'колония', 'история', 'образование'],
    },
    {
        id: 101,
        url: 'https://www.facinghistory.org/',
        title: 'Общество изучения истории',
        description:
            'Неправительственная организация, занимающаяся образовательной программой, изучающей влияние истории на современный мир.',
        imgSrc: `${IMG_PATH}/facinghistory.org.jpg`,
        tags: ['образование', 'история', 'гуманитарные науки', 'мышление'],
    },
    {
        id: 102,
        url: 'https://www.historians.org/',
        title: 'Американское историческое общество',
        description:
            'Профессиональная организация историков США, предоставляющая ресурсы и поддержку для учителей и студентов.',
        imgSrc: `${IMG_PATH}/historians.org.jpg`,
        tags: ['профессиональная организация', 'исторические ресурсы', 'образование', 'поддержка'],
    },
    {
        id: 103,
        url: 'https://networks.h-net.org/',
        title: 'H-Net: Humanities & Social Sciences Online',
        description:
            'Интернет-сеть академических сообществ, посвященная различным областям гуманитарных и социальных наук, включая историю.',
        imgSrc: `${IMG_PATH}/networks.h-net.org.jpg`,
        tags: ['академическая сеть', 'гуманитарные науки', 'социальные науки', 'исследования'],
    },
    {
        id: 104,
        url: 'https://www.archnet.org/',
        title: 'Архнет',
        description:
            'Глобальная онлайн-библиотека археологических ресурсов, предлагающая информацию о раскопках, музеях и культурах.',
        imgSrc: `${IMG_PATH}/archnet.org.jpg`,
        tags: ['археология', 'исторические ресурсы', 'образование', 'исследования'],
    },
    {
        id: 105,
        url: 'https://www.jstor.org/',
        title: 'JSTOR',
        description:
            'Библиотека цифровых ресурсов, предоставляющая доступ к исследованиям в области истории, социальных наук и гуманитарных дисциплин.',
        imgSrc: `${IMG_PATH}/jstor.org.jpg`,
        tags: ['библиотека', 'исторические ресурсы', 'образование', 'исследования'],
    },
    {
        id: 106,
        url: 'https://www.khanacademy.org/',
        title: 'Khan Academy',
        description:
            'Некоммерческая организация, предлагающая бесплатные ресурсы по различным предметам, включая историю, с интерактивными уроками и заданиями.',
        imgSrc: `${IMG_PATH}/khanacademy.org.jpg`,
        tags: ['образование', 'уроки', 'история'],
    },
    {
        id: 107,
        url: 'https://earth.google.com/',
        title: 'Google Earth',
        description:
            'Виртуальная глобусная система, позволяющая исследовать географические объекты и исторические места в реальном времени.',
        imgSrc: `${IMG_PATH}/earth.google.com.jpg`,
        tags: ['география', 'история', 'виртуальные экскурсии'],
    },
    {
        id: 108,
        url: 'https://www.dart-europe.eu/',
        title: 'DART-Europe E-theses Portal',
        description:
            'Портал, предоставляющий доступ к электронным диссертациям европейских университетов, полезный для исторических исследований.',
        imgSrc: `${IMG_PATH}/dart-europe.eu.jpg`,
        tags: ['исследования', 'диссертации', 'академические ресурсы'],
    },
    {
        id: 109,
        url: 'https://library-archives.canada.ca/eng',
        title: 'Library and Archives Canada',
        description:
            'Национальный архив Канады с историческими документами и ресурсами для изучения истории страны.',
        imgSrc: `${IMG_PATH}/library-archives.canada.ca.jpg`,
        tags: ['архив', 'документы', 'история Канады'],
    },
    {
        id: 110,
        url: 'https://ndltd.org/',
        title: 'Networked Digital Library of Theses and Dissertations',
        description:
            'Глобальная платформа для доступа к электронным диссертациям и тезисам, полезная для исследований.',
        imgSrc: `${IMG_PATH}/ndltd.org.jpg`,
        tags: ['диссертации', 'исследования', 'глобальные ресурсы'],
    },
    {
        id: 111,
        url: 'https://www.uffizi.it/en',
        title: 'Galleria degli Uffizi',
        description:
            'Известная галерея в Флоренции с коллекцией произведений итальянского Возрождения и значительным историческим наследием.',
        imgSrc: `${IMG_PATH}/uffizi.it.jpg`,
        tags: ['искусство', 'итальянское Возрождение', 'музей'],
    },
    {
        id: 112,
        url: 'https://www.moma.org/',
        title: 'The Museum of Modern Art',
        description:
            'Музей современного искусства в Нью-Йорке с богатой коллекцией современных художественных произведений.',
        imgSrc: `${IMG_PATH}/moma.org.jpg`,
        tags: ['искусство', 'современное', 'музей'],
    },
    {
        id: 113,
        url: 'https://www.tnm.jp/?lang=en',
        title: 'Tokyo National Museum',
        description:
            'Национальный музей Токио с обширными коллекциями, отражающими японскую историю и культуру.',
        imgSrc: `${IMG_PATH}/tnm.jp.jpg`,
        tags: ['японская культура', 'история', 'музей'],
    },
    {
        id: 114,
        url: 'https://www.museodelprado.es/',
        title: 'Museo del Prado',
        description:
            'Престижный испанский музей с огромной коллекцией европейского искусства, особенно работ Гойи и Веласкеса.',
        imgSrc: `${IMG_PATH}/museodelprado.es.jpg`,
        tags: ['искусство', 'Европа', 'испанское наследие'],
    },
    {
        id: 115,
        url: 'https://www.vangoghmuseum.nl/en',
        title: 'Van Gogh Museum',
        description:
            'Музей, посвященный жизни и творчеству Винсента ван Гога, предлагающий глубокое погружение в его художественное наследие.',
        imgSrc: `${IMG_PATH}/vangoghmuseum.nl.jpg`,
        tags: ['Ван Гог', 'искусство', 'музей'],
    },
    {
        id: 116,
        url: 'https://www.nationalgeographic.org/',
        title: 'National Geographic',
        description:
            'Известная организация, предлагающая ресурсы по истории, географии и культуре через публикации и образовательные программы.',
        imgSrc: `${IMG_PATH}/nationalgeographic.org.jpg`,
        tags: ['география', 'история', 'образование'],
    },
    {
        id: 117,
        url: 'https://www.historypin.org/en/',
        title: 'HistoryPin',
        description:
            'Проект, позволяющий добавлять геолокационные маркеры к историческим фотографиям и видео, делая уроки истории более интерактивными.',
        imgSrc: `${IMG_PATH}/historypin.org.jpg`,
        tags: ['геолокация', 'фотографии', 'интерактивные уроки'],
    },
    {
        id: 118,
        url: 'https://padlet.com/',
        title: 'Padlet',
        description:
            'Виртуальная доска для совместной работы, позволяющая создавать интерактивные учебные материалы с историческими изображениями и текстами.',
        imgSrc: `${IMG_PATH}/padlet.com.jpg`,
        tags: ['совместная работа', 'образование', 'интерактивные ресурсы'],
    },
    {
        id: 119,
        url: 'https://royallib.com/',
        title: 'Royal Library',
        description:
            'Библиотека с большим выбором учебников и учебных пособий по различным предметам, включая историю.',
        imgSrc: `${IMG_PATH}/royallib.com.jpg`,
        tags: ['учебники', 'ресурсы', 'библиотека'],
    },
    {
        id: 120,
        url: 'https://urait.ru/',
        title: 'Урайт',
        description:
            'Портал с учебными материалами для учителей и студентов, предлагающий широкий спектр ресурсов для обучения.',
        imgSrc: `${IMG_PATH}/urait.ru.jpg`,
        tags: ['учебные материалы', 'ресурсы', 'образование', 'платформа', 'для студентов'],
    },
    {
        id: 121,
        url: 'https://morguefile.com/',
        title: 'Morguefile',
        description:
            'База изображений с разнообразными фотографиями, доступными для использования в образовательных и творческих проектах.',
        imgSrc: `${IMG_PATH}/morguefile.com.jpg`,
        tags: ['образы', 'иллюстрации', 'фотографии', 'материалы', 'для учебы'],
    },
    {
        id: 122,
        url: 'https://www.publishersglobal.com/',
        title: 'Publishers Global',
        description:
            'Портал для издателей и переводчиков учебников, помогающий в поиске и сотрудничестве.',
        imgSrc: `${IMG_PATH}/publishersglobal.com.jpg`,
        tags: ['публикация', 'перевод', 'учебники', 'издательства', 'сотрудничество'],
    },
    {
        id: 123,
        url: 'https://gallerix.ru/',
        title: 'Gallerix',
        description:
            'База изображений, предлагающая широкий выбор иллюстраций и фотографий для образовательных целей.',
        imgSrc: `${IMG_PATH}/gallerix.ru.jpg`,
        tags: ['образы', 'иллюстрации', 'для учебы', 'фотографии', 'материалы'],
    },
    {
        id: 124,
        url: 'https://stamina-online.com',
        title: 'Stamina Online',
        description:
            'Портал с ресурсами для учителей и студентов, предлагающий материалы для обучения и разработки уроков.',
        imgSrc: `${IMG_PATH}/stamina-online.com.jpg`,
        tags: ['ресурсы', 'для учителей', 'для студентов', 'материалы', 'платформа'],
    },
    {
        id: 125,
        url: 'https://www.reverso.net',
        title: 'Reverso',
        description:
            'Сервис перевода и проверки текста с возможностями для изучения языка и повышения грамотности.',
        imgSrc: `${IMG_PATH}/reverso.net.jpg`,
        tags: [
            'перевод',
            'проверка текста',
            'языковые ресурсы',
            'грамотность',
            'учебные материалы',
        ],
    },
    {
        id: 126,
        url: 'https://www.onlinecorrection.com/',
        title: 'Online Correction',
        description:
            'Инструмент проверки текста на русском языке с акцентом на исправление ошибок.',
        imgSrc: `${IMG_PATH}/onlinecorrection.com.jpg`,
        tags: ['проверка текста', 'русский язык', 'грамматика', 'орфография', 'инструмент'],
    },
    {
        id: 127,
        url: 'https://linguix.com/grammar-check',
        title: 'Linguix Grammar Check',
        description:
            'Инструмент проверки грамматики текста, помогающий пользователям улучшить навыки письма.',
        imgSrc: `${IMG_PATH}/linguix.com.jpg`,
        tags: ['проверка грамматики', 'лингвистика', 'письмо', 'коррекция', 'инструмент'],
    },
    {
        id: 128,
        url: 'https://text.ru/spelling',
        title: 'Text.ru Spelling',
        description:
            'Инструмент проверки орфографии текста, полезный для студентов и преподавателей.',
        imgSrc: `${IMG_PATH}/text.ru.jpg`,
        tags: ['проверка орфографии', 'письмо', 'учебные материалы', 'инструмент'],
    },
    {
        id: 129,
        url: 'https://arthive.com/',
        title: 'Arthive',
        description:
            'Портал с ресурсами для художников и учителей рисования, предлагающий обучающие материалы и вдохновение.',
        imgSrc: `${IMG_PATH}/arthive.com.jpg`,
        tags: ['рисование', 'художество', 'ресурсы для учителей', 'обучение', 'искусство'],
    },
    {
        id: 130,
        url: 'https://loeildelaphotographie.com/en/',
        title: "Loi d'El Photography",
        description:
            'Ресурс с фотографиями исторических мест и объектов, полезный для создания учебных материалов по истории.',
        imgSrc: `${IMG_PATH}/loeildelaphotographie.com.jpg`,
        tags: [
            'исторические фотографии',
            'архивные изображения',
            'образовательный ресурс',
            'фотографии',
            'история',
        ],
    },
    {
        id: 131,
        url: 'https://blackwhite.pictures/',
        title: 'Black & White Pictures',
        description:
            'Сайт с высококачественными черно-белыми фотографиями исторических и современных объектов, полезный для учебы.',
        imgSrc: `${IMG_PATH}/blackwhite.pictures.jpg`,
        tags: [
            'черно-белые фотографии',
            'исторические изображения',
            'культурный контекст',
            'фотографии',
            'искусство',
        ],
    },
    {
        id: 132,
        url: 'http://www.rareoldprints.com/',
        title: 'Rare Old Prints',
        description:
            'Интернет-магазин, специализирующийся на продаже редких старых печатных материалов, полезных для уроков истории.',
        imgSrc: `${IMG_PATH}/rareoldprints.com.jpg`,
        tags: [
            'старые печатные материалы',
            'исторические источники',
            'образовательный ресурс',
            'коллекции',
            'магазин',
        ],
    },
    {
        id: 133,
        url: 'https://timelessmoon.getarchive.net/',
        title: 'Timeless Moon',
        description:
            'Архив фотографий и изображений с историческими материалами, полезный для создания учебных материалов.',
        imgSrc: `${IMG_PATH}/timelessmoon.getarchive.net.jpg`,
        tags: [
            'исторические изображения',
            'архивные фотографии',
            'образовательный ресурс',
            'фотографии',
            'материалы',
        ],
    },
    {
        id: 134,
        url: 'https://lifephotostore.com/',
        title: 'Life Photo Store',
        description:
            'Портал с широким выбором исторических и современных фотографий для учебных целей.',
        imgSrc: `${IMG_PATH}/lifephotostore.com.jpg`,
        tags: [
            'исторические фотографии',
            'современные изображения',
            'образовательный ресурс',
            'фотографии',
            'коллекции',
        ],
    },
    {
        id: 135,
        url: 'https://prints.sciencesource.com/',
        title: 'Science Source Prints',
        description:
            'База данных научно-технических печатных материалов, включая исторические изображения для уроков истории науки.',
        imgSrc: `${IMG_PATH}/prints.sciencesource.com.jpg`,
        tags: [
            'научно-технические изображения',
            'исторические источники',
            'специализированный ресурс',
            'материалы',
            'образование',
        ],
    },
    {
        id: 136,
        url: 'https://www.faheykleingallery.com/',
        title: 'Fahey Klein Gallery',
        description:
            'Международная галерея современного искусства, представляющая работы известных художников и полезная для изучения современного искусства и его влияния на культуру.',
        imgSrc: `${IMG_PATH}/faheykleingallery.com.jpg`,
        tags: [
            'современное искусство',
            'галерея',
            'культурное наследие',
            'образование',
            'искусство',
        ],
    },
    {
        id: 137,
        url: 'https://www.imago-images.com/',
        title: 'Imago Images',
        description:
            'База данных изображений с широким выбором тематических картинок, полезных для иллюстраций к урокам истории и культуры.',
        imgSrc: `${IMG_PATH}/imago-images.com.jpg`,
        tags: [
            'тематические изображения',
            'иллюстрации',
            'история',
            'культура',
            'образовательный ресурс',
        ],
    },
    {
        id: 138,
        url: 'https://www.awm.gov.au/',
        title: 'Australian War Memorial',
        description:
            'Национальный музей Австралии, посвященный истории войны, с ресурсами для изучения военной истории и ее последствий.',
        imgSrc: `${IMG_PATH}/awm.gov.au.jpg`,
        tags: ['военная история', 'музей', 'образование', 'ресурсы', 'история'],
    },
    {
        id: 139,
        url: 'https://www.iwm.org.uk/',
        title: 'Imperial War Museum',
        description:
            'Британский музей, посвященный истории войны, предлагающий разнообразные ресурсы для изучения военной истории и ее культурного значения.',
        imgSrc: `${IMG_PATH}/iwm.org.uk.jpg`,
        tags: ['военная история', 'музей', 'культура', 'образовательный ресурс', 'история'],
    },
    {
        id: 140,
        url: 'https://www.photoconsortium.net/',
        title: 'Photoconsortium',
        description:
            'Платформа, объединяющая архивы и библиотеки изображений, предлагающая широкий выбор исторических и современных изображений для образовательных целей.',
        imgSrc: `${IMG_PATH}/photoconsortium.net.jpg`,
        tags: [
            'исторические изображения',
            'современные фото',
            'образовательный ресурс',
            'архивы',
            'изображения',
        ],
    },
    {
        id: 141,
        url: 'https://www.knowledgeforus.com/',
        title: 'Knowledge for Us',
        description:
            'Портал с образовательными ресурсами и учебными материалами, полезный для поиска информации для уроков истории и других предметов.',
        imgSrc: `${IMG_PATH}/knowledgeforus.com.jpg`,
        tags: [
            'образовательные ресурсы',
            'учебные материалы',
            'школы онлайн',
            'помощь учителю',
            'информация',
        ],
    },
    {
        id: 142,
        url: 'https://wsmrmuseum.com/',
        title: 'World Trade Organization Museum',
        description:
            'Музей, посвященный истории Всемирной торговой организации, предлагающий ресурсы для изучения экономической истории и международных отношений.',
        imgSrc: `${IMG_PATH}/wsmrmuseum.com.jpg`,
        tags: [
            'экономическая история',
            'международные отношения',
            'музей',
            'образовательный ресурс',
            'история',
        ],
    },
    {
        id: 143,
        url: 'https://www.belfercenter.org/',
        title: 'Belfer Center',
        description:
            'Институт Гарвардского университета, исследующий глобальные проблемы безопасности и развития, предлагая аналитические материалы и ресурсы для углубленного изучения истории и геополитики.',
        imgSrc: `${IMG_PATH}/belfercenter.org.jpg`,
        tags: [
            'глобальные проблемы',
            'геополитика',
            'аналитика',
            'ресурсы',
            'образование',
            'исследования',
        ],
    },
    {
        id: 144,
        url: 'https://www.timetoast.com/',
        title: 'TimeToToast',
        description:
            'Портал для создания интерактивных исторических презентаций, позволяющий учителям создавать интересные учебные материалы для своих учеников.',
        imgSrc: `${IMG_PATH}/timetoast.com.jpg`,
        tags: [
            'временная шкала',
            'интерактивные материалы',
            'ресурс',
            'учебные материалы',
            'презентации',
        ],
    },
    {
        id: 145,
        url: 'https://www.aitutorpro.ca/',
        title: 'АйТьютор Про',
        description:
            'Платформа для создания онлайн-уроков по различным предметам, полезная для учителей и студентов.',
        imgSrc: `${IMG_PATH}/aitutorpro.ca.jpg`,
        tags: ['онлайн-уроки', 'AI', 'платформа', 'образование', 'знания'],
    },
    {
        id: 146,
        url: 'https://modulbot.ru/',
        title: 'МодульБот',
        description:
            'Сервис для автоматизации учебного процесса с использованием ботов, полезный для учителей и студентов.',
        imgSrc: `${IMG_PATH}/modulbot.ru.jpg`,
        tags: ['автоматизация', 'AI', 'боты', 'обучение', 'инструменты', 'ресурсы'],
    },
    {
        id: 147,
        url: 'https://remaker.ai/',
        title: 'Remaker AI',
        description:
            'Инструмент для генерации контента на основе AI-технологий, полезный для создания учебных материалов.',
        imgSrc: `${IMG_PATH}/remaker.ai.jpg`,
        tags: ['AI', 'генерация контента', 'инструменты', 'образовательные технологии', 'ресурсы'],
    },
    {
        id: 148,
        url: 'https://hotshot.co/',
        title: 'Hotshot',
        description:
            'Платформа для создания и управления онлайн-контентом, полезная для учителей и создателей материалов.',
        imgSrc: `${IMG_PATH}/hotshot.co.jpg`,
        tags: ['платформа', 'AI', 'генерация контента', 'инструменты', 'video'],
    },
    {
        id: 149,
        url: 'https://slidesmania.com/',
        title: 'SlidesMania',
        description:
            'Сервис для создания презентаций и слайдов, помогающий учителям создавать визуальные материалы для уроков.',
        imgSrc: `${IMG_PATH}/slidesmania.com.jpg`,
        tags: ['презентаций', 'слайды', 'инструменты', 'учебные материалы', 'визуализация'],
    },
    {
        id: 150,
        url: 'https://www.i2img.com/',
        title: 'I2Img',
        description:
            'Инструмент для конвертации изображений в различные форматы, полезный для подготовки материалов.',
        imgSrc: `${IMG_PATH}/i2img.com.jpg`,
        tags: [
            'конвертация изображений',
            'AI',
            'форматы',
            'инструменты',
            'подготовка материалов',
            'технологии',
        ],
    },
    {
        id: 151,
        url: 'https://airbrush.com/ru',
        title: 'AirBrush',
        description:
            'Программа для редактирования фотографий с использованием AI-технологий, полезная для создания и улучшения визуальных материалов.',
        imgSrc: `${IMG_PATH}/airbrush.com.jpg`,
        tags: ['редактирование фото', 'AI', 'программы', 'визуальные материалы', 'инструменты'],
    },
    {
        id: 152,
        url: 'https://ailist.ru/',
        title: 'AI список',
        description:
            'Список ресурсов и инструментов для работы с искусственным интеллектом, полезный для обучения и исследований.',
        imgSrc: `${IMG_PATH}/ailist.ru.jpg`,
        tags: ['искусственный интеллект', 'AI', 'ресурсы', 'инструменты', 'обучение', 'технологии'],
    },
];

export const tags = Array.from(
    new Set(items.reduce<Array<string>>((a, c) => [...a, ...c.tags], new Array()))
).sort();
