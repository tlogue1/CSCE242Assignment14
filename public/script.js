const getCrafts = async() => {
    try {
        return (await fetch("http://localhost:3000/api/crafts")).json();
    } catch(error) {
        console.log("Error retrieving data");
        return "";
    }
};

const showCrafts = async() => {
    const craftsJSON = await getCrafts();
    const craftsDIV = document.getElementById("crafts-div");

    if(craftsJSON =="") {
        craftsDIV.innerHTML = "Sorry, no crafts";
        return;
    }

    craftsJSON.forEach((craft) => {
        const column = document.createElement("column");
        craftsDIV.append(column);


        const img = document.createElement("img");
        img.src = "http://localhost:3000/" + craft.image;
        column.append(img);
        

        var modal = document.getElementById("myModal");

        var image = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementsByClassName("caption");
        img.onclick = function (){
            modal.style.display= "block";
            modalImg.src = craft.image;

            var name = document.createElement("h1");
            name.innerHTML = craft.name;
            captionText[0].appendChild(name);

            var description = document.createElement("p");
            description.innerHTML =  craft.description;
            captionText[0].appendChild(description);


            var supplies = document.createElement("p");
            supplies.innerHTML = "Supplies: " +  craft.supplies;
            captionText[0].appendChild(supplies);
            

        }
        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            modal.style.display = "none";
            while (captionText[0].firstChild) {
                captionText[0].removeChild(captionText[0].firstChild);
        }
        }
    });
};

showCrafts();