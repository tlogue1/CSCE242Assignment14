const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/crafts",(req,res)=> {
    console.log("someone is requesting api");
    const crafts = [];
    crafts[0] = {
        name: "Beaded jellyfish",
        image: "crafts/bead-jellyfish.jpg",
        description: "Create a hanging jellyfish using egg cartons and multicolored beads",
        supplies: [
            "string",
            "egg cartons",
            "beads"
            ]
    };
    crafts[1] = {
        name: "Character Bookmarks",
        image: "crafts/bookmarks.jpeg",
        description: "Create a little birdy bookmark to always remind you where you were",
        supplies: [
            "yellow construction paper",
            "orange construction paper",
            "black construction paper"
            ]
    };
    crafts[2] = {
        name: "Button Flowers",
        image: "crafts/button-flowers.jpeg",
        description: "Create a fun bouquet of flowers with you favorite buttons",
        supplies: [
            "multicolored buttons",
            "multicolored flet",
            "green straws",
            "ribbon"
            ]
    };
    crafts[3] = {
        name: "Cheerio Necklaces",
        image: "crafts/cheerio-necklace.webp",
        description: "Create a fun and edible necklace",
        supplies: [
            "Cheerios or Fruit Loops",
            "Elastic string"
            ]
    };
    crafts[4] = {
        name: "Cotton ball cupcakes",
        image: "crafts/cotton-ball-cupcakes.webp",
        description: "Decorate your fun filled cupcake however you want",
        supplies: [
            "Construction paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
            ]
    };
    crafts[5] = {
        name: "School Themed Mason Jars",
        image: "crafts/decorated-jars.jpeg",
        description: "Let's make mason jars",
        supplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
            ]
    };
    crafts[6] = {
        name: "Egg Carton Flowers",
        image: "crafts/egg-carton-flowers.jpg",
        description: "Make a beautiful bouquet with egg cartons and other items you can find around the house",
        supplies: [
            "Egg Carton",
            "Buttons",
            "Green Pipe Cleaner",
            "Ribbon",
            "Canvas"
            ]
    };
    crafts[7] = {
        name: "Finger Puppets",
        image: "crafts/finger-puppets.jpeg",
        description: "These little critters are easy to make, and will entertain your little one while they make a show ",
        supplies: [
            "Pom-poms",
            "Googly Eyes",
            "Pipe Cleaner"
            ]
    };
    crafts[8] = {
        name: "Ribbon Flower Headbands",
        image: "crafts/flower-headbands.jpg",
        description: "Let your little one show off her new style with these pretty and customizable headbands",
        supplies: [
            "Plain headband",
            "Ribbon",
            "Buttons",
            "Gems"
            ]
    };
    crafts[9] = {
        name: "Hand Print Fish Puppets",
        image: "crafts/handprint-fish.jpg",
        description: "We all need to take every opportuinty we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
        supplies: [
            "Popsicle sticks",
            "Cardstock",
            "Gems",
            "Googly Eyes"
            ]
    };
    crafts[10] = {
        name: "Hand Print Tree",
        image: "crafts/hand-print-tree.jpeg",
        description: "This is a fun way to get your little one into finger painting",
        supplies: [
            "Watercolor Paper",
            "Finger Paint"
            ]
    };
    crafts[11] = {
        name: "Melted Bead bowl",
        image: "crafts/melted-bead-bowl.jpeg",
        description: "All they need to do is shape their favorite design, warm it up and they have a brand new bowl",
        supplies: [
            "Beads",
            "Bowl",
            "Parchment Paper"
            ]
    };
    crafts[12] = {
        name: "Monster Kites",
        image: "crafts/monster-rolls.jpg",
        description: "Let's make those scary toilet paper rolls fly",
        supplies: [
            "Toilet Paper rolls",
            "Paint",
            "Tissue Paper",
            "String"
            ]
    };
    crafts[13] = {
        name: "Pool Noode Boats",
        image: "crafts/noodle-boats.png",
        description: "Let's make a boat that will actually float, due to the floating bottom of a pool noode",
        supplies: [
            "Pool Noodle",
            "Straw",
            "Plastic Paper"
            ]
    };
    crafts[14] = {
        name: "Paper Plate Bees",
        image: "crafts/paper-plate-bees.jpeg",
        description: "Let's have some fun making cure little bees, or big bees actually",
        supplies: [
            "Paper Plate",
            "Googly Eyes",
            "close pins",
            "Black pom poms",
            "Yellow Paint",
            "Black paint"
            ]
    };
    crafts[15] = {
        name: "Paper Plate Dinosaurs",
        image: "crafts/paper-plate-dinosaurs.jpg",
        description: "Who would have thought that hald a paper plate would be the base of a dinosaur",
        supplies: [
            "Paper Plate",
            "Paint",
            "Close Pins",
            "construction Paper"
            ]
    };
    crafts[16] = {
        name: "Porcupine Leafs",
        image: "crafts/porcupine-leaf.webp",
        description: "Let's turn an ordinary paper plate into a fun filled mask",
        supplies: [
            "Leafs",
            "Berries",
            "Acorns",
            "Construction Paper"
            ]
    };
    crafts[17] = {
        name: "Rainbow Cloud",
        image: "crafts/rainbow-cloud.webp",
        description: "Some cotton and color and you'll have a beautiful rainbow",
        supplies: [
            "Paper Plate",
            "Cotton Balls",
            "Construction Paper"
            ]
    };
    crafts[18] = {
        name: "Fun Shaped Crayong",
        image: "crafts/shaped-crayons.jpg",
        description: "Let's melt some crayons together and let them harden into fun shapes",
        supplies: [
            "Broken Crayons",
            "Mold"
            ]
    };
    crafts[19] = {
        name: "Straw Ferris Wheel",
        image: "crafts/straw-faris-wheel.jpg",
        description: "It might be too small to ride, but their farris wheel is the most colorful of all",
        supplies: [
            "Multicolored Straws",
            "Platform"
            ]
    };
    crafts[20] = {
        name: "Sunny String",
        image: "crafts/sun-string.jpg",
        description: "Let's practice our fine motor skills while we weave the string into a fun smile",
        supplies: [
            "Yellow String",
            "Paper Plate",
            "Yellow Construction paper",
            "Yellow and Orange beads"
            ]
    };
    crafts[21] = {
        name: "Tissue Ballerinas",
        image: "crafts/tisue-dancer.jpeg",
        description: "These beautiful dancers will look great on display",
        supplies: [
            "Pipe cleaner",
            "Tissue paper",
            "Elastics"
            ]
    };
    crafts[22] = {
        name: "Toilet Paper Roll Animals",
        image: "crafts/toilet-paper-animals.jpeg",
        description: "These animals are fun for all ages",
        supplies: [
            "Toilet Paper Rolls",
            "Construction Paper",
            "Googly Eyes"
            ]
    };
    crafts[23] = {
        name: "Toilet paper Butterfly",
        image: "crafts/toilet-paper-butterfly.jpg",
        description: "Such a sweet little flyer",
        supplies: [
            "Toilet Paper Rolls",
            "Construction Paper",
            "Googly Eyes",
            "Buttons"
            ]
    };
    crafts[24] = {
        name: "Valentines Jar",
        image: "crafts/valentines-jar.webp",
        description: "So much hearts all in one",
        supplies: [
            "Clay",
            "Glitter"
            ]
    };
    

    res.json(crafts);
});

app.listen(3000,()=>{
    console.log("listening");
});