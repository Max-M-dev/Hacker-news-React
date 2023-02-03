import ConsoleLogHTML from "console-log-html";
ConsoleLogHTML.DEFAULTS.warn = "log-warn";
ConsoleLogHTML.DEFAULTS.error = "log-error";
ConsoleLogHTML.connect(document.getElementById("log"));
