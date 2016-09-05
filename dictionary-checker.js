module.exports = function(){
  this.isWord = function(dict, word){
    var letter = word.substring(0,1);
    var letters = Object.keys(dict.children);
    for(var i = 0; i < letters.length; i++){
      if (letters[i] === letter){
        return this.isWord(dict.children[letter], word.substring(1));
      }
    }
    if (word.length === 0)
      return dict.is_word;
    return false;
  };
};
