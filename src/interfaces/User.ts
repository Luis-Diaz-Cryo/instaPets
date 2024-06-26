import { Contact } from "./Contact"
import { Message } from "./message"

export interface User{
    userName:string,
    email:string,
    password:string
    photoURL:String
    VetMessages:Message[]
    contacts:Contact[]
}