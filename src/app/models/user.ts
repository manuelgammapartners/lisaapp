import Avatar from './avatar';
import Token from './token';
import Consumer from './consumer';
import Admin from './admin';
import { Deserializable } from './deserializable.model';

export default class User implements Deserializable{


    
    deserialize(input: any): this {
       /* var user;
    
        switch(input.type){
            case 'admin':
              
              user =  new Admin().deserialize(input);
              break;
      
            case 'service manager':
              
              //user = new Manager().deserialize(input);
      
              break;
      
            case 'consumer':
              
              user = new Consumer().deserialize(input);
             
              break;
            case 'artist':
              console.log("es artista"+obj.type);
              //user = new Artist();
              break;

            default:
              console.log("no tiene ningun tipo");
              break;
          }*/

        return this;
    }
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    token: Token;
    avatar: Avatar;
    //todo create and add here the roles model
    
}