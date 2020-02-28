import User from "./user";
import  Token from './token' 
import { Deserializable } from './deserializable.model';
export default class Session implements Deserializable{
    user: User
    token: Token
    deserialize(input: any): this {
        Object.assign(this,input)
        this.token = new Token().deserialize(input.token);
        this.user = new User().deserialize(input.user);
        return this;
    }

    


}