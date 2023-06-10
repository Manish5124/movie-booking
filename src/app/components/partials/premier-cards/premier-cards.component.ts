import { Component } from '@angular/core';

@Component({
  selector: 'app-premier-cards',
  templateUrl: './premier-cards.component.html',
  styleUrls: ['./premier-cards.component.css']
})
export class PremierCardsComponent {


  movies = [
    {
      name: 'Movie 1',
      theater: 'Theater 1',
      price: '$10',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00360055-cengrmcrja-portrait.jpg'
    },
    {
      name: 'Movie 2',
      theater: 'Theater 2',
      price: '$12',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00347229-vkmuczqnuu-portrait.jpg'
    },
    {
      name: 'Movie 3',
      theater: 'Theater 3',
      price: '$12',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00360223-pqeravtmne-portrait.jpg'
    },
    {
      name: 'Movie 4',
      theater: 'Theater 3',
      price: '$12',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00353834-rjgxakhpcu-portrait.jpg'
    },
    {
      name: 'Movie 5',
      theater: 'Theater 3',
      price: '$12',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00360023-xwyajqfhjc-portrait.jpg'
    }
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
  
}
