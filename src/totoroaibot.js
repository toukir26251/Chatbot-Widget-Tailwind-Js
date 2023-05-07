// checking and initializing config objects
if (typeof init_data === 'undefined') {
    var init_data = {}
}
if (typeof init_style === 'undefined') {
    var init_style = {}
}
if (!window.getReply) { 
	console.log("Write a function names 'getReply' with a string parameter and write your code to get reply, reply by calling 'messageFromBot' function with the string reply parameter.");
	window.alert("Write a function names 'getReply' with a string parameter and write your code to get reply, reply by calling 'messageFromBot' function with the string reply parameter.");
}

// calling init funtion on document load
document.getElementById("chatbot_div").onload = init();

function init(){

	// initializing config data in init_data object.
	if('header_text' in init_data == false){
		init_data.header_text = "Chat with Bot";
	}
	if('intro_message_text' in init_data == false){
		init_data.intro_message_text = "Hello, How may I help you?";
	}
	if('intro_message_delay_time' in init_data == false){
		init_data.intro_message_delay_time = 5;
	}
	if('intro_message_appearace' in init_data == false){
		init_data.intro_message_appearace = true;
	}

	// initializing styles in init_style object.
	if('header_bg_color' in init_style == false){
		init_style.header_bg_color = null;
	}
	if('header_text_color' in init_style == false){
		init_style.header_text_color = null;
	}
	if('body_bg_color' in init_style == false){
		init_style.body_bg_color = null;
	}
	if('user_message_bg_color' in init_style == false){
		init_style.user_message_bg_color = null;
	}
	if('user_message_text_color' in init_style == false){
		init_style.user_message_text_color = null;
	}
	if('bot_message_bg_color' in init_style == false){
		init_style.bot_message_bg_color = null;
	}
	if('bot_message_text_color' in init_style == false){
		init_style.bot_message_text_color = null;
	}
	if('bot_icon' in init_style == false){
		init_style.bot_icon = "assets/bot.png";
	}
	if('user_icon' in init_style == false){
		init_style.user_icon = "assets/user.png";
	}
	if('widget_icon' in init_style == false){
		init_style.widget_icon = "assets/icon1.png";
	}
	if('widget_icon_with_message' in init_style == false){
		init_style.widget_icon_with_message = "assets/icon2.png";
	}
	if('button_icon' in init_style == false){
		init_style.button_icon = "assets/send.png";
	}
	if('minimize_icon' in init_style == false){
		init_style.minimize_icon = "assets/min.png";
	}

	// adding html in page in 'chatbot_div' div
	var chatmaindiv = document.getElementById('chatbot_div');
	chatmaindiv.innerHTML = '<div id="chat_head" class="inline-block max-w-sm p-1 bg-white rounded-xl shadow-lg items-center font-sans antialiased fixed bottom-0 right-0 m-3 text-slate-600 cursor-pointer">'+
		'<div class="flex shrink-0 m-1">'+
			'<div id="message_icon" class="text-4xl">'+
				'<img src="'+init_style.widget_icon+'" width="30" alt="no message">'+
			'</div>'+
		'</div>'+
	'</div>'+

	'<div id="chat_body" class="invisible wx-auto w-80 bg-white rounded-xl shadow-lg items-center font-sans antialiased m-3 text-slate-600 fixed bottom-0 right-0">'+
		'<div id="header" class="grid grid-cols-6 gap-1 p-2 cursor-pointer">'+
			'<div class="text-4xl col-span-1">'+
				'<img src="'+init_style.widget_icon+'" width="30" alt="no message">'+
			'</div>'+
			'<div id="header_text" class="col-span-4 text-base font-medium flex flex-col justify-center mb-2">'+
				'Chat with Bot'+
			'</div>'+
			'<div id="minimizer" class="text-3xl absolute right-0 top-0 p-3 text-gray-400">'+
				'<img src="'+init_style.minimize_icon+'" width="20" alt="no min icon">'+
			'</div>'+
		'</div>'+
		'<div id="message_full_div" class="block h-96 max-h-96 overflow-y-auto overscroll-y-contain scrollbar scrollbar-thumb-gray-900 scrollbar-track-red-100">'+
			'<div id="message_view" class="p-1 pb-20">'+
				
			'</div>'+
			'<div id="message_type" class="w-full grid grid-cols-6 absolute bottom-0 p-4">'+
				'<input type="text" id="message" class="col-span-5 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50">'+
				'<div class="col-span-1">'+
					'<button class="w-full hover:bg-gray-100 text-gray-800 p-2 rounded-lg" onclick="sendMessage()">'+
						'<img src="'+init_style.button_icon+'" width="40" alt="no message">'+
					'</button>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';

	// adding header text from config data boject
	document.getElementById("header_text").innerHTML = init_data.header_text;

	// adding functionality bot to send welcome message, from config data boject
	if(init_data.intro_message_appearace == true)
		setTimeout("messageFromBot(init_data.intro_message_text)", init_data.intro_message_delay_time*1000);

	// adding styles in the chat widget from config style object
	if(init_style.header_bg_color){
		document.getElementById("header").style.background = init_style.header_bg_color;
		document.getElementById("chat_head").style.background = init_style.header_bg_color;
		var input_message = document.getElementById("message");
		input_message.addEventListener("focus", function (event) {
			event.target.style.border = "2px solid "+init_style.header_bg_color;  
		});
	}
	if(init_style.header_text_color){
		document.getElementById("header").style.color = init_style.header_text_color;
	}
	if(init_style.body_bg_color){
		document.getElementById("chat_body").style.background = init_style.body_bg_color;
	}
	
}

