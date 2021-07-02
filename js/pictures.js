function changeImage() {

    console.log(document.getElementById("change").src);
    if (document.getElementById("change").src == "https://images.hdqwalls.com/wallpapers/bring-me-thanos-n6.jpg")
        document.getElementById("change").src = "https://www.enjpg.com/img/2020/captain-america-35.jpg";
        
    else if (document.getElementById("change").src == "https://www.enjpg.com/img/2020/captain-america-35.jpg")
        document.getElementById("change").src = "https://www.backgroundforphone.com/wp-content/uploads/2021/03/iron-man-4k-wallpaper-scaled.jpg";

    else if (document.getElementById("change").src == "https://www.backgroundforphone.com/wp-content/uploads/2021/03/iron-man-4k-wallpaper-scaled.jpg")
        document.getElementById("change").src = "https://free4kwallpapers.com/uploads/originals/2020/05/18/incredible-hulk-wallpaper.jpg";
    
    else if (document.getElementById("change").src == "https://free4kwallpapers.com/uploads/originals/2020/05/18/incredible-hulk-wallpaper.jpg")
        document.getElementById("change").src = "https://images.hdqwalls.com/wallpapers/black-widow-2020-movie-4k-mh.jpg";
    
    else
        document.getElementById("change").src = "https://images.hdqwalls.com/wallpapers/bring-me-thanos-n6.jpg";
}
