# TP-Link XDR3050 Chinese UI → English

A Tampermonkey userscript that translates the Chinese web interface of TP-Link XDR routers (tested on TL-XDR3050) into English.

---

## 🚀 What This Does

This script converts key parts of the router’s web UI from Chinese to English in real-time.

### ✅ Features

* Translates main dashboard (Network, Devices, Apps, Settings)
* Covers WAN, Wireless, and Advanced settings pages
* Supports login page translation
* Works with dynamic UI (auto re-applies translations)
* Lightweight and runs directly in the browser

---

## 📦 Installation

1. Install Tampermonkey:

   * Chrome / Edge: https://www.tampermonkey.net/

2. Install the script:

   * Open the `.user.js` file in this repository
   * Click **Raw**
   * Tampermonkey will prompt you to install

3. Open your router panel:

   * http://192.168.2.1 or http://192.168.0.1 or **tplogin.cn**

---

## 🧠 How to Use

1. Make sure Tampermonkey is enabled in your browser
2. Open your router dashboard
3. If translations do not appear immediately:

   * Press **Enter** once
   * Or refresh the page

The script will automatically start translating the interface.

---

## ⚠️ Notes & Limitations

* This script currently provides **basic translations** of the UI
* Some Chinese text may still appear (especially:

  * long descriptions
  * tooltips
  * dynamically loaded content)
* The script runs on the client side and **does not modify firmware**

---

## 🧪 Testing & Compatibility

* Tested on:

  * TP-Link TL-XDR3050

* Other TP-Link models:

  * May work partially
  * Not fully tested

---

## 🔮 Future Updates

* Expanded translation dictionary
* Better handling of dynamic/API-loaded content
* Improved coverage across more router models

---

## 👤 Author

Hasibul Alam Mamur
GitHub: https://github.com/kehram

---

## 📄 License

MIT License
