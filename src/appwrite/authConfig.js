import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
    client = new Client(); //made a new client
    account ; //didnt pass the client to the account as when the authService is called then only these are initialized to preserve resources.
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    //appwrite services
    async login({email,password,name}){
        try {
            await this.account.createSession(ID.unique(),email, password,name);
        } catch (error) {
            throw error;
        }   
}

const authService = new AuthService();
export default authService;