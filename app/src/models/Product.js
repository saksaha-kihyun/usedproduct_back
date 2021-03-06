"use strict";
const crypto = require("crypto");
const res = require("express/lib/response");
const ProductStorage = require("./ProductStorage");


class Product{
    constructor(body){
        this.body = body;
    }
    
    async product_register(){
        const client = this.body;
        try{
        const response = await ProductStorage.save(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }

    async product_update(){
        const client = this.body;
        try{
        const response = await ProductStorage.update(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }

    async product_buy(){
        const client = this.body;
        try{
        const response = await ProductStorage.buy(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }
    

    
    // async product_register() {      
    //         const product = this.body;
    //         var itemInfo = product;
    //         var recID = crypto.randomBytes(20).toString('hex');
    //         var itemInfo = { s};
    //         const response = itemTable.createRecord(itemInfo);ellerID:product.name,itemID:product.name,name:product.name,price:product.name,desc:product.name,timestamp:Date.now()
    
            
    //     }
       
    //     modifyItem() {
    //         const product = this.body;
    //         var itemID = product.name;
    //         var itemList = itemTable.getRecordSet("itemID",itemID);
    //         if(itemList.length > 0) {
    //             itemList[0].name = product.name;
    //             itemList[0].price = product.price;
    //             itemList[0].desc = product.info;
    //             itemList[0].timestamp = Date.now();
    //         }
    //         itemTable.updateRecord(itemList[0]);
    //     }
    
    
    //     registerNewItemState() {
    //         const product = this.body;
    //         var recID = crypto.randomBytes(20).toString('hex');
    //         var itemStateInfo = {sellerID:product.name,itemID:recID,state:ITEM_STATE_ONSALE,buyerID:product.name,purchaseDate:Date.now(),address:product.price,deliverymanID:null};
    //         itemStateTable.createRecord(itemStateInfo);
    //     }
    //     initTable() {
        
    //         // ????????? ?????????
    //         sellerTable.createRecord({partyID:"seller1",partyPW:"1234",name:"?????????",balance:100000});
    //         sellerTable.createRecord({partyID:"seller2",partyPW:"1234",name:"?????????",balance:200000});
            
    //         // ????????? ?????????
    //         buyerTable.createRecord({partyID:"buyer1",partyPW:"1234",name:"?????????",balance:300000});
    //         buyerTable.createRecord({partyID:"buyer2",partyPW:"1234",name:"?????????",balance:400000});
        
    //         // ????????? ?????????
    //         deliverymanTable.createRecord({partyID:"deliveryman1",partyPW:"1234",name:"?????????"});
    //         deliverymanTable.createRecord({partyID:"deliveryman2",partyPW:"1234",name:"?????????"});
            
    //         // ???????????? ?????????
    //         // registerNewItem("seller1","Nikon Camera",500000,"hahahaha");
    //         // registerNewItem("seller1","Sony Camera",800000,"hohohoho");
    //         console.log("??????")
    //         // ???????????? ?????????
    //     }
    // }
    
    // module.exports = Product
    

}


module.exports = Product;

