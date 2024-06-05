$(document).ready(function () {
    $("#idForm").on("submit", function (event) {
        event.preventDefault();
        let name = $("#name").val();
        let location = $("#location").val();
        let email = $("#email").val();
        let phoneno = $("#phoneno").val();
        let hide = Math.floor(Math.random() * 200);
        let userdata = JSON.parse(localStorage.getItem("profiledetails")) || {};
        userdata[hide] = {
            'name': name,
            'email': email,
            'phone': phoneno,
            'location': location
        };
        localStorage.setItem("profiledetails", JSON.stringify(userdata));
        $('#idForm')[0].reset();
        console.log(userdata);
        displayUserData(userdata);
    });

    let userdata = JSON.parse(localStorage.getItem("profiledetails")) || {};
    displayUserData(userdata);

    function displayUserData(userdata) {
        let tbody = $(".tbody");
        let final = "";
        for (let element in userdata) {
            final += `
                <tr>
                    <td id="nm">${userdata[element].name}</td>
                    <td>${userdata[element].email}</td>
                    <td>${userdata[element].phone}</td>
                    <td>${userdata[element].location}</td>
                    <td><a href="home.html?key=${element}" class="userdatadisplay"><img src="Frame 103.png" alt=""></a></td>
                    <td><a href="#" class="remove" id="${element}"><img src="Vector.png" alt=""></a></td>
                </tr>`;
            console.log(element);
        }
        tbody.html(final);
    }

    $("#input-value").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#table .tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#select").on("change", function () {
        var value = $(this).val().toLowerCase();
        $("#table .tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $(function() {
        $.fn.sortlist = function() {
            var list = this; 
            var items = list.children("tr").get();
            
            items.sort(function(a, b) {
                var item1 = $(a).find("td").eq(0).text().toUpperCase(); 
                var item2 = $(b).find("td").eq(0).text().toUpperCase();
                return (item1 < item2) ? -1 : (item1 > item2) ? 1 : 0; 
            });
            
            $.each(items, function(i, itm) {
                list.append(itm); 
            });
        };
        
       
        $("#sortable").on("click", function() {
            $("tbody").sortlist(); 
        });
    });
    $(function() {
        $.fn.sortlist1 = function() {
            var list = this; 
            var items = list.children("tr").get();
            
            items.sort(function(a, b) {
                var item1 = $(a).find("td").eq(0).text().toUpperCase(); 
                var item2 = $(b).find("td").eq(0).text().toUpperCase();
                return (item1 < item2) ? 1 : (item1 > item2) ? -1 : 0; 
            });
            
            $.each(items, function(i, itm) {
                list.append(itm); 
            });
        };
        
       
        $("#unsort").on("click", function() {
            $("tbody").sortlist1(); 
        });
    });
  
    $(".tbody").on("click", ".remove", function (event) {
        event.preventDefault(); 
        let userdata = JSON.parse(localStorage.getItem("profiledetails")) || {};
        delete userdata[$(this).attr("id")];
        localStorage.setItem("profiledetails", JSON.stringify(userdata));
        displayUserData(userdata);
    });
    var items = $(".tbody tr");
    var numItems = items.length;
    var perPage = 5;

    items.slice(perPage).hide();


        const urlParams = window.location.search;
        const querystring = new URLSearchParams(urlParams);
        const key = querystring.get("key");
        let userdata1 = JSON.parse(localStorage.getItem("profiledetails"));
            $('#username').text(userdata1[key].name);
            $('#username2').text(userdata1[key].name);
            $('#phoneno').text(userdata1[key].phone);
            $('#emalsec').text(userdata1[key].email);
            console.log("Invalid user data or key");   
            
            $(function (){
                getpagination(".tbody")
                function getpagination(table){
                    var lastpage = 1;
                    $()
                }
            })
});
// let form = document.querySelector("form");
// let userNames = document.getElementById("username");
// let username = document.getElementById("username2");
// let emalsec = document.getElementById("emalsec");
// let phoneno = document.getElementById("phoneno");

