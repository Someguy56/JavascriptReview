function lookForPeople()
{
    $(function() {
        $.getJSON("json-search.json", function(result) {
            let output = $("#output");
            let numFound = 0;

            output.empty();
            $.each(result, function(index, object) {
                let name = object.name.toLowerCase();

                if(name.includes($("#input").val().toLowerCase()))
                {
                    output.append("<p>Name: "+object.name+"</p>");
                    output.append("<p>Sex: "+object.sex+"</p>");
                    output.append("<p>Born: "+object.born+"</p>");
                    output.append("<p>Died: "+object.died+"</p>");
                    output.append("<p>Father: "+object.father+"</p>");
                    output.append("<p>Mother: "+object.mother+"</p><br>");

                    numFound++;
                }
            });

            if(numFound === 0)
            {
                output.append("<p>No person found</p>");
            }
        });
    });
}