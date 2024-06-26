function makeBox(){
    // Get size and check that it's a number
    var size = parseInt(document.getElementById("size").value);
    if(isNaN(size)){
        alert("Must enter a number !");
        return
    }
    else{
        // Fill the box
        const  box = new Array(size);
        for(let i = 0; i < box.length; i++){ // Iterate vertically
            for(let j = 0; j < size; j++){ // Iterate horizontally
                if(i != 0 && i !=(size-1) && j != 0 && j != (size-1)){ // Check if the space should be empty
                    box[i] += " ";
                }
                else if(box[i] == undefined){
                    box[i] = "#";
                }
                else{
                    box[i] += "#";
                }
            }
        }
        // Put the answer to String
        var answer = ''
        for(let i = 0; i < box.length; i++){
            answer += box[i]+"\n";
        }
        console.log(answer);
        // Send the answer to the HTML page
        document.getElementById("result").innerHTML = `<pre>${answer}</pre>`;
    }
}