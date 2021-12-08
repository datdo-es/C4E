const menu=[
    {
        number: 1,
        type: 'Breakfast',
        tab: 1,
        image: './asset/img/1.png',
        name: 'Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 2,
        type: 'Dinner',
        tab: 3,
        image: './asset/img/1.png',
        name: 'Tuna Steak',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 3,
        type: 'Lunches',
        tab: 2,
        image: './asset/img/1.png',
        name: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 4,
        type: 'Fastfood',
        tab: 5,
        image: './asset/img/1.png',
        name: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 5,
        type: 'Breakfast',
        tab: 1,
        image: './asset/img/1.png',
        name: 'Tuna Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 6,
        type: 'Lunches',
        tab: 2,
        image: './asset/img/1.png',
        name: 'Cheese Burger',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 7,
        type: 'Fastfood',
        tab: 5,
        image: './asset/img/1.png',
        name: 'Hot Dog',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
]

const main= document.querySelector('.Main-content');
const list= document.querySelector('.Menu');
let query = window.location.search.substring(1);

//TẠO FUNCTION IN RA DANH SÁCH MỚI
const object=(array,list_info) => {
    for(let i=0; i<array.length;i++){
        const menus= array[i];
        const menu_info= document.createElement('div');
        menu_info.classList.add('Food');
        list_info.appendChild(menu_info);

        //IN RA DANH SÁCH MỚI
        menu_info.innerHTML=`
            <img src="${menus.image}" alt="">
            <div id="${menus.tab}" class="Name">${menus.name}</div>
            <div class="Describe">${menus.describe}</div>
            <a style="text-decoration: none;" href="food_detail.html?${menus.number}">Order Now</a>
        `;
    }

    //STYLE
    const count= list.childElementCount;
    if(count===2){
        list.style.width= '800px';
    }
    else{
        list.style.width= 'auto';
    }
}
object(menu,list)

//TẠO EVENT TÌM KIẾM

const input= document.querySelector('.Search');
input.addEventListener('input',(event) => {
    //XÓA DANH SÁCH CŨ
    let lastchild= list.lastElementChild;
    while(lastchild){
        list.removeChild(lastchild);
        lastchild= list.lastElementChild;
    }
    
    //LẤY GIÁ TRỊ INPUT VÀ SO SÁNH VỚI DANH SÁCH
    const value= event.target.value.toLowerCase();
    const temp= [...menu].filter((menus) => menus.name.toLowerCase().includes(value));
    
    //IN RA DANH SÁCH MỚI
    object(temp,list);
})

// //TẠO TAB LIST
// const buttons= document.getElementsByClassName('Tab-link');
// const foods= document.getElementsByClassName('Food');
// function showcontent(id) {
//     for(let i=0; i<foods.length; i++){
//         foods[i].style.display= 'none';
//     }
//     document.getElementById(id).style.display= 'block';
// }
// let arr= [];
// for(let i=0; i<menu.length; i++){
//     if(menu[i].tab==query){
//         arr= menu[i];
//     }
// }
// for(let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click',() => {
//         for(let i=0; i<buttons.length; i++){
//             buttons[i].classList.remove('active');
//         }
//         this.className += 'active';
//         showcontent(arr);
//     })
// }
// showcontent(arr);

//TẠO FUNCTION IN RA THÔNG TIN SP
const inform= (array,info) =>{
    const food= array;
    const food_info= document.createElement('div');
    food_info.classList.add('Food');
    info.appendChild(food_info);
    food_info.innerHTML=`
        <img src="${food.image}" alt="1">
        <div class="Right">
            <div>
                <div class="Name">${food.name}</div>
                <hr width="100%">
                <div class="Describe">${food.describe}</div>
            </div>
            <button><a style="text-decoration: none;" href="#">Book a Table</a></button>
        </div>
    `;
}

//TẠO EVENT IN RA THÔNG TIN SP
const detail= document.querySelector('.Food-detail');
let index= [];
for(let i=0; i<menu.length; i++){
    if(menu[i].number==query){
        index= menu[i];
    }
}
inform(index,detail);