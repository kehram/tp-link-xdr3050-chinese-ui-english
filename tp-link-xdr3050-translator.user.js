// ==UserScript==
// @name         TP-Link XDR3050 Chinese UI → English
// @namespace    https://github.com/kehram/tp-link-xdr3050-chinese-ui-english
// @version      1.0.0
// @description  Translate TP-Link TL-XDR3050 Chinese web UI into English
// @author       Hasibul Alam Mamur
// @match        *://192.168.2.1/*
// @match        *://192.168.*.*/*
// @match        *://tplogin.cn/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // ===== DICTIONARY =====
    const dict = {

        // LOGIN
        "管理员密码": "Admin Password",
        "请输入管理员密码": "Enter admin password",
        "确定": "Login",
        "忘记密码": "Forgot password",

        // MAIN NAV
        "网络状态": "Network Status",
        "设备管理": "Device Management",
        "应用管理": "App Management",
        "路由设置": "Router Settings",

        // BASIC
        "基本设置": "Basic Settings",
        "高级设置": "Advanced Settings",

        // WAN
        "上网方式": "Connection Type",
        "自动获取IP地址": "Dynamic IP",
        "固定IP地址": "Static IP",
        "宽带拨号上网": "PPPoE",
        "自动选择WAN口": "Auto WAN Port",
        "固定WAN口": "Fixed WAN Port",
        "请选择WAN口": "Select WAN Port",
        "WAN口设置": "WAN Settings",

        // STATUS
        "IP地址": "IP Address",
        "DNS服务器": "DNS Server",
        "在线时长": "Uptime",
        "已连接设备": "Connected Devices",

        // BUTTONS
        "保存": "Save",
        "连接": "Connect",
        "断开": "Disconnect",
        "进入": "Enter",
        "管理": "Manage",
        "禁用": "Disable",
        "启用": "Enable",

        // ADVANCED
        "拨号模式": "Dial Mode",
        "连接模式": "Connection Mode",
        "自动连接": "Auto Connect",
        "开机和断线后": "On Boot / Reconnect",
        "数据包MTU": "MTU",
        "服务名": "Service Name",
        "服务器名": "Server Name",
        "实际协商速率": "Negotiated Speed",

        // WIFI
        "无线设置": "Wireless Settings",
        "Wi-Fi多频合一": "Smart Connect",
        "无线功能": "Wireless",
        "无线名称": "SSID",
        "无线Password": "Wi-Fi Password",
        "认证类型": "Security Type",
        "开启无线广播": "Broadcast SSID",

        // SWITCH
        "开": "On",
        "关": "Off",

        // GENERIC
        "设备": "Device",
        "应用": "App",
        "网络": "Network",
        "路由": "Router",
        "状态": "Status",

        // SYSTEM
        "产品型号": "Model",
        "退出": "Logout"
    };

    // ===== PRIORITY FIX (prevents mixed text like 设备Manage) =====
    const priority = {
        "设备管理": "Device Management",
        "应用管理": "App Management",
        "网络状态": "Network Status",
        "路由设置": "Router Settings"
    };

    function translate(text) {
        if (!text) return text;

        let result = text;

        // priority first
        for (let key in priority) {
            if (result.includes(key)) {
                result = result.replaceAll(key, priority[key]);
            }
        }

        // dictionary
        for (let key in dict) {
            if (result.includes(key)) {
                result = result.replaceAll(key, dict[key]);
            }
        }

        // dynamic speed text
        result = result.replace(/上行.*?KB\/s/g, "Upload Speed");
        result = result.replace(/下行.*?KB\/s/g, "Download Speed");

        return result;
    }

    function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = translate(node.nodeValue);
        } else {
            node.childNodes.forEach(walk);
        }
    }

    function run() {
        walk(document.body);

        // placeholders
        document.querySelectorAll("input").forEach(el => {
            if (el.placeholder) {
                el.placeholder = translate(el.placeholder);
            }
        });

        // dropdown options
        document.querySelectorAll("option").forEach(el => {
            el.textContent = translate(el.textContent);
        });
    }

    // 🔥 critical for TP-Link dynamic UI
    setInterval(run, 800);

})();
