toggleMenu = (e) => {
    let toggleMenu = document.querySelector('#mobile-menu');
    e.name === 'menu' ? (e.name = 'close', toggleMenu.classList.remove('hidden')) : (e.name = 'menu', toggleMenu.classList.add('hidden'));
}
toHome = () =>{
    document.getElementById('Home').scrollIntoView({behavior:"smooth"})
}
toEducation = () =>{
    document.getElementById('Education').scrollIntoView({behavior:"smooth"})
}
toSkills = () =>{
    document.getElementById('Skills').scrollIntoView({behavior:"smooth"})
}
toProjects = () =>{
    document.getElementById('Projects').scrollIntoView({behavior:"smooth"})
}
