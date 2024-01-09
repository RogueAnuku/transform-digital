const buttons = Array.from(document.querySelectorAll("button"));

const getSpans = (buttonId) => {
	const spanId = buttonId.substring(0, buttonId.indexOf("-btn"));
	return document.querySelectorAll(`.${spanId}`);
};

const select = (nodes,isSelected)=>{
	nodes.forEach((element)=>{
		
		if(isSelected){
			element?.classList?.add("selected");
		}else{
			element?.classList?.remove("selected");
		}
	})
}

buttons.forEach((element) => {
	element.addEventListener("mouseover", (e) => {
		select(getSpans(e.target.id),true);
	});
	element.addEventListener("mouseout", (e) => {
		select(getSpans(e.target.id),false);
	});
});
