
let request = require('request');

class baseModel {

    constructor(options){
        
        this.options = options;

    }

    init(){

        return new Promise((resolve,reject)=>{  
            request(this.options, (error, response, body) => {
                if(error){
                    reject(error)
                }

                if(response.statusCode == 200){
                    resolve(body);
                }else{
                    reject(response)
                }
            });
        });

    }

}
  
  module.exports =  baseModel;