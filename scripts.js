// 句子列表
const quotes = [
    "我梦见自己站在月台上，你不停的坐火车经过，经过，而我只是不停的错过，错过。你不能取代任何人，因为每个人都有他那种美丽的、独特的细微之处，失去的就是失去了。",
    "Love is the one thing we're capable of perceiving that transcends time and space. （爱是一种力量，能让我们超越时空的维度感知它的存在。）",
    "Well, nobody's perfect!",
    "人永远不知道，谁哪次不经意的跟你说了再见之后，就真的不会再见了。",
    "如果不能跟我喜欢的人在一起，就算让我做玉皇大帝我也不会开心。",
    "你不是我，你不会懂。"
];

let currentQuoteIndex = 0;

function updateQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// 初始化句子
updateQuote();

// 每30秒更新一次句子
setInterval(updateQuote, 30000);

// 时间更新函数
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const day = now.getFullYear() + '年' + 
                String(now.getMonth() + 1).padStart(2, '0') + '月' + 
                String(now.getDate()).padStart(2, '0') + '日 ' + 
                days[now.getDay()];
    
    document.getElementById('clock').textContent = `${day} ${formattedTime}`;
}

setInterval(updateClock, 1000); // 每秒更新一次时间
updateClock(); // 初始化时间
