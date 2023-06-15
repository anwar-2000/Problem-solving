/**
 * @description : Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * 
 * reverse('awesome') // 'emosewa'
   reverse('rithmschool') // 'loohcsmhtir'
 */
 
   function reverse(string : string) : string {
        if(string.length === 0 ){
            return '';
        }
      return  string[string.length-1] + reverse(string.slice(0,-1))
   }

   console.log(reverse('hi am learning data structures and algorithmes')) //semhtirogla dna serutcurts atad gninrael ma ih