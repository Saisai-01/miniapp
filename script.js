const tg = window.Telegram.WebApp;

// Telegram User Data ကိုဖတ်မယ်
const user = tg.initDataUnsafe.user;
console.log("User ID:", user?.id);
console.log("Username:", user?.username);

// Telegram App ရဲ့ Theme (Light/Dark Mode)
console.log("Theme:", tg.colorScheme); 

// WebApp ကိုအပြည့်ဖွင့်မယ် (Mobile မှာ Full Screen ဖြစ်အောင်)
tg.expand(); 
