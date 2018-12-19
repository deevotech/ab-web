
let baseModel=require('../model/baseModel');
var a =10;

class demoController {
    
    constructor(req,res){

        this.baseurl = 'https://console.ghn.vn/';
        this.res = res;
        this.req = req;
        
    }

    getData(){

		let options = {
                url: this.baseurl+'api/v1/apiv3/GetDistricts',
                method: 'POST',
                json: {
                    "token": "5b990c0994c06b03b2010b5b",
                    // "OrderCode": "DKFNAR4D9"
                    }
            };
          
        let k = new baseModel(options);

        k.init().then(
            (result) => {
                this.res.send(result);
            }
        )

    }
}

module.exports =  demoController;