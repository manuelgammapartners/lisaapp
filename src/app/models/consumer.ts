
import {Deserializable} from './deserializable.model'
import User from './user';
export default class Consumer extends User implements Deserializable{

    deserialize(input: any): this {
        Object.assign(this,input)
        
        return this;
    }



    
}