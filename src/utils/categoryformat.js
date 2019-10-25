function categoryFormat(res){

       let temp = [];
       for (var i in res) {
         if (temp.indexOf(res[i].cat) === -1) {
           temp.push(res[i].cat)
         }
       }
       let temp2 = [];
       for (var k in res) {
         if (temp2.indexOf(res[k].cat + "," + res[k].sCat) === -1) {
           temp2.push(res[k].cat + "," + res[k].sCat)
         }
       }
       let result = [];
       for (var i in temp) {
         let tempo = {};
         tempo["name"] = temp[i];
         let templist = [];
         for (var j in temp2) {
           let tempo2 = {};
           let a = temp2[j].split(',');
           if (a[0] == temp[i]) {
             tempo2["name"] = a[1];
             let templist2 = [];
             for (var k in res.data) {


               if ((res.data[k].cat + "," + res.data[k].sCat) == temp2[j]) {
                 if (templist2.indexOf(res.data[k].ssCat) == -1) {
                   templist2.push(res.data[k].ssCat)
                 }


               }
             }


             tempo2["sub"] = templist2;

           }

           if (JSON.stringify(tempo2) !== "{}") {
             templist.push(tempo2)
           }

         }
         tempo["sub"] = templist;           
         result.push(tempo)

       }
       console.log(result);
       
       return result
}
export default categoryFormat;