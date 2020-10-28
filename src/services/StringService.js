class StringService{

   /* Return the string with the first letter uppercased */
   uppercaseFirstLetter(string){
      if(string) return string.charAt(0).toUpperCase() + string.slice(1);
   }
}

export default StringService;