const labels = new Labels();

const createExtensionInstance = () => new ScamAddressProtection(Web3, labels);

window.addEventListener("load", function() {
    const objScamAddressProtection = createExtensionInstance();
});

//Send message from the extension to here.
objBrowser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let objScamAddressProtection = createExtensionInstance();

        if (typeof request.func !== "undefined") {
            if(typeof objScamAddressProtection[request.func] == "function") {
                objScamAddressProtection[request.func]();
                sendResponse({status: "ok"});
                return true;
            }
        }

        sendResponse({status: "fail"});
    }
);
