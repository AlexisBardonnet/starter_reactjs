import { db } from './FirebaseCloudService';

class ApiService{

   //-----------------------------------------------//
   //------------------- GET -----------------------//
   //-----------------------------------------------//

   /* Get doc data */
   async getData(){
      return db.collection('collection').doc('doc').get().then((doc) => {
         return doc.data();
      }).catch(err => { console.error(err) });
   }

   //-----------------------------------------------//
   //------------------- SET -----------------------//
   //-----------------------------------------------//

   /* Set doc data */
   async setData(element, value){
      return db.collection('collection').doc('doc').set({
         [element] : parseFloat(value)
      },{ merge: true }).catch(err => { console.error(err) });
   }
}

export default ApiService;