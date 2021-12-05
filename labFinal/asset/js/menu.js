const menu=[
    {
        image: './Food1.jpg',
        type: 'Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: './Food1.html',
    },
    {
        image: './Food2.jpg',
        type: 'Tuna Steak',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: './Food2.html',
    },
    {
        image: './Food3.jpg',
        type: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: './Food3.html',
    },
    {
        image: './Food2.jpg',
        type: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: './Food4.html',
    },
    {
        image: './Food1.jpg',
        type: 'Tuna Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: './Food5.html',
    },
    {
        image: './Food3.jpg',
        type: 'Cheese Burger',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: './Food6.html',
    },
    {
        image: './Food1.jpg',
        type: 'Hot Dog',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: './Food7.html',
    },
]

//TẠO FUNCTION IN RA DANH SÁCH MỚI
const object=(array,info) => {
    for(let i=0; i<array.length;i++){
        const menus= array[i];
        const menu_info= document.createElement('div');
        menu_info.classList.add('Food');
        info.appendChild(menu_info);

        //IN RA DANH SÁCH MỚI
        menu_info.innerHTML=`
            <img src="${menus.image}" alt="">
            <div class="Type">${menus.type}</div>
            <div class="Describe">${menus.describe}</div>
            <a href="${menus.link}">Order Now</a>
        `;
    }

    //STYLE CHO 2 SP DUY NHẤT
    const count= list.childElementCount;
    if(count===2){
        list.style.width= '800px';
    }
    else{
        list.style.width= 'auto';
    }

    // //STYLE CHO 0 SP
    // if(count===0){
    //     const image= document.createElement('img');
    //     image.src= './OOPS.png';
    //     list.appendChild(image);
    //     list.style.='center';
    // }
}

//TẠO EVENT TÌM KIẾM
const list= document.querySelector('.Menu');
const input= document.querySelector('.Search')
input.addEventListener('input',(event) => {
    //XÓA DANH SÁCH CŨ
    let lastchild= list.lastElementChild;
    while(lastchild){
        list.removeChild(lastchild);
        lastchild= list.lastElementChild;
    }
    
    //LẤY GIÁ TRỊ INPUT VÀ SO SÁNH VỚI DANH SÁCH
    const value= event.target.value.toLowerCase();
    const temp= [...menu].filter((menus) => menus.type.toLowerCase().includes(value));
    
    //IN RA DANH SÁCH MỚI
    object(temp,list);
})