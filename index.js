function loadFileNames(dir) {
    return new Promise((resolve, reject) => {
        try {
            var fileNames = new Array();
            $.ajax({
                url: dir,
                success: function (data) {
                    for(var i = 1; i < $(data).find('li span.name').length; i++){
                        var elem = $(data).find('li span.name')[i];
                        fileNames.push(elem.innerHTML);
                    }
                    return resolve(fileNames);
                }
            });
        } catch (ex) {
            return reject(new Error(ex));
        }
    });
}