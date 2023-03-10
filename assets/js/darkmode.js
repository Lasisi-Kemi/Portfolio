
let theme = window.matchMedia("(prefers-color-scheme: dark)")


window.addEventListener("load", event => {
    if(theme.matches || theme.media === "not all") {
        darkTheme()
    }
    else {
        lightTheme()
    }
})
theme.addEventListener("change", event => {
    if(theme.matches || theme.media === "not all") {
        darkTheme()
    }
    else {
        lightTheme()
    }
})

const lightTheme = () => {
    $("body").removeClass("dark").removeClass("bg-dark")
    $("#nav").removeClass("bg-dark")
    $(".about-list").addClass("bg-white").removeClass("bg-dark")
}
const darkTheme = () => {
    $("body").addClass("dark").addClass("bg-dark")
    $("#nav").addClass("bg-dark")
    $(".about-list").removeClass("bg-white").addClass("bg-dark")
}