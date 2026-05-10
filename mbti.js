const questions = [
    { q: "شما مرتب دوستان جدیدی پیدا می‌کنید.", dim: "EI", dir: 1 },
    { q: "ایده‌های پیچیده و نو بیشتر از ایده‌های ساده و آسان شما را هیجان‌زده می‌کنند.", dim: "NS", dir: 1 },
    { q: "معمولاً بیشتر توسط آنچه که از نظر عاطفی برایتان قابل درک است متقاعد می‌شوید تا استدلال‌های مبتنی بر حقیقت.", dim: "TF", dir: -1 },
    { q: "فضاهای زندگی و کاری شما تمیز و مرتب هستند.", dim: "JP", dir: 1 },
    { q: "شما اغلب آرام هستید حتی تحت فشار خیلی زیاد.", dim: "AT", dir: 1 },

    { q: "به نظر شما فکر شبکه بندی یا تبلیغ کردن خودتان برای غریبه‌ها بسیار ترسناک است.", dim: "EI", dir: -1 },
    { q: "شما وظایف را به طور موثر اولویت‌بندی و برنامه‌ریزی می‌کنید و اغلب آنها را قبل از موعد مقرر به پایان می‌رسانید.", dim: "JP", dir: 1 },
    { q: "داستان‌ها و عواطف مردم از ارقام و داده‌ها برایتان مهم‌تر هستند.", dim: "TF", dir: -1 },
    { q: "شما دوست دارید از ابزارهای سازماندهی مثل برنامه‌های زمانی و لیست‌ها استفاده کنید.", dim: "JP", dir: 1 },
    { q: "حتی یک اشتباه کوچک می‌تواند باعث شود به توانایی‌های کلی و دانش خود شک کنید.", dim: "AT", dir: -1 },

    { q: "رفتن به سوی شخصی که به نظرتان جالب است و باز کردن سر صحبت با او برای تان راحت است.", dim: "EI", dir: 1 },
    { q: "شما خیلی تمایلی به بحث‌های مربوط به برداشت‌های گوناگون از آثار خلاقانه ندارید.", dim: "NS", dir: -1 },
    { q: "در هنگام تعیین اقدامات، حقایق را به احساسات افراد ترجیح می‌دهید.", dim: "TF", dir: 1 },
    { q: "اغلب بدون این که کلاً برنامه‌ای داشته باشید با جریان روز پیش می‌روید.", dim: "JP", dir: -1 },
    { q: "شما به ندرت در این باره نگران می‌شوید که آیا تاثیر ذهنی خوبی روی افرادی که با آنها ملاقات می‌کنید می‌گذارید یا خیر.", dim: "AT", dir: 1 },

    { q: "شما از شرکت در فعالیت‌های تیمی لذت می‌برید.", dim: "EI", dir: 1 },
    { q: "شما از تجربه کردن رویکردهای جدید و امتحان نشده لذت می‌برید.", dim: "NS", dir: 1 },
    { q: "شما حساس بودن را به کاملاً صادق بودن ترجیح می‌دهید.", dim: "TF", dir: -1 },
    { q: "شما فعالانه در جستجوی تجربیات و حوزه‌های دانش جدید برای کاوش در آنها هستید.", dim: "NS", dir: 1 },
    { q: "شما مستعد نگرانی از این هستید که اوضاع بدتر خواهد شد.", dim: "AT", dir: -1 },

    { q: "شما از سرگرمی‌ها یا فعالیت‌های انفرادی بیشتر از موارد گروهی لذت می‌برید.", dim: "EI", dir: -1 },
    { q: "نمی‌توانید تصور کنید که برای کسب درآمد زندگی داستان‌های تخیلی بنویسید.", dim: "NS", dir: -1 },
    { q: "در تصمیم‌گیری، کارایی را ترجیح می‌دهید حتی اگر به معنی نادیده گرفتن برخی جنبه‌های عاطفی باشد.", dim: "TF", dir: 1 },
    { q: "شما ترجیح می‌دهید قبل از این که به خودتان اجازه استراحت بدهید اول کارهای خود را انجام دهید.", dim: "JP", dir: 1 },
    { q: "در اختلاف‌ها، اثبات حرف خودتان اولویت بیشتری از محافظت از احساسات دیگران دارد.", dim: "TF", dir: 1 },

    { q: "در گردهمآیی‌های اجتماعی، معمولاً اول صبر می‌کنید دیگران خودشان را معرفی کنند.", dim: "EI", dir: -1 },
    { q: "خلق و خوی شما می‌تواند به سرعت تغییر کند.", dim: "AT", dir: -1 },
    { q: "دلایل عاطفی به آسانی نظرتان را عوض نمی‌کنند.", dim: "TF", dir: 1 },
    { q: "شما اغلب کارها را در آخرین لحظه ممکن انجام می‌دهید.", dim: "JP", dir: -1 },
    { q: "شما از بحث در مورد مسائل غامض اخلاقی لذت می‌برید.", dim: "TF", dir: -1 },

    { q: "شما معمولاً ترجیح می‌دهید کنار دیگران باشید تا تنها.", dim: "EI", dir: 1 },
    { q: "وقتی بحث به شدت تئوری می‌شود خسته می‌شوید یا علاقه خود را از دست می‌دهید.", dim: "NS", dir: -1 },
    { q: "در هنگام تضاد حقایق و احساسات، معمولاً حرف دل خود را گوش می‌کنید.", dim: "TF", dir: -1 },
    { q: "حفظ ثبات در دنبال کردن یک برنامه کاری یا مطالعاتی برای شما چالش برانگیز است.", dim: "JP", dir: -1 },
    { q: "شما به ندرت انتخاب‌های خود را زیر سوال می‌برید.", dim: "AT", dir: 1 },

    { q: "دوستان تان شما را سرزنده و برونگرا توصیف می‌کنند.", dim: "EI", dir: 1 },
    { q: "شما به اشکال مختلف بیان خلاقانه مثل نوشتن جذب می‌شوید.", dim: "NS", dir: 1 },
    { q: "شما معمولاً انتخاب‌های خود را بر مبنای حقایق عینی استوار می‌کنید تا تاثیرات عاطفی.", dim: "TF", dir: 1 },
    { q: "شما دوست دارید یک فهرست از کارهای هر روز داشته باشید.", dim: "JP", dir: 1 },
    { q: "شما به ندرت حس نامطمئن بودن می‌کنید.", dim: "AT", dir: 1 },

    { q: "شما از برقراری تماس تلفنی اجتناب می‌کنید.", dim: "EI", dir: -1 },
    { q: "از کاوش در ایده‌ها و نظرات ناآشنا لذت می‌برید.", dim: "NS", dir: 1 },
    { q: "به آسانی می‌توانید با افرادی که تازه ملاقات کرده‌اید ارتباط برقرار کنید.", dim: "EI", dir: 1 },
    { q: "اگر برنامه‌هایتان بهم بخورند، اولویت اول شما برگشتن به مسیر در سریعترین زمان ممکن است.", dim: "JP", dir: 1 },
    { q: "اشتباهاتی که در گذشته‌های دور مرتکب شده‌اید هنوز شما را آزار می‌دهند.", dim: "AT", dir: -1 },

    { q: "شما خیلی تمایل به بحث در مورد این نظریه‌ها ندارید که جهان در آینده چه شکلی خواهد بود.", dim: "NS", dir: -1 },
    { q: "احساسات شما بیشتر از اینکه آنها را کنترل کنید، شما را کنترل می‌کنند.", dim: "AT", dir: -1 },
    { q: "در هنگام تصمیم‌گیری بیشتر بر احساس افرادی که تحت تأثیر قرار می‌گیرند تمرکز می‌کنید تا آنچه که منطقی‌تر یا کاراتر است.", dim: "TF", dir: -1 },
    { q: "سبک کاری فردی شما بیشتر به انفجارهای خودبخودی انرژی نزدیک است تا تلاش‌های سازماندهی شده و مداوم.", dim: "JP", dir: -1 },
    { q: "وقتی کسی ارزش زیادی برای شما قائل است با خود فکر می‌کنید چقدر طول خواهد کشید که از شما ناامید شود.", dim: "AT", dir: -1 },

    { q: "شما شغلی را دوست دارید که بیشتر اوقات نیاز باشد به تنهایی کار کنید.", dim: "EI", dir: -1 },
    { q: "شما باور دارید که فکر کردن به پرسش‌های فلسفی انتزاعی اتلاف وقت است.", dim: "NS", dir: -1 },
    { q: "حس می‌کنید بیشتر به سمت فضاهای شلوغ و پر جنب و جوش کشیده می‌شوید تا مکان‌های ساکت و صمیمی.", dim: "EI", dir: 1 },
    { q: "اگر حس می‌کنید گرفتن تصمیمی درست است، اغلب بدون نیاز به اثبات بیشتر آن را عملی می‌کنید.", dim: "TF", dir: -1 },
    { q: "شما اغلب احساس غرق شدن در امور را دارید.", dim: "AT", dir: -1 },

    { q: "شما کارها به صورت روشمند و بدون رد شدن از کنار هیچ مرحله‌ای انجام می‌دهید.", dim: "JP", dir: 1 },
    { q: "شما وظایفی را ترجیح می‌دهید که برای انجام شان باید راه‌حل‌های خلاقانه پیدا کنید تا دنبال کردن مراحل مشخص.", dim: "NS", dir: 1 },
    { q: "در هنگام انتخاب کردن، بیشتر این احتمال وجود دارد که به شهود عاطفی اتکا کنید تا استدلال منطقی.", dim: "NS", dir: -1 },
    { q: "شما در رعایت موعد‌های زمانی تعیین شده مشکل دارید.", dim: "JP", dir: -1 },
    { q: "شما مطمئن هستید که همه چیز برای شما خوب پیش خواهد رفت.", dim: "AT", dir: 1 }
];

