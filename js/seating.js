const table = document.getElementById("guestTable").getElementsByTagName("tbody")[0];
const search = document.getElementById("search-text");
const guestList = [
    {   name: "A Test",             table: 0  },
    {   name: "B Test",            table: 0  },
    {   name: "C Test",               table: 0  },
    {   name: "D Test",            table: 0  },
    {   name: "E Test",               table: 0  },
    {   name: "F Test",            table: 0  },
    {   name: "G Test",               table: 0  },
    {   name: "H Test",            table: 0  },
];


guestList.forEach( guest => {
    //create new row
    let row = table.insertRow();
    //create cell for name and populate it
    let name = row.insertCell(0);
    name.innerHTML = guest.name;
    name.classList.add("table-name");
    //create cell for table # and populate it
    let tableNumber = row.insertCell(1);
    tableNumber.innerHTML = guest.table;
    tableNumber.classList.add("table-number");
});


function tableSearch(){
    let textValue;
    let filter = search.value.toUpperCase();
    let tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++){
            let tdata = td[j];
            if (tdata){
                if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1){
                    tr[i].style.display = "";
                    break;
                }else{
                    tr[i].style.display = "none";
                }
            }
        }
    }
}


