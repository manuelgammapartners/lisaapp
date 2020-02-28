import User from './user';
import { Deserializable } from './deserializable.model';
export default class Admin extends User implements Deserializable{
    
    deserialize(input: any): this {
  
        Object.assign(this,input)

        return this;
    }
}