// let hidden = document.getElementById("hidden");

// // hidden = Math.floor(Math.random() * 200);

// if (form) {
//     form.addEventListener("submit", (event) => {
//         let name = event.target.name.value;
//         let phone = event.target.phoneno.value;
//         let email = event.target.email.value;
//         let location = event.target.location.value;
//         // let hide = event.target.hide.value;
//         hide = Math.floor(Math.random() * 200);
//         event.preventDefault();
//         let userdata = JSON.parse(localStorage.getItem("profiledetails")) ?? {};
//         let b = {
//             [hide]: {
//                 'name': name,
//                 'email': email,
//                 'phone': phone,
//                 'location': location
//             }
//         }
//         Object.assign(userdata, b);
//         localStorage.setItem("profiledetails", JSON.stringify(userdata));
//         event.target.reset();
//     });

// }
// let userdata = JSON.parse(localStorage.getItem("profiledetails")) ?? {};
// let display = () => {
//     let userdata = JSON.parse(localStorage.getItem("profiledetails")) ?? {};
//     let tbody = "";
//     tbody = document.querySelector(".tbody");
//     let final = "";

//     for (let element in userdata) {
//         final += `
//         <tr>
//         <td id ="nm">${userdata[element].name}</td>
//         <td>${userdata[element].email}</td>
//         <td>${userdata[element].phone}</td>
//         <td>${userdata[element].location}</td>
//         <td><a href="home.html?key=${element} "  onclick="userdatadisplay()"><img  src="Frame 103.png" alt=""></a></td>
//         <td><a href="#"><img onclick="removedata(${element})" src="Vector.png" alt=""></a></td>
//         </tr>`;
//     };
//     if (tbody) {
//         tbody.innerHTML = final;
//     }
// };
// let removedata = (index) => {
//     let userdata = JSON.parse(localStorage.getItem("profiledetails")) ?? {};
//     delete userdata[index];
//     localStorage.setItem("profiledetails", JSON.stringify(userdata));
//     display();
// };

// display();

// function searchparams() {
//     const urlParams = window.location.search;
//     const querystring = new URLSearchParams(urlParams);
//     const key = querystring.get("key");
//     let userdata1 = JSON.parse(localStorage.getItem("profiledetails"));
//     userNames.innerText = userdata1[key].name;
//     phoneno.innerText = userdata1[key].phone;
//     emalsec.innerText = userdata1[key].email;   
// }

// function search(){
//     let input = document.getElementById("input-value").value.toUpperCase();
//     let select = document.getElementById("select").value;
//     let table = document.getElementById("table")
//     let tr = table.getElementsByTagName("tr");


//     for(let i=0; i<tr.length; i++){
//         let product = tr[i].getElementsByTagName("td")[0];
//         let product1 = tr[i].getElementsByTagName("td")[1];
//         let product3 = tr[i].getElementsByTagName("td")[3];
//         if(product && product1 && product3){
//          storeitem =  product.innerHTML || product.innerText;
//          storeitem1 =  product1.innerHTML || product1.innerText;
//          storeitem3 =  product3.innerHTML || product3.innerText;
//             if(
//                 (storeitem.toUpperCase().indexOf(input) > -1)
//                 // &&(storeitem1.toUpperCase().indexOf(input) > -1)
//                 &&(storeitem3.toUpperCase() === select || select ==="ALL")) {
//                 tr[i].style.display="";
//             } else{
//                 tr[i].style.display="none";
//             }
//         }
//     }
// }
// let sort=()=>{
//     let i, x,y, rows, shouldSwitch;
//     let table = document.getElementById("table")
//     let switching = true;

//     while (switching) {
//         switching =false;
//     rows= table.rows;
//      for ( i = 1;  i <= rows.length ; i++) {
//             x=rows[i].getElementsByTagName("td")[0];
//             y=rows[i+1].getElementsByTagName("td")[0];
//             if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
//                 shouldSwitch = true;
//                 break;
//               }
//         }
//         if(shouldSwitch){
//             rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
//             switching =true;
//         }

