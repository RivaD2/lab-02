// ajax(file name, ( results => {

  // ajax(file name.forEach( results => { 
  //   new Constructor(results)
  //   }


  const arr = [];
  function hornedAnimal(image_url, title, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    // this. description = description;
    this.keyword = keyword;
    this.horns = horns;

    hornedAnimal.push(this);

    console.log(image_url);
  }

    
     let url = [];

     function showImages(json){
      let srcItems = [];
      srcItems = JSON.parse(json);
     }

    const div = document.getElementById('animals');
    div.innerHTML = '';
     for(let i = 0, i <= srcItems.length; i++ ){
      const nameDiv = document.createElement('div');
      nameDiv.innerHTML = srcItems[i].title
      const img = document.createElement('img');
      img.src = srcItems[i].image_url
     }












  new hornedAnimal("http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg", 'UniWhal','narwhal', 1);

  