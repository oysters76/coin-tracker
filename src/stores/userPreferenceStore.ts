import { defineStore } from "pinia";

export const userPrefStore = defineStore('useUserPreferenceStore',{
    state: ()=>({
        userEmail:"test@test.com", 
        userName:"Smith Adams",
        coinsTracked:[0,1,2], 
        coinsAbove:[3,4], 
        coinsBelow:[5,6]
    }), 
    actions: {
        setUserEmail(email:string) {
            this.userEmail = email; 
        },
        setUserName(name:string){
            this.userName = name; 
        }
    }
});