// function to send message from bot. text message in the parameter
function messageFromBot(message){
	var element = document.getElementById("chat_head");
		element.classList.add("animate-bounce");

	var element2 = document.getElementById("message_icon");
		element2.innerHTML = '<img src="'+init_style.widget_icon_with_message+'" width="30" alt="no message">';
		

	var text = 	'<div class="grid grid-cols-6 gap-1 p-1 mr-10 items-left">'+
				'<div class="col-span-1">'+
					'<img src="'+init_style.bot_icon+'" width="20" alt="user">'+
				'</div>'+
				'<div class="col-span-5">'+
				'<div class="w-fit break-words p-1 bg-gray-500 rounded-lg text-white text-sm" style="background:'+init_style.bot_message_bg_color+';color:'+init_style.bot_message_text_color+';">'+
				message+
				'</div>'+
				'</div>'+
				'</div>';
	document.getElementById("message_view").innerHTML += text;
	document.getElementById("message_full_div").scrollTop = 9e9;
}


// function to hide chat widget body
function hideChatBody(){
	var el = document.getElementById('chat_body');
	el.style.display = 'none';
	console.log("something");
}

// function to send message to bot by user. will get text from the input field
function sendMessage(){
	var message = document.getElementById("message").value;
	if(message != ''){
		var text = 	'<div class="grid grid-cols-6 gap-1 p-1 ml-10">'+
				'<div class="col-span-5">'+
				'<div class="w-fit break-words float-right p-1 bg-gray-100 rounded-lg text-gray-800 text-sm" style="background:'+init_style.user_message_bg_color+';color:'+init_style.user_message_text_color+';">'+
				message+
				'</div>'+
				'</div>'+
				'<div class="col-span-1">'+
					'<img class="float-right" src="'+init_style.user_icon+'" width="20" alt="user">'+
				'</div>'+
				'</div>';
		document.getElementById("message_view").innerHTML += text;
	}
	

	document.getElementById("message").value = '';
	document.getElementById("message").focus();

	getReply(text);
}

var input_message = document.getElementById("message");

input_message.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

// hide chat head and show chat body
document.getElementById("chat_head").onclick = function(){
	console.log("clicked on head");
	var el = document.getElementById('chat_head');
	el.style.visibility = 'hidden';

	var el = document.getElementById('chat_body');
	el.style.visibility = 'visible';
	document.getElementById("message").focus();

	var element = document.getElementById("chat_head");
		element.classList.remove("animate-bounce");

		var element2 = document.getElementById("message_icon");
		element2.innerHTML = '<img src="'+init_style.widget_icon+'" width="30" alt="no message">';
}

// hide chat body and show chat head
document.getElementById("minimizer").onclick = function(){
	console.log("clicked on head");
	var el = document.getElementById('chat_head');
	el.style.visibility = 'visible';

	var el2 = document.getElementById('chat_body');
	el2.style.visibility = 'hidden';
}