const menu=[
    {
        number: 1,
        type: 'Breakfast',
        data_food: "1",
        image: './asset/img/1.png',
        name: 'Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 2,
        type: 'Dinner',
        data_food: "3",
        image: './asset/img/1.png',
        name: 'Tuna Steak',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 3,
        type: 'Lunches',
        data_food: "2",
        image: './asset/img/1.png',
        name: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 4,
        type: 'Fastfood',
        data_food: "5",
        image: './asset/img/1.png',
        name: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 5,
        type: 'Breakfast',
        data_food: "1",
        image: './asset/img/1.png',
        name: 'Tuna Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 6,
        type: 'Lunches',
        data_food: "2",
        image: './asset/img/1.png',
        name: 'Cheese Burger',
        describe:'Making a reservation at Délicious restaurant is easy and',
    },
    {
        number: 7,
        type: 'Fastfood',
        data_food: "5",
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
        menu_info.setAttribute('id',menus.data_food);
        list_info.appendChild(menu_info);

        //IN RA DANH SÁCH MỚI
        menu_info.innerHTML=`
            <img src="${menus.image}" alt="">
            <div  class="Name">${menus.name}</div>
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

//TẠO TAB LIST
const buttons= document.getElementsByClassName('Tab-link');
const foods= document.getElementsByClassName('Food');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',(element) => {
        //XÓA DANH SÁCH CŨ
        let lastchild= list.lastElementChild;
        while(lastchild){
            list.removeChild(lastchild);
            lastchild= list.lastElementChild;
        }

        //GỌI THẺ TAB
        let id=element.currentTarget.dataset.food;
        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.remove('active');
        }
        element.currentTarget.className += ' active';

        //IN SP CỦA TỪNG THẺ
        const temp= [...menu].filter((menu) => menu.data_food.includes(id));
        object(temp,list);
    });
}

//IN RA TAB ĐẦU TIÊN
const index= [...menu].filter((menu) => menu.data_food.includes('1'));
object(index,list);

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

//IN RA THÔNG TIN SP
const detail= document.querySelector('.Food-detail');
let arr= [];
for(let i=0; i<menu.length; i++){
    if(menu[i].number==query){
        arr= menu[i];
    }
}
inform(arr,detail);