export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx929eb21dc87a171a",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "cd3309be2a90ccc4664edd03a9c60110",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,
    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },
  USERS: ["ojGXm5jJPa7DaAE8Q3FZdnSsjRfQ","ojGXm5uFTM--DVGz50RkM2sW18LQ"
    {
      // 想要发送的人的名字
      "name": "扶小茵",
    
      // 你想对他发送的模板消息的模板ID
      "useTemplateId": "hurORAZp1DE-665czSRpFf1zF5hjCRJGjgNWI0BiPf8",
      "province": "广东",
      "city": "广州",
      "horoscopeDate": '01-19',
      "horoscopeDateType": '今日',
     " festivals": [
        {"type": "生日", "name": "扶小茵", "year": "2002", "date": "01-19"},
      ],
      "customizedDateList": [
        // 在一起的日子
        {"keyword": "love_day", date: "2022-04-11"}
      ]
    },
  ],
  "CALLBACK_TEMPLATE_ID": "ojGXm5uFTM--DVGz50RkM2sW18LQ",
  "CALLBACK_USERS": [
    {
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "1111",
    },
   
  ],
   "PROVINCE": "广东",
   "CITY": "广州",
 " FESTIVALS": [
    {"type": "生日", "name": "扶小茵", "year": "2002", "date": "01-19", isShowAge: true},
  ],
    
  "CUSTOMIZED_DATE_LIST": [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-04-11"},
  ],
  "SLOT_LIST": [
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
   
  ],


}
