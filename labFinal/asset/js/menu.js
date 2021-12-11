const menu=[
    {
        number: 1,
        type: 'Breakfast',
        data_food: "1",
        image: './asset/img/cha-ca-de-vuong.jpg',
        name: 'Chả cá Đế Vương 1',
        describe:'Món chả cá có nguồn gốc từ thủ đô Thăng Long Hà Nội, được chế biến từ loại cá lăng tươi ngon cùng với phương châm “Phục vụ khách hàng như Đế Vương”, chắc chắn sẽ làm quý khách hài lòng.',
        price: 5.60,
        },
        {
        number: 2,
        type: 'Breakfast',
        data_food: "3",
        image: './asset/img/cha-ca-de-vuong-1.jpg',
        name: 'Lẩu cá lăng',
        describe:'Making a reservation at Délicious restaurant is easy and',
        price: 10,
    },
    {
        number: 3,
        type: 'Lunches',
        data_food: "2",
        image: './asset/img/bao-tu-ca.jpg',
        name: 'Bao tử cá',
        describe:' Chắc hẳn sẽ có khá ít người biết đến những món ăn ngon từ bao tử cá ba sa, tuy nhiên bao tử cá vẫn có thể chế biến được rất nhiều món ngon, vô cùng hấp dẫn và lôi cuốn',
        price: 5.6,
    },
    {
        number: 4,
        type: 'Lunches',
        data_food: "2",
        image: './asset/img/ca-lang-them.png',
        name: 'Cá lăng tươi',
        describe:' Cá lăng lâu nay vẫn là món ăn được các dân nhậu rất ưa thích. Thịt cá lăng có hương vị rất thơm, ngon, bùi và đặc biệt săn chắc.',
        price: 10.8,
    },
    {
        number: 5,
        type: 'Fastfood',
        data_food: "5",
        image: './asset/img/1.png',
        name: 'Cháo cá',
        describe:'Making a reservation at Délicious restaurant is easy and',
        price: 10,
    },
    {
        number: 6,
        type: 'Breakfast',
        data_food: "1",
        image: './asset/img/1.png',
        name: 'Tuna Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
        price: 10,
    },
    {
        number: 7,
        type: 'Lunches',
        data_food: "2",
        image: './asset/img/1.png',
        name: 'Cheese Burger',
        describe:'Making a reservation at Délicious restaurant is easy and',
        price: 10,
    },
    {
        number: 8,
        type: 'Fastfood',
        data_food: "5",
        image: './asset/img/1.png',
        name: 'Hot Dog',
        describe:'Making a reservation at Délicious restaurant is easy and',
        price: 10,
    },
]

const main= document.querySelector('.main-content'); //Dư
const list= document.querySelector('.menu');
let query = window.location.search.substring(1);

//TẠO FUNCTION IN RA DANH SÁCH MỚI
const object=(array,list_info) => {
    for(let i=0; i<array.length;i++){
        const menus= array[i];
        const menu_info= document.createElement('li');
        list_info.appendChild(menu_info);
        menu_info.classList.add("textCenter")
        menu_info.classList.add("mb-40")
        menu_info.classList.add("single-cat")
        menu_info.classList.add("p-1")
        //IN RA DANH SÁCH MỚI
        menu_info.innerHTML=`
            <div class="cat-img">
                <img src="${menus.image}" alt="">
                <div class="numbering">$${menus.price}</div>
            </div>
            <div class="cat-cap">
                <h5><a href="food_detail.html?${menus.number}" tabindex="-1">${menus.name}</a></h5>
                <p>${menus.describe}</p>
                <a href="food_detail.html?${menus.number}" class="browse-btn" tabindex="-1">Chi tiết</a>
            </div>
        `;
    }

    //STYLE
    // const count= list.childElementCount;
    // if(count===2){
    //     list.style.width= '800px';
    // }
    // else{
    //     list.style.width= 'auto';
    // }
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