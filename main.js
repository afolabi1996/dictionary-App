const dictionary = [
    {
      word:"apple",
      def:"A round fruit with seeds at its center",
      rel:["mango", "pear", "guava"]
    },
    {
      word:"Ball",
      def:"A rounded object",
      rel:["volley ball", "Basketball", "Cricket"]
    },
    {
      word:"Mountain",
      def:"A body of rock with a specific height",
      rel:["rock", "hills", "valley"]
    },
    {
      word:"Gun",
      def:"An harmful object with a terrific sound",
      rel:["pistle", "grenade", "Ak-47"]
    },
    {
      word:"River",
      def:"A body of water which flows in a specific direction",
      rel:["Ocean", "Sea", "Lake"]
    },
    {
      word:"Flower",
      def:"part of the plant that attracts animal",
      rel:["pollen grain", "stem", "branch"]
    },
    {
      word:"Film",
      def:"An entertaining platforms",
      rel:["Cinema", "Movie", "Stage play"]
    },
    {
      word:"Fruits",
      def:"An edible part of a plant good for the body",
      rel:["root", "flower", "leaves"]
    },
  ];

  // fill the dictionary with words

init = function(){
    for (let i = 0; i < dictionary.length; i++) {  
        document.getElementById('word_list').innerHTML += "<li onClick='show(" + i + ")'>" + dictionary[i].word + "</li>";
    }
    
}

// call the init function when page loads
init();


// display a word, it's definition and related words
show = function(i){
  document.getElementById('word_text').innerHTML = dictionary[i].word;
  document.getElementById('definition').innerHTML = dictionary[i].def;

  var list = "";

  for (var j = 0; j < dictionary[i].rel.length; j++) {
    list += "<li>" + dictionary[i].rel[j] + "</li>";
    document.getElementById('related').innerHTML = list;
  }
}

// show first word in the dictionary when page loads
show(0);

// search functionality
search = function(){
  query = document.getElementById('search').value;

  if (query == ""){
     return;
  }

  found = -1; // initialize found to false

  for (let i = 0; i < dictionary.length; i++) {
    if (query == dictionary[i].word) {
      found =  i;
      break;
    }else{
      document.getElementById('word_text').innerHTML = "Search Error";
      document.getElementById('definition').innerHTML = "Oops sorry word's not here";
      document.getElementById('related').innerHTML = "No related words";
    }
    
  }

  if (found >= 0){
    sow(found);
  }
}