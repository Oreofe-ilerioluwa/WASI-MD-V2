//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4";
global.video = "https://telegra.ph/file/8fed3725a6d912aedc601.jpg";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cypherilerioluwa@gmail.com";
global.location = "Lagos, Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2349121881343@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8fed3725a6d912aedc601.jpg";
global.devs = "2349121881343";
global.sudo = process.env.SUDO || "2349121881343";
global.owner = process.env.OWNER_NUMBER || "2349121881343";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8fed3725a6d912aedc601.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hoZEFENHdwblBkb2piWWdZN1doc2xMSitzNXVOeVVISWIweW8zRlRtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWMrWXVxbW13SXVUNGhic3hEK3BYT0VsYXhReUxKd3pSZ21tUXY1T3gzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SmtLS0FmMlN2OVpOSHYyL1d2TFhXYXhSbjlKUXhZQ0xSV0lwNXFHdmtNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqN2xobDduditLS1pRTnZPM3gzQlhyZndIRkJUbVRhaEU2d20xODd3UWp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIanh4N1dmaGNVZTZHcjMyVk55UVJIaDVaaEhCYWFqdlBoRzJLaktnV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFsRFAwdW9kWHhQV09NWnU4emd1bVVZYnVUNHVNNit5bGZ6eGhhNmZ2Q009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhjaXhLbzd2WUlZenprSG1VbFNlQkZGUTd6M1B2N201Rjd3bEN6TVRFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVlJRDZZNTlzUWp4OTUyRjZzNXlqZHdyNXF2MnZmL0VKRnNaVGlDT1dFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFCY2Zxekk0a2FiaytRNzFZSm83dE9rRFZCdGErUENURGRTR1Q3ODg0cUFHY3FEMVc2azRocnZnbVVJenFVU2ZyTE1uR3JqeWdVaXlWSk5KMDNkL2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJldXZmaFVCOU5yOGVBU1A5Y2NlZWVjS2xiVzJ1YnFIUVQ0Rm1KSlAwVTRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWYnE0OWNZSVFzcXN0dFhSMDd6MWZRIiwicGhvbmVJZCI6IjYwNzFhNWZlLTgyZjItNDEzNi05NzkyLTRjNDJiMTRlM2E3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiYy9ySzZtdDFVZ3dPakIyZ1VXdlRFdW9YTjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXlnYnExbDlxNDJTaEtEa1AxMXhldkYwRU9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYzVDlON0YzIiwibWUiOnsiaWQiOiIyMzQ5MTIxODgxMzQzOjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkN5cGhlciDDjGzDqXLDrW9sw7p3YSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2pCc2c4UStjbVB0QVlZQ1NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM2ptQ2pHN1NQcFNKdW43Y1QwWTRYRFcvU1ZBemtqay9xbkt2WmFPcSt4az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMjd4T043dHgvR1BpVncrbkVMNkl2cWlCcDgzbGk4OFpWWUtFaXdjaTIydEwyV0VHUnZmZmJBc3B0b0RQRm1CTmpsMGpjVVgreWdGQVVWOWxoL2ZxaHc9PSIsImRldmljZVNpZ25hdHVyZSI6InVrVkMzOWIxdW8yU2hvaStmT2VkNmtldCtqK0hXREpxMVdzQlNLYXFKN0hUSjFUSXJNRFBMbTJhb1NFU3Z4cSt4cjdFYlNYWFhxVkRxLzFyVWFYRGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMTg4MTM0MzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNDVnb3h1MGo2VWlicCszRTlHT0Z3MXYwbFFNNUk1UDZweXIyV2pxdnNaIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTE5ODc4fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀",
  ownername: process.env.OWNER_NAME || "Cypher Ìléríolúwa",
  errorChat: process.env.ERROR_CHAT || "2349121881343",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
