// Responsive Board
export function handleCanvasAspectRatio() {
    const canv = document.getElementById("canvas");
    const parent = canv.parentElement;
    const size = (parent.offsetWidth > parent.offsetHeight) ? parent.offsetHeight : parent.offsetWidth;
    canv.style.width = size + "px";
    canv.style.height = size + "px";
    canv.classList.add("ready");
}