const code_details = {
    'INTJ': {
        category: "تحلیلگران",
        name: "معمار",
        description: "تیپ های شخصیتی شهودی (N)  و منطقی (T) که بخاطر عقلانیت، بی طرفی و برتری فکری شناخته می شوند.",
        short: "متفکران دارای تخیل و استراتژی که برای همه چیز برنامه دارند.",
        color: "#88619A",
        famous: [
            { name: 'Friedrich Nietzsche', pic: '', description: '' },
            { name: 'Michelle Obama', pic: '', description: '' },
            { name: 'Elon Musk', pic: '', description: '' },
            { name: 'Christopher Nolan', pic: '', description: '' },
            { name: 'Arnold Schwarzenegger', pic: '', description: '' },
            { name: 'Colin Powell', pic: '', description: '' },
            { name: 'Samantha Power', pic: '', description: '' },
            { name: 'Walter White (“Heisenberg”)', pic: '', description: 'Breaking Bad' },
        ]
    },
    'INTP': {
        category: "تحلیلگران",
        name: "منطق‌دان",
        description: "تیپ های شخصیتی شهودی (N)  و منطقی (T) که بخاطر عقلانیت، بی طرفی و برتری فکری شناخته می شوند.",
        short: "مخترعان نوآور که عطش سیری‌ناپذیر برای دانش دارند.",
        color: "#88619A",
        famous: [
            { name: 'Bill Gates', pic: '', description: '' },
            { name: 'Kristen Stewart', pic: '', description: '' },
            { name: 'Albert Einstein', pic: '', description: '' },
            { name: 'Avicii', pic: '', description: '' },
            { name: 'Stanley Crouch', pic: '', description: '' },
            { name: 'Isaac Newton', pic: '', description: '' },
            { name: 'Rene Descartes', pic: '', description: '' },
            { name: 'Elliot Page', pic: '', description: '' },
            { name: 'Blaise Pascal', pic: '', description: '' },
            { name: 'Neo', pic: '', description: 'The Matrix' },
        ]
    },
    'ENTJ': {
        category: "تحلیلگران",
        name: "فرمانده",
        description: "تیپ های شخصیتی شهودی (N)  و منطقی (T) که بخاطر عقلانیت، بی طرفی و برتری فکری شناخته می شوند.",
        short: "رهبران جسور، دارای تخیل و اراده قوی که همیشه راه حلی را پیدا می‌کنند – یا حتی می‌سازند.",
        color: "#88619A",
        famous: [
            { name: 'Steve Jobs', pic: '', description: '' },
            { name: 'Gordon Ramsay', pic: '', description: '' },
            { name: 'Margaret Thatcher', pic: '', description: '' },
            { name: 'Franklin D. Roosevelt', pic: '', description: '' },
            { name: 'Jim Carrey', pic: '', description: '' },
            { name: 'Whoopi Goldberg', pic: '', description: '' },
            { name: 'Harrison Ford', pic: '', description: '' },
            { name: 'Doctor Strange', pic: '', description: '' },
        ]
    },
    'ENTP': {
        category: "تحلیلگران",
        name: "مباحثه‌گر",
        description: "تیپ های شخصیتی شهودی (N)  و منطقی (T) که بخاطر عقلانیت، بی طرفی و برتری فکری شناخته می شوند.",
        short: "متفکران هوشمند و کنجکاو که نمی‌توانند در برابر وسوسه چالش فکری مقاومت کنند.",
        color: "#88619A",
        famous: [
            { name: 'Thomas Edison', pic: '', description: '' },
            { name: 'Céline Dion', pic: '', description: '' },
            { name: 'Tom Hanks', pic: '', description: '' },
            { name: 'Alfred “Weird Al” Yankovic', pic: '', description: '' },
            { name: 'Adam Savage', pic: '', description: '' },
            { name: 'Sarah Silverman', pic: '', description: '' },
            { name: 'Mark Twain', pic: '', description: '' },
            { name: 'The Joker', pic: '', description: 'Batman series' },
        ]
    },

    'INFJ': {
        category: "دیپلمات‌ها",
        name: "حامی",
        description: "انواع شخصیت شهودی (N) و احساسی (F) که بخاطر همدلی، مهارت های دیپلماتیک و آرمان گرایی پرشور خود معروف اند.",
        short: "کمال‌گرایانی ساکت و پر رمز و راز، در عین حال بسیار الهام‌بخش و خستگی‌ناپذیر.",
        color: "#33A474",
        famous: [
            { name: 'Martin Luther King', pic: '', description: '' },
            { name: 'Nelson Mandela', pic: '', description: '' },
            { name: 'Mother Teresa', pic: '', description: '' },
            { name: 'Marie Kondo', pic: '', description: '' },
            { name: 'Lady Gaga', pic: '', description: '' },
            { name: 'Nicole Kidman', pic: '', description: '' },
            { name: 'Morgan Freeman', pic: '', description: '' },
            { name: 'Goethe', pic: '', description: '' },
        ],
    },
    'INFP': {
        category: "دیپلمات‌ها",
        name: "میانجی",
        description: "انواع شخصیت شهودی (N) و احساسی (F) که بخاطر همدلی، مهارت های دیپلماتیک و آرمان گرایی پرشور خود معروف اند.",
        short: "افراد شاعرمسلک، مهربان و نوع‌دوست، همیشه مشتاق کمک به هدفی خوب هستند.",
        color: "#33A474",
        famous: [
            { name: 'J.R.R. Tolkien', pic: '', description: '' },
            { name: 'William Shakespeare', pic: '', description: '' },
            { name: 'Björk', pic: '', description: '' },
            { name: 'Alicia Keys', pic: '', description: '' },
            { name: 'Tom Hiddleston', pic: '', description: '' },
            { name: 'Julia Roberts', pic: '', description: '' },
            { name: 'William Wordsworth', pic: '', description: '' },
            { name: 'Johnny Depp', pic: '', description: '' },
        ]
    },
    'ENFJ': {
        category: "دیپلمات‌ها",
        name: "پروتاگونیست",
        description: "انواع شخصیت شهودی (N) و احساسی (F) که بخاطر همدلی، مهارت های دیپلماتیک و آرمان گرایی پرشور خود معروف اند.",
        short: "رهبران کاریزماتیک و الهام‌بخش، قادر هستند شنوندگان خود را هیپنوتیزم کنند.",
        color: "#33A474",
        famous: [
            { name: 'Barack Obama', pic: '', description: '' },
            { name: 'Oprah Winfrey', pic: '', description: '' },
            { name: 'John Cusack', pic: '', description: '' },
            { name: 'Ben Affleck', pic: '', description: '' },
            { name: 'Malala Yousafzai', pic: '', description: '' },
            { name: 'Jennifer Lawrence', pic: '', description: '' },
            { name: 'Sean Connery', pic: '', description: '' },
            { name: 'Maya Angelou', pic: '', description: '' },
        ]
    },
    'ENFP': {
        category: "دیپلمات‌ها",
        name: "فعال",
        description: "انواع شخصیت شهودی (N) و احساسی (F) که بخاطر همدلی، مهارت های دیپلماتیک و آرمان گرایی پرشور خود معروف اند.",
        short: "روح‌های آزاد مشتاق، خلاق و خوش‌مشرب که همیشه می‌توانند دلیلی برای لبخند پیدا کنند",
        color: "#33A474",
        famous: [
            { name: 'Robert Downey, Jr.', pic: '', description: '' },
            { name: 'Robin Williams', pic: '', description: '' },
            { name: 'Quentin Tarantino', pic: '', description: '' },
            { name: 'RM (Kim Nam-joon)', pic: '', description: '' },
            { name: 'Kelly Clarkson', pic: '', description: '' },
            { name: 'Will Smith', pic: '', description: '' },
        ]
    },

    'ISTJ': {
        category: "نگهبانان",
        name: "لجستیک",
        description: "تیپ های شخصیتی نکته بین (S) و منظم (J) که به دلیل عمل گرایی و تمرکز بر نظم، امنیت و ثبات شناخته می شوند.",
        short: "افراد عمل‌گرا و واقع‌اندیش، کسانی که در قابل اعتماد بودنشان جای شکی نیست.",
        color: "#4298B4",
        famous: [
            { name: 'Sting', pic: '', description: '' },
            { name: 'Denzel Washington', pic: '', description: '' },
            { name: 'Angela Merkel', pic: '', description: '' },
            { name: 'Natalie Portman', pic: '', description: '' },
            { name: 'Anthony Hopkins', pic: '', description: '' },
            { name: 'George Washington', pic: '', description: '' },
            { name: 'Condoleezza Rice', pic: '', description: '' },
            { name: 'George H.W. Bush', pic: '', description: '' },
        ]
    },
    'ISFJ': {
        category: "نگهبانان",
        name: "مدافع",
        description: "تیپ های شخصیتی نکته بین (S) و منظم (J) که به دلیل عمل گرایی و تمرکز بر نظم، امنیت و ثبات شناخته می شوند.",
        short: "محافظانی بسیار متعهد و گرم، همیشه آماده دفاع از عزیزان خود هستند.",
        color: "#4298B4",
        famous: [
            { name: 'Beyoncé', pic: '', description: '' },
            { name: 'Queen Elizabeth II', pic: '', description: '' },
            { name: 'Aretha Franklin', pic: '', description: '' },
            { name: 'Vin Diesel', pic: '', description: '' },
            { name: 'Halle Berry', pic: '', description: '' },
            { name: 'Kate Middleton', pic: '', description: '' },
            { name: 'Anne Hathaway', pic: '', description: '' },
            { name: 'Selena Gomez', pic: '', description: '' },
        ]
    },
    'ESTJ': {
        category: "نگهبانان",
        name: "مدیر",
        description: "تیپ های شخصیتی نکته بین (S) و منظم (J) که به دلیل عمل گرایی و تمرکز بر نظم، امنیت و ثبات شناخته می شوند.",
        short: "مدیران عالی، بی‌نظیر در مدیریت امور – یا مردم.",
        color: "#4298B4",
        famous: [
            { name: 'Sonia Sotomayor', pic: '', description: '' },
            { name: 'John D. Rockefeller', pic: '', description: '' },
            { name: 'Judge Judy', pic: '', description: '' },
            { name: 'Ella Baker', pic: '', description: '' },
            { name: 'Frank Sinatra', pic: '', description: '' },
            { name: 'James Monroe', pic: '', description: '' },
            { name: 'Laura Linney', pic: '', description: '' },
            { name: 'Lyndon B. Johnson', pic: '', description: '' },
        ]
    },
    'ESFJ': {
        category: "نگهبانان",
        name: "کنسول",
        description: "تیپ های شخصیتی نکته بین (S) و منظم (J) که به دلیل عمل گرایی و تمرکز بر نظم، امنیت و ثبات شناخته می شوند.",
        short: "افرادی فوق‌العاده مراعاتگر، اجتماعی و محبوب، همیشه مشتاق کمک کردن هستند.",
        color: "#4298B4",
        famous: [
            { name: 'Taylor Swift', pic: '', description: '' },
            { name: 'Jennifer Garner', pic: '', description: '' },
            { name: 'Bill Clinton', pic: '', description: '' },
            { name: 'Steve Harvey', pic: '', description: '' },
            { name: 'Danny Glover', pic: '', description: '' },
            { name: 'Jennifer Lopez', pic: '', description: '' },

        ]
    },

    'ISTP': {
        category: "کاوشگران",
        name: "ویرتوئوز",
        description: "تیپ های شخصیتی نکته بین (S) و جستجوگر (P) که بخاطر خود انگیختگی، ابتکار و انعطاف پذیری شان شناخته می شوند.",
        short: "آزمایش‌کنندگانی جسور و عمل‌گرا، استادان همه نوع ابزار.",
        color: "#E4AE3A",
        famous: [
            { name: 'Olivia Wilde', pic: '', description: '' },
            { name: 'Bear Grylls', pic: '', description: '' },
            { name: 'Michael Jordan', pic: '', description: '' },
            { name: 'Clint Eastwood', pic: '', description: '' },
            { name: 'Milla Jovovich', pic: '', description: '' },
            { name: 'Daniel Craig', pic: '', description: '' },
            { name: 'Tom Cruise', pic: '', description: '' },
            { name: 'Michelle Rodriguez', pic: '', description: '' },
        ]
    },
    'ISFP': {
        category: "کاوشگران",
        name: "ماجراجو",
        description: "تیپ های شخصیتی نکته بین (S) و جستجوگر (P) که بخاطر خود انگیختگی، ابتکار و انعطاف پذیری شان شناخته می شوند.",
        short: "هنرمندانی انعطاف‌پذیر و جذاب، همیشه آماده کشف و تجربه چیزهای جدید هستند.",
        color: "#E4AE3A",
        famous: [
            { name: 'Lana Del Rey', pic: '', description: '' },
            { name: 'Jungkook (Jeon Jungkook)', pic: '', description: '' },
            { name: 'Avril Lavigne', pic: '', description: '' },
            { name: 'Kevin Costner', pic: '', description: '' },
            { name: 'Frida Kahlo', pic: '', description: '' },
            { name: 'Britney Spears', pic: '', description: '' },
            { name: 'Michael Jackson', pic: '', description: '' },
            { name: 'Jessica Alba', pic: '', description: '' },
        ]
    },
    'ESTP': {
        category: "کاوشگران",
        name: "کارآفرین",
        description: "تیپ های شخصیتی نکته بین (S) و جستجوگر (P) که بخاطر خود انگیختگی، ابتکار و انعطاف پذیری شان شناخته می شوند.",
        short: "افرادی هوشمند، پرانرژی و بسیار اهل درک که واقعاً از ریسک کردن و هیجان لذت می‌برند.",
        color: "#E4AE3A",
        famous: [
            { name: 'Ernest Hemingway', pic: '', description: '' },
            { name: 'Jack Nicholson', pic: '', description: '' },
            { name: 'Eddie Murphy', pic: '', description: '' },
            { name: 'Madonna', pic: '', description: '' },
            { name: 'Bruce Willis', pic: '', description: '' },
            { name: 'Michael J. Fox', pic: '', description: '' },
            { name: 'Nicolas Sarkozy', pic: '', description: '' },
            { name: 'Samuel L. Jackson', pic: '', description: '' },
        ]
    },
    'ESFP': {
        category: "کاوشگران",
        name: "سرگرم‌کننده",
        description: "تیپ های شخصیتی نکته بین (S) و جستجوگر (P) که بخاطر خود انگیختگی، ابتکار و انعطاف پذیری شان شناخته می شوند.",
        short: "افراد خودانگیخته، پرانرژی و مشتاق – زندگی کردن در اطراف آنها هرگز کسل‌کننده نیست.",
        color: "#E4AE3A",
        famous: [
            { name: 'Elton John', pic: '', description: '' },
            { name: 'Marilyn Monroe', pic: '', description: '' },
            { name: 'Jamie Oliver', pic: '', description: '' },
            { name: 'Adele', pic: '', description: '' },
            { name: 'Jamie Foxx', pic: '', description: '' },
            { name: 'Steve Irwin', pic: '', description: '' },
            {name: '', pic: '', description: ''}

        ]
    },
}