// }
// }
// let unsort=()=>{
//     let i, x,y, rows, shouldSwitch;
//     let table = document.getElementById("table")
//     let switching = true;

//     while (switching) {
//         switching =false;
//     rows= table.rows;
//      for ( i = 1;  i <= rows.length ; i++) {
//             x=rows[i].getElementsByTagName("td")[0];
//             y=rows[i+1].getElementsByTagName("td")[0];
//             if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
//                 shouldSwitch = true;
//                 break;
//               }
//         }
//         if(shouldSwitch){
//             rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
//             switching =true;
//         }

// }
// }




// let tbody = document.querySelector(".tbody");
// let pageUl = document.querySelector(".pagination");
// let itemShow = document.querySelector("#itemshow");
// let tr = tbody.querySelectorAll("tr");
// let emptyBox = [];
// let index = 1;
// let itemPerPage = 5;

// for(let i=0; i<tr.length; i++){ 
//     emptyBox.push(tr[i]);
// }


// itemShow.onchange = giveTrPerPage;
// function giveTrPerPage(){
//     itemPerPage = Number(this.value);

//     displayPage(itemPerPage);
//     pageGenerator(itemPerPage);
//     getpagElement(itemPerPage);
// }

// function displayPage(limit){
//     tbody.innerHTML = '';
//     for(let i=0; i<limit; i++){
//         tbody.appendChild(emptyBox[i]);
//     }
//     const  pageNum = pageUl.querySelectorAll('.list');
//     pageNum.forEach(n => n.remove());
// }
// displayPage(itemPerPage);

// function pageGenerator(getem){
//     const num_of_tr = emptyBox.length;
//     if(num_of_tr <= getem){
//         pageUl.style.display = 'none';
//     }else{
//         pageUl.style.display = 'flex';
//         const num_Of_Page = Math.ceil(num_of_tr/getem);

//         for(i=1; i<=num_Of_Page; i++){
//             const li = document.createElement('li'); 
//             li.className = 'list';
//             const a =document.createElement('a'); 
//             a.href = '#';
//             a.innerText = i;
//             a.setAttribute('data-page', i);
//             li.appendChild(a);
//             pageUl.insertBefore(li,pageUl.querySelector('.next'));
//         }
//     }
// }

// pageGenerator(itemPerPage);
// let pageLink = pageUl.querySelectorAll("a");
// let lastPage =  pageLink.length - 2;
// function pageRunner(page, items, lastPage, active){
//     for(button of page){
//         button.onclick = e=>{
//             const page_num = e.target.getAttribute('data-page');
//             const page_mover = e.target.getAttribute('id');
//             if(page_num != null){
//                 index = page_num;

//             }else{
//                 if(page_mover === "next"){
//                     index++;
//                     if(index >= lastPage){
//                         index = lastPage;
//                     }
//                 }else{
//                     index--;
//                     if(index <= 1){
//                         index = 1;
//                     }
//                 }
//             }
//             pageMaker(index, items, active);
//         }
//     }
// }

// let pageLi = pageUl.querySelectorAll('.list'); pageLi[0].classList.add("active");
// pageRunner(pageLink, itemPerPage, lastPage, pageLi);

// function getpagElement(val){
//     let pagelink = pageUl.querySelectorAll("a");
//     let lastpage =  pagelink.length - 2;
//     let pageli = pageUl.querySelectorAll('.list');
//     pageli[0].classList.add("active");
//     pageRunner(pagelink, val, lastpage, pageli);    
// }

// function pageMaker(index, item_per_page, activePage){
//     const start = item_per_page * index;
//     const end  = start + item_per_page;
//     const current_page =  emptyBox.slice((start - item_per_page), (end-item_per_page));
//     tbody.innerHTML = "";
//     for(let j=0; j<current_page.length; j++){
//         let item = current_page[j];		
//         tbody.appendChild(item);
//     }
//     Array.from(activePage).forEach((e)=>{e.classList.remove("active");});
//      activePage[index-1].classList.add("active");
// }