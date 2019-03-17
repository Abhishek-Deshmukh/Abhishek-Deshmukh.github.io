// Event Handling

document.addEventListener("DOMContentLoaded",
    function  (event) {
        document.querySelector("button")
            .addEventListener("click",
                function  () {
                    var self = this;
                    var name = "data is not came";
                    console.log("hello freands");
                    //call server to ger the name
                    $ajaxUtils
                        .sendGetRequest("name.txt",
                            function (request) {
                                console.log("response is avaaldfj");
                                self.name= request.responseText;
                                document.querySelector("#content").innerHTML = "<h2> Hello " + self.name + "!";
                            });
                });
    });
