const fs = require("fs");

const config = {
    owner: ["6282138458638", "6282325781726", "6282225907841"],
    botnumber: "6282325781726",
    name: "- NekoBot - Simple WhatsApp bot",
    sessions: "sessions",
    prefix: ["!", ".", "#", "/"], // Tambahkan prefix sesuai kebutuhan
    tz: "Asia/Jakarta",
    database: "neko-database",
    PORT: 3000,

    id: {
        group: "1@g.us",
        newsletter: "1@newsletter"
    },

    style: {
        bold: text => `*${text}*`,
        italic: text => `_${text}_`,
        strikethrough: text => `~${text}~`,
        monospace: text => `\`\`\`${text}\`\`\``,
        boldItalic: text => `_*${text}*_`,
        boldUnderline: text => `**_${text}_**`,
        quote: text => `> ${text}`,
        bullet: text => `• ${text}`,
        number: (num, text) => `${num}. ${text}`
    },

    settings: {
        antiCall: true,
        autoGoodbye: true,
        autoJoinGc: true,
        autoTyping: true,
        autoWelcome: true,
        dmOnly: false,
        groupOnly: false,
        online: true,
        readChat: true,
        readSw: true,
        reactSw: true,
        statusOnly: false
    },

    messages: {
        call: "> 🚫 *Mohon maaf*... Kami tidak bisa menerima telepon dari Anda, anti call aktif!",
        unregistered:
            "> ❎ *Mohon maaf*... Anda belum terdaftar dalam database kami, silahkan daftar agar Anda dapat menggunakan fitur ini.\n\n> Ketik .daftar [nama Anda] agar Anda terdaftar.",
        wait: "> ⏳ *Mohon tunggu sebentar*... Kami sedang memproses permintaan Anda, harap bersabar ya!",
        maintenance:
            "> 🚧 *Fitur sedang dalam pemeliharaan*... Mohon tunggu hingga perbaikan selesai.",
        owner: "> 🧑‍💻 *Fitur ini hanya untuk pemilik bot*... Maaf, Anda tidak memiliki akses ke fitur ini.",
        admin: "> 👮 *Fitur ini hanya untuk Admin Grup*... Pastikan Anda adalah admin untuk menggunakannya.",
        botAdmin:
            "> ⚠️ *Bot harus menjadi admin grup*... Berikan hak admin kepada bot untuk menggunakan fitur ini.",
        group: "> 👥 *Fitur ini hanya tersedia di grup*... Pastikan Anda berada di grup WhatsApp untuk mengakses fitur ini.",
        private:
            "> 🔒 *Fitur ini hanya tersedia di chat pribadi*... Gunakan di chat pribadi dengan bot.",
        premium:
            "> 🥇 *Upgrade ke Premium* untuk mendapatkan akses ke fitur eksklusif, murah dan cepat! Hubungi admin untuk info lebih lanjut.",
        error: "> ❌ *Terjadi kesalahan*... Silakan laporkan kepada pemilik bot untuk diperbaiki.",
        errorlink:
            "> 🔗 *Harap masukkan URL yang valid*... URL harus dimulai dengan 'https://'.",
        success:
            "> ✅ *Berhasil!*... Permintaan Anda telah diproses dengan sukses.",
        done: "> 🎉 *Selesai!*... Terima kasih sudah menggunakan fitur ini!",
        example: "> ❎ *Contoh Penggunaan Fitur*",
        badwords:
            "> ❎ *Mohon maaf*... Anda tidak diperbolehkan berkata kasar disini, saya akan menghapus pedan anda"
    },

    sticker: {
        packname: "✨ NekoPack ✨",
        author: "🐾 Lorenzxz 🐾",
        packId: "https://github.com/Lorenzxz",
        email: "lorenzxz@gmail.com",
        website: "https://github.com/Lorenzxz",
        androidApp:
            "https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro",
        iOSApp: "https://apps.apple.com/id/app/muslim-pro-al-quran-adzan/id388389451?|=id",
        emojis: [],
        isAvatar: 0
    },

    bot: {
        discord: true,
        telegram: true,
        twitter: false,
        whatsapp: true
    }, // True = activate, False = turn off

    dicord: {
        token: ""
    },

    telegram: {
        token: "", // Opsional
        ownerID: "" // Opsional
    },

    twitter: {
        appKey: "",
        appSecret: "",
        accessToken: "",
        accessSecret: "",
        botUserId: "",
        pollingInterval: 60000
    }
};

module.exports = config;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    delete require.cache[file];
});
