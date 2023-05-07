# TechTotoro Chatbot Widget!

This is a easy to use and modify **Tailwind+JS** widget. Just write a function and import the src/totorobot.js file in your code and use it.


# Get Started

* Write a div with id 'chatbot_div'

```html
	<div id="chatbot_div"></div>
```

* Write a function :

```js
    function  getReply(message){
        // the message from user will be in parameter 'message'.
        // write your code to get reply from server,
        // asume that the reply from the server is in the var below.
        var  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        // on success just call messageFromBot function.
        // and send the reply string in parameter.
        messageFromBot(text);
    }
```

* Import src/totorobot.js in you web page.
```html
	<script type="text/javascript" src="src/totorobot.js"></script>
```

# Advance Usages
You can modify the configatations like header text, into message option, time and text. Besides that you can change style like bg colors, text colors and icons.
Just initiate two var on top where you import the totorobot.js file.
```js
    var init_data = {
        header_text:"Totoro ChatBot",
        intro_message_text:"Hello, This is AI Chatbot. How may I help you?",
        intro_message_appearace:true,
        intro_message_delay_time: 2
    };

    var init_style = {
        header_bg_color : "#2487ce",
        header_text_color : "#fff",
        body_bg_color : "#fff",
        bot_message_bg_color : "#2487ce",
        bot_message_text_color : "#fff",
        user_message_bg_color : "#e6f2fb",
        user_message_text_color : "#16507b",
        bot_icon : "path_to/someicon.png",
        user_icon : "path_to/someicon.png",
        widget_icon : "path_to/someicon.png",
        widget_icon_with_message : "path_to/someicon.png",
        button_icon : "path_to/someicon.png",
        minimize_icon : "path_to/someicon.png"
    }
```
You can skip any object property if you want to use the defautl one.

`Happy coding.`
