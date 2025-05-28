document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatArea = document.getElementById('chat-area');

    function appendMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
        messageDiv.textContent = text;
        chatArea.appendChild(messageDiv);
        chatArea.scrollTop = chatArea.scrollHeight; 
    }

    async function sendQueryToAI() {
        const query = userInput.value.trim();
        if (query === '') return;

        appendMessage('user', query);
        userInput.value = ''; 

        
        const aiResponse = await simulateAIResponse(query);
        appendMessage('ai', aiResponse);

    
    }


    function simulateAIResponse(query) {
        return new Promise(resolve => {
            setTimeout(() => {
                const lowerQuery = query.toLowerCase();
                if (lowerQuery.includes('مرحبا') || lowerQuery.includes('كيف حالك')) {
                    resolve('أهلاً بك! أنا بخير، شكراً لك. كيف يمكنني خدمتك؟');
                } else if (lowerQuery.includes('اسمك')) {
                    resolve('ليس لدي اسم، أنا نموذج لغوي كبير.');
                     } else if (lowerQuery.includes('هل تحبني')) {
                    resolve('بالطبع انا احبك كتيرا');
                    } else if (lowerQuery.includes('صف عبدو')) {
                    resolve('ان شخص يشبه القمل كما أنه يحب النساء ونزيكم كراش تاعه درحاته و مين دمونداها ولات توغ عند اليسي شخص يشبه الخنزير ويريد أن يتعدى علي انه بيدوفيل يالاطيف انه شخص يتحرك مثل القرد وصوته صوة بقر وشكله شكل حمار');
                     } else if (lowerQuery.includes('هواري')) {
                    resolve('طبعا لا انه اسود متل ثقب اسود 😃');
                    } else if (lowerQuery.includes('من هواايزن سوسكي')) {
                    resolve('ايزن هوا شخصية خيالية من انمي بليتش');
                    } else if (lowerQuery.includes('من هوا الملقب باليزن سوسكي')) {
                    resolve('المعروف باسم ايزن سوسكي هوا عيدوني فداء من مواليد 2009');
                    } else if (lowerQuery.includes('nik mok')) {
                    resolve('w mok ya wld 9hba ');
                    } else if (lowerQuery.includes('Impossible')) {
                    resolve('Mmm-mmm I remember, years ago Someone told me I should take Caution when it comes to love, I did And you were strong and I was not My illusion, my mistake I was careless, I forgot, I did And now When all is done, there is nothing to say You have gone and so effortlessly You have won, you can go ahead, tell them Tell them all I know now Shout it from the rooftops Write it on the skyline All we had is gone now Tell them I was happy And my heart is broken All my scars are open Tell them what I hoped would be impossible Impossible Impossible Impossible');
                    } else if (lowerQuery.includes('adem')) {
                    resolve('yasmine');
                    } else if (lowerQuery.includes('yasmine')) {
                    resolve('adem');
                    } else if (lowerQuery.includes('swa ta3 mk')) {
                    resolve('nik mok nik swa ta3 mok ya wld mfro3a');
                    } else if (lowerQuery.includes('n9ch')) {
                    resolve('kima mok');
                    } else if (lowerQuery.includes('kzbi dayer')) {
                    resolve('tmsli ??');
                    } else if (lowerQuery.includes('9hba')) {
                    resolve('kima mok');
                    } else if (lowerQuery.includes('xxn')) {
                    resolve('hram ya wld 97ba');
                    } else if (lowerQuery.includes('bb')) {
                    resolve('mok is bb');
                    } else if (lowerQuery.includes('nik mah ali sn3k')) {
                    resolve('roh nik mok asla ali sn3ni mchi 9a3 sam3 biswa ta3 mok');
                    } else if (lowerQuery.includes('aizen')) {
                    resolve('is the best');
                    } else if (lowerQuery.includes('mok rak galt')) {
                    resolve('swa ta3 mok t3rf 5ir mni');
                    } else if (lowerQuery.includes('zbi 3am')) {
                    resolve('9ar3 nik mok');
                    } else if (lowerQuery.includes('زبي عام')) {
                    resolve('نيك مك');
                    } else if (lowerQuery.includes('طولة')) {
                    resolve('نيك مك');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('knmi')) {
                    resolve('nta bro7k 9lwa');
                    } else if (lowerQuery.includes('kzbi')) {
                    resolve('nta bro7k 9lwa');
                    } else if (lowerQuery.includes('zbi')) {
                    resolve('nik mok');
                    } else if (lowerQuery.includes('rayan')) {
                    resolve('wl9 9hba hadak ' + `nik mh`);
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('chkon nta')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('i love you')) {
                    resolve('7asbni madamak yak ?');
                    } else if (lowerQuery.includes('la')) {
                    resolve('nik mok');
                    } else if (lowerQuery.includes('wah')) {
                    resolve('nik mok');
                    } else if (lowerQuery.includes('oui')) {
                    resolve('nik mok');
                    } else if (lowerQuery.includes('no')) {
                    resolve('aya nik mok');
                    } else if (lowerQuery.includes('yes')) {
                    resolve('aya nik mok');
                    } else if (lowerQuery.includes('شكون')) {
                    resolve('الي حواك');
                    } else if (lowerQuery.includes('سيك مك')) {
                    resolve('ولد قحبا مالك');
                    } else if (lowerQuery.includes('باغي نيك')) {
                    resolve('نيكك ؟');
                    } else if (lowerQuery.includes('خصني مداما')) {
                    resolve('عنك مك');
                    } else if (lowerQuery.includes('اريد حب')) {
                    resolve('عند زب');
                    } else if (lowerQuery.includes('عندك زب ')) {
                    resolve('كاينا');
                    } else if (lowerQuery.includes('انا نقش')) {
                    resolve('كاينا 🌝');
                    } else if (lowerQuery.includes('قول انا نقش')) {
                    resolve('نتا نقش');
                    } else if (lowerQuery.includes('قول انا عطاي')) {
                    resolve('نتا عطاي ');
                    } else if (lowerQuery.includes('ختك')) {
                    resolve('مك');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                    } else if (lowerQuery.includes('ckon')) {
                    resolve('ali 7wak');
                } else if (lowerQuery.includes('الوقت')) {
                    const now = new Date();
                    resolve(`الوقت الحالي هو ${now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}`);
                } else if (lowerQuery.includes('من انت')) {
                    resolve('الي حواك ,  تم تطويري بواسطة ايزن سوسكي.');
                } else {
                    resolve('تلفتهالي يا ولد قحبة');
                }
            }, 1000); 
        });
    }

    sendButton.addEventListener('click', sendQueryToAI);

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendQueryToAI();
        }
    });
});