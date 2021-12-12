

const postsContainer = document.querySelector(".sanpham");

const render = (array, container) => {
    for (let index = 0; index < array.length; index++) {
      const post = array[index];
  
      const divContainer = document.createElement("div");
      
      container.appendChild(divContainer);
      divContainer.innerHTML = `
      
       
        <img src="${post.image}">
      `;
    }
  };

  render(disses, postsContainer);

  const inputSearch = document.querySelector(".input-search");

  inputSearch.addEventListener("input", (event) => {
    // Clear older data
    let lastChild = postsContainer.lastElementChild;
    while (lastChild) {
      postsContainer.removeChild(lastChild);
      lastChild = postsContainer.lastElementChild;
    }
  
    // Get value to search
    const value = event.target.value;
  
    // Filter data by value
    const tempList = [...disses].filter((post) =>
      post.description.includes(value)
    ); // return array
  
    // Fill data to screen
    render(tempList, postsContainer);
  });

 // 
  let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

const noidung1= document.querySelector(".mua");
const contentt=document.querySelector(".noidung");
noidung1.addEventListener("click", () =>{
  
  contentt.innerHTML=`
  <img src="./pngwing.com (2).png" alt="">
  `

})
const go= document.querySelector(".left-col");
go.addEventListener("mouseenter", () =>{
  
  let cuoi = contentt.lastElementChild;
    while (cuoi) {
      contentt.removeChild(cuoi);
      cuoi = contentt.lastElementChild;
    }
})

  