function hi(){
    let submenu = document.getElementById('submenu');
    if (submenu.style.display == 'block')
    {
        submenu.style.display = 'none';
    }
    else{
        submenu.style.display = 'block';
    }
    console.log("Hi");
}