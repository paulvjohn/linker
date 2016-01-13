var data= {
"CDataMap" : [
    {
        "name": "Jim Cowart",  
        "location": {
            "city": {
                "name": "New york",
                "population": 494949494
                }
        }
    },

  ]
};

var templateSource   = $("#company_template").html();
template = Handlebars.compile(templateSource);
studentHTML = template(data);
$("p").append(studentHTML);