const code_table = {
    'E': 'برونگرا',     //'Extraverted',
    'I': 'درونگرا',     //'Introverted',

    'N': 'شهودی',       //'Intuitive',
    'S': 'نکته‌بین',    //'Observant',

    'T': 'منطقی',       //'Thinking',
    'F': 'احساسی',      //'Feeling',

    'J': 'منظم',     //'Judging',
    'P': 'جستجوگر',   //'Prospecting',

    'A': 'قاطع',     //'Assertive',
    'T': 'بی‌قرار'        //'Turbulent',
};



function get_scores_from_linear_sum(answers) {
    const scores = { EI: 0, NS: 0, TF: 0, JP: 0, AT: 0 };

    questions.forEach((q, i) => {
        const score = answers[i];
        if (!score || score == 0) return;
        scores[q.dim] += score * (q.dir);
    })
    return scores;
}

function scoresToPercentages(scores) {
    //get questions based on category
    const counts = questions.reduce((acc, q) => {
        acc[q.dim] = (acc[q.dim] || 0) + 1;
        return acc;
    }, {});

    // console.log('counts', counts);


    //get percentages
    const result = Object.keys(scores).reduce((acc, key) => {

        //==> (abs(score)/Max ) * 100
        acc[key] = Math.round((Math.abs(scores[key]) / (counts[key] * 3)) * 100);
        return acc;
    }, {});

    return result;
}

function scoresToCode(scores) {
    const entries = Object.entries(scores);

    const result = entries.map(([key, value], index) => {
        if (value >= 0) {
            return key[0];
        } else {
            return key[1];
        }
    });

    return `${result[0]}${result[1]}${result[2]}${result[3]}-${result[4]}`;
}

// Test the code.
function getResults() {


    // تولید پاسخ تصادفی بین -3 تا 3
    const answers = Array.from({ length: questions.length }, () =>
            Math.floor(Math.random() * 7) - 3
        );

    const scores = get_scores_from_linear_sum(answers);
    const percentages = scoresToPercentages(scores);
    const code = scoresToCode(scores);

    console.log("===== Results =====");
    console.log("Scores: ", scores);
    console.log("Percentages: ", percentages);
    console.log("Code: ", code);

    return {
        scores, percentages, code
    }
}

getResults();
// setInterval(() => {
//     getResults();
// }, 1000);


export { code_details, code_table, getResults, questions };

