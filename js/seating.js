const table = document.getElementById("guestTable").getElementsByTagName("tbody")[0];
const search = document.getElementById("search-text");
const guestList = [
    {   name: "Beverly Miller",             table: 0  },
    {   name: "Kendall Miller",             table: 0  },
    {   name: "Larry Miller",               table: 0  },
    {   name: "Karen Miller",               table: 0  },
    {   name: "Derek Miller",               table: 0  },
    {   name: "Matthew Shively",            table: 0  },
];


//sort the above list first
guestList.sort(function(a, b){
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if(nameA < nameB){
        return -1;
    }
    if(nameA > nameB){
        return 1;
    }
    return 0;
});

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


