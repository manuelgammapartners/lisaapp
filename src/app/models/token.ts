import { Deserializable } from './deserializable.model'

export default class Token implements Deserializable{

    access_token: string
    expiresAt: string
    deserialize(input: any): this {
        return Object.assign(this,input)
    }


}