import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent {

  title = "MovieCardsComponent"; 




  movies = [
    {
      name: 'Movie 1',
      theater: 'Theater 1',
      price: '$10',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAyMDguN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-tkhtzgpquv-portrait.jpg'
    },
    {
      name: 'Movie 2',
      theater: 'Theater 2',
      price: '$12',
      image: 'https://th.bing.com/th/id/OIP.iZ4hQlj3io_bfl7oA1_bUQHaK-?w=194&h=288&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
    {
      name: 'Movie 3',
      theater: 'Theater 3',
      price: '$12',
      image: 'https://th.bing.com/th/id/OIP.OGVZpS7cGCeeXGEyPkJhaAHaLH?w=194&h=291&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
    {
      name: 'Movie 7',
      theater: 'Theater 7',
      price: '$12',
      image: 'https://th.bing.com/th/id/OIP.OGVZpS7cGCeeXGEyPkJhaAHaLH?w=194&h=291&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
     {
      name: 'Movie 4',
      theater: 'Theater 4',
      price: '$12',
      image: '../../../../assets/captian_marvel.jpeg'
    },
    {
      name: 'Movie 5',
      theater: 'Theater 5',
      price: '$12',
      image: '../../../../assets/avengers.jpeg'
    },
    // Add more movie objects as needed
  ];

   
  
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
   
  slickInit(e:any) {
    console.log('slick initialized');
  }
     
  breakpoint(e:any) {
    console.log('breakpoint');
  }
     
  afterChange(e:any) {
    console.log('afterChange');
  }
     
  beforeChange(e:any) {
    console.log('beforeChange');
  }

  flag=false;
}
