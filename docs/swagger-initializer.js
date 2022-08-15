window.onload = function() {
      // Begin Swagger UI call region
      var allText;
      function readTextFile(file){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        allText= rawFile.responseText;
                    }
            }
        }
        rawFile.send(null);
      }
      readTextFile("./docs-list.json")
      const ui = SwaggerUIBundle({
        urls:JSON.parse(allText),
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      })
      // End Swagger UI call region

      window.ui = ui
    };
