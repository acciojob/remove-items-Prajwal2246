//your JS code here. If required.
const elem= document.getElementById("colorSelect");
document.getElementById("deletebtn").addEventListener("click",()=>{
	const selectedindex = elem.selectedindex;
	if(selectedindex !== -1){
		select.remove(selectindex);
	}
})