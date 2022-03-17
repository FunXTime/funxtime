function widgetBot(action, arg1, arg2) {
  if (action == "toggle" || action == 'toggle' || action == 1 || action == '1' || action == "1") {
    crate.toggle();
  } else if (action == "open" || action == 'open' || action == 2 || action == '2' || action == "2") {
    crate.toggle(true);
  } else if (action == "close" || action == 'close' || action == 3 || action == '3' || action == "3") {
    crate.toggle(false);
  } else if (action == "notify" || action == 'notify' || action == 4 || action == '4' || action == "4") {
    crate.notify({ content: arg1, timeout: arg2 * 1000 });
  }
}

function consoleMeme() {
  console.log(pageInitLog, "color:orange;font-size:69px;");
  console.log("%c What are you doing in the console log? D:", "color:lightblue;font-size:31px;");
  // console.log("%c Cannot run the site? Use commands! Start with typing \"cnsl(\"help\")\"!", "color:yellow;font-size:22px;");
}

function cnsl(command) {
  if (command == "help" || command == 'help' || command == 1 || command == "1" || command == '1') {
    console.log("%c Commands:", "font-size:31px;color:lightblue;");
    console.log("%c cnsl(\"help\") - View this message.", "font-size:22px;background-color:orange;color:white;border-top-left-radius:5px;border-top-right-radius:5px;");
    console.log("%c cnsl(\"xd\") - Indeed.", "font-size:22px;background-color:orange;color:white;border-bottom-left-radius:5px;border-bottom-right-radius:5px;");
  } else {
    console.log("%c FXT_CNSL: \"Invalid command used in the console\"! Please use \"cnsl(\"help\")\" for reference.", "color:red;font-size:22px;");
  }
}