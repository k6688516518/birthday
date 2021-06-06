// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "陌生或者不陌生的你",  // 同上...
        "感谢你以生日美好",
        "给这个互联网一角带来惊喜",
        "真诚地祝愿你",
        "愿你的成熟不是被迫",
        "愿你拥有好运气",
        "愿你有盔甲也有软肋",
        "愿你不饶点滴不饶自己",
        "愿你一生被爱，也一生努力",
        "愿你活成自己想要的模样",
        "原你付出甘之如饴，所得归于欢喜",
        "愿你道路漫长，有的是时间发生故事",
        "愿你在最无趣的日子里仍对世界保持好奇",
        "愿你的每次流泪都是喜极而泣",
        "愿你筋疲力尽时有树可倚",
        "愿你学会释怀后一身轻",
        "愿你遍历山河，仍觉人间值得",
        "愿你走出半生，归来仍是少年",
        "......",
        "愿程序代码在未来给你带来不尽的精彩",
        "生日快乐，^-^",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始吧",
        play: "来点音乐",
        bannar_coming: "涂色",
        balloons_flying: "彩色气球",
        cake_fadein: "来点生日的象征",
        light_candle: "想要许愿",
        wish_message: "生日快乐",
        story: " A Small colored egg",
    }
};
