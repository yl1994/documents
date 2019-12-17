vuepress使用

## vuepress基本使用:hammer:

找到对应的css，在index.styl里面写，就可以覆盖默认的了

### Styling

[修改颜色样式官方文档 Styling](https://v1.vuepress.vuejs.org/zh/config/#styling)

### Emoji

[所有可用的Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

**输入**

```text
:tada: :100:
```

**输出**

🎉 💯

常用的Emoji：

```
"hammer": "🔨",
"pill": "💊",
"gift": "🎁",
  "ledger": "📒",
  "closed_book": "📕",
  "green_book": "📗",
  "blue_book": "📘",
  "orange_book": "📙",
  "heart": "❤️",
  "yellow_heart": "💛",
  "green_heart": "💚",
  "blue_heart": "💙",
  "purple_heart": "💜",
  "black_heart": "🖤",
  "broken_heart": "💔",
  "heavy_heart_exclamation": "❣️",
  "two_hearts": "💕",
  "revolving_hearts": "💞",
  "heartbeat": "💓",
  "heartpulse": "💗",
  "sparkling_heart": "💖",
  "cupid": "💘",
  "gift_heart": "💝",
  "heart_decoration": "💟",
  "x": "❌",
  "o": "⭕️",
  "white_check_mark": "✅",
  "negative_squared_cross_mark": "❎",
  "point_left": "👈",
  "point_right": "👉",
  "point_up_2": "👆",
  "point_down": "👇",
  "point_up": "☝️",  
  "star": "⭐️",  
  "zap": "⚡️",  
  "sunny": "☀️",  
  "rainbow": "🌈",  
  "medal_sports": "🏅",
  "medal_military": "🎖",
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  "trophy": "🏆",  
```



## 代码块中的行高亮

**输入**

~~~text
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

**输出**

```js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```