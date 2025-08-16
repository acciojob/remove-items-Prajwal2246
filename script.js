//your JS code here. If required.
const elem= document.getElementById("colorSelect");
document.getElementById("deletebtn").addEventListener("click",()=>{
	const selectedIndex = elem.selectedIndex;
	if(selectedIndex !== -1){
		elem.remove(selectedIndex);
